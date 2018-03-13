import { Injectable } from '@angular/core';
import {RecyclingPoint} from '../models/recycling-point';
import {HttpClient} from '@angular/common/http';
import {Autocomplete} from '../models/autocomplete';
import {AppComponent} from '../app.component';

@Injectable()
export class ApiservicesService {

  // Google API key
  googleApiKey = 'AIzaSyA6NDXsWDtl9BXDYDLZL0vf4ZnCzRBXDYE';

  // Google API osoitteet
  googleGeoCodingApiAddress = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  googleAutocompleteAddress = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
  googleDirectionsAddress = 'https://maps.googleapis.com/maps/api/directions/json?';

  // Kierrätys.info API osoite
  kierratysInfoApiAddress = 'https://kierratys.info/1.5/genxml.php';

  // Käyttäjän koordinaatit. Päivittyy kun käyttäjä lataa sivun ja antaa luvan paikantaa hänet tai kun hän muuttaa osoitetta osoitepalkilla
  userLat = 60.222109;
  userLng = 24.805599;

  // Käyttäjän antama osoite
  address = '';

  // Onko sidenav auki
  sideBarOpen = false;

  // Lista joka pitää sisällään kaikki kierrätyspiste markerit
  recyclingPoints: RecyclingPoint[];

  // Pitää sisällään ehdotetut osoitteet
  options = [];

  // Tänne tallennetaan <marker> XML-data mikä saadaan kierrätys.info APIsta.
  xmlData = [];

  // Pitää sisällään käyttäjän valitsemien roskien kategorioiden ID:t
  recyclingList = [];

  // Reittidata ja boolean onko reitti haettu
  routeSearched = false;
  routeData: any;

  // Onko roskalista mobiililla piilotettu
  listMobileHidden = false;

  infoWind = null;

  constructor(private http: HttpClient) {}

  /* Google Directions --> Haetaan reittiohjeet osoitteesta valittuun kohteeseen.
  *  Destination = päämäärän osoite
  *  Mode = Liikkumisen tyyppi (driving, bicycling, walking ja transit)
  *  Transit modelle voi antaa myös lisäparametreiksi departure_time tai arrival_time (defaulttaa departure_timen tähän hetkeen jos ei annettu)
  EI KÄYTÖSSÄ:-)

  getTransportRoute(destination, mode) {
      this.http.get(this.googleDirectionsAddress + 'origin=' + this.address + '&destination=' + destination + '&mode=' + mode + '&language=fi&key=' + this.googleApiKey).subscribe( (data) => {
        this.routeData = data;
        console.log(data);
        this.routeSearched = true;
      });
  }
*/
  // Sulkee info-windowin reittiosuuden
  closeRouteWindow() {
    this.routeSearched = false;
  }

  // Handlaa sidenavin avaamisen.
  openSideNav() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  // Haetaan käyttäjän koordinaatit selaimen GPS:n ja Google Places APIn avulla.
  getUserCoordinates() {
    console.log('koortinaatit');
    navigator.geolocation.getCurrentPosition( (location) => {
      this.userLat = location.coords.latitude;
      this.userLng = location.coords.longitude;
    });
  }

  // Haetaan annetun osoitteen koordinaatit Google Places APIn avulla.
  getAddressCoordinates(address) {
    this.address = address;
    if (address.length > 0) {
      this.http.get(this.googleGeoCodingApiAddress + address + '&key=' + this.googleApiKey).subscribe( (data) => {
        this.userLat = data['results'][0].geometry.location.lat;
        this.userLng = data['results'][0].geometry.location.lng;
        this.getRecyclingPoints();
      });
    } else {
      console.log('empty address');
    }
  }

  // Haetaan ehdotetut osoitteet Google Autocomplete APIn avulla.
  getAutocomplete(address) {
    this.http.get<Autocomplete>(this.googleAutocompleteAddress + 'input=' +
       address + '&language=fi&components=country:fi&key=' + this.googleApiKey).subscribe( (data) => {
         this.options = [];
         for (const dat of data.predictions) {
           this.options.push(dat.description);
         }
    });
  }

/*
1. katso onko lista tyhjä
2. Jos lista on tyhjä tee uusi olio sille paikka id:listElement
3. Jos lista ei ole tyhjä, Katso onko siellä tämän nimistä paikkaa
4. Jos on lisää sen olion item listaan uusi laji
5. Jos ei ole sen nimistä luo uuden olion
*/
  buildRecyclingPointsList() {
    console.log(this.xmlData);
    this.recyclingPoints = [];
      for (const marker of this.xmlData) {
          let key = false;
          for (const point of this.recyclingPoints) {
              if (key === false && point.place_id === marker.attributes.paikka_id.nodeValue) {
                  point.type_id.push(marker.attributes.laji_id.nodeValue);
                  key = true;
              }
          }
          if (!key) {
              this.createNewRecyclingPoint(marker);
          }
      }
      this.xmlData = [];
  }

  // Haetaan kaikki roskien ID:t mitkä ovat käyttäjän riskalistalla ja tehdään niiden perusteella haut Kierratys.info APIin jonka jälkeen rakennetaan markerit kartalle buildRecyclingPointsList() funktiolla.
  getWasteByRecycleList() {
      for (let i = 0; i < this.recyclingList.length; i++) {
        console.log(this.kierratysInfoApiAddress + '?lat=' + this.userLat + '&lng=' + this.userLng + '&type_id=' + this.recyclingList[i] + '&limit=10');
        this.http.get(this.kierratysInfoApiAddress + '?lat=' + this.userLat + '&lng=' + this.userLng + '&type_id=' + this.recyclingList[i] + '&limit=10', {responseType: 'text'}).subscribe( (data) => {
          const parser = new DOMParser();
          const parsedData = parser.parseFromString(data, 'application/xml');
          const recycleList = Array.prototype.slice.call(parsedData.querySelectorAll('marker'));
          console.log(recycleList);
          for (const marker of recycleList) {
            console.log(marker);
            this.xmlData.push(marker);
          }
          console.log(this.xmlData);
          if (i === (this.recyclingList.length - 1)) {
            this.buildRecyclingPointsList();
          }
        });
      }
  }

  // Päivittää tämän servicen recycleList listan listacomponentilla
  addAddressList(listElement) {
    this.recyclingList = listElement;
  }

  // Haetaan kierrätys pisteet tällä funktiolla jos roskalistassa ei ole yhtään roskaa.
  getRecyclingPointsWithoutList() {
    this.http.get(this.kierratysInfoApiAddress + '?lat=' + Number(this.userLat) + '&lng=' + Number(this.userLng) + '&limit=1', {responseType: 'text'}).subscribe( response => {
        const parser = new DOMParser();
        const parsedData = parser.parseFromString(response, 'application/xml');
        this.xmlData = Array.prototype.slice.call(parsedData.querySelectorAll('marker'));
        this.buildRecyclingPointsList();
    });
  }

  // Haetaan kierrätyspisteet if jos ei roskia listassa muuten else
  getRecyclingPoints() {
    if ( this.recyclingList.length < 1) {
      this.getRecyclingPointsWithoutList();
    } else {
      this.getWasteByRecycleList();
    }
  }

  // Luo uuden markerin ja lisää sen recyclingPoints listaan.
  createNewRecyclingPoint(marker) {
    const list = [];
    list.push(marker.attributes.laji_id.nodeValue);
    this.recyclingPoints.push(new RecyclingPoint(marker.attributes.nimi.nodeValue, Number(marker.attributes.lat.nodeValue),
    Number(marker.attributes.lng.nodeValue),
    list,
    marker.attributes.paikka_id.nodeValue,
    marker.attributes.osoite.nodeValue, marker.attributes.aukiolo.nodeValue,
     marker.attributes.yhteys.nodeValue, marker.attributes.yllapitaja.nodeValue));
  }
  // Katsoo onko selain mobiilikoossa
  isItMobile = () => {
      if (window.innerWidth < 500) {
          return true;
      } else {
          return false;
      }
  }
  // piilottaa listan...
  hideList() {
    console.log('Hidelist function');
    if (this.isItMobile()) {
      const article = document.getElementById('waste-list');
      if (this.listMobileHidden) {
        article.style.bottom = '0';
      } else {
        const articleHeight = article.offsetHeight - 60;
        article.style.bottom = '-' + articleHeight + 'px';
      }
      this.listMobileHidden = !this.listMobileHidden;
    } else {
      const list = document.getElementById('list');
      // vaihdetaan luokkaa
      list.classList.toggle('hidden');
      list.classList.toggle('showed');
    }
  }
}

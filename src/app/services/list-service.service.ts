import { Injectable } from '@angular/core';

@Injectable()
export class ListServiceService {


  typeList = [
    {
      type_id: 100,
      name: 'Sekajäte',
      tags: ['Sekajäte', 'Muovijäte', 'Kertakäyttövaipat', 'Kengät', 'Nahka', 'Keinonahka', 'Kumi', 'Juomalasit',
    'Posliini ja keramiika', 'Pölynimuripussi', 'Tuhka', 'Tupakantumpit', 'Hehkulamput', 'Rikkinäinen tekstiili'],
    },
    {
      type_id: 101,
      name: 'Bio- ja puutarhajäte',
      tags: ['Bio- ja puutarhajäte', 'Hedelmä', 'Vihannes', 'Kuori', 'Banaani', 'Mandariini', 'Peruna',
       'Porkkana', 'Raaste', 'Tähteet', 'Ruoan tähteet' , 'Kalanruodot', 'Liha', 'Kalanruodot',
     'Kasvinosat', 'Kananmunan kuori', 'Kahvi', 'Kahvin porot', 'Teepussi', 'Teen porot', 'Jähmettyneet rasvat',
      'Kuihtuneet kasvit', 'Kukkamulta', 'Pienet luut', 'Pilaantunut elintarvike', 'Puupohjainen kuivike', 'Puutarhajäte'],
    },
    {
      type_id: 102,
      name: 'Energia',
      tags: ['Energiajäte', 'Karkkipaperi', 'Juliste', 'Pikinen puu', 'Lahja-, kääre- ja pakkauspaperi', 'Likainen pahvi tai kartonki',
    'Liimaantuva muistilappu', 'Tarrat ja taustapaperi']
    },
    {
      type_id: 103,
      name: 'Paperi',
      tags: ['Paperi', 'Sanomalehti', 'Aikakausilehti', 'Mainos', 'Kirjekuori', 'Puhelinluettelo',
      'Pehmeäkantiset kirjat', 'Kopiopaperi', 'Piirustuspaperi', ],
    },
    {
      type_id: 104,
      name: 'Pahvi',
      tags: ['Pahvi', 'Aaltopahvi'],
    },
    {
      type_id: 105,
      name: 'Kartonki',
      tags: ['Kartonki', 'Maitotölkki', 'Mehutölkki', 'Paperikassi', 'Kartonkipakkaukset', 'Munakennot',
       'Aaltopahvi', 'Muropakkaus', 'Keksipakkaus', 'Voimapaperi', 'Talouspaperin hylsyt', 'Wc-paperin hylsyt'],
    },
    {
      type_id: 106,
      name: 'Metalli',
      tags: ['Säilyketölkki', 'Juomatölkki', 'Alumiinivuoka', 'Folio', 'Metallikansi', 'Metallikorkki',
       'Tyhjä maalipurkki', 'Tyhjä aerosolpurkki', 'Pienet metalliesineet', 'Polkupyörä', 'Pelti',
        'Metalliputki', 'Metalliosat'],
    },
    {
      type_id: 107,
      name: 'Lasi',
      tags: ['Lasipurkki', 'Lasipullo', 'Väritön lasi'],
    },
    {
      type_id: 108,
      name: 'Vaarallinen jäte',
      tags: ['Lääkkeet, neulat, ruiskut', 'Jäteöljy', 'Öljyinen jäte', 'Maalit, liimat ja lakat',
       'Torjunta- ja desifiointiaineet', ' Tärpätti', 'Tinneri', 'Bensiini', 'Polttoöljy'],
    },
    {
      type_id: 109,
      name: 'Sähkölaitteet (SER)',
      tags: ['Jääkaappi', 'Pesukone', 'Sähköliesi', 'Mikroaaltouuni', 'Pölyimuri', 'Kahvinkeitin', 'Silitysrauta',
        'Leivänpaahdin', 'Valaisimet', 'Tietokone', 'Tulostin', 'Laskin', 'Puhelin', 'Radio', 'Televisio', 'Näyttö',
        'Kamera', 'Digitaalinen mittari', 'Led-lamppu', 'Pora', 'Ompelukone', 'Paristoilla toimivat lelut'],
    },
    {
      type_id: 110,
      name: 'Paristot',
      tags: ['Nappiparisto', 'Paristot', 'Pienet akut', 'Patterit']
    },
    {
      type_id: 111,
      name: 'Muovi',
      tags: ['Muovi pakkaus', 'Jogurttipurkki', 'Valmisruokapakkaus', 'Voirasia', 'Pesuainepullo', 'Saippuapullo',
       'Sampoopullo', 'Muovikassi', 'Muovipussi', 'Muovikääre', 'Muovipullo', 'Muovikanisteri', 'Muovikansi', 'Muovikorkki',
     'Pienet muoviesineet', 'Styroksi', 'Vaahtomuovi', 'Valokuvat / Negatiivit', 'Muoviämpäri'],
    },
    {
      type_id: 113,
      name: 'Tekstiili',
      tags: ['Ehjät vaatteet', 'Paita', 'Pusero', 'Housut', 'Farkut', 'Myssy', 'Takki', 'Shortsit', 'Verhot', 'Pyyhkeet',
    'Lakanat', 'Puhdas tekstiili'],
    },
    {
      type_id: 114,
      name: 'Muu jäte',
      tags: [],
    },
    {
      type_id: 115,
      name: 'Akut',
      tags: ['Akku', 'Auton akku', ],
    },
    {
      type_id: 116,
      name: 'Lamput',
      tags: ['Energiansäästölamppu', 'Loisteputki', 'Pienloisteputki', 'Valosarjat', 'Lamppu'],
    },
    {
      type_id: 117,
      name: 'Puu',
      tags: ['Puu', 'Puu- ja kuormalavat', 'Lauta, lankku, puupölli tai vaneri', 'Puiset huonekalut', 'Rakennus- ja purkupuu',
    'Puuparketti', 'Ovet ja ikkunakehykset', 'Muovipinnoitettu puu', 'Kaapelikela'],
    },
    {
      type_id: 118,
      name: 'Kyllästetty puu',
      tags: ['Kyllästetty puu', 'Sähkötolppa'],
    },
    {
      type_id: 119,
      name: 'Rakennus- ja purkujäte',
      tags: ['Puujäte', 'Metallijäte', 'Kipsilevy', 'Rakennussekajäte', 'Tiili- ja betonijäte', 'Maa- ja kiviaines'],
    },
  ];

  constructor() { }
  // Puskee listan kaikista jäte tagin sanoista
  autocompleteList() {
    const autofillList = [];
    for (const type of this.typeList) {
      for (const tag of type.tags) {
          autofillList.push(tag);
      }
    }
    return autofillList;
  }

  nameToType(name) {
    for (const type of this.typeList) {
        if (type.name === name) {
          return type.type_id;
    }
  }}
  // Tsekkaa searchwordin stringin ja palauttaa listan kaikista sanoista joissa hakusana on
  listParser(searchword) {
    const autofillList = [];
    for (const type of this.typeList) {
      for (const tag of type.tags) {
        const mag = tag.toLowerCase();
        if (mag.includes(searchword.toLowerCase())) {
          autofillList.push(tag);
        }
      }
    }
    return autofillList;
  }
  // Muuntaa type_id Numeron jätteen suomenkieliseksi nimeksi
  typeToName(type_id) {
  for (const type of this.typeList) {
    console.log(type);
    if (type_id === type.type_id) {
      return type.name;
    } else {
      console.log(type_id + ' ' + type.type_id);
    }
  }

  }
  // Muuttaa tietyn sanan sen tyypin type_id numeroksi
  wordToType(searchword) {
    for (const type of this.typeList) {
      for (const tag of type.tags) {
        if (tag.includes(searchword)) {
          return type;
        }
      }
    }
  }
}

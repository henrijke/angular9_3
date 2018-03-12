import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ApiservicesService } from './services/apiservices.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
    MatToolbarModule, MatIconModule, MatInputModule, MatButtonModule, MatOptionModule, MatAutocompleteModule,
    MatFormFieldModule, MatSidenavModule, MatCheckboxModule, MatExpansionModule, MatTabsModule, MatCardModule,
} from '@angular/material';
import {ListServiceService} from './services/list-service.service';
import { ListPipePipe } from './pipes/list-pipe.pipe';
import { WastenamePipe } from './pipes/wastename.pipe';
import {AngularDraggableModule} from 'angular2-draggable';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    MapComponent,
    ListPipePipe,
    WastenamePipe,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6NDXsWDtl9BXDYDLZL0vf4ZnCzRBXDYE'
    }),
    HttpClientModule,
      MatToolbarModule,
      MatIconModule,
      MatInputModule,
      MatButtonModule,
      MatOptionModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      AgmSnazzyInfoWindowModule,
      MatSidenavModule,
      MatExpansionModule,
      AngularDraggableModule,
      MatCardModule,
  ],
  providers: [ApiservicesService, ListServiceService, MapComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

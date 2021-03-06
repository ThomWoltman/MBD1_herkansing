import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Events } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

//pipes
import { CapitalizePipe } from '../pipes/capitalize/capitalize';

//pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PokemonDetailPage } from '../pages/pokemon-detail/pokemon-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//components
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list';
import { LoaderComponent } from '../components/loader/loader';

//service
import { PokemonServiceProvider } from '../providers/pokemon-service/pokemon-service';
import { PokemonlocationProvider } from '../providers/pokemonlocation/pokemonlocation';
import { PokemonCaughtProvider } from '../providers/pokemon-caught/pokemon-caught';
import { HttpClientModule } from '@angular/common/http';

//native
import { Geolocation } from '@ionic-native/geolocation';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Vibration } from '@ionic-native/vibration';
import { Diagnostic } from '@ionic-native/diagnostic';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PokemonDetailPage,
    CapitalizePipe,
    PokemonListComponent,
    LoaderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PokemonDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PokemonServiceProvider,
    SocialSharing,
    Geolocation,
    Vibration,
    Diagnostic,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PokemonlocationProvider,
    Events,
    PokemonCaughtProvider,
  ]
})
export class AppModule {}

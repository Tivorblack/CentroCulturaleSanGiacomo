import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { AreeTematicheComponent } from './pages/aree-tematiche/aree-tematiche.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { SociComponent } from './pages/soci/soci.component';
import { EventiComponent } from './pages/eventi/eventi.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';
import { ContattiComponent } from './pages/contatti/contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    AreeTematicheComponent,
    LocationsComponent,
    SociComponent,
    EventiComponent,
    SponsorComponent,
    ContattiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

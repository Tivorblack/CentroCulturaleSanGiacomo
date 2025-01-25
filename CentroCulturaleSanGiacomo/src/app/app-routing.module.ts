import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { AreeTematicheComponent } from './pages/aree-tematiche/aree-tematiche.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { SociComponent } from './pages/soci/soci.component';
import { EventiComponent } from './pages/eventi/eventi.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';
import { ContattiComponent } from './pages/contatti/contatti.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'aree-tematiche', component; AreeTematicheComponent},
  { path: 'locations', component: LocationsComponent },
  { path: 'soci', component: SociComponent },
  { path: 'eventi', component: EventiComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

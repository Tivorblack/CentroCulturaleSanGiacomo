import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:false
})
export class AppComponent {
  menuOpen = false;

  toggleMenu() {
    console.log('Menu cliccato');
    this.menuOpen = !this.menuOpen;
  }

  titoloPagina: string = '';
  sottotitoloPagina: string = '';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Imposta il titolo in base al percorso
        switch (event.url) {
          case '/home':
            this.titoloPagina = 'Centro Culturale San Giacomo';
            this.sottotitoloPagina = '';
            break;
          case '/aree-tematiche':
            this.titoloPagina = 'Aree Tematiche';
            this.sottotitoloPagina = 'Le aree tematiche del Centro';
            break;
          case '/contatti':
            this.titoloPagina = 'Contatti';
            this.sottotitoloPagina = 'Come contattarci';
            break;
          case '/eventi':
            this.titoloPagina = 'Eventi';
            this.sottotitoloPagina = 'Eventi passati e futuri';
            break;
          case '/locations':
            this.titoloPagina = 'Locations';
            this.sottotitoloPagina = 'Dove si svolgono le nostre proposte';
            break;
          case '/soci':
            this.titoloPagina = 'Soci';
            this.sottotitoloPagina = 'Essere soci...';
            break;
          case '/sponsor':
            this.titoloPagina = 'Sponsor';
            this.sottotitoloPagina = 'I nostri Sponsor';
            break;
          case '/team':
            this.titoloPagina = 'Team';
            this.sottotitoloPagina = 'Il Team!';
            break;
          default:
            this.titoloPagina = 'Centro Culturale San Giacomo';
        }
      }
    });
  }
}
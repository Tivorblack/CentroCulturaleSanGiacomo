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
            this.sottotitoloPagina = 'Centro Culturale San Giacomo';
            break;
          case '/aree-tematiche':
            this.titoloPagina = 'Aree Tematiche';
            this.sottotitoloPagina = 'Aree Tematiche';
            break;
          case '/contatti':
            this.titoloPagina = 'Contatti';
            this.sottotitoloPagina = 'Contatti';
            break;
          case '/eventi':
            this.titoloPagina = 'Eventi';
            this.sottotitoloPagina = 'Eventi';
            break;
          case '/locations':
            this.titoloPagina = 'Locations';
            this.sottotitoloPagina = 'Locations';
            break;
          case '/soci':
            this.titoloPagina = 'Soci';
            this.sottotitoloPagina = 'Soci';
            break;
          case '/sponsor':
            this.titoloPagina = 'Sponsor';
            this.sottotitoloPagina = 'Sponsor';
            break;
          case '/team':
            this.titoloPagina = 'Team';
            this.sottotitoloPagina = 'Team';
            break;
          default:
            this.titoloPagina = 'Pagina Generica';
        }
      }
    });
  }
}
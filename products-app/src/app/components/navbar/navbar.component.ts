import { Component, OnInit } from '@angular/core';
import { routes } from '../../app-routing/app-routing.utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public mainRoutes;
  constructor() {
      this.mainRoutes = routes;
      
    }
    
    ngOnInit() {
 
  }

}

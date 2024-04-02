import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface ServicioToggle {
   screenWidth: number;
   collapsed: boolean;
}

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<ServicioToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  subcollapsed = true;

  toggleCollapse(): void {
    if (this.collapsed = !this.collapsed) {
      this.subcollapsed = false;
    } else {
      this.subcollapsed = !this.subcollapsed;
    }
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

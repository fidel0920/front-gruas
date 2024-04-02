import { Component, OnInit, EventEmitter, Output } from '@angular/core';

interface OptionToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @Output() onToggleOption: EventEmitter<OptionToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  subcollapsed = true;

  toggleCollapse(): void {
    if (this.collapsed = !this.collapsed) {
      this.subcollapsed = false;
      console.log('false');
    } else {
      this.subcollapsed = !this.subcollapsed;
      console.log('true');
    }
    this.onToggleOption.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    this.onToggleOption.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  constructor() { }

  ngOnInit(): void {
  }

}

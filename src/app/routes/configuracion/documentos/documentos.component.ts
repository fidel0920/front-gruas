import { Component, OnInit, EventEmitter, Output } from '@angular/core';

interface OptionToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  @Output() onToggleOption: EventEmitter<OptionToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  subcollapsed = true;

  toggleCollapse(): void {
    if (this.collapsed = !this.collapsed) {
      this.subcollapsed = false;
    } else {
      this.subcollapsed = !this.subcollapsed;
    }
    this.onToggleOption.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    this.onToggleOption.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  constructor() { }

  ngOnInit(): void {
  }

}

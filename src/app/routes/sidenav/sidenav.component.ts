import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  subcollapsed = false;
  subcollapsed2 = false;


  // @HostListener('window:resize', ['$event'])
  // onResize(event: any){
  //   this.screenWidth = window.innerWidth;
  //   if (this.screenWidth <= 768) {
  //     this.collapsed = false;
  //     this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  //   }
  // }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  getDashClass(): string{
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'dashboard1';
    }
    return styleClass;
  }
  openSubSidenav(): void{
    if (this.subcollapsed = !this.subcollapsed) {
      this.subcollapsed2 = false;
    }
  }
  openSubSidenav2(): void{ 
    if (this.subcollapsed2 = !this.subcollapsed2) {
      this.subcollapsed = false;
    }
  }
  closesubs(): void{
    this.subcollapsed = false;
    this.subcollapsed2 = false;
  }
  salir(): void{
    window.location.href = '/login'
  }

  constructor() { }

}

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './routes/body/body.component';
import { RoutesComponent } from './routes/routes.component';
import { SidenavComponent } from './routes/sidenav/sidenav.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RoutesComponent,
        SidenavComponent,
        BodyComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
        AppRoutingModule
    ]
})
export class AppModule { }

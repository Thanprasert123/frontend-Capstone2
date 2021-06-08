import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
declarations: [
AppComponent,
HeaderComponent,
MenuComponent,
FooterComponent,
DashboardComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
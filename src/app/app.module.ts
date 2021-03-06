import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { FishesService } from './service/fishes-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    HomeComponent,
    DashboardComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, HttpModule, InfiniteScrollModule, FormsModule, routing, LazyLoadImagesModule, 
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBu2szrR4-qMa9xsS203c-NGDEY1O8yB_0'
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [FishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

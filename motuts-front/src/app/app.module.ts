import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserprofilesComponent } from './views/userprofiles/userprofiles.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserProfileModalComponent } from './views/userprofiles/edit-user-profile-modal/edit-user-profile-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    UserprofilesComponent,
    EditUserProfileModalComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ProfilesService } from './../../services/userprofiles/userprofiles.service';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/common/rest/rest.service';
import { environment } from 'src/environments/environment';

import { faUserEdit } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-userprofiles',
  templateUrl: './userprofiles.component.html',
  styleUrls: ['./userprofiles.component.css']
})
export class UserprofilesComponent implements OnInit {

  private apiUserProfilesBaseUrl = environment.apiUserProfilesBaseUrl;
  public userProfiles:any = [];
  faUserEdit = faUserEdit;

  constructor(private restService:RestService) { }

  ngOnInit(): void {

    this.cargarPerfiles();
  }

  public cargarPerfiles() {
    this.restService.get(`${this.apiUserProfilesBaseUrl}/profiles`)
    .subscribe(respuesta => {
      console.log(respuesta);
      this.userProfiles = respuesta; });
  }
}

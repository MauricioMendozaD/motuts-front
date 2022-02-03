import { environment } from './../../../environments/environment';
import { RestService } from './../common/rest/rest.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService implements OnInit {

  private apiUserProfilesBaseUrl = environment.apiUserProfilesBaseUrl;
  public userProfiles:any = [];

  constructor(private restService:RestService) { }

  ngOnInit(): void {
      //this.cargarPerfiles();
  }

  public cargarPerfiles():any {
    this.restService.get(`${this.apiUserProfilesBaseUrl}/profiles`)
    .subscribe(respuesta => {
      //console.log(respuesta);
      this.userProfiles = respuesta; });
    return this.userProfiles;
  }


}

import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PeopleCommon {
  public ImagePath = [
    { "image": "assets/img/images.jpg", "name": "Adam Boris", "detail": "Partner" },
    { "image": "assets/img/images1.jpg", "name": "Adam Bryan", "detail": "Partner" },
    { "image": "assets/img/images2.jpg", "name": "Andy Shober", "detail": "Partner" },
    { "image": "assets/img/images3.jpg", "name": "Ashley Usher", "detail": "Partner - Product & Technology;CMS,CSPO" },
    { "image": "assets/img/images4.jpg", "name": "Barry Puncus", "detail": "Partner - Finance and Operations" },
    { "image": "assets/img/images5.jpg", "name": "Ben de la Cretaz", "detail": "Partner -Revenue Growth" },
    { "image": "assets/img/images6.jpg", "name": "Bert Harkins", "detail": "Partner - Finance Startegy " },
    { "image": "assets/img/images7.jpg", "name": "Billy Keneally", "detail": "Partner - Finance & Accouting" },
    { "image": "assets/img/images8.jpg", "name": "Bob Borgan", "detail": "Managing Partner - Chicago" },
    { "image": "assets/img/images9.jpg", "name": "Brad Miller", "detail": "Managing Partner" },

  ]
  public HeaderName = "Our People";
  public SubHeader = "World-Class excutive,engineering,quility and product development talent at your fingertips";
  public Expertise = [
    { "value": "Expertise", "text": "Expertise" },
    { "value": "Developer", "text": "Developer" },
    { "value": "Designer", "text": "Designer" }
  ];
  public Role = [
    { "value": "Role", "text": "Role" },
    { "value": "Admin", "text": "Admin" },
    { "value": "SuperAdmin", "text": "Super Admin" },
    { "value": "User", "text": "User" }];
}

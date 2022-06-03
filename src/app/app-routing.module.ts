import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { LayoutComponent } from './shared/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'people', component: PeopleComponent },
      { path: 'home', component: HomeComponent },
      { path: 'capabilities', component: CapabilitiesComponent },
      { path: 'contactus', component: ContactUsComponent },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

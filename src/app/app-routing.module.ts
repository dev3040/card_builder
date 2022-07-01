import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { ViewCertificateComponent } from './components/view-certificate/view-certificate.component';

const routes: Routes = [
  {path:"",component:AddDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

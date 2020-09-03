import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContComponent } from './cont/cont.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { CareerComponent } from './career/career.component';


const routes: Routes = [

  {path:'',redirectTo: '/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'cont',component:ContComponent},
  {path:'career',component:CareerComponent},  
  {path:'product',component:ProductComponent},
  {path:'service',component:ServiceComponent},


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

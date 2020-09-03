import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';//button
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { AboutComponent } from './about/about.component';
import { ContComponent } from './cont/cont.component';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CareerComponent } from './career/career.component';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContComponent,
    ProductComponent,
    ServiceComponent,
    FooterComponent,
    NavComponent,
    CareerComponent,
   
    
 
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTabsModule,
    MatRadioModule,
    MatTableModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCarouselModule.forRoot(),
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    MatSelectModule,
    MatNativeDateModule,
    
    
    
    
    
    

],

exports: [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatTabsModule,
  MatRadioModule,
  MatTableModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatDialogModule,
  MatSelectModule,
  MatNativeDateModule,
  
 
  
  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

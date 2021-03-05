import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { DeleteProductModelComponent } from './components/delete-product-model/delete-product-model.component';
import { AddOrEditProductModelComponent } from './components/add-or-edit-product-model/add-or-edit-product-model.component';
import { ClarityModule } from "@clr/angular";

import { ShowProductsComponent } from './components/show-products/show-products.component';
import { WizardBasicComponent } from './wizard-basic/wizard-basic.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    HomeComponent,
    DeleteProductModelComponent,
    AddOrEditProductModelComponent,
    ShowProductsComponent,
    WizardBasicComponent,
      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    ClarityModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

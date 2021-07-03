import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewproductsComponent } from '../viewproducts/viewproducts.component';



@NgModule({
  declarations: [
    ViewproductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:    
    [ CommonModule, FormsModule ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableProdComponent } from './table-prod/table-prod.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableProdComponent],
  exports: [TableProdComponent]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportProfissionalComponent } from './report-profissional/report-profissional.component';
import { ReportUnidadeComponent } from './report-unidade/report-unidade.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [ReportsComponent, ReportProfissionalComponent, ReportUnidadeComponent],
  exports: [ReportsComponent]
})
export class ReportsModule { }

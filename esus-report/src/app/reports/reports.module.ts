import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { SharedModule } from '../shared/shared.module';
import { ReportProfissionalComponent } from './report-profissional/report-profissional.component';
import { ReportUnidadeComponent } from './report-unidade/report-unidade.component';
import { ReportsRouting } from './reports.routing';
import { ReportsService } from './reports.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ReportsRouting,
    RouterModule
  ],
  declarations: [ReportsComponent, ReportProfissionalComponent, ReportUnidadeComponent],
  providers: [ReportsService]
})
export class ReportsModule { }

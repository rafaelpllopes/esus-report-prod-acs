import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportUnidadeComponent } from './report-unidade/report-unidade.component';
import { ReportProfissionalComponent } from './report-profissional/report-profissional.component';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
    {
        path: '',
        component: ReportsComponent,
        children: [
            {
                path: 'unidade',
                component: ReportUnidadeComponent
            },
            {
                path: 'profissional',
                component: ReportProfissionalComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRouting { }
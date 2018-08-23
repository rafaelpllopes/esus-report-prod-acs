import { ReportsService } from './../reports.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'report-unidade',
  templateUrl: './report-unidade.component.html',
  styleUrls: ['./report-unidade.component.css']
})
export class ReportUnidadeComponent implements OnInit {

  unidadeForm: FormGroup;
  unidades$: Observable<any>;
  anos: number[];
  meses;
  producoes$: Observable<any>;

  constructor(
    private reportService: ReportsService,
    private formBuild: FormBuilder
  ) { }

  ngOnInit() {
    this.unidadeForm = this.formBuild.group({
      unidade: ['', Validators.required],
      mes: ['', Validators.required],
      ano: ['', Validators.required]
    });
    this.unidades$ = this.reportService.getUnidades();
    this.anos = this.reportService.getAnos();
    this.meses = this.reportService.getMeses();
  }

  pesquisar() {
    let unidade = this.unidadeForm.value.unidade;
    let mes = this.unidadeForm.value.mes;
    let ano = this.unidadeForm.value.ano;
    this.producoes$ = this.reportService.getProdUnidade(mes, ano, unidade);
  }

}

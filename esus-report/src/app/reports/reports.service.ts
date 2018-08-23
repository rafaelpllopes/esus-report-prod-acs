import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = environment.api;

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    private http: HttpClient
  ) { }

  getProfissionais() {
    return this.http.get(`${API}/profissionais`);
  }

  getUnidades() {
    return this.http.get(`${API}/unidades`);
  }

  getMeses() {
    return [
      {mes: "Janeiro", codigo: "1"},
      {mes: "Fevereiro", codigo: "2"},
      {mes: "Março", codigo: "3"},
      {mes: "Abril", codigo: "4"},
      {mes: "Maio", codigo: "5"},
      {mes: "Junho", codigo: "6"},
      {mes: "Julho", codigo: "7"},
      {mes: "Agosto", codigo: "8"},
      {mes: "Setembro", codigo: "9"},
      {mes: "Outubro", codigo: "10"},
      {mes: "Novembro", codigo: "11"},
      {mes: "Dezembro", codigo: "12"}
    ];
  }

  getAnos(): number[]{
    let anos = [];
    for (let ano = 2015; ano <= new Date().getFullYear(); ano++) {
      anos.push(ano);
    }

    return anos;
  }

  getProdUnidade(mes: string, ano: string, unidade: string) {
    return this.http
      .get(`${API}/producao?mes=${mes}&ano=${ano}&unidade=${unidade}`);
  }

}

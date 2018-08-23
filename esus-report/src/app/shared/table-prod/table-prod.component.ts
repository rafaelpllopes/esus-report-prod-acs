import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-prod',
  templateUrl: './table-prod.component.html',
  styleUrls: ['./table-prod.component.css']
})
export class TableProdComponent implements OnInit {

  @Input() producoes;

  constructor() { }

  ngOnInit() { }

}

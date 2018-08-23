import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProdComponent } from './table-prod.component';

describe('TableProdComponent', () => {
  let component: TableProdComponent;
  let fixture: ComponentFixture<TableProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

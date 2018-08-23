import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUnidadeComponent } from './report-unidade.component';

describe('ReportUnidadeComponent', () => {
  let component: ReportUnidadeComponent;
  let fixture: ComponentFixture<ReportUnidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportUnidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

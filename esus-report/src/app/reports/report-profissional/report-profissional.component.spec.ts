import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProfissionalComponent } from './report-profissional.component';

describe('ReportProfissionalComponent', () => {
  let component: ReportProfissionalComponent;
  let fixture: ComponentFixture<ReportProfissionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProfissionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

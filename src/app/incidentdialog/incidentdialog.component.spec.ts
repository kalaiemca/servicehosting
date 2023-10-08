import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentdialogComponent } from './incidentdialog.component';

describe('IncidentdialogComponent', () => {
  let component: IncidentdialogComponent;
  let fixture: ComponentFixture<IncidentdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentdialogComponent]
    });
    fixture = TestBed.createComponent(IncidentdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

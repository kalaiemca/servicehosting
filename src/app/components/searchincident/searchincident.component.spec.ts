import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchincidentComponent } from './searchincident.component';

describe('SearchincidentComponent', () => {
  let component: SearchincidentComponent;
  let fixture: ComponentFixture<SearchincidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchincidentComponent]
    });
    fixture = TestBed.createComponent(SearchincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

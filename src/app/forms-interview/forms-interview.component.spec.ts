import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInterviewComponent } from './forms-interview.component';

describe('FormsInterviewComponent', () => {
  let component: FormsInterviewComponent;
  let fixture: ComponentFixture<FormsInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsInterviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

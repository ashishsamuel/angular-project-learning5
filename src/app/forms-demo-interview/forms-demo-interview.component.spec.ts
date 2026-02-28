import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDemoInterviewComponent } from './forms-demo-interview.component';

describe('FormsDemoInterviewComponent', () => {
  let component: FormsDemoInterviewComponent;
  let fixture: ComponentFixture<FormsDemoInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsDemoInterviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsDemoInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

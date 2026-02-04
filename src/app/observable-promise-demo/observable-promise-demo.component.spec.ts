import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePromiseDemoComponent } from './observable-promise-demo.component';

describe('ObservablePromiseDemoComponent', () => {
  let component: ObservablePromiseDemoComponent;
  let fixture: ComponentFixture<ObservablePromiseDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablePromiseDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservablePromiseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

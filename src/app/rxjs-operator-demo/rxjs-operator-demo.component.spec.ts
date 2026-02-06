import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperatorDemoComponent } from './rxjs-operator-demo.component';

describe('RxjsOperatorDemoComponent', () => {
  let component: RxjsOperatorDemoComponent;
  let fixture: ComponentFixture<RxjsOperatorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsOperatorDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsOperatorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

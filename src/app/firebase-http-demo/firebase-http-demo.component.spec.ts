import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseHttpDemoComponent } from './firebase-http-demo.component';

describe('FirebaseHttpDemoComponent', () => {
  let component: FirebaseHttpDemoComponent;
  let fixture: ComponentFixture<FirebaseHttpDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirebaseHttpDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirebaseHttpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

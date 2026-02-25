import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournotfourComponent } from './fournotfour.component';

describe('FournotfourComponent', () => {
  let component: FournotfourComponent;
  let fixture: ComponentFixture<FournotfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FournotfourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FournotfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

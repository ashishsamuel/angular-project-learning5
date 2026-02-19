import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDemoInteviewComponent } from './child-demo-inteview.component';

describe('ChildDemoInteviewComponent', () => {
  let component: ChildDemoInteviewComponent;
  let fixture: ComponentFixture<ChildDemoInteviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildDemoInteviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildDemoInteviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

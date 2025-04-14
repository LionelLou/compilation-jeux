import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSimonComponent } from './super-simon.component';

describe('SuperSimonComponent', () => {
  let component: SuperSimonComponent;
  let fixture: ComponentFixture<SuperSimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperSimonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperSimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

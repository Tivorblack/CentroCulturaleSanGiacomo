import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreeTematicheComponent } from './aree-tematiche.component';

describe('AreeTematicheComponent', () => {
  let component: AreeTematicheComponent;
  let fixture: ComponentFixture<AreeTematicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreeTematicheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreeTematicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

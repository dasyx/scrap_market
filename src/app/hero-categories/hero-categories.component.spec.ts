import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCategoriesComponent } from './hero-categories.component';

describe('HeroCategoriesComponent', () => {
  let component: HeroCategoriesComponent;
  let fixture: ComponentFixture<HeroCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

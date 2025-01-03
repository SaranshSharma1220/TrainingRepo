import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecarouselComponent } from './homecarousel.component';

describe('HomecarouselComponent', () => {
  let component: HomecarouselComponent;
  let fixture: ComponentFixture<HomecarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomecarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

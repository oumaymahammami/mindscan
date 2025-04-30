import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSlideComponent } from './generate-slice.component';

describe('GenerateSlideComponent', () => {
  let component: GenerateSlideComponent;
  let fixture: ComponentFixture<GenerateSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

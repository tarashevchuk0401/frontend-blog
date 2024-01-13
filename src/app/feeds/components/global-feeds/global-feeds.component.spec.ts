import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFeedsComponent } from './global-feeds.component';

describe('GlobalFeedsComponent', () => {
  let component: GlobalFeedsComponent;
  let fixture: ComponentFixture<GlobalFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalFeedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPurchaseModalComponent } from './confirm-purchase-modal.component';

describe('ConfirmPurchaseModalComponent', () => {
  let component: ConfirmPurchaseModalComponent;
  let fixture: ComponentFixture<ConfirmPurchaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmPurchaseModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPurchaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

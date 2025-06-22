import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnmComponent } from './knm.component';

describe('KnmComponent', () => {
  let component: KnmComponent;
  let fixture: ComponentFixture<KnmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnmComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

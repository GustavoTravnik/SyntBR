import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintesesComponent } from './sinteses.component';

describe('SintesesComponent', () => {
  let component: SintesesComponent;
  let fixture: ComponentFixture<SintesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SintesesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SintesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

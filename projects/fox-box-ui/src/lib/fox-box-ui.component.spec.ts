import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxBoxUiComponent } from './fox-box-ui.component';

describe('FoxBoxUiComponent', () => {
  let component: FoxBoxUiComponent;
  let fixture: ComponentFixture<FoxBoxUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoxBoxUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxBoxUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

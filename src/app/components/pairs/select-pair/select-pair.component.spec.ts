import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPairComponent } from './select-pair.component';

describe('SelectPairComponent', () => {
  let component: SelectPairComponent;
  let fixture: ComponentFixture<SelectPairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

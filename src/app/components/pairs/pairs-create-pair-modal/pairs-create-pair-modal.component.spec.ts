import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairsCreatePairModalComponent } from './pairs-create-pair-modal.component';

describe('PairsCreatePairModalComponent', () => {
  let component: PairsCreatePairModalComponent;
  let fixture: ComponentFixture<PairsCreatePairModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PairsCreatePairModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PairsCreatePairModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

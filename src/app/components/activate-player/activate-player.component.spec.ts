import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePlayerComponent } from './activate-player.component';

describe('ActivatePlayerComponent', () => {
  let component: ActivatePlayerComponent;
  let fixture: ComponentFixture<ActivatePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivatePlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivatePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

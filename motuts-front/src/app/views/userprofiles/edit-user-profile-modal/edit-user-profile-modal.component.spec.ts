import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserProfileModalComponent } from './edit-user-profile-modal.component';

describe('EditUserProfileModalComponent', () => {
  let component: EditUserProfileModalComponent;
  let fixture: ComponentFixture<EditUserProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserProfileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

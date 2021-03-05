import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditProductModelComponent } from './add-or-edit-product-model.component';

describe('AddOrEditProductModelComponent', () => {
  let component: AddOrEditProductModelComponent;
  let fixture: ComponentFixture<AddOrEditProductModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditProductModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditProductModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

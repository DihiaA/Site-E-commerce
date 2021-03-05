import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductModelComponent } from './delete-product-model.component';

describe('DeleteProductModelComponent', () => {
  let component: DeleteProductModelComponent;
  let fixture: ComponentFixture<DeleteProductModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProductModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprodutoComponent } from './edit-produto.component';

describe('EditprodutoComponent', () => {
  let component: EditprodutoComponent;
  let fixture: ComponentFixture<EditprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprodutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

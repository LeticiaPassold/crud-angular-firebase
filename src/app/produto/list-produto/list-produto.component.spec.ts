import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprodutoComponent } from './list-produto.component';

describe('ListprodutoComponent', () => {
  let component: ListprodutoComponent;
  let fixture: ComponentFixture<ListprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListprodutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

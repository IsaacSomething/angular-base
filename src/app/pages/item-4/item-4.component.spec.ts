import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item4Component } from './item-4.component';

describe('Item4Component', () => {
  let component: Item4Component;
  let fixture: ComponentFixture<Item4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Item4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Item4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

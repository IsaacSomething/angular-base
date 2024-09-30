import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item0Component } from './item-0.component';

describe('Item0Component', () => {
  let component: Item0Component;
  let fixture: ComponentFixture<Item0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Item0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Item0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTodosComponent } from './std-todos.component';

describe('StdTodosComponent', () => {
  let component: StdTodosComponent;
  let fixture: ComponentFixture<StdTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

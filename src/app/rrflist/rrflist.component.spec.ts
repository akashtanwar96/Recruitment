/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RrflistComponent } from './rrflist.component';

describe('RrflistComponent', () => {
  let component: RrflistComponent;
  let fixture: ComponentFixture<RrflistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrflistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

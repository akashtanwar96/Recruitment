/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RrfComponent } from './rrf.component';

describe('RrfComponent', () => {
  let component: RrfComponent;
  let fixture: ComponentFixture<RrfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

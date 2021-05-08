import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerProblemAlertComponent } from './server-problem-alert.component';

describe('ServerProblemAlertComponent', () => {
  let component: ServerProblemAlertComponent;
  let fixture: ComponentFixture<ServerProblemAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerProblemAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerProblemAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

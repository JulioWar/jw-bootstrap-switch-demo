import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [JWBootstrapSwitchModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

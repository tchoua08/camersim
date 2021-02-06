import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppelComponent } from './appel.component';

describe('AppelComponent', () => {
  let component: AppelComponent;
  let fixture: ComponentFixture<AppelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

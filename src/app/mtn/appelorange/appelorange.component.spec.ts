import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppelorangeComponent } from './appelorange.component';

describe('AppelorangeComponent', () => {
  let component: AppelorangeComponent;
  let fixture: ComponentFixture<AppelorangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppelorangeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppelorangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternetorangeComponent } from './internetorange.component';

describe('InternetorangeComponent', () => {
  let component: InternetorangeComponent;
  let fixture: ComponentFixture<InternetorangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetorangeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternetorangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

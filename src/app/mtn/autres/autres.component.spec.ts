import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutresComponent } from './autres.component';

describe('AutresComponent', () => {
  let component: AutresComponent;
  let fixture: ComponentFixture<AutresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

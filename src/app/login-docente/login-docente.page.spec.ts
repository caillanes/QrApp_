import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginDocentePage } from './login-docente.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LoginDocentePage', () => {
  let component: LoginDocentePage;
  let fixture: ComponentFixture<LoginDocentePage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(LoginDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthService } from '../servicios/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authService: AuthService;
  let router: Router;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: { login: () => of(true) } },
        { provide: Router, useValue: { navigate: () => {} } },
      ]
    });
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthService.login when login is called', () => {
    const spy = spyOn(authService, 'login').and.callThrough();
    component.username = 'test';
    component.password = 'test';
    component.login();
    expect(spy).toHaveBeenCalledWith('test', 'test');
    // Esta prueba verifica que se llama al método 'login' del servicio AuthService cuando se llama al método 'login' del componente.
  });
  
  it('should navigate to /qr-scanner when login is successful', () => {
    const spy = spyOn(router, 'navigate');
    component.username = 'test';
    component.password = 'test';
    component.login();
    expect(spy).toHaveBeenCalledWith(['/qr-scanner']);
    // Esta prueba verifica que se navega a la ruta '/qr-scanner' cuando el inicio de sesión es exitoso.
  });
});
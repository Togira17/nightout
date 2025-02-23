import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CookieGuard } from './cookie.guard';
import { CookieService } from '../services/cookie.service';

describe('CookieGuard', () => {
  let guard: CookieGuard;
  let cookieService: jasmine.SpyObj<CookieService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const cookieSpy = jasmine.createSpyObj('CookieService', ['cookiesAceptadas']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        CookieGuard,
        { provide: CookieService, useValue: cookieSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    guard = TestBed.inject(CookieGuard);
    cookieService = TestBed.inject(CookieService) as jasmine.SpyObj<CookieService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('debería permitir el acceso si las cookies han sido aceptadas', () => {
    cookieService.cookiesAceptadas.and.returnValue(true);
    expect(guard.canActivate()).toBeTrue();
  });

  it('debería bloquear el acceso y redirigir si las cookies no han sido aceptadas', () => {
    cookieService.cookiesAceptadas.and.returnValue(false);
    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/cookies']); // Redirige a la página de cookies
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrGeneratorPage } from './qr-generator.page';
import { MatDialog } from '@angular/material/dialog';

describe('QrGeneratorPage', () => {
  let component: QrGeneratorPage;
  let fixture: ComponentFixture<QrGeneratorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrGeneratorPage ],
      providers: [
        { provide: MatDialog, useValue: {} },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrGeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
    // Esta prueba verifica que el componente se haya creado correctamente.
  });
  
  it('should create animation in ngAfterViewInit when cardElements is not empty', () => {
    component['cardElements'] = {
      length: 1,
      first: { nativeElement: {} }
    } as any;
    component.ngAfterViewInit();
    expect(component['animation']).toBeDefined();
    // Esta prueba verifica que se crea una animación cuando el método ngAfterViewInit se ejecuta y cardElements no está vacío.
  });
  
  it('should call animation.play in play', () => {
    component['animation'] = { play: () => {} } as any;
    const spy = spyOn(component['animation'], 'play');
    component.play();
    expect(spy).toHaveBeenCalled();
    // Esta prueba verifica que el método play de la animación se llama cuando se ejecuta el método play del componente.
  });
});
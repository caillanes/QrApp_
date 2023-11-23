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
  });
});

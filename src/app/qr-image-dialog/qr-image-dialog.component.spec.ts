import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrImageDialogComponent } from './qr-image-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('QrImageDialogComponent', () => {
  let component: QrImageDialogComponent;
  let fixture: ComponentFixture<QrImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrImageDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
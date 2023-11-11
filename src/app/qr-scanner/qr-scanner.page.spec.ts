import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrScannerPage } from './qr-scanner.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('QrScannerPage', () => {
  let component: QrScannerPage;
  let fixture: ComponentFixture<QrScannerPage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(QrScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

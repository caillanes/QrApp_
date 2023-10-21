import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambContrPage } from './camb-contr.page';

describe('CambContrPage', () => {
  let component: CambContrPage;
  let fixture: ComponentFixture<CambContrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CambContrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

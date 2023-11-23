import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { QueryList } from '@angular/core';
import { Animation, AnimationController, IonCard } from '@ionic/angular';
import * as QRCode from 'qrcode';
import { MatDialog } from '@angular/material/dialog';
import { QrImageDialogComponent } from '../qr-image-dialog/qr-image-dialog.component';


@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.page.html',
  styleUrls: ['./qr-generator.page.scss'],
})
export class QrGeneratorPage implements OnInit {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;
  
  private animation!: Animation;

  menuType: string = 'overlay';
  qrData = '';
  isQRExpanded = false;
  
  constructor(public dialog: MatDialog, private animationCtrl: AnimationController, private menu: MenuController) { }

  ngAfterViewInit() {
    if (this.cardElements && this.cardElements.length > 0) {
      const card = this.animationCtrl
        .create()
        .addElement(this.cardElements.first.nativeElement)
        .duration(2000)
        .beforeStyles({
          filter: 'invert(75%)',
        })
        .beforeClearStyles(['box-shadow'])
        .afterStyles({
          'box-shadow': 'rgba(255, 0, 50, 0.4) 0px 4px 16px 6px',
        })
        .afterClearStyles(['filter'])
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.5)' },
          { offset: 1, transform: 'scale(1)' },
        ]);
  
      this.animation = this.animationCtrl.create().duration(2000).addAnimation([card]);
    }
  }

  generarQR() {
    const newValue = this.generateNewQRValue();
    QRCode.toDataURL(newValue, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
  
      console.log(url); 
      this.qrData = url;
    });
  }

  generateNewQRValue() {
    return Math.random().toString(36).substring(2);
  }

  play() {
    this.animation.play();
  }

  playAndGenerateQR() {
    this.play();
    this.generarQR();
  }

  toggleQRSize() {
    this.isQRExpanded = !this.isQRExpanded;
  }

expandImage() {
  console.log(this.qrData); 
  const dialogRef = this.dialog.open(QrImageDialogComponent, {
    data: { qrData: this.qrData },
    width: '80vw',
    height: '80vh', 
    minWidth: '300px',  
    minHeight: '300px', 
  });

  dialogRef.afterOpened().subscribe(() => {
    console.log('Dialog opened'); 
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed'); 
  });
}
  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openEnd() {
    this.menu.open('end');
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
  }
}

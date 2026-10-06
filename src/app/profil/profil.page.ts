import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: false,
})
export class ProfilPage implements OnInit {
  storeName: string = 'Toko Makmur Jaya';
  ownerName: string = 'Bu Marni';
  businessType: string = 'Toko Kelontong';
  applicationName: string = 'SIMOBILE';
  applicationStatus: string = 'Offline';

  constructor() {}

  ngOnInit() {}
}
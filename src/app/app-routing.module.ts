import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },

      {
        path: 'produk',
        loadChildren: () =>
          import('./produk/produk.module').then((m) => m.ProdukPageModule),
      },

      {
        path: 'transaksi',
        loadChildren: () =>
          import('./transaksi/transaksi.module').then(
            (m) => m.TransaksiPageModule,
          ),
      },

      {
        path: 'profil',
        loadChildren: () =>
          import('./profil/profil.module').then((m) => m.ProfilPageModule),
      },
    ],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'produk',
    loadChildren: () =>
      import('./produk/produk.module').then((m) => m.ProdukPageModule),
  },
  {
    path: 'detail-produk/:id',
    loadChildren: () =>
      import('./detail-produk/detail-produk.module').then(
        (m) => m.DetailProdukPageModule,
      ),
  },
  {
    path: 'tambah-produk',
    loadChildren: () =>
      import('./tambah-produk/tambah-produk.module').then(
        (m) => m.TambahProdukPageModule,
      ),
  },
  {
    path: 'edit-produk',
    loadChildren: () =>
      import('./edit-produk/edit-produk.module').then(
        (m) => m.EditProdukPageModule,
      ),
  },
  {
    path: 'keranjang',
    loadChildren: () =>
      import('./keranjang/keranjang.module').then((m) => m.KeranjangPageModule),
  },
  {
    path: 'transaksi',
    loadChildren: () =>
      import('./transaksi/transaksi.module').then((m) => m.TransaksiPageModule),
  },
  {
    path: 'detail-transaksi/:id',
    loadChildren: () =>
      import('./detail-transaksi/detail-transaksi.module').then(
        (m) => m.DetailTransaksiPageModule,
      ),
  },
  {
    path: 'profil',
    loadChildren: () =>
      import('./profil/profil.module').then((m) => m.ProfilPageModule),
  },
  {
    path: 'pengaturan',
    loadChildren: () =>
      import('./pengaturan/pengaturan.module').then(
        (m) => m.PengaturanPageModule,
      ),
  },
  {
    path: 'tentang',
    loadChildren: () =>
      import('./tentang/tentang.module').then((m) => m.TentangPageModule),
  },
  {
    path: 'edit-produk/:id',
    loadChildren: () =>
      import('./edit-produk/edit-produk.module').then(
        (m) => m.EditProdukPageModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

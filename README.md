# SIMOBILE

SIMOBILE merupakan prototipe aplikasi kasir mobile berbasis Ionic Angular yang dikembangkan sebagai Project UTS Human Mobile Programming dan menggunakan arsitektur **NgModule**.

## Tim

**Gak Ada Ide**

- 160424023_Cedric Gratia Tjia
- 160424039_Moriczio Cosmo Kenaya Wijaya
- 160424077_Giffert Matthew Richardsen Liwang

## Repository

Repository project:

https://github.com/Cedric0808/gakadaide-simobile

## Teknologi

- Ionic Angular
- Angular
- TypeScript
- HTML
- SCSS
- NgModule

## Persyaratan

Pastikan perangkat telah memiliki:

- Node.js
- npm
- Ionic CLI

Jika Ionic CLI belum terpasang, jalankan:

```bash
npm install -g @ionic/cli
```

## Cara Instalasi

1. Clone repository:

```bash
git clone https://github.com/Cedric0808/gakadaide-simobile.git
```

2. Masuk ke folder project:

```bash
cd gakadaide-simobile
```

3. Install dependency project:

```bash
npm install
```

Folder `node_modules` tidak disimpan di repository Git. Dependency akan dibuat kembali melalui perintah `npm install`.

## Cara Menjalankan Aplikasi

Jalankan project menggunakan:

```bash
ionic serve
```

Setelah proses build selesai, aplikasi akan dijalankan melalui development server Ionic dan dapat dibuka melalui browser.

## Fitur yang Berhasil Diimplementasikan — Step 1 sampai Step 6

### Step 1 — Project Setup dengan NgModule

- Membuat project Ionic Angular menggunakan template `blank`.
- Menggunakan arsitektur **NgModule**, bukan standalone.
- Menyiapkan struktur dasar project Ionic.
- Menggunakan `HomePage` bawaan sebagai dasar halaman Dashboard.
- Memastikan project dapat dijalankan menggunakan `ionic serve`.

### Step 2 — Struktur Page Dasar SIMOBILE

Seluruh page dasar yang dibutuhkan aplikasi telah dibuat:

- `home` — Dashboard
- `produk` — Daftar Produk
- `detail-produk` — Detail Produk
- `tambah-produk` — Form Tambah Produk
- `edit-produk` — Form Edit Produk
- `keranjang` — Keranjang dan Checkout
- `transaksi` — Riwayat Transaksi
- `detail-transaksi` — Detail Transaksi
- `profil` — Profil
- `pengaturan` — Pengaturan
- `tentang` — Tentang Aplikasi

Setiap page mengikuti struktur NgModule dan memiliki file TypeScript, HTML, SCSS, testing, module, serta routing module yang dihasilkan oleh Ionic Generator.

### Step 3 — Tabs Navigation

Navigasi utama aplikasi dibuat menggunakan Ionic Tabs.

Empat tab utama:

- Dashboard
- Produk
- Transaksi
- Profil

Implementasi menggunakan:

- `ion-tabs`
- `ion-tab-bar`
- `ion-tab-button`
- `ion-icon`
- `ion-label`

Routing Tabs menggunakan parent route `tabs`, sehingga halaman utama dapat diakses melalui route seperti:

- `/tabs/home`
- `/tabs/produk`
- `/tabs/transaksi`
- `/tabs/profil`

### Step 4 — Drawer / Side Menu, Profil, dan Tentang Aplikasi

Aplikasi memiliki Drawer / Side Menu sebagai navigasi tambahan.

Menu Drawer:

- Pengaturan
- Tentang Aplikasi
- Logout

Implementasi menggunakan:

- `ion-menu`
- `contentId`
- `ion-router-outlet`
- `ion-menu-toggle`
- `routerLink`
- `ion-menu-button`

Drawer dapat dibuka dari halaman utama melalui tombol menu pada bagian header. `ion-menu-toggle` digunakan agar Drawer otomatis tertutup setelah pengguna memilih menu.

Halaman Profil dan Tentang Aplikasi juga telah disiapkan sebagai bagian dari struktur aplikasi.

### Step 5 — Product Service dan Data Produk

Pengelolaan data produk dipisahkan dari component menggunakan Angular Service.

Fitur/hasil implementasi:

- Membuat service `Product`.
- Menyimpan data produk pada array `products`.
- Menambahkan 10 data dummy produk.
- Menyimpan data produk secara terpusat di Product Service.
- Menambahkan gambar lokal untuk beberapa produk melalui folder assets.
- Menyediakan data dengan variasi kategori, harga, dan stok.

Setiap produk memiliki property:

```text
id
name
category
purchasePrice
sellingPrice
stock
image
```

Kategori produk yang digunakan antara lain:

- Sembako
- Makanan
- Minuman
- Kebutuhan Rumah

### Step 6 — Menampilkan Daftar Produk

Data yang tersimpan di Product Service ditampilkan pada halaman Produk.

Alur data:

```text
Product Service
→ products[]
→ ProdukPage
→ produk.page.html
→ *ngFor
→ interpolation
→ UI
```

Fitur/hasil implementasi:

- `ProdukPage` mengambil array produk dari Product Service.
- Menampilkan seluruh produk menggunakan `*ngFor`.
- Menggunakan interpolation `{{ }}` untuk menampilkan data produk.
- Menampilkan informasi:
  - Nama produk
  - Kategori
  - Harga jual
  - Stok
- Data yang ditampilkan berasal dari satu sumber data yang sama, yaitu Product Service.
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

## Fitur yang Berhasil Diimplementasikan

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

### Step 7 — Cart dan Pengelolaan Quantity

Fitur keranjang digunakan untuk mengelola produk yang akan dibeli dan menghitung total belanja sebelum transaksi dikonfirmasi.

Alur fitur:

```text
Detail Produk
→ pengguna memasukkan quantity
→ validasi quantity dan stok
→ Cart Service menyimpan produk dan quantity
→ Halaman Keranjang menampilkan item dan total belanja
```

Tampilan dan implementasi:

- Halaman Detail Produk menggunakan `ion-list` dan `ion-item` untuk menyusun informasi produk: gambar, nama, kategori, stok, harga beli, dan harga jual.
- Input `Jumlah` menggunakan `ion-input` dengan binding `[(ngModel)]` untuk menyimpan quantity yang akan dibeli. Event `keyup` menjalankan pemeriksaan format angka, nilai lebih dari 0, dan quantity yang tidak melebihi stok produk.
- Tombol `Tambah ke Keranjang` memanggil fungsi `addToCart()` dan dinonaktifkan jika stok produk 0. Pesan hasil penambahan ditampilkan setelah aksi tersebut; tombol `Lihat Keranjang` memakai `routerLink` menuju halaman keranjang.
- Class `Cart` menyimpan data produk dan quantity pada dua daftar yang berpasangan, yaitu `cartItems[]` dan `quantityPurchased[]`.
- Jika produk yang sama ditambahkan lagi, Cart menggabungkan jumlahnya dengan quantity yang sudah ada, bukan membuat baris produk baru.
- Template Keranjang mengulang `cartItems` dengan `*ngFor` dan menampilkan nama produk, harga jual, serta quantity dari indeks yang sama pada `quantityPurchased[]`.
- Fungsi `getTotal()` menjumlahkan hasil perkalian harga jual dan quantity untuk seluruh item. Nilai total ditampilkan sebagai `Total Belanja`.
- Halaman Keranjang menyediakan tombol `Konfirmasi Transaksi`; binding `[disabled]` menonaktifkannya ketika `cartItems` kosong.

### Step 8 — Konfirmasi Transaksi dan Pengurangan Stok

Proses checkout mencatat isi keranjang sebagai transaksi dan memperbarui stok produk.

Alur proses:

```text
Keranjang
→ pengguna memilih Konfirmasi Transaksi
→ Transaction Service menyimpan transaksi dan detail item
→ Product Service mengurangi stok sesuai quantity
→ Cart Service mengosongkan keranjang
→ halaman menampilkan pesan transaksi berhasil
```

Tampilan dan implementasi:

- Proses dimulai dari tombol `Konfirmasi Transaksi` pada halaman Keranjang. Tombol tersebut dinonaktifkan apabila tidak ada item yang dapat diproses.
- Sebelum keranjang dibersihkan, Transaction Service membuat salinan detail item yang memuat `id`, nama, kategori, harga jual, dan quantity setiap produk.
- Setiap transaksi menyimpan nomor ID berurutan, tanggal transaksi, daftar item, dan total belanja. Tanggal dibentuk dari tanggal, bulan, dan tahun saat konfirmasi dilakukan.
- Product Service mencari produk berdasarkan ID pada keranjang, lalu mengurangi nilai stok berdasarkan quantity yang dibeli.
- Setelah pencatatan transaksi dan pengurangan stok dipanggil, Cart menghapus item keranjang dan halaman menampilkan pesan `Transaksi berhasil dikonfirmasi` melalui kondisi `*ngIf`.

### Step 9 — Detail Transaksi dan Routing

Pengguna dapat memilih transaksi dari halaman riwayat untuk melihat detail pembeliannya.

Alur navigasi dan data:

```text
Transaction Service
→ Halaman Transaksi menampilkan riwayat
→ pengguna memilih salah satu transaksi
→ routing /detail-transaksi/:id
→ DetailTransaksiPage mengambil transaksi berdasarkan id
→ UI menampilkan detail transaksi
```

Tampilan dan implementasi:

- Halaman Transaksi mengambil daftar transaksi dari Transaction Service saat inisialisasi dan menampilkannya menggunakan `*ngFor` pada daftar item Ionic.
- Setiap baris riwayat menampilkan nomor transaksi, tanggal, dan total. Jika daftar masih kosong, kondisi `*ngIf` menampilkan informasi `Belum ada transaksi.`
- Baris transaksi menggunakan `routerLink` yang menyertakan ID transaksi pada pola `/detail-transaksi/:id` untuk membuka transaksi yang dipilih.
- Route `detail-transaksi/:id` memuat DetailTransaksiPage. Halaman membaca parameter `id` dari `ActivatedRoute`, lalu meminta data transaksi yang sesuai melalui `getTransactionById(id)`.
- Jika transaksi ditemukan, template menampilkan nomor dan tanggal transaksi, kemudian menggunakan `*ngFor` untuk mengulang daftar item dan menampilkan nama, kategori, harga jual, dan quantity.
- Bagian akhir detail menampilkan total transaksi yang tersimpan pada transaksi tersebut.

### Step 10 — Ringkasan Produk dan Transaksi pada Home Page

Halaman Home berfungsi sebagai Dashboard yang merangkum kondisi produk dan transaksi hari ini.

Alur data:

```text
Product Service ───────────────→ jumlah produk
Transaction Service ───────────→ jumlah transaksi hari ini
                    ├──────────→ pendapatan hari ini
                    └──────────→ produk terlaris
                                  ↓
                            HomePage → Dashboard
```

Tampilan dan implementasi:

- HomePage menerima Product Service dan Transaction Service melalui dependency injection, lalu menyediakan fungsi untuk mengambil nilai ringkasan dari masing-masing service.
- Dashboard menyajikan empat ringkasan dalam komponen `ion-item` dan `ion-label`:
  - `Jumlah Produk` berasal dari jumlah seluruh data pada daftar produk.
  - `Total Transaksi Hari Ini` menghitung transaksi dengan tanggal yang sama dengan tanggal saat ini.
  - `Total Pendapatan Hari Ini` menjumlahkan nilai total transaksi pada tanggal tersebut.
  - `Produk Terlaris` menampilkan nama produk dengan quantity penjualan tertinggi dari seluruh transaksi yang tersimpan beserta jumlah barangnya (bukan hanya transaksi hari ini).
- Nilai ringkasan ditampilkan menggunakan interpolation Angular, sehingga hasil fungsi pada HomePage muncul langsung pada Dashboard.
- Ringkasan transaksi bergantung pada data transaksi yang tercatat oleh Transaction Service selama aplikasi berjalan.
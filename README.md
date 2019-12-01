# info-kost-app

> Aplikasi website penyedia informasi kost, untuk akses aplikasi yang telah ter-deploy secara online, dapat diakses pada laman https://app.indekos.xyz/

## Anggota Tim
- Fadel Nararia Rahman 18217005
- Muhammad Aditya Hilmy 18217025

## Instalasi

Untuk akses aplikasi secara local, pastikan komputer Anda telah terinstall Node.js beserta NPM

#### Clone repository ke komputer
```bash
$ git clone https://github.com/fadelrahman31/info-kost-app.git
$ cd info-kost-app
```

#### Lakukan instalasi dependencies
```bash
$ npm install
```

#### Atur Konfigurasi
Salin file `.env.example` menjadi file `.env`

#### Jalankan Aplikasi
**Untuk development, jalankan**
```bash
$ npm run dev
```

**Untuk production, jalankan**
```
$ npm run build
$ npm run start
```

Aplikasi akan berjalan pada port 3000 (default). Akses aplikasi secara lokal pada laman http://localhost:3000/ pada *browser*.

## Fitur Aplikasi yang Tersedia
Berikut merupakan daftar list fitur beserta API yang digunakan pada aplikasi

### Fitur untuk *Administrator User* - Perspektif Penyedia Informasi Kost
- Halaman Login dan Register Akun Administrator
- Halaman Landing Page dan Kelola Informasi Kost Administrator `/admin`
- Halaman Menambahkan Informasi Kost Baru `/admin/add`
- Halaman Mengubah Informasi Kost `/admin/edit/`

### Fitur untuk *General User* - Perspektif Pencari Informasi Kost
- Halaman Landing Page Seluruh Informasi Kost 
- Halaman Detail Page Informasi Kost `/details?id=...`
- Fitur Menampilkan Alamat Kost pada Google Maps

### API yang Digunakan pada Aplikasi
- API *Informasi Kost Provider through Crawling Data* (milik Fadel Nararia Rahman / 18217005)
- API *Public Key Registry* (milik Muhammad Aditya Hilmy / 18217025)
- API *Place Details* (milik Muhammad Yanza Hattari / 18217043)



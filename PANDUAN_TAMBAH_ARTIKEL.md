# SOP & PANDUAN PENAMBAHAN BLOG ARTIKEL BARU
**KUSEN ALUMINIUM Malang (`https://kusenaluminium.web.id`)**

Dokumen ini adalah panduan standar dan instruksi otomatis untuk pembuatan artikel blog baru. Setiap kali Anda (atau asisten AI) ingin menambahkan artikel baru, **cukup ikuti seluruh aturan dan template di dalam file ini tanpa perlu mengetikkan ulang instruksi panjang lebar**.

---

## ⚡ CARA CEPAT PENGGUNAAN (QUICK TRIGGER)

Cukup berikan perintah singkat di chat seperti berikut:

```text
Tolong tambahkan artikel blog baru sesuai dengan SOP di PANDUAN_TAMBAH_ARTIKEL.md dengan:
- Judul / Topik : [Contoh: Kelebihan Jendela Sliding Aluminium Minimalis untuk Rumah Modern]
- Kategori      : [Contoh: Jendela Aluminium / Pintu Aluminium / Tips & Perawatan / Kusen]
- Kata Kunci    : [Contoh: jendela sliding aluminium malang, harga jendela sliding, kelebihan sliding window]
- Gambar Utama  : [Contoh: assets/img/jendela-sliding.webp]
```
*(Jika salah satu data di atas tidak diisi oleh user, asisten AI wajib menentukan konten terbaik secara otomatis yang relevan dengan bisnis Kusen Aluminium Malang).*

---

## 📋 DAFTAR CHECKLIST WAJIB (WORKFLOW LENGKAP)

Setiap penambahan artikel baru **WAJIB** mengeksekusi 6 langkah berikut:

1. **Membuat File HTML Artikel Baru (`blog/[slug-artikel].html`)** di folder `blog/`.
2. **Menyiapkan / Men-generate Gambar Visual Berkualitas** sesuai prompt di bagian panduan gambar (format 16:9, letakkan di `assets/img/`).
3. **Menyesuaikan Tanggal Secara Otomatis** dengan tanggal hari saat pembuatan artikel (misal tanggal saat ini `31 Agustus 2026`).
4. **Mendaftarkan Artikel Baru ke Halaman [blog.html](file:///d:/Magang%20Industri/kusenaluminiumweb/kusenaluminium/blog.html)** (masukkan sebagai kartu artikel terbaru di baris atas dengan link `../blog/[slug-artikel].html`).
5. **Mendaftarkan URL Baru ke [sitemap.xml](file:///d:/Magang%20Industri/kusenaluminiumweb/kusenaluminium/sitemap.xml)** beserta update `<lastmod>` tanggal hari ini (`https://kusenaluminium.web.id/blog/[slug-artikel].html`).
6. **Menjaga Internal Linking (Cross-linking)** pada blok *Baca Juga*, *Paket Rekomendasi*, dan *Artikel Terkait*.

---

## 📅 ATURAN PENANGGALAN OTOMATIS (DATE SYSTEM)

Tanggal artikel **wajib disesuaikan dengan tanggal hari saat artikel dibuat**:
- **Format Tampilan Meta Bar**: `DD MMMM YYYY` (Contoh: `31 Agustus 2026`)
- **Format Tampilan Widget Sidebar**: `DD Bln YYYY` (Contoh: `31 Agu 2026`)
- **Format Open Graph (`article:published_time`)**: `YYYY-MM-DDTHH:mm:ss+07:00` (Contoh: `2026-08-31T08:00:00+07:00`)
- **Format Sitemap (`<lastmod>`)**: `YYYY-MM-DD` (Contoh: `2026-08-31`)

---

## 📐 ANATOMI LAYOUT ARTIKEL (WAJIB LENGKAP)

File artikel baru harus memiliki struktur layout persis seperti artikel acuan (`blog/keunggulan-pintu-lipat-aluminium-villa-batu.html`), yang terdiri dari:

### 1. Header & Head Tags SEO
- `<title>`: `[Judul Artikel Menarik & Berbobot] | KUSEN ALUMINIUM Malang`
- `<meta name="description">`: Ringkasan 140–160 karakter memuat keyword utama dan lokasi Malang.
- `<meta name="keywords">`: 5–8 keyword relevan.
- `<meta name="author" content="Muhammad Musyaffa">`
- `<link rel="canonical" href="https://kusenaluminium.web.id/blog/[slug-artikel].html">`
- Tag Favicon WebP, Open Graph (og:type=article, og:title, og:description, og:url, og:image, og:published_time), Geo tags Malang.
- Load Google Fonts (Plus Jakarta Sans), Bootstrap 5.3 CSS, Bootstrap Icons 1.11.3, dan `../css/style.css?v=2.1`.

### 2. Header & Sticky Navbar
- Navbar brand Kusen Aluminium dengan link menu: `../index.html` (Beranda), `../tentang-kami.html` (Tentang Kami), `../portofolio.html` (Portofolio), `../galeri.html` (Galeri), `../blog.html` (Blog status `active`), dan Tombol `../index.html#estimator` (Minta Penawaran).

### 3. Konten Utama Artikel (`<main>` -> `col-lg-8`)
1. **Section Clearance**: `<section class="blog-detail-section" style="padding-top: 130px !important;">`
2. **Category Badge**: Badge kapsul berikon (misal: `<i class="bi bi-tag-fill text-warning me-1"></i> Jendela Aluminium`).
3. **Judul Utama (`<h1>`)**: `display-6 fw-bold text-dark mb-3`.
4. **Meta Bar Penulis & Tanggal**: Avatar `assets/img/avatar-3.webp`, Nama: `Muhammad Musyaffa`, Tanggal hari ini dengan icon `bi-calendar4-week`.
5. **Featured Image Card**: Kartu gambar utama + caption deskriptif bernuansa Kusen Aluminium Malang.
6. **Ringkasan Inti (Summary Box)**: Card dengan border kiri maroon (`border-maroon`), icon `📌 Ringkasan Inti`, paragraf penjelasan, dan 5 poin keunggulan/fakta utama.
7. **Daftar Isi Artikel (TOC Collapsible)**: Tombol interaktif dengan list anchor link `#slug-subjudul` mengarah ke setiap `<h2>`.
8. **Isi Artikel (Body Content)**:
   - Paragraf pembuka (`<p class="lead ...">`).
   - Minimal 4-5 Subjudul (`<h2 id="...">`) dengan pembahasan teknis berbobot.
   - **Inline Callout "Baca Juga" 1**: Box peringatan kuning/warning berisikan tautan internal ke artikel blog lainnya.
   - **Inline Banner "Paket Rekomendasi"**: Box khusus aplikator dengan badge rekomendasi, judul paket, deskripsi layanan, dan 2 tombol rute:
     - Tombol 1: `<a href="galeri.html" class="btn btn-accent btn-package-route"><i class="bi bi-box-seam-fill me-1"></i> Lihat Detail Paket & Harga</a>`
     - Tombol 2: `<a href="portofolio.html" class="btn btn-outline-dark btn-portfolio-route"><i class="bi bi-images me-1"></i> Lihat Hasil Portofolio Kerja</a>`
   - **Inline Callout "Baca Juga" 2**: Box internal link ke artikel blog lainnya.
   - **Expert Blockquote**: Kutipan kata mutiara teknis dari *"Muhammad Musyaffa, Kepala Teknisi KUSEN ALUMINIUM Malang"*.
   - **Gambar Ilustrasi Tambahan (Figure)**: Gambar teknis/pemasangan dengan caption.
9. **FAQ Mini Accordion**: Card FAQ berisikan 3 pertanyaan & jawaban paling sering ditanyakan seputar topik artikel dengan efek buka-tutup interaktif.
10. **Tombol Share Medsos**: WhatsApp, Facebook, Twitter, LinkedIn (otomatis terhubung dengan URL halaman).
11. **Tag Pills Footer**: Kumpulan 5+ badge tag relevan mengarah ke `blog.html`.

### 4. Sidebar Kolom Kanan (`col-lg-4`)
- **Kartu Profil Penulis**: Foto Muhammad Musyaffa, link medsos (IG, LinkedIn, FB), dan deskripsi keahlian teknis (10+ tahun pengalaman).
- **Widget Artikel Terkait (Sidebar Related)**: 3 artikel relevan dengan thumbnail gambar WebP, judul, dan tanggal publikasi.

### 5. Section "Artikel Lainnya yang Berhubungan" (Bawah Artikel)
- Grid 3 kolom memuat kartu artikel rekomendasi lain lengkap dengan gambar, badge buku, judul, cuplikan ringkas, dan link baca.

### 6. Footer Website & Tombol WA Floating
- Footer 4 kolom standar Kusen Aluminium Malang.
- Tombol WhatsApp Floating dengan pesan otomatis konsultasi.
- Script Bootstrap 5.3, `js/main.js`, dan skrip inisialisasi share button & FAQ toggle.

---

## 💻 TEMPLATE KODE MASTER ARTIKEL (`template-artikel.html`)

Gunakan template HTML di bawah ini sebagai pondasi pembuatan file artikel baru:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{JUDUL_SEO}} | KUSEN ALUMINIUM Malang</title>
  <meta name="description" content="{{META_DESCRIPTION}}">
  <meta name="keywords" content="{{META_KEYWORDS}}">
  <meta name="author" content="Muhammad Musyaffa">
  <link rel="canonical" href="https://kusenaluminium.web.id/{{SLUG_FILE}}.html">

  <!-- Favicon for Browser Tabs & Google Search Indexing (WebP) -->
  <link rel="icon" type="image/webp" href="assets/img/favicon.webp">
  <link rel="icon" type="image/webp" sizes="48x48" href="assets/img/favicon-48x48.webp">
  <link rel="shortcut icon" type="image/webp" href="favicon.webp">
  <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.webp">
  <link rel="manifest" href="site.webmanifest">

  <meta property="og:type" content="article">
  <meta property="og:title" content="{{JUDUL_OG}}">
  <meta property="og:description" content="{{DESKRIPSI_OG}}">
  <meta property="og:url" content="https://kusenaluminium.web.id/{{SLUG_FILE}}.html">
  <meta property="og:image" content="https://kusenaluminium.web.id/{{PATH_GAMBAR_UTAMA}}">
  <meta property="article:published_time" content="{{TANGGAL_ISO}}">
  <meta name="geo.region" content="ID-JI">
  <meta name="geo.placename" content="Kota Malang, Jawa Timur">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css?v=2.1">
</head>
<body class="blog-details-page">

  <!-- NAVBAR -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-alu sticky-top">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
          <i class="bi bi-layers-half text-warning fs-4"></i>
          <span>KUSEN ALUMINIUM</span>
        </a>
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMain">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="index.html">Beranda</a></li>
            <li class="nav-item"><a class="nav-link" href="tentang-kami.html">Tentang Kami</a></li>
            <li class="nav-item"><a class="nav-link" href="portofolio.html">Portofolio</a></li>
            <li class="nav-item"><a class="nav-link" href="galeri.html">Galeri</a></li>
            <li class="nav-item"><a class="nav-link active" href="blog.html">Blog</a></li>
          </ul>
          <div class="d-flex">
            <a href="index.html#estimator" class="btn btn-accent"><i class="bi bi-calculator"></i> Minta Penawaran</a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <!-- MAIN ARTICLE SECTION WITH TOP NAVBAR CLEARANCE -->
    <section class="blog-detail-section" style="padding-top: 130px !important;">
      <div class="container">
        <div class="row g-4 g-lg-5">

          <!-- MAIN ARTICLE COLUMN -->
          <div class="col-lg-8">
            <article class="article-card-wrapper card border-0 shadow-sm rounded-4 p-4 p-md-5 mb-4">

              <!-- Category Badge -->
              <div class="article-category-badge badge bg-warning-subtle text-dark border border-warning-subtle rounded-pill fs-6 px-3 py-2 text-decoration-none mb-3 d-inline-flex align-items-center">
                <i class="bi {{ICON_KATEGORI}} me-1 text-warning"></i> {{NAMA_KATEGORI}}
              </div>

              <!-- Main Article Title -->
              <h1 class="article-main-title display-6 fw-bold text-dark mb-3">
                {{JUDUL_UTAMA}}
              </h1>

              <!-- Author & Article Meta Bar -->
              <div class="article-top-meta d-flex flex-wrap align-items-center gap-3 pb-3 mb-4 border-bottom fs-6 text-muted">
                <div class="meta-author d-inline-flex align-items-center gap-2 fw-bold text-dark me-3">
                  <img src="assets/img/avatar-3.webp" class="rounded-circle border border-2 border-warning shadow-sm" style="width: 44px; height: 44px; object-fit: cover;" alt="Muhammad Musyaffa">
                  <span>Muhammad Musyaffa</span>
                </div>
                <span class="d-inline-flex align-items-center"><i class="bi bi-calendar4-week text-warning me-1"></i> {{TANGGAL_LENGKAP_HARI_INI}}</span>
              </div>

              <!-- Featured Image Card -->
              <div class="featured-image-wrap card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
                <img src="{{PATH_GAMBAR_UTAMA}}" class="card-img-top img-fluid" alt="{{ALT_GAMBAR_UTAMA}}" loading="lazy">
                <div class="featured-caption card-footer bg-light-subtle text-center fst-italic small text-muted py-2 border-top-0">
                  {{CAPTION_GAMBAR_UTAMA}} — KUSEN ALUMINIUM Malang
                </div>
              </div>

              <!-- Summary Box (Ringkasan Inti) -->
              <div class="summary-box card border-0 border-start border-4 border-maroon shadow-sm rounded-4 p-4 mb-4 bg-light-subtle">
                <h3 class="h5 fw-bold text-dark mb-3 d-flex align-items-center gap-2">📌 Ringkasan Inti</h3>
                <p class="card-text text-dark leading-relaxed">{{PARAGRAF_RINGKASAN}}</p>
                <ul class="mb-0 ps-3">
                  <li class="mb-2">{{POIN_1}}</li>
                  <li class="mb-2">{{POIN_2}}</li>
                  <li class="mb-2">{{POIN_3}}</li>
                  <li class="mb-2">{{POIN_4}}</li>
                  <li class="mb-0">{{POIN_5}}</li>
                </ul>
              </div>

              <!-- Table of Contents (Daftar Isi Artikel) -->
              <div class="toc-box card border-0 shadow-sm rounded-4 p-4 mb-4">
                <button class="toc-toggle btn btn-link p-0 text-decoration-none text-dark fw-bold w-100 d-flex justify-content-between align-items-center active" onclick="this.classList.toggle('active'); this.nextElementSibling.classList.toggle('show')">
                  <span class="fs-6"><i class="bi bi-list-nested me-2 text-warning"></i>Daftar Isi Artikel</span>
                  <i class="bi bi-chevron-right text-warning"></i>
                </button>
                <div class="toc-content show mt-3 pt-3 border-top border-dashed">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2"><a href="#subjudul-1" class="text-decoration-none fw-semibold text-dark">1. {{TEKS_TOC_1}}</a></li>
                    <li class="mb-2"><a href="#subjudul-2" class="text-decoration-none fw-semibold text-dark">2. {{TEKS_TOC_2}}</a></li>
                    <li class="mb-2"><a href="#subjudul-3" class="text-decoration-none fw-semibold text-dark">3. {{TEKS_TOC_3}}</a></li>
                    <li class="mb-2"><a href="#subjudul-4" class="text-decoration-none fw-semibold text-dark">4. {{TEKS_TOC_4}}</a></li>
                    <li class="mb-0"><a href="#subjudul-5" class="text-decoration-none fw-semibold text-dark">5. {{TEKS_TOC_5}}</a></li>
                  </ul>
                </div>
              </div>

              <!-- Article Content Body -->
              <div class="blog-detail-content">

                <p class="lead fs-5 lh-base text-dark fw-medium mb-4">
                  {{PARAGRAF_LEAD_PEMBUKA}}
                </p>

                <p>{{PARAGRAF_PENGANTAR}}</p>

                <!-- SUBJUDUL 1 -->
                <h2 id="subjudul-1" class="h3 fw-bold text-dark mt-4 mb-3 pb-2 border-bottom">1. {{JUDUL_H2_1}}</h2>
                <p>{{KONTEN_PARAGRAF_1}}</p>

                <!-- ILUSTRASI GAMBAR TAMBAHAN -->
                <figure class="body-figure card border-0 shadow-sm rounded-4 overflow-hidden my-4">
                  <img src="{{PATH_GAMBAR_BODY}}" class="card-img-top img-fluid" alt="{{ALT_GAMBAR_BODY}}" loading="lazy">
                  <figcaption class="card-footer bg-light-subtle text-center small text-muted py-2 border-top-0 fst-italic">{{CAPTION_GAMBAR_BODY}}</figcaption>
                </figure>

                <!-- INLINE "BACA JUGA" CALLOUT 1 -->
                <div class="baca-juga-box card border-0 border-start border-4 border-warning shadow-sm rounded-3 p-3 my-4 d-flex flex-row align-items-center gap-3 bg-warning-subtle">
                  <i class="bi bi-bookmark-star-fill text-warning fs-4"></i>
                  <span class="label fw-bold text-uppercase small text-dark me-1">Baca Juga:</span>
                  <a href="{{LINK_BACA_JUGA_1}}" class="fw-bold text-dark text-decoration-none flex-grow-1">{{JUDUL_BACA_JUGA_1}}</a>
                </div>

                <!-- SUBJUDUL 2 -->
                <h2 id="subjudul-2" class="h3 fw-bold text-dark mt-4 mb-3 pb-2 border-bottom">2. {{JUDUL_H2_2}}</h2>
                <p>{{KONTEN_PARAGRAF_2}}</p>

                <!-- INLINE PROMO BANNER (DUAL ACTION ROUTES - SESUAIKAN DENGAN TOPIK) -->
                <div class="paket-rekomendasi-box card border-0 border-top border-4 border-warning shadow-sm rounded-4 p-4 my-4 bg-light-subtle">
                  <span class="paket-rec-badge badge bg-warning text-dark px-3 py-2 rounded-pill mb-2"><i class="bi bi-star-fill me-1"></i> Rekomendasi Aplikator</span>
                  <h3 class="paket-rec-title h4 fw-bold text-dark mb-2">{{JUDUL_PAKET_REKOMENDASI}}</h3>
                  <p class="paket-rec-desc text-muted mb-3">{{DESKRIPSI_PAKET_REKOMENDASI}}</p>
                  <div class="paket-rec-actions d-flex flex-wrap gap-2">
                    <a href="galeri.html" class="btn btn-accent btn-package-route px-3 py-2">
                      <i class="bi bi-box-seam-fill me-1"></i> Lihat Detail Paket &amp; Harga
                    </a>
                    <a href="portofolio.html" class="btn btn-outline-dark btn-portfolio-route px-3 py-2">
                      <i class="bi bi-images me-1"></i> Lihat Hasil Portofolio Kerja
                    </a>
                  </div>
                </div>

                <!-- SUBJUDUL 3 -->
                <h2 id="subjudul-3" class="h3 fw-bold text-dark mt-4 mb-3 pb-2 border-bottom">3. {{JUDUL_H2_3}}</h2>
                <p>{{KONTEN_PARAGRAF_3}}</p>

                <!-- INLINE "BACA JUGA" CALLOUT 2 -->
                <div class="baca-juga-box card border-0 border-start border-4 border-warning shadow-sm rounded-3 p-3 my-4 d-flex flex-row align-items-center gap-3 bg-warning-subtle">
                  <i class="bi bi-bookmark-star-fill text-warning fs-4"></i>
                  <span class="label fw-bold text-uppercase small text-dark me-1">Baca Juga:</span>
                  <a href="{{LINK_BACA_JUGA_2}}" class="fw-bold text-dark text-decoration-none flex-grow-1">{{JUDUL_BACA_JUGA_2}}</a>
                </div>

                <!-- SUBJUDUL 4 -->
                <h2 id="subjudul-4" class="h3 fw-bold text-dark mt-4 mb-3 pb-2 border-bottom">4. {{JUDUL_H2_4}}</h2>
                <p>{{KONTEN_PARAGRAF_4}}</p>

                <!-- KUTIPAN KEPALA TEKNISI -->
                <blockquote class="article-quote card border-0 border-start border-4 border-maroon shadow-sm rounded-3 p-4 my-4 bg-light-subtle fst-italic fs-5 text-dark">
                  <p class="mb-2">"{{KUTIPAN_TEKNISI}}"</p>
                  <footer class="blockquote-footer text-end mt-2 text-muted">— Muhammad Musyaffa, Kepala Teknisi KUSEN ALUMINIUM Malang</footer>
                </blockquote>

                <!-- SUBJUDUL 5 -->
                <h2 id="subjudul-5" class="h3 fw-bold text-dark mt-4 mb-3 pb-2 border-bottom">5. {{JUDUL_H2_5}}</h2>
                <p>{{KONTEN_PARAGRAF_5}}</p>

              </div>

              <!-- ARTICLE FAQ SECTION (MINI ACCORDION) -->
              <div class="article-faq card border-0 shadow-sm rounded-4 p-4 my-4 bg-light-subtle">
                <h3 class="h4 fw-bold text-dark mb-3">Pertanyaan Seputar {{TOPIK_SINGKAT}}</h3>
                
                <div class="faq-mini-item card border shadow-none rounded-3 mb-2 overflow-hidden">
                  <button class="faq-mini-question btn w-100 text-start fw-bold text-dark p-3 d-flex align-items-center justify-content-between">
                    <span>{{FAQ_TANYA_1}}</span>
                    <i class="bi bi-plus-lg text-warning fs-5"></i>
                  </button>
                  <div class="faq-mini-answer p-3 border-top border-dashed">
                    <p class="mb-0 text-muted">{{FAQ_JAWAB_1}}</p>
                  </div>
                </div>

                <div class="faq-mini-item card border shadow-none rounded-3 mb-2 overflow-hidden">
                  <button class="faq-mini-question btn w-100 text-start fw-bold text-dark p-3 d-flex align-items-center justify-content-between">
                    <span>{{FAQ_TANYA_2}}</span>
                    <i class="bi bi-plus-lg text-warning fs-5"></i>
                  </button>
                  <div class="faq-mini-answer p-3 border-top border-dashed">
                    <p class="mb-0 text-muted">{{FAQ_JAWAB_2}}</p>
                  </div>
                </div>

                <div class="faq-mini-item card border shadow-none rounded-3 mb-0 overflow-hidden">
                  <button class="faq-mini-question btn w-100 text-start fw-bold text-dark p-3 d-flex align-items-center justify-content-between">
                    <span>{{FAQ_TANYA_3}}</span>
                    <i class="bi bi-plus-lg text-warning fs-5"></i>
                  </button>
                  <div class="faq-mini-answer p-3 border-top border-dashed">
                    <p class="mb-0 text-muted">{{FAQ_JAWAB_3}}</p>
                  </div>
                </div>
              </div>

              <!-- SHARE BUTTONS -->
              <div class="share-article-box border-top pt-4 my-4">
                <h4 class="h6 fw-bold text-dark mb-3">Bagikan Artikel Ini</h4>
                <div class="share-buttons-row d-flex flex-wrap gap-2">
                  <a href="#" target="_blank" class="btn btn-sm btn-success share-btn whatsapp rounded-pill px-3 py-2" data-share="whatsapp"><i class="bi bi-whatsapp me-1"></i> WhatsApp</a>
                  <a href="#" target="_blank" class="btn btn-sm btn-primary share-btn facebook rounded-pill px-3 py-2" data-share="facebook"><i class="bi bi-facebook me-1"></i> Facebook</a>
                  <a href="#" target="_blank" class="btn btn-sm btn-dark share-btn twitter rounded-pill px-3 py-2" data-share="twitter"><i class="bi bi-twitter-x me-1"></i> Twitter</a>
                  <a href="#" target="_blank" class="btn btn-sm btn-info text-white share-btn linkedin rounded-pill px-3 py-2" data-share="linkedin"><i class="bi bi-linkedin me-1"></i> LinkedIn</a>
                </div>
              </div>

              <!-- TAG PILLS FOOTER -->
              <div class="article-tags-footer d-flex flex-wrap gap-2 mt-3 pt-3 border-top">
                <a href="blog.html" class="badge bg-secondary-subtle text-dark border text-decoration-none rounded-pill px-3 py-2 tag-pill">{{TAG_1}}</a>
                <a href="blog.html" class="badge bg-secondary-subtle text-dark border text-decoration-none rounded-pill px-3 py-2 tag-pill">{{TAG_2}}</a>
                <a href="blog.html" class="badge bg-secondary-subtle text-dark border text-decoration-none rounded-pill px-3 py-2 tag-pill">{{TAG_3}}</a>
                <a href="blog.html" class="badge bg-secondary-subtle text-dark border text-decoration-none rounded-pill px-3 py-2 tag-pill">{{TAG_4}}</a>
                <a href="blog.html" class="badge bg-secondary-subtle text-dark border text-decoration-none rounded-pill px-3 py-2 tag-pill">Kusen Aluminium Malang</a>
              </div>

            </article>
          </div><!-- /col-lg-8 -->

          <!-- SIDEBAR COLUMN -->
          <div class="col-lg-4">
            <aside class="article-sidebar-sticky">
              <!-- Author Card -->
              <div class="sidebar-author-card card border-0 shadow-sm rounded-4 p-4 text-center mb-4">
                <img src="assets/img/avatar-3.webp" class="rounded-circle border border-3 border-warning shadow-sm mx-auto mb-3" style="width: 96px; height: 96px; object-fit: cover;" alt="Muhammad Musyaffa">
                <h4 class="h5 fw-bold text-dark mb-2">Muhammad Musyaffa</h4>
                <div class="sidebar-social d-flex justify-content-center gap-3 mb-3 fs-5">
                  <a href="https://instagram.com/mmusy4ffa" target="_blank" rel="noopener noreferrer" class="text-dark text-decoration-none" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/mmusyaffa/" target="_blank" rel="noopener noreferrer" class="text-dark text-decoration-none" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-dark text-decoration-none" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                </div>
                <p class="desc small text-muted mb-0">
                  Muhammad Musyaffa adalah Kepala Teknisi Aplikator di KUSEN ALUMINIUM Malang berpengalaman 10+ tahun dalam perancangan bukaan aluminium presisi, sistem kedap air, dan pengerjaan arsitektur modern.
                </p>
              </div>

              <!-- Related Articles Sidebar List -->
              <div class="sidebar-related card border-0 shadow-sm rounded-4 p-4 mb-4">
                <h4 class="h5 fw-bold text-dark pb-2 mb-3 border-bottom border-2 border-warning">Artikel Terkait</h4>
                
                <a href="{{LINK_SIDEBAR_1}}" class="related-item d-flex align-items-center gap-3 text-decoration-none mb-3 pb-3 border-bottom">
                  <img src="{{THUMB_SIDEBAR_1}}" class="rounded-3 flex-shrink-0" style="width: 75px; height: 65px; object-fit: cover;" alt="{{ALT_SIDEBAR_1}}">
                  <div>
                    <h5 class="h6 fw-bold text-dark mb-1">{{JUDUL_SIDEBAR_1}}</h5>
                    <span class="small text-muted"><i class="bi bi-calendar-event me-1"></i>{{TANGGAL_SINGKAT_1}}</span>
                  </div>
                </a>

                <a href="{{LINK_SIDEBAR_2}}" class="related-item d-flex align-items-center gap-3 text-decoration-none mb-3 pb-3 border-bottom">
                  <img src="{{THUMB_SIDEBAR_2}}" class="rounded-3 flex-shrink-0" style="width: 75px; height: 65px; object-fit: cover;" alt="{{ALT_SIDEBAR_2}}">
                  <div>
                    <h5 class="h6 fw-bold text-dark mb-1">{{JUDUL_SIDEBAR_2}}</h5>
                    <span class="small text-muted"><i class="bi bi-calendar-event me-1"></i>{{TANGGAL_SINGKAT_2}}</span>
                  </div>
                </a>

                <a href="{{LINK_SIDEBAR_3}}" class="related-item d-flex align-items-center gap-3 text-decoration-none">
                  <img src="{{THUMB_SIDEBAR_3}}" class="rounded-3 flex-shrink-0" style="width: 75px; height: 65px; object-fit: cover;" alt="{{ALT_SIDEBAR_3}}">
                  <div>
                    <h5 class="h6 fw-bold text-dark mb-1">{{JUDUL_SIDEBAR_3}}</h5>
                    <span class="small text-muted"><i class="bi bi-calendar-event me-1"></i>{{TANGGAL_SINGKAT_3}}</span>
                  </div>
                </a>
              </div>
            </aside>
          </div><!-- /col-lg-4 -->

        </div><!-- /row -->
      </div>
    </section>

    <!-- ARTIKEL TERKAIT BOTTOM SECTION -->
    <section class="py-5 bg-white border-top">
      <div class="container">
        <div class="text-center mb-4">
          <span class="section-label badge bg-warning-subtle text-dark border rounded-pill px-3 py-2 mb-2"><i class="bi bi-journal-text me-1"></i> Baca Juga</span>
          <h2 class="section-title h3 fw-bold text-dark">Artikel Lainnya yang Berhubungan</h2>
        </div>
        <div class="row g-4">
          
          <div class="col-md-6 col-lg-4">
            <article class="service-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <a href="{{LINK_TERKAIT_BAWAH_1}}" class="service-card-img position-relative overflow-hidden">
                <img src="{{THUMB_TERKAIT_BAWAH_1}}" class="card-img-top img-fluid" alt="{{ALT_TERKAIT_BAWAH_1}}">
                <div class="service-icon-badge badge bg-warning text-dark position-absolute top-0 end-0 m-3 p-2 rounded-circle"><i class="bi bi-book"></i></div>
              </a>
              <div class="service-card-body card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h3 class="service-card-title card-title h5 fw-bold"><a href="{{LINK_TERKAIT_BAWAH_1}}" class="text-dark text-decoration-none">{{JUDUL_TERKAIT_BAWAH_1}}</a></h3>
                  <p class="service-card-desc card-text text-muted small">{{CUPLIKAN_TERKAIT_BAWAH_1}}</p>
                </div>
                <a class="service-card-link text-decoration-none fw-bold small mt-3" href="{{LINK_TERKAIT_BAWAH_1}}">Baca Artikel <i class="bi bi-arrow-right ms-1"></i></a>
              </div>
            </article>
          </div>

          <div class="col-md-6 col-lg-4">
            <article class="service-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <a href="{{LINK_TERKAIT_BAWAH_2}}" class="service-card-img position-relative overflow-hidden">
                <img src="{{THUMB_TERKAIT_BAWAH_2}}" class="card-img-top img-fluid" alt="{{ALT_TERKAIT_BAWAH_2}}">
                <div class="service-icon-badge badge bg-warning text-dark position-absolute top-0 end-0 m-3 p-2 rounded-circle"><i class="bi bi-book"></i></div>
              </a>
              <div class="service-card-body card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h3 class="service-card-title card-title h5 fw-bold"><a href="{{LINK_TERKAIT_BAWAH_2}}" class="text-dark text-decoration-none">{{JUDUL_TERKAIT_BAWAH_2}}</a></h3>
                  <p class="service-card-desc card-text text-muted small">{{CUPLIKAN_TERKAIT_BAWAH_2}}</p>
                </div>
                <a class="service-card-link text-decoration-none fw-bold small mt-3" href="{{LINK_TERKAIT_BAWAH_2}}">Baca Artikel <i class="bi bi-arrow-right ms-1"></i></a>
              </div>
            </article>
          </div>

          <div class="col-md-6 col-lg-4">
            <article class="service-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <a href="{{LINK_TERKAIT_BAWAH_3}}" class="service-card-img position-relative overflow-hidden">
                <img src="{{THUMB_TERKAIT_BAWAH_3}}" class="card-img-top img-fluid" alt="{{ALT_TERKAIT_BAWAH_3}}">
                <div class="service-icon-badge badge bg-warning text-dark position-absolute top-0 end-0 m-3 p-2 rounded-circle"><i class="bi bi-book"></i></div>
              </a>
              <div class="service-card-body card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h3 class="service-card-title card-title h5 fw-bold"><a href="{{LINK_TERKAIT_BAWAH_3}}" class="text-dark text-decoration-none">{{JUDUL_TERKAIT_BAWAH_3}}</a></h3>
                  <p class="service-card-desc card-text text-muted small">{{CUPLIKAN_TERKAIT_BAWAH_3}}</p>
                </div>
                <a class="service-card-link text-decoration-none fw-bold small mt-3" href="{{LINK_TERKAIT_BAWAH_3}}">Baca Artikel <i class="bi bi-arrow-right ms-1"></i></a>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="footer-alu">
    <div class="container">
      <div class="row g-4 mb-4">
        <div class="col-lg-4">
          <a href="index.html" class="footer-brand">KUSEN ALUMINIUM</a>
          <div class="footer-tagline">Fabrikasi &amp; Pemasangan Aluminium Malang Presisi</div>
          <p class="text-white-50 mb-3 small">
            KUSEN ALUMINIUM Malang adalah produsen dan aplikator spesialis kusen aluminium, pintu lipat, jendela casement, dan partisi kaca kantor bergaransi resmi di Malang Raya.
          </p>
          <div class="text-white-50 small">
            <p class="mb-1"><i class="bi bi-whatsapp text-warning me-2"></i>0889-8964-3555</p>
            <p class="mb-1"><i class="bi bi-geo-alt text-warning me-2"></i>Jl. Raya Malang Industri No. 88, Lowokwaru, Kota Malang</p>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-6">
          <h3 class="footer-heading">Produk Layanan</h3>
          <ul class="footer-links">
            <li><a href="galeri.html">Kusen Aluminium</a></li>
            <li><a href="galeri.html">Pintu Lipat Glass</a></li>
            <li><a href="galeri.html">Jendela Casement</a></li>
            <li><a href="galeri.html">Pintu Sliding Geser</a></li>
            <li><a href="galeri.html">Partisi Kaca Kantor</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-4 col-6">
          <h3 class="footer-heading">Navigasi Halaman</h3>
          <ul class="footer-links">
            <li><a href="index.html">Beranda</a></li>
            <li><a href="tentang-kami.html">Tentang Kami</a></li>
            <li><a href="portofolio.html">Portofolio</a></li>
            <li><a href="galeri.html">Galeri</a></li>
            <li><a href="blog.html">Blog Artikel</a></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-4">
          <h3 class="footer-heading">Area Layanan Malang Raya &amp; Jatim</h3>
          <p class="small text-white-50 mb-2">Melayani pengukuran &amp; pemasangan di seluruh kawasan:</p>
          <div class="footer-area-tags mb-3">
            <span class="area-tag">Kota Malang</span>
            <span class="area-tag">Lowokwaru</span>
            <span class="area-tag">Suhat Malang</span>
            <span class="area-tag">Kota Batu</span>
            <span class="area-tag">Kab. Malang</span>
            <span class="area-tag">Sawojajar</span>
            <span class="area-tag">Kediri</span>
            <span class="area-tag">Pasuruan</span>
            <span class="area-tag">Surabaya</span>
          </div>
        </div>
      </div>

      <hr class="border-secondary opacity-25 my-4">

      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50">
        <p class="mb-2 mb-md-0">&copy; 2024 Kusen Aluminium Malang. Hak cipta dilindungi undang-undang.</p>
        <p class="mb-0">Aplikator Kusen Aluminium Bergaransi — Malang Raya</p>
      </div>
    </div>
  </footer>

  <!-- FLOATING WA BUTTON -->
  <a href="https://wa.me/6288989643555?text=Halo%20KUSEN%20ALUMINIUM%20Malang," target="_blank" class="btn-floating-wa">
    <i class="bi bi-whatsapp"></i>
  </a>

  <!-- SCRIPTS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/main.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.faq-mini-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
          btn.closest('.faq-mini-item').classList.toggle('active');
        });
      });
      const pageUrl = encodeURIComponent(window.location.href);
      const pageTitle = encodeURIComponent(document.title);
      const shareLinks = {
        whatsapp: 'https://wa.me/?text=' + pageTitle + '%20' + pageUrl,
        facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl,
        twitter: 'https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + pageTitle,
        linkedin: 'https://www.linkedin.com/sharing/share-offsite/?url=' + pageUrl
      };
      document.querySelectorAll('[data-share]').forEach(function (btn) {
        const type = btn.getAttribute('data-share');
        if (shareLinks[type]) btn.setAttribute('href', shareLinks[type]);
      });
    });
  </script>
</body>
</html>
```

---

## 📌 CARA UPDATE `blog.html` (HALAMAN DAFTAR BLOG)

Sisipkan kartu artikel baru pada posisi paling atas di dalam container `<div class="row g-4">` di `blog.html`:

```html
<div class="col-md-6 col-lg-4 reveal-on-scroll">
  <article class="service-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
    <a href="{{SLUG_FILE}}.html" class="service-card-img position-relative overflow-hidden">
      <img src="{{PATH_GAMBAR_UTAMA}}" class="card-img-top img-fluid" alt="{{ALT_GAMBAR_UTAMA}}">
      <div class="service-icon-badge badge bg-warning text-dark position-absolute top-0 end-0 m-3 p-2 rounded-circle"><i class="bi bi-book"></i></div>
    </a>
    <div class="service-card-body card-body p-4 d-flex flex-column justify-content-between">
      <div>
        <h3 class="service-card-title card-title h5 fw-bold"><a href="{{SLUG_FILE}}.html" class="text-dark text-decoration-none">{{JUDUL_UTAMA}}</a></h3>
        <p class="service-card-desc card-text text-muted small">{{CUPLIKAN_SINGKAT}}</p>
      </div>
      <a class="service-card-link text-decoration-none fw-bold small mt-3" href="{{SLUG_FILE}}.html">Baca Artikel <i class="bi bi-arrow-right ms-1"></i></a>
    </div>
  </article>
</div>
```

---

## 🗺️ CARA UPDATE `sitemap.xml`

Tambahkan entri baru di bagian bawah sebelum penutup `</urlset>`:

```xml
  <!-- Artikel: {{JUDUL_SINGKAT}} -->
  <url>
    <loc>https://kusenaluminium.web.id/{{SLUG_FILE}}.html</loc>
    <lastmod>{{TANGGAL_YYYY_MM_DD}}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
```
*Pastikan juga tag `<lastmod>` untuk `blog.html` di dalam `sitemap.xml` diperbarui ke tanggal hari ini.*

---

## 🎨 STANDAR & PROMPT GENERASI GAMBAR ARTIKEL (AI IMAGE PROMPTS)

Untuk menjaga kualitas visual website tetap premium, realistis, dan relevan dengan industri kusen aluminium di Malang Raya, gunakan standar dan formula prompt berikut saat men-generate gambar menggunakan model AI (Gemini / Image Generation).

### 📐 Aturan & Format Gambar
- **Format / Resolusi**: Aspect Ratio `16:9` (format horizontal standar banner blog & kartu artikel).
- **Lokasi Penyimpanan**: `assets/img/`
- **Konvensi Nama File**: Gunakan nama file kebab-case deskriptif sesuai slug artikel (contoh: `assets/img/kusen-aluminium-alexindo-malang.jpg` atau `.webp`).
- **Gaya Visual**: Fotorealistik arsitektural, pencahayaan alami cerah (natural daylight), sudut sambungan presisi miter 45°, tanpa teks aneh/watermark.

---

### 📚 Koleksi Prompt Master Siap Pakai (Tested Prompts)

#### 1. Fasad Rumah & Hunian Modern (Contoh: Alexindo vs YKK AP Malang)
> **Prompt**:
> ```text
> A realistic modern Indonesian residential house in Malang with installed black powder coated aluminium window frames and sliding glass doors, clean precision miter joints, bright natural daylight, architectural photography, hyper-realistic, elegant home exterior with green tropical plants.
> ```
> *Kegunaan*: Gambar utama artikel perbandingan merk, pintu lipat villa, atau kusen rumah tinggal.

#### 2. Macro / Detail Teknis Profil Aluminium (Contoh: Profil YKK AP Anodize)
> **Prompt**:
> ```text
> Macro architectural detail close-up of premium YKK AP aluminium window profile anodized dark brown finish, sleek precision miter corner joints, thick profile structure with clear tempered glass, modern building interior, clean professional craftsmanship, high-end architectural photo.
> ```
> *Kegunaan*: Gambar ilustrasi body artikel untuk edukasi ketebalan profil 3 vs 4 inch, karet sealant EPDM, atau jenis finishing anodize/powder coating.

#### 3. Bangunan Komersial & Ruko (Contoh: Estimasi Biaya Ruko Kepanjen)
> **Prompt**:
> ```text
> A modern two-story commercial shophouse (ruko) building in Indonesia with clean black aluminium framed glass facade, large storefront windows on first floor and casement aluminium windows on second floor, sunny daytime street view, architectural realism, clean finish.
> ```
> *Kegunaan*: Gambar utama artikel estimasi biaya ruko, etalase kaca, dan proyek komersial.

#### 4. Proses Fabrikasi / Pemasangan Teknisi di Lapangan
> **Prompt**:
> ```text
> Professional skilled Asian construction technician in safety vest and gloves meticulously installing black aluminium window frame on building wall using level and drill, precise workmanship, sharp focus, clean professional construction site photography.
> ```
> *Kegunaan*: Gambar pendukung untuk artikel tips pemasangan, pencegahan kebocoran, atau studi kasus instalasi.

#### 5. Partisi Kaca Kantor & Ruang Meeting (Contoh: Partisi Kaca Pakis)
> **Prompt**:
> ```text
> Modern minimalist office meeting room interior with sleek frameless and slim aluminium frame 12mm tempered glass partition walls, clean frosted band design, boardroom table, ergonomic chairs, bright natural lighting, professional office architectural photography.
> ```
> *Kegunaan*: Gambar utama artikel partisi kaca kantor, sekat tempered, atau ruang komersial.

#### 6. Sekat Kaca Minimalis / Ruang Kerja Terbuka
> **Prompt**:
> ```text
> Clean modern contemporary office interior with aluminium framed glass partition dividers between work desks and private office booths, bright ambient lighting, aesthetic minimalist workspace, high resolution.
> ```
> *Kegunaan*: Gambar pelengkap partisi kaca, cubicle kantor, dan desain interior modern.

---

### 🧩 Formula Template Pembuatan Prompt Baru (Reusable Formula)

Jika membuat prompt untuk topik artikel baru lainnya, ikuti struktur formula 5 elemen berikut:

```text
[Tipe Subjek Bangunan/Ruang] + [Spesifikasi Kusen Aluminium / Kaca / Warna Finishing] + [Lokasi & Konteks Wilayah Malang/Indonesia] + [Detail Arsitektural & Pencahayaan Natural] + [Style Directive: architectural photography, hyper-realistic, sharp focus, 16:9]
```


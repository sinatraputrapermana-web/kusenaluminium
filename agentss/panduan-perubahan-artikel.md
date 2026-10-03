# SOP & PANDUAN KONVERSI ARTIKEL MENJADI FILE .MD
**KUSEN ALUMINIUM Malang (`https://kusenaluminium.web.id`)**

Dokumen ini adalah instruksi standar untuk mengubah draft teks artikel mentah (artikel pilar / blog SEO) menjadi file dokumen Markdown berekstensi `.md`.

---

## ⛔ ATURAN UTAMA & LARANGAN MUTLAK (STRICT RULES)

1. **DILARANG KERAS MENGUBAH ISI DARI ARTIKEL**:
   - **TIDAK BOLEH** memparafrase, meringkas, merangkum, atau mengubah susunan kalimat.
   - **TIDAK BOLEH** mengoreksi ejaan, mengganti pilihan kata, atau menghapus paragraf/poin tertentu.
   - **TIDAK BOLEH** menambahkan opini pribadi, teks sambutan, atau konten baru ke dalam naskah artikel.
2. **PRESERVASI 100% TEKS ASLI (1:1 VERBATIM)**:
   - Seluruh teks input wajib disalin persis apa adanya mulai dari baris pertama hingga baris terakhir.
   - Bagian metadata SEO, judul, paragraf, list, data harga, nama narasumber, testimoni, tautan/link, hingga daftar FAQ harus tetap utuh.
3. **HANYA MENGUBAH FORMAT MENJADI FILE `.md`**:
   - Fungsi utama dari perintah ini **hanya membungkus / menyimpan teks yang diberikan ke dalam file berekstensi `.md` (Markdown)** secara presisi dan rapi.

---

## ⚡ INSTRUKSI CEPAT (QUICK TRIGGER PROMPT)

Gunakan format instruksi berikut di kolom chat setiap kali ingin mengubah draft artikel menjadi file `.md`:

```text
Tolong ubah tulisan artikel ini menjadi file .md sesuai dengan aturan di panduan-perubahan-artikel.md:
(DILARANG KERAS UNTUK MENGGANTI ISI DARI ARTIKEL, HANYA MENGUBAH MENJADI .MD SAJA!)

[TEMPELKAN DRAFT TEKS ARTIKEL LENGKAP DI SINI]
```

---

## 📁 ATURAN PENENTUAN NAMA FILE (.MD)

Penamaan file `.md` harus mengikuti aturan hierarki berikut:

1. **Prioritas Utama (Dari Saran Permalink)**:
   - Jika di dalam draft artikel terdapat baris metadata `Saran Permalink:` (misalnya: `/jasa-pasang-kusen-aluminium-malang`), maka nama file wajib diambil dari slug tersebut:
     👉 `jasa-pasang-kusen-aluminium-malang.md`
2. **Prioritas Cadangan (Dari Primary Keyword / Judul)**:
   - Jika tidak terdapat baris permalink eksplisit, gunakan kata kunci utama (*Primary Keyword*) atau judul artikel yang diubah ke format kebab-case (huruf kecil semua, spasi diganti tanda strip `-`).
     👉 Contoh: `Primary Keyword: jasa pasang kusen aluminium` ➔ `jasa-pasang-kusen-aluminium.md`
3. **Lokasi File**:
   - Simpan langsung di root direktori workspace proyek:
     `d:\Magang Industri\kusenaluminiumweb\kusenaluminium\[nama-slug-artikel].md`

---

## 📋 STRUKTUR ISI FILE .MD YANG DIHASILKAN

File `.md` yang dihasilkan harus memuat seluruh blok teks asli tanpa ada yang terlewat:

```markdown
[ARTIKEL PILAR]
BAGIAN 1: METADATA SEO
Meta Title Jurnalistik: ...
Meta Description: ...
Saran Permalink: /...
Primary Keyword: ...
Secondary Keyword: ...

BAGIAN 2: ARTIKEL LENGKAP
[Seluruh isi badan artikel asli tanpa modifikasi...]

[Kutipan Narasumber / Spesialis...]

[Rincian Biaya / Estimasi Harga...]

[Testimoni Klien & Portofolio...]

[Kesimpulan...]

FAQ Seputar ...
[Pertanyaan 1]
[Jawaban 1]
[Pertanyaan 2]
[Jawaban 2]
[Pertanyaan 3]
[Jawaban 3]
```

---

## ✅ CHECKLIST VALIDASI HASIL KONVERSI

Sebelum menyatakan konversi selesai, periksa checklist berikut:

- [ ] File berekstensi `.md` dan tersimpan di lokasi direktori yang tepat.
- [ ] Nama file sesuai dengan *Saran Permalink* (format kebab-case).
- [ ] Tidak ada satupun kata, angka, atau tautan yang diubah, dihapus, atau ditambah.
- [ ] Tanda baca, spasi, dan jeda baris antar paragraf tetap terjaga dengan baik.
- [ ] Dokumen siap digunakan sebagai sumber naskah baku untuk konversi lanjutan ke HTML artikel blog.

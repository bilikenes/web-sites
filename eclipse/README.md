# Eclipse Space (www.eclipse.space) - Web Sitesi ve Kaynak Kodları Arşivi

Bu dizin, **https://www.eclipse.space/** web sitesinin tüm sayfalarını, Webflow ve JavaScript kodlarını, GSAP ve Lenis animasyon kütüphanelerini, CSS stillerini, web fontlarını (`.woff2`), yüksek çözünürlüklü AVIF/WebP görsellerini ve arka plan video döngülerini (`.mp4`, `.webm`) içerir.

---

## 📁 Dizin Yapısı

- `index.html`: Ana sayfa (çevrimdışı ve yerel sunucu uyumlu bağlantılarla).
- `index.original.html`: Sunucudan indirilen orijinal ham ana sayfa HTML'i.
- `raw_pages/`: Sitedeki 20 sayfanın dokunulmamış orijinal HTML kopyaları.
- `cdn.prod.website-files.com/`: Webflow CDN'inden indirilen tüm CSS stilleri, JS scriptleri, web fontları, AVIF/WebP görselleri ve videolar.
- `d3e54v103j8qbb.cloudfront.net/`: Webflow çekirdek kütüphaneleri (jQuery vb.).
- `cdn.jsdelivr.net/`: GSAP, ScrollTrigger ve Lenis smooth scroll kütüphaneleri.
- `s3.amazonaws.com/`: Arka plan ve banner video dosyaları.
- `formatted_code/`: İnceleme ve geliştirme kolaylığı için biçimlendirilmiş (unminified / prettified) JS ve CSS kodları.
- `solution/`, `about/`, `surgesat/`, `citrasat/`, `slicesat/`, `careers/`, `contact/`, `job-listings/`: Tüm alt sayfalar (her biri hem klasör içi `index.html` hem de `.html` formatında mevcuttur).
- `robots.txt`, `favicon.ico`: Arama motoru direktifleri ve site ikonu.
- `serve.py`: Siteyi tek tıkla yerel sunucuda başlatma aracı.

---

## 🚀 Yerel Olarak Çalıştırma

Siteyi tarayıcınızda tüm video, görsel, font ve animasyonlarıyla yerel olarak görüntülemek için:

### Yöntem 1: Python ile (Önerilen)
```bash
python serve.py
```
Bu komut varsayılan olarak `http://localhost:8082` adresini tarayıcınızda otomatik açar.

### Yöntem 2: Standart Python HTTP Sunucusu
```bash
python -m http.server 8082
```

### Yöntem 3: Node.js (npx) ile
```bash
npx serve .
```

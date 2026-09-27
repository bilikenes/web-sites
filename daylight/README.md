# Daylight Computer (daylightcomputer.com) - Web Sitesi ve Kaynak Kodları Arşivi

Bu dizin, **https://daylightcomputer.com/** web sitesinin tüm sayfalarını, Next.js kaynak kodlarını, CSS stillerini, fontlarını, ürün ve blog görsellerini, videolarını ve Mux animasyonlarını içerir.

---

## 📁 Dizin Yapısı

- `index.html`: Ana sayfa (çevrimdışı ve yerel sunucu uyumlu bağlantılarla).
- `index.original.html`: Sunucudan indirilen orijinal ham ana sayfa HTML'i.
- `raw_pages/`: Sitedeki tüm sayfaların dokunulmamış orijinal HTML kopyaları.
- `_next/static/chunks/`: Next.js JavaScript paketleri (Webpack runtime, sayfa ve bileşen chunk'ları).
- `_next/static/css/`: Tailwind CSS ve global tasarım stilleri (4 CSS dosyası).
- `_next/static/media/`: Web fontları (`.woff`) ve vektör/PNG marka grafikleri.
- `images/`: Ürün fotoğrafları, blog illüstrasyonları, animasyonlu gif/mp4 videoları ve ikonlar.
- `image.mux.com/`: Mux video akış servisinden alınan animasyonlu webp ve önizleme kareleri.
- `formatted_code/`: Okuma ve inceleme kolaylığı için biçimlendirilmiş (unminified / prettified) JS ve CSS kodları.
- `product/`, `manifesto/`, `blog/`, `labs/`, `faq/`, `testimonials/`, `newsletter/`, `cart/`: Sitenin tüm sayfaları (her biri hem `index.html` hem de `.html` formatında mevcuttur).
- `robots.txt`, `sitemap.xml`, `sitemap-0.xml`: Site haritası ve robot direktifleri.
- `favicon.ico`, `manifest.webmanifest`, `opengraph-image.png`: Web manifesti ve sosyal paylaşım grafikleri.
- `serve.py`: Siteyi tek tıkla yerel sunucuda başlatma aracı.

---

## 🚀 Yerel Olarak Çalıştırma

Siteyi tarayıcınızda açıp tüm video ve görselleriyle görüntülemek için:

### Yöntem 1: Python ile (Önerilen)
```bash
python serve.py
```
Bu komut varsayılan olarak `http://localhost:8081` adresini tarayıcınızda otomatik açar.

### Yöntem 2: Standart Python HTTP Sunucusu
```bash
python -m http.server 8081
```

### Yöntem 3: Node.js (npx) ile
```bash
npx serve .
```

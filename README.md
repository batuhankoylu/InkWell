# Inkwell Landing Page

Inkwell icin tek sayfa, responsive ve animasyonlu tanitim sitesi.

## GitHub Pages yayinlama

1. Bu projeyi bir GitHub reposuna yukle.
2. `main` branch'ine push et.
3. GitHub'da `Settings > Pages` bolumune gir.
4. `Build and deployment` kismini `GitHub Actions` olarak sec.
5. Workflow tamamlandiginda site yayinlanir.

## Indexleme ve SEO kontrol listesi

- `index.html` icinde `title`, `description`, `canonical`, Open Graph ve Twitter etiketleri tanimli.
- `robots.txt` ve `sitemap.xml` dosyalari tanimli.
- `site.webmanifest` ile temel PWA metadata tanimli.
- Yapilandirilmis veri (JSON-LD `WebSite`) ekli.

## Yayin oncesi degistirilmesi gereken alanlar

Asagidaki placeholder URL degerlerini kendi repo adresinle guncelle:

- `index.html` icindeki `https://USERNAME.github.io/REPO/`
- `robots.txt` icindeki sitemap adresi
- `sitemap.xml` icindeki `loc`

Ornek:

`https://kullaniciadi.github.io/inkwell/`

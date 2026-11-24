# GD Wellness — лендинг сообщества по выпечке на закваске

Сайт: https://www.gdwellness.net (деплой на Vercel из ветки `main`).

## Запуск

Нужен Node.js 20.19+ или 22.12+.

```bash
npm install
npm run dev      # локальная разработка
npm run build    # сборка в dist/
```

## Где что лежит

- `src/App.tsx` — вся страница: стили (styled-components), тексты, ссылки.
  Ссылка на оплату — константа `joinLink`; там же дата окончания акции (`promoActive`).
- `src/assets/MyBread/optimized`, `src/assets/Reviews/optimized` — полноразмерные фото для просмотра.
- `src/assets/*/thumbs` — уменьшенные превью (до 560px) для сетки галереи.
- `public/hero.jpg` — фон первого экрана, `public/og-image.jpg` — превью ссылки (1200×630).
- `vercel.json` — долгий кэш для файлов сборки.

При добавлении фото в галерею положите полную версию в `optimized/`,
превью — в `thumbs/` с тем же именем и расширением `.jpg`, и допишите имя файла в `galleryImageFiles`.

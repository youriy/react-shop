# React Shop

Реализация задачи с https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6

Demo: https://react-shop-sepia.vercel.app/

## Стек

React 18, Redux Toolkit + React Redux, MUI, `react-responsive-carousel`, Fancybox, SCSS (CSS Modules), Webpack 5.

## Запуск

```bash
npm install
npm start          # dev-сервер: http://localhost:301
npm run build      # сборка в public/bundle.js
```

## Структура

```
src/
  index.jsx           точка входа: createRoot + глобальные стили
  App.jsx             корневой компонент: Provider + Layout
  components/
    Layout.jsx        каркас страницы (header + main)
    header/           шапка, попап корзины, мобильное меню
    main/             слайдер, описание товара, цена, выбор количества
  data/               статические данные (товар, пункты меню)
  store/              cartSlice, селекторы, синхронизация корзины с localStorage
  utils/              форматирование и расчёт цен
  scss/               токены темы, миксины, глобальные стили
```

## Соглашения

- Стили компонентов — CSS-модули (`*.module.scss`) с БЭМ-именованием.
- Общие токены и миксины подключаются из `src/scss` (`@import "src/scss/mixins"`).
- Глобальные стили и переопределения сторонних виджетов живут только в `src/scss/global.scss`.
- Редьюсеры чистые: персистентность корзины реализована подпиской на стор в `src/store/store.js`.
- Состояние, которое можно вычислить (количество товаров в корзине, итоговая цена), вычисляется через селекторы и утилиты, а не хранится в локальном состоянии.

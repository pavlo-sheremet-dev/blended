# Пошук зображень

Напиши застосунок пошуку зображень за ключовим словом. Прев'ю робочого
застосунку

[![Превью](https://i.gyazo.com/76384ee7d41664406ee52acb77351f07.jpg)](https://gyazo.com/76384ee7d41664406ee52acb77351f07)

Доповни компоненти `<Form>`, `<PhotosGallery>`, `<PhotosGalleryItem>`. Для
створення сітки використовуй компоненти `<Grid>` та `<GridItem>`

> Тут самі файли [Grid](./src/components/Grid/Grid.jsx)

В проекті налаштовані Alias imports тому імпорти можна вказувати з папки
`components`

```jsx
import { Text } from 'components';
```

## Інструкція Pexels API

Для HTTP-запитів використовуй публічний сервіс пошуку зображень
[ Pexels](https://www.pexels.com/api/documentation/). Приклад HTTP-запиту.

```js
import axios from 'axios';

const API_KEY = 'тут вставити ключ';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};
```

Pexels API підтримує пагінацію, за замовчуванням параметр `page` дорівнює `1`.
Нехай у відповіді надходить по 15 об'єктів, встановлено в параметрі `per_page`.
Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати
значення `page` до `1`.

У відповіді від API приходить масив об'єктів, в яких тобі цікаві лише наступні
властивості.

- `id` - унікальний ідентифікатор
- `avg_color` - колір фотографії,
- `alt` - опис фото,
- `src` - об'єкт з розмірами картинок, нам цікавий розмір `large`

## Опис компонента `<Form>`

Компонент приймає один проп `onSubmit` - функцію для передачі значення інпута
під час сабміту форми. Він буде наступної структури.

```jsx
<form className={style.form}>
  <button className={style.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="search"
    required
    autoFocus
  />
</form>
```

## Опис компонента галереї `<PhotosGallery/>`

Для створення списку зображень в компоненті `<PhotosGallery/>` потрібно
використати універсальний компонент для створення сітки `<Grid>`.

```jsx
<Grid>
  {/*
     array.map(()=> <PhotosGalleryItem/>);
    */}
</Grid>
```

## Опис компонента `<GridItem>`

Для створення однієї одного елемента списку потрібно використати
`<PhotosGalleryItem>`, який використовує `<GridItem/>`

Компонент елемента списку із зображенням. Створює компонент наступної структури.

```jsx
<GridItem>
  <div
    className={styles.thumb}
    style={{ backgroundColor: avg_color, borderColor: avg_color }}
  >
    <img src={src.large} alt={alt} />
  </div>
</GridItem>
```

## Опис компонента `<Button>`

При натисканні на кнопку `Load more` повинна довантажуватись наступна порція
зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише
тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка
не рендериться.

## Опис компонента `<Loader>`

Під час відправки запиту на Pexels необхідно відображати компонент `<Loader/>`

```jsx
<div className={style.backdrop}>spinner</div>
```

Для відображення спінера можна використати бібліотеку `react-spinners`

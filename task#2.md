# TODO LIST

- Напиши застосунок зберігання todo-листів.
- Під час додавання та видалення контакту контакти зберігаються у
  `localStorage`.
- Під час завантаження застосунку todo-листа, якщо такі є, зчитуються з
  локального сховища і записуються у внутрішній стан компонента `Todos`.

  В проекті налаштовані Alias imports тому всі імпорти можна вказувати з папки
  `components`

```jsx
import { Text } from 'components';
```

## Крок 1

Застосунок повинен складатися з форми і списку todo-листів. На поточному кроці
реалізуй додавання тудушки та відображення їх списку. Застосунок повинен
зберігати тудушки між різними сесіями (оновлення сторінки).

Використовуйте готову структуру форми з попередньго таска: компонент `<Form/>`
приймає один проп `onSubmit` - функцію для передачі значення інпута під час
сабміту форми.

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

`state`, що зберігається в батьківському компоненті `<Todos/>`, обов'язково
повинен бути наступного вигляду.

```bash
  const [todos, setTodos] = useState([]);
```

Кожна todo повинна бути об'єктом з властивостями `text` та `id`. Для генерації
ідентифікаторів використовуй будь-який відповідний пакет, наприклад
[nanoid](https://www.npmjs.com/package/nanoid). Після завершення цього кроку,
застосунок повинен виглядати приблизно так.

[![preview](https://i.gyazo.com/de0115918db7d989fbdc10f1744c11c3.png)](https://gyazo.com/de0115918db7d989fbdc10f1744c11c3)

### Опис компонента галереї `<TodoList/>`

Список карток тудушок. Створює компонент наступної структури. Для створення
списку потрібно використати універсальний компонент `<Grid/>`

```jsx
<Grid>
  {array.map(() => (
    <TodoListItem />
  ))}
</Grid>
```

### Опис компонента `<TodoListItem/>`

Компонент елемента тудушки. Створює компонент наступної структури. Для створення
одного елемента списку потрбно використати універсальний компонент `<GridItem/>`

```jsx
<GridItem>
  <div className={style.box}>
    <Text textAlign="center" marginBottom="20">
      TODO #1
    </Text>
    <Text>Some description</Text>
    <button className={style.deleteButton} type="button">
      <RiDeleteBinLine size={24} />
    </button>
  </div>
</GridItem>
```

### Опис компонента `<Todo/>`

## Крок 2

Розшир функціонал застосунку, дозволивши користувачеві видаляти раніше збережені
тудушки.

[![preview](https://i.gyazo.com/8bf303fed0163b544d5c2314fe1df133.gif)](https://gyazo.com/8bf303fed0163b544d5c2314fe1df133)

## Крок 3 Завдання з \* (не обов'язкове)

Додай можливість редагувати попередньо створені todo

Після додавання кнопки редагування компонент `<TodoListItem/>` буде мати такий
вигляд

```jsx
<GridItem>
  <div className={style.box}>
    <Text textAlign="center" marginBottom="20">
      TODO #1
    </Text>
    <Text>Some description</Text>
    <button className={style.deleteButton} type="button">
      <RiDeleteBinLine size={24} />
    </button>

    <button className={style.editButton} type="button">
      <RiEdit2Line size={24} />
    </button>
  </div>
</GridItem>
```

Компонент форми для редагування `<EditForm/>` буде мати такий вигляд

```jsx
<form className={style.form}>
  <button className={style.submitButton} type="submit">
    <RiSaveLine color="green" size="16px" />
  </button>

  <button className={style.editButton} type="button">
    <MdOutlineCancel color="red" size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="text"
    required
    defaultValue={defaultValue}
    autoFocus
  />
</form>
```

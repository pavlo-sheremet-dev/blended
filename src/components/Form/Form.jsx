import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

export const Form = ({ handleSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.search.value.trim().toLowerCase();
    if (value === "") return e.target.reset(); 
    handleSubmit(value);
    e.target.reset();
  };
  return (
    <>
      <form className={style.form} onSubmit={onSubmit}>
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
    </>
  );
};

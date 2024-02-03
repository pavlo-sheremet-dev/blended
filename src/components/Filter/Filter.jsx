import { CiSearch } from "react-icons/ci";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterValue } from "../../redux/filterSlice";
import { selectFilterValue } from "../../redux/selectors";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);
  const handleChange = (e) => {
    dispatch(changeFilterValue(e.target.value));
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          onChange={handleChange}
          className={styles.searchInput}
          type="text"
          id="search"
          placeholder="Search something.."
          value={filter}
        />
      </div>
    </div>
  );
};

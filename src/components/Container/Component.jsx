import css from "./styles.module.css";

const Component = ({ children }) => {
  return <div className={css.box}>{children}</div>;
};

export default Component;

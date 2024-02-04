import styles from './Grid.module.css';

export const Grid = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

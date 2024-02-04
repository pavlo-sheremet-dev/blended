import styles from './GridItem.module.css';

export const GridItem = ({ children }) => {
  return <li className={styles.item}>{children}</li>;
};

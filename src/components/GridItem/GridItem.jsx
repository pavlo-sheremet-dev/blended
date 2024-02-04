import styles from "./GridItem.module.css"
export const GridItem = ({ avg_color, src, alt}) => {
  return (
    <div
      className={styles.thumb}
      style={{ backgroundColor: avg_color, borderColor: avg_color }}
    >
      <img src={src.large} alt={alt} />
    </div>
  );
};

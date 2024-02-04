import { GridItem } from '..';
import styles from './PhotosGalleryItem.module.css';

export const PhotosGalleryItem = ({ photo: { avg_color, src, alt } }) => {
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
      >
        <img src={src.large} alt={alt} />
      </div>
    </GridItem>
  );
};

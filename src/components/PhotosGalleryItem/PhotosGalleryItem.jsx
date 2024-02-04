import { GridItem } from '..';
import styles from './PhotosGalleryItem.module.css';

export const PhotosGalleryItem = ({ photo: { color, src, alt } }) => {
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{ backgroundColor: color, borderColor: color }}
      >
        <img src={src} alt={alt} />
      </div>
    </GridItem>
  );
};

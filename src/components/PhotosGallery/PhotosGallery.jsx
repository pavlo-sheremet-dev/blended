import { Grid, PhotosGalleryItem } from '..';

export const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map(photo => (
        <PhotosGalleryItem key={photo.id} photo={photo} />
      ))}
    </Grid>
  );
};

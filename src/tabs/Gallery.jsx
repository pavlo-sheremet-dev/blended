import { useState, useEffect } from 'react';
// import * as ImageService from '../service/image-service';
import { getImages } from '../service/image-service';
import {
  Button,
  SearchForm,
  Grid,
  GridItem,
  Text,
  CardItem,
} from '../components';

export const Gallery = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '' && page === 1) return;
    async function searchPhoto() {
      try {
        const images = await getImages(query, page);
        setGallery(prev => [...prev, ...images]);
      } catch (error) {
        setError(error.message);
      }
    }
    searchPhoto();
  }, [query, page, error]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setGallery([]);
  };

  return (
    <>
      <SearchForm getQuery={handleSubmit} />

      {gallery.length === 0 && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}

      {gallery.length > 0 && (
        <>
          <Grid>
            {gallery.map(({ id, src: { large }, alt }) => {
              return (
                <GridItem key={id}>
                  <CardItem>
                    <img src={large} alt={alt} />
                  </CardItem>
                </GridItem>
              );
            })}
          </Grid>
          <Button>Load More</Button>
        </>
      )}
    </>
  );
};

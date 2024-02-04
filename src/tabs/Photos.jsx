import { getPhotos } from 'apiService/photos';
import { Button, Form, Loader, PhotosGallery } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const handleSubmit = query => {
    setPage(1);
    setPhotos([]);
    setTotalResults(0);
    setQuery(query);
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    getPhotos(query, page)
      .then(data => {
        setTotalResults(data.totalPhotos);
        setPhotos(oldPhotos => [...oldPhotos, ...data.photos]);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));

    // const asyncWrapper = async () => {
    //   try {
    //     setIsLoading(true);
    //     const { totalPhotos, photos } = await getPhotos(query, page);
    //     setTotalResults(totalPhotos);
    //     setPhotos(oldPhotos => [...oldPhotos, ...photos]);
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // asyncWrapper();

    // (async () => {
    //   try {
    //     setIsLoading(true);
    //     const { totalPhotos, photos } = await getPhotos(query, page);
    //     setTotalResults(totalPhotos);
    //     setPhotos(oldPhotos => [...oldPhotos, ...photos]);
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // })();
  }, [page, query]);

  const onClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <PhotosGallery photos={photos} />
      {photos.length < totalResults && (
        <Button onClick={onClick}>Load more...</Button>
      )}
      {isLoading && <Loader />}
    </>
  );
};

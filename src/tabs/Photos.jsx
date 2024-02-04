import { getPhotos } from 'apiService/photos';
import { Form, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  const handleSubmit = query => {
    setPage(1);
    setQuery(query);
  };

  useEffect(() => {
    if (!query) return;
    getPhotos(query, page).then(data => {
      setPhotos(data.photos);
    });
  }, [page, query]);

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <PhotosGallery photos={photos} />
    </>
  );
};

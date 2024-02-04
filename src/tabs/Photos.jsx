// import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1); 
  const handleSubmit = (query) => { 
    setPage(1); 
    setQuery(query);
  }

  useEffect(() => { 
    if (!query) return;

  }, [page, query])
  return (
    <>
      <Form handleSubmit={handleSubmit} />
    </>
  );
};

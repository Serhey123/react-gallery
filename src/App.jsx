import React, { useState } from 'react';
import GalleryRender from './components/GalleryRender/GalleryRender';
import Searchbar from './components/Searchbar/Searchbar';

import Container from './components/Container/Container';
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const onFetch = res => {
    setImages(prevState => [...prevState, ...res.hits]);
  };

  const onSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  return (
    <React.StrictMode>
      <Searchbar onSubmit={onSubmit} />
      <Container>
        <ImageGallery query={query} images={images} />
      </Container>
      <GalleryRender
        onClick={() => setPage(prevState => prevState + 1)}
        onFetch={onFetch}
        query={query}
        images={images}
        page={page}
      />
    </React.StrictMode>
  );
}

export default App;

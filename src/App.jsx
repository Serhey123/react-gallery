import React, { Component } from 'react';
import GalleryRender from './components/GalleryRender/GalleryRender';
import Searchbar from './components/Searchbar/Searchbar';

import Container from './components/Container/Container';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import { ColorRing } from 'react-loader-spinner';
// import LoadBtn from './components/LoadBtn/LoadBtn';

// const KEY = '31608339-0446588eb00af9daeb22c7801';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  onFetch = res => {
    this.setState(prevState => ({
      images: [...prevState.images, ...res.hits],
    }));
  };

  onSubmit = query => {
    this.setState({ query: query, images: [], page: 1 });
  };

  onClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <React.StrictMode>
        <Searchbar onSubmit={this.onSubmit} />
        <Container>
          <ImageGallery query={this.state.query} images={this.state.images} />
        </Container>
        <GalleryRender
          onClick={this.onClick}
          onFetch={this.onFetch}
          query={this.state.query}
          images={this.state.images}
          page={this.state.page}
        />
      </React.StrictMode>
    );
  }
}

export default App;

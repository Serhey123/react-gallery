import React, { Component } from 'react';

import Container from './components/Container/Container';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadBtn from './components/LoadBtn/LoadBtn';

class App extends Component {
  state = {
    query: '',
    page: 1,
  }; 

  onSubmit = (query) =>{
    this.setState({query: query})
  }

  btnHandler = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <React.StrictMode>
        <Searchbar onSubmit={this.onSubmit}/>
        <Container>
          <ImageGallery query={this.state.query} page={this.state.page}/>
        </Container>
        <LoadBtn btnHandler={this.btnHandler}/>
      </React.StrictMode>
    );
  }
}

export default App;

import css from './Styles.module.css';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from "./Searchbar/Searchbar";



export class App extends Component {
  state = {
  
  };

  handleInputChange = e => {
this.setState({photoname: e.target.value})
  };

  render() {
  return (
    <div className={css.App}>
      <Searchbar
        onChange={this.handleInputChange}
      ></Searchbar>
      <ImageGallery></ImageGallery>
    </div>
  );
}
  
};

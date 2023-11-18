import { Component } from 'react';

import * as ImageService from '../service/image-service';
import {
  Button,
  SearchForm,
  Grid,
  GridItem,
  Text,
  CardItem,
} from '../components';

export class Gallery extends Component {
  state = {
    query: '',
  };
  getQuery = formData => {
    this.setState({ query: formData });
  };
  render() {
    return (
      <>
        <SearchForm getQuery={this.getQuery}></SearchForm>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}

import React, { Component } from 'react';
import { View } from 'react-native';
import api from '../../services/api';
import propTypes from 'prop-types';

// import { Container } from './styles';

export default class User extends Component {
  state = {
    stars:[],
  }
  static propTypes ={
    navigation: propTypes.shape({
      navigate:propTypes.func,
    }).isRequired,
  }
  async componentDidMount(){
    const{navigation} = this.props;
    const {user} =  this.props.route.params;
    const response = await api.get(`/users/${user.login}/starred`);
    console.tron.log(response);
    this.setState({stars: response.data});

  }
  render( ){
    return <View/>
  }
}



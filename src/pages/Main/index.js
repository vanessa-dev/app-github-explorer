import React, { Component } from 'react';
import { Keyboard,View , Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form,Input, SubmitButton } from './styles';
import api from'../../services/api';

export default class Main extends Component {
  state ={
    newUser:'',
    users : [],
  }
   async handleAddUser (){
    const{users,newUser} = this.state;
    const response = await api.get(`/users/${newUser}`);
    const data ={
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    }
    this.setState({users:[...users,data],newUser:''});
    Keyboard.dismiss();
  }
  render(){
    const {users,newUser} = this.state;
    return (
    <Container>
      <Form>
        <Input autoCorrect={false} value={newUser} onChangeText={text => this.setState({newUser: text})} retornKeyType="send" onSubmitEditing={this.handleAddUser.bind(this)} autoCapitalize="none" placeholder="Adicionar Usúario"/>
        <SubmitButton onPress={this.handleAddUser.bind(this)}>
        <Icon name="add" size={20} color="#FFF" />
      </SubmitButton>
      </Form>

    </Container>
    );
  }
}


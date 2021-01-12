import React, { Component } from 'react';
import { Keyboard,ActivityIndicator,View , Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText
} from './styles';
import api from'../../services/api';

export default class Main extends Component {
  state ={
    newUser:'',
    users : [],
    loading:false,
  }
   async handleAddUser (){
    const{users,newUser} = this.state;
    this.setState({loading:true});
    const response = await api.get(`/users/${newUser}`);
    const data ={
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    }
    this.setState({users:[...users,data],newUser:'',loading:false});
    console.tron.log(users);
    Keyboard.dismiss();
  }
  render(){
    const {users,newUser,loading} = this.state;
    return (
    <Container>
      <Form>
        <Input autoCorrect={false} value={newUser} onChangeText={text => this.setState({newUser: text})} retornKeyType="send" onSubmitEditing={this.handleAddUser.bind(this)} autoCapitalize="none" placeholder="Adicionar Usúario"/>
        <SubmitButton onPress={this.handleAddUser.bind(this)}>
          {loading ? <ActivityIndicator color="#FFF"/> :<Icon name="add" size={20} color="#FFF" /> }

      </SubmitButton>
      </Form>
      <List
       data={users}
       keyExtractor={user => user.login}
       renderItem ={({item})=>(
        <User>
           <Avatar source={{uri:item.avatar}}></Avatar>
            <Name>{item.name}</Name>
            <Bio>{item.bio}</Bio>
            <ProfileButton onPress={()=>{}}>
              <ProfileButtonText>Ver Perfil</ProfileButtonText>
            </ProfileButton>
          </User>
       )}
      />

    </Container>
    );
  }
}


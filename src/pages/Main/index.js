import React from 'react';
import { View , Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form,Input, SubmitButton } from './styles';

const Main = () => {
  return (
  <Container>
    <Form>
      <Input autoCorrect={false} autoCapitalize="none" placeholder="Adicionar Usúario"/>
      <SubmitButton>
       <Icon name="add" size={20} color="#FFF" />
     </SubmitButton>
    </Form>

  </Container>
  );
}

export default Main;

import styled from 'styled-components/native';
import{ RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
   flex:1;
   padding:30px;
   background:#fff;
`;
export const Form = styled.View`
   flex-direction: row;
   padding-bottom:20px;
   border-bottom-width: 1px;
   border-color:#eee;
`;
export const Input = styled.TextInput.attrs({placeholderTextColor:'#999'})`
   flex:1;
   height:40px;
   background:#Eee;
   border-radius:4px;
   padding:0px 15px;
`;
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items:center;
  background:#FB2;
  border-radius:4px;
  margin-left:10px;
  padding:0px 12px;
`;

import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  padding: 10px; 
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;  
`

export const Square = styled.TouchableOpacity`
  height: 50px;
  background-color: red; 
  margin:10px;
  padding: 10px;
  color: white;
  flex: 1;
`;

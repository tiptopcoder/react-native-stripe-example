import styled from 'styled-components/native';
import React from 'react';

export const Button = styled.TouchableOpacity`
  background-color: rgb(22, 164, 127);
  padding-vertical: 10;
  border-radius: 4;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14;
  font-weight: 700;
`;

export default class extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <Button { ...this.props }>
        <ButtonText>{ title }</ButtonText>
      </Button>
    )
  }
}

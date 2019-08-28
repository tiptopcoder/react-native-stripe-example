import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View``;

const ListItem = styled.View`
  flex-direction: row;
  padding-horizontal: 16;
  padding-vertical: 12;
  border-bottom-width: ${props => props.bottomDivider ? 0.5 : 0};
  border-color: rgba(0, 0, 0, 0.1);
  display: flex;
`;

const ListItemChildren = styled.View`
  flex: 1;
`;

const ListItemLeft = styled(ListItemChildren)`
  flex: 1;
`;

const ListItemRight = styled(ListItemChildren)`
  flex: 1;
  align-items: flex-end;
`;

const Label = styled.Text`
  font-weight: 700;
`;

const LabelLarge = styled(Label)`
  font-size: 18;
`;

const ProductName = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  margin-top: 8
`;

const ButtonPay = styled.TouchableOpacity`
  background-color: rgb(22, 164, 127);
  margin-horizontal: 16;
  padding-horizontal: 16;
  padding-vertical: 8;
  margin-top: 16;
  border-radius: 4;
  align-items: center;
`;

const ButtonPayText = styled.Text `
  color: #fff;
  font-size: 18;
  font-weight: 700;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productPrice: 25,
      shippingPrice: 0,
      shippingType: null,
      paymentMethod: null,
      successful: false
    }
  }

  total() {
    return this.formatCurrency(this.state.productPrice + this.state.shippingPrice);
  }

  formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
  }

  buy() {
    if(!this.state.shippingType) {
      return Alert.alert('Error', 'Please select a shipping method');
    }

    if(!this.state.paymentMethod) {
      return Alert.alert('Error', 'Please select a payment method');
    }

    Alert.alert('Payment Confirmed!', 'Thank you for your purchase!');
  }

  render() {
    const { productPrice, shippingType, paymentMethod } = this.state;

    return (
      <Container>
        {/* product */}
        <ListItem bottomDivider>
          <ListItemLeft>
            <Label>Product</Label>
            <ProductName>Super Dark Sunglasses</ProductName>
          </ListItemLeft>
          <ListItemRight>
            <Text>{this.formatCurrency(productPrice)}</Text>
          </ListItemRight>
        </ListItem>
        {/* shipping */}
        <TouchableOpacity>
          <ListItem bottomDivider>
            <ListItemLeft>
              <Label>Shipping</Label>
            </ListItemLeft>
            <ListItemRight>
              <Text>{shippingType}</Text>
            </ListItemRight>
          </ListItem>
        </TouchableOpacity>
        {/* payment method */}
        <TouchableOpacity>
          <ListItem bottomDivider>
            <ListItemLeft>
              <Label>Payment method</Label>
            </ListItemLeft>
            <ListItemRight>
              <Text>{paymentMethod}</Text>
            </ListItemRight>
          </ListItem>
        </TouchableOpacity>
        {/* total */}
        <ListItem>
          <ListItemLeft>
            <LabelLarge>Payment method</LabelLarge>
          </ListItemLeft>
          <ListItemRight>
            <LabelLarge>{ this.total() }</LabelLarge>
          </ListItemRight>
        </ListItem>
        {/* pay Button */}
        <ButtonPay onPress={this.buy.bind(this)}>
          <ButtonPayText>Buy</ButtonPayText>
        </ButtonPay>
      </Container>
    )
  }
}

import React from 'react';
import { Text, TouchableOpacity, Alert, NativeModules, View } from 'react-native';
import styled from 'styled-components/native';
import BaseButton from './Button';
import axios from '../axiosInstance';

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

const ButtonPay = styled(BaseButton)`
  margin-horizontal: 16;
  margin-top: 16;
`;

const ButtonNewCustomer = styled.TouchableOpacity`
  padding-vertical: 16;
`;

const ButtonNewCustomerText = styled.Text`
  text-align: center;
  color: rgb(172, 0, 32);
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productPrice: 25,
      paymentMethod: null,
      successful: false,
    }
    this.listeners = {}
    this.stripe = NativeModules.RNStripe;
  }

  async componentDidMount() {
    try {
      const key = await this.getEphemeralKey();
      this.stripe.initWithEphemeralKey(key);
    } catch (e) {
      Alert.alert('Error', e.response ? e.response.data.message : e.message);
    }
  }

  componentWillUnmount() {

  }

  formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
  }

  buy() {
    if(!this.state.paymentMethod) {
      return Alert.alert('Error', 'Please select a payment method');
    }

    Alert.alert('Payment Confirmed!', 'Thank you for your purchase!');
  }

  async getEphemeralKey() {
    const { customer } = this.props;
    const response = await axios.get(`/${customer.id}/ephemeral-key`);

    return response.data;
  }

  async getPaymentIntent() {
    const { customer } = this.props;
    const response = await axios.post(`/${customer.id}/payment-intent`);

    return response.data;
  }

  render() {
    const { productPrice, paymentMethod } = this.state;
    const { customer } = this.props;

    return (
      <View>
        {/* customer */}
        <ListItem bottomDivider>
          <ListItemLeft>
            <Label>Customer</Label>
          </ListItemLeft>
          <ListItemRight>
            <Text>{customer.id}</Text>
          </ListItemRight>
        </ListItem>
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
        {/* payment method */}
        <TouchableOpacity onPress={() => this.stripe.selectPaymentOption()}>
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
            <LabelLarge>Total</LabelLarge>
          </ListItemLeft>
          <ListItemRight>
            <LabelLarge>{this.formatCurrency(productPrice)}</LabelLarge>
          </ListItemRight>
        </ListItem>
        {/* pay Button */}
        <ButtonPay onPress={this.buy.bind(this)} title={'Buy'} />
        {/* New customer */}
        <ButtonNewCustomer onPress={this.props.onResetCustomer}>
          <ButtonNewCustomerText>Reset customer</ButtonNewCustomerText>
        </ButtonNewCustomer>
      </View>
    )
  }
}

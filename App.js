import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Checkout from './components/Checkout';
import CustomerForm from './components/CustomerForm';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null,
    }
  }

  onCreateCustomer(customer) {
    this.setState({customer});
  }

  onResetCustomer() {
    this.setState({customer: null});
  }

  render() {
    let content = this.state.customer ? <Checkout onResetCustomer={this.onResetCustomer.bind(this)} customer={this.state.customer} /> : <CustomerForm onCreate={this.onCreateCustomer.bind(this)} />;

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          {content}
        </SafeAreaView>
      </Fragment>
    );
  }
}

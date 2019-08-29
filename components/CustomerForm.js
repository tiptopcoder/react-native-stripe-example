import React, {Fragment} from 'react';
import styled from 'styled-components/native';
import BaseButton from './Button';
import { ActivityIndicator, Alert } from 'react-native';
import axios from '../axiosInstance';

const Form = styled.View`
  padding-horizontal: 16;
  flex: 1;
  justify-content: center;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  async generateCustomer() {
    try {
      this.setState({loading: true});
      const response = await axios.post('/customers');
      this.props.onCreate(response.data);
    } catch (e) {
      Alert.alert('Error', e.response ? e.response.data.message : e.message);
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <Form>
        {
          loading ? <ActivityIndicator /> : (
            <BaseButton title={'Generate customer'} onPress={this.generateCustomer.bind(this)} />
          )
        }
      </Form>
    )
  }
}

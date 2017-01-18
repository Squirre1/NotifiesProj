import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';


export default class NotifyRow extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, date } = this.props;

    return (
      <View style={styles.notifyRow}>
        <Text style={styles.notifyLabel}>{title}</Text>
        <Text style={styles.notifyLabel}>{date}</Text>
      </View>
    );
  }
}


NotifyRow.propTypes = {
  title: React.PropTypes.string,
  date: React.PropTypes.string,
};

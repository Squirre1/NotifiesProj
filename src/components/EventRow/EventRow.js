import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './style';


export default class EventRow extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { notifications, onNotifyPress } = this.props;

    return (
      <View style={styles.eventRow}>
        <Text style={styles.eventLabel}>ШАПКА СТРОКИ</Text>
        <View style={styles.bellRow}>
          <Icon
            name="bell"
            type="font-awesome"
            color="#517fa4"
            button
            raised
            containerStyle={styles.bellButtonStyle}
            onPress={onNotifyPress}
          />
          {!!notifications.length &&
            <Text style={styles.bellCountStyle}>{notifications.length}</Text>
          }
        </View>
      </View>
    );
  }
}


EventRow.propTypes = {
  notifications: React.PropTypes.array,
  onNotifyPress: React.PropTypes.func,
};

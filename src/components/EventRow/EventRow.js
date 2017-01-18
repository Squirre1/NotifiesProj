import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { Icon } from 'react-native-elements'
import styles from './style';


export default class EventRow extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { notifications } = this.props;
    const activeNotifications = notifications.filter(notify => !notify.unread);

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
          />
          {!!activeNotifications.length &&
            <Text style={styles.bellCountStyle}>{activeNotifications.length}</Text>
          }
        </View>
      </View>
    );
  }
}


EventRow.propTypes = {
  notifications: React.PropTypes.array,
};

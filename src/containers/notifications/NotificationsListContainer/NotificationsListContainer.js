import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavigationBar from 'react-native-navbar';
import { Button, FormInput } from 'react-native-elements';
import { NotificationsListContainerSelector } from '@selectors';
import { NavbarStyles, NavBarButton } from '@appComponents/NavBar';

import styles from './styles';

const titleConfig = {
  title: 'Notifications',
  tintColor: 'white',
};

class NotificationsListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.notifyList}>
        <NavigationBar
          title={titleConfig}
          tintColor="#9824AC"
          color="white"
          style={NavbarStyles.navBar}
          statusBar={{ style: 'light-content' }}
        />
        { this.renderEvent() }
        <ScrollView style={styles.buttonsBlock}>
          <View style={styles.sendingBlock}>
            <FormInput
              placeholder="Название события"
              containerStyle={styles.inputContainerStyle}
              underlineColorAndroid="transparent"
            />
            <Button
              raised
              icon={{ name: 'send' }}
              title="ОТПРАВИТЬ"
              buttonStyle={styles.buttonStyle}
            />
          </View>
          <Button
            raised
            title="ПОМЕТИТЬ ВСЕ СОБЫТИЯ ПРОЧИТАННЫМИ"
            buttonStyle={styles.buttonStyle}
          />
          <Button
            raised
            icon={{ name: 'delete' }}
            title="УДАЛИТЬ ВСЕ СОБЫТИЯ"
            buttonStyle={styles.buttonStyle}
          />
        </ScrollView>
      </View>
    );
  }

  renderEvent() {
    return (
      <View>
        <Text>event</Text>
      </View>
    );
  }

}

NotificationsListContainer.propTypes = {
  notifications: React.PropTypes.array,
};

NotificationsListContainer.defaultProps = {
  notifications: [],
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(NotificationsListContainerSelector, mapDispatchToProps)(NotificationsListContainer);

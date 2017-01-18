import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavigationBar from 'react-native-navbar';
import { Button, FormInput } from 'react-native-elements';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import { NotificationsListContainerSelector } from '@selectors';
import { NavbarStyles } from '@appComponents/NavBar';
import { EventRow } from '@appComponents/EventRow';
import { NotifyRow } from '@appComponents/NotifyRow';
import { POPOVER_COUNT } from '@constants/commons';
import moment from 'moment';

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
    const { notifications } = this.props;

    return (
      <View style={styles.notifyList}>
        <NavigationBar
          title={titleConfig}
          tintColor="#9824AC"
          color="white"
          style={NavbarStyles.navBar}
          statusBar={{ style: 'light-content' }}
        />
        <View style={styles.eventBlock}>
          <EventRow
            notifications={notifications}
            onNotifyPress={() => this.popupDialog.openDialog()}
          />
        </View>
        <View style={styles.buttonsBlock}>
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
        </View>
        <PopupDialog
          dialogTitle={<DialogTitle title="УВЕДОМЛЕНИЯ" />}
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
        >
          {notifications.slice(0, POPOVER_COUNT).map(notify =>
              <NotifyRow
                title={notify.title}
                date={moment(notify.datetime).fromNow()}
              />
          )}
        </PopupDialog>
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

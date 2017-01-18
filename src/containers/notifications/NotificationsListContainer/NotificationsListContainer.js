import React from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationsListContainerSelector } from '@selectors';
import { NavbarStyles, NavBarButton } from '@appComponents/NavBar';
import NavigationBar from 'react-native-navbar';
import styles from './styles';

const titleConfig = {
  title: 'Notifications',
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
          tintColor="#00aeef"
          style={NavbarStyles.navBar}
          statusBar={{ style: 'light-content' }}
        />
        { this.renderEvent() }
      </View>
    );
  }

  renderEvent() {
    return (
      <View>
        event
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

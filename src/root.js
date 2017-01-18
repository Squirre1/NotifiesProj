import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { NotificationsListContainer } from '@appContainers/notifications';
import { Provider, connect } from 'react-redux';

const RouterWithRedux = connect()(Router);
import { store } from './store/store';

export default class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Provider store={store}>
      <RouterWithRedux>
        <Scene key="root" tabs hideNavBar hideTabBar>
          <Scene key="notifications">
            <Scene key="notificationsList" component={NotificationsListContainer} title="NotificationsList" hideNavBar />
          </Scene>
        </Scene>
      </RouterWithRedux>
    </Provider>;
  }
}

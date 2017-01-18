export const NotificationsListContainerSelector = state => {
  const { notifications } = state.entities;
  const activeNotifications = notifications.filter(notify => notify.unread);

  return {
    notifications: activeNotifications.sort((prev, next) => next.datetime - prev.datetime),
  };
};

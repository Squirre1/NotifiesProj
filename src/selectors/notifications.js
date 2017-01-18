export const NotificationsListContainerSelector = state => {
  const { notifications } = state.entities;


  return {
    notifications,
  };
};

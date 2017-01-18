import {
  CREATE_NOTIFY,
  READ_ALL_NOTIFIES,
  DELETE_ALL_NOTIFIES,
} from '@constants/actions';

const initialState = [
  {
    id: 17,
    title: 'Test test test 17',
    unread: true,
    datetime: new Date(),
  },
  {
    id: 16,
    title: 'Test test test 16',
    unread: true,
    datetime: new Date().setHours((new Date()).getHours() - 2),
  },
  {
    id: 14,
    title: 'Test test test 14',
    unread: true,
    datetime: new Date().setDate((new Date()).getDate() - 1),
  },
  {
    id: 13,
    title: 'Test test test 13',
    unread: false,
    datetime: new Date().setDate((new Date()).getDate() - 3),
  },
  {
    id: 12,
    title: 'Test test test 12',
    unread: false,
    datetime: new Date().setDate((new Date()).getDate() - 8),
  },
  {
    id: 11,
    title: 'Test test test 11',
    unread: false,
    datetime: new Date().setDate((new Date()).getDate() - 31),
  },
  {
    id: 10,
    title: 'Test test test 10',
    unread: false,
    datetime: new Date().setDate((new Date()).getDate() - 160),
  },
];

export default function (state = initialState, action = {}) {

  const { type, notify } = action;

  switch (type) {

    case CREATE_NOTIFY:
      const notifies = state.slice();
      notifies.push(notify);
      return notifies;

    case READ_ALL_NOTIFIES:
      return state.map(notification => Object.assign({}, notification, { unread: false }));

    case DELETE_ALL_NOTIFIES:
      return [];

    default:
      return state;
  }
}

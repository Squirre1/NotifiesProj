import {
  CREATE_NOTIFY,
  READ_ALL_NOTIFIES,
  DELETE_ALL_NOTIFIES,
} from '@constants/actions';

export function deleteNotifies() {
  return {
    type: DELETE_ALL_NOTIFIES,
  };
}

export function readAllNotifies() {
  return {
    type: READ_ALL_NOTIFIES,
  };
}

export function createNotify(notify) {
  return {
    type: CREATE_NOTIFY,
    notify,
  };
}

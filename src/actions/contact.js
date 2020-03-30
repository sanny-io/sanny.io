import { createActionAsync } from 'redux-act-async';
import service from '../services/contact';

export const sendMessage = createActionAsync('SEND_MESSAGE', service.sendMessage, {
  ok: {
    payloadReducer: payload => ({ ...payload, response: payload.response.data })
  },
});
import { createReducerAsync } from 'redux-act-async';
import { sendMessage } from '../actions/contact';

export default createReducerAsync(sendMessage);
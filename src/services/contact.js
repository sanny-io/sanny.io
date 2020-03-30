import firebase from '../firebase';

export default {
  sendMessage: firebase.functions().httpsCallable('sendMessage'),
}
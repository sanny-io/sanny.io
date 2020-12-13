import Contact from './Contact';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/contact';
import { Formik } from 'formik';
import { contact as contactData } from '../../data';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().required('Please provide your name.'),
  email: Yup.string().required('Please provide your email address.').email('That doesn\'t appear to be a valid email address.'),
  message: Yup.string().required('Please provide a message.'),
});

export function Form({ sendMessage, ...rest }) {
  return (
    <Formik
      initialValues={{ 'name': '', email: '', message: '' }}
      onSubmit={values => sendMessage(values)}
      validationSchema={contactSchema}
    >
      {
        props => <Contact {...contactData} {...rest} {...props} />
      }
    </Formik>
  );
}

export default connect(
  state => state.contact,
  dispatch => ({
    sendMessage: (...rest) => dispatch(sendMessage(...rest)),
  }),
)(Form);
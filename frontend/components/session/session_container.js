import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import { login } from '../../actions/session';
import Session from './session';

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    login: formUser => dispatch(login(formUser)),
});

export default connect(null, mapDispatchToProps)(Session);
import { connect } from 'react-redux';
import Login from '../components/Login/index';
import { getUser, logIn } from '../ducks/users';

const mapStateToProps = (state, props) => {
    return {
        user: getUser(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    logIn: (user) => dispatch(logIn(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);
import { connect } from 'react-redux';
import Home from '../components/Home';
import { getUser, logOut } from '../ducks/users';

const mapStateToProps = (state, props) => {
    return {
        user: getUser(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    logOut: (username) => dispatch(logOut(username))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
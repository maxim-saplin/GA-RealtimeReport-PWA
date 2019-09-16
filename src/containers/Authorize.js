import {connect} from 'react-redux';
import * as actions from '../actions';
import Authorize from '../components/Authorize';

const mapStateToProps = (state) => {
  return {
    ...state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: () => {
      dispatch(actions.authorizeManual())
    },
    onSignOut: () => {
      dispatch(actions.authorizeSingout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
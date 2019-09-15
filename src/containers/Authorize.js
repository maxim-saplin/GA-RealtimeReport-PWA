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
    onLogIn: () => {
      dispatch(actions.authorizeManual())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
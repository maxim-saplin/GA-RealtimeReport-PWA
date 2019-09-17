import {connect} from 'react-redux';
import * as actions from '../actions';
import AccountSelection from '../components/AccountSelection';

const mapStateToProps = (state) => {
  return {
    ...state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAccountChoice: (account) => {
      dispatch(actions.authChooseAccount(account))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSelection);
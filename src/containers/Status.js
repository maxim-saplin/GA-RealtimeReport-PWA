import {connect} from 'react-redux';
import Status from '../components/Status';

const mapStateToProps = (state) => {
  return {
    online: state.network.online,
    authorized: state.auth.authorized,
    currentAccount: state.auth.currentAccount
  }
}

export default connect(mapStateToProps)(Status);
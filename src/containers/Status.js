import {connect} from 'react-redux';
import Status from '../components/Status';

const mapStateToProps = (state) => {
  return {
    online: state.network.online,
    authorized: state.auth.authorized,
    selectedAccount: state.auth.current
  }
}

export default connect(mapStateToProps)(Status);
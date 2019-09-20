import {connect} from 'react-redux';
import Users from '../components/Users';

const mapStateToProps = (state) => {
  return {
    usersNow: state.gaData.usersNow,
    countriesAndUsers: state.gaData.countriesAndUsers
  }
}

export default connect(mapStateToProps)(Users);
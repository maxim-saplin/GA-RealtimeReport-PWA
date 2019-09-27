import {connect} from 'react-redux';
import Users from '../components/Users';

const mapStateToProps = (state) => {
  return {
    usersNow: state.gaData.usersNow,
    countriesAndUsersNow: state.gaData.countriesAndUsersNow,
    usersToday: state.gaData.usersToday,
    countriesAndUsersToday: state.gaData.countriesAndUsersToday
  }
}

export default connect(mapStateToProps)(Users);
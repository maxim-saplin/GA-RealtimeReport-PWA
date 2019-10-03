import {connect} from 'react-redux';
import Users from '../components/Users';

const mapStateToProps = (state) => {
  return {
    users: state.gaData.usersToday,
    countriesAndUsers: state.gaData.countriesAndUsersToday,
    title: "Today"
  }
}

export default connect(mapStateToProps)(Users);
import {connect} from 'react-redux';
import Users from '../components/Users';

const mapStateToProps = (state) => {
  return {
    users: state.gaData.usersNow,
    countriesAndUsers: state.gaData.countriesAndUsersNow,
    title: "Now"
  }
}

export default connect(mapStateToProps)(Users);
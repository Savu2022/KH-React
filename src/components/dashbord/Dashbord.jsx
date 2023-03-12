import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardAction';
import Experience from './DisplayExpDetails';
import Education from './DisplayEduDetails';
import { getCurrentProfile, deleteAccount } from '../../redux/actions/profileAction';

export const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profileReducer: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const successPart = (
    <>
      {" "}
      <DashboardActions />
      <Education />
      <Experience />

      <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
    </>
  );
  const failurePart = (
    <>
      {" "}
      <p>You have not yet setup a profile, please add some info</p>
      <Link to="/create-profile" className="btn btn-primary my-1">
        Create Profile
      </Link>
    </>
  ); 
  return (
    <div>
      <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome {user && user.name}
        </p>
        {profile !== null ? successPart : failurePart}
      </section>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profileReducer: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  profileReducer: state.profileReducer,
});

const mapDispatchToProps = { getCurrentProfile, deleteAccount}; 

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
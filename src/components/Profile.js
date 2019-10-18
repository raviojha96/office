import React from 'react';

class Profile extends React.Component {
	render() {
		if (!this.props.isAuthenticated) this.props.history.push('/login');
		return (
			<div>
				<div className="profile-bottom">
					<h3><i className="fa fa-user"></i>Profile</h3>
					<div className="profile-bottom-top row">
						<div className="col-md-4 profile-bottom-img">
							<div className="col-md-12">
								<a data-toggle="modal" data-target="#editImage"><img src="http://admin.pebibits.com/public/uploads/employee_image/1707eea8f803bfd019c5c8813567af9b.jpg" className="img-responsive profile-pic" alt="" data-toggle="tooltip" title="Ravi Ojha" /></a>
							</div>
						</div>
						<div className="col-md-8 profile-text">
							<h6>Ravi Ojha</h6>
							<table className="detail_table">
								<tbody><tr><td>Designation</td><td>:</td><td>Software Engineer</td></tr>
									<tr><td>Code </td><td>:</td><td>41</td></tr>
									<tr><td>Role </td><td>:</td><td></td></tr>
									<tr><td>Email</td><td> :</td><td>ravi@pebibits.com</td></tr>
									<tr><td>Address</td><td> :</td><td>Flat No. 405,Sector- 29, Pratap Apartment, Pratap Nagar</td></tr>
									<tr><td>Phone </td><td>:</td><td>8094009900</td></tr>
								</tbody></table>
						</div>
						<div className="clearfix"></div>
					</div>


				</div>
			</div>
		);
	}
}
export default Profile;

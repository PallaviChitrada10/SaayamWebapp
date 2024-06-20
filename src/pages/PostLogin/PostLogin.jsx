import React from "react";
import "./PostLogin.css";

const PostLogin = ({ t }) => {
	return (
		<div className='px-20 mt-6'>
			<div>
				<h1 className='text-2xl font-semibold text-center'>Welcome User</h1>
				<button className="font-semibold button">
					New Help Request
				</button>
			</div>
		</div>
	);
};

export default PostLogin;

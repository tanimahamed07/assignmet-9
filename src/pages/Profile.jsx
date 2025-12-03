import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import userIcon from "../assets/icons8-user-48.png";
import { Link } from "react-router";
import "animate.css";
const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="bg-base-100 shadow-xl rounded-2xl p-6 w-full max-w-md text-center transform hover:scale-105 transition-transform duration-300">
        {/* Avatar */}
        <div className="avatar mx-auto mb-4">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary mx-auto">
            <img
              src={user?.photoURL || userIcon}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold mb-1">{user?.displayName}</h2>
        <p className="text-gray-500 mb-6">{user?.email}</p>

        {/* Button */}
        <Link to="/profile-update">
          <button className="btn btn-primary w-full">Update Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;

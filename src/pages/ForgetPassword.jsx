import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ForgetPassword = () => {
  const {forgetPasswordFunc, controlledEmail} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleReset = (e) => {
    const email = e.target.email.value
    e.preventDefault();

    forgetPasswordFunc(email)
    .then(()=>{
      navigate('/login')
      toast.success('Password reset email sent!')
    })
    .catch((error => {
      toast.error(error.message)
    }))

  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 max-w-sm shadow-2xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Reset Password</h2>
          <form onSubmit={handleReset}>
            <label className="label">Email</label>
            <input
              value={controlledEmail}
              type="email"
              name='email'
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
            <button className="btn btn-neutral mt-4 w-full">
              Forget Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

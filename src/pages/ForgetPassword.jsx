import React from "react";

const ForgetPassword = () => {
  const handleReset = (e) => {};
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 max-w-sm shadow-2xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Reset Password</h2>
          <form onSubmit={handleReset}>
            <label className="label">Email</label>
            <input
              type="email"
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

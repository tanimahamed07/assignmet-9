import React from "react";
import { Link } from "react-router";

const ForgetPassword = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body w-full">
            <form action="">
              <fieldset className="fieldset">


                <input
                  name="email"

                  className="input w-[290px]"
                  type="email"
                  placeholder="Email"
                />

                <label className="label">Enter email number</label>

                <button className="btn btn-neutral mt-4">
                  Forget Password
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

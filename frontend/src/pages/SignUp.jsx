import { Link } from "react-router-dom";
import GenderCheckbox from "../component/GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-200">
        <h1 className="flex gap-2 text-3xl font-semibold text-center text-slate-700">
          <p> Signup to</p>
          <span className="text-blue-700"> Chat Application</span>
        </h1>

        <form>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text ">Username</span>
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered
            h-10"
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text ">Email</span>
            </label>

            <input
              type="text"
              placeholder="shub@gmail.com"
              className="w-full input input-bordered
            h-10"
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text ">Password</span>
            </label>

            <input
              type="text"
              placeholder="Enter Your Password"
              className="w-full input input-bordered
            h-10"
            />
          </div>

          <GenderCheckbox />

          <div>
            <button className="btn btn-block btn-sm hover:bg-blue-900  mt-2 bg-blue-700 font-bold text-white">
              Signup
            </button>
          </div>

          <Link to={"/login"} className="text-sm  mt-2  inline-block">
            {`Already have an account? `}
            <span className="hover:underline text-blue-600  hover:text-blue-800">
              Login
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
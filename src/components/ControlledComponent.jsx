import React, { use, useState } from "react";

export default function ControlledComponent() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  function handleFullName(event) {
    const value = event.target.value.slice(0, 10);
    setFullName(value);
    //validation
    if (value.length < 7) {
      setErrors({
        ...errors,
        fullName: "Full Name should be more than 6 characters",
      });
    } else {
      setErrors({ ...errors, fullName: " " });
    }
  }

  function handleEmail(e) {
    const value = e.target.value;
    setEmail(value);
    //validation
    if (value.includes("@") && value.includes(".") && value.length > 6) {
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Please ensure you enter a valid email" });
    }
  }

  function handlePassword(e) {
    const value = e.target.value;
    setPassword(value);
    if (value.length > 8) {
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password: "password should be more than 8 characters",
      });
    }
  }

  function handleAgree(e) {
    const value = e.target.checked;
    setAgree(value);

    if (!value) {
      setErrors({
        ...errors,
        agree: "You must agree with the terms and conditions",
      });
    } else {
      setErrors({ ...errors, agree: "" });
    }
  }
  return (
    <div>
      <div className="font flex flex-col justify-center sm:h-screen p-4">
        <div className="max-w-lg w-full mx-auto border border-gray-300 rounded-2xl p-8">
          <div className="text-center mb-12">
            <a href="javascript:void(0)">
              <img
                src="https://gau.ac.ke/wp-content/uploads/2023/08/logo-600x131.jpg"
                alt="logo"
                className="w-60 inline-block"
              />
            </a>
          </div>

          <form >
            <div className="space-y-6">
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Full Name
                </label>
                <input
                  value={fullName}
                  onChange={handleFullName}
                  name="fullname"
                  type="text"
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Full name"
                />
                {errors.fullName && (
                  <span className="text-red-500">{errors.fullName}</span>
                )}
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  name="email"
                  type="email"
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Email"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  {" "}
                  Password
                </label>
                <input
                  value={password}
                  onChange={handlePassword}
                  name="password"
                  type="password"
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter confirm password"
                />
                {errors.password && (
                  <span className="text-red-500">{errors.password}</span>
                )}
              </div>

              <div className="flex items-center">
                <input
                  value={agree}
                  onChange={handleAgree}
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />

                <label
                  htmlFor="remember-me"
                  className="text-slate-600 ml-3 block text-sm"
                >
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 font-medium hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
                {errors.agree && (
                  <span className="text-red-500">{errors.agree}</span>
                )}
              </div>
            </div>

            <div className="mt-12">
              <button
                type="button"
                className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
              >
                Create an account
              </button>
            </div>
            <p className="text-slate-600 text-sm mt-6 text-center">
              Already have an account?{" "}
              <a
                href="javascript:void(0);"
                className="text-blue-600 font-medium hover:underline ml-1"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

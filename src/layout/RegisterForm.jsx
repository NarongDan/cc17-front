import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation

      if (input.password !== input.confirmPassword) {
        return alert("Check confirm password");
      }
      // จัด input ส่ง api
      const rs = await axios.post("http://localhost:8889/auth/register", input);

      if (rs.status === 200) {
        alert("Register successful");
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl my-10 text-center">Register Form</h1>
      <form
        className="border w-3/4 mx-auto p-4 rounded-lg"
        onSubmit={handleSubmit}
      >
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Username:</span>
          </div>
          <input
            name="username"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={input.username}
            onChange={handleChange}
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Password:</span>
          </div>
          <input
            name="password"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={input.password}
            onChange={handleChange}
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Confirm Password:</span>
          </div>
          <input
            name="confirmPassword"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={input.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Email:</span>
          </div>
          <input
            name="email"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={input.email}
            onChange={handleChange}
          />
        </label>
        <button className="btn btn-outline btn-primary mt-5 w-full">
          Register
        </button>
      </form>
    </div>
  );
}

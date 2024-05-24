import { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      //validation
      if (!input.username.trim() || !input.password.trim()) {
        return alert("please fill form");
      }
      // lส่ง input ไป backend

      const rs = await axios.post("http://localhost:8889/auth/login", input);
      console.log(rs.data.token);
      localStorage.setItem("token", rs.data.token); // เอา tokenที่ได้รับ มาเก็บเข้า local storage

      const rs2 = await axios.get("http://localhost:8889/auth/me", {
        headers: { Authorization: `Bearer ${rs.data.token}` },
      });

      console.log(rs2);
      setUser(rs2.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl my-10 text-center">Login Form</h1>
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

        <button className="btn btn-outline btn-primary mt-5 w-full">
          Login
        </button>
      </form>
    </div>
  );
}

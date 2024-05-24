export default function LoginForm() {
  return (
    <div>
      <h1 className="text-4xl my-10 text-center">Login Form</h1>
      <form className="border w-3/4 mx-auto p-4 rounded-lg">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Username:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Password:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </label>

        <button className="btn btn-outline btn-primary mt-5 w-full">
          Login
        </button>
      </form>
    </div>
  );
}

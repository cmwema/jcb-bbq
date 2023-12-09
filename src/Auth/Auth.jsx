import React from "react";
import { login } from "../services/apiRestaurant";
import { useNavigate } from "react-router-dom";
export const logOut = () => {
  localStorage.clear();
  window.location.reload();
};
function Auth() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        username: e.target[0].value,
        password: e.target[1].value,
      });

      localStorage.setItem("accessToken", res.access);
      localStorage.setItem("refreshToken", res.refresh);

      const isAuthenticated = localStorage.getItem("accessToken");
      if (isAuthenticated) {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="flex h-90vh w-full items-center justify-center">
      <form
        onSubmit={(e) => handleSubmit(e, navigate)}
        method="POST"
        action=""
        className="flex flex-col items-center gap-3 rounded-md bg-white p-8 shadow-xl shadow-gray-300"
      >
        <div>
          <label
            className="my-3 text-xl font-semibold text-black"
            htmlFor="username"
          >
            Username
          </label>
          <br />
          <input
            className="rounded-md border border-gray-200 p-2 px-3 outline-none"
            type="text"
            name="username"
            placeholder="username"
          />
        </div>
        <div>
          <label
            className="my-3 text-xl font-semibold text-black"
            htmlFor="password"
          >
            Password
          </label>
          <br />
          <input
            className="rounded-md border border-gray-200 p-2 px-3 outline-none"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <input
          className="cursor-pointer rounded-md border p-2 px-4 font-semibold hover:border-gray-300 hover:bg-gray-300"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}

export default Auth;

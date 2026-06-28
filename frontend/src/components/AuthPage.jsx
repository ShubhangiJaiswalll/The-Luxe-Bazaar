import { useState } from "react";
import toast from "react-hot-toast";
import API from "../api/api";

function AuthPage({ setUser, setShowAuth }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = mode === "login" ? "/auth/login" : "/auth/register";

      const { data } = await API.post(endpoint, form);

      localStorage.setItem("luxeToken", data.token);
      localStorage.setItem("luxeUser", JSON.stringify(data.user));

      setUser(data.user);
      setShowAuth(false);

      toast.success(data.message);
    }  catch (error) {
  console.log("AUTH ERROR:", error);
  toast.error(error.response?.data?.message || error.message || "Something went wrong");
}
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <button className="close-auth" onClick={() => setShowAuth(false)}>
          ×
        </button>

        <h2>{mode === "login" ? "Welcome Back" : "Create Account"}</h2>
        <p className="auth-subtitle">
          {mode === "login"
            ? "Login to continue your luxe shopping experience."
            : "Join The Luxe Circle today."}
        </p>

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="auth-btn" type="submit">
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p className="switch-auth">
          {mode === "login" ? "New here?" : "Already have an account?"}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login" ? " Create account" : " Login"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default AuthPage;
import { useState } from "react";
import { Link } from "react-router";
import "./login.css";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      email: String(formData.get("email") ?? "").trim(),
      password: String(formData.get("password") ?? ""),
    };

    setIsSubmitting(true);
    try {
      const apiBaseUrl = (
        import.meta.env.VITE_API_URL || "http://localhost:5001"
      ).replace(/\/$/, "");
      const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to log in. Check your details and try again.");
      }

      setSuccessMessage(result.message || "You are logged in successfully.");
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof TypeError
          ? "Could not connect to the server. Please try again."
          : error.message || "Unable to log in. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-container">
        <Link className="login-wordmark" to="/">
          Kissan <span>Markaz</span>
        </Link>
        <header className="login-header">
          <h1>Welcome back</h1>
          <p>Log in to continue to Kissan Markaz.</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
          <div className="login-field">
            <label htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>

          {errorMessage && (
            <p className="login-feedback login-feedback-error" role="alert">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="login-feedback login-feedback-success" role="status">
              {successMessage}
            </p>
          )}

          <button className="login-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="login-signup-prompt">
          New to Kissan Markaz? <Link to="/signup">Create an account</Link>
        </p>
      </section>
    </main>
  );
}

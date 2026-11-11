import { useState } from "react";
import { Link, useLocation } from "react-router";
import "./signup.css";

export default function Signup() {
  const location = useLocation();
  const requestedRole = new URLSearchParams(location.search).get("role");
  const selectedRole = ["farmer", "owner", "operator"].includes(requestedRole)
    ? requestedRole
    : "farmer";
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const latitude = String(formData.get("latitude") ?? "").trim();
    const longitude = String(formData.get("longitude") ?? "").trim();

    if (Boolean(latitude) !== Boolean(longitude)) {
      setErrorMessage("Enter both latitude and longitude, or leave both blank.");
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      password: String(formData.get("password") ?? ""),
      phone: String(formData.get("phone") ?? "").trim(),
      role: String(formData.get("role") ?? "farmer"),
      address: String(formData.get("address") ?? "").trim(),
      ...(latitude && longitude
        ? {
            location: {
              type: "Point",
              coordinates: [Number(longitude), Number(latitude)],
            },
          }
        : {}),
    };

    setIsSubmitting(true);
    try {
      const apiBaseUrl = (
        import.meta.env.VITE_API_URL || "http://localhost:5001"
      ).replace(/\/$/, "");
      const response = await fetch(`${apiBaseUrl}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to create your account.");
      }

      setSuccessMessage(result.message || "Account created successfully.");
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof TypeError
          ? "Could not connect to the server. Please try again."
          : error.message || "Unable to create your account.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="signup-page">
      <section className="signup-container">
        <header className="signup-header">
          <p className="signup-eyebrow">GET STARTED</p>
          <h1>Create Account</h1>
          <p className="signup-subtitle">
            Enter your details to create your account.
          </p>
        </header>

        <form className="signup-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
          <div className="signup-form-grid">
            <div className="signup-field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="signup-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="signup-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                autoComplete="new-password"
                required
              />
            </div>

            <div className="signup-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                autoComplete="tel"
              />
            </div>

            <div className="signup-field signup-field-full">
              <label htmlFor="role">Account Role</label>
              <select id="role" name="role" defaultValue={selectedRole} required>
                <option value="farmer">Farmer</option>
                <option value="owner">Owner</option>
                <option value="operator">Operator</option>
              </select>
            </div>

            <div className="signup-field signup-field-full">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter your address"
                rows="3"
              />
            </div>
          </div>

          <fieldset className="signup-location">
            <legend>Location Coordinates (Optional)</legend>
            <p className="signup-location-help">
              Enter latitude and longitude in decimal degrees if you have them.
            </p>

            <div className="signup-form-grid">
              <div className="signup-field">
                <label htmlFor="latitude">Latitude</label>
                <input
                  id="latitude"
                  type="number"
                  name="latitude"
                  min="-90"
                  max="90"
                  step="any"
                  placeholder="e.g. 30.6682"
                />
              </div>

              <div className="signup-field">
                <label htmlFor="longitude">Longitude</label>
                <input
                  id="longitude"
                  type="number"
                  name="longitude"
                  min="-180"
                  max="180"
                  step="any"
                  placeholder="e.g. 73.1114"
                />
              </div>
            </div>
          </fieldset>

          {errorMessage && (
            <p className="signup-feedback signup-feedback-error" role="alert">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="signup-feedback signup-feedback-success" role="status">
              {successMessage}
            </p>
          )}

          <button className="signup-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p className="signup-login-prompt">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}

import "./signup.css";

export default function Signup() {
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

        <form
          className="signup-form"
          onSubmit={(event) => event.preventDefault()}
        >
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
              <select id="role" name="role" defaultValue="farmer" required>
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

          <button className="signup-button" type="submit">
            Create Account
          </button>
        </form>
      </section>
    </main>
  );
}

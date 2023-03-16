import React, {useState} from 'react';
import '../styles/App.css';

const App = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    contactNo: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    contactNo: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, contactNo } = formValues;
    const errors = {};
    let hasErrors = false;

    if (!username.trim()) {
      errors.username = 'Username is required';
      hasErrors = true;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      hasErrors = true;
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
      hasErrors = true;
    } else if (password.trim().length < 4) {
      errors.password = 'Password should contain at least 4 characters';
      hasErrors = true;
    }

    if (!contactNo.trim()) {
      errors.contactNo = 'Contact number is required';
      hasErrors = true;
    } else if (contactNo.trim().length !== 10) {
      errors.contactNo = 'Contact number should contain exactly 10 digits';
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
      setIsSubmitted(false);
    } else {
      setFormValues({
        username: '',
        email: '',
        password: '',
        contactNo: '',
      });
      setFormErrors({
        username: '',
        email: '',
        password: '',
        contactNo: '',
      });
      setIsSubmitted(true);
    }
  };

  return (
    <div id="main">
      {isSubmitted && (
        <h3 className="success-alert">Registered Successfully</h3>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <section>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          {formErrors.username && (
            <p className="username-error">{formErrors.username}</p>
          )}

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <p className="email-error">{formErrors.email}</p>
          )}

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <p className="password-error">{formErrors.password}</p>
          )}

          <label>Contact Number</label>
          <input
            type="number"
            name="contactNo"
            value={formValues.contactNo}
            onChange={handleChange}
          />
          {formErrors.contactNo && (
            <p className="contactNo-error">{formErrors.contactNo}</p>
          )}

          <button type="submit">Submit</button>
        </section>
      </form>
    </div>
  );
};

export default App;

import { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    if (formData.firstName && formData.lastName) {
      event.preventDefault();
      setFullName(`Full Name: ${formData.firstName} ${formData.lastName}`);
    } else {
      setFullName("");
    }
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {formData.firstName && formData.lastName && <p>{fullName}</p>}
    </div>
  );
};

export default Form;

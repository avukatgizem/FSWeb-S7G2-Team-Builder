import React, { useState } from 'react';

function Form({ addTeamMember }) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTeamMember(formValues);
    setFormValues({ name: '', email: '', role: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formValues.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formValues.email} onChange={handleChange} />
      </label>
      <label>
        Role:
        <input type="text" name="role" value={formValues.role} onChange={handleChange} />
      </label>
      <button type="submit">Add Team Member</button>
    </form>
  );
}

export default Form;

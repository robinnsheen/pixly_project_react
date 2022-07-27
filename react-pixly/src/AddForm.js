import React, { useState } from "react";

function AddForm({ add }) {
  const [formData, setFormData] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await add(formData.name, selectedFile);
    } catch (err) {
      setFormErrors(err);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    if (evt.target.name === "file") {
      setSelectedFile(evt.target.files[0]);
    } else {
      const { name, value } = evt.target;
      setFormData(l => ({ ...l, [name]: value }));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {formErrors.length
        ? <div>{formErrors[0]}</div>
        : null}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        File:
        <input type="file" name="file" onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>


  );
}

export default AddForm;
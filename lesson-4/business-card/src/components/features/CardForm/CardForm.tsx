import React, { useState } from "react";

export default function CardForm() {
  const [name, setName] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        name: formData.get("name"),
        job: formData.get("job"),
        website: formData.get("website"),
      }),
    });
    const body = await response.json();
    console.log(body);
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>Create a new Business Card</h1>
      {/* BUSINESS CARD needs to create: A name, job, website */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="job">Job role</label>
        <input type="text" id="job" name="job" />

        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

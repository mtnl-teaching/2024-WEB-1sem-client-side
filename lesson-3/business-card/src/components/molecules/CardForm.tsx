import React, { useState } from "react";

export default function CardForm() {
  const [name, setName] = useState("");

  function generateUniqueNumber() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    return Number(`${timestamp}-${randomNumber}`);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Hello from submit");
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("name"));
    console.log(formData.get("website"));
    console.log(formData.get("job"));

    const response = await fetch("/api/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: generateUniqueNumber(),
        name: formData.get("name"),
        job: formData.get("job"),
        website: formData.get("website"),
      }),
    });
    console.log(response);
    const body = await response.json();
    console.log(body);
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <div>
      <hr />
      <h1>Create a new Business Card</h1>
      <hr />
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

"use client";
import Container from "@/Components/Shared/Container";
import useAuthHook from "@/Hook/useAuthHook";
import React, { useState } from "react";
import Swal from "sweetalert2";

export const metadata = {
  title: "E-Labour | Add Labour",
  description: "Explore your experience.",
};


const topCategories = [
  {
    id: 1,
    name: "Farmer",
    description: "Skilled in agriculture and farming work.",
  },
  {
    id: 2,
    name: "Carpenter",
    description: "Expert in woodwork and furniture making.",
  },
  {
    id: 3,
    name: "Electrician",
    description: "Handles electrical wiring and repairs.",
  },
  {
    id: 4,
    name: "Plumber",
    description: "Skilled in pipe installation and plumbing repairs.",
  },
  {
    id: 5,
    name: "Painter",
    description: "Professional wall and decorative painting.",
  },
  {
    id: 6,
    name: "Mason",
    description: "Expert in brickwork and building construction.",
  },
  {
    id: 7,
    name: "Welder",
    description: "Specializes in welding and metal works.",
  },
  {
    id: 8,
    name: "Mechanic",
    description: "Handles vehicle maintenance and repair.",
  },
  {
    id: 9,
    name: "Driver",
    description: "Professional driver for cars, trucks, and machinery.",
  },
  {
    id: 10,
    name: "Labourer",
    description: "General labour work for construction or other tasks.",
  },
];

export default function AddLabour() {
  const { user } = useAuthHook();
  const [error, setError] = useState(null);

  const handleAddLabour = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const price_per_day = e.target.price_per_day.value;
    const location = e.target.location.value;
    const photo_url = e.target.photo_url.value;
    const submitted_by_name = e.target.submitted_by_name.value;
    const submitted_by_email = e.target.submitted_by_email.value;

    if (isNaN(price_per_day) || price_per_day <= 0) {
      setError("Invalid price.Please enter valid amount.");

      return;
    } else {
      setError(null);
    }

    const labourInfo = {
      name,
      description,
      category,
      price_per_day,
      location,
      photo_url,
      submitted_by_name,
      submitted_by_email,
      status: "available",
      created_at: new Date(),
    };

    fetch("https://e-labour-server.vercel.app/labours", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(labourInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registered successfully.",
            showConfirmButton: false,
            timer: 2000,
          });
          e.target.reset();
        }
      });
  };

  return (
    <Container className="pb-16 pt-10 bg-base-200">
      <form
        onSubmit={handleAddLabour}
        className="max-w-[800px] mx-auto bg-white p-5 sm:p-10 rounded-2xl shadow-lg"
      >
        <h3 className=" font-semibold text-xl text-primary">
          {" "}
          Labour Ragistration Form
        </h3>
        <fieldset className="fieldset">
          <label className="label text-black text-base font-medium mt-2">
            Name
          </label>
          <input
            type="text"
            className="input shadow-none bg-gray-100 border-none outline-none "
            placeholder="Enter Name..."
            name="name"
            spellCheck={false}
            required
          />

          {/* description */}

          <label className="label text-black text-base font-medium mt-2">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter Description Here..."
            className="textarea-lg p-3 text-sm bg-gray-100 border-none outline-none min-h-[200px] resize-none "
            spellCheck={false}
            required
          ></textarea>

          {/* dropdown */}
          <label className="label text-black text-base font-medium mt-2">
            Category
          </label>
          <select
            defaultValue="defaultValue"
            className="select"
            name="category"
            required
          >
            <option value="defaultValue" disabled={true}>
              Choose your Category
            </option>

            {topCategories.map((category) => (
              <option key={category.id} value={category?.name}>
                {category?.name}
              </option>
            ))}
          </select>

          {/* Price per day */}
          <label className="label text-black text-base font-medium mt-2">
            Price Per day
          </label>

          <input
            type="text"
            className="input shadow-none bg-gray-100 border-none outline-none "
            placeholder="Enter Rent Price..."
            name="price_per_day"
            required
          />
          {error && <p className="text-red-500 mt-1">{error}</p>}

          {/* location */}
          <label className="label text-black text-base font-medium mt-2">
            Location
          </label>

          <input
            type="text"
            className="input shadow-none bg-gray-100 border-none outline-none "
            placeholder="Enter Location..."
            name="location"
            spellCheck={false}
            required
          />

          {/* image url */}

          <label className="label text-black text-base font-medium mt-2">
            PhotoURL
          </label>

          <input
            type="text"
            className="input shadow-none bg-gray-100 border-none outline-none "
            placeholder="Enter PhotoURL..."
            name="photo_url"
            spellCheck={false}
            required
          />

          {/* submitted by name */}
          <label className="label text-black text-base font-medium mt-2">
            Submitted By
          </label>

          <input
            type="text"
            className="input shadow-none bg-gray-100 border-none outline-none "
            value={user?.displayName}
            name="submitted_by_name"
            readOnly
          />

          {/* submitted by email email */}
          <label className="label text-black text-base font-medium mt-2">
            Email
          </label>

          <input
            type="text"
            className="input shadow-none bg-gray-100 border-none outline-none "
            value={user?.email}
            name="submitted_by_email"
            readOnly
          />

          <button className="btn btn-primary hover:btn-secondary  outline-none border-none shadow-none mt-4 w-[150px]">
            Submit Now
          </button>
        </fieldset>
      </form>
    </Container>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

export default function LabourCard({ labour }) {
  const {
    _id,
    name,
    category,
    price_per_day,
    status,
    photo_url,
    submitted_by_name,
  } = labour;

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
        cursor: "pointer",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white shadow-sm  rounded-xl space-y-2 w-full">
        <div className="w-full h-[250px] sm:h-[200px] rounded-xl mb-3 relative">
          {status === "available" ? (
            <div className="badge badge-success absolute top-2 right-2 text-white font-semibold py-4">
              Available
            </div>
          ) : (
            <div className="badge badge-error absolute top-2 right-2 text-white font-semibold py-4">
              Booked
            </div>
          )}

          {photo_url && (
            <Image
              src={photo_url}
              alt={name}
              width={500}
              height={250}
              className="w-full h-full object-cover bg-gray-100 rounded-tr-xl rounded-tl-xl"
            />
          )}
        </div>

        <div className="p-4 pt-1 space-y-2">
          <h3 className=" font-medium capitalize truncate ">{name}</h3>

          <div>
            <h3 className="text-sm font-medium">
              Price :{" "}
              <span className="font-normal"> {price_per_day} Tk /day</span>
            </h3>
          </div>
          <div className="badge badge-soft badge-warning text-secondary font-medium py-3 capitalize">
            {category}
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Reference Name </h3>
            <p className="text-sm capitalize truncate ">{submitted_by_name}</p>
          </div>
          <Link href={`/view-details/${_id}`}>
            <button className="btn border-none outline-none shadow-none hover:btn-secondary text-white btn-primary w-full mt-1">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

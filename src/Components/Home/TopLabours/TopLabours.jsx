"use client";
import useSWR from "swr";

import React from "react";
import LabourCard from "./LabourCard";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function TopLabours() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/labours",
    fetcher
  );

  return (
    <div className="pt-12 pb-20">
      <h2 className="text-3xl font-bold text-center text-primary">
        Our Labourers
      </h2>

      {isLoading ? (
        <div className="w-full grid place-items-center py-20">
          <span className="loading loading-spinner loading-xl text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 pt-12">
          {data.slice(0, 6).map((labour) => (
            <LabourCard key={labour._id} labour={labour}></LabourCard>
          ))}
        </div>
      )}

      <div className="grid place-items-center mt-10">
        <Link
          className="btn bg-gray-200 text-primary hover:bg-gray-300 rounded-3xl border-none shadow-none"
          href="/all-labourers"
        >
          View All Labourers &rarr;
        </Link>
      </div>
    </div>
  );
}

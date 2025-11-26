"use client";
import useSWR from "swr";

import Container from "@/Components/Shared/Container";
import React from "react";
import LabourCard from "@/Components/Home/TopLabours/LabourCard";
const fetcher = (url) => fetch(url).then((r) => r.json());
export default function AllLabourers() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/labours",
    fetcher
  );

  console.log(data);
  return (
    <Container className="bg-base-200 pt-12 pb-20">
      <h2 className="text-3xl font-bold text-center text-primary">
        All Labourers
      </h2>

      {isLoading ? (
        <div className="w-full grid place-items-center py-20">
          <span className="loading loading-spinner loading-xl text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 pt-12">
          {data.map((labour) => (
            <LabourCard key={labour._id} labour={labour}></LabourCard>
          ))}
        </div>
      )}
    </Container>
  );
}

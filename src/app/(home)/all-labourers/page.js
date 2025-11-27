"use client";
import useSWR from "swr";

import Container from "@/Components/Shared/Container";
import React from "react";
import LabourCard from "@/Components/Home/TopLabours/LabourCard";

export const metadata = {
  title: "E-Labour | All Laboureres",
  description: "Explore your experience.",
};


export default function AllLabourers() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "https://e-labour-server.vercel.app/labours",
    fetcher
  );

  return (
    <Container className="bg-base-200 pt-12 pb-20">
      <h2 className="text-3xl font-bold text-center text-primary">
        All Labourers
      </h2>

      {/* search */}
      <form className="flex justify-center  mt-8 ">
        <div className="relative h-[45px] mb-5">
          <input
            type="text"
            name="search"
            placeholder="Search By Name..."
            spellCheck={false}
            className="bg-gray-200 w-full sm:w-[400px] px-5 pr-24 py-2 rounded-4xl h-full outline-none "
            required
          />
          <button
            type="submit"
            className="btn bg-gray-200 hover:bg-gray-300  text-primary shadow-none rounded-br-4xl rounded-tr-4xl absolute top-0 right-0 h-full"
          >
            Search
          </button>
        </div>
      </form>

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

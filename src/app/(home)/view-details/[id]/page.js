"use client";
import useSWR from "swr";
import Container from "@/Components/Shared/Container";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function ViewDetails() {
  const router = useRouter();
  const { id } = useParams();

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    `https://e-labour-server.vercel.app/labours/${id}`,
    fetcher
  );

  if (isLoading) {
    return (
      <Container>
        <div className="w-full grid place-items-center py-20">
          <span className="loading loading-spinner loading-xl text-primary"></span>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="w-full grid place-items-center py-20 text-gray-600 font-bold text-3xl">
          Failed to load details !
        </div>
      </Container>
    );
  }

  if (!data || !data._id) {
    return (
      <Container>
        <div className="w-full grid place-items-center py-20 text-gray-600 font-bold text-3xl">
          Details Not Found !
        </div>
      </Container>
    );
  }

  if (error || !data || !data._id) {
    return (
      <Container>
        {" "}
        <div className="w-full  grid place-items-center py-20 text-secondary font-bold text-2xl">
          Details Not Found !
        </div>
      </Container>
    );
  }

  return (
    <Container className="bg-base-200 py-20">
      <div className="p-5 sm:p-10 rounded-xl  bg-white shadow flex flex-col justify-start  lg:flex-row gap-8">
        <div className="relative w-full lg:w-[500px] shrink-0 h-full">
          {data?.photo_url && (
            <Image
              src={data?.photo_url}
              alt={data?.name}
              width={500}
              height={600}
              className="w-full  h-full object-cover rounded-xl"
            ></Image>
          )}

          {data?.status === "available" ? (
            <div className="badge badge-success absolute top-2 left-2 text-white font-semibold py-4">
              Available
            </div>
          ) : (
            <div className="badge badge-error absolute top-2 left-2 text-white font-semibold py-4">
              Booked
            </div>
          )}
        </div>

        <div className="space-y-3 w-full flex flex-col lg:justify-center">
          <div className="flex justify-start items-center gap-x-5 gap-y-2 flex-wrap">
            <h3 className="font-semibold text-xl capitalize">{data?.name}</h3>

            <div className="badge badge-soft badge-warning text-secondary text-base font-medium py-3 capitalize">
              {data?.category}
            </div>
          </div>

          <div>
            <div className="space-y-1 flex gap-x-10 gap-y-1 flex-wrap  ">
              <h3>
                <span className="font-semibold">Price per day :</span>{" "}
                {data?.price_per_day} Tk /day
              </h3>
              <h3 className="capitalize">
                <span className="font-semibold">Location : </span>
                {data?.location}
              </h3>
            </div>
          </div>

          <p>
            <span className="font-semibold">Description : </span>
            {data?.description}
          </p>

          <div>
            <h3 className="font-bold text-lg text-secondary mb-2">Reference</h3>
            <p className="mb-1 capitalize">
              <span className="font-semibold">Name : </span>{" "}
              {data?.submitted_by_name}
            </p>
            <p>
              <span className="font-semibold">Email : </span>
              {data?.submitted_by_email}
            </p>
          </div>

          <button
            onClick={() => router.back()}
            className="btn border-none outline-none shadow-none hover:btn-secondary text-white btn-primary w-[120px] mt-1"
          >
            &larr; Go Back
          </button>
        </div>
      </div>
    </Container>
  );
}

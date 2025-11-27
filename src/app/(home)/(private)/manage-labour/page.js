"use client";

import useSWR from "swr";

import Container from "@/Components/Shared/Container";
import React, { useEffect, useState } from "react";
import useAuthHook from "@/Hook/useAuthHook";
import Image from "next/image";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Link from "next/link";
import Swal from "sweetalert2";

export const metadata = {
  title: "E-Labour | Manage Labour",
  description: "Explore your experience.",
};


export default function ManageLabour() {
  const { user } = useAuthHook();
  const [labours, setLabours] = useState([]);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://e-labour-server.vercel.app/my-labours?email=${user?.email}`,
    fetcher
  );

  useEffect(() => {
    setLabours(data);
  }, [data]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://e-labour-server.vercel.app/labours/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            const existingLabours = labours.filter(
              (labour) => labour?._id !== id
            );
            setLabours(existingLabours);
            if (data?.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <Container className="bg-base-200">
      <h2 className="text-primary text-2xl font-bold py-8">
        Manage your labourers
      </h2>

      {isLoading ? (
        <div className="w-full grid place-items-center py-20">
          <span className="loading loading-spinner loading-xl text-primary"></span>
        </div>
      ) : !labours || labours.length === 0 ? (
        <div className="w-full grid place-items-center pb-20 text-gray-600 font-bold text-3xl">
          No labourers have been added yet !
        </div>
      ) : (
        <div className="overflow-x-auto pb-20">
          <table className="table bg-white p-3">
            {/* head */}
            <thead>
              <tr className="text-black text-base">
                <th>SL No</th>
                <th>Name</th>
                <th>Price Per Day</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {labours.map((labour, index) => (
                <tr key={labour?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask  h-12 w-12">
                          {labour?.photo_url && (
                            <Image
                              src={labour?.photo_url}
                              alt={labour?.name}
                              width={100}
                              height={100}
                              className="rounded-lg"
                            ></Image>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold capitalize">
                          {labour?.name}
                        </div>
                        <div className="text-sm opacity-80">
                          {labour?.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-base">{labour?.price_per_day} Tk</td>
                  <td
                    className={`capitalize text-base ${
                      labour?.status === "available"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {labour?.status}
                  </td>
                  <th className="space-x-3 whitespace-nowrap">
                    <Link
                      href={`/view-details/${labour?._id}`}
                      className="btn btn-sm text-primary text-sm"
                    >
                      View
                    </Link>
                    <button className="btn btn-sm text-sm">
                      <FaEdit className="text-lg text-secondary"></FaEdit>{" "}
                    </button>
                    <button
                      onClick={() => handleDelete(labour?._id)}
                      className="btn btn-sm text-sm"
                    >
                      <RiDeleteBin6Fill className="text-lg text-red-500"></RiDeleteBin6Fill>{" "}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
}

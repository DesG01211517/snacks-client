"use client";

import Image from "next/image";
import snacksAPI from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import { SnackCard } from "@/components/SnackCard";


export default function Home() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    snacksAPI.get("/snacks").then((response) => {
      console.log(response.data);
    });
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <div>
      {snacks.map((index, data ) => {
         return  <SnackCard key={index}data = {data} />
      
})};</div>
  );
};

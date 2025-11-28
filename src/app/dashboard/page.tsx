"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a loading delay
  }, []);

  if (isLoading) return <div className=" text-xl text-red-500">Loading...</div>;
  return (
    <div className=" text-xl text-green-500">Dashboard Content Loaded</div>
  );
};

export default Page;

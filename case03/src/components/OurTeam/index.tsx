"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../Loading";

export default function OurTeam() {
  const [teams, setTeams] = useState<null | any[]>(null);
  const [loading, setLoading] = useState(true);

  const handleGetTeams = async () => {
    try {
      const res = await axios.get("http://localhost:5000/team");
      setTeams(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetTeams();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div className="container mx-auto py-20 px-4 flex flex-col items-center gap-4">
      <div className="flex text-center">
        <h2 className="text-3xl font-semibold">Our Leadership Team</h2>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4 xl:flex-row lg:justify-between">
        {teams?.map((item, i) => {
          return (
            <div
              key={i}
              className="w-72 h-40 flex flex-col items-center text-center"
            >
              <div className="size-20 bg-zinc-300 rounded-full flex items-center justify-center"></div>
              <h2 className="font-semibold mt-1.5">{item.name}</h2>
              <p className="text-sm">{item.position}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { CreateUrlModal, CreateButton } from "./index";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ShowLinks from "./ShowLinks";

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentPage = parseInt(searchParams.get("page") || "1");

  const handleCreate = async (fullUrl: string, shortUrl?: string) => {
    console.log("Creating short URL:", { fullUrl, shortUrl });
    const fetchRes = await fetch("/api/links", {
      method: "POST",
      body: JSON.stringify({ url: fullUrl, code: shortUrl }),
    });
    if (!fetchRes.ok) {
      console.log("FAILED TO CREATE NEW URL");
      return;
    }

    // const fetchJson = await fetchRes.json();
    // console.log(fetchJson);

    // Refresh the page to show new link
    router.refresh();
    // return await database.addUrl(fullUrl, shortUrl);
  };
  const handleModalOpenClose = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <div className="m-3 relative h-screen  bg-[#1e1e3f]/90 backdrop-blur-xl border border-purple-500/10 rounded-2xl ">
      <div className="flex justify-between flex-wrap border-b border-b-purple-500/10">
        <div className="p-3">
          <CreateButton onClick={handleModalOpenClose} />
        </div>
        <div className="flex items-center p-3">
          <h1 className="">Search Bar</h1>
        </div>
      </div>
      {/* {data.length != 0 && <NoLinks />}
      {data && <LinkTable />} */}
      <ShowLinks page={currentPage} />
      <CreateUrlModal
        isOpen={isModalOpen}
        onClose={handleModalOpenClose}
        onCreate={handleCreate}
      />
    </div>
  );
}

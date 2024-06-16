import React from "react";
import Services from "./services";
import Cards from "./cards";
import RecentHistory from "./histories";

function Provider() {
  return (
    <>
      
        {/* Main content */}
        <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
          {/* <!-- Main content header --> */}
          <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
            <h1 className="text-2xl font-semibold whitespace-nowrap">
              Dashboard
            </h1>
          </div>

          {/* <!-- Start Content --> */}
          <Cards />
          <Services />
          <RecentHistory />
        </main>
    </>
  );
}

export default Provider;

import React from "react";
import { Instagram } from "react-content-loader";

const LoadingDetail = () => {
  return (
    <div className="mx-auto h-96 grid">
      <div className="border bg-gray-100 shadow rounded-md p-4 max-w-3xl w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-2xl bg-gray-200 h-96 w-1/2"></div>
          <div className="flex flex-col flex-1 space-y-6 justify-between py-6">
            <div className="space-y-3">
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded"></div>
              
            </div>
            <div className="space-y-2">
              <div className="h-10 bg-gray-300 rounded"></div>
              <div className="h-10 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDetail;

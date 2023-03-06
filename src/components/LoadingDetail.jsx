import React from "react";
import { Instagram } from "react-content-loader";

const LoadingDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="max-w-3xl w-full">
        <div className="rounded-md bg-gray-100 shadow-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="h-96 bg-gray-200 rounded-lg"></div>
            <div className="flex flex-col space-y-4 justify-between py-6">
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-10 bg-gray-300 rounded"></div>
                <div className="h-10 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDetail;

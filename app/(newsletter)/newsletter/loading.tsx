import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const LoadingNewsletter: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Card className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
        <Skeleton className="rounded-lg">
          <div className="h-40 rounded-lg bg-gray-300"></div>
        </Skeleton>
        <div className="space-y-4 mt-4">
          <Skeleton className="h-6 rounded-lg">
            <div className="h-6 rounded-lg bg-gray-200"></div>
          </Skeleton>
          <Skeleton className="h-6 rounded-lg">
            <div className="h-6 rounded-lg bg-gray-200"></div>
          </Skeleton>
          <Skeleton className="h-6 w-1/2 rounded-lg">
            <div className="h-6 w-full rounded-lg bg-gray-200"></div>
          </Skeleton>
        </div>
      </Card>
    </div>
  );
};

export default LoadingNewsletter;

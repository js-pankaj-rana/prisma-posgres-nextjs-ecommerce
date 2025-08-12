'use client'

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Image
        src="images/logo.svg"
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
        priority={true}
      />
      <div className="p-6 w-1/3 shadow-md rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">
          Could not found the requested page.
          <Button
            variant="outline" 
            className="mt-4 ml-2" 
             onClick={() => (window.location.href = "/")}
          >
            Back to home
          </Button>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;

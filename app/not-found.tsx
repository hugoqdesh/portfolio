"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="w-full min-h-screen flex flex-col gap-2 items-center justify-center select-none">
      <span className="text-7xl">404</span>
      <span className="text-5xl">Page not found!</span>
      <button
        className="text-lg px-6 py-2 border-2 mt-6 rounded-xl"
        onClick={goBack}
      >
        Go back
      </button>
    </div>
  );
};

export default Page;

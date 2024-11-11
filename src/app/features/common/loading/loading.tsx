export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-start h-screen mt-10">
      <div
        className="animate-spin inline-block size-10 border-[5px] border-current border-t-transparent text-[#8c273e] rounded-full dark:text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      <p className="text-off-white text-xl p-5">building something amazing</p>
    </div>
  );
}

export default LoadingSpinner;

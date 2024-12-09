import { ClockLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <ClockLoader color="#20e5df" size={100} speedMultiplier={3} />
    </div>
  );
};

export default Loading;

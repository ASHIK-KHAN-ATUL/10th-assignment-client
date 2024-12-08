import { RingLoader } from "react-spinners";


const Loading = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <RingLoader className="text-sm"></RingLoader>
        </div>
    );
};

export default Loading;
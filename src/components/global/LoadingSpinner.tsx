import { ImSpinner9 } from "react-icons/im";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center">
      <ImSpinner9 className="text-8xl animate-spin" />
    </div>
  );
};

export default LoadingSpinner;

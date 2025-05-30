import { ImSpinner9 } from "react-icons/im";
import Modal from "./Modal";

const LoadingSpinner = () => {
  return (
   <Modal>
      <div className="flex justify-center">
        <ImSpinner9 className="text-8xl animate-spin" />
      </div>
   </Modal>
  );
};

export default LoadingSpinner;

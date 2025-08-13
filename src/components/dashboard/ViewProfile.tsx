import { useAppSelector } from "@/redux/hooks";
import {
  Settings,
  CircleUserRound,
  LogOutIcon
} from "lucide-react";

const ViewProfile = () => {
  const {name, email} = useAppSelector(state => state.auth);
  return (
    <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <CircleUserRound />
          <div>
            <p>{email}</p>
            {/* <p className="mb-4 mt-1">View profile</p> */}
          </div>
        </div>
        {/* <Settings /> */}
    </div>
  )
};

export default ViewProfile;

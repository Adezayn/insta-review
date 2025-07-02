import { useAppSelector } from "@/redux/hooks";
import {
  Settings,
  CircleUserRound,
  LogOutIcon
} from "lucide-react";

const ViewProfile = () => {
  const {name} = useAppSelector(state => state.users);
  return (
    <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <CircleUserRound />
          <div>
            <p>{name}</p>
            {/* <p className="mb-4 mt-1">View profile</p> */}
          </div>
        </div>
        {/* <Settings /> */}
        <LogOutIcon />
    </div>
  )
};

export default ViewProfile;

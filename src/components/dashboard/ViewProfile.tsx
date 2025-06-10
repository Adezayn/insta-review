import {
  Settings,
  CircleUserRound,
  LogOutIcon
} from "lucide-react";

const ViewProfile = () => {
  return (
    <div className="flex justify-between">
        <div className="flex gap-2">
          <CircleUserRound />
          <div>
            <p>Amanda</p>
            <p className="mb-4 mt-1">View profile</p>
          </div>
        </div>
        <Settings />
        <LogOutIcon />
    </div>
  )
};

export default ViewProfile;

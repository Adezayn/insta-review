import {
  Settings,
  User2Icon
} from "lucide-react";

const ViewProfile = () => {
  return (
    <div className="flex justify-between">
        <div className="flex gap-2">
          <User2Icon />
          <div>
            <p>Amanda</p>
            <p>View profile</p>
          </div>
        </div>
        <Settings />
    </div>
  )
};

export default ViewProfile;

import UserPng from "@/assets/images/user.png";
import Image from "next/image";
const UserIcon = () => {
  return (
    <Image src={UserPng} alt="avatar" className="" width={34} height={34} />
  )
}

export default UserIcon
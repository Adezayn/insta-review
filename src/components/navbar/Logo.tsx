import Link from "next/link"
import { MdOutlineReviews } from "react-icons/md";


const Logo = () => {
  return (
    <Link href="/" className="flex items-end">
      <MdOutlineReviews className="text-pink-500" size={20} />
      <p className="font-bold">
        <span className="text-pink-500">insta</span>
        <span className="text-indigo-600">Review</span>
      </p>
    </Link>
  );
}

export default Logo
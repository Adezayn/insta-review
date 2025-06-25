import { IconType } from "react-icons";

interface IconStar {
  icon: IconType;
  size?: number;
  color?: string
}
const IconContainer: React.FC<IconStar> = ({ icon: Icon, size, color }) => {
  return (
     <Icon size={size} color={color || "text-pink-500"} />
  );
};

export default IconContainer;

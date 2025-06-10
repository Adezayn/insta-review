import { IconType } from "react-icons";

interface IconStar {
  icon: IconType;
  size?: number;
}
const IconContainer: React.FC<IconStar> = ({ icon: Icon, size }) => {
  return (
     <Icon size={size} color="text-pink-500" />
  );
};

export default IconContainer;

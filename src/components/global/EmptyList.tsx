import { cn } from "@/lib/utils";

type Props = {
  heading?: string;
  className?: string;
};

const EmptyList = ({heading = "No items at the moment.", className}: Props) => {
  return (
    <div>
      <h2 className={cn('text-xl', className)}>{heading}</h2>
    </div>
  )
}

export default EmptyList
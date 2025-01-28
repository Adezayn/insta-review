
import {
  Dialog,
  DialogContent,
  DialogDescription,
//   DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
    children: React.ReactNode,
    title?: string | React.ReactNode,
    description?: string,
    button?: React.ReactNode
}
export function DialogContainer({children, title, description, button}: Props) {
  return (
    <Dialog>
      {button && <DialogTrigger asChild>{button}</DialogTrigger>}
      <DialogContent className="sm:max-w-[500px] max-h-[80%] overflow-auto">
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

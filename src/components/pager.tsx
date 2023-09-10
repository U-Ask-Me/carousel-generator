import { Button } from "@/components/ui/button";
import { useFieldArrayValues } from "@/lib/hooks/use-field-array-values";
import { usePagerContext } from "@/lib/providers/pager-context";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Props extends React.HTMLAttributes<HTMLElement> {}

export default function Pager({}: Props) {
  const { currentPage, onPreviousClick, onNextClick, setCurrentPage } =
    usePagerContext();
  const { numPages } = useFieldArrayValues("slides");

  return (
    <div className="flex flex-col gap-2  md:flex-row  items-center ">
      <p className="px-2">{`Slide ${Math.min(
        currentPage + 1,
        numPages
      )} of ${numPages}`}</p>
      <div className="flex flex-row gap-1 items-center">
        <Button
          onClick={() => setCurrentPage(0)}
          variant="outline"
          size="sm"
          disabled={currentPage == 0}
        >
          <ChevronFirst className="w-4 h-4" />
        </Button>
        <Button
          onClick={onPreviousClick}
          variant="outline"
          size="sm"
          disabled={currentPage == 0}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          onClick={onNextClick}
          variant="outline"
          size="sm"
          disabled={currentPage == numPages - 1 || numPages == 0}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => setCurrentPage(numPages - 1)}
          variant="outline"
          size="sm"
          disabled={currentPage == numPages - 1 || numPages == 0}
        >
          <ChevronLast className="w-4 h-4" />
        </Button>
      </div>{" "}
    </div>
  );
}

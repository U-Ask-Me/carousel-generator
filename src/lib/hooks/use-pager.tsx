import { useState } from "react";

export function usePager(initialPage: number, numPages: number) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const onPreviousClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextClick = () => {
    if (currentPage < numPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    currentPage,
    onPreviousClick,
    onNextClick,
    numPages,
  };
}

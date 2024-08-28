import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers:any = [];
  const maxVisiblePages = 5;

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return pageNumbers;
    }

    const halfVisible = Math.floor(maxVisiblePages / 2);
    let start = currentPage - halfVisible;
    let end = currentPage + halfVisible;

    if (start < 1) {
      end += Math.abs(start) + 1;
      start = 1;
    }

    if (end > totalPages) {
      start -= end - totalPages;
      end = totalPages;
    }

    const visiblePages = pageNumbers.slice(start - 1, end);

    if (start > 1) {
      visiblePages.unshift(-1);
      visiblePages.unshift(1);
    }

    if (end < totalPages) {
      visiblePages.push(-1);
      visiblePages.push(totalPages);
    }

    return visiblePages;
  };

  return (
    <nav className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {getVisiblePages().map((pageNumber:any, index:any) => (
        <React.Fragment key={index}>
          {pageNumber === -1 ? (
            <Button variant="ghost" size="icon" disabled>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant={pageNumber === currentPage ? "default" : "outline"}
              size="icon"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          )}
        </React.Fragment>
      ))}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
};

export default Pagination;

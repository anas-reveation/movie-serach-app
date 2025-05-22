import ReactPaginate from "react-paginate";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div className="flex justify-center mt-8">
      <ReactPaginate
        previousLabel="«"
        nextLabel="»"
        breakLabel="..."
        pageCount={totalPages}
        forcePage={currentPage - 1}
        onPageChange={(selectedItem) => onPageChange(selectedItem.selected + 1)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        containerClassName="flex space-x-2"
        pageClassName="px-4 py-2 border rounded"
        activeClassName="bg-blue-600 text-white"
        previousClassName="px-3 py-2 border rounded"
        nextClassName="px-3 py-2 border rounded"
        breakClassName="px-4 py-2"
        disabledClassName="opacity-50"
      />
    </div>
  );
}

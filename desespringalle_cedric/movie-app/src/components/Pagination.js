import React from "react";
import { Button } from "react-bootstrap";

function Pagination({ currentPage, setCurrentPage }) {
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="pagination justify-content-around m-4">
            <Button variant="secondary" onClick={handlePrevPage} disabled={currentPage === 1}>Previous page</Button>
            <Button variant="secondary" onClick={handleNextPage}>Next page</Button>
        </div>
    );
}

export default Pagination;
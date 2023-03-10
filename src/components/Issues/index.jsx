import React, { useState, useEffect } from "react";
import Issue from "./Issue";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const issuesPerPage = 10;

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/issues", {
      headers: {
        authorization: "token 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",
      },
    })
      .then((response) => response.json())
      .then((data) => setIssues(data))
      .catch((error) => console.error(error));
  }, []);

  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="Issues">
      <ul>
        {currentIssues.map((issue) => (
          <Issue
            key={issue.id}
            id={issue.id}
            text={issue.title || "No Title"}
            isOpen={issue.state}
            number={issue.number}
            created_at={issue.created_at}
            user={issue.user}
            badges={
              issue.labels.map((label) => ({
                text: label.name,
                color: label.color,
              })) || []
            }
            comments = {issue.comments}
          />
        ))}
      </ul>
      <Pagination
        issuesPerPage={issuesPerPage}
        totalIssues={issues.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ issuesPerPage, totalIssues, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalIssues / issuesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item${
              currentPage === pageNumber ? " active" : ""
            }`}
          >
            <div onClick={() => paginate(pageNumber)} className="page-link">
              {pageNumber}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Issues;

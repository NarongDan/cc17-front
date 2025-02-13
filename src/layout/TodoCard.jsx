import React from "react";

export default function TodoCard({ item: { title, dueDate, status } }) {
  //   const { title, dueDate, status } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p>{title}</p>
        <p>{new Date(dueDate).toDateString()}</p>
        <p>{status}</p>
      </div>
    </div>
  );
}

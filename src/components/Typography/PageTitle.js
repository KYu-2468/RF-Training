import React from "react";

function PageTitle({ children }) {
  return (
    <h1 className="my-6 text-3xl font-semibold text-gray-700 dark:text-gray-200 z-10">
      {children}
    </h1>
  );
}

export default PageTitle;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AdminLayout from "../AdminLayout";

function Dashboard() {
  return (
    <body className="bg-gray-900">
      <AdminLayout />
      <div className="px-6 pt-6 2xl:container ml-20">
        <div className="flex h-[100vh] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 ml-48">
          <span className="dark:text-white">Content</span>
        </div>
      </div>
    </body>
  );
}

export default Dashboard;

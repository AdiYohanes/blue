/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { TableProps } from "@/types";
import React from "react";

const Table = ({ tableData, column }: TableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-[1500px] text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {column.map((columName, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {columName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr
              key={index} // Assuming index can act as unique key, consider using a unique identifier if available
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 p-8"
            >
              <td className="px-6 py-4 text-2xl font-semibold text-gray-900 dark:text-white">
                {item.oilboom}
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {item.description}
              </td>
              <td className="px-6 py-4">
                {item.pdf && (
                  <a
                    href={item.pdf}
                    target="_blank"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Download
                  </a>
                )}
                {item.project && <h3 className="text-2xl">{item.project}</h3>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React from 'react';

const OrderTable = ({ data, columns }) => {
    if (!data || data.length === 0) {
        return (
            <div className="text-gray-600 p-4 border border-gray-200 rounded-lg bg-gray-50">
                Không có dữ liệu đơn hàng nào.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-6 py-4 whitespace-nowrap"
                                >
                                    <div className="text-sm text-gray-900">
                                        {typeof column.accessor === 'function'
                                            ? column.accessor(row)
                                            : row[column.accessor]}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;
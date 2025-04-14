import React from 'react';
import { FaEye, FaDownload, FaTrash } from 'react-icons/fa';

const MyDocuments: React.FC = () => {
  const files = [
    { id: 1, name: 'Document 1', date: '2023-10-01' },
    { id: 2, name: 'Document 2', date: '2023-10-02' },
    { id: 3, name: 'Document 3', date: '2023-10-03' },
  ];

  const handleView = (id: number) => {
    alert(`View document with ID: ${id}`);
  };

  const handleDownload = (id: number) => {
    alert(`Download document with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Delete document with ID: ${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">My Documents</h1>
      <p className="text-gray-600 mb-6">List of all documents uploaded by you.</p>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Document Name</th>
              <th className="px-4 py-3 text-left">Uploaded On</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={file.id} className="hover:bg-gray-50">
                <td className="border-t px-4 py-3 text-gray-800">{index + 1}</td>
                <td className="border-t px-4 py-3 text-blue-700 font-medium">{file.name}</td>
                <td className="border-t px-4 py-3 text-green-700">{file.date}</td>
                <td className="border-t px-4 py-3 text-center">
                  <div className="flex justify-center space-x-3">
                    <button
                      onClick={() => handleView(file.id)}
                      className="text-blue-500 hover:text-blue-700"
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleDownload(file.id)}
                      className="text-green-500 hover:text-green-700"
                      title="Download"
                    >
                      <FaDownload />
                    </button>
                    <button
                      onClick={() => handleDelete(file.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {files.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  No documents found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDocuments;

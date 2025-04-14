import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h3 className="font-semibold">Total Documents</h3>
          <p>50</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h3 className="font-semibold">Recent Activities</h3>
          <p>5 New Uploads</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

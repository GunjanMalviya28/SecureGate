
import React from 'react';

function Dashboard({ onLogout }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h2 className="text-2xl mb-4">Dashboard</h2>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
              onClick={onLogout}
            >
              Logout
            </button>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              
              <img
                className="w-full h-auto hover:scale-105"
                src="https://images.unsplash.com/photo-1683009427042-e094996f9780?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/400x200"
                alt="Placeholder 1"
              />
              <img
                className="w-full h-auto hover:scale-105"
                src="https://images.unsplash.com/photo-1711376330772-9117a7217694?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/400x200"
                alt="Placeholder 2"
              />
              <img
                className="w-full h-auto hover:scale-105"
                src="https://images.unsplash.com/photo-1711539924834-06816347ff2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/400x200"
                alt="Placeholder 3"
              />
              <img
                className="w-full h-auto hover:scale-105"
                src="https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/400x200"
                alt="Placeholder 4"
              />
               <img
                className="w-full h-auto hover:scale-105"
                src="https://images.unsplash.com/photo-1709828490848-1603573f96e7?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/400x200"
                alt="Placeholder 1"
              />
                 <img
                className="w-full h-auto hover:scale-105"
                src="https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/400x200"
                alt="Placeholder 1"
              />
                 <img
                className="w-full h-auto hover:scale-105"
                src="https://images.unsplash.com/photo-1707345512638-997d31a10eaa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/400x200"
                alt="Placeholder 1"
              />
                 <img
                className="w-full h-auto hover:scale-105"
                src="https://images.unsplash.com/photo-1682686578601-e7851641d52c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/400x200"
                alt="Placeholder 1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

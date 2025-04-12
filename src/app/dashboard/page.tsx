import { Settings } from "lucide-react";

function Dashboard() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-bold text-3xl">
      <div className="shadow-lg p-10 bg-white dark:bg-gray-800 rounded-lg flex flex-col items-center">
        <h2 className="m-2">
          <Settings className="inline-block" /> Dashboard is still under
          development...
        </h2>
      </div>
    </div>
  );
}

export default Dashboard;

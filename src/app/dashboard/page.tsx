import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Settings } from "lucide-react";

function Dashboard() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-bold text-3xl">
      <Avatar>
        <AvatarImage src="/logo.svg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>{" "}
      Welcome to ColleLink Dashboard
      <p>
        <Settings /> Dashboard is still under development...
      </p>
    </div>
  );
}

export default Dashboard;

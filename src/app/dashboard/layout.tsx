import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>{/* SideNav Bar */}</div>
      <div>
        {/* Main Page Content */}
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;

import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import StoreProvider from "@/lib/redux";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default function DashboardWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
}

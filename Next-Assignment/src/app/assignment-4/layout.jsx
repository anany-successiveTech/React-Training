'use client'
import SidebarDrawer from "@/component/SideBar";
// import Sidebar from "@/component/SideBar";

export default function RootLayout({ children }) {
  const questionArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div className="assignment-layout">
      {/* <Sidebar countArray={questionArray} assignmentNo="4" /> */}
      <SidebarDrawer countArray={questionArray} assignmentNo="4" />
      <main className="main-content">{children}</main>
    </div>
  );
}



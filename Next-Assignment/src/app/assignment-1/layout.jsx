'use client'
import SidebarDrawer from "@/component/SideBar";


export default function RootLayout({ children }) {
  const questionArray = [1, 2, 3, 4, 5, 6];

  return (
    <div className="assignment-layout">
      {/* <Sidebar countArray={questionArray} assignmentNo="1" /> */}
      <SidebarDrawer countArray={questionArray} assignmentNo="1" />
      <main className="main-content">{children}</main>
    </div>
  );
}

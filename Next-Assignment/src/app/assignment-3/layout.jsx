import Sidebar from "@/component/SideBar";
import { AuthProvider } from "@/context/AuthProvider";

export default function RootLayout({ children }) {
  const questionArray = [1, 2, 3, 4, 5, 6];

  return (
    <AuthProvider> 
      <div className="assignment-layout">
        <Sidebar countArray={questionArray} assignmentNo="3" />
        <main className="main-content">{children}</main>
      </div>
    </AuthProvider>
  );
}

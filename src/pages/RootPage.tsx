import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function RootPage() {
  return (
    <div className="min-h-screen bg-primary pt-4 relative">
      <Header />

      <div>
        <Outlet />  
      </div>
    </div>
  );
}

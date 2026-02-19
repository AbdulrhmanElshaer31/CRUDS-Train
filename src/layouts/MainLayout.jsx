// layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Fotter";

export default function MainLayout() {
  return (
    <div>
      <Header />
      
      <main className="min-h-screen">
        <Outlet /> 
      </main>
      
      <Footer />
    </div>
  );
}
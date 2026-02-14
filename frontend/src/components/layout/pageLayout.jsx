import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";

export function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

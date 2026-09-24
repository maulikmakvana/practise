import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
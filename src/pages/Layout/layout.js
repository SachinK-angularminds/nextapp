import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/footer";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <aside className="w-14 flex flex-col border-r bg-background">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto">
        <div className="">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;

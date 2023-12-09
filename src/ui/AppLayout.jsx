import { Outlet, useNavigation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Footer, Navbar, Loader } from ".";
import ScrollToTop from "../utils/ScrollToTop";
// import ErrorBoundary from "./ErrorBoundary";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        <div className="flex min-h-screen w-screen flex-col items-center bg-gray-50">
          {isLoading && <Loader />}
          <Navbar />
          <main className="P-3 mt-[80px] min-h-screen ">
            <Outlet />
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}

export default AppLayout;

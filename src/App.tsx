import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      return;
    }

    const targetId = hash.slice(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "auto" });
  }, [hash, pathname]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <ScrollToHash />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;

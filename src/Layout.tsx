import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

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

const Layout = () => (
  <MotionConfig reducedMotion="user">
    <ScrollToHash />
    <Outlet />
    <Analytics />
  </MotionConfig>
);

export default Layout;

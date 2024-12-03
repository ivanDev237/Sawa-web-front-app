// import { useMediaQuery } from "@uidotdev/usehooks";
// import { useEffect, useRef, useState } from "react";
// import { Outlet } from "react-router-dom";
// import Footer from "../../components/Footer"; // Import du Footer
// import Header from "../../components/Header";
// import SideBar from "../../components/Sidebar";
// import { useClickOutside } from "../../hooks/useClickOutside";
// import { cn } from "../../utils/cn";

// const DashboardAdmin: React.FC = () => {
//   const isDesktopDevice = useMediaQuery("(min-width:768px)");
//   const [collapsed, setCollapsed] = useState(!isDesktopDevice);
//   const sideBarRef = useRef(null);

//   useEffect(() => {
//     setCollapsed(!isDesktopDevice);
//   }, [isDesktopDevice]);

//   useClickOutside([sideBarRef], () => {
//     if (!isDesktopDevice && !collapsed) {
//       setCollapsed(true);
//     }
//   });

//   return (
//     <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
//       <div
//         className={cn(
//           "pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity",
//           !collapsed &&
//             "max-md:pointer-events-auto max-md:opacity-30 max-md:z-50"
//         )}
//       />
//       <SideBar ref={sideBarRef} collapsed={collapsed} />
//       <div
//         className={cn(
//           "transition-[margin] duration-300",
//           collapsed ? "md:ml-[70px]" : "md:ml-[240px]"
//         )}
//       >
//         <Header collapsed={collapsed} setCollapsed={setCollapsed} />
//         <main className="h-[calc(100vh-60px)] overflow-x-hidden overflow-y-auto p-6 [scrollbar-width:_thin] z-[10]">
//           {/* Contenu principal */}
//           <Outlet />
//         </main>
//         {/* Ajout du Footer */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default DashboardAdmin;

import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import { useClickOutside } from "../../hooks/useClickOutside";
import { cn } from "../../utils/cn";

const DashboardAdmin: React.FC = () => {
  const isDesktopDevice = useMediaQuery("(min-width:768px)");
  const [collapsed, setCollapsed] = useState(!isDesktopDevice);

  // Typage du ref pour un div HTML
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCollapsed(!isDesktopDevice);
  }, [isDesktopDevice]);

  useClickOutside([sideBarRef], () => {
    if (!isDesktopDevice && !collapsed) {
      setCollapsed(true);
    }
  });

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors">
      <div
        className={cn(
          "pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity",
          !collapsed &&
            "max-md:pointer-events-auto max-md:opacity-30 max-md:z-50"
        )}
      />
      {/* Passage du ref correctement typé */}
      <SideBar ref={sideBarRef} collapsed={collapsed} />
      <div
        className={cn(
          "transition-[margin] duration-300",
          collapsed ? "md:ml-[70px]" : "md:ml-[240px]"
        )}
      >
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="h-[calc(100vh-60px)] overflow-x-hidden overflow-y-auto p-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardAdmin;

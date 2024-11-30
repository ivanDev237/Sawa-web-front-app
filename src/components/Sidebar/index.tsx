// import { ArrowDropDown } from "@mui/icons-material";
// import { forwardRef, LegacyRef, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import logoDark from "../../Assets/imgs/logo-dark.svg";
// import logoLight from "../../Assets/imgs/logo-light.svg";
// import { default as navbarLinks } from "../../constants/sideBarAdminLinks";
// import { cn } from "../../utils/cn";

// interface SideBarProps {
//   ref: any;
//   collapsed: boolean;
// }

// const SideBar: React.FC<SideBarProps> = forwardRef(
//   ({ collapsed }, ref: LegacyRef<HTMLElement>) => {
//     const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null); // Gère les sous-menus ouverts
//     const [hoveredMenu, setHoveredMenu] = useState<string | null>(null); // Gère les menus survolés pour le collapsed

//     // Réinitialiser le sous-menu actif quand la sidebar est réduite
//     useEffect(() => {
//       if (collapsed) {
//         setActiveSubMenu(null);
//       }
//     }, [collapsed]);

//     return (
//       <aside
//         ref={ref}
//         className={cn(
//           "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900",
//           collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
//           collapsed ? "max-md:-left-full" : "max-md:left-0"
//         )}
//       >
//         {/* Logo - Centré quand la sidebar est réduite */}
//         <div
//           className={cn(
//             "flex gap-x-3 p-3 justify-start items-center", // Assure que l'alignement se fait à gauche normalement
//             collapsed && "justify-center" // Centrer le logo si la sidebar est réduite
//           )}
//         >
//           <img src={logoLight} alt="Sawa_Logo" className="dark:hidden" />
//           <img src={logoDark} alt="SawaLogo" className="hidden dark:block" />
//           {!collapsed && (
//             <p className="text-lg font-medium text-slate-900 dark:text-slate-50">
//               SAWA
//             </p>
//           )}
//         </div>

//         {/* Sidebar Links */}
//         <div className="flex w-full flex-col gap-y-4 overflow-y-auto  p-3 [scrollbar-width:_thin] z-50">
//           {navbarLinks.map((navbarLink) => (
//             <nav
//               key={navbarLink.title}
//               onMouseEnter={() => collapsed && setHoveredMenu(navbarLink.label)}
//               onMouseLeave={() => collapsed && setHoveredMenu(null)}
//               className="relative"
//             >
//               {/* Element avec sous-menu */}
//               {navbarLink.subMenu ? (
//                 <>
//                   <div
//                     className={cn(
//                       "sidebar-item flex items-center cursor-pointer",
//                       collapsed ? "justify-center" : "justify-start"
//                     )}
//                     onClick={() =>
//                       !collapsed &&
//                       setActiveSubMenu((prev) =>
//                         prev === navbarLink.label ? null : navbarLink.label
//                       )
//                     }
//                   >
//                     <navbarLink.icon className="flex-shrink-0" />
//                     {!collapsed && (
//                       <p className="ml-3 text-sm font-medium text-slate-900 dark:text-slate-50 ">
//                         {navbarLink.label}
//                       </p>
//                     )}
//                     {!collapsed && (
//                       <ArrowDropDown
//                         className={cn(
//                           "ml-auto transition-transform",
//                           activeSubMenu === navbarLink.label && "rotate-180"
//                         )}
//                       />
//                     )}
//                   </div>
//                   {/* Accordéon : sous-menu */}
//                   <ul
//                     className={cn(
//                       "ml-8 mt-2 space-y-2 transition-all duration-300 z-[1000]",
//                       activeSubMenu === navbarLink.label
//                         ? "max-h-screen opacity-100"
//                         : "max-h-0 opacity-0"
//                     )}
//                   >
//                     {navbarLink.subMenu.map((subItem) => (
//                       <li key={subItem.linkItem}>
//                         <NavLink
//                           to={subItem.linkItem}
//                           className="block text-sm text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
//                         >
//                           {subItem.items}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               ) : (
//                 // Element sans sous-menu : simple lien
//                 <NavLink
//                   to={navbarLink.link || "#"}  
//                   className={cn(
//                     "sidebar-item flex items-center",
//                     collapsed ? "justify-center" : "justify-start"
//                   )}
//                 >
//                   <navbarLink.icon className="flex-shrink-0" />
//                   {!collapsed && (
//                     <span className="ml-3 text-sm font-medium text-slate-900 dark:text-slate-50">
//                       {navbarLink.label}
//                     </span>
//                   )}
//                 </NavLink>
//               )}

//               {/* Hover SubMenu (Collapsed) */}
//               {navbarLink.subMenu &&
//                 collapsed &&
//                 hoveredMenu === navbarLink.label && (
//                   <div
//                     className="absolute left-full top-0 w-48 bg-white p-2 shadow-md dark:bg-slate-800 z-[200]"
//                     style={{
//                       overflow: "visible", // Important pour s'assurer que rien n'est masqué
//                     }}
//                   >
//                     <ul className="space-y-2 z-[700]">
//                       {navbarLink.subMenu.map((subItem) => (
//                         <li key={subItem.linkItem}>
//                           <NavLink
//                             to={subItem.linkItem}
//                             className="block text-sm text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
//                           >
//                             {subItem.items}
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//             </nav>
//           ))}
//         </div>
//       </aside>
//     );
//   }
// );

// SideBar.displayName = "Sidebar";
// export default SideBar;

//

// import { DownOutlined } from "@ant-design/icons";
// import { Dropdown, Layout, Menu } from "antd";
// import React, { forwardRef, LegacyRef, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import logoDark from "../../Assets/imgs/logo-dark.svg";
// import logoLight from "../../Assets/imgs/logo-light.svg";
// import { default as navbarLinks } from "../../constants/sideBarAdminLinks";
// import { cn } from "../../utils/cn";

// const { Sider } = Layout;

// interface SideBarProps {
//   collapsed: boolean;
//   ref: any;
// }

// const SideBar: React.FC<SideBarProps> = forwardRef(
//   ({ collapsed }, ref: LegacyRef<HTMLDivElement>) => {
//     const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null); // Gère les sous-menus ouverts
//     const [hoveredMenu, setHoveredMenu] = useState<string | null>(null); // Gère les menus survolés pour le collapsed

//     // Réinitialiser le sous-menu actif quand la sidebar est réduite
//     useEffect(() => {
//       if (collapsed) {
//         setActiveSubMenu(null);
//       }
//     }, [collapsed]);

//     const handleSubMenuClick = (label: string) => {
//       setActiveSubMenu((prev) => (prev === label ? null : label));
//     };

//     const renderSubMenu = (subMenu: any[]) => {
//       return subMenu.map((subItem) => (
//         <Menu.Item key={subItem.linkItem} className="pl-4">
//           <NavLink
//             to={subItem.linkItem}
//             className="text-sm text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
//           >
//             {subItem.items}
//           </NavLink>
//         </Menu.Item>
//       ));
//     };

//     const renderMenu = (navbarLink: any) => {
//       if (navbarLink.subMenu) {
//         return (
//           <Dropdown
//             overlay={<Menu>{renderSubMenu(navbarLink.subMenu)}</Menu>}
//             trigger={["click"]}
//           >
//             <div
//               className={cn(
//                 "sidebar-item flex items-center cursor-pointer",
//                 collapsed ? "justify-center" : "justify-start"
//               )}
//               onClick={() => handleSubMenuClick(navbarLink.label)}
//             >
//               <navbarLink.icon className="flex-shrink-0" />
//               {!collapsed && (
//                 <p className="ml-3 text-sm font-medium text-slate-900 dark:text-slate-50">
//                   {navbarLink.label}
//                 </p>
//               )}
//               {!collapsed && (
//                 <DownOutlined
//                   className={cn(
//                     "ml-auto transition-transform",
//                     activeSubMenu === navbarLink.label && "rotate-180"
//                   )}
//                 />
//               )}
//             </div>
//           </Dropdown>
//         );
//       } else {
//         return (
//           <NavLink
//             to={navbarLink.link || "#"}
//             className={cn(
//               "sidebar-item flex items-center",
//               collapsed ? "justify-center" : "justify-start"
//             )}
//           >
//             <navbarLink.icon className="flex-shrink-0" />
//             {!collapsed && (
//               <span className="ml-3 text-sm font-medium text-slate-900 dark:text-slate-50">
//                 {navbarLink.label}
//               </span>
//             )}
//           </NavLink>
//         );
//       }
//     };

//     return (
//       <Sider
//         ref={ref}
//         width={collapsed ? 70 : 240}
//         className={cn(
//           "fixed z-[100] flex h-full flex-col overflow-x-hidden border-r border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900 transition-all duration-300",
//           collapsed && "md:items-center"
//         )}
//       >
//         {/* Logo - Centré quand la sidebar est réduite */}
//         <div
//           className={cn(
//             "flex gap-x-3 p-3 justify-start items-center",
//             collapsed && "justify-center"
//           )}
//         >
//           <img src={logoLight} alt="Sawa_Logo" className="dark:hidden" />
//           <img src={logoDark} alt="SawaLogo" className="hidden dark:block" />
//           {!collapsed && (
//             <p className="text-lg font-medium text-slate-900 dark:text-slate-50">
//               SAWA
//             </p>
//           )}
//         </div>

//         {/* Sidebar Links */}
//         <div className="flex w-full flex-col gap-y-4 overflow-y-auto p-3 z-50">
//           {navbarLinks.map((navbarLink) => (
//             <nav
//               key={navbarLink.title}
//               onMouseEnter={() => collapsed && setHoveredMenu(navbarLink.label)}
//               onMouseLeave={() => collapsed && setHoveredMenu(null)}
//               className="relative"
//             >
//               {renderMenu(navbarLink)}
//               {/* Hover SubMenu (Collapsed) */}
//               {navbarLink.subMenu &&
//                 collapsed &&
//                 hoveredMenu === navbarLink.label && (
//                   <div
//                     className="absolute left-full top-0 w-48 bg-white p-2 shadow-md dark:bg-slate-800 z-[200]"
//                     style={{
//                       overflow: "visible", // Important pour s'assurer que rien n'est masqué
//                     }}
//                   >
//                     <ul className="space-y-2 z-[700]">
//                       {navbarLink.subMenu.map((subItem) => (
//                         <li key={subItem.linkItem}>
//                           <NavLink
//                             to={subItem.linkItem}
//                             className="block text-sm text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
//                           >
//                             {subItem.items}
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//             </nav>
//           ))}
//         </div>
//       </Sider>
//     );
//   }
// );

// SideBar.displayName = "SideBar";
// export default SideBar;

import { ArrowDropDown } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { forwardRef, LegacyRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoDark from "../../Assets/imgs/logo-dark.svg";
import logoLight from "../../Assets/imgs/logo-light.svg";
import { default as navbarLinks } from "../../constants/sideBarAdminLinks"; // Je garde ta liste de liens
import { cn } from "../../utils/cn";

interface SideBarProps {
  ref: any;
  collapsed: boolean;
}

const SideBar: React.FC<SideBarProps> = forwardRef(
  ({ collapsed }, ref: LegacyRef<HTMLElement>) => {
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null); // Gère les sous-menus ouverts
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null); // Gère les menus survolés pour le collapsed
    const theme = useTheme();

    // Réinitialiser le sous-menu actif quand la sidebar est réduite
    useEffect(() => {
      if (collapsed) {
        setActiveSubMenu(null);
      }
    }, [collapsed]);

    return (
      <aside
        ref={ref}
        className={cn(
          "fixed z-[10] flex h-full w-[240px] flex-col  border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900 overflow-x-hidden",

          collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
          collapsed ? "max-md:-left-full" : "max-md:left-0"
        )}
      >
        {/* Logo - Centré quand la sidebar est réduite */}
        <div
          className={cn(
            "flex gap-x-3 p-3 justify-start items-center", // Assure que l'alignement se fait à gauche normalement
            collapsed && "justify-center" // Centrer le logo si la sidebar est réduite
          )}
        >
          <img src={logoLight} alt="Sawa_Logo" className="dark:hidden" />
          <img src={logoDark} alt="SawaLogo" className="hidden dark:block" />
          {!collapsed && (
            <p className="text-lg font-medium text-slate-900 dark:text-slate-50">
              SAWA
            </p>
          )}
        </div>

        {/* Sidebar Links */}
        <div className="flex w-full flex-col gap-y-4 overflow-y-auto  p-3 [scrollbar-width:_thin] z-50">
          {navbarLinks.map((navbarLink) => (
            <nav
              key={navbarLink.title}
              onMouseEnter={() => collapsed && setHoveredMenu(navbarLink.label)}
              onMouseLeave={() => collapsed && setHoveredMenu(null)}
              className="relative"
            >
              {/* Element avec sous-menu */}
              {navbarLink.subMenu ? (
                <>
                  <div
                    className={cn(
                      "sidebar-item flex items-center cursor-pointer",
                      collapsed ? "justify-center" : "justify-start"
                    )}
                    onClick={() =>
                      !collapsed &&
                      setActiveSubMenu((prev) =>
                        prev === navbarLink.label ? null : navbarLink.label
                      )
                    }
                  >
                    <navbarLink.icon className="flex-shrink-0" />
                    {!collapsed && (
                      <p className="ml-3 text-sm font-medium text-slate-900 dark:text-slate-50 ">
                        {navbarLink.label}
                      </p>
                    )}
                    {!collapsed && (
                      <ArrowDropDown
                        className={cn(
                          "ml-auto transition-transform",
                          activeSubMenu === navbarLink.label && "rotate-180"
                        )}
                      />
                    )}
                  </div>
                  {/* Accordéon : sous-menu */}
                  <ul
                    className={cn(
                      "ml-8 mt-2 space-y-2 transition-all duration-300 z-[1000]",
                      activeSubMenu === navbarLink.label
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    {navbarLink.subMenu.map((subItem) => (
                      <li key={subItem.linkItem}>
                        <NavLink
                          to={subItem.linkItem}
                          className="block text-sm text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                        >
                          {subItem.items}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                // Element sans sous-menu : simple lien
                <NavLink
                  to={navbarLink.link || "#"}
                  className={cn(
                    "sidebar-item flex items-center",
                    collapsed ? "justify-center" : "justify-start"
                  )}
                >
                  <navbarLink.icon className="flex-shrink-0" />
                  {!collapsed && (
                    <span className="ml-3 text-sm font-medium text-slate-900 dark:text-slate-50">
                      {navbarLink.label}
                    </span>
                  )}
                </NavLink>
              )}

              {/* Hover SubMenu (Collapsed) */}
              {navbarLink.subMenu &&
                collapsed &&
                hoveredMenu === navbarLink.label && (
                  <div
                    className="absolute left-full top-0 w-48 bg-white p-2 shadow-md dark:bg-slate-800 z-[200]"
                    style={{
                      overflow: "visible", // Important pour s'assurer que rien n'est masqué
                    }}
                  >
                    <ul className="space-y-2 z-[700]">
                      {navbarLink.subMenu.map((subItem) => (
                        <li key={subItem.linkItem}>
                          <NavLink
                            to={subItem.linkItem}
                            className="block text-sm text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                          >
                            {subItem.items}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </nav>
          ))}
        </div>
      </aside>
    );
  }
);

SideBar.displayName = "Sidebar";
export default SideBar;

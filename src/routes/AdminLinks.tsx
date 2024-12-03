import PartnersList from "../components/PartnerList";
import { PATH_SUPER_ADMIN } from "../constants/paths";
import DashboardAdminLayout from "../Layout/DashboardAdminLayout";
import DashboardPage from "../pages/Admin_Pages/DashboardPage/Dashboard_page";
import NotifsManagement from "../pages/Admin_Pages/ManageNotifs/NotificationManagement";
import Error404 from "../pages/Error/404";

const dashboardAdminLinks = [
  {
    path: PATH_SUPER_ADMIN.HOME,
    element: <DashboardAdminLayout />,
    children: [
      {
        path: PATH_SUPER_ADMIN.HOME,
        element: <DashboardPage />,
      },
      {
        path: PATH_SUPER_ADMIN.PARTNERS[0].LISTOFPARTNERS,
        element: <PartnersList />,
      },
      {
        path: PATH_SUPER_ADMIN.ADMINISTRATION_TOOLS[0].MANAGE_NOTIFICATIONS,
        element: <NotifsManagement />,
      },

      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];

export default dashboardAdminLinks;
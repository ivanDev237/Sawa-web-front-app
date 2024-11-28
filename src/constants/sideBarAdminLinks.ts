import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ExtensionIcon from "@mui/icons-material/Extension";
import HelpIcon from "@mui/icons-material/Help";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import StoreIcon from "@mui/icons-material/Store";
import TuneIcon from "@mui/icons-material/Tune";

interface MenuLists {
  title?: string;
  label: string;
  link?: string;
  icon: any;
  expanded?: boolean;
  subMenu?: { items?: string; linkItem: string }[];
  children?: MenuLists[];
}

const MenuListes: MenuLists[] = [
  {
    title: "Main",
    label: "Dashboard",
    icon: DashboardIcon,
    link: "/admin/dashboard",
    expanded: false,
  },

  {
    title: "Partner Section",
    label: "Partners",
    icon: PersonIcon,
    expanded: true,
    subMenu: [
      { items: "list Of Partners", linkItem: "partners/list" },
      {
        items: "partner subscriptions",
        linkItem: "partners/subscription",
      },
      {
        items: "QR code management",
        linkItem: "partners/qr_code_manage",
      },
    ],
  },

  {
    title: "Seller Management",
    label: "Shops",
    icon: StoreIcon,
    expanded: true,
    subMenu: [
      { items: "Add New Shop", linkItem: "shops/add" },
      {
        items: " Inactive/New Shops",
        linkItem: "shops/inactive_new_shop",
      },
    ],
  },

  {
    label: "List Of Products",
    icon: DeveloperBoardIcon,
    expanded: true,
    subMenu: [
      { items: "View All", linkItem: "products/view_all" },
      { items: "Evaluate Products", linkItem: "products/evaluate" },
    ],
  },

  {
    title: "Subscription Management",
    label: "Subscription Area",
    icon: ExtensionIcon,
    expanded: true,
    subMenu: [
      {
        items: " Subscriptions History",
        linkItem: "subscriptionArea_history",
      },
      {
        items: " Subscriptions Notifications",
        linkItem: "subscriptionArea_notifications",
      },
      {
        items: " Manage Subscriptions",
        linkItem: "admin/subscriptionArea_manage",
      },
    ],
  },

  {
    title: "Stats",
    label: "Global Stats",
    icon: PublicIcon,
    expanded: true,
    subMenu: [
      {
        items: "Platform Performance",
        linkItem: "plateform_performance/view",
      },
      {
        items: "User Analysis",
        linkItem: "plateform_user_analysis",
      },
    ],
  },

  {
    title: "Administration Tools",
    label: "Manage Notifs",
    icon: NotificationsIcon,
    link: "notifications_manage",
    expanded: false,
  },

  {
    label: "Report And Export",
    icon: AssessmentIcon,
    expanded: true,

    subMenu: [
      { items: "Download Reports", linkItem: "report/download" },
      { items: "Reports History", linkItem: "report/history" },
    ],
  },
  {
    title: "Platform configuration",
    label: "Application Settings",
    icon: TuneIcon,
    expanded: true,
    subMenu: [
      { items: "General Settings", linkItem: "app_settings/general" },
      { items: "Payments Settings", linkItem: "app_settings/payment" },
    ],
  },
  {
    label: "Vendor FAQs",
    icon: HelpIcon,
    expanded: true,
    subMenu: [
      { items: "All FAQs", linkItem: "vendor_faqs/all" },
      { items: "Add FAQ", linkItem: "vendor_faqs/add" },
    ],
  },
];

export default MenuListes;

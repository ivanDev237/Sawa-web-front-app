import { Home, ShoppingBag, UserCheck, Globe, Bell } from "lucide-react";

interface SubMenu {
    label: string; // Renamed from `items`
    link: string;  // Renamed from `linkItem`
}

interface MenuLists {
    title?: string;
    label: string;
    link?: string;
    icon: React.ElementType; // Updated from `any` to a React component type
    expanded?: boolean;
    subMenu?: SubMenu[]; // Improved type for submenus
}

const PartnerMenuListes: MenuLists[] = [
    {
        title: "Main",
        label: "Dashboard",
        icon: Home,
        link: "/partner",
        expanded: false,
    },
    {
        title: "Seller Management",
        label: "My Shop",
        icon: ShoppingBag,
        expanded: true,
        subMenu: [
            { label: "My Shop", link: "/partner/my_shop" },
            { label: "Products", link: "/partner/products" },
            { label: "Orders", link: "/partner/orders" },
        ],
    },
    {
        title: "Subscription Management",
        label: "Subscription Area",
        icon: UserCheck,
        expanded: true,
        subMenu: [
            { label: "Subscription Area", link: "/partner/subscription_area" },
        ],
    },
    {
        title: "Stats",
        label: "Global Status",
        icon: Globe,
        expanded: true,
        subMenu: [
            { label: "Global Status", link: "/partner/global_status" },
        ],
    },
    {
        title: "Administration Tools",
        label: "Notification Settings",
        icon: Bell,
        expanded: true,
        subMenu: [
            { label: "Notification Settings", link: "/partner/notification_settings" },
        ],
    },
];

export default PartnerMenuListes;

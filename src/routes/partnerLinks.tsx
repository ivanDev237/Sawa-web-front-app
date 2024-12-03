import DashboardPartnerLayout from "../Layout/DashboardPartnerLayout";
import Dashboard from "../pages/Partner_Pages/Dashboard";
import MyShop from "../pages/Partner_Pages/MyShop";
import Products from "../pages/Partner_Pages/Products";
import Orders from "../pages/Partner_Pages/Orders";
import Notifications from "../pages/Partner_Pages/Notifications";
import Status from "../pages/Partner_Pages/Status";
import Subscription from "../pages/Partner_Pages/Subscription";
import Error404 from "../pages/Error/404"; // Page 404
import { PATH_PARTNERS } from "../constants/paths";
import ProductList from "../pages/SubPages/MyShop/ProductList";
import Publications from "../pages/SubPages/MyShop/Publications";
import ProductPromotion from "../pages/SubPages/MyShop/ProductPromotion";

const partnersLinks = [
  {
    path: PATH_PARTNERS.HOME,
    element: <DashboardPartnerLayout />,
    children: [
      {
        path: "", // Tableau de bord
        element: <Dashboard />,
      },
      {
        path: PATH_PARTNERS.MY_SHOP[0].BASE, // MyShop
        element: <MyShop />,
        children: [
          {
            path: PATH_PARTNERS.MY_SHOP[0].PRODUCT_LIST, // Produits
            element: <ProductList />,
          },
          {
            path: PATH_PARTNERS.MY_SHOP[0].PUBLICATIONS, // Publications
            element: <Publications />,
          },
          {
            path: PATH_PARTNERS.MY_SHOP[0].PRODUCT_PROMOTION, // Promotions
            element: <ProductPromotion />,
          },
        ],
      },
      {
        path: PATH_PARTNERS.PRODUCTS, // Produits
        element: <Products />,
      },
      {
        path: PATH_PARTNERS.ORDERS, // Commandes
        element: <Orders />,
      },
      {
        path: PATH_PARTNERS.SUBSCRIPTION_AREA[0].BASE, // Abonnements
        element: <Subscription />,
      },
      {
        path: PATH_PARTNERS.GLOBAL_STATUS, // Statut global
        element: <Status />,
      },
      {
        path: PATH_PARTNERS.NOTIFICATION_SETTINGS, // Notifications
        element: <Notifications />,
      },
      {
        path: "*", // Page 404
        element: <Error404 />,
      },
    ],
  },
];




export default partnersLinks;

export const PATH_PARTNERS = {
  HOME: "/partner",

  MY_SHOP: [
    {
      BASE: "my_shop", // Retirer le slash initial
      PRODUCT_LIST: "productlist", // Retirer le slash initial
      PUBLICATIONS: "publications", // Retirer le slash initial
      PRODUCT_PROMOTION: "promotions", // Retirer le slash initial
    },
  ],

  PRODUCTS: "/partner/products",

  ORDERS: "/partner/orders",

  SUBSCRIPTION_AREA: [
    {
      BASE: "/partner/subscription_area", // Garder le slash initial car c'est un chemin parent
    },
  ],

  GLOBAL_STATUS: "/partner/global_status",

  NOTIFICATION_SETTINGS: "/partner/notification_settings",
};






export const PATH_SUPER_ADMIN = {
  HOME: "/admin/dashboard",

  PARTNERS: [
    {
      LISTOFPARTNERS: "partners/list",
    },
    {
      PARTNERS_SUBSCRIPTION: "partners/subscription",
    },
    {
      MANAGE_QR_CODE: "partners/qr_code_manage",
    },
  ],

  SELLERS_MANAGEMENT: [
    {
      ADD_NEW_SHOP: "shops/add",
    },
    {
      INACTIVE_SHOP_NEW_SHOP: "shops/inactive_new_shop",
    },
  ],

  PRODUCTS_MANAGEMENT: [
    {
      VIEW_ALL_PRODUCTS: "products/view_all",
      EVALUATE_PRODUCTS: "products/evaluate",
    },
  ],

  SUBSCRIPTION_AREA: [
    {
      SUBSCRIPTION_HISTORY: "subscriptionArea_history",
      SUBSCRIPTION_NOTIFICATION: "subscriptionArea_notifications",
      MANAGE_SUBCRIPTION: "subscriptionArea_manage",
    },
  ],

  STATS: [
    {
      PLATFORM_PERFORMANCES: "plateform_performance/view",
      USER_ANALYSIS: "plateform_user_analysis",
    },
  ],

  ADMINISTRATION_TOOLS: [
    { MANAGE_NOTIFICATIONS: "notifications_manage" },
    {
      REPORT_AND_EXPORT: [
        {
          REPORT_HISTORY: "report/history",
          DOWLOAD_REPORT: "report/download",
        },
      ],
    },
  ],

  PLATFORM_CONFIGURATION: [
    {
      GENERAL_SETTINGS: "app_settings/general",
      PAYMENTS_SETTINGS: "app_settings/payment",
    },
  ],
  VENDOR_FAQS: [
    {
      ALL_FAQS: "vendor_faqs/all",
      ADD_NEW_FAQ: "vendor_faqs/add",
    },
  ],
};

export const PATH_AUTH = {
  AUTH: "/auth",
  LOGIN: "/auth/sign-in",
  REGISTER: "/auth/register",
  VERIFY_OTP: "/auth/verify-otp",
  SUCCESS_VERIFY_OTP: "/auth/success-verify-otp",
};


import { Package2, ShoppingBasket, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";
export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

type StatsData = {
  ActiveVendors: number;
  totalOrders: number;
  TotalSales: number;
  AllCustomers: number;
};

type MockStats = {
  week: StatsData;
  month: StatsData;
  year: StatsData;
};

export const useDashboard = () => {
  const [stats, setStats] = useState<StatsData | null>({
    ActiveVendors: 0,
    totalOrders: 0,
    TotalSales: 0,
    AllCustomers: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dateRange, setDateRange] = useState<"week" | "month" | "year">("week");

  useEffect(() => {
    const fetchStats = () => {
      setIsLoading(true);
      setTimeout(() => {
        const mockStats: MockStats = {
          week: {
            ActiveVendors: 1234,
            totalOrders: 1245,
            TotalSales: 890,
            AllCustomers: 1570,
          },
          month: {
            ActiveVendors: 12340,
            totalOrders: 12450,
            TotalSales: 1350,
            AllCustomers: 2740,
          },
          year: {
            ActiveVendors: 123400,
            totalOrders: 90450,
            TotalSales: 13500,
            AllCustomers: 27400,
          },
        };

        setStats(mockStats[dateRange]);
        setIsLoading(false);
      }, 800);
    };

    fetchStats();
  }, [dateRange]);

  const dashboardItems = [
    {
      title: "Active vendors",
      titleIcon: UsersRound,
      contain: stats?.ActiveVendors ?? 0,
      trendingcontain: 25,
      trend: { value: 12, isPositive: true },
    },
    {
      title: "Total orders",
      titleIcon: ShoppingBasket,
      contain: stats?.totalOrders ?? 0,
      trendingcontain: 18,
      trend: { value: 8, isPositive: true },
    },
    {
      title: "Total Sales",
      titleIcon: Package2,
      contain: stats?.TotalSales ?? 0,
      trendingcontain: 34,
      trend: { value: 3, isPositive: false },
    },
    {
      title: "All Customers",
      titleIcon: UsersRound,
      contain: stats?.AllCustomers ?? 0,
      trendingcontain: 81,
      trend: { value: 14, isPositive: true },
    },
  ];

  return { stats, isLoading, dateRange, setDateRange, dashboardItems };
};

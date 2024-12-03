import { message, Popconfirm, PopconfirmProps } from "antd";
import { format } from "date-fns";

import { Download, Eye, Star } from "lucide-react";
import numeral from "numeral";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LoadingSpinner from "../../../components/LoadingSpinner";
import StatCard from "../../../components/StatsCard";
import {
  overviewData,
  recentSalesData,
  topProducts,
} from "../../../constants/overviewData";
import { useDashboard } from "../../../hooks/useDashboard";
import { useTheme } from "../../../hooks/useTheme";

const confirm: PopconfirmProps["onConfirm"] = () => {
  message.success("sucessfully hidded!");
};

const DashboardPage = () => {
  const {
    isLoading: statsLoading,
    dateRange,
    setDateRange,
    dashboardItems,
  } = useDashboard();

  const { theme } = useTheme();

  const handleDownloadReport = () => {
    // Simulate report download
    const element = document.createElement("a");
    element.href = URL.createObjectURL(
      new Blob(["Sales Data"], { type: "text/plain" })
    );
    element.download = `sales-report-${format(new Date(), "yyyy-MM-dd")}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex-col flex md:flex-row md:justify-between items-start md:items-center justify-start">
        <div className="mb-2 md:mb-0">
          <h1 className="text-2xl font-bold dark:text-slate-100">Dashboard</h1>
          <p className="text-gray-500 dark:text-slate-100">
            Welcome back, let's check your stats
          </p>
        </div>
        <div className="flex gap-4">
          <select
            value={dateRange}
            onChange={(e) =>
              setDateRange(e.target.value as "week" | "month" | "year")
            }
            className="bg-gray-200 dark:bg-slate-100 border border-gray-300 rounded-lg px-4 py-2 outline-none"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button
            onClick={handleDownloadReport}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Report
          </button>
        </div>
      </div>

      {statsLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {dashboardItems.map((item, index) => (
            <StatCard
              key={index}
              title={item.title}
              value={item.contain}
              trend={item.trend}
              icon={item.titleIcon}
            />
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="card col-span-1 md:col-span-2 lg:col-span-4">
          <div className="card-header">
            <p className="card-title">Overview</p>
          </div>
          <div className="card-body p-0">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={overviewData}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip cursor={false} formatter={(value) => `$${value}`} />

                <XAxis
                  dataKey="name"
                  strokeWidth={0}
                  stroke={theme === "light" ? "#475569" : "#94a3b8"}
                  tickMargin={6}
                />
                <YAxis
                  dataKey="total"
                  strokeWidth={0}
                  stroke={theme === "light" ? "#475569" : "#94a3b8"}
                  tickFormatter={(value) => `${numeral(value).format("0.00a")}`}
                  tickMargin={6}
                />

                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#2563eb"
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card col-span-1 md:col-span-2 lg:col-span-3">
          <div className="card-header">
            <p className="card-title">Recent Sales</p>
          </div>
          <div className="card-body h-[300px] overflow-auto p-0">
            {recentSalesData.map((sale) => (
              <div
                key={sale.id}
                className="flex items-center justify-between gap-x-4 py-2 pr-2 [scrollbar-width:_none]"
              >
                <div className="flex items-center gap-x-4">
                  <img
                    src={sale.image}
                    alt={sale.name}
                    className="size-10 flex-shrink-0 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-y-2">
                    <p className="font-medium text-slate-900 dark:text-slate-50">
                      {sale.name}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {sale.email}
                    </p>
                  </div>
                </div>
                <p className="font-medium text-slate-900 dark:text-slate-50">
                  ${sale.total}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <p className="card-title">Top Orders</p>
        </div>
        <div className="card-body p-0">
          <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_none]">
            <table className="table">
              <thead className="table-header">
                <tr className="table-row">
                  <th className="table-head">#</th>
                  <th className="table-head">Product</th>
                  <th className="table-head">Price</th>
                  <th className="table-head">Rating</th>
                  <th className="table-head">Actions</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {topProducts.map((product) => (
                  <tr key={product.number} className="table-row">
                    <td className="table-cell">{product.number}</td>
                    <td className="table-cell">
                      <div className="flex w-max gap-x-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="size-14 rounded-lg object-cover"
                        />
                        <div className="flex flex-col">
                          <p>{product.name}</p>
                          <p className="font-normal text-slate-600 dark:text-slate-400">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell">
                      {product.price < 1000
                        ? "$" + product.price
                        : `${"$" + numeral(product.price).format("0.00a")}`}
                    </td>
                    <td className="table-cell">
                      <div className="flex items-center gap-x-2">
                        <Star
                          size={18}
                          className="fill-yellow-400 stroke-yellow-400"
                        />
                        {product.rating}
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="flex items-center gap-x-5 justify-center">
                        <button className="text-blue-500 dark:text-blue-600">
                          <Eye size={18} />
                        </button>
                        <button className="dark:text-gray-200 mb-3">
                          <Popconfirm
                            title="hide element"
                            description="Are you sure to hide this element ?"
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No"
                            className=" text-gray-500 dark:bg-slate-900"
                          >
                            ...
                          </Popconfirm>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

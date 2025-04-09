"use client";

import React from "react";
import CardPopularProducts from "./CardPopularProducts";
import CardSalesSummary from "./CardSalesSummary";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardExpenseSummary from "./CardExpenseSummary";
import StatCard from "./StatCard";
import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      {/* ATM hardcoded data. TODO: Fetch from DB */}
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="9 - 16 February 2024"
        details={[
          {
            title: "Customer Growth",
            amount: "155.00",
            changePercentage: 115,
            IconComponent: TrendingUp,
          },
          {
            title: "Expenses",
            amount: "14.00",
            changePercentage: -62,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Dues & Pending Orders"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="9 - 16 February 2024"
        details={[
          {
            title: "Dues",
            amount: "225.00",
            changePercentage: 125,
            IconComponent: TrendingUp,
          },
          {
            title: "Pending Orders",
            amount: "306",
            changePercentage: 42,
            IconComponent: TrendingUp,
          },
        ]}
      />
      <StatCard
        title="Sales & Discount"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="9 - 16 February 2024"
        details={[
          {
            title: "Sales",
            amount: "1052",
            changePercentage: 22,
            IconComponent: TrendingUp,
          },
          {
            title: "Discount",
            amount: "230.00",
            changePercentage: -13,
            IconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;

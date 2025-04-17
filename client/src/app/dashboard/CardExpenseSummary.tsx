import {
  ExpenseByCategorySummary,
  useGetDashboardMetricsQuery,
} from "@/state/api";
import { TrendingUp } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import React, { useState } from "react";

type ExpenseSums = {
  [category: string]: number;
};

const colors = ["#00C49F", "#0088FE", "#FFBB28"];

const CardExpenseSummary = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  const expenseByCategorySummary =
    dashboardMetrics?.expenseByCategorySummary || [];
  const expenseSums = expenseByCategorySummary.reduce(
    (acc: ExpenseSums, item: ExpenseByCategorySummary) => {
      const key = item.category + "Expenses";
      const val = parseInt(item.amount, 10);
      acc[key] = (acc[key] || 0) + val;
      return acc;
    },
    {}
  );
  const expenseCategories = Object.entries(expenseSums).map(
    ([name, value]) => ({ name, value })
  );
  const totalExpenses = expenseCategories.reduce(
    (sum, { value }) => sum + value,
    0
  );
  const formattedTotalExpenses = totalExpenses.toFixed(2);

  const expenseSummary = dashboardMetrics?.expenseSummary[0];
  const avgExpense = expenseSummary
    ? expenseSummary.totalExpenses.toFixed(2)
    : "0.00";

  if (isLoading) {
    return <div className="m-5">Loading...</div>;
  }

  return (
    <div
      className="
          row-span-3
          bg-white shadow-md rounded-2xl
          flex flex-col h-full
        "
    >
      {/* HEADER */}
      <div className="flex-none">
        <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
          Expense Summary
        </h2>
        <hr />
      </div>

      {/* BODY */}
      <div className="flex-grow overflow-auto px-7 py-5">
        <div className="xl:flex xl:justify-between">
          {/* CHART */}
          <div className="relative flex-none h-[140px] w-full xl:basis-3/5">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseCategories}
                  innerRadius={50}
                  outerRadius={60}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                >
                  {expenseCategories.map((_, i) => (
                    <Cell key={i} fill={colors[i % colors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* CENTER LABEL */}
            <div
              className="
                absolute inset-0
                flex items-center justify-center
              "
            >
              <span className="font-bold text-xl">
                {formattedTotalExpenses}
              </span>
            </div>
          </div>

          {/* LEGEND */}
          <ul className="flex flex-col justify-around items-center xl:items-start py-5 gap-3">
            {expenseCategories.map((entry, i) => (
              <li key={i} className="flex items-center text-xs">
                <span
                  className="mr-2 w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors[i % colors.length] }}
                />
                {entry.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex-none">
        <hr />
        {expenseSummary && (
          <div className="mt-3 flex justify-between items-center px-7 mb-4">
            <p className="text-sm">
              Average: <span className="font-semibold">${avgExpense}</span>
            </p>
            <span className="flex items-center text-green-500">
              <TrendingUp className="mr-2" />
              30%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardExpenseSummary;

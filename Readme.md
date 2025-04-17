# Inventory Management Dashboard

A modern, responsive inventory management dashboard built with Next.js, React, Redux Toolkit, Tailwind CSS, Recharts, and AWS API Gateway integration. This application allows you to view and analyze sales, expenses, and purchase summaries through interactive charts and customizable themes (light/dark).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Theming (Light/Dark Mode)](#theming-lightdark-mode)
- [API Integration](#api-integration)
- [Deployment](#deployment)

## Features

- Responsive layout with Tailwind CSS  
- Light and Dark theme toggle  
- State management with Redux Toolkit and RTK Query  
- Interactive charts (Bar, Pie, Area) using Recharts  
- Server-side data fetching from AWS API Gateway endpoints  
- Persisted Redux state with `redux-persist`

## Tech Stack

- **Framework:** Next.js  
- **Language:** TypeScript & React  
- **Styling:** Tailwind CSS, CSS Variables for theming  
- **State Management:** Redux Toolkit, RTK Query, redux-persist  
- **Charts:** Recharts  
- **Icons:** Lucide React  
- **Backend Integration:** AWS API Gateway  

## Prerequisites

- Node.js (>=16)  
- npm or yarn  
- AWS account with API Gateway endpoints configured  

## Installation

1. **Clone the repository**:  
    git clone https://github.com/your-username/inventory-management-dashboard.git  
    cd inventory-management-dashboard  

2. **Install dependencies**:  
    cd client  
    npm install (or `yarn install`)  
    cd ../server  
    npm install (or `yarn install`)  

## Environment Variables

Create a `.env.local` file in the `client/` directory with the following variables:  
    NEXT_PUBLIC_API_BASE_URL=https://<your-api-id>.execute-api.<region>.amazonaws.com/<stage>  
    # Any other env variables your API requires  

## Theming (Light/Dark Mode)

- CSS custom properties are defined in `globals.css` under `:root` and `.dark`.  
- Tailwind maps color utilities to these variables (e.g., `bg-white` → `var(--color-white)`).  
- Theme toggle adds/removes `.dark` on `<html>` and persists choice via `useDarkMode`.  

## API Integration

- Data is fetched with RTK Query (`useGetDashboardMetricsQuery`) from AWS API Gateway.  
- Endpoints return JSON with `salesSummary`, `expenseSummary`, etc.  

## Deployment

After `npm run build`, deploy to AWS:  
- **S3 & CloudFront:** Upload the `out/` directory and serve via CDN.  
- **Amplify:** Connect repo for automatic builds and hosting.  
- **EC2/ECS:** Run Node.js server, fronted by ALB.  

Ensure environment variables (`NEXT_PUBLIC_API_BASE_URL`, etc.) are set in each service.  
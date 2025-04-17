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

1. **Clone the repository**  
   \`\`\`bash
   git clone https://github.com/your-username/inventory-management-dashboard.git
   cd inventory-management-dashboard
   \`\`\`

2. **Install dependencies**  
   \`\`\`bash
   cd client
   npm install
   # or
   yarn install

   cd ../server
   npm install
   # or
   yarn install
   \`\`\`

## Environment Variables

Create a \`.env.local\` file in the \`client/\` directory with the following variables:

\`\`\`env
NEXT_PUBLIC_API_BASE_URL=https://<your-api-id>.execute-api.<region>.amazonaws.com/<stage>
# Any other env variables your API requires
\`\`\`

## Available Scripts

In each directory (\`client/\` and \`server/\`), you can run:

- \`npm run dev\` / \`yarn dev\` – runs the app in development mode  
  - In \`client/\`, serves the Next.js frontend at \`http://localhost:3000\`  
  - In \`server/\`, starts the backend API (e.g. Express or AWS Lambda offline)  
- \`npm run build\` / \`yarn build\` – builds the application for production  
- \`npm run start\` / \`yarn start\` – starts the production server  

## Project Structure

\`\`\`plaintext
inventory-management-dashboard/
├── client/               # Next.js frontend
│   ├── public/           # Static assets (e.g., logo)
│   ├── src/
│   │   ├── app/          # Next.js App directory (layouts, providers)
│   │   ├── components/   # Reusable React components (Sidebar, Cards)
│   │   ├── state/        # Redux store, slices, RTK Query API
│   │   ├── hooks/        # Custom React hooks (useDarkMode)
│   │   ├── styles/       # globals.css (Tailwind + CSS variables)
│   │   └── pages/        # Legacy pages directory (if used)
│   ├── tailwind.config.ts # Tailwind CSS configuration
│   ├── postcss.config.js  # PostCSS configuration
│   └── next.config.mjs    # Next.js configuration
├── server/               # Backend application (API handlers / Lambdas)
│   ├── src/              # Server source code (Express routes or Lambda functions)
│   ├── package.json      # Server dependencies and scripts
│   └── ...
└── README.md             # Project overview and instructions
\`\`\`

## Theming (Light/Dark Mode)

- CSS custom properties are defined in \`globals.css\` under \`:root\` and \`.dark\`.  
- Tailwind config maps color utilities to these CSS variables (e.g., \`bg-white\` → \`var(--color-white)\`).  
- Theme toggle logic adds/removes the \`.dark\` class on \`<html>\`, and persists choice in \`localStorage\` via a custom hook (\`useDarkMode\`).  

## API Integration

- Data is fetched using RTK Query (\`useGetDashboardMetricsQuery\`) from your AWS API Gateway endpoints.  
- Endpoints should return a JSON object with properties like \`salesSummary\`, \`expenseSummary\`, etc.  

## Deployment

After running \`npm run build\`, you can deploy the production build to AWS using services like:

- **S3 & CloudFront:** Upload the static \`out/\` directory to an S3 bucket and serve it via CloudFront for global CDN delivery.  
- **Amplify:** Connect your repository to AWS Amplify for continuous deployment; Amplify will build, deploy, and host your app automatically.  
- **EC2 / ECS:** Run a Node.js server on EC2 or in a Docker container on ECS, then point a load balancer (ALB) to your instance or service.  

Be sure to configure your environment variables (\`NEXT_PUBLIC_API_BASE_URL\`, etc.) in each service’s settings so your app can access the API Gateway endpoints.  
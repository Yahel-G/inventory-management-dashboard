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

   ```bash
   git clone https://github.com/your-username/inventory-management-dashboard.git
   cd inventory-management-dashboard

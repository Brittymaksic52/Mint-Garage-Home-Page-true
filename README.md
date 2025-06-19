# Mint Garage Website

A modern, interactive website for Mint Garage - a premier garage renovation and storage company serving Ontario, Canada.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth scroll-based animations using Framer Motion
- **Modern UI Components**: Built with Radix UI and Tailwind CSS
- **Dealer Locator**: Interactive map with geolocation services
- **Product Showcase**: Dynamic product categories and featured items
- **Customer Testimonials**: Real customer reviews and ratings
- **Before/After Gallery**: Showcase of transformation projects
- **Newsletter Integration**: Email subscription system

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack Query
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mint-garage-website.git
cd mint-garage-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Add your database URL and other required environment variables.

4. Set up the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components and sections
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions and configurations
├── server/                # Backend Express application
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   └── db.ts             # Database configuration
├── shared/                # Shared types and schemas
│   └── schema.ts         # Database schema definitions
└── ...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio

## Deployment

This project is optimized for deployment on platforms like:
- Replit
- Vercel
- Railway
- Heroku

For Shopify integration, see the [Shopify Integration Guide](./docs/shopify-integration.md).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is proprietary and belongs to Mint Garage Inc.

## Contact

For questions or support, contact:
- Website: [https://mintgarage.ca](https://mintgarage.ca)
- Email: info@mintgarage.ca
- Phone: (416) 123-4567
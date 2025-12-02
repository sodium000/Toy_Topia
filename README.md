# ToyTopia

ToyTopia is a modern e-commerce platform for buying and selling toys. The application provides a seamless shopping experience with user authentication, product browsing, detailed toy information, and profile management.

## Project Description

ToyTopia is a full-stack web application built with React that enables users to browse and purchase toys online. The platform includes features such as user registration and login, product details view, user profiles, and an attractive user interface with modern design patterns. The application is built with Firebase for backend services and uses React Router for navigation.

## Key Features

- 🔐 User Authentication (Login, Registration, Password Recovery)
- 🛍️ Product Catalog with detailed toy information
- 👤 User Profile Management
- 🎨 Modern and Responsive UI
- 🔥 Firebase Backend Integration
- ⚡ Fast and Efficient with Vite

## Technologies & Packages

### Core Framework
- **React** (^19.1.1) - Modern JavaScript library for building user interfaces
- **React DOM** (^19.1.1) - React renderer for the web

### Routing
- **React Router** (^7.9.4) - Declarative routing for React applications

### Backend & Database
- **Firebase** (^12.4.0) - Backend services including authentication, database, and hosting

### Styling
- **Tailwind CSS** (^4.1.15) - Utility-first CSS framework
- **@tailwindcss/vite** (^4.1.15) - Tailwind CSS integration for Vite
- **DaisyUI** (^5.3.7) - Component library for Tailwind CSS
- **React Head** (^3.4.2) - Manage document head in React

### UI Components & Icons
- **React Icons** (^5.5.0) - Popular icons library
- **Swiper** (^12.0.3) - Modern touch slider

### Utilities
- **SweetAlert2** (^11.26.3) - Beautiful, responsive, customizable alerts

### Development Tools
- **Vite** (^7.1.7) - Next generation frontend build tool
- **ESLint** (^9.36.0) - Code linting tool
- **@vitejs/plugin-react** (^5.0.4) - Official React plugin for Vite

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Navigate to the project directory
```bash
cd ToyTopia
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

6. Preview production build
```bash
npm run preview
```

## Project Structure

```
ToyTopia/
├── src/
│   ├── AboutUs/          # About us page component
│   ├── AuthContext/      # Authentication context
│   ├── AuthProvider/     # Authentication provider
│   ├── Banner/           # Banner components
│   ├── Card/             # Card components
│   ├── CustomeHook/      # Custom React hooks
│   ├── Error/            # Error pages
│   ├── firebase/         # Firebase configuration
│   ├── Footer/           # Footer component
│   ├── ForgotPassword/   # Password recovery
│   ├── Home/             # Home page
│   ├── Layout/           # Layout components
│   ├── Loader/           # Loading components
│   ├── Login/            # Login page
│   ├── MyProfile/        # User profile
│   ├── NavBar/           # Navigation bar
│   ├── Pages/            # Page components
│   ├── Registration/     # Registration page
│   └── ToyDetailes/      # Toy details page
├── public/               # Static assets
├── Routes/               # Route configuration
└── dist/                 # Production build output
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## License

This project is private and proprietary.

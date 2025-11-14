# TaskApp - User Dashboard Application

A modern, responsive React application with authentication and user management features. Built with React, Vite, Tailwind CSS, and React Router.

## 🚀 Features

- **Authentication System**

  - Secure login with email and password validation
  - Session persistence using localStorage
  - Protected routes for authenticated users
  - Profile dropdown with user information

- **Dashboard**

  - User list with pagination
  - Real-time statistics (Total Users, Current Page, Users per Page)
  - Beautiful user cards with avatars
  - Responsive grid layout

- **Modern UI/UX**

  - Dark theme with gradient background
  - Smooth animations and transitions
  - Responsive design (mobile, tablet, desktop)
  - Loading states and error handling
  - Icons throughout the interface

- **Navigation**
  - Responsive navbar with profile dropdown
  - Mobile-friendly hamburger menu
  - Smooth page transitions

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.2
- **Routing:** React Router DOM 6.26.0
- **Styling:** Tailwind CSS 3.4.13
- **State Management:** React Context API
- **API:** Fetch API
- **Authentication:** Local Storage

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd orthoplex-task
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔐 Login Credentials

The application uses the [ReqRes API](https://reqres.in/) for authentication. You can use any valid email format and any password (minimum 3 characters).

### Example Login Credentials:

- **Email:** `eve.holt@reqres.in`
- **Password:** `anypassword` (minimum 3 characters)

**Note:** The API accepts any valid email format and any password with at least 3 characters. The authentication is handled by the ReqRes test API.

## 🎨 Design

- **Primary Color:** #FF4D00 (Orange)
- **Background:** Dark gradient (linear-gradient(175deg, #303030 0%, #000000 85%))
- **Theme:** Dark mode with glassmorphism effects
- **Icons:** Heroicons (SVG icons)

## 📁 Project Structure

```
orthoplex-task/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── logo.webp
│   ├── components/
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   └── LoginPage.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔌 API Integration

The application uses the ReqRes API for:

- **Authentication:** `POST https://reqres.in/api/login`
- **User Data:** `GET https://reqres.in/api/users?page={page}&per_page=6`

**API Key Required:** `reqres-free-v1` (included in request headers)

## 🎯 Key Features Explained

### Authentication Flow

1. User enters email and password on the login page
2. Form validation checks for valid email format and password length
3. API call to ReqRes login endpoint
4. Token and user data stored in localStorage
5. User redirected to dashboard
6. Protected routes check authentication status

### Dashboard Features

- **Stats Cards:** Display total users, current page, and users per page
- **User Cards:** Show user avatars, names, emails, and IDs
- **Pagination:** Navigate through multiple pages of users
- **Loading States:** Show loading indicators while fetching data
- **Error Handling:** Display error messages if API calls fail

### Protected Routes

- Dashboard is protected and requires authentication
- Unauthenticated users are redirected to login page
- Authentication state persists across page refreshes

## 🎨 Customization

### Colors

The primary color can be changed in `tailwind.config.js`:

```javascript
primary: {
  500: '#FF4D00', // Change this to your preferred color
}
```

### Background Gradient

The background gradient can be modified in `src/index.css`:

```css
body {
  background: linear-gradient(175deg, #303030 0%, #000000 85%);
}
```

## 🚀 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and works on:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔒 Security Notes

- Authentication tokens are stored in localStorage (not recommended for production)
- For production, consider using secure HTTP-only cookies
- API keys are included in request headers (consider using environment variables)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is private and proprietary.

## 👤 Author

Orthoplex Task Application

## 🙏 Acknowledgments

- [ReqRes API](https://reqres.in/) for providing the test API
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) for routing
- [Vite](https://vitejs.dev/) for build tooling

---

**Note:** This is a demo application using a test API. For production use, replace the API endpoints with your own backend service.

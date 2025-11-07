# React Task Manager with Theme Switching

## 🌟 New Features and Implementations

### 1. Component Architecture
- **Button Component**: Implemented a versatile button component with:
  - Multiple variants (primary, secondary, danger)
  - Size options (sm, md, lg)
  - Loading state support
  - Full prop validation

- **Card Component**: Created a flexible card layout component featuring:
  - Optional header with title
  - Customizable body content
  - Optional footer section
  - Dark mode support

- **Layout System**:
  - Implemented responsive navbar with theme toggle
  - Footer with dynamic copyright year
  - Main content area with proper spacing

### 2. Task Management Features
- **Task Operations**:
  - Create new tasks
  - Mark tasks as complete/incomplete
  - Delete existing tasks
  - Filter tasks by status

- **Data Persistence**:
  - Tasks are saved in localStorage
  - Persists across page reloads
  - Maintains task status

### 3. Theme Management
- **Dark/Light Mode**:
  - System preference detection
  - Manual toggle option
  - Persistent theme selection
  - Smooth transition effects

### 4. API Integration
- **Post List Feature**:
  - Infinite scrolling implementation
  - Loading state indicators
  - Error handling
  - Search functionality

### 5. Routing Implementation
- **React Router Integration**:
  - `/` - Task management page
  - `/posts` - Posts display page
  - 404 handling with redirect

### 6. Custom Hooks
- **useLocalStorageTasks**: Manages task persistence
- **useApi**: Handles API data fetching
- **useTheme**: Manages theme state
- **useSearch**: Implements search functionality

## 🚀 Live Demo
[View Live Demo](YOUR_VERCEL_LINK_HERE)

## 🛠️ Technical Improvements

### State Management
- Implemented Context API for global state
- Custom hooks for reusable logic
- Efficient state updates

### Performance Optimizations
- Lazy loading of components
- Memoization where necessary
- Optimized re-renders

### Styling Enhancements
- Tailwind CSS integration
- Responsive design patterns
- Custom animations
- Dark mode support

## 📱 Responsive Design
The application is fully responsive with specific optimizations for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Local Development

1. Clone the repository:
```bash
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Stanleysydney.git
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## 📊 Project Structure
```
src/
├── components/         # UI Components
│   ├── Button.jsx     # Reusable button
│   ├── Card.jsx       # Card layout
│   ├── TaskManager.jsx # Task handling
│   ├── PostList.jsx   # API integration
│   ├── Navbar.jsx     # Navigation
│   ├── Footer.jsx     # Footer
│   └── Layout.jsx     # Main layout
├── context/           # Global State
│   └── ThemeContext.jsx
├── hooks/             # Custom Hooks
│   └── useApi.js
└── pages/             # Route Pages
    ├── TasksPage.jsx
    └── PostsPage.jsx
```

## ✨ Features in Detail

### Task Management
- Create, update, and delete tasks
- Filter tasks by status
- Local storage persistence
- Real-time updates

### Theme Switching
- System preference detection
- Manual override option
- Persistent selection
- Smooth transitions

### API Integration
- Infinite scroll implementation
- Loading states
- Error handling
- Search functionality

### Responsive Design
- Mobile-first approach
- Tailwind CSS utilities
- Flexible layouts
- Touch-friendly interfaces

## 🎯 Key Implementations

### 1. Task Manager Component
- Fully functional CRUD operations
- Real-time filtering
- Persistent storage
- Keyboard accessibility

### 2. Theme System
- Seamless mode switching
- System preference sync
- Consistent styling
- No layout shifts

### 3. API Data Handling
- Efficient data fetching
- Smooth infinite scroll
- Error recovery
- Search optimization

### 4. Routing Structure
- Clean URL patterns
- Protected routes
- Smooth transitions
- Error boundaries

## 🛡️ Best Practices

### Code Organization
- Component modularity
- Custom hook abstraction
- Context separation
- Prop validation

### Performance
- Lazy loading
- Debounced searches
- Memoized components
- Optimized re-renders

### Accessibility
- ARIA attributes
- Keyboard navigation
- Color contrast
- Screen reader support

### Security
- Input sanitization
- Protected routes
- Secure data handling
- Error boundaries

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License
This project is licensed under the MIT License.

---

Built with 💻 for PLP MERN Stack Development Course
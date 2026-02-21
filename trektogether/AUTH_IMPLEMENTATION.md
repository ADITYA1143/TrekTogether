# Authentication Implementation Guide

## Overview
This document describes the complete, production-ready authentication flow implemented for TrekTogether.

## Architecture

### Component Structure
```
src/app/
├── contexts/
│   ├── AuthContext.tsx       # Main auth state management
│   └── ToastContext.tsx      # Toast notification system
├── hooks/
│   ├── useAuth.ts            # Hook to access auth context
│   └── useToast.ts           # Hook to access toast context
├── components/
│   ├── ProtectedRoute.tsx    # Route protection wrapper
│   └── Navbar.tsx            # Updated with auth-aware UI
├── pages/
│   ├── LoginPage.tsx         # Login page
│   ├── RegisterPage.tsx      # Registration page
│   └── ProfilePage.tsx       # User profile page
├── types/
│   └── auth.ts               # TypeScript types for auth
└── api/
    ├── auth.ts               # Auth API functions
    └── axios.ts              # Axios instance with interceptors
```

## Key Features

### 1. AuthContext
**Location:** `src/app/contexts/AuthContext.tsx`

Provides centralized authentication state management:
- Stores `user` and `token` in state
- On app load, reads token from localStorage
- Calls `GET /api/users/me` to fetch user data
- Exposes: `user`, `isAuthenticated`, `isLoading`, `login()`, `register()`, `logout()`

**Usage:**
```typescript
const { user, isAuthenticated, login, logout } = useAuth();
```

### 2. Toast Notification System
**Location:** `src/app/contexts/ToastContext.tsx`

Custom toast component replacing `alert()`:
- Success and error states (green/red)
- Auto-dismisses after 4 seconds
- Slide-in animation from right
- Manual dismiss button
- Stacks multiple toasts

**Usage:**
```typescript
const { showToast } = useToast();
showToast('Login successful!', 'success');
showToast('Invalid credentials', 'error');
```

### 3. Protected Routes
**Location:** `src/app/components/ProtectedRoute.tsx`

Wraps routes that require authentication:
- Shows loading spinner while checking auth
- Redirects to `/login` if not authenticated
- Renders children if authenticated

**Usage in App.tsx:**
```typescript
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <ProfilePage />
    </ProtectedRoute>
  }
/>
```

### 4. Axios Interceptors
**Location:** `src/api/axios.ts`

Automatically handles authentication:
- **Request Interceptor:** Adds `Authorization: Bearer <token>` to all requests
- **Response Interceptor:** Handles 401 errors globally (redirects to login)

### 5. Auth-Aware Navbar
**Location:** `src/app/components/Navbar.tsx`

Dynamic UI based on auth state:
- **Not logged in:** Shows "Login" button
- **Logged in:** Shows user avatar with dropdown
  - Profile option (navigates to `/profile`)
  - Logout option (clears auth and redirects)
  - Bell icon for notifications

## Routing Configuration

### Public Routes
- `/` - Landing page (accessible to all)
- `/explore` - Explore treks (accessible to all)
- `/safety` - Safety information (accessible to all)
- `/login` - Login page (redirects to `/` if already logged in)
- `/register` - Register page (redirects to `/` if already logged in)

### Protected Routes
- `/profile` - User profile
- `/create` - Create trek
- `/my-treks` - User's treks
- `/trek/:id` - Trek details
- `/trek/:id/participants` - Trek participants
- `/trek/:id/chat` - Trek chat
- `/trek/:id/expenses` - Trek expenses

## Authentication Flow

### Login Flow
1. User enters email and password on `/login`
2. `LoginPage` calls `login()` from `useAuth()`
3. `AuthContext.login()` calls `POST /api/auth/login`
4. On success:
   - Stores token in localStorage
   - Updates user state
   - Shows success toast
   - Redirects to `/`
5. On error:
   - Shows error toast with message
   - User stays on login page

### Registration Flow
1. User enters name, email, password on `/register`
2. `RegisterPage` calls `register()` from `useAuth()`
3. `AuthContext.register()` calls `POST /api/auth/register`
4. On success (if backend returns token):
   - Stores token in localStorage
   - Updates user state
   - Shows success toast
   - Redirects to `/`
5. On success (if backend doesn't return token):
   - Shows success toast
   - Redirects to `/login`
6. On error:
   - Shows error toast with message
   - User stays on register page

### Logout Flow
1. User clicks "Logout" in navbar dropdown
2. Calls `logout()` from `useAuth()`
3. `AuthContext.logout()`:
   - Removes token from localStorage
   - Clears user state
   - Shows success toast
   - Redirects to `/login`

### App Initialization Flow
1. App loads, `AuthContext` checks localStorage for token
2. If token exists:
   - Calls `GET /api/users/me` with token
   - On success: Sets user state
   - On error: Clears token (expired/invalid)
3. Sets `isLoading` to false
4. App renders with auth state

## TypeScript Types

**Location:** `src/app/types/auth.ts`

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface AuthResponse {
  token: string;
  user: User;
}
```

## API Integration

### Backend Endpoints Expected
- `POST /api/auth/login` - Login with email/password
- `POST /api/auth/register` - Register new user
- `GET /api/users/me` - Get current user (requires Bearer token)

### Request/Response Format

**Login Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Login Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "user@example.com"
  }
}
```

**Register Request:**
```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password123"
}
```

**Get Me Response:**
```json
{
  "id": "user_id",
  "name": "John Doe",
  "email": "user@example.com"
}
```

## Security Features

1. **JWT Token Storage:** Stored in localStorage (consider httpOnly cookies for production)
2. **Automatic Token Injection:** Axios interceptor adds token to all requests
3. **Token Validation:** On app load, validates token by calling `/users/me`
4. **401 Handling:** Automatically logs out user on 401 responses
5. **Protected Routes:** Prevents unauthorized access to protected pages
6. **Password Validation:** Minimum 6 characters enforced on frontend

## Styling

All components use Tailwind CSS with the existing design system:
- Emerald color scheme (`emerald-600`, `emerald-700`)
- Stone neutrals (`stone-50`, `stone-100`, etc.)
- Consistent rounded corners (`rounded-xl`, `rounded-2xl`)
- Shadow system (`shadow-sm`, `shadow-lg`)
- Smooth transitions and hover states

## Testing the Implementation

1. **Start the backend server:**
   ```bash
   cd trektogether-server
   npm start
   ```

2. **Start the frontend:**
   ```bash
   cd trektogether
   npm run dev
   ```

3. **Test Registration:**
   - Navigate to `/register`
   - Create a new account
   - Should see success toast and redirect to home
   - Navbar should show user avatar

4. **Test Logout:**
   - Click user avatar in navbar
   - Click "Logout"
   - Should see success toast and redirect to login
   - Navbar should show "Login" button

5. **Test Login:**
   - Navigate to `/login`
   - Enter credentials
   - Should see success toast and redirect to home
   - Navbar should show user avatar

6. **Test Protected Routes:**
   - Logout if logged in
   - Try to access `/profile` directly
   - Should redirect to `/login`
   - Login and try again
   - Should access profile successfully

7. **Test Token Persistence:**
   - Login
   - Refresh the page
   - Should remain logged in
   - Navbar should still show user avatar

## Future Enhancements

1. **Remember Me:** Implement persistent sessions
2. **Password Reset:** Add forgot password flow
3. **Email Verification:** Verify email on registration
4. **Social Login:** Add OAuth providers (Google, Facebook)
5. **Refresh Tokens:** Implement token refresh mechanism
6. **Session Management:** Show active sessions
7. **Two-Factor Auth:** Add 2FA support
8. **httpOnly Cookies:** Move token storage to secure cookies

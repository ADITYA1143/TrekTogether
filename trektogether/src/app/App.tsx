import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import { useToast } from './hooks/useToast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import TrekDetailsPage from './pages/TrekDetailsPage';
import CreateTrekPage from './pages/CreateTrekPage';
import ParticipantsPage from './pages/ParticipantsPage';
import GroupChatPage from './pages/GroupChatPage';
import ExpenseSplitterPage from './pages/ExpenseSplitterPage';
import SafetyPage from './pages/SafetyPage';
import MyTreksPage from './pages/MyTreksPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

function AppContent() {
  const { showToast } = useToast();

  return (
    <AuthProvider showToast={showToast}>
      <div className="min-h-screen flex flex-col bg-stone-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Protected Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreateTrekPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-treks"
              element={
                <ProtectedRoute>
                  <MyTreksPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/trek/:id"
              element={
                <ProtectedRoute>
                  <TrekDetailsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/trek/:id/participants"
              element={
                <ProtectedRoute>
                  <ParticipantsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/trek/:id/chat"
              element={
                <ProtectedRoute>
                  <GroupChatPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/trek/:id/expenses"
              element={
                <ProtectedRoute>
                  <ExpenseSplitterPage />
                </ProtectedRoute>
              }
            />
            <Route path="/safety" element={<SafetyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </BrowserRouter>
  );
}

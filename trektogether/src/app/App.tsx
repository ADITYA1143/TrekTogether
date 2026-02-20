import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import TrekDetailsPage from './pages/TrekDetailsPage';
import CreateTrekPage from './pages/CreateTrekPage';
import ParticipantsPage from './pages/ParticipantsPage';
import GroupChatPage from './pages/GroupChatPage';
import ExpenseSplitterPage from './pages/ExpenseSplitterPage';
import SafetyPage from './pages/SafetyPage';
import MyTreksPage from './pages/MyTreksPage';
import AuthPage from './pages/AuthPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-stone-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/trek/:id" element={<TrekDetailsPage />} />
            <Route path="/create" element={<CreateTrekPage />} />
            <Route path="/trek/:id/participants" element={<ParticipantsPage />} />
            <Route path="/trek/:id/chat" element={<GroupChatPage />} />
            <Route path="/trek/:id/expenses" element={<ExpenseSplitterPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/my-treks" element={<MyTreksPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

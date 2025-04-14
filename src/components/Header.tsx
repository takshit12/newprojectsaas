import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '~supabase/auth.tsx';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Function to determine if a link is active based on current path
  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-600 font-medium" : "hover:text-blue-600";
  };

  return (
    <header className="flex justify-between items-center py-4 px-6">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
            DH
          </div>
          <h1 className="text-3xl font-bold">Dharatal AI</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link to="/features" className={`text-lg ${isActive('/features')}`}>Features</Link>
          </li>
          <li>
            <Link to="/pricing" className={`text-lg ${isActive('/pricing')}`}>Pricing</Link>
          </li>
          <li>
            <Link to="/faq" className={`text-lg ${isActive('/faq')}`}>FAQ</Link>
          </li>
          <li>
            <Link to="/call-to-action" className={`text-lg font-medium ${isActive('/call-to-action')}`}>Call To Action</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        {loading ? (
          <span className="text-gray-500">Loading...</span>
        ) : user ? (
          <>
            <span className="text-sm text-gray-600 hidden md:inline">{user.email}</span>
            <Button variant="outline" size="sm" onClick={() => navigate('/dashboard')}>Dashboard</Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>Sign Out</Button>
          </>
        ) : (
          <>
            <Button variant="outline" size="sm" onClick={() => navigate('/login')}>Sign In</Button>
            <Button variant="default" size="sm" onClick={() => navigate('/signup')}>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

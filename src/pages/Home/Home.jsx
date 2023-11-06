import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toggleDarkMode } from '../../components/DarkMode';
import { users, posts } from '../../data/users';

const Home = ({ loggedInUser, setLoggedInUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null);
    navigate('/login');
  };

  const filteredPosts = posts.filter(post =>
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <button class="dark-mode-toggle" onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <div className="home-container">
        <h2>Bem vindo, {loggedInUser}!</h2>
        <button onClick={handleLogout}>Logout</button>
        <div className="search-bar">
          <label>Achar nas postagens:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="post-list">
          {filteredPosts.map(post => (
            <div key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Home, NoMatch, Post, Posts } from './routes/index';
import User from './components/User';
import UserQuery from './components/UserQuery';
import CustomLink from './CustomLink';

const App = () => {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">About</CustomLink>
        </li>
        <li>
          <CustomLink to="/contact">Contact</CustomLink>
        </li>
        <li>
          <CustomLink to="/posts">Posts</CustomLink>
        </li>
        <li>
          <CustomLink to="/user">User</CustomLink>
        </li>
        <li>
          <CustomLink to="/user/query">User Query</CustomLink>
        </li>
      </ul>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="post" element={<Post />} />
        </Route>
        <Route path="/user" element={<User />} />
        <Route path="/user/query" element={<UserQuery />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;

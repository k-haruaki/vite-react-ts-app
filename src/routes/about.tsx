import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>About</h2>
      <button onClick={() => navigate('/contact')}>Contact</button>
    </>
  );
};

export { About };

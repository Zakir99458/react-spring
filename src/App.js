import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  
  return (
    <div className="App">
      <animated.div style={useSpring({
          from: { opacity: 0 },
          to: { opacity: 1 },
        })}> Hello animated text!! 
  </animated.div>
    </div>
  );
}

export default App;

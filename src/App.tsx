import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PokemonSceen from './screens/PokemonSceen';

function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/pokemon/:id" element={<PokemonSceen />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import MealDetail from './components/MealDetail/MealDetail';
import NotFound from './components/NotFound/NotFound';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Restaurant></Restaurant>}></Route>
        <Route path='/meal' element={<MealDetail></MealDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

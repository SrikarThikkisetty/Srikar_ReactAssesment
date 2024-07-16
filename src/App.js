import React from 'react'
import BasketballPlayerCard from './Components/BasketballPlayerCard';
const App = () => {
  const lebronJames ={
    name:'LeBron James',
    image:'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/c5r52rbifxn2srhp9no0',
    position:'Small Forward',
    pointsPerGame: 27.1,
    assistsPerGame: 7.4,
    reboundsPerGame: 7.4,
  }
  return (
    <div className='App'>
      <h1>Basketball Player Card</h1>
      <BasketballPlayerCard{...lebronJames}/>
    </div>
  );
};

export default App

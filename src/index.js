import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';
import { useState } from 'react';

function Test() {
  const [MovieRating, setMovieRating] = useState(0);

  return (
    <div>
        <StarRating maxRating={10} color='violet' message={["labosi", "siki" , "phantom" , "mm3ot" , "trneb"]} onSetRating={setMovieRating}/>
       {MovieRating === 0 ?(<p>This movie is not rated</p>) : <p>This movie is rated {MovieRating} stars</p>}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

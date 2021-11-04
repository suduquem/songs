import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import './App.css';

const App = () => {
  return (
    /*Se le agregan estas clases de semantic UI para que la lista
    no ocupe toda la pantalla*/
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
        <div className='column eight wide'>
          <SongDetail />
        </div>
      </div>
    </div>
  );
};
export default App;

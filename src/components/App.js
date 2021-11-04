import React from 'react';
import SongList from './SongList';

const App = () => {
  return (
    /*Se le agregan estas clases de semantic UI para que la lista
    no ocupe toda la pantalla*/
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
      </div>
    </div>
  );
};
export default App;

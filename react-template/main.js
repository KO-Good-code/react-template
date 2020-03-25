import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import store from '@/store';
import Dom from '@/components/dom';


function App() { 

  return (
    <div >
      <div>
        <Dom />
      </div>
    </div>
  )
 }

ReactDom.render(<App />, document.getElementById('root'));
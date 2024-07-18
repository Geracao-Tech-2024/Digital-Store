import React from 'react';
import Gallery from './../../components/Gallery/Gallery';

// IMPORTANTE!: nome da classe em maiusculo
function HomePage(){
  let imgs = [
      {src: 'sapato-banner.svg'},
      {src: 'sapato-banner.svg'},
      {src: 'sapato-banner.svg'},
      {src: 'sapato-banner.svg'}
    ]
  return (
    <div>
        <Gallery images={imgs}/>
    </div>
  );
};

export default HomePage;
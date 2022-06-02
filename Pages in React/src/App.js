import './App.css';
import React, { useState } from 'react';

function App() {
  window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 600px)").matches) {
      console.log("Screen width is at least 600px")
      document.getElementById("toolbar").style.top=19.04296875+"vh";
      document.getElementById("toolbar").style.width=4.514+'vw';
      document.getElementById("toolbar").style.height=63.57421875+"vh";
    } else {
      console.log("Screen less than 600px")
      document.getElementById("toolbar").style.top=95+"vh";
      document.getElementById("toolbar").style.width=100+'vw';
      document.getElementById("toolbar").style.height=6.25+"vh";
    }
  });
  const [showgraph, setShowgraph] = useState(false);
  const [showtable, setShowtable] = useState(false);
  return (
    <div class="App">
      <div class="heading">
        <img src="https://dicot.tech/Assets/images/Logo.svg" class="logo" alt='logo'/>
        <button type="button" onClick={function(){
          setShowgraph(!showgraph)
           if(showtable)
          {
            setShowtable(!showtable)
          }}}
           id="graph">Graph</button>
        <button type="button" onClick={function(){
          setShowtable(!showtable)
           if(showgraph)
          {
            setShowgraph(!showgraph)
          }}} id="table">Table</button>
      </div>
      <div id="toolbar"></div>
      {
      showgraph && <div id="graphimage">
        <p id="header">Header</p>
        <p id="ylabel">Y-Label</p>
        <p id="xlabel">X-Label</p>
        <p id="footer">Footer</p>
        <img src="https://images.edrawmax.com/images/knowledge/line-graph-5-example-2.jpg" class="graphi" alt="graphi"/>
      </div>
}
{
  showtable && <div id="tableimage">
  <img src="https://i.stack.imgur.com/VOTOe.png" class="graphi" alt="graphi"/>
</div>
}
{/* <p id="undertext">Clean Simple Powerful</p> */}
    </div>  
  );
}
export default App;

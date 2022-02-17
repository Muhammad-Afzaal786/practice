import React from 'react';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';


function Portfolio() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 4 },
  ];
 
  return <div className='container mt-5' style={{display:"flex"}}>
  <Carousel breakPoints={breakPoints}>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" class="card-link">Card link</Link>
    <Link to="#" class="card-link">Another link</Link>
  </div>
</div>
<div class="card">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <Link to="#" class="card-link">Card link</Link>
  <Link to="#" class="card-link">Another link</Link>
</div>
</div>
<div class="card">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <Link to="#" class="card-link">Card link</Link>
  <Link to="#" class="card-link">Another link</Link>
</div>
</div>
<div class="card">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <Link to="#" class="card-link">Card link</Link>
  <Link to="#" class="card-link">Another link</Link>
</div>
</div>
  </Carousel>
  </div>;
}

export default Portfolio;

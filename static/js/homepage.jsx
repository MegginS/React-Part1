'use strict';

function Homepage() {
  return (<React.Fragment>
      <h1>Welcome!</h1>
      <a href="/cards">Go to cards page</a><br></br>
      <img src= "/static/img/balloonicorn.jpg"/> 
      </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));



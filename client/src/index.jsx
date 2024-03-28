import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux'; 
// import { createStore } from 'redux'; 
// import rootReducer from './reducers';
import List from './components/List.jsx'
import LandingPage from './components/LandingPage.jsx'
import DoctorProfilPage from './components/DoctorProfilPage.jsx'
// import NavBar from './components/NavBar.jsx'
// import Review from './components/Review.jsx'

const App = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data)
        setItems(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])

  return (
    <div>
      <DoctorProfilPage />
    </div>
    // <Router>
    //   <div>
    //     <NavBare />
    //     <Switch>
    //       <Route exact path="/LandingPage" component={LandingPage} />
    //       <Route path="/list" render={() => <List items={items} />} />
    //       <Route path="/doctorprofil" component={DoctorProfilPage} />
    //     </Switch>
    //   </div>
    // </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'))

import React from 'react'
// {1} import react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './Home'
import About from './About'
import People from './People'
import Error from './Error'
import Person from './Person'
// navbar
import Navbar from './Navbar'
//{1} we need to wrap all the app inside <Router>
// {1} then we wrap the component inside <Route exact path='/'>, we need to use exact only on the component that have the url with pieces of the other url in this case the /, if we have nested page we need to use es. /people/ceo otherwise we will see al the component with /people inside the path
//{2} we place everything insdie a switch component this way only the first element that match will be displayed then we place the error page inside a route * this way it will displayed every time we type a path the doesen't exist
//{3} to create links we place the navbar component outside of the switch so it will appear in every component then inside the navbar component

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        {/* {4} we decide the path,we can call whatever we want the only important part are the : and we pass the component we want to access inside children */}
        <Route path='/person/:id' children={<Person />}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup

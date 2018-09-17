import React from 'react'
import {HashRouter,NavLink,Route,BrowserRouter,Redirect} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Friends from './Friends'
import NotFound from './NotFound'


class SpaWebsite extends React.Component {
    state = {}
    render() {
        return (
           /*  <HashRouter> * - it will display the # symbol in the URL .Whereas BrowserSupport remove the # symbol from the URL*/
            <BrowserRouter>
             <div>
                 <h1>SPA in React</h1>
                 <ul>
                     <li><NavLink to="/">Home</NavLink></li>
                     <li><NavLink to="/about">About</NavLink></li>
                     <li><NavLink exact strict to="/friends" >Friends</NavLink></li>

                 </ul>
                 <div>
                     <Route exact path="/" component={Home}/>
                     <Route  exact path="/about" component={About}/>
                     <Route exact strict path="/friends" component={Friends}/>
                     <Redirect to="/"/>
                    

                 </div>

             </div>
             </BrowserRouter>

          /*   </HashRouter> */


        );
    }
}

export default SpaWebsite;
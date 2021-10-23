import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Posts } from "./pages/Posts";

import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import{Contactus} from"./pages/Contactus"



export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
        <Route path="/users/:id">
            <UserDetails />
          </Route>
        <Route exact path="/Posts" component={Posts}/>
          <Route exact path="/users" component={Users}/>
          <Route exact path="/users/users=id" component={UserDetails}/>
          <Route exact path="/contact" component={Contactus}/>

          
          
          
         
        </Switch>
      </div>
    </>
  );
};

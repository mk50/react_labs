import { Route, Switch ,Redirect} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import{Contactus} from"./pages/Contactus";

import Login from "./pages/Login";
import  MainPage from "./pages/MainPage";
import ProtectedRoute from "./components/ProtectedRoute"
import { users } from "./pages/Users/users";




export const App = () => {
  return (
    <>
      
      <div className="container-fluid">
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute Route path="/Posts">
            <Posts />
          </ProtectedRoute>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <ProtectedRoute path="/users">
            <Users />
          </ProtectedRoute>
          <ProtectedRoute path="/contact">
            <Contactus />
          </ProtectedRoute>
          <Route path="/login">
          <Login />
        </Route>

        <ProtectedRoute path="/main-page">
          <MainPage />
        </ProtectedRoute>
        
        <Route path="/">
          <Redirect to="/login" />
        </Route>
        </Switch>
      </div>
    </>
  );
};

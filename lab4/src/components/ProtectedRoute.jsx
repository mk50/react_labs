import { Route, Redirect } from "react-router-dom";

 const ProtectedRoute = ({ path, children }) => {
  const isLoggedIn = localStorage.getItem("token") === "12345";

  return isLoggedIn ? (
      
    <Route path={path}>{children}</Route>
  ) : (
    <Route path="/">
      <Redirect to="/login" />
    </Route>
   
    
  );
};
export default ProtectedRoute
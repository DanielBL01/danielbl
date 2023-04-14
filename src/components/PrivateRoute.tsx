import { Navigate, Outlet, Route } from "react-router-dom";

interface Props {
  authenticated: boolean;
}

function PrivateRoute(props: Props) {
  const { authenticated } = props;
  return authenticated ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;

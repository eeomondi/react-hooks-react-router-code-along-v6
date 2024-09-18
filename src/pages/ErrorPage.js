import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Something went wrong.</h1>
        <p>{error.status} - {error.statusText}</p>
      </main>
    </>
  );
}

export default ErrorPage;

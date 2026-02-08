import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-blue-600">Oops!</h1>
      <p className="font-medium text-slate-500 mb-2">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-red-500">
        {error.status} {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;

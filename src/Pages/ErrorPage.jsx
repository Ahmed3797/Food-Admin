import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="container mx-auto p-5 bg-white">
      <h1 className="text-3xl font-bold mb-5">Error</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;

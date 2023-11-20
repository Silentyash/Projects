import React from "react";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error= useRouteError();

  let title= 'An Error Occurred';
  let message='Something went wrong';

  if (error.status===500){
    message= JSON.parse(error.data).message;
  }

  if (error.status===404){
    title='Not Found!'
    message= 'Could not find Resource or page.'
  }

  return (
    <>
      <MainNavigation />
      <pageContent title={title}>
        
        <p>{message}</p>
      </pageContent>
    </>
  );
};

export default Error;

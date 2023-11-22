import React from "react";
import Inputs from "./Inputs";
import Button from "./Button";
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Inputs title="Nombre" type="text" value="" onChange="" />
          </div>

          <div>
            <Inputs title="Apellido" type="text" value="" onChange="" />
          </div>

          <div>
            <Inputs title="correo" type="email" value="" onChange="" />
          </div>

          <div>
            <Inputs title="Password" type="password" value="" onChange="" />
          </div>

          <div>
            <Button title="Iniciar sesion" onClick="" />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          No tiene cuenta aun?{" "}
          <Link to="/"
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

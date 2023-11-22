import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import Inputs from "./Inputs";
import Button from "./Button";
import logo from '../assets/logo.svg'

function LoginForm() {
  const { login } = useAuth();
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/usuarios")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos de usuarios", error);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault()
    // Verifica si las credenciales coinciden con los datos de usuarios
    const user = users.find(
      (user) => user.correo === correo && user.contrasenia === contrasenia
    );

    if (user) {

      login(user);
      setLoggedIn(true);
    } else {
      // Mostrar una notificación SweetAlert2 en caso de credenciales incorrectas
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        text: "Por favor, verifica tu correo electrónico y contraseña.",
        confirmButtonText: "OK",
        timer: "3000"
      });
    }
  }

  if (loggedIn) {
    // Aquí puedes redirigir en función del rol
    if (user.rol === "docente") {
      return <Navigate to="/home" />;
    } else if (user.rol === "administrador") {
      return <Navigate to="/home/admin" />;
    }
  }

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
          <Inputs title="Nombre" type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </div>

        <div>
          <Inputs title="Apellido" type="password" value={contrasenia} onChange={(e) => setContrasenia(e.target.value)} />
        </div>

        <div>
          <Button title="Iniciar sesion" onClick={handleLogin} />
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        No tiene cuenta aun?{" "}
        <Link to="/register"
          href="#"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Registrate
        </Link>
      </p>
    </div>
  </div>
  );
}

export default LoginForm;

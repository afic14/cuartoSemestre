import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function darFormato(usuario) {
  return usuario.primerNombe + ' ' + usuario.segundoNombre;
}

let user = {
  user: {
    nombre: 'Juan',
    url: 'data:image/jpeg;base64,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',
  },
  text: 'Hey muy buenas a todos',
  date: new Date().toLocaleDateString(),
}

function Comentario(props) {
  return (
    <div className='bg-gray-200'>
      <div>
        <img src={props.usuario.url} alt='No hay sistema' />
        <div className='text-blue-300'>
          <h6>{props.usuario.nombre}</h6>
        </div>
      </div>
      <div>
        {props.text}
      </div>
      <div>
        {props.date}
      </div>
    </div>
  )
}

function Hola() {
  return (<div style={{ backgroundColor: 'gray' }}>
    <h1>Hola</h1>
  </div>)
}

function Grupo() {
  return (<div class="flex bg-gray-900 place-content-center">
    <div class="flex ">
      <h1 class="text-3xl">Grupo6 ITS</h1>
    </div>
  </div>)
}

function Cuerpo() {
  return (
    <div class='text-gray-300'>
      {/*Aqui hacer un componente, grupo*/}
      <Grupo/>
      {/*Aqui hacer un componente, encabezado*/}
      <div class="flex place-content-center">
        <div class="bg-white">
          <a href="http://nur.yavirac.edu.ec/" />
          <img src="imagenes/logo.png" class="w-40 h-20" alt="Logo" />
        </div>

        <div class="mb-6 mt-5 ml-24 md:ml-72 lg:ml-96">
          <button
            class="mr-5 bg-gray-700 hover:bg-yellow-300 hover:text-black border border-gray-400 text-white font-bold py-2 px-6 rounded-lg">
            Dona una computadora
                    </button>
        </div>
        <div>
          <button id="btnModoOscuro"
            class="mt-5 mr-5 bg-gray-700 border border-gray-400 text-white font-bold py-2 px-6 rounded-lg">modo
                        oscuro</button>
        </div>
      </div>
      {/*Aqui hacer un componente, nabvar*/}
      <nav id="header"
        class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-yellow-300 mb-3">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

          <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20"
              height="20" viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input class="hidden" type="checkbox" id="menu-toggle" />

          <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
              <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#">HOME</a></li>
                <li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#">EL PROYECTO</a></li>
                <li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#">COMO AYUDAR</a></li>
                <li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#">VOLUNTARIOS</a></li>
                <li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#">DONANTES</a></li>
                <li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="prueba.html">Formulario</a></li>
              </ul>
            </nav>
          </div>

          <div class="order-2 md:order-3 flex items-center" id="nav-content">
          </div>
        </div>
      </nav>
      {/*Aqui hacer un componente, carrucel*/}
      <div class="carousel relative container mx-auto shadow-2xl m-w-1600 text-black" >
        <div class="carousel-inner relative overflow-hidden w-full">
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true"
            hidden="" checked="checked" />
          <div class="carousel-item absolute opacity-0 height:60vh;">
            <div class="block h-full w-full bg-indigo-1000 bg-fondocarrucel">
              <div class="md:flex h-full w-full">
                <div class="h-60 w-60 md:h-full md:w-full">
                  <img src="imagenes/ima2.png" alt="tipa" class="h-full mx-auto" />
                </div>
                <div class="mx-auto flex text-white">
                  <div
                    class="flex flex-col my-auto lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide mx-auto">
                    <p class="my-3 text-3xl font-bold tracking-wider text-black">CON MOTIVO DEL COVID 19
                                            MUCHOS ESTUDIANTES Y SUS FAMILIARES SE VIERON AFECTADOS</p>
                    <div class="flex mt-6 justify-center">
                      <div class="w-16 h-1 rounded-full justify-center bg-gray-700 inline-flex">
                      </div>
                    </div>
                    <p class="my-3 text-xl font-bold tracking-wider">Buscamos computadoras usadas
                                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label for="carousel-3"
            class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-2"
            class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>


          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true"
            hidden="" checked="checked" />
          <div class="carousel-item absolute opacity-0 height:60vh;">
            <div class="block h-full w-full bg-indigo-1000t  bg-fondocarrucel">
              <div class="flex h-full">
                <div class="">
                  <img src="imagenes/ima3.png" alt="tipa" class="h-full mx-auto" />
                </div>
                <div class="mx-auto flex text-white">
                  <div
                    class="flex flex-col my-auto lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide mx-auto">
                    <p class="my-3 text-3xl font-bold tracking-wider text-black">CON MOTIVO DEL COVID 19
                                            MUCHOS ESTUDIANTES Y SUS FAMILIARES SE VIERON AFECTADOS</p>
                    <div class="flex mt-6 justify-center">
                      <div class="w-16 h-1 rounded-full justify-center bg-gray-700 inline-flex">
                      </div>
                    </div>
                    <p class="my-3 text-xl font-bold tracking-wider ">Buscamos computadoras usadas
                                        </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <label for="carousel-1"
            class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-3"
            class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>


          <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true"
            hidden="" checked="checked" />
          <div class="carousel-item absolute opacity-0 height:60vh;">
            <div class="block h-full w-full bg-indigo-1000t  bg-fondocarrucel">
              <div class="flex h-full">
                <div class="">
                  <img src="imagenes/ima4.png" alt="tipa" class="h-full mx-auto" />
                </div>
                <div class="mx-auto flex text-white">
                  <div
                    class="flex flex-col my-auto lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide mx-auto">
                    <p class="my-3 text-3xl font-bold tracking-wider text-black">CON MOTIVO DEL COVID 19
                                            MUCHOS ESTUDIANTES Y SUS FAMILIARES SE VIERON AFECTADOS</p>
                    <div class="flex mt-6 justify-center">
                      <div class="w-16 h-1 rounded-full justify-center bg-gray-700 inline-flex">
                      </div>
                    </div>
                    <p class="my-3 text-xl font-bold tracking-wider ">Buscamos computadoras usadas
                                        </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <label for="carousel-2"
            class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-1"
            class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>


          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label for="carousel-1"
                class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-2"
                class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-3"
                class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
            </li>
          </ol>
        </div>
      </div>
      {/*Aqui hacer un componente, Información de nurtec*/}
      <div class="m-auto max-w-6xl p-12 text-gray-800">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 max-w-md flex flex-col justify-center">
            <p class="my-3 text-4xl font-bold tracking-wider text-center">
              ¿QUÉ
                        </p>
            <p class="mt-6 font-normal text-center text-gray-700 md:mt-0">ES NUR TECH?</p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full justify-center bg-yellow-300 inline-flex"></div>
            </div>
            <p class="flex flex-col text-2x1 items-center justify-center mt-10">
              <span>A causa del COVID 19, con el objetivo de precautelar la salud de estudiantes y
              docentes,
              las autoridades determinaron el cambio de modalidad educativa de presencial a virtual.
              En consecuencia, muchas familias se enfrentaron a esta nueva situación no siempre
                                contando con computadores en sus hogares.</span>
              <br />
              <span>NUR TECH es un proyecto que tiene como objetivo entregar computadores refaccionados a
              estudiantes de Institutos
              Tecnológicos Superiores de Quito y sus familias que al momento no disponen de equipos
                                propios.</span>
              <br />
              <span>El proyecto es gestionado por un grupo de voluntarios que son docentes del IST Benito
                                Juárez y activistas locales.</span>
              <br />
            </p>
            <br />
            <br />

          </div>
          <div class="flex md:justify-end w-full md:w-1/2 -mt-15">
            <div class="bg-dots">
              <div class="shadow-2xl max-w-md z-10 rounded-full mt-12 ml-4">
                <div class="text-2xl p-5 bg-yellow-300">
                  <p class="flex flex-col items-center  mt-10">" El mejoramiento del mundo
                  puede ser logrado por medio de hechos
                                        puros y hermosos, por medio de una conducta loable y correcta.</p>
                  <span class="text-black">Bahá’u’lláh "</span>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-auto max-w-6xl p-12">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 max-w-md flex flex-col justify-center">
              <div class="flex">
                <div class="h-40 w-40">
                  <svg class="fill-current pointer-events-none w-8 h-8 bg"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <br />
                  <h1>Recoger</h1>
                  <p>Se acuerda una cita con el donante para retirar el equipo y/o partes.</p>
                </div>
                <div class="h-40 w-40">
                  <svg class="fill-current pointer-events-none w-8 h-8 bg"
                    xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true" focusable="false" width="1em" height="1em"
                    style={{ msTransform: 'rotate(360deg)', webkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)' }}
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="none" stroke="#626262" stroke-width="2"
                      d="M16 15c4.009-.065 7-3.033 7-7c0-3.012-.997-2.015-2-1c-.991.98-3 3-3 3l-4-4s2.02-2.009 3-3c1.015-1.003 1.015-2-1-2c-3.967 0-6.947 2.991-7 7c.042.976 0 3 0 3c-1.885 1.897-4.34 4.353-6 6c-2.932 2.944 1.056 6.932 4 4c1.65-1.662 4.113-4.125 6-6c0 0 2.024-.042 3 0z" />
                  </svg>
                  <br />
                  <h1>Reparar</h1>
                  <p>A cada equipo se le hace: limpieza, mantenimiento, remanufactura e instalación de
                                        software base</p>
                </div>
                <div class="h-40 w-40">
                  <svg class="fill-current pointer-events-none w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path fill="#fff"
                      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  <br />
                  <h1>Enviar</h1>
                  <p>Llevamos los equipos directo a la casa de los estudiantes.

                                        Dona ahora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Aqui hacer un componente, buscar ayuda*/}
      <div class="top h-64 w-full bg-blue-600 overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="" class="bg w-full h-full object-cover object-center absolute z-0" />
        <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          <h1 class="text-3xl font-semibold">Buscamos</h1>
          <h1 class="text-3xl font-semibold">Ayuda</h1>
        </div>
      </div>
      {/*Aqui hacer un componente, como donar*/}
      <div>
        <section class="text-gray-200 bg-white-200">
          <div class="max-w-5xl mx-auto px-2 py-24 ">
            <div class="text-center mb-20">
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
              <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                <div class="pattern-dots-md gray-light">
                  <div class="rounded bg-white-200 p-4 transform translate-x-6 -translate-y-6  ">
                    <div class="flex-grow text-gray-700">
                      <p class="my-3 text-4xl font-bold tracking-wider text-center">
                        ¿CÓMO
                                        </p>
                      <p class="mt-6 font-normal text-center text-gray-700 md:mt-0 ">PUEDO AYUDAR?</p>
                      <div class="w-14 h-1 rounded-full  bg-yellow-300 inline-flex"></div>

                      <p class="mt-6 font-normal text-center text-gray-700 md:mt-0 text-justify">
                        Buscamos computadores usados, partes y repuestos para entregarlos a estudiantes
                        del IST YAVIRAC que no disponen al momento de equipos propios
                                        </p>

                    </div>
                    <br />
                    <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
                      <button
                        class="mr-5 bg-gray-700 hover:bg-yellow-300 hover:text-black border border-gray-400 text-white font-bold py-2 px-6 rounded-lg">
                        QUIERO PARTICIPAR
                                        </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                <div class="pattern-dots-md gray-light">
                  <div class="rounded bg-yellow-100 p-4 transform translate-x-6 -translate-y-6 ">

                    <div class="flex-grow text-gray-600 ">
                      <div class="flex justify-center ...">
                        <svg class="fill-current pointer-events-none w-8 h-8 "
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                          fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                            clip-rule="evenodd" />
                          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                        </svg>
                      </div>
                      <p class="mt-6 font-normal text-center text-gray-700 md:mt-0">
                        Dona un computador.
                                        </p>
                      <br />
                      <div class="flex justify-center ...">
                        <svg class="fill-current pointer-events-none w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                          fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd" />
                        </svg>
                      </div>
                      <p class="mt-6 font-normal text-center text-gray-700 md:mt-0">Dona partes y
                                            piezas</p>
                      <br />
                      <div class="flex justify-center ...">
                        <svg class="fill-current pointer-events-none w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                          fill="currentColor">
                          <path
                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                      <p class="mt-6 font-normal text-center text-gray-700 md:mt-0">Promueve el
                                            proyecto en rus redes</p>
                      <br />
                      <div class="flex justify-center ...">
                        <svg class="fill-current pointer-events-none w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                          fill="currentColor">
                          <path
                            d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                      </div>
                      <p class="mt-6 font-normal text-center text-gray-700 md:mt-0">Hazte voluntario
                                        </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                <div class="pattern-dots-md gray-light">
                  <div class="rounded bg-yellow-300 p-4 transform translate-x-6 -translate-y-6 ">
                    <img src="imagenes/ima5.jpg" alt="tipa" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      {/*Aqui hacer un componente, mensaje*/}
      <div class="top h-64 w-full bg-blue-600 overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="" class="bg w-full h-full object-cover object-center absolute z-0" />
        <div
          class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          <h1 class="text-base  text-center text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">La educación
                        es uno de los factores que más influye en el avance y progreso de personas y sociedades</h1>
        </div>
      </div>
      {/*Aqui hacer un componente, agradecimientos*/}
      <section class="text-gray-200 bg-white-200">
        <div class="max-w-6xl mx-auto px-5 py-24 ">
          <div class="text-center mb-20">
            <h1
              class=" title-font  mb-4 text-4xl text-yellow-300 font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
              10</h1>
            <p class="text-base text-3xl leading-relaxed text-gray-700 xl:w-2/4 lg:w-3/4 mx-auto">
              Estamos muy orgullosos de nuestros Amables Dontantes.</p>
            <div class="flex justify-center ...">
              <svg class="fill-current pointer-events-none w-10 h-10 "
                xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true" focusable="false" width="1em" height="1em"
                style={{ msTransform: 'rotate(360deg)', webkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)' }}
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                <path
                  d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9z"
                  fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/*Aqui hacer un componente, footer*/}
      <footer class='text-gray-800'>
        <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">

          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="">
              <div class="flex shadow-md bg-primary my-6">
                <a href="#" class="mx-2">
                  <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                    focusable="false" width="1em" height="1em"
                    style={{ msTransform: 'rotate(360deg)', webkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)' }}
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                    <path
                      d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"
                      fill="white" />
                  </svg></a>

                <a href="#" class="mx-2">
                  <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                    focusable="false" width="1em" height="1em"
                    style={{ msTransform: 'rotate(360deg)', webkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)' }}
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                    <path
                      d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z"
                      fill="white" />
                  </svg></a>
                <a href="#" class="mx-2">
                  <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                    focusable="false" width="0.88em" height="1em"
                    style={{ msTransform: 'rotate(360deg)', webkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)' }}
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
                    <path
                      d="M224 202.66A53.34 53.34 0 1 0 277.36 256A53.38 53.38 0 0 0 224 202.66zm124.71-41a54 54 0 0 0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zM224 338a82 82 0 1 1 82-82a81.9 81.9 0 0 1-82 82zm85.38-148.3a19.14 19.14 0 1 1 19.13-19.14a19.1 19.1 0 0 1-19.09 19.18zM400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0c-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132c1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0c25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z"
                      fill="white" />
                  </svg></a>
                <a href="#" class="mx-2">
                  <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                    focusable="false" width="1em" height="1em"
                    style={{ msTransform: 'rotate(360deg)', webkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)' }}
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                    <path
                      d="M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 0 0-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 0 0-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 0 0-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7c3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 1 0 128 0a64 64 0 1 0-128 0z"
                      fill="white" />
                  </svg></a>
              </div>
              <br />
            </div>

            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              KEEP IN TOUCH
                            </div>
            <div class="flex mt-6 ">
              <div class="w-16 h-1 rounded-full  bg-gray-700 inline-flex"></div>
            </div>

            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Address: 44 New Desing Street
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Address: 44 New Desing Street
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Address: 44 New Desing Street
                          </p>
            <br />
            <div>
              <form class="m-2 flex">
                <input
                  class="rounded-l-lg p-1 border-t mr-0 border-b border-l text-white border-gray-200 bg-gray-700"
                  placeholder="Email Address" />
                <button
                  class=" rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-2 uppercase border-yellow-500 border-t border-b border-r">
                  <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>

          </div>
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

            <div class="text-xs uppercase  font-medium mb-6">
              Informacion
                            </div>
            <div class="flex mt-6 ">
              <div class="w-16 h-1 rounded-full  bg-gray-700 inline-flex"></div>
            </div>


            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Anthony Intriago
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Yolanda Perez
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Josue Zurita
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Alexis Sanchez
                            </p>
            <p class="my-3 block hover:text-gray-100 text-sm font-medium duration-700">
              Jean Pierre Arias
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Byron Guaygua
                            </p>

          </div>
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

            <div class="text-xs uppercase  font-medium mb-6">
              LASTEST TWEETS
                            </div>
            <div class="flex mt-6 ">
              <div class="w-16 h-1 rounded-full  bg-gray-700 inline-flex"></div>
            </div>


            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Configuration
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Theme Configuration
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Breakpoints
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Customizing Colors
                            </p>

          </div>
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

            <div class="text-xs uppercase  font-medium mb-6">
              DONATIONS
                            </div>
            <div class="flex mt-6 ">
              <div class="w-16 h-1 rounded-full  bg-gray-700 inline-flex"></div>
            </div>


            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              How to Donate
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Donation List
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              Reccent Causes
                            </p>
            <p class="my-3 block  hover:text-gray-100 text-sm font-medium duration-700">
              FAQ
                            </p>
          </div>

        </div>
        <div class="pt-2 text-base  text-center text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          <div class="flex pb-5 px-3 m-auto pt-5 
                border-t border-gray-500  text-sm 
                flex-col md:flex-row max-w-6xl">
            <div class="mt-2">
              © 2021 PROYECTO NUR TECH.
                            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}



ReactDOM.render(
  <Cuerpo
  />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

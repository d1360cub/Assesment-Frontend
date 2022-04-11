import React from 'react';
import './about.css';

function About() {
  return (
    <div className="container">
      <h1>¡Bienvenido!</h1>
      <h2>
        Estás visitando el proyecto de
        <strong> DIEGO FERNANDO CUBIDES TORRES</strong>
      </h2>
      <p>
        Soy un ingeniero electrónico con más de 15 años de experiencia
        en diferentes industrias tales como telecomunicaciones, petróleos
        y automatización (BMS - BAS).
        <br />
        <br />
        Decidí darle un giro a mi carrera en busca de mejores oportunidades
        y ahora me estoy preparando en &nbsp;
        <a href="https://makeitreal.camp/" target="_blank" rel="noopener noreferrer">
          <strong>Make It Real</strong>
        </a>
        &nbsp; para ser un Full Stack Developer.
      </p>
      <p>
        Hablando de aprendizaje, he fortalecido mis conocimientos en:
      </p>
      <ul>
        <li>Scrum</li>
        <li>Git</li>
        <li>Formularios en React</li>
      </ul>
      <p>
        Si quieres charlar acerca de cualquier cosa puedes contactarme:
        diegocubides@outlook.com
        <br />
        <br />
        Y puedes revisar todos mis proyectos en &nbsp;
        <a href="https://github.com/d1360cub" target="_blank" rel="noopener noreferrer">
          <strong>mi repositorio de github</strong>
        </a>
      </p>
    </div>
  );
}

export default About;

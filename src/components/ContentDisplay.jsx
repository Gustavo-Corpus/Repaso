import { useState } from 'react';  
import TrafficScene from './TrafficLight/TrafficScene';  
import CodeExplanation from './CodeExplanation/CodeExplanation';  
import ConditionalExplanation from './CodeExplanation/ConditionalExplanation';  
import LogicalScene from './LogicalOperators/LogicalScene';  
import LogicalExplanation from './LogicalOperators/LogicalExplanation';  
import OperatorStructure from './LogicalOperators/OperatorStructure';  
import '../styles/ContentDisplay.css';


const ContentDisplay = ({ currentLanguage, selectedTopic }) => {  
  const [currentLight, setCurrentLight] = useState('green');  
  
  if (!selectedTopic) {  
    return (  
      <div className="welcome-message">  
        <h2>👋 ¡Bienvenido!</h2>  
        <p>Selecciona un tema para empezar a aprender</p>  
      </div>  
    );  
  }  
  
  const content = {  
    javascript: {  
      conditionals: (  
        <div className="topic-content">  
          <h2 className="topic-title">Condicionales en JavaScript</h2>  
            
          <div className="concept-explanation">  
            <p>Los condicionales son como semáforos en el código. Nos permiten tomar decisiones basadas en condiciones.</p>  
              
            <p>En este ejemplo, veremos cómo funciona un semáforo:</p>  
              
            <ul>  
              <li>Si el semáforo está en <span className="text-green">verde</span>, los autos pueden avanzar 🚗</li>  
              <li>Si el semáforo está en <span className="text-red">rojo</span>, los autos deben detenerse 🔴</li>  
            </ul>  
              
            <p>Haz clic en las luces del semáforo para cambiar su estado y ver qué sucede.</p>  
          </div>  
  
          <div className="traffic-container">  
            <TrafficScene   
              currentLight={currentLight}   
              onLightChange={setCurrentLight}   
            />  
          </div>  
  
          {currentLight === 'green' ? (  
            <div className="status-message success">  
              ¡Semáforo en verde! Los autos pueden avanzar 🚗  
            </div>  
          ) : (  
            <div className="status-message warning">  
              ¡Semáforo en rojo! Los autos deben detenerse 🔴  
            </div>  
          )}  
  
          <div className="explanations-container">  
            <CodeExplanation currentLight={currentLight} />  
            <ConditionalExplanation />  
          </div>  
        </div>  
      ),
      operators: (  
        <div className="topic-content">  
          <h2 className="topic-title">Operadores Lógicos en JavaScript</h2>  
            
          <div className="concept-explanation">  
            <p>Los operadores lógicos nos permiten combinar y evaluar múltiples condiciones.</p>  
              
            <p>Veamos algunos ejemplos prácticos:</p>  
              
            <ul>  
              <li>El operador AND (&&) - Como una linterna que necesita batería Y estar encendida 🔦</li>  
              <li>El operador OR (||) - Como pagar en una tienda con diferentes métodos de pago 🏪</li>  
              <li>El operador NOT (!) - Como un interruptor que cambia entre encendido y apagado 💡</li>  
              <li>Combinación AND y OR - Como la entrada a un club nocturno 🎵</li>  
            </ul>  
              
            <p>Selecciona cada ejemplo para ver cómo funcionan los operadores lógicos en situaciones reales.</p>  
          </div>  
  
            <LogicalScene />  
  
          <div className="explanations-container">  
            <LogicalExplanation />  
            <OperatorStructure />  
          </div>  
        </div>  
      ),
      loops: (
        <div className="topic-content">
          <h2 className="topic-title">Bucles en JavaScript</h2>
          <div className="explanation">
            <p className="explanation-text">
              Los bucles nos permiten repetir acciones múltiples veces.
            </p>
          </div>
          {/* Aquí irá el contenido de bucles */}
        </div>
      ),
      functions: (
        <div className="topic-content">
          <h2 className="topic-title">Funciones en JavaScript</h2>
          <div className="explanation">
            <p className="explanation-text">
              Las funciones son bloques de código reutilizables.
            </p>
          </div>
          {/* Aquí irá el contenido de funciones */}
        </div>
      ),
      arrays: (
        <div className="topic-content">
          <h2 className="topic-title">Arrays en JavaScript</h2>
          <div className="explanation">
            <p className="explanation-text">
              Los arrays son estructuras que nos permiten almacenar múltiples valores.
            </p>
          </div>
          {/* Aquí irá el contenido de arrays */}
        </div>
      ),
      objects: (
        <div className="topic-content">
          <h2 className="topic-title">Objetos en JavaScript</h2>
          <div className="explanation">
            <p className="explanation-text">
              Los objetos nos permiten agrupar datos relacionados.
            </p>
          </div>
          {/* Aquí irá el contenido de objetos */}
        </div>
      )
    },
    react: {
      components: (
        <div className="topic-content">
          <h2 className="topic-title">Componentes en React</h2>
          <div className="explanation">
            <p className="explanation-text">
              Los componentes son los bloques de construcción de una aplicación React.
            </p>
          </div>
          {/* Aquí irá el contenido de componentes */}
        </div>
      ),
      props: (
        <div className="topic-content">
          <h2 className="topic-title">Props en React</h2>
          <div className="explanation">
            <p className="explanation-text">
              Las props son la forma de pasar datos entre componentes.
            </p>
          </div>
          {/* Aquí irá el contenido de props */}
        </div>
      ),
      state: (
        <div className="topic-content">
          <h2 className="topic-title">Estado en React</h2>
          <div className="explanation">
            <p className="explanation-text">
              El estado nos permite manejar datos dinámicos en nuestros componentes.
            </p>
          </div>
          {/* Aquí irá el contenido de estado */}
        </div>
      ),
      hooks: (
        <div className="topic-content">
          <h2 className="topic-title">Hooks en React</h2>
          <div className="explanation">
            <p className="explanation-text">
              Los Hooks nos permiten usar estado y otras características de React en componentes funcionales.
            </p>
          </div>
          {/* Aquí irá el contenido de hooks */}
        </div>
      ),
      routing: (
        <div className="topic-content">
          <h2 className="topic-title">Enrutamiento en React</h2>
          <div className="explanation">
            <p className="explanation-text">
              El enrutamiento nos permite navegar entre diferentes vistas en nuestra aplicación.
            </p>
          </div>
          {/* Aquí irá el contenido de enrutamiento */}
        </div>
      )
    }
  };

  // Verificamos si existe el contenido para el lenguaje y tema seleccionados
  const selectedContent = content[currentLanguage]?.[selectedTopic];
  
  if (!selectedContent) {
    return (
      <div className="error-message">
        <h2>🤔 Contenido no encontrado</h2>
        <p>Lo sentimos, el contenido para este tema aún no está disponible.</p>
      </div>
    );
  }

  return content[currentLanguage]?.[selectedTopic] || null;
};

export default ContentDisplay;
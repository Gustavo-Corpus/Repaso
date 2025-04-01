import { useState } from 'react';  
import OperatorStructure from './OperatorStructure';  
import LogicalScene from './LogicalScene';  // Añadimos esta importación
import '../../styles/CodeExplanation.css';  
  
const LogicalExplanation = () => {  
  return (  
    <div className="code-explanation">  
      <div className="code-title">  
        <span className="emoji-icon">🔍</span>  
        <span>¡Veamos cómo funcionan los operadores!</span>  
      </div>
      
      <div className="concept-explanation">
        <p>Los operadores lógicos nos permiten combinar condiciones y tomar decisiones basadas en múltiples factores.</p>
        
        <p>Veamos algunos ejemplos prácticos:</p>
        
        <ul>
          <li>Operador AND (&&): Como una linterna que necesita dos condiciones para funcionar 🔦</li>
          <li>Operador OR (||): Como pagar en una tienda con diferentes métodos de pago 🏪</li>
          <li>Operador NOT (!): Como un interruptor de luz que cambia estados 💡</li>
          <li>Combinación AND y OR: Como la entrada a un club nocturno 🎵</li>
        </ul>
        
        <p>Haz clic en cada ejemplo para ver cómo funcionan los operadores lógicos en acción.</p>
      </div>
    
      <LogicalScene />
      
      {/* Removemos esta parte para evitar la recursión infinita */}
      {/* <div className="explanations-container">
        <LogicalExplanation />
        <OperatorStructure />
      </div> */}
    </div>
  );
};

export default LogicalExplanation;
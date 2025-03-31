import '../../styles/CodeExplanation.css';

const CodeExplanation = ({ currentLight }) => {
    return (
      <div className="code-explanation show">
        {/* Título */}
        <div className="code-title">
          <span className="emoji-icon">🔍</span>
          <span>¡Veamos qué pasó en el código!</span>
        </div>
  
        {/* Declaración de variable */}
        <div className="code-line">
          <div className="code-content">
            <span className="code-comment">// Guardamos el color del semáforo:</span>
            <div className="code-line-indicator" />
            <div className="code-tooltip">
              Aquí creamos una variable que guarda el color actual del semáforo
            </div>
          </div>
        </div>
  
        {/* Asignación de variable */}
        <div className="code-line">
          <div className="code-content">
            <span className="code-keyword">let</span>
            {' '}
            <span className="variable-highlight">
              colorSemaforo = <span className="code-string">{`"${currentLight}"`}</span>
            </span>
            {';'}
            <div className="code-line-indicator" />
            <div className="code-tooltip">
              {"'let' nos permite crear una variable, que puede cambiar su valor"}
            </div>
          </div>
        </div>
  
        {/* Comentario de verificación */}
        <div className="code-line">
          <div className="code-content">
            <span className="code-comment">// Verificamos el color del semáforo:</span>
            <div className="code-line-indicator" />
          </div>
        </div>
  
        {/* Condición if */}
        <div className="code-line">
          <div className="code-content">
            <span className="code-keyword">if</span>
            {' ('}
            <span className="condition-highlight">
              <span className="variable-highlight">colorSemaforo</span>
              {' '}
              <span className="code-operator">===</span>
              {' '}
              <span className="code-string">"verde"</span>
            </span>
            {') {'}
            <div className="code-line-indicator" />
            <div className="code-tooltip">
              Comparamos si el semáforo está en verde
            </div>
          </div>
        </div>
  
        {/* Resultado verde */}
        <div 
          className="code-line" 
          id="greenResult" 
          style={{ 
            paddingLeft: '20px',
            color: currentLight === 'green' ? '#50fa7b' : '#6272a4'
          }}
        >
          <div className="code-content">
            <span className="result-highlight">autos.avanzar();</span>
            <div 
              className="code-line-indicator" 
              style={{ opacity: currentLight === 'green' ? 1 : 0 }}
            />
            <div className="code-tooltip">
              Si el semáforo está en verde ¡Los autos pueden avanzar! 🚗
            </div>
          </div>
        </div>
  
        {/* Else */}
        <div className="code-line">
          <div className="code-content">
            {'} '}
            <span className="code-keyword">else</span>
            {' {'}
            <div className="code-line-indicator" />
          </div>
        </div>
  
        {/* Resultado rojo */}
        <div 
          className="code-line" 
          id="redResult" 
          style={{ 
            paddingLeft: '20px',
            color: currentLight === 'red' ? '#50fa7b' : '#6272a4'
          }}
        >
          <div className="code-content">
            <span className="result-highlight">autos.detener();</span>
            <div 
              className="code-line-indicator" 
              style={{ opacity: currentLight === 'red' ? 1 : 0 }}
            />
            <div className="code-tooltip">
              Si el semáforo está en rojo, ¡Los autos deben detenerse! 🛑
            </div>
          </div>
        </div>
  
        {/* Cierre */}
        <div className="code-line">
          <div className="code-content">{'}'}</div>
        </div>
      </div>
    );
  };
  
  export default CodeExplanation;
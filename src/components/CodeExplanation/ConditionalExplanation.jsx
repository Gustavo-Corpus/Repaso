import '../../styles/CodeExplanation.css';

const ConditionalExplanation = () => {
    return (
      <div className="conditional-explanation">
        {/* Título */}
        <div className="code-title">
          <span className="emoji-icon">📝</span>
          <span>Estructura de una Condicional</span>
        </div>
  
        {/* Comentario inicial */}
        <div className="code-line">
          <div className="code-content">
            <span className="code-comment">// Estructura básica de una condicional:</span>
            <div className="code-tooltip">
              Una condicional nos permite tomar decisiones en nuestro código
            </div>
          </div>
        </div>
  
        {/* Línea del if */}
        <div className="code-line">
          <div className="code-content">
            <span className="code-keyword">if</span>
            {' ('}
            <span className="condition-highlight">condición</span>
            {') {'}
            <div className="code-tooltip">
              La condición es algo que se evalúa como verdadero o falso
            </div>
          </div>
        </div>
  
        {/* Código verdadero */}
        <div className="code-line" style={{ paddingLeft: '20px' }}>
          <div className="code-content">
            <span className="result-highlight">
              // Código que se ejecuta si la condición es verdadera
            </span>
            <div className="code-tooltip">
              Todo lo que este dentro de estos corchetes se ejecutaran unicamente si la condición es verdadera
            </div>
          </div>
        </div>
  
        {/* Línea del else */}
        <div className="code-line">
          <div className="code-content">
            {'} '}
            <span className="code-keyword">else</span>
            {' {'}
            <div className="code-tooltip">
              {"'else' es como decir si lo anterior no funciono entonces se debe ejecutar esto:"}
            </div>
          </div>
        </div>
  
        {/* Código falso */}
        <div className="code-line" style={{ paddingLeft: '20px' }}>
          <div className="code-content">
            <span className="result-highlight">
              // Código que se ejecuta si la condición es falsa
            </span>
            <div className="code-tooltip">
              Este código solo se ejecuta cuando la condición es falsa (false)
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
  
  export default ConditionalExplanation;
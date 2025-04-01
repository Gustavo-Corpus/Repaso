import '../../styles/CodeExplanation.css';

const OperatorStructure = () => {
  return (
    <div className="conditional-explanation">
      {/* Título */}
      <div className="code-title">
        <span className="emoji-icon">📝</span>
        <span>Estructura de los Operadores Lógicos</span>
      </div>

      {/* AND */}
      <div className="code-line">
        <div className="code-content">
          <span className="code-comment">// Operador AND (&&) - Ambas condiciones deben ser verdaderas</span>
          <div className="code-tooltip">
            El operador AND devuelve true solo si ambas condiciones son verdaderas
          </div>
        </div>
      </div>

      <div className="code-line">
        <div className="code-content">
          <span className="condition-highlight">condicion1</span>
          {' '}
          <span className="code-keyword">&&</span>
          {' '}
          <span className="condition-highlight">condicion2</span>
          <div className="code-tooltip">
            Ejemplo: tieneBateria && botonEncendido
          </div>
        </div>
      </div>

      {/* OR */}
      <div className="code-line">
        <div className="code-content">
          <span className="code-comment">// Operador OR (||) - Al menos una condición debe ser verdadera</span>
          <div className="code-tooltip">
            El operador OR devuelve true si al menos una de las condiciones es verdadera
          </div>
        </div>
      </div>

      <div className="code-line">
        <div className="code-content">
          <span className="condition-highlight">tieneEfectivo</span>
          {' '}
          <span className="code-keyword">||</span>
          {' '}
          <span className="condition-highlight">tieneTarjeta</span>
          <div className="code-tooltip">
            Estructura: Condición 1 || Condición 2
          </div>
        </div>
      </div>

      {/* NOT */}
      <div className="code-line">
        <div className="code-content">
          <span className="code-comment">// Operador NOT (!) - Invierte el valor de la condición</span>
          <div className="code-tooltip">
            El operador NOT convierte true en false y viceversa
          </div>
        </div>
      </div>

      <div className="code-line">
        <div className="code-content">
          <span className="code-keyword">!</span>
          <span className="condition-highlight">luzEncendida</span>
          <div className="code-tooltip">
            Cualquier cosas que pongas te devolvera lo contrario, no importa si es positivo o negativo
          </div>
        </div>
      </div>

      {/* Combinación */}
      <div className="code-line">
        <div className="code-content">
          <span className="code-comment">// Combinando operadores - Usando paréntesis para agrupar</span>
          <div className="code-tooltip">
            Los paréntesis ayudan a agrupar y priorizar las condiciones
          </div>
        </div>
      </div>

      <div className="code-line">
        <div className="code-content">
          <span className="condition-highlight">esMayorDeEdad</span>
          {' '}
          <span className="code-keyword">&&</span>
          {' ('}
          <span className="condition-highlight">tieneInvitacion</span>
          {' '}
          <span className="code-keyword">||</span>
          {' '}
          <span className="condition-highlight">esVIP</span>
          {')'}
          <div className="code-tooltip">
            Este ejemplo nos sirve para ver que se pueden mezclar los operadores, hay veces que se querra tener una regla obligatoria y otras que pueden ser mas flexibles, en este caso 2 opciones deben de cumplirse, la mayoria de edad y si tiene invitacion o es vip puede acceder al club
          </div>
        </div>
      </div>

      {/* Tabla de verdad */}
      <div className="code-line">
        <div className="code-content">
          <span className="code-comment">// Resultados comunes:</span>
          <div className="code-tooltip">
            Estos son los resultados típicos al usar operadores lógicos
          </div>
        </div>
      </div>

      <div className="code-line" style={{ paddingLeft: '20px' }}>
        <div className="code-content">
          <span className="result-highlight">
            true && true = true
          </span>
          <div className="code-tooltip">
            AND: Ambas condiciones deben ser verdaderas
          </div>
        </div>
      </div>

      <div className="code-line" style={{ paddingLeft: '20px' }}>
        <div className="code-content">
          <span className="result-highlight">
            true || false = true
          </span>
          <div className="code-tooltip">
            OR: Al menos una condición debe ser verdadera
          </div>
        </div>
      </div>

      <div className="code-line" style={{ paddingLeft: '20px' }}>
        <div className="code-content">
          <span className="result-highlight">
            !true = false
          </span>
          <div className="code-tooltip">
            NOT: Invierte el valor booleano
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorStructure;
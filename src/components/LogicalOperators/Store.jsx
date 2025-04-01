import { useState } from 'react';
import '../../styles/PaymentOptions.css';

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const paymentMethods = [
    { id: 'cash', label: 'Efectivo', emoji: '💵' },
    { id: 'card', label: 'Tarjeta', emoji: '💳' },
    { id: 'transfer', label: 'Transferencia', emoji: '📱' },
  ];

  return (
    <div className="payment-options">
      <h2>
        <span className="emoji-icon">🏪</span> Mini Super
      </h2>
      <p>Métodos de pago aceptados:</p>

      <div className="payment-buttons">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            className={`payment-button ${
              selectedPayment === method.id ? 'selected' : ''
            }`}
            onClick={() => setSelectedPayment(method.id)}
          >
            <span className="payment-emoji">{method.emoji}</span>
            <span className="payment-label">{method.label}</span>
          </button>
        ))}
      </div>

      {selectedPayment && (
        <div className="payment-message">
          <span className="success-icon">✅</span> ¡Puedes realizar tu compra!
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;
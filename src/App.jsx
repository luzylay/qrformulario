import { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
    const [formData, setFormData] = useState('');
    const [qrValue, setQrValue] = useState('');

    // Maneja los cambios en el formulario
    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    // Genera el QR al enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData) {
            setQrValue(formData);
        } else {
            alert('Por favor ingrese datos para generar el código QR.');
        }
    };

    return (
        <div className="App">
            <h1>Generador de Código QR</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Ingrese datos para el QR:
                    <input
                        type="text"
                        value={formData}
                        onChange={handleChange}
                        placeholder="Texto para el QR"
                    />
                </label>
                <button type="submit">Generar QR</button>
            </form>

            {qrValue && (
                <div className="qr-code">
                    <h2>Su Código QR:</h2>
                    <QRCode value={qrValue} />
                </div>
            )}
        </div>
    );
}

export default App;

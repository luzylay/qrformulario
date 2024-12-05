import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        password: ''
    });
    const [qrValue, setQrValue] = useState('');
    const qrRef = useRef();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const qrData = `Nombre: ${formData.name}, Edad: ${formData.age}, Correo: ${formData.email}`;
        setQrValue(qrData);
    };

    const downloadQR = () => {
        const canvas = qrRef.current.querySelector('canvas');
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = url;
        link.download = 'codigoQR.png';
        link.click();
    };

    return (
        <div className="container">
            <div className="qr-section">
                <h1>GENERANDO QR</h1>
                <p>USO PERSONAL</p>
                <br />
                {qrValue && (
                    <div ref={qrRef}>
                        <QRCodeCanvas value={qrValue} size={200} />
                    </div>
                )}
                {qrValue && (
                    <button onClick={downloadQR}>DESCARGAR QR</button>
                )}
            </div>
            <div className="form-section">
                <h1>Crear Usuario</h1>
                <p>Ingrese sus datos</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Inserte nombre"
                            required
                        />
                    </label>
                    <label>
                        Edad:
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Inserte edad"
                            required
                        />
                    </label>
                    <label>
                        Correo Electrónico:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="hello_world@gmail.com"
                            required
                        />
                    </label>
                    <label>
                        Contraseña:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit">REGISTRARSE</button>
                </form>
            </div>
        </div>
    );
}

export default App;


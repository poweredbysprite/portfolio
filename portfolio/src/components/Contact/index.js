import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000)

        return () => clearTimeout(idTimeOut)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_v87nlob', 'template_64cjgeh', refForm.current, 'dH6z0X_13SHhAR3aM')
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again!');
                }
            )    
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx = {15} />
                    </h1>
                    <p>
                        lorem ipsum
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' name='subject' type='text' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Tan Zheng Kai,
                    <br />
                    Singapore,
                    <br />
                    Block 234 #07-533, 521234 <br />
                    Tampines Street 21 <br />
                    <span>tanzhengkai@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[1.3574920890587736, 103.94809480813208]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[1.3574920890587736, 103.94809480813208]}>
                            <Popup>Zheng Kai lives here :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;
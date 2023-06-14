import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

    const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['h', 'e', 'n', 'g', ' ', 'k', 'a', 'i'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000)

        return () => clearTimeout(idTimeOut)
    }, []);

    return (
        <>    
            <div className="container home-page">
                <div className='text-zone'>
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span> 
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={23}/>
                    </h1>
                    <h2>Software Developer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home;
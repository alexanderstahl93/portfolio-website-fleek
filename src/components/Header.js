// Import Assets
import MatrixBackground from './MatrixBackground';
import profile from '../assets/profile_new.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Alexander Stahl" />

            <div className='header__content'>
            <MatrixBackground />  

                <h1>Hi, I'm Alexander</h1>
                <p>Practical Hands-On AI & Blockchain Development.</p>
                <a href="mailto:info@alexanderstahl.at" className="button">Get in touch</a>
            </div>
        </section>
    );
}

export default Header;
// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Alexander Stahl" />

            <div className='header__content'>
                <h1>Hi, I'm Alexander Stahl</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:info@alexanderstahl.at" className="button">Get in touch</a>
            </div>
        </section>
    );
}

export default Header;
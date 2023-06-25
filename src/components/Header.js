// Import Assets
import profile from '../assets/bildhp.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Alexander Stahl" />

            <div className='header__content'>
                <h1>Hi, I'm Alexander</h1>
                <p>Building on <a href="https://ethereum.org/de/">Blockchain</a>, Amplifying with <a href="https://cloud.google.com/learn/what-is-artificial-intelligence">AI</a>.</p>
                <a href="mailto:info@alexanderstahl.at" className="button">Get in touch</a>
            </div>
        </section>
    );
}

export default Header;
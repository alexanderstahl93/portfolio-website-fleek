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
                <p>Transforming Ideas into Reality with AI & Blockchain.</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.Calendly.initPopupWidget({url: 'https://calendly.com/alexanderstahl/30min'});
                        return false;
                    }} 
                    className="button"
                >
                    Schedule a Consultation
                </a>
            </div>
        </section>
    );
}

export default Header;
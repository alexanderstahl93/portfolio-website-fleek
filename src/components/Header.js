// Import Assets
import MatrixBackground from './MatrixBackground';
import profile from '../assets/profile_new.png';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Alexander Stahl" />

            <div className='header__content'>
            <MatrixBackground />  

                <h1>Hi, I'm Alexander</h1>
                <p>I Am Solving Problems with AI-Powered Solutions.</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <motion.a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.Calendly.initPopupWidget({url: 'https://calendly.com/alexanderstahl/30min'});
                        return false;
                    }} 
                    className="schedulebutton"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.6 }}
                >
                    Schedule a Consultation
                </motion.a>
            </div>
        </section>
    );
}

export default Header;
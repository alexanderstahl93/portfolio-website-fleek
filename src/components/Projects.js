// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Uniswap</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>Web3 development by building a DEX with Uniswap.
                    </p>

                    <a href="#" target="_blank" className="button">...</a>
                    <a href="#" target="_blank" className="button">...</a>
                </div>

            </div>
        </section>
    );
}

export default Projects;
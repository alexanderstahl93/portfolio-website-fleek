// Import Assets
import uniswap from '../assets/uniswap.png';
import whale from '../assets/whale.jpg';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Crypto Whale Tracker</h3>
                    <img src={whale} alt="Uniswap Swap Page" />
                    <p>The Crypto Whale Tracker is designed to track large transfers of USDC (USD Coin) tokens on the Ethereum blockchain. 
                        The script utilizes the Ethers.js library, which provides a convenient way to interact with the Ethereum network.
                    </p>

                    <a href="https://github.com/alexanderstahl93/crypto-whale-tracker/tree/master" target="_blank" className="button">GitHub</a>
                </div>

            </div>
        </section>
    );
}

export default Projects;
import logoTransparent from '../assets/logotransperent.png';
import building from '../assets/ssssss.png';

export const Intro = () => {
    return (
        <div className='intro-section'>
            <div className='slide-content'>
                <div>
                    <img src={logoTransparent} alt='logoBig' className='logo-big' />
                    <h2>
                    </h2>
                </div>
                <img src={building} alt='logoBig' className='logo-big' />
                <button className='intro-button'>
                    <p>Contact us</p>
                </button>
            </div>
        </div>
    );
};

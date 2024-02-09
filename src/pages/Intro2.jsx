import logoTransparent from '../assets/logotransperent.png';
import building from '../assets/home-background.jpg';

export const Intro2 = () => {
    return (
        <div className='intro-section'>
            <div className='banner-container'>
                <div className='slide-content'>
                    <div className='content-container'>
                            <img src={logoTransparent} alt='logoBig' className='logo-big' />
                            <h2>
                                <p>
                                   Вашето доверено място за отлично обслужване на автомобила.
                                </p>
                            </h2>
                        <button className='intro-button'>
                            <p>Запази Час</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

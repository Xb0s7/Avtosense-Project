import { useRef } from "react";
import Lottie from "react-lottie";
import lotties from "../utils/lotties";

export const CustomerCare = () => {
    const wrenchLottie = useRef(null);
    const clockLottie = useRef(null);
    const starLottie = useRef(null);

    const getLottieOptions = (lottie) => {
        return {
            loop: true,
            rendererSettings: {
                className: `lottie ${lottie}`,
            },
            animationData: lotties[lottie],
        };
    };

    return (
        <div className="customer-care-section">
            <div className="card-wrap">
                <div className="card-header">
                    <Lottie
                        className="lottie"
                        options={getLottieOptions("wrenchLottie")}
                        ref={wrenchLottie}
                        height={75}
                        width={70}
                    />
                </div>
                <div className="card-content">
                    <h2 className="card-title">Обслужване</h2>
                    <p className="card-text">
                        Нашите квалифицирани специалисти осигуряват висококачествено обслужване.
                    </p>
                </div>
            </div>
            <div className="card-wrap">
                <div className="card-header">
                    <Lottie
                        isClickToPauseDisabled={false}
                        options={getLottieOptions("clockLottie")}
                        ref={clockLottie}
                        height={75}
                        width={70}
                    />
                </div>
                <div className="card-content">
                    <h2 className="card-title">Продуктивност</h2>
                    <p className="card-text">
                        С конкурентни цени и бързи услуги, ние ви даваме най-доброто за вашия
                        автомобил.
                    </p>
                </div>
            </div>
            <div className="card-wrap">
                <div className="card-header">
                    <Lottie
                        className="lottie"
                        options={getLottieOptions("starLottie")}
                        ref={starLottie}
                        height={75}
                        width={70}
                    />
                </div>
                <div className="card-content">
                    <h2 className="card-title">Отношение</h2>
                    <p className="card-text">
                        Ние ценим вас, нашите клиенти и целим винаги да оставате доволни от нашите услуги.
                    </p>
                </div>
            </div>
        </div>
    );
};

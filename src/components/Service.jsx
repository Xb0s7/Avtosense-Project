import { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";

export const ServiceCard = ({ item }) => {
    const { setSelectedService, setIsActive } = useContext(ServiceContext)

    const clickHandler = () => {
        setSelectedService({ ...item });
        setIsActive(true);
    };
    return (
        <div className='service' onClick={clickHandler}>
            <div className='service-button-content'>
                <div className='icon-container'>{item.icon()}</div>
                <h4>{item.label}</h4>
            </div>
        </div>
    );
};

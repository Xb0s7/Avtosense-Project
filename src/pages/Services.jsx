import { useEffect, useRef, useState } from 'react';
import { ServiceCard } from '../components/Service';
import { ServiceDetails } from '../components/ServiceDetails';
import { SERVICES_ITEMS } from '../config/services-config';

export const Services = () => {
    const [selectedService, setSelectedService] = useState();
    const [isActive, setIsActive] = useState(false);
    const serviceDetails = useRef();

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else if (serviceDetails.current) {
            serviceDetails.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isActive]);

    return (
        <div className='services-section'>
            <h3 className='header'>Услуги</h3>
            <div className='content'>
                {SERVICES_ITEMS.map((item, index) => (
                    <ServiceCard {...{ item, setSelectedService, setIsActive }} key={index} />
                ))}
            <ServiceDetails ref={serviceDetails} {...{ selectedService, isActive, setIsActive }} />
            </div>
        </div>
    );
};

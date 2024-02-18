import { useEffect, useRef, useState } from 'react';
import { ServiceCard } from '../components/Service';
import { ServiceDetails } from '../components/ServiceDetails';
import { SERVICES_ITEMS } from '../config/services-config';

export const Services = () => {
    const [selectedService, setSelectedService] = useState();
    const [isActive, setIsActive] = useState(false);
    const serviceDetails = useRef();

    useEffect(() => {
        if (serviceDetails.current && isActive) {
            
            serviceDetails.current.classList.add('active');
            const timer = setTimeout(() => {
                serviceDetails.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 210);

            return () => clearTimeout(timer)
        } else {
            serviceDetails.current.classList.remove('active')
        }
    }, [isActive]);

    return (
        <div className='services-section'>
            <h3 className='header'>Услуги</h3>
            <div className='content'>
                {SERVICES_ITEMS.map((item) => (
                    <ServiceCard {...{ item, setSelectedService, setIsActive }} key={item.id} />
                ))}
                <ServiceDetails ref={serviceDetails} {...{ selectedService, isActive, setIsActive, setSelectedService }} />
            </div>
        </div>
    );
};

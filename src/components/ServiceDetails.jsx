import { forwardRef } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

export const ServiceDetails = forwardRef(({ isActive, selectedService, setIsActive }, ref) => {
    return (
        <>
            <div className={`service-details ${isActive ? 'active' : ''}`} ref={ref}>
                {selectedService && (
                    <>
                        <div className='icon-container'>{selectedService.icon()}</div>
                        <h3>{selectedService.label}</h3>
                        <FaTimes
                            size={35}
                            onClick={() => {
                                setIsActive(false);
                            }}
                            className='close-button'
                        />
                    </>
                )}
                {selectedService && (
                    <div className='service-content'>
                        <h5 className='description'>{selectedService.intro}</h5>
                        <ul>
                            {selectedService.allServices?.map((service) => (
                                <li>
                                    <FaCheckCircle
                                        size={20}
                                        className='service-list-icon'
                                    ></FaCheckCircle>
                                    <h6>
                                        {service.title} - <span>{service.description}</span>
                                    </h6>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
});

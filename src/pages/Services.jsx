import { useContext, useEffect, useRef, useState } from "react";
import { ServiceCard } from "../components/Service";
import { ServiceDetails } from "../components/ServiceDetails";
import { SERVICES_ITEMS } from "../config/services-config";
import { ServiceContext } from "../context/ServiceContext";

export const Services = () => {
    const serviceDetails = useRef();
    const { isActive } = useContext(ServiceContext);
    const [scrollPositionToReturn, setScrollPositionToReturn] = useState(0);

    useEffect(() => {
        if (serviceDetails.current && isActive) {
            setScrollPositionToReturn(window.scrollY);

            serviceDetails.current.classList.add("active");
            const timer = setTimeout(() => {
                serviceDetails.current.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 210);

            return () => clearTimeout(timer);
        } else {
            serviceDetails.current.classList.remove("active");
            window.scrollTo({top: scrollPositionToReturn, behavior:'smooth'})
        }
    }, [isActive]);

    return (
        <div className="services-section">
            <h3 className="section-header">Услуги</h3>
            <div className="content">
                {SERVICES_ITEMS.map((item) => (
                    <ServiceCard {...{ item }} key={item.id} />
                ))}
                <ServiceDetails ref={serviceDetails} />
            </div>
        </div>
    );
};

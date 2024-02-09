import { FaEnvelope, FaUserEdit, FaWarehouse, FaWrench } from 'react-icons/fa';

export const NAVIGATION_ITEMS = [
    {
        label: 'Home',
        tooltip: 'Начало',
        id: 'intro-section',
        marginHeight: 500,
        icon: () => <FaWarehouse />,
    },
    {
        label: 'Услуги',
        tooltip: 'Услуги',
        id: 'services-section',
        marginHeight: 0,
        icon: () => <FaWrench />,
    },

    {
        label: 'Testimonials',
        tooltip: 'Ревюта',
        id: 'reviews-section',
        marginHeight: 0,
        icon: () => <FaUserEdit />,
    },
    {
        label: 'Contact us',
        tooltip: 'Контакти',
        id: 'contact-section',
        marginHeight: 0,
        icon: () => <FaEnvelope />,
    },
];

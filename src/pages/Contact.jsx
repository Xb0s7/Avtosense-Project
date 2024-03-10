import React from "react";
// import GoogleMaps from "../components/GoogleMaps";
import GoogleMaps from "../components/GoogleMapsA";
import { CONTACT_ITEMS } from "../config/contacts-config";

export const Contact = () => {
    return (
        <div className="contact-section">
            <h3 className="section-header">Контакти</h3>
            <div className="content">
                <GoogleMaps />
                <div className="contact-details">
                    <div className="contact-header">
                        <h3>Свържете се с нас</h3>
                        <p>
                            Ние сме тук за да помогнем! Ако имате някакви въпроси или обратна
                            връзка, можете да се свържете с нас на посочените по долу контакти за
                            връзка.
                        </p>
                    </div>
                    <ul className="contacts">
                        {CONTACT_ITEMS.map(({ Icon, text }, index) => (
                            <li className="contacts-item" key={index}>
                                <Icon></Icon>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} Avtosense | All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

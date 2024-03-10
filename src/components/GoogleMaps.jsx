import React from "react";
import { GoogleMap, useJsApiLoader, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "calc(50% - 10px)",
    height: "calc(100% - 10px)",
    margin: "5px",
    borderRadius: "7.5px",
};

const center = {
    lat: 43.219859967929565,
    lng: 27.868800696550476,
};

const GoogleMaps = () => {
    const { isLoaded } = useJsApiLoader({
        // id: "google-map-script",
        googleMapsApiKey: "AIzaSyCKFsaQFtlPVe6Q3LgiNPRYwfLMZzaPTM8",
        // libraries: ["marker"],
    });

    return (
        isLoaded && (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16.5}
                options={{ mapTypeId: "roadmap" }}
            >
                <Marker position={center} placeId="ChIJf53VO0BVpEARSzMFUa0duf0" />
            </GoogleMap>
        )
    );
};

export default React.memo(GoogleMaps);

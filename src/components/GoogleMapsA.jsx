import { APIProvider, Map, AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const GoogleMaps = () => {
    return (
        <>
            <Map
                mapId="gooogle-maps"
                className="google-map"
                defaultCenter={{
                    lat: 43.219859967929565,
                    lng: 27.868800696550476,
                }}
                defaultZoom={16.5}
                gestureHandling={"greedy"}
            >
                <AdvancedMarker
                    position={{
                        lat: 43.219859967929565,
                        lng: 27.868800696550476,
                    }}
                ></AdvancedMarker>
            </Map>
        </>
    );
};

export default GoogleMaps
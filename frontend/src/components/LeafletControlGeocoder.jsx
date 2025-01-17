import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import L from 'leaflet';

import icon from '../lib/constants';

export default function LeafletControlGeocoder() {
  const map = useMap();

  useEffect(() => {
    let geocoder = L.Control.Geocoder.nominatim();
    let geocoderControl;

    if (typeof URLSearchParams !== 'undefined' && location.search) {
      // parse /?geocoder=nominatim from URL
      const params = new URLSearchParams(location.search);
      const geocoderString = params.get('geocoder');
      if (geocoderString && L.Control.Geocoder[geocoderString]) {
        geocoder = L.Control.Geocoder[geocoderString]();
      } else if (geocoderString) {
        console.warn('Unsupported geocoder', geocoderString);
      }
    }

    geocoderControl = L.Control.geocoder({
      query: '',
      placeholder: 'Search here...',
      defaultMarkGeocode: false,
      geocoder,
    })
      .on('markgeocode', function (e) {
        const latlng = e.geocode.center;
        L.marker(latlng, { icon })
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);

    return () => {
      map.removeControl(geocoderControl);
    };
  }, [map]);

  return null;
}

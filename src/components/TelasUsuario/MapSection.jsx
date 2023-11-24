import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapSection = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHNvdWdsYSIsImEiOiJjbG9tZzJkMTAwdHZiMmpwcDQzNHUwY3BtIn0.Yw5Jia_cH0bDbfHp_XWO7g';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.660365, -23.555146],
      zoom: 14,
    });

    map.on('load', () => {
      map.on('click', 'places', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        new mapboxgl.Popup({
          className: 'popup-content',
        })
          .setLngLat(coordinates)
          .setHTML(`<div className='teste'>teste</div>`)
          .addTo(map);
      });

      map.addSource('places', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-46.656664, -23.561832],
              },
              properties: {
                description: 'Exemplo de estabelecimento 1',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-46.660039, -23.563873],
              },
              properties: {
                description: 'Exemplo de estabelecimento 2',
              },
            },
            // Adicione mais estabelecimentos conforme necessário
          ],
        },
      });

      map.addLayer({
        id: 'places',
        type: 'symbol',
        source: 'places',
        layout: {
          'icon-image': 'restaurant-15',
          'icon-allow-overlap': true,
        },
      });
    });

    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: '100%', height: '600px' }}></div>;
};

export default MapSection;

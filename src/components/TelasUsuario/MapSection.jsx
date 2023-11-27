import axios from 'axios';

import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import PontoCinza from "../../assets/PointerLGBT.png"
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
// ... (seu código)



map.on('load', () => {
  map.addSource('pontos', {
      type: 'geojson',
      data: {
          type: 'FeatureCollection',
          features: [
              {
                  type: 'Feature',
                  properties: {
                      icon: 'PontoCinza' // Nome do ícone
                  },
                  geometry: {
                      type: 'Point',
                      coordinates: [-46.660365, -23.555146] // Coordenadas do ponto
                  }
              }
              // Adicione mais pontos se necessário
          ]
      }
  });
  const buscarSugestoesEnderecos = async (termo) => {
    try {
      const accessToken = 'pk.eyJ1IjoiZHNvdWdsYSIsImEiOiJjbG9tZzJkMTAwdHZiMmpwcDQzNHUwY3BtIn0.Yw5Jia_cH0bDbfHp_XWO7g'; // Substitua pelo seu token da Mapbox
      const countryFilter = '&country=BR'; // Filtro para o Brasil
      const regionFilter = '&region=SP'; // Filtro para o estado de São Paulo

      const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(termo)}.json?access_token=${accessToken}${countryFilter}${regionFilter}`);
  
   
      if (response.data && response.data.features) {
        const sugestoes = response.data.features
          .filter((feature) => feature.place_type.includes('poi') || feature.place_type.includes('address'))
          .map((feature) => (
            
            
            {
            nome: feature.text,
            endereco: feature.place_name,
          }));
  
        // Atualiza as sugestões de endereços
      } else {
      }
    } catch (error) {
      console.error('Erro ao buscar sugestões de endereços:', error);
    }
  };
  buscarSugestoesEnderecos()
  map.loadImage(PontoCinza, (error, image) => {
      if (error) throw error;
      map.addImage('PontoCinza', image);
      map.addLayer({
          id: 'pontos',
          type: 'symbol',
          source: 'pontos',
          layout: {
              'icon-image': 'PontoCinza', // Usa o ícone carregado
              'icon-size': 0.1 // Ajuste o tamanho do ícone conforme necessário
          }
      });
  });
});

// ... (seu código)

    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: '100%', height: '600px' }}></div>;
};

export default MapSection;

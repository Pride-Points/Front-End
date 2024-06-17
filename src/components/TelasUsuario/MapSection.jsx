import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import api from '../../api/api'; // Ajuste o caminho conforme necessário
import { toast } from 'react-toastify';
import logoBandeira from '../../assets/logo-bandeira.png';

const MapSection = () => {
  const mapContainer = useRef(null);
  const mapboxAccessToken = 'pk.eyJ1IjoiZHNvdWdsYSIsImEiOiJjbG9tZzJkMTAwdHZiMmpwcDQzNHUwY3BtIn0.Yw5Jia_cH0bDbfHp_XWO7g'; // Substitua pelo seu token

  useEffect(() => {
    mapboxgl.accessToken = mapboxAccessToken;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.660365, -23.555146], // São Paulo
      zoom: 14
    });

    // Inicializar o geocoder
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxAccessToken,
      mapboxgl: mapboxgl,
      marker: {
        color: 'orange'
      },
      bbox: [-73.982817, -33.750707, -34.729994, 5.271786] // BBox para o Brasil
    });

    // Adicionar o geocoder ao mapa
    map.addControl(geocoder, 'top-right');

    const fetchData = async () => {
      let token = sessionStorage.getItem('authToken'); // Certifique-se de que o token está armazenado corretamente
      const bearerToken = `Bearer ${token}`;

      try {
        const response = await api.get('/empresas/completo', {
          headers: { Authorization: bearerToken }
        });

        if (response.status !== 200) {
          toast.error('Erro ao obter empresas. Por favor, tente novamente mais tarde.');
          return;
        }

        const listaEmpresas = response.data;

        // Verificando se a lista de empresas está vazia
        if (!listaEmpresas || listaEmpresas.length === 0) {
          return;
        }

        const empresasComCoordenadas = await Promise.all(listaEmpresas.map(async empresa => {
          const endereco = `${empresa.cep}, ${empresa.cidade}, ${empresa.estado}, ${empresa.numero}`;
          const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(endereco)}.json?access_token=${mapboxAccessToken}`;

          try {
            const geocodeResponse = await fetch(geocodeUrl);
            const geocodeData = await geocodeResponse.json();
            if (geocodeData.features.length > 0) {
              const [longitude, latitude] = geocodeData.features[0].center;
              return { ...empresa, longitude, latitude };
            }
            return null; // Endereço não encontrado
          } catch (error) {
            console.error("Erro ao geocodificar endereço:", error);
            return null; // Erro na requisição
          }
        }));

        empresasComCoordenadas.filter(e => e !== null).forEach(empresa => {
          const el = document.createElement('div');
          el.className = 'marker';
          el.style.backgroundImage = `url(${logoBandeira})`; // Optional: URL to your custom icon
          el.style.width = '100px';
          el.style.height = '100px';
          el.style.backgroundSize = '100%';
          el.style.backgroundColor = 'transparent'

          const marker = new mapboxgl.Marker(el)
            .setLngLat([empresa.longitude, empresa.latitude])
            .setPopup(new mapboxgl.Popup().setHTML(`<h4>${empresa.nomeFantasia}</h4><p>${empresa.cidade}, ${empresa.estado}</p>`))
            .addTo(map);

          marker.getElement().addEventListener('click', () => {
            map.flyTo({
              center: [empresa.longitude, empresa.latitude],
              essential: true,
              zoom: 16,
              speed: 1,
              curve: 1,
            });
          });
        });
      } catch (error) {
        toast.error('Erro ao carregar dados das empresas.');
        console.error('Erro ao fazer requisições para a API:', error);
      }
    };

    map.on('load', fetchData);

    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainer} style={{ width: '100%', height: '600px' }} />;
};

export default MapSection;

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import PontoCinza from "../../assets/PointerLGBT.png";
import 'mapbox-gl/dist/mapbox-gl.css';
import api from '../../api/api';

const MapSection = () => {
  const mapContainer = useRef(null);
  const [listaEmpresas, setListaEmpresas] = useState([]);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHNvdWdsYSIsImEiOiJjbG9tZzJkMTAwdHZiMmpwcDQzNHUwY3BtIn0.Yw5Jia_cH0bDbfHp_XWO7g';
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.660365, -23.555146], // Centro inicial arbitrário
      zoom: 14,
    });

   

    const fetchData = async () => {

        const listarEmpresasCompleta = async () => {
          try {
            const response = await api.get(`empresas/completo`, {
              headers: {
                Authorization: `Bearer ${sessionStorage.authToken}`
              }
            });
            console.log(response.data)
            setListaEmpresas(response.data)
          } catch (error) {
            toast.error(error.message);
          }
        }
        listarEmpresasCompleta();
        
      const empresasComCoordenadas = await Promise.all(listaEmpresas.map(async empresa => {
        const endereco = `${empresa.cep}, ${empresa.cidade}, ${empresa.estado}, ${empresa.numero}`;
        const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(endereco)}.json?access_token=${mapboxgl.accessToken}`;
        
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

      // Carregando a imagem para o marcador
      map.loadImage(PontoCinza, (error, image) => {
        if (error) throw error;
        map.addImage('PontoCinza', image);

        // Adicionando fonte de dados ao mapa
        map.addSource('pontos', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: empresasComCoordenadas.filter(e => e !== null).map(empresa => ({
              type: 'Feature',
              properties: {
                description: `${empresa.nomeFantasia}<br>${empresa.cidade}, ${empresa.estado}`
              },
              geometry: {
                type: 'Point',
                coordinates: [empresa.longitude, empresa.latitude]
              }
            }))
          }
        });

        // Adicionando a camada ao mapa com os pontos
        map.addLayer({
          id: 'pontos',
          type: 'symbol',
          source: 'pontos',
          layout: {
            'icon-image': 'PontoCinza',
            'icon-size': 0.1
          }
        });
      });
    };

    // Carregando dados quando o mapa estiver pronto
    map.on('load', fetchData);

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '600px' }}></div>;
};

export default MapSection;

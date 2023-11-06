import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapSection = () => {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZW1lZGVqIiwiYSI6ImNsb25idmgzYjEyZDkycW9hYzM2OG5zYngifQ.L1ccu-Db-bbQwF6Ei8tuLQ'; // Substitua 'SEU_TOKEN_MAPBOX' pelo seu token

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // Pode mudar o estilo do mapa
            center: [ -46.655589, -23.562195], // Coordenadas iniciais (longitude, latitude)
            zoom: 20 // Zoom inicial
        });

        // Adicione marcadores, linhas, etc. conforme a necessidade

        // Limpar recursos do mapa quando o componente for desmontado
        return () => map.remove();
    }, []); // O array vazio [] como segundo argumento garante que o useEffect seja executado apenas uma vez

    return (
        <div id='map' style={{ width: '171%'}}></div>
    );
};

export default MapSection;

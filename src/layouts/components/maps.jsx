'use client';

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import fiberNetworkData from '../../data/fiber-network.json';

const Maps = () => {
  // Verificar si el token está disponible
  const mapboxToken = import.meta.env.PUBLIC_MAPBOX_TOKEN;

  useEffect(() => {
    console.log('Mapbox token from env:', import.meta.env.PUBLIC_MAPBOX_TOKEN);
    console.log('Mapbox token variable:', mapboxToken);
    
    if (!mapboxToken) {
      console.error('Mapbox token not found. Please set PUBLIC_MAPBOX_TOKEN environment variable.');
    } else {
      console.log('Setting Mapbox access token...');
      mapboxgl.accessToken = mapboxToken;
      console.log('Mapbox access token set:', mapboxgl.accessToken);
    }
  }, [mapboxToken]);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [geocoder, setGeocoder] = useState(null);

  // Importar geocoder dinámicamente solo en el cliente
  useEffect(() => {
    if (mapboxToken && typeof window !== 'undefined') {
      import('@mapbox/mapbox-sdk/services/geocoding').then(({ default: MapboxGeocoder }) => {
        setGeocoder(MapboxGeocoder({ accessToken: mapboxToken }));
      }).catch(err => {
        console.error('Error loading geocoder:', err);
      });
    }
  }, [mapboxToken]);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    if (!geocoder) {
      console.error('Geocoder not initialized - missing Mapbox token');
      return;
    }

    setIsSearching(true);
    try {
      const response = await geocoder.forwardGeocode({
        query: query,
        limit: 5,
        countries: ['MX']
      }).send();

      const results = response.body.features;

      setSearchResults(results);
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleLocationSelect = (feature) => {
    const [lng, lat] = feature.center;

    // Verificar si está dentro del área de cobertura
    const isInCoverageArea = lng >= -95.310 && lng <= -95.270 && lat >= 18.430 && lat <= 18.500;

    if (!isInCoverageArea) {
      alert('Fuera de Cobertura: La ubicación seleccionada está fuera del área de cobertura de Vigia Telecom.');
      return;
    }

    map.current.flyTo({
      center: [lng, lat],
      zoom: 15,
      essential: true
    });

    // Crear marcador animado
    createAnimatedMarker([lng, lat]);

    setSearchQuery(feature.place_name);
    setSearchResults([]);
  };

  const createAnimatedMarker = (coordinates) => {
    // Crear el elemento del marcador
    const markerEl = document.createElement('div');
    const markerInner = document.createElement('div');
    markerInner.className = 'animated-marker';
    markerEl.appendChild(markerInner);

    // Agregar estilos CSS para la animación
    const style = document.createElement('style');
    style.textContent = `
      .animated-marker {
        background-image: url('/images/icons/Office.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 40px;
        height: 40px;
        cursor: pointer;
        animation: pop-in 0.3s ease-out forwards, wobble 1.5s ease-in-out 0.3s forwards;
        transform-origin: bottom center;
      }
      
      @keyframes pop-in {
        0% {
          width: 0px;
          height: 0px;
          opacity: 0;
          box-shadow: none;
        }
        70% {
          width: 45px;
          height: 45px;
          opacity: 1;
          box-shadow: 0px 0px 8px rgba(110, 222, 116, 0.4);
        }
        85% {
          width: 38px;
          height: 38px;
          box-shadow: 0px 0px 4px rgba(110, 222, 116, 0.3);
        }
        100% {
          width: 40px;
          height: 40px;
          box-shadow: 0px 0px 6px rgba(110, 222, 116, 0.3);
        }
      }
      
      @keyframes wobble {
        0% {
          transform: rotate(0deg);
        }
        20% {
          transform: rotate(2.5deg);
        }
        50% {
          transform: rotate(-2deg);
        }
        65% {
          transform: rotate(1deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    `;
    document.head.appendChild(style);

    // Crear y agregar el marcador al mapa
    const marker = new mapboxgl.Marker(markerEl)
      .setLngLat(coordinates)
      .addTo(map.current);

    // Agregar popup al marcador
    const popup = new mapboxgl.Popup()
      .setHTML('<h3 class="text-sm font-bold">Ubicación Seleccionada</h3><p class="text-xs">Dentro del área de cobertura</p>');
    marker.setPopup(popup);

    return marker;
  };

  useEffect(() => {
    if (!mapContainer.current) {
      console.log('mapContainer is not ready');
      return;
    }

    if (map.current) {
      console.log('Map already initialized');
      return;
    }

    console.log('All conditions met, initializing map...');

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: fiberNetworkData.mapConfig.center,
        zoom: fiberNetworkData.mapConfig.zoom,
        maxBounds: fiberNetworkData.mapConfig.maxBounds,
        maxBoundsViscosity: fiberNetworkData.mapConfig.maxBoundsViscosity
      });

      console.log('Map instance created');

      // Agregar marcador animado para la oficina
      const officeMarkerEl = document.createElement('div');
      const officeMarkerInner = document.createElement('div');
      officeMarkerInner.className = 'office-marker';
      officeMarkerEl.appendChild(officeMarkerInner);

      // Agregar estilos CSS para el marcador de oficina
      const officeStyle = document.createElement('style');
      officeStyle.textContent = `
        .office-marker {
          background-image: url('/images/icons/Office.png');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          width: 50px;
          height: 50px;
          cursor: pointer;
          border-radius: 100%;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
            width: 47px;
            height: 47px;
            box-shadow: 0px 0px 5px rgba(110, 222, 116, 0.3);
          }
          100% {
            width: 50px;
            height: 50px;
            box-shadow: 0px 0px 8px rgba(110, 222, 116, 0.3);
          }
        }
        
        @keyframes wobble {
          0% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(3deg);
          }
          50% {
            transform: rotate(-2.5deg);
          }
          65% {
            transform: rotate(1.5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        
        .fiber-pole-marker {
          background-image: url('/images/icons/fiber-pole.svg');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          width: 30px;
          height: 40px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .fiber-pole-marker:hover {
          transform: scale(1.2);
        }
        
        .fiber-active-marker {
          background-image: url('/images/icons/fiber-pole-active.svg');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          width: 35px;
          height: 45px;
          cursor: pointer;
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from {
            filter: drop-shadow(0 0 5px #3B82F6);
          }
          to {
            filter: drop-shadow(0 0 15px #3B82F6);
          }
        }
      `;
      document.head.appendChild(officeStyle);

      const officeMarker = new mapboxgl.Marker(officeMarkerEl)
        .setLngLat(fiberNetworkData.office.coords)
        .addTo(map.current);

      const popup = new mapboxgl.Popup()
        .setHTML(`<h1 class="text-lg font-bold text-green-600">${fiberNetworkData.office.name}</h1><p class="text-sm">${fiberNetworkData.office.description}</p><p class="text-xs text-gray-600">${fiberNetworkData.office.subtitle}</p>`);
      officeMarker.setPopup(popup);

      // Agregar marcadores de postes de fibra óptica desde JSON
      const fiberPoles = fiberNetworkData.fiberPoles;

      fiberPoles.forEach(pole => {
        const poleMarkerEl = document.createElement('div');
        const poleMarkerInner = document.createElement('div');
        poleMarkerInner.className = pole.type === 'active' ? 'fiber-active-marker' : 'fiber-pole-marker';
        poleMarkerEl.appendChild(poleMarkerInner);

        const poleMarker = new mapboxgl.Marker(poleMarkerEl)
          .setLngLat(pole.coords)
          .addTo(map.current);

        const polePopup = new mapboxgl.Popup()
          .setHTML(`
            <div class="p-2">
              <h3 class="text-sm font-bold text-blue-600">${pole.name}</h3>
              <p class="text-xs text-gray-600">Estado: <span class="font-semibold ${pole.status === 'Activo' ? 'text-green-500' : 'text-yellow-500'}">${pole.status}</span></p>
              <p class="text-xs text-gray-600">Conexiones: ${pole.connections}</p>
              <p class="text-xs text-gray-500">Poste de fibra óptica</p>
            </div>
          `);
        poleMarker.setPopup(polePopup);
      });
      console.log('Animated office marker added');

      // Asegurar que el mapa se renderice completamente
      map.current.on('load', () => {
        console.log('Map loaded successfully');
        map.current.resize();

        // Agregar GeoJSON layer para el área de cobertura desde JSON
        const coverageArea = fiberNetworkData.coverageArea;

        // Agregar el layer al mapa
        map.current.addLayer({
          id: 'coverage-area',
          type: 'fill',
          source: {
            type: 'geojson',
            data: coverageArea
          },
          layout: {},
          paint: {
            'fill-color': '#3B82F6',
            'fill-opacity': 0.5
          }
        });

        // Agregar borde del área
        map.current.addLayer({
          id: 'coverage-border',
          type: 'line',
          source: {
            type: 'geojson',
            data: []
          },
          layout: {},
          paint: {
            'line-color': '#3B82F6',
            'line-width': 2
          }
        });

        // Agregar líneas de cableado de fibra óptica entre postes desde JSON
        const fiberCables = {
          type: 'FeatureCollection',
          features: fiberNetworkData.fiberCables.map(cable => ({
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: cable.coordinates
            },
            properties: {
              name: cable.name,
              capacity: cable.capacity,
              status: cable.status
            }
          }))
        };

        // Agregar layer de cables de fibra
        map.current.addLayer({
          id: 'fiber-cables',
          type: 'line',
          source: {
            type: 'geojson',
            data: fiberCables
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': [
              'match',
              ['get', 'status'],
              'active',
              '#2563EB',
              'maintenance',
              '#F59E0B',
              'backup',
              '#6B7280',
              '#3B82F6'
            ],
            'line-width': [
              'match',
              ['get', 'capacity'],
              '1Gbps',
              4,
              '500Mbps',
              3,
              '250Mbps',
              2,
              '100Mbps',
              1.5,
              2
            ],
            'line-opacity': 0.8
          }
        });

        // Agregar efecto de animación para cables activos
        map.current.addLayer({
          id: 'fiber-cables-glow',
          type: 'line',
          source: {
            type: 'geojson',
            data: fiberCables
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': [
              'match',
              ['get', 'status'],
              'active',
              '#60A5FA',
              'maintenance',
              '#FCD34D',
              'backup',
              '#9CA3AF',
              '#93C5FD'
            ],
            'line-width': [
              'match',
              ['get', 'capacity'],
              '1Gbps',
              2,
              '500Mbps',
              1.5,
              '250Mbps',
              1,
              '100Mbps',
              0.8,
              1
            ],
            'line-opacity': 0.4,
            'line-blur': 1
          }
        });
      });

    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  // Si no hay token, mostrar mensaje de error
  if (!mapboxToken) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#1D1D26]">
        <div className="text-center p-8">
          <div className="text-red-500 text-xl mb-4">⚠️ Error de Configuración</div>
          <div className="text-gray-400">
            <p>No se encontró el token de Mapbox.</p>
            <p>Por favor, configura la variable de entorno PUBLIC_MAPBOX_TOKEN.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden relative">
      {/* Barra de búsqueda */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="w-3/4 bg-white rounded-2xl shadow-lg p-2">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value);
              }}
              placeholder="Buscar una dirección..."
              className="w-full px-4 py-2 pr-10 text-gray-700 bg-transparent outline-none border-none focus:ring-0"
            />
            {isSearching && (
              <div className="absolute right-3 top-2.5">
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Resultados de búsqueda */}
          {searchResults.length > 0 && (
            <div className="mt-2 max-h-48 overflow-y-auto">
              {searchResults.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => handleLocationSelect(feature)}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 border-b border-gray-100 last:border-b-0"
                >
                  <div className="font-medium">{feature.text}</div>
                  <div className="text-xs text-gray-500">{feature.place_name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mapa */}
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Maps;
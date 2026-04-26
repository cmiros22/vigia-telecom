'use client';

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding';

// Verificar si el token está disponible
const mapboxToken = import.meta.env.PUBLIC_MAPBOX_TOKEN;

if (!mapboxToken) {
  console.error('Mapbox token not found. Please set PUBLIC_MAPBOX_TOKEN environment variable.');
}

mapboxgl.accessToken = mapboxToken || '';

const Maps = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Si no hay token, no inicializar el geocoder
  const geocoder = mapboxToken ? MapboxGeocoder({ accessToken: mapboxToken }) : null;

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
        center: [-95.2915, 18.4628], // Centro ajustado dentro de los límites
        zoom: 2,
        maxBounds: [
          [-95.310, 18.430], // Suroeste (área más amplia)
          [-95.270, 18.500]  // Noreste (área más amplia)
        ],
        maxBoundsViscosity: 1.0
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
          animation: pop-in 0.4s ease-out forwards, wobble 1.8s ease-in-out 0.4s forwards;
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
            width: 55px;
            height: 55px;
            opacity: 1;
            box-shadow: 0px 0px 10px rgba(110, 222, 116, 0.5);
          }
          85% {
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
      `;
      document.head.appendChild(officeStyle);

      const officeMarker = new mapboxgl.Marker(officeMarkerEl)
        .setLngLat([-95.2994972, 18.4635307])
        .addTo(map.current);

      const popup = new mapboxgl.Popup()
        .setHTML('<h1 class="text-lg font-bold text-green-600">Oficina Vigia Telecom</h1><p class="text-sm">Santiago Tuxtla, Veracruz</p><p class="text-xs text-gray-600">Centro de operaciones principal</p>');
      officeMarker.setPopup(popup);
      console.log('Animated office marker added');

      // Asegurar que el mapa se renderice completamente
      map.current.on('load', () => {
        console.log('Map loaded successfully');
        map.current.resize();

        // Agregar GeoJSON layer para el área de cobertura con múltiples polígonos
        const coverageArea = {
          type: 'FeatureCollection',
          features: [
            // Polígono 1 - Área principal
            {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-95.3165831584606, 18.44810747665089],
                    [-95.31569475847816, 18.449712300660806],
                    [-95.31524399174872, 18.450547133059587],
                    [-95.31495473672636, 18.451010444460763],
                    [-95.3147509141088, 18.451345152278407],
                    [-95.31439385053956, 18.45173342676965],
                    [-95.31344336972298, 18.45279977234634],
                    [-95.31400884858272, 18.453499133895463],
                    [-95.31606318317459, 18.453064579481463],
                    [-95.31673603143807, 18.453071369403105],
                    [-95.31768804015151, 18.45199855852701],
                    [-95.31830551309358, 18.4509815390371],
                    [-95.31812187582037, 18.45019281029947],
                    [-95.31734172109323, 18.449070789134154],
                    [-95.31729138853001, 18.448891742525575],
                    [-95.3170397257151, 18.44745936293681],
                    [-95.31691389430745, 18.44736387053993],
                    [-95.31658329699836, 18.448107167273605]
                  ]
                ]
              },
              properties: {
                name: 'Área de Cobertura Principal',
                description: 'Zona de cobertura principal'
              }
            },
            // Polígono 2 - Área secundaria
            {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-95.32600781434816,18.427280658836267],
                    [-95.32396574099043,18.428534975395493],
                    [-95.32376938778305,18.42872125925257],
                    [-95.32297088473914,18.42991347115928],
                    [-95.32117752544436,18.42966509436019],
                    [-95.32112516458925,18.42935462285743],
                    [-95.32140005907952,18.429019313003806],
                    [-95.32105971352024,18.42875851599989],
                    [-95.32085027009897,18.428497718599672],
                    [-95.31954124871574,18.42875851599989],
                    [
                      -95.31867729460285,
                      18.428460461795765
                    ],
                    [
                      -95.3184547609677,
                      18.428013379521317
                    ],
                    [
                      -95.3183107686158,
                      18.426982602070595
                    ],
                    [
                      -95.31876892609961,
                      18.42627471518294
                    ],
                    [
                      -95.31921399336993,
                      18.426013914015797
                    ],
                    [
                      -95.31929253465282,
                      18.425715855055373
                    ],
                    [
                      -95.31978996277867,
                      18.424958286205182
                    ],
                    [
                      -95.32023503004858,
                      18.424523614046578
                    ],
                    [
                      -95.32039211261475,
                      18.424387002569347
                    ],
                    [
                      -95.32087645052631,
                      18.425293603976556
                    ],
                    [
                      -95.32116443523088,
                      18.42567859764877
                    ],
                    [
                      -95.32151787100405,
                      18.426734221038828
                    ],
                    [
                      -95.32172731442533,
                      18.428299015553193
                    ],
                    [
                      -95.32171422421146,
                      18.42882061056011
                    ],
                    [
                      -95.32231637404794,
                      18.428833029469615
                    ],
                    [
                      -95.32218547190955,
                      18.426982602070595
                    ],
                    [
                      -95.32206765998502,
                      18.426088428675513
                    ],
                    [
                      -95.3220152991299,
                      18.425268765645384
                    ],
                    [
                      -95.32229019362018,
                      18.42396474822884
                    ],
                    [
                      -95.32329814008494,
                      18.423927490442935
                    ],
                    [
                      -95.3237301171414,
                      18.423455557791144
                    ],
                    [
                      -95.3247904244617,
                      18.423815717036803
                    ],
                    [
                      -95.32387410949369,
                      18.42574069332194
                    ],
                    [
                      -95.32404428227332,
                      18.426212619702596
                    ],
                    [
                      -95.32429299633625,
                      18.42641132515989
                    ],
                    [
                      -95.32416209419785,
                      18.426920506846656
                    ],
                    [
                      -95.32496059724133,
                      18.427019859194658
                    ],
                    [
                      -95.32518313087648,
                      18.426696963852876
                    ],
                    [
                      -95.32602090456162,
                      18.427268239814666
                    ]
                  ]
                ]
              },
              properties: {
                name: 'Área de Cobertura Secundaria',
                description: 'Zona de cobertura secundaria'
              }
            }
            // Agrega más polígonos aquí siguiendo el mismo formato
          ]
        };

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
            'fill-color': '#6EDE74',
            'fill-opacity': 0.2
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
            'line-color': '#6EDE74',
            'line-width': 2
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
        <div className="w-2/3 bg-white rounded-2xl shadow-lg p-2">
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
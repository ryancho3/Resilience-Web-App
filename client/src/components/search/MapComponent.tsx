import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from 'react-simple-maps';
import React from 'react';
import { geoCentroid, geoAlbersUsa } from 'd3-geo';

import allStates from 'client/src/assets/allstates.json';
import { red } from '@mui/material/colors';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
};

const offsetKeys = Object.keys(offsets);

interface MapComponentProps {
  selectedMapState: string;
  setSelectedMapState: (t: string) => void;
}

export default function MapComponent({
  selectedMapState,
  setSelectedMapState,
}: MapComponentProps) {
  const handleStateClick = (geo: any) => {
    setSelectedMapState(geo.properties.name);
  };

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                onClick={() => handleStateClick(geo)}
                style={{
                  default: {
                    fill:
                      selectedMapState === geo.properties.name
                        ? '#0D4E45' // yes - dark green
                        : '#ECEFF1', // no - grayish
                    stroke: '#607D8B',
                    strokeWidth: 0.75,
                    outline: 'none',
                  },
                  hover: {
                    fill:
                      selectedMapState === geo.properties.name
                        ? '#0D4E45' // yes - dark green
                        : '#0D4E45', // no - dark green
                    stroke: '#607D8B',
                    strokeWidth: 1,
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#0D4E45',
                    stroke: '#607D8B',
                    strokeWidth: 1,
                    outline: 'none',
                  },
                }}
              />
            ))}
            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.val === geo.id);
              return (
                <g key={`${geo.rsmKey}-name`}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id as keyof typeof offsets][0]}
                        dy={offsets[cur.id as keyof typeof offsets][1]}
                        connectorProps={{
                          stroke: 'black',
                          strokeWidth: 1,
                          strokeLinecap: 'round',
                        }}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
}

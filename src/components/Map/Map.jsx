import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import MyLocationOutlineIcon from '@mui/icons-material/MyLocationOutlined'
import Rating from '@mui/lab';

import useStyles from './styles.js';

const Map = ({ coordinates, setBounds, setCoordinates }) =>  {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: process.env.REACT_GOOGLE_MAP_API}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng})
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw,})
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;
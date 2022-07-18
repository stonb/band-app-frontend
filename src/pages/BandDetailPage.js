import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import React from 'react';

import 'antd/dist/antd.css';

const BandDetailPage = () => {

    const [band, setBand] = useState({band_id:'',band_name:'', country: '', genre: '', formed_date: 0});
    
    const {id} = useParams();

    useEffect(() => {
        getApiData();
    }, []);

    // Function to collect data
    const getApiData = async () => {
        const response = await fetch('/band/:' + id).then(response => response.json());
        await setBand(response);
    };

    return (
        <>
            <h1>Band Detail Page</h1>

            <Descriptions title="Band Information" bordered>
                <Descriptions.Item span={3} label="Name">{band.band_name}</Descriptions.Item>
                <Descriptions.Item label="Country">{band.country}</Descriptions.Item>
                <Descriptions.Item label="Genre">{band.genre}</Descriptions.Item>
                <Descriptions.Item label="Year">{band.formed_date}</Descriptions.Item>
            </Descriptions>
        </>
    );
};

export default BandDetailPage;
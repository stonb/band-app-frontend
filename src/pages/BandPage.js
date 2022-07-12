import { useState, useEffect } from 'react';
import { Table } from 'antd';
import React from 'react';

import 'antd/dist/antd.css';

const BandPage = () => {

    const [bands, setBands] = useState();

    const columns = [
        {
            title: 'Band',
            dataIndex: 'band_name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Country',
            dataIndex: 'country'
        },
        {
            title: 'Genre',
            dataIndex: 'genre'
        },
        {
            title: 'Date Formed',
            dataIndex: 'formed_date',
            sorter: {
                compare: (a, b) => a.formed_date - b.formed_date,
                multiple: 1,
            },
        }
    ];

    useEffect(() => {
        getApiData();
    }, []);

    // Function to collect data
    const getApiData = async () => {
        const response = await fetch('/band').then(response => response.json());
        setBands(response);
    };

    return (
        <>
            <h1>Bands Database</h1>
            <p></p>
            <Table columns={columns} dataSource={bands} pagination={false} rowKey={'band_id'} />
        </>
    );
};

export default BandPage;
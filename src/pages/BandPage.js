import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { useState, useEffect} from 'react';
import { Table } from 'antd';
import React from 'react';

import 'antd/dist/antd.css';

const BandPage = () => {

    const [bands, setBands] = useState();
    const [isVisibleModal, setisVisibleModal] = useState(false);
    const [modalData, setModalData] = useState([]);
    const navigate = useNavigate();

    const columns = [
        {
            title: 'Band',
            dataIndex: 'band_name',
            render: (_,record) =>{
                return (
                    <a 
                        onClick={() => {
                            navigate('/band/'+ record.band_id);
                        }}
                    >
                        {record.band_name}
                    </a>
                );
            },
        },
        {
            title: 'Country',
            dataIndex: 'country'
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (_, record) => 
            {
                return (
                    <Button 
                        onClick={() => {
                            showModal(record);
                        }}
                    >
                        Delete
                    </Button>
                );
            },
        }
    ];

    useEffect(() => {
        getApiData();
    }, []);

    // Function to collect data
    const getApiData = async () => {
        const response = await fetch('/band').then(response => response.json());
        await setBands(response);
    };

    const addBand = async () => {
        navigate('/band-edit');
    };

    const showModal = (record) => {
        setModalData(record);
        setisVisibleModal(true);

    };

    const handleModalOk = () => {
        setisVisibleModal(false);
        deleteBand(modalData.band_id);
        setModalData([]);
    };

    const handleModalCancel = () => {
        setisVisibleModal(false);
        setModalData([]);
    };

    async function deleteBand (band_id) {
        await fetch('/band/:' + band_id , { method: 'DELETE' }).then(response => console.log(response));
        getApiData();
    }

    return (
        <>
            <h1>Bands Database</h1>
            <p>
                <Button type='primary' size='large' shape='round'
                    onClick={addBand}>
                    <PlusOutlined /> Add
                </Button>
            </p>
            <p></p>
            <Table columns={columns} dataSource={bands} pagination={false} rowKey={'band_id'} />

            <Modal
                destroyOnClose={true}
                title="Warning"
                centered
                okText='Confirm'
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                visible={isVisibleModal}
                >
                <h2>Are you sure you want to delete {modalData.band_name}?</h2>
            </Modal>
        </>
    );
};

export default BandPage;
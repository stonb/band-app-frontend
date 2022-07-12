import React, {useState, useEffect} from 'react';
import { Card, Col, Row }           from 'antd';

import 'antd/dist/antd.css';

const { Meta } = Card;

const AlbumPage = () => {

    const [albums, setAlbums] = useState();

    useEffect(() => {
        getApiData();
    }, []);

    // Function to collect data
    const getApiData = async () => {
        const response = await fetch('/album').then(response => response.json());
        setAlbums(response);
    };

    return (
        <>
            <h1>Albums Page</h1>
            <p></p>
            <div className="site-card-wrapper">
                {/* Display all products from database */}
                <Row gutter={[16, 16]}>
                    {albums?.map((data,key) => {
                        var imagesrc = "./images/"+data.album_cover;
                        return (
                            <React.Fragment key={key}>
                                <Col xs={8} md={6} xl={4}>
                                    <Card 
                                        hoverable
                                        style={{width: "100%"}}
                                        cover={<img alt="example" src={imagesrc} onError={(e)=>{e.target.onerror = null; e.target.src="./images/album_cover404.jpg"}} />}
                                        >
                                        <Meta description={data.album_name} />
                                    </Card>
                                </Col>
                            </React.Fragment>
                        );
                    })}
                </Row>


            </div>
        </>
    );
};

export default AlbumPage;
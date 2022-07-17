import { Button, Form, Input} from 'antd';
import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import 'antd/dist/antd.css';

const EditBandPage = () => {

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const [band, setBand] = useState('');
    const [country, setCountry] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState(0);

    const navigate = useNavigate();

    const handleSubmit = async () => {

        const postObj = {"band": band, "country": country, "genre": genre, "year": year};

        if(band !== '' && country !== '' && genre !== '' && year !== 0)
        {
            // POST request using fetch with async/await        
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postObj)
            };
            
            await fetch('/band', requestOptions).then(response => console.log(response));
        
            setBand('');
            setCountry('');
            setGenre('');
            setYear(0); 

            navigate('/band')
        }
        else
        {
            //TODO validate for for dirty/empty
            console.log("POST: INVALID DATA");
        }
        
    };

    const formItemLayout =
        formLayout === 'horizontal'
        ? {
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 14,
            },
            }
        : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
        ? {
            wrapperCol: {
                span: 14,
                offset: 4,
            },
            }
        : null;


    const cancelForm = () => {
        setBand('');
        setCountry('');
        setGenre('');
        setYear(0); 
        navigate('/band')
    }

    return (
        <>
            <h1>Edit Band Page</h1>
            <p></p>
            {/* form start */}
            <Form
                {...formItemLayout}
                layout={'horizontal'}
                form={form}
                onSubmitCapture={handleSubmit}
                >
                <Form.Item label="Band Name">
                    <Input
                        id='band'
                        name='band'
                        size='large' 
                        value={band}
                        onChange={event => setBand(event.target.value)}
                        placeholder="Type the band name" 
                    />
                </Form.Item>
                <Form.Item label="Country">
                    <Input 
                        id='country'
                        name='country'
                        size='large' 
                        value={country}
                        onChange={event => setCountry(event.target.value)}
                        placeholder="Type the country of origin of the band" 
                    />
                </Form.Item>
                <Form.Item label="Genre">
                    <Input 
                        id='genre'
                        name='genre'
                        size='large' 
                        value={genre}
                        onChange={event => setGenre(event.target.value)}
                        placeholder="Type the genre of music of the band" 
                    />
                </Form.Item>
                <Form.Item label="Year">
                    <Input 
                        id='year'
                        name='year'
                        style={{ width: '100%' }} 
                        maxLength={4} 
                        size='large'
                        value={year}
                        onChange={event => setYear(event.target.value)}
                        placeholder="Type the year the band was formed Eg. 1992" 
                    />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button 
                        type='primary' size='large' shape='round'
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    
                    <Button 
                        type='primary' size='large' shape='round'
                        onClick={cancelForm}
                        danger
                    >
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
            {/* form end */}

        </>
    );
};

export default EditBandPage;
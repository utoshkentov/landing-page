import React from 'react';
import './TextDiv.css';
import {Button} from "antd";

const TextDiv = (props) => {
    return (
        <div className='text-center main-div'>
            <h1 className='garden'>Gardens</h1>
            <p style={{fontFamily: 'Times New Roman', fontSize: '20px', letterSpacing: '3px'}}>residence</p>
            <Button>
                ВЫБРАТЬ КВАРТИРУ
            </Button>
        </div>
    );
}

export default TextDiv;

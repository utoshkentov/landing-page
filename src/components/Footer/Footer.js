import React from 'react';
import {PhoneOutlined} from "@ant-design/icons";

import './Footer.css';
import SendOutlined from "@ant-design/icons/lib/icons/SendOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";

const Footer = (props) => {
    return (
        <div className='d-flex justify-content-between footer-past' style={{width: '80%'}}>
            <div className='d-flex phone-call'>
                <div>
                    <PhoneOutlined style={{backgroundColor: 'red', padding: '5px', borderRadius: '15px', color: 'white', marginTop: '10px'}} />
                </div>
                <div className='phone d-block text-white'>
                    <span style={{color: 'black'}}>71</span>202 22 22
                    <div style={{color:'black'}}>Заказать Звонок</div>
                </div>
            </div>
            <div className='d-flex justify-content-around text-center content-side'>
                <div>
                    <h6 className='text-white mr-5 content-side'>ПРЕЗЕНТАЦИЯ</h6>
                </div>
                <div>
                    <h6 className='text-white content-side'>ШОПИНГ-АВЕНЮ</h6>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <a href="https://telegram.me/" className='link-soc'>
                    <SendOutlined style={{fontSize: '20px'}} />
                </a>
                <a href="https://facebook.com" className='link-soc'>
                    <FacebookOutlined style={{fontSize: '20px'}} />
                </a>
                <a href="https://instagram.com" className='link-soc'>
                    <InstagramOutlined style={{fontSize: '20px'}} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
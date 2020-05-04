import React, {useState} from 'react';
import './Navbar.css';
import logo from './logo.png'
import {Link} from "react-router-dom";
import {MdMenu} from "react-icons/all";
import {Button, Drawer, List} from 'antd';
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import SendOutlined from "@ant-design/icons/lib/icons/SendOutlined";


const pages = [
    {
        id: '1',
        name: 'Boulverad',
        to: '/home'
    },
    {
        id: '2',
        name: 'Gardens',
        to: '/gardens'
    },
    {
        id: '3',
        name: 'Tashkent City',
        to: '/city'
    },
    {
        id: '4',
        name: 'Новости',
        to: '/news'
    },
    {
        id: '5',
        name: 'О нас',
        to: '/about'
    },
    {
        id: '6',
        name: 'Контакты',
        to: '/contact'
    },
]


const NavbarPage = (props) => {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    }

    return (
        <div className="navbarMain">
            <div style={{width: '30px'}}>
                <img src={logo} alt="logo" style={{width: '130px'}}/>
            </div>
            <div className="text-logo">
                <div className="item">
                    первый застройщик в
                </div>
                <div className='item2'>
                    Tashkent City
                </div>
            </div>
            <div className="languages">
                <div>
                    <Link className='Uzbek' to='/uz' style={{color: 'white', fontSize: '15px', marginRight: '10px'}}>
                        Uz
                    </Link>
                </div>
                <div>
                    <Link className='English' to='/en' style={{color: 'white', fontSize: '15px', marginRight: '10px'}}>
                        En
                    </Link>
                </div>

                <div
                    className='menu-button'
                    style={{color: 'white', fontSize: '20px'}}
                    onClick={showDrawer}
                >
                    <MdMenu style={{marginTop: 0, paddingTop: 0}}/>
                </div>
                <Drawer
                    placement="top"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    width='100%'
                    height='100%'
                    style={{opacity: '0.8'}}
                >
                    <div className='container text-center w-50'>
                        <div className='d-flex text-center justify-content-center closed' onClick={onClose}>
                            <CloseOutlined style={{top: '20px'}} />
                            <h6 style={{margin: 0, padding: 0}}>Закрыть</h6>
                        </div>
                        <hr/>
                        <div className='mt-3'>
                            <Button component={Link} to='/uz' color={{color: 'black'}} type='link'>
                                UZ
                            </Button>
                            <Button component={Link} to='/en' style={{color: 'black'}} type='link'>
                                EN
                            </Button>
                        </div>
                        <List>
                            {pages.map(page => (
                                <List.Item key={page.id} className='text-center justify-content-center'>
                                    <Link to={page.to}>
                                        <h5 className='items'>
                                            {page.name}
                                        </h5>
                                    </Link>
                                </List.Item>
                            ))}
                        </List>
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
                </Drawer>
            </div>
        </div>
    );
}

export default NavbarPage;
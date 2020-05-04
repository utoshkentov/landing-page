import React from 'react';
import { Tabs } from 'antd';
import './TabsPage.css';

const { TabPane } = Tabs;

const TabPage = (props) => {
    const callback = (key) => {
        console.log(key);
    }
    return (
        <div className='tabs'>
            <Tabs defaultActiveKey="1" onChange={callback} style={{color: 'white'}}>
                <TabPane style={{color: 'white'}} tab="BOULEVARD" key="1" />
                <TabPane style={{color: 'white'}} tab="GARDENS" key="2" />
                <TabPane style={{color: 'white'}} tab="NEW PROJECT" key="3" />
            </Tabs>
        </div>
    );
}

export default TabPage;
// Libraries
import React, {Component} from 'react';
import {Layout, Avatar, Typography} from 'antd';

// Icon
import {DingtalkOutlined, UserOutlined} from '@ant-design/icons';

class DefaultHeader extends Component {
    render() {
        return (
            <Layout.Header className='Default-header'>
                <div className='flex-row '>
                    <DingtalkOutlined 
                        style={{
                            fontSize: 40,
                            color: '#fff',
                            paddingRight: '5px',
                            borderRight: '3px solid #fff'
                        }} /> 
                </div>
                <div className='flex-row'>
                    <div className='name-user'>Truong vi</div>
                    <Avatar size="default" icon={<UserOutlined />} />
                </div>
            </Layout.Header>
        );
    }
}

export default DefaultHeader;
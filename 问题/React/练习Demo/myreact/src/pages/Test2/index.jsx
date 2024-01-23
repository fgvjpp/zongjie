import React, { Component } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default class Test2 extends Component {
    componentDidMount() {
        const { match: { params }, location: { search } } = this.props
        if (JSON.stringify(params) !== "{}") {
            console.log(params);
        } else if (JSON.stringify(search) !== "{}") {
            console.log(search);
        }
        console.log(this.props);
    }
    render() {
        return (
            <div>
                Test2
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size="small">
                    Download
                </Button>
            </div>
        )
    }
}

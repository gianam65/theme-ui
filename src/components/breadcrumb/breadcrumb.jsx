import './breadcrumb.scss';
import { Breadcrumb } from 'antd';

const BreadCrumb = () => {
    return (
        <Breadcrumb >
            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href="/">Product</a></Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default BreadCrumb;
import React from 'react';
import Container from './Container.jsx';
import Table from './Table.jsx';

const Components = {
    container: Container,
    table: Table,
};

const Component = (type, props) => {
    return React.createElement(Components[type], props);
};


export default Component;

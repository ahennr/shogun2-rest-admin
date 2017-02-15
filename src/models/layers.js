import React from 'react';
import { List, Datagrid, TextField, BooleanField } from 'admin-on-rest/lib/mui';



export const LayerList = (props) => (
    <List title="All available layers" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <BooleanField source="hoverable" />
            <TextField source="metadataIdentifier" />
            <BooleanField source="chartable" />
            <BooleanField source="dataType" />
            <BooleanField source="spatiallyRestricted" />
        </Datagrid>
    </List>
);

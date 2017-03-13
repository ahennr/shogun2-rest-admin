import React from 'react';
import { List, Datagrid, TextField, BooleanField } from 'admin-on-rest/lib/mui';

export const LayerAppearanceList = (props) => (
    <List title="All available layer appearances" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="attribution" />
            <BooleanField source="hoverable" />
            <TextField source="hoverTemplate" />
            
            <TextField source="name" />
            <TextField source="maxResolution" />
            <TextField source="minResolution" />
            <TextField source="opacity" />
            <BooleanField source="visible" />
        </Datagrid>
    </List>
);

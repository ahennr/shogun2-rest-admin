import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui';

export const MapConfigList = (props) => (
    <List title="All available map configs" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

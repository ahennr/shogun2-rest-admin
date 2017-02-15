import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui';

export const MapControlList = (props) => (
    <List title="All available map controls" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="mapControlName" />
        </Datagrid>
    </List>
);

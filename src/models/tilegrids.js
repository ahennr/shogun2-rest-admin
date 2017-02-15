import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui';

export const TileGridList = (props) => (
    <List title="All available tile grids" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="type" />
            <TextField source="tileSize" />
        </Datagrid>
    </List>
);

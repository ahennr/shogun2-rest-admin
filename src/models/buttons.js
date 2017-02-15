import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui';

export const ButtonList = (props) => (
    <List title="All available buttons" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

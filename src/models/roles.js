import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui';

export const RolesList = (props) => (
    <List title="All available roles" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
        </Datagrid>
    </List>
);

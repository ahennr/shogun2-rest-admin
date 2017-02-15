import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui';

export const ModuleList = (props) => (
    <List title="All available modules" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

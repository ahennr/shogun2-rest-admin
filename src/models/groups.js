import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui';

export const GroupList = (props) => (
    <List title="All available groups" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    BooleanField,
    UrlField,
    ChipField,
   ReferenceManyField,
    SingleFieldList
} from 'admin-on-rest/lib/mui';

//import ReferenceArrayField from '../additionalComponents/ReferenceArrayField.js';

export const ApplicationList = (props) => (
    <List title="All available applications" {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <DateField source="created"/>
            <DateField source="modified"/>
            <TextField source="description"/>
            <TextField source="language"/>
            <BooleanField source="open"/>
            <BooleanField source="active"/>
            <UrlField source="url"/>
            <ReferenceManyField label="Modules" reference="modules" source="activeTools" target="id">
                <SingleFieldList>
                    <ChipField source="name"/>
                </SingleFieldList>
            </ReferenceManyField>
        </Datagrid>
    </List>
);

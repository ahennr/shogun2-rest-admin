import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ChipField,
    ReferenceManyField,
    SingleFieldList,
    EditButton,
    Edit,
    DisabledInput,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput
} from 'admin-on-rest/lib/mui';

const GroupTitle = ({record}) => {
  return <span>Group {record
            ? `"${record.name}"`
            : ''}</span>;
};

export const GroupList = (props) => (
    <List title="All available groups" {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <ReferenceManyField label="Owner" reference="users" source="owner_id" target="id">
                <SingleFieldList>
                    <ChipField source="accountName"/>
                </SingleFieldList>
            </ReferenceManyField>
            <ReferenceManyField label="Members" reference="users" source="user_id" target="id">
                <SingleFieldList>
                    <ChipField source="accountName"/>
                </SingleFieldList>
            </ReferenceManyField>
            <EditButton/>
        </Datagrid>
    </List>
);

export const GroupEdit = (props) => (
    <Edit title={< GroupTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="name"/>
            <ReferenceInput label="Members" source="member_id" reference="users" target="id">
                <SelectInput optionText="accountName"/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

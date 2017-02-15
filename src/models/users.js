import React from 'react';
import {
    Filter,
    List,
    Edit,
    Create,
    Datagrid,
    EmailField,
    TextField,
    EditButton,
    DisabledInput,
    LongTextInput,
    ReferenceInput,
    SimpleForm,
    TextInput,
    SelectInput,
    BooleanField,
    BooleanInput,
    ChipField,
    ReferenceManyField,
    SingleFieldList
} from 'admin-on-rest/lib/mui';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
    </Filter>
);

export const UserList = (props) => (
    <List title="All users" {...props} filters={< UserFilter />}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="firstName"/>
            <TextField source="lastName"/>
            <TextField source="accountName"/>
            <EmailField source="email"/>
            <TextField source="language"/>
            <BooleanField source="active"/>
            <ReferenceManyField label="Roles" reference="roles" source="role_id" target="id">
              <SingleFieldList>
                 <ChipField source="description" />
              </SingleFieldList>
            </ReferenceManyField>
            <EditButton/>
        </Datagrid>
    </List>
);

const UserTitle = ({record}) => {
    return <span>User {record
            ? `${record.firstName} ${record.lastName} (${record.accountName})`
            : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={< UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <DisabledInput source="accountName"/>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="email"/>
            <SelectInput source="language" choices={[
                {
                    id: 'german',
                    name: 'deutsch'
                }, {
                    id: 'english',
                    name: 'englisch'
                }, {
                    id: 'mongolian',
                    name: 'mongolian'
                }
            ]}/>
          <BooleanInput label="Active" source="active"/>
        </SimpleForm>
    </Edit>
);

export const UserAdd = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <LongTextInput source="body"/>
        </SimpleForm>
    </Create>
);

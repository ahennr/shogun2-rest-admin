import React from 'react';
import {
    Datagrid,
    Edit,
    Create,
    EditButton,
    List,
    NumberField,
    DisabledInput,
    TextInput,
    SelectInput,
    SimpleForm,
    TextField
  } from 'admin-on-rest/lib/mui';


import Ol3Map from '../map/Ol3Map.js';
import DisabledMapPropertyField from './DisabledMapPropertyField';

export const MapConfigList = (props) => (
    <List title="All available map configs" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="zoom" options={{ maximumFractionDigits: 0}} />
            <NumberField source="rotation" options={{ maximumFractionDigits: 2 }} />
            <TextField source="projection" />
            <NumberField source="minResolution" options={{ maximumFractionDigits: 6 }} />
            <NumberField source="maxResolution" options={{ maximumFractionDigits: 6 }} />
            <EditButton />
        </Datagrid>
    </List>
);

const MapConfigTitle = ({record}) => {
  return <span>MapConfig {record
        ? `${record.id} with projection ${record.projection}`
        : ''}</span>;
};

// edit form
export const MapConfigEdit = (props) => (
    <Edit title={< MapConfigTitle />} actions={null} {...props}>
        <SimpleForm>
            <Ol3Map/>
            <DisabledInput source="id"/>
            <TextInput source="name" />
            <SelectInput source="projection" choices={[
              {
                id: '4326',
                name: 'WGS84 - World Geodetic System 1984'
              }, {
                id: '3857',
                name: 'WGS 84 / Pseudo-Mercator -- Spherical Mercator'
              }, {
                id: '25832',
                name: 'ETRS89 / UTM zone 32N'
              }, {
                id: '900913',
                name: 'Google Maps Global Mercator -- Spherical Mercator'
              }
            ]}/>
            <DisabledMapPropertyField sourceProp="zoom"/>
            <DisabledMapPropertyField sourceProp="centerx" title="X Coordinate of center"/>
            <DisabledMapPropertyField sourceProp="centery" title="Y Coordinate of center"/>
            <DisabledMapPropertyField sourceProp="rotation"/>
        </SimpleForm>
    </Edit>
);

export const MapConfigAdd = (props) => (
  <Create {...props}>
        <SimpleForm>
            <Ol3Map/>
            <DisabledInput source="id"/>
            <TextInput source="name" />
            <SelectInput source="projection" choices={[
              {
                id: '4326',
                name: 'WGS84 - World Geodetic System 1984'
              }, {
                id: '3857',
                name: 'WGS 84 / Pseudo-Mercator -- Spherical Mercator'
              }, {
                id: '25832',
                name: 'ETRS89 / UTM zone 32N'
              }, {
                id: '900913',
                name: 'Google Maps Global Mercator -- Spherical Mercator'
              }
            ]}/>
            <DisabledMapPropertyField sourceProp="zoom"/>
            <DisabledMapPropertyField sourceProp="centerx" title="X Coordinate of center"/>
            <DisabledMapPropertyField sourceProp="centery" title="Y Coordinate of center"/>
            <DisabledMapPropertyField sourceProp="rotation"/>
        </SimpleForm>
  </Create>
);

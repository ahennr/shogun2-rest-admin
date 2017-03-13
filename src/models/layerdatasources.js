import React from 'react';
import { List, Datagrid, TextField, UrlField, ReferenceField } from 'admin-on-rest/lib/mui';

export const LayerDataSourceList = (props) => (
    <List title="All available layer datasources" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="type" />
            <UrlField source="url" />
            <TextField source="width" />
            <TextField source="height" />
            <TextField source="layerNames" />
            <TextField source="layerStyles" />
              <ReferenceField label="TileGrid" source="id" reference="tilegrids">
                  <TextField source="id" />
              </ReferenceField>
        </Datagrid>
    </List>
);

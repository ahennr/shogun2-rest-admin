import React from 'react';

import {Admin, Resource} from 'admin-on-rest';

// import { Delete } from 'admin-on-rest/lib/mui';

/**
 * Model imports
 */
// import { PostList, PostEdit, PostCreate } from './posts';
import {LayerList} from './models/layers';
import {UserList, UserAdd, UserEdit} from './models/users';
import {GroupList, GroupEdit} from './models/groups';
import {ModuleList} from './models/modules';
import {TileGridList} from './models/tilegrids';
import {ApplicationList} from './models/application'
import {ButtonList} from './models/buttons'
import {MapConfigList} from './models/mapconfig'
import {MapControlList} from './models/mapcontrol'
import {RolesList} from './models/roles'
import authClient from './auth/authClient';

// SHOGUN2 REST client
import shogun2RestClient from './shogun2restclient/restclient';

//restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
//<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete}/>

// BACKEND: TODO: Authorization
// const SHOGUN2_REST_URL = 'http://localhost:8080/rest-sandbox/rest';
const SHOGUN2_REST_URL = 'http://localhost:8080/momo/rest';

// THEME
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darken} from 'material-ui/utils/colorManipulator';
import {grey100, grey400, grey500} from 'material-ui/styles/colors';
import {appConfig} from './config/admin.config';
const {primaryColor, secondaryColor} = appConfig;
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: primaryColor,
        primary2Color: darken(primaryColor, 0.3),
        primary3Color: grey400,
        accent1Color: secondaryColor,
        accent2Color: grey100,
        accent3Color: grey500
    },
    radioButton: {
        borderColor: primaryColor,
        checkedColor: secondaryColor
    },
    appBar: {
        height: 48
    }
});

const App = () => (
    <Admin authClient={authClient} restClient={shogun2RestClient(SHOGUN2_REST_URL)} title="SHOGun2 REST administration dashboard" theme={muiTheme}>
        <Resource name="applications" list={ApplicationList}/>
        <Resource name="layers" list={LayerList}/>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserAdd}/>
        <Resource name="groups" list={GroupList} edit={GroupEdit}/>
        <Resource name="roles" list={RolesList}/>
        <Resource name="mapconfigs" list={MapConfigList}/>
        <Resource name="mapcontrols" list={MapControlList}/>
        <Resource name="modules" list={ModuleList}/>
        <Resource name="buttons" list={ButtonList}/>
        <Resource name="tilegrids" list={TileGridList}/>
    </Admin>
);

export default App;

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darken} from 'material-ui/utils/colorManipulator';
import {grey100, grey400, grey500} from 'material-ui/styles/colors';
import {appConfig} from '../config/admin.config';
const {primaryColor, secondaryColor} = appConfig;
const shogun2AdminTheme = getMuiTheme({
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

export default shogun2AdminTheme;

import { CHANGE_MAPVIEW } from '../actions/MapViewChangeAction';

export default (previousState = {}, { type, mapView }) => {
  switch (type) {
    case CHANGE_MAPVIEW:
      console.log('CHANGE_MAPVIEW: ', mapView, "\t ",previousState);
      return { ...previousState, mapView };
    default:
      return previousState;
  }
};

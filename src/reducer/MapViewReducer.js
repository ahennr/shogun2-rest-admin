import { CHANGE_MAPVIEW } from '../actions/MapViewChangeAction';

export default (previousState = {}, { type, payload }) => {
  switch (type) {
    case CHANGE_MAPVIEW:
      console.log('CHANGE_MAPVIEW: ',payload);
      return { ...previousState, mapView: payload };
    default:
      return previousState;
  }
};

import navReducer, { setOrigin, setDestination, setTravelTimeInformation } from './navSlice';

describe('navSlice', () => {
  const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
  };

  it('should handle initial state', () => {
    expect(navReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setOrigin', () => {
    const actual = navReducer(initialState, setOrigin({ lat: 1, lng: 1 }));
    expect(actual.origin).toEqual({ lat: 1, lng: 1 });
  });

  it('should handle setDestination', () => {
    const actual = navReducer(initialState, setDestination({ lat: 2, lng: 2 }));
    expect(actual.destination).toEqual({ lat: 2, lng: 2 });
  });

  it('should handle setTravelTimeInformation', () => {
    const actual = navReducer(initialState, setTravelTimeInformation({ distance: '5 km', duration: '10 mins' }));
    expect(actual.travelTimeInformation).toEqual({ distance: '5 km', duration: '10 mins' });
  });
});

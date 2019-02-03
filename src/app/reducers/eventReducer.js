import { createReducer } from "../common/util/reducerUtil";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../actions/types";

const initialState = [
  {
    id: 1,
    title: "Trip to Amsterdam",
    date: "2019-01-17",
    category: "culture",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti consequatur maiores, sed officia vel sint, similique explicabo dolore mollitia beatae accusamus harum voluptatum veritatis debitis, velit suscipit fugit. Similique, accusamus.",
    city: "UK, London",
    venue: "Tower of London",
    hostedBy: "Bob",
    hostPhotoUrl: "http://unsplash.it/50/50?gravity=center",
    attendees: [
      {
        id: 1,
        name: "Bob",
        photoUrl: "http://unsplash.it/30/30?gravity=center"
      },
      {
        id: 2,
        name: "Joe",
        photoUrl: "http://unsplash.it/30/30?gravity=center"
      }
    ]
  },
  {
    id: 2,
    title: "Trip to Australia",
    date: "2019-01-17",
    category: "culture",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti consequatur maiores, sed officia vel sint, similique explicabo dolore mollitia beatae accusamus harum voluptatum veritatis debitis, velit suscipit fugit. Similique, accusamus.",
    city: "Sydney, Australia",
    venue: "Tower of Sydney, Australia",
    hostedBy: "Joe",
    hostPhotoUrl: "http://unsplash.it/50/50?gravity=center",
    attendees: [
      {
        id: 1,
        name: "Bob",
        photoUrl: "http://unsplash.it/30/30?gravity=center"
      },
      {
        id: 2,
        name: "Joe",
        photoUrl: "http://unsplash.it/30/30?gravity=center"
      }
    ]
  }
];

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

export const updateEvent = (state, payload) => {
  return state.map(event => {
    if (event.id === payload.event.id) {
      return Object.assign({}, payload.event);
    } else {
      return event;
    }
  });
};

export const deleteEvent = (state, payload) => {
  return state.filter(event => event.id !== payload.eventId);
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});

import { ICoordinate } from "./index.models";

export const initialState = [
   [5, 6, 7],
   [8, 1, 2],
   [3, 4, null],
];

// export const initialState = [
//   [3, 1, 2],
//   [4, 5, null],
//   [7, 8, 6],
// ];

// export const initialState = [
//    [6, null, 2],
//    [3, 4, 8],
//    [7, 1, 5],
// ];

export const finalState = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, null],
];

export const directions: Array<ICoordinate> = [
   { x: 0, y: -1, name: "⇐" },
   { x: -1, y: 0, name: "⇑" },
   { x: 0, y: 1, name: "⇒" },
   { x: 1, y: 0, name: "⇓" },
];

export const MAX_DEPTH_SIZE = 3000;

export const CLEAN_RESULT = {
   currentState: null,
   moves: 0,
   settled: 0,
   dropped: 0,
   depth: 0,
   haveSolution: false,
};

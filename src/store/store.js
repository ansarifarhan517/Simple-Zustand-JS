import { create } from 'zustand';
import { createRightCardSlice } from './Slice/RightCardSlice';
import { createLeftCardSlice } from './Slice/LeftCardSlice';
import { createLoginSlice } from './Slice/LoginSlice';

const dataSlice = () => ({
  tasks: [
    { id: 1, title: "Learn HTML", completed: true },
    { id: 2, title: "Learn CSS", completed: false },
    { id: 3, title: "Learn JS", completed: false }
  ],
});


const useStore = create((...a) => ({
  ...createRightCardSlice(...a),
  ...createLeftCardSlice(...a),
  ...dataSlice(...a),
  ...createLoginSlice(...a)

}
));
export { useStore };



// let a =[{id: 1, title: 'Learn HTML', completed: true},
// {id: 2, title: 'Learn CSS', completed: false},
// {id: 3, title: 'Learn JS', completed: false}]
// let taskid = 1
// a.map()
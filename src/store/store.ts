import { create, StateCreator } from 'zustand';
import { createRightCardSlice, createTaskStateSlice, RightCardActions, TaskState } from './Slice/RightCardSlice';
import { createLeftCardSlice, TLeftCardState_Actions } from './Slice/LeftCardSlice';
import { createLoginSlice, LoginState_Actions } from './Slice/LoginSlice';


const useStore = create<LoginState_Actions & TaskState & RightCardActions & TLeftCardState_Actions >()((...a) => ({
  ...createRightCardSlice(...a),
  ...createLeftCardSlice(...a),
  ...createLoginSlice(...a),
  ...createTaskStateSlice(...a)
}
));
export { useStore };

import { StateCreator } from "zustand";

// Define the TaskState slice
export type TaskState = {
  tasks: {
    id: number;
    title: string;
    completed: boolean;
  }[];
};

// Define the RightCardActions slice
export type RightCardActions = {
  taskInCompletioner: (taskid: number) => void;
};

// Create the TaskState slice
export const createTaskStateSlice: StateCreator<TaskState> = (set) => ({
  tasks: [
    { id: 1, title: "Learn HTML", completed: true },
    { id: 2, title: "Learn CSS", completed: false },
    { id: 3, title: "Learn JS", completed: false }
  ],
});

// Create the RightCardActions slice
export const createRightCardSlice: StateCreator<RightCardActions & TaskState , [] ,[], RightCardActions> = (set) => ({
  taskInCompletioner: (taskid) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskid ? { ...task, completed: false } : task
      ),
    }),
  ),
});

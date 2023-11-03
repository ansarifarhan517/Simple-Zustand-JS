import { create } from 'zustand';

const store = (set) => ({
  tasks: [
    { id: 1, title: "Learn HTML", completed: true },
    { id: 2, title: "Learn CSS", completed: false },
    { id: 3, title: "Learn JS", completed: false }
  ],
  taskCompletioner: (taskid) => { 
    return set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === taskid ? { ...task, completed: !task.completed } : task
    )
  }))},
  loggedIn: true,
  loginChanger:() => set((state) => ({ loggedIn: !state.loggedIn }) )
  
});

const useStore = create(store);
export { useStore };


 
// let a =[{id: 1, title: 'Learn HTML', completed: true},
// {id: 2, title: 'Learn CSS', completed: false},
// {id: 3, title: 'Learn JS', completed: false}]
// let taskid = 1
// a.map()
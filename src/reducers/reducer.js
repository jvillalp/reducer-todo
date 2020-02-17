import { statement } from "@babel/template";

export const initialState = {
  tasks: [
    {
      item: "Finish Project",
      completed: false,
      id: Date.now()
    },
    {
      item: "Eat fav snack",
      completed: false,
      id: Date.now()
    }
  ]
};
export const reducter = () => {
    switch(Action.type){
        case 'ADD_TODO':{

        };
        case 'DELETE_TODO':{

        };
        default:
        return state;
    }
};

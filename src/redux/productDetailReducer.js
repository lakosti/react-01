//створюємо початковий стан нашого редюсера -- те що було гетером стейту
// РЕДЬЮСЕРИ - ЦЕ ІМУТАБЕЛЬНІ ЗМІННІ
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  seeMore: null,
  isLoading: false,
  isError: false,
  counter: 0,
  contacts: [], //*HW
  tasks: [],
};

// INITIAL_STATE.isError = false ----- //* mutable change -- wrong

// const NEW_STATE = { //* immutable change -- correct
//    ...INITIAL_STATE,
// isError: false
//}

// export const productDetailsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "details/setSeeMore": {
//       return {
//         ...state,
//         seeMore: action.payload,
//       };
//     }
//     case "details/setIsLoading": {
//       return { ...state, isLoading: action.payload };
//     }
//     case "details/setIsError": {
//       return { ...state, isError: action.payload };
//     }
//     //? ДОДАВАННЯ КОНТАКТІВ
//     case "contacts/addContact": {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     //? ВИДАЛЕННЯ КОНТАКТІВ
//     case "contacts/deleteContact": {
//       return {
//         ...state,
//         contacts: state.contacts.filter((contact) => contact.id !== action.payload),
//       };
//     }
//     default:
//       return state;
//   }
// };

const productsDetailsSlice = createSlice({
  // Ім'я слайсу
  name: "productsDetails",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    setSeeMore(state, action) {
      state.seeMore = action.payload; //*ПІД КАПОТОМ  МУТАБЕЛЬНИЙ КОД ПЕРЕТВОРЮЄ В ІМУТАБЕЛЬНИЙ
      // return { ...state, isLoading: action.payload };
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
    addContact(state, action) {
      // state.contacts.push(action.payload); //* 1 варіант
      state.contacts = [...state.contacts, action.payload]; //* 2
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
  },
  toggleCompleted(state, action) {
    //перебрати таски + тогл
    // [{id:1, completed:false, {id:2, completed:true}}]
    // [{id:1, completed:true, {id:2, completed:true}}]
    state.tasks = state.tasks.map((task) => {
      if (task.id === action.payload) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
  },
});

// Генератори actionCreator
export const { setSeeMore, setIsLoading, setIsError, addContact, deleteContact } =
  productsDetailsSlice.actions;

// Редюсер слайсу
export const productsDetailsReducer = productsDetailsSlice.reducer;

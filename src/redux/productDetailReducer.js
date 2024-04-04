//створюємо початковий стан нашого редюсера -- те що було гетером стейту
// РЕДЬЮСЕРИ - ЦЕ ІМУТАБЕЛЬНІ ЗМІННІ

const INITIAL_STATE = {
  seeMore: null,
  isLoading: false,
  isError: false,
};

// INITIAL_STATE.isError = false ----- //* mutable change -- wrong

// const NEW_STATE = { //* immutable change -- correct
//    ...INITIAL_STATE,
// isError: false
//}

export const productDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "details/setSeeMore": {
      return {
        ...state,
        seeMore: action.payload,
      };
    }
    case "details/setIsLoading": {
      return { ...state, isLoading: action.payload };
    }
    case "details/setIsError": {
      return { ...state, isError: action.payload };
    }
    //? ДОДАВАННЯ КОНТАКТІВ
    case "contacts/addContact": {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    //? ВИДАЛЕННЯ КОНТАКТІВ
    case "contacts/deleteContact": {
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

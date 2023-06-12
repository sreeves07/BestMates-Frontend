import { createContext, useContext, useReducer } from "react";
import { useContextAuthProvider } from '../../Firebase/context';

export const ChatContext = createContext();
export function useContextChatProvider() {
  return useContext(ChatContext);
}

export default function ChatContextProvider({ children }) {
  const { user } = useContextAuthProvider()
  const INITIAL_STATE = {
    chatId: "null",
    user: {}
  }

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId: user.uid > action.payload.uid ? user.uid + action.payload.uid : action.payload.uid + user.uid
        };

      default:
        return state;
    }
  }

  const [ state, dispatch ] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch}}>
      { children }
    </ChatContext.Provider>
  )
} 



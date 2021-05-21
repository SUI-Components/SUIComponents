import {createContext, useContext} from 'react'

export const InputGroupContext = createContext({})
export const InputGroupProvider = InputGroupContext.Provider
export const useInputGroup = () => useContext(InputGroupContext)

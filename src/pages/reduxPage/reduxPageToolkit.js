import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    user: {
        name: "ahoj",
        password: "cau",
      },
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setName:(state, action)=>{
        state.user.name= action.payload
    },
    setPassword:(state, action)=>{
        state.user.password= action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, setName, setPassword } = counterSlice.actions

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectCount = (state) => state.counter.value

export const selectName = (state) => state.counter.user.name
export const selectPassword = (state) => state.counter.user.password

export default counterSlice.reducer

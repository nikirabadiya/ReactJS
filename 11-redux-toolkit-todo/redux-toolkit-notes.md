## Steps to implement the RTK (Redux Toolkit)
Generally, every application has single store which can be said single store truth
- Create a store file in new folder
- In store file, we need configureStore to configure the store 
- In this configured store, we have to give it a values as a reducers, otherwise data flow will not work properly, it can have multiple reducers values, but right now we are having singular reducer
- Now, to make reducers, we have to create slices, so that we have created the slice file in the features folder which is also said slice folder
- To create slice, we generally need 3 things:
  - name of the slice
  - insitialState
  - reducers list which will be working mostly as functions
- In initialState, we'll have to give it how it will be in the initialState, in our case, we have to pass the todo array - dummy array, which will be our initialState
- In reducers, we will have default access of two variable - state and action
- In state, we will have the access the updated state value in the store
- In action, we get the access of the action.payload
- Now we have to export all this reducers individually so that we can use them whenever we need them
- Also we need to export that slice reducer
- For sending the value, we use dispatch using useDispatch
- For taking or receiving the values, we use selector using useSelector
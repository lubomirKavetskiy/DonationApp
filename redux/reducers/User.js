import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userId: '1',
  firstName: 'Liubomyr',
  lastName: 'Kavetskyi',
  profileImage: require('../../assets/images/user_profile_image.png'),
};

export const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFirstName(state, action) {
      state.firstName = action.payload.firstName;
    },
    resetUserState() {
      return initialState;
    },
  },
});

export const {updateFirstName, resetUserState} = User.actions;
export default User.reducer;

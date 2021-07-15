import auth from "@react-native-firebase/auth";

const userActionReducer = ()=> auth().currentUser;
export default userActionReducer;
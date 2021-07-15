import firestore, { firebase } from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
export default class UserModel {
    /**
     * @param {{
     *  email: string 
     *  password: string,
     *  username: string
     * }} data
     * @returns {Promise<{
     *  status: string,
     *  message?: string
     * }>}
     */
    static async createAccount(data) {
        try {

            const foundSnap = await firestore().collection("users")
                .where("email", "==", data.email).get();
            if (!foundSnap.empty) return {
                status: 500,
                message: "Email already exist."
            };

            const credentials = await auth().createUserWithEmailAndPassword(data.email, data.password);
            if (!credentials) throw new Error("user creation failled!");

            const uid = credentials.user.uid;
            const fireData = { ...data };
            delete fireData.password;


            await firestore().doc(`users/${uid}`).set(data, { merge: true });

            return {
                status: 200,
                message: "User created successfully."
            }
        } catch (error) {
            return {
                status: 500,
                message: "Logup failled."
            }
        }
    }

    /**
     * @param {{
     * email: string, 
     * password: string
     * }} data
     * @returns {Promise<{
     * status: number,
     * message?: string
     * }>}
     */
    static async login(data) {
        try {
            await auth().signInWithEmailAndPassword(data.email, data.password);
            return {
                status: 200,
                message: "Logined successfully"
            }
        } catch (error) {
            return {
                status: 500,
                message: "Login failled! Please check your email or password."
            }
        }
    }

    static async logout() {
        try {
            await auth().signOut();
            return 200;
        } catch (error) {
            return 500;
        }
    }
}
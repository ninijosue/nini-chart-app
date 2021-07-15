import firestore from "@react-native-firebase/firestore"

export default class MessagesModel {
    static async getAllUsers() {
        try {
            const snap = await firestore().collection("users").get();
            return snap.docs.map(doc => ({
                ref: doc.ref,
                ...doc.data()
            }))
        } catch (error) {
            return []
        }
    }

    /**
     * @param {{
     * friendId: string,
     * requesterId: string
     * }} data
     */
    static async getPersonalMessages(data) {
        try {
            const snap = await firestore().doc(`users/${data.friendId}`)
                .collection("messages")
                // .where("senderId", "==", `${data.requesterId}`)
                // .where("recieverId", "==", `${data.friendId}`)
                .orderBy("smsTxtId", "asc")
                .get();
            return snap.docs.map(doc => ({
                ref: doc.ref,
                ...doc.data()
            }))
        } catch (error) {
            return [];
        }
    }

    /**
   * @param {{
     * text: string,
     * senderId: string,
     * recieverId: string,
     * smsTxtId: stirng,
     * creationTime: Date
     * }} data
     * 
     * @returns {Promise<{
     * status: number,
     * message: string
     * }>}
     */
    static async sendMessage(data) {
        try {
            await firestore().doc(`users/${data.senderId}`)
                .collection("messages").add(data);
            await firestore().doc(`users/${data.recieverId}`)
                .collection("messages").add(data)
            return {
                status: 200,
                message: "Message send successfully"
            }
        } catch (error) {
            return {
                status: 500,
                message: "Failled to send a message"
            }
        }
    }
}
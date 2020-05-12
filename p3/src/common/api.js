import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export default class Api {

    /**
     * 
     */
    constructor(options) {
        firebase.initializeApp({
            apiKey: options.apiKey,
            authDomain: options.projectId + '.firebaseapp.com',
            databaseURL: 'https://' + options.projectId + '.firebaseio.com',
            projectId: options.projectId
        });

        this.api = firebase.firestore();
        this.auth = firebase.auth();

        // State will be persisted even when the browser window is closed
        // https://firebase.google.com/docs/auth/web/auth-state-persistence
        this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    }

    /**
     * 
     */
    async register(email, password, name) {
        try {
            // https://firebase.google.com/docs/auth/web/password-auth
            await this.auth.createUserWithEmailAndPassword(email, password);

            let user = this.auth.currentUser;

            // https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
            await user.updateProfile({
                displayName: name
            })

            return { error: false, user: user };

        }
        catch (error) {
            return { error: error.message };
        }
    }

    /**
     * 
     */
    async login(email, password) {
        try {
            // https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
            await this.auth.signInWithEmailAndPassword(email, password);

            let user = this.auth.currentUser;

            return { error: false, user: user };
        }
        catch (error) {
            return { error: error.message };
        }
    }

    /**
     * 
     */
    async logout() {
        try {
            await this.auth.signOut();

            return { error: false, user: null };
        }
        catch (error) {
            return { error: error.message };
        }
    }

    /**
     * 
     */
    getUser() {
        return new Promise((resolve, reject) => {
            const unsubscribe = this.auth.onAuthStateChanged(user => {
                unsubscribe();
                resolve(user);
            }, reject);
        })
    }

    /**
     * Get a document from a `collection` where `field` == `value`
     * ex: get('products', 'slug', 'bare-coconut-chips')
     */
    async find(collection, field, value) {
        try {
            const querySnapshot = await this.api.collection(collection).where(field, "==", value)
                .get();
            return querySnapshot.docs.shift().data();
        }
        catch (error) {
            return 'Error getting documents: ' + error;
        }
    }

    /**
     * Filter method added 4/15/20
     * Ref: https://github.com/susanBuck/e28-spring20/issues/58
     */
    async filter(collection, field, operator, value) {
        try {
            const querySnapshot = await this.api.collection(collection).where(field, operator, value).get();
            return querySnapshot.docs;
        }
        catch (error) {
            return 'Error getting documents: ' + error;
        }
    }

    /**
     * Get a document from a collection by its id
     */
    get(collection, id) {
        return this.find(collection, 'id', id);
    }

    /**
     * Get all the documents from a collection
     */
    async all(collection) {
        let results = {};
        const querySnapshot = await this.api
            .collection(collection)
            .get();
        querySnapshot.forEach(doc => {
            results[doc.id] = doc.data();
        });
        return results;
    }

    /**
     * Add a document to a collection
     */
    async add(collection, document) {
        try {
            const docRef = await this.api
                .collection(collection)
                .add(document);
            return docRef.id;
        }
        catch (error) {
            return 'Error adding document: ' + error;
        }
    }

    /**
     * Delete a document from a collection by id
     */
    async delete(collection, id) {
        try {
            await this.api
                .collection(collection)
                .doc(id)
                .delete();

            return id;
        }
        catch (error) {
            return 'Error deleting document: ' + error;
        }
    }
}
import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);  
        this.account = new Account(this.client);
    };

    // use on higher level production level applications
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name: name
            })
            console.log(userAccount)
            if (userAccount) {
                // calls another function
                this.login({ email, password })
            }
            else {
                return userAccount
            }
        }
        catch (error) {
            throw error;
        }
    };

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({
                email: email,
                password: password
            })
        }
        catch (error) {
            throw error
        }
    };

    async getCurrentUser() {
        try {
            return this.account.get()
        }
        catch (error) {
            throw error;
        }
        return null;
    };

    async logout() {
        try {
            return this.account.deleteSessions()
        }
        catch (error) {
            throw error
        }
    };
}

const authService = new AuthService();

export default AuthService
import config from "../config/config";
// import { Client, ID, Databases, Storage, Query } from "appwrite"; Databases is depricated
import { Client, ID, TablesDB, Storage, Query } from "appwrite";


export class Service {
    client = new Client();
    // databases; 
    tablesDB;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        // this.databases = new Databases(this.client);
        this.tablesDB = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    // Post CRUD services:
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            // return await this.databases.createDocument({
            return await this.tablesDB.createRow({
                databaseId: config.appwriteDatabaseId,
                // collectionId: "config.appwriteCollectionId",
                tableId: config.appwriteCollectionId,
                // documentId: slug,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            })
        } catch (error) {
            console.log("Appwrite services :: createPost :: error", error)
        }
    };

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.tablesDB.updateRow({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status
                }
            })
        } catch (error) {
            console.log("Appwrite services :: updatePost :: error", error)
        }
    };

    async deletePost() {
        try {
            return await this.tablesDB.deleteRow({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteCollectionId,
                rowId: slug
            })

            return true

        } catch (error) {
            console.log("Appwrite services :: deletePost :: error", error)
            return false
        }
    };

    // get single post
    async getPost() {
        try {
            return await this.tablesDB.getRow({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteCollectionId,
                rowId: slug
            })
        } catch (error) {
            console.log("Appwrite services :: getPost :: error", error)
            return false
        }
    };

    // get multiple posts: I want status = active posts only
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.tablesDB.listRows({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteCollectionId,
                queries: queries
            })
        } catch (error) {
            console.log("Appwrite services :: getPosts :: error", error)
        }
    };



    // File upload services: upload and delete
    async uploadFile(file) {
        try {
            return await this.bucket.createFile({
                bucketId: config.appwriteBucketId,
                fileId: ID.unique(),
                file: file
            })
        } catch (error) {
            console.log("Appwrite services :: uploadFile :: error", error)
            return false
        }
    };

    async deleteFile() {
        try {
            return await this.bucket.deleteFile({
                bucketId: config.appwriteBucketId,
                fileId: ID.unique()
            })
            return true
        } catch (error) {
            console.log("Appwrite services :: deleteFile :: error", error)
            return false
        }
    };

    // you can use this without promise because it's very fast
    getFilePreview(fileId) {
        return this.bucket.getFilePreview({
            bucketId: config.appwriteBucketId,
            fileId: ID.unique()
        })
    };
}

const service = new Service()

export default service
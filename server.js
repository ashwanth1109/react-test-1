import dotenv from "dotenv";
import next from "next";
import express from "express";
import cors from "cors";
import Chatkit from "@pusher/chatkit-server";

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT;
const rootUrl = process.env.ROOT_URL;

const app = next({ dev });
const handler = app.getRequestHandler();

const chatkit = new Chatkit({
    instanceLocator: process.env.PUSHER_APP_INSTANCE,
    key: process.env.PUSHER_APP_SECRET
});

app.prepare()
    .then(() => {
        const server = express();
        server.use(express.json());
        server.use(cors());

        server.post("/users", (req, res) => {
            // Create a user
        });

        server.get("*", (req, res) => handler(req, res));

        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on ${rootUrl}`);
        });
    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    });

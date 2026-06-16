import express from "express";
import cors from "cors";
import { Xtream } from "@iptv/xtream-api";

const app = express();
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type"],
    }),
);

const config = {
    url: "http://vaunvo.top",
    username: "19999087213xtvs",
    password: "k570U3267Q",
};

const xtream = new Xtream(config);

app.get("/canais", async (req, res) => {
    try {
        // const xtream = new Xtream(config);
        const canais = await xtream.getChannels(); // Exemplo de método da lib
        res.json(canais);
        console.log(canais);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao conectar à IPTV",
            details: error.message,
        });
    }
});

app.get("/categories", async (req, resp) => {
    try {
        // const xtream = new Xtream(config);
        const categories = await xtream.getChannelCategories(); // Exemplo de método da lib
        resp.json(categories);
        // console.log(categories);
    } catch (error) {
        resp.status(500).json({
            message: "Erro ao conectar à IPTV",
            details: error.message,
        });
    }
});

app.get("/user", async (req, res) => {
    try {
        const user = await xtream.getProfile();
        res.json(user);
        // console.log(user);
    } catch (error) {
        res.status(500).json({
            error: "Erro no fetch manual",
            details: error.message,
        });
    }
});

const PORT = process.env.PORT || 8010;

app.listen(PORT, () => console.log("Backend rodando na porta:", PORT));

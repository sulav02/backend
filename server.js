
// Updated/newway import format
import dotenv from 'dotenv';
import express from "express";

//old version of import
//const express = require("express");

dotenv.config()
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Backend is running on port 6200 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
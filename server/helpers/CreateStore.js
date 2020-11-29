import { store } from "../../config";

const getUrl = () => `http://localhost:${process.env.PORT}`;

export default (req) => store({}, process.env.NODE_ENV, req.headers.cookie, getUrl());

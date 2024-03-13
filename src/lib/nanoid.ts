import { customAlphabet, urlAlphabet } from "nanoid";

const nanoid = (len: number = 7) => customAlphabet(urlAlphabet, len);

export default nanoid;

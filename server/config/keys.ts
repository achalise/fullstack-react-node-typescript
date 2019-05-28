import devkeys from "./dev";

declare const process: any;
let keys: {googleClientID: string; googleClientSecret: string; mongoURI: string; cookieKey: string } ;
if (process.env.NODE_ENV === 'RROD') {
// populate keys by reading values from env
} else {
    keys = devkeys;
}
export default keys;
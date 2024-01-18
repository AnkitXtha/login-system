
// const localUser: any = localStorage.getItem('user');
const persistUser: any = localStorage.getItem('persist:root');
export const config = {
    BASE_URL: "http://restapi.adequateshop.com/api/",
    GLOBAL_STYLES: {
        ERROR: "red",
        WARN: "yellow",
        SUCCESS: "green",
        DARK_MODE: "black",
        LIGHT_MODE: "white"
    },
    TOKEN: JSON.parse(persistUser)?.token,
    USER_ID: JSON.parse(persistUser)?.id,

}
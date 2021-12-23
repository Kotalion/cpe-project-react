import axios from "axios";

async function auth() {
    try {
        const response = await axios.get("https://notify-bot.line.me/oauth/authorize", {
            response_type: "code",
            client_id: "0XzEIwGNTpKlwlW7SbVxoZ",
            redirect_uri: "https://cpe-project-react.herokuapp.com/",
            scope: "notify"
        });
        console.log("This is auth", response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default auth
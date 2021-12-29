import axios from "axios";

async function auth() {
    try {
        const response = await axios.get("https://notify-bot.line.me/oauth/authorize", {
            response_type: "code",
            client_id: "0XzEIwGNTpKlwlW7SbVxoZ",
            redirect_uri: "https://cpe-project-react.herokuapp.com/callback",
            scope: "notify",
            state: "ABC123456"
        });
        console.log("This is auth", response.data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default auth
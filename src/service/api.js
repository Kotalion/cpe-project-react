import axios from "axios";

async function auth() {
    try {
        const response = await axios.get("https://notify-bot.line.me/oauth/authorize", {
            response_type: "code",
            client_id: "0XzEIwGNTpKlwlW7SbVxoZ",
            redirect_uri: "https://a9ac-110-168-65-102.jp.ngrok.io/RequestNotify",
            scope: "notify"
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default auth
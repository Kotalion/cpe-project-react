import { Component } from "react";
import auth from "./service/api"

class RequestNotify extends Component {

    componentDidMount = async () => {
        const response = await auth();
        console.log(response)
    };

    render() {
        return (
            <div>
                <h1>Notify!</h1>
            </div>
        );
    }
}
export default RequestNotify;

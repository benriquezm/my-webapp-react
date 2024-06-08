import { Fragment } from "react";

const MessageComponent = (props) => {
    console.log("props => ", props);
    const { message } = props;

    return (
        <Fragment>
            <p>{`Mensaje: ${message}`}</p>
        </Fragment>
    );
};

export default MessageComponent;
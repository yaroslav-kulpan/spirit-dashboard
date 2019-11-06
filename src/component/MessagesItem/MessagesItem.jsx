import React from "react";
import styles from "../Messages/Messages.module.scss";
import {Button} from "react-bootstrap";

const MessagesItem = ({message}) => {
    const {name, email, telephone, date} = message;
    return (
        <tbody>
        <tr>
            <td className={styles.heading__item}>1</td>
            <td className={styles.heading__item}>{name}</td>
            <td className={styles.heading__item}>{email}</td>
            <td className={styles.heading__item}>{telephone}</td>
            <td className={styles.heading__item}>{date}</td>
            <td className={styles.heading__item}>
                <Button variant="outline-info mr-1">
                    <i className="fas fa-eye"> </i>
                </Button>
                <Button variant="outline-danger">
                    <i className="far fa-trash-alt"> </i>
                </Button>
            </td>
        </tr>
        </tbody>
    );
};

export default MessagesItem;
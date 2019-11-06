import React from "react";
import {Spinner, Table} from "react-bootstrap";
import styles from './Messages.module.scss';
import MessagesItem from "../MessagesItem";
import withMuayThaiSpiritService from "../Hoc";
import {connect} from "react-redux";
import compose from "../../utils/compose";
import {fetchMessages} from "../../actions";
import ErrorIndicators from "../ErrorIndicators/ErrorIndicators";

class Messages extends React.Component {
    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        const {messages, loading, error} = this.props;

        if (loading) {
            return <div className="d-flex justify-content-center mt-5"><Spinner animation="border" variant="primary"/>
            </div>;
        }
        if (error) {
            return <ErrorIndicators/>;
        }
        return (
            <>
                <Table bordered hover responsive="md" size="sm" className="mt-2">
                    <thead>
                    <tr>
                        <th className={styles.heading__title}>#</th>
                        <th className={styles.heading__title}>
                            <i className="fas fa-user text-black-50 mx-1"> </i>
                        </th>
                        <th className={styles.heading__title}>
                            <i className="fas fa-envelope text-black-50 mx-1"> </i>
                        </th>
                        <th className={styles.heading__title}>
                            <i className="fas fa-phone-alt text-black-50 mx-1"> </i>
                        </th>
                        <th className={styles.heading__title}>
                            <i className="fas fa-clock text-black-50 mr-1"> </i>
                        </th>
                        <th className={styles.heading__title}>
                            Actions
                        </th>
                    </tr>
                    </thead>
                    {
                        messages.map((message) => {
                            console.log(messages);
                            return (
                                <MessagesItem message={message} key={message._id} length={message.length}/>
                            )
                        })
                    }
                </Table>

                <strong className="d-block text-right">Total <span>1</span></strong>
            </>
        );
    }
}

const mapStateToProps = ({messagesTable: {messages, loading, error}}) => {
    return {messages, loading, error};
};

const mapDispatchToProps = (dispatch, {muayThaiSpiritService}) => {
    return {
        fetchMessages: fetchMessages(muayThaiSpiritService, dispatch)
    };
};

export default compose(
    withMuayThaiSpiritService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Messages);

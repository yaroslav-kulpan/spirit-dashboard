import React, {Component} from 'react';
import ErrorIndicators from "../ErrorIndicators/ErrorIndicators";

class ErrorBoundry extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicators/>;
        }

        return this.props.children;
    }
}

export default ErrorBoundry;
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Color from '../constants/Color'

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render() {
        let iconName = this.state.data.isCompleted ? 'check-box' : 'check-box-outline-blank';

        return (
            <Icon.Button
                data={this.state.data}
                name={iconName}
                backgroundColor={Color.TRANSPARENT}
                color={Color.BLACK}
                underlayColor={Color.TRANSPARENT}
                activeOpacity={0.6}
                onPress={this.props.onCheckBoxPressed}
            >
            </Icon.Button>
        );
    }
}

export default CheckBox;
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
                backgroundColor='rgba(0,0,0,0)'
                color={Color.BLACK}
                underlayColor='rgba(0,0,0,0)'
                activeOpacity={0.6}
                onPress={this.props.onCheckBoxPressed}
            >
            </Icon.Button>
        );
    }
}

export default CheckBox;
import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Color from '../constants/Color'

export default CheckBox = ({ data, onCheckBoxPressed }) => {

    return (
        <Icon.Button
            data={data}
            name={data.isCompleted ? 'check-box' : 'check-box-outline-blank'}
            backgroundColor={Color.TRANSPARENT}
            color={Color.BLACK}
            underlayColor={Color.TRANSPARENT}
            activeOpacity={0.6}
            onPress={onCheckBoxPressed}
        />
    )
}

CheckBox.propTypes = {
    data: PropTypes.object.isRequired,
    onCheckBoxPressed: PropTypes.func.isRequired
}

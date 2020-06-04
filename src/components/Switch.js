import React from 'react';
import { Platform, Switch } from 'react-native';

import { theme } from '../constants';

const GRAY_COLOR = 'rgba(168, 182, 200, 0.30)';

export default class SwitchInput extends React.PureComponent {
  render() {
    const { value, ...props } = this.props;
    let thumbColor = null;

    if (Platform.OS === 'android') {
      thumbColor = GRAY_COLOR;
      if (props.value) thumbColor = theme.colors.secondary;
    }

    return (
      <Switch
        thumbColor={theme.colors.primary}
        ios_backgroundColor={GRAY_COLOR}
        trackColor={{
          // false: GRAY_COLOR,
          true: theme.colors.secondary
        }}
        value={value}
        {...props}
      />
    );
  }
}

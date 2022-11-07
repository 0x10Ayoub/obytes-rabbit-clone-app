import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Trash({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        d="M13.9 41q-1.15 0-2-.85-.85-.85-.85-2.05V10.9H9V8.65h8.55v-1.4h12.9v1.4H39v2.25h-2.05v27.2q0 1.2-.85 2.05-.85.85-2 .85Zm20.8-30.1H13.3v27.2q0 .3.175.475t.425.175h20.2q.2 0 .4-.2t.2-.45ZM19.05 34.5h2.3V15.1h-2.3Zm7.6 0h2.3V15.1h-2.3ZM13.3 10.9v27.85V38.1Z"
        fill={color}
      />
    </Svg>
  );
}

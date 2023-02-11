import React from 'react';
import { G, Path, Svg, SvgProps } from 'react-native-svg';
import { Colors } from 'react-native-ui-lib';

export function ZemogaLogo(props: SvgProps): JSX.Element {
  const { color, style, scale = 1 } = props;
  return (
    <Svg
      width={40 * Number(scale)}
      height={38 * Number(scale)}
      scale={scale}
      viewBox="0 0 40 38"
      style={style}>
      <G fill="none" fill-rule="evenodd">
        <G fill={color ?? Colors.primary}>
          <G>
            <Path
              d="M12.923 0.224L39.849 25.566 39.92 37.776 15.786 15.065 0.08 30.14 0.153 12.495 12.923 0.224"
              transform="translate(-60 -40) translate(60 40)"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

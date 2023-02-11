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

export function ArrowLeft(props: SvgProps): JSX.Element {
  const { color, style, scale = 1 } = props;
  return (
    <Svg
      width={35 * Number(scale)}
      height={35 * Number(scale)}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 8C15 7.72386 14.7761 7.5 14.5 7.5L2.70711 7.5L5.85355 4.35355C6.04882 4.15829 6.04882 3.84171 5.85355 3.64645C5.65829 3.45118 5.34171 3.45118 5.14645 3.64645L1.14645 7.64645C0.951184 7.84171 0.951184 8.15829 1.14645 8.35355L5.14645 12.3536C5.34171 12.5488 5.65829 12.5488 5.85355 12.3536C6.04882 12.1583 6.04882 11.8417 5.85355 11.6464L2.70711 8.5H14.5C14.7761 8.5 15 8.27614 15 8Z"
        fill={color ?? Colors.gray}
      />
    </Svg>
  );
}

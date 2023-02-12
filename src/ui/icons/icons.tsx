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

export function Srta(props: SvgProps): JSX.Element {
  const { color, style, scale = 1 } = props;
  return (
    <Svg
      width={35 * Number(scale)}
      height={35 * Number(scale)}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        d="M3.6123 15.4427C3.22586 15.6413 2.78829 15.2942 2.86609 14.8508L3.69582 10.1213L0.173489 6.76462C-0.155692 6.45092 0.0147086 5.87737 0.455698 5.81472L5.35417 5.11885L7.53829 0.792305C7.73504 0.402565 8.26801 0.402565 8.46476 0.792305L10.6489 5.11885L15.5474 5.81472C15.9883 5.87737 16.1587 6.45092 15.8296 6.76462L12.3072 10.1213L13.137 14.8508C13.2148 15.2942 12.7772 15.6413 12.3908 15.4427L8.00153 13.1868L3.6123 15.4427Z"
        fill={color ?? Colors.primary}
      />
    </Svg>
  );
}

export function ArrowUp(props: SvgProps): JSX.Element {
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
        d="M8 15C8.27614 15 8.5 14.7761 8.5 14.5V2.70711L11.6464 5.85355C11.8417 6.04882 12.1583 6.04882 12.3536 5.85355C12.5488 5.65829 12.5488 5.34171 12.3536 5.14645L8.35355 1.14645C8.15829 0.951184 7.84171 0.951184 7.64645 1.14645L3.64645 5.14645C3.45118 5.34171 3.45118 5.65829 3.64645 5.85355C3.84171 6.04882 4.15829 6.04882 4.35355 5.85355L7.5 2.70711V14.5C7.5 14.7761 7.72386 15 8 15Z"
        fill={color ?? Colors.primary}
      />
    </Svg>
  );
}

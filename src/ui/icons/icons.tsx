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

export function Star(props: SvgProps): JSX.Element {
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

export function Phone(props: SvgProps): JSX.Element {
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
        d="M1.88477 0.511076C2.62689 -0.231039 3.85149 -0.154797 4.49583 0.673634L6.28954 2.97983C6.6187 3.40304 6.73502 3.95409 6.60498 4.47423L6.05772 6.66329C5.99994 6.8944 6.06766 7.13888 6.2361 7.30732L8.69268 9.7639C8.86113 9.93235 9.1056 10.0001 9.33671 9.94229L11.5258 9.39502C12.0459 9.26499 12.597 9.3813 13.0202 9.71047L15.3264 11.5042C16.1548 12.1485 16.231 13.3731 15.4889 14.1152L14.455 15.1492C13.7153 15.8889 12.6089 16.2137 11.5778 15.8512C9.01754 14.9511 6.61438 13.4774 4.56849 11.4315C2.5226 9.38562 1.04895 6.98246 0.148838 4.42225C-0.213682 3.39112 0.11113 2.28472 0.85085 1.545L1.88477 0.511076Z"
        fill={color ?? Colors.black}
      />
    </Svg>
  );
}

export function Website(props: SvgProps): JSX.Element {
  const { color, style, scale = 1 } = props;
  return (
    <Svg
      width={35 * Number(scale)}
      height={35 * Number(scale)}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM7.5 1.07655C6.83057 1.28128 6.16462 1.89722 5.61275 2.93199C5.43997 3.25594 5.283 3.61363 5.14499 3.99999H7.5V1.07655ZM4.08954 3.99999C4.26796 3.44139 4.48325 2.92479 4.73039 2.4614C4.90911 2.1263 5.10862 1.81241 5.32726 1.52835C4.08119 2.04354 3.01629 2.90813 2.25469 3.99999H4.08954ZM3.50845 7.49999C3.53819 6.62317 3.6457 5.7817 3.82001 4.99999H1.67363C1.30933 5.76687 1.08035 6.61049 1.01758 7.49999H3.50845ZM4.84686 4.99999C4.66006 5.76497 4.54152 6.60778 4.50906 7.49999H7.5V4.99999H4.84686ZM8.5 4.99999V7.49999H11.4909C11.4585 6.60778 11.3399 5.76497 11.1531 4.99999H8.5ZM4.50906 8.49999C4.54152 9.39221 4.66006 10.235 4.84686 11H7.5V8.49999H4.50906ZM8.5 8.49999V11H11.1531C11.3399 10.235 11.4585 9.39221 11.4909 8.49999H8.5ZM5.14499 12C5.283 12.3864 5.43997 12.744 5.61275 13.068C6.16462 14.1028 6.83057 14.7187 7.5 14.9234V12H5.14499ZM5.32726 14.4716C5.10863 14.1876 4.90911 13.8737 4.73039 13.5386C4.48325 13.0752 4.26796 12.5586 4.08954 12H2.25469C3.01629 13.0919 4.08119 13.9565 5.32726 14.4716ZM3.82001 11C3.6457 10.2183 3.53819 9.37682 3.50845 8.49999H1.01758C1.08035 9.3895 1.30933 10.2331 1.67363 11H3.82001ZM10.6727 14.4716C11.9188 13.9565 12.9837 13.0919 13.7453 12H11.9104C11.732 12.5586 11.5167 13.0752 11.2696 13.5386C11.0909 13.8737 10.8914 14.1876 10.6727 14.4716ZM8.5 12V14.9234C9.16942 14.7187 9.83537 14.1028 10.3872 13.068C10.56 12.744 10.717 12.3864 10.855 12H8.5ZM12.18 11H14.3264C14.6907 10.2331 14.9196 9.3895 14.9824 8.49999H12.4915C12.4618 9.37682 12.3543 10.2183 12.18 11ZM14.9824 7.49999C14.9196 6.61049 14.6907 5.76687 14.3264 4.99999H12.18C12.3543 5.7817 12.4618 6.62317 12.4915 7.49999H14.9824ZM11.2696 2.4614C11.5167 2.92479 11.732 3.44139 11.9104 3.99999H13.7453C12.9837 2.90812 11.9188 2.04353 10.6727 1.52835C10.8914 1.81241 11.0909 2.1263 11.2696 2.4614ZM10.855 3.99999C10.717 3.61363 10.56 3.25594 10.3872 2.93199C9.83537 1.89722 9.16942 1.28128 8.5 1.07655V3.99999H10.855Z"
        fill={color ?? Colors.black}
      />
    </Svg>
  );
}

export function Email(props: SvgProps): JSX.Element {
  const { color, style, scale = 1 } = props;
  return (
    <Svg
      width={35 * Number(scale)}
      height={35 * Number(scale)}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        d="M0.0495854 3.55544C0.25173 2.66484 1.04822 2 2 2H14C14.9518 2 15.7483 2.66484 15.9504 3.55544L8 8.41403L0.0495854 3.55544ZM0 4.69708V11.8006L5.80319 8.24348L0 4.69708ZM6.7614 8.82905L0.191871 12.8559C0.512604 13.5323 1.20168 14 2 14H14C14.7983 14 15.4874 13.5323 15.8081 12.8559L9.2386 8.82905L8 9.58597L6.7614 8.82905ZM10.1968 8.24348L16 11.8006V4.69708L10.1968 8.24348Z"
        fill={color ?? Colors.black}
      />
    </Svg>
  );
}

export function Comment(props: SvgProps): JSX.Element {
  const { color, style, scale = 1 } = props;
  return (
    <Svg
      width={35 * Number(scale)}
      height={35 * Number(scale)}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V10C16 11.1046 15.1046 12 14 12H11.5C11.1852 12 10.8889 12.1482 10.7 12.4L8.8 14.9333C8.4 15.4667 7.6 15.4667 7.2 14.9333L5.3 12.4C5.11115 12.1482 4.81476 12 4.5 12H2C0.89543 12 0 11.1046 0 10V2ZM3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4H12.5C12.7761 4 13 3.77614 13 3.5C13 3.22386 12.7761 3 12.5 3H3.5ZM3.5 5.5C3.22386 5.5 3 5.72386 3 6C3 6.27614 3.22386 6.5 3.5 6.5H12.5C12.7761 6.5 13 6.27614 13 6C13 5.72386 12.7761 5.5 12.5 5.5H3.5ZM3.5 8C3.22386 8 3 8.22386 3 8.5C3 8.77614 3.22386 9 3.5 9H8.5C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8H3.5Z"
        fill={color ?? Colors.black}
      />
    </Svg>
  );
}

export function WiffiOff(props: SvgProps): JSX.Element {
  const { color, style, scale = 1 } = props;
  return (
    <Svg
      width={35 * Number(scale)}
      height={35 * Number(scale)}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        d="M10.7062 3.2938C9.83481 3.10146 8.92922 3.00006 7.99995 3.00006C5.25869 3.00006 2.72353 3.88246 0.663005 5.37871C0.421534 5.55406 0.404328 5.90444 0.615343 6.11545C0.793886 6.29399 1.07841 6.31197 1.28325 6.16434C3.17292 4.8024 5.49273 4.00006 7.99995 4.00006C8.63033 4.00006 9.24886 4.05078 9.85169 4.14836L10.7062 3.2938Z"
        fill={color ?? Colors.black}
      />
      <Path
        d="M8 6.00006C6.09494 6.00006 4.32081 6.5608 2.83374 7.52625C2.5774 7.69267 2.55486 8.05497 2.77098 8.27108C2.94366 8.44376 3.21766 8.46775 3.42333 8.33609C4.46132 7.6716 5.65328 7.22652 6.93377 7.06628L8 6.00006Z"
        fill={color ?? Colors.black}
      />
      <Path
        d="M10.5962 7.40387L11.3808 6.61926C12.0108 6.85923 12.6086 7.1643 13.1662 7.52625C13.4225 7.69267 13.445 8.05497 13.2289 8.27108C13.0562 8.44376 12.7822 8.46775 12.5766 8.33609C11.9654 7.94482 11.3008 7.62963 10.5962 7.40387Z"
        fill={color ?? Colors.black}
      />
      <Path
        d="M8.00005 10.0001L8.9335 9.0666C9.64848 9.16943 10.3259 9.38863 10.9458 9.70438C11.2308 9.84952 11.2722 10.2278 11.046 10.454L11.031 10.469C10.8706 10.6294 10.6234 10.6595 10.4198 10.5596C9.68957 10.2013 8.86831 10.0001 8.00005 10.0001Z"
        fill={color ?? Colors.black}
      />
      <Path
        d="M12.9046 5.09543L13.6521 4.34793C14.2422 4.6476 14.8054 4.99273 15.3369 5.37871C15.5784 5.55406 15.5956 5.90444 15.3846 6.11545C15.206 6.29399 14.9215 6.31197 14.7166 6.16434C14.1492 5.75539 13.543 5.3969 12.9046 5.09543Z"
        fill={color ?? Colors.black}
      />
      <Path
        d="M9.02049 11.7797C9.25786 11.9208 9.25587 12.2441 9.06061 12.4394L8.3535 13.1465C8.15824 13.3418 7.84166 13.3418 7.6464 13.1465L6.93929 12.4394C6.74403 12.2441 6.74204 11.9208 6.9794 11.7797C7.27817 11.6021 7.62715 11.5001 7.99995 11.5001C8.37275 11.5001 8.72173 11.6021 9.02049 11.7797Z"
        fill={color ?? Colors.black}
      />
      <Path
        d="M13.375 1.87506C13.5821 1.66795 13.9179 1.66795 14.125 1.87506C14.3321 2.08216 14.3321 2.41795 14.125 2.62506L3.375 13.3751C3.16789 13.5822 2.8321 13.5822 2.625 13.3751C2.41789 13.1679 2.41789 12.8322 2.625 12.6251L13.375 1.87506Z"
        fill={color ?? Colors.black}
      />
    </Svg>
  );
}

export function ArrowRepeat(props: SvgProps): JSX.Element {
  const { color, style, scale = 1 } = props;
  return (
    <Svg
      width={35 * Number(scale)}
      height={35 * Number(scale)}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        d="M11.5338 7H15.4663C15.6782 7 15.794 7.24721 15.6583 7.41005L13.6921 9.76953C13.5921 9.88947 13.4079 9.88947 13.308 9.76953L11.3417 7.41005C11.2061 7.24721 11.3218 7 11.5338 7Z"
        fill={color ?? Colors.black}
      />
      <Path
        d="M0.533803 9H4.46628C4.67824 9 4.79403 8.75279 4.65834 8.58995L2.6921 6.23047C2.59215 6.11053 2.40794 6.11053 2.30799 6.23047L0.341748 8.58995C0.206054 8.75279 0.321844 9 0.533803 9Z"
        fill={color ?? Colors.black}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00004 3C6.44755 3 5.06061 3.70697 4.14273 4.81839C3.96689 5.03131 3.65174 5.06137 3.43882 4.88552C3.2259 4.70968 3.19584 4.39453 3.37168 4.18161C4.47138 2.85003 6.13666 2 8.00004 2C10.9417 2 13.3881 4.1165 13.9011 6.90967C13.9066 6.9397 13.9119 6.96981 13.917 7H12.9001C12.4371 4.71778 10.4187 3 8.00004 3ZM3.09996 9C3.56297 11.2822 5.58142 13 8.00004 13C9.55254 13 10.9395 12.293 11.8574 11.1816C12.0332 10.9687 12.3484 10.9386 12.5613 11.1145C12.7742 11.2903 12.8042 11.6055 12.6284 11.8184C11.5287 13.15 9.86343 14 8.00004 14C5.05834 14 2.61202 11.8835 2.09896 9.09033C2.09344 9.0603 2.08815 9.03019 2.08308 9H3.09996Z"
        fill={color ?? Colors.black}
      />
    </Svg>
  );
}

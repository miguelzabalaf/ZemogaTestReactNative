import { Options } from 'react-native-navigation';

export const stackOptions: Options = {
  topBar: {
    visible: false,
    height: 0,
    background: {
      color: 'transparent',
    },
  },
  layout: {
    orientation: ['portrait'],
  },
  statusBar: {
    style: 'light',
    backgroundColor: 'black',
  },
  animations: {
    push: {
      enabled: true,
      content: {
        waitForRender: false,
        translationX: {
          from: require('react-native').Dimensions.get('window').width,
          to: 0,
          duration: 250,
          interpolation: {
            type: 'fastOutSlowIn',
          },
        },
        alpha: {
          duration: 250,
          interpolation: {
            type: 'accelerateDecelerate',
          },
          from: 0,
          to: 1,
        },
      },
      bottomTabs: {
        enabled: true,
      },
    },
    pop: {
      content: {
        translationX: {
          from: 0,
          to: require('react-native').Dimensions.get('window').width,
          duration: 300,
        },
        alpha: {
          duration: 300,
          interpolation: {
            type: 'accelerateDecelerate',
          },
          from: 1,
          to: 0,
        },
      },
    },
    setRoot: {
      alpha: {
        duration: 500,
        interpolation: {
          type: 'accelerateDecelerate',
        },
        from: 0,
        to: 1,
      },
    },
  },
};

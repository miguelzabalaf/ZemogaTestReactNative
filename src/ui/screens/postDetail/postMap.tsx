import React from 'react';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
} from 'react-native-maps';
import { postDetailStyles } from './styles';
import { PostMapProps } from './interfaces';
import { Spacings, Text, View } from 'react-native-ui-lib';
import { Layout } from 'src/ui/containers/layout';
import strings from 'src/constants/strings';
import { isIOS } from 'src/helpers/quickFunctions';

export function PostMap(props: PostMapProps) {
  // Props
  const { address, getInitialRegion, loading, hasError } = props;

  // Styles
  const { containerMapStyle, mapStyle } = postDetailStyles();

  if (hasError) {
    return null;
  } else {
    return (
      <>
        <Layout.ContentWithPaddingHorizontal>
          <Text textMuted smallText>
            {strings.labels.location}
          </Text>
          <View height={Spacings.s3} />
        </Layout.ContentWithPaddingHorizontal>
        <View style={containerMapStyle}>
          {!loading && address && (
            <MapView
              provider={isIOS() ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
              style={mapStyle}
              initialRegion={getInitialRegion(
                parseFloat(address?.geo?.lat || '0'),
                parseFloat(address?.geo?.lng || '0'),
              )}>
              <Marker
                coordinate={{
                  latitude: Number(address?.geo?.lat),
                  longitude: Number(address?.geo?.lng),
                }}
              />
            </MapView>
          )}
        </View>
      </>
    );
  }
}

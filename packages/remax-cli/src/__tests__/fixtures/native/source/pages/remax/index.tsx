import * as React from 'react';
import { View } from 'remax/alipay';
import NativeComponent from '@/components/native-component';

export default function RemaxPage(props: any) {
  return (
    <View>
      <NativeComponent />
      alipay view
    </View>
  );
}
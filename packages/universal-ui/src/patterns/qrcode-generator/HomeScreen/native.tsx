import React from 'react';

import Text from '@devsoutinho/universalui/src/components/Text/native';
import Box from '@devsoutinho/universalui/src/components/Box/native';


export default function HomeScreen() {
  return (
    <Box background="accent500" flex="1" paddingLeft="x20" paddingTop="x20">
      <Text background="primary200" textColor="primary900" fontSize="50px">Testing [natives]</Text>
    </Box>
  )
}

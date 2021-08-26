import React from 'react';

import Text from '@devsoutinho/universalui/src/components/Text/web';
import Box from '@devsoutinho/universalui/src/components/Box/web';


export default function HomeScreen() {
  return (
    <Box background="accent500" flex="1" paddingLeft="x20" paddingTop="x20">
      <Text as="p" background="primary200" textColor="primary900" fontSize="40px">Testing [native]</Text>
    </Box>
  )
}

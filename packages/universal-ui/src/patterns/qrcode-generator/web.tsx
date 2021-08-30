import React from 'react';

import Form from '@devsoutinho/universalui/src/libs/Form';
import TextField from '@devsoutinho/universalui/src/components/TextField/web';
import Text from '@devsoutinho/universalui/src/components/Text/web';
import Box from '@devsoutinho/universalui/src/components/Box/web';
import Icon from '@devsoutinho/universalui/src/components/Icon/web';
import Button from '@devsoutinho/universalui/src/components/Button/web';

export default function HomeScreen() {
  return (
    <Box
      flex="1"
      alignItems="center"
      justifyContent="center"
      background="primary100"
      padding="x4"
    >
      <Form initialValues={{ qrcode_value: '' }}>
        {({ values, handleChange }) => (
          <Box maxWidth="xcontainer_xs">
            <Box maxWidth={{ xs: "x9/12", sm: "x1/2" }} alignSelf="center" marginBottom="x4">
              <Image
                src={`https://skntech-api.vercel.app/api/qrcode-generator?text=${values.qrcode_value}&size=400&type=png`}
              />
              <Button marginTop="x4">
                Download PNG
              </Button>
            </Box>
            <Box marginBottom="x10">
              <TextField
                label="QRCode"
                name="qrcode_value"
                onChange={({ name, value }) => handleChange(name, value)}
                value={values.qrcode_value}
                placeholder="Type the value of your code"
              />
            </Box>
          </Box>
        )}
      </Form>
    </Box>
  )
}

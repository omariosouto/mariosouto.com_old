import Icon, { IconNames } from '../../components/foundation/Icon';
import Grid, { GridCell } from '../../components/foundation/layout/Grid';
import Box from '../../components/foundation/layout/Box';
import Text from '../../components/foundation/Text';
import Button from '../../components/commons/Button';

const features: Array<{
  name: string;
  description: string;
  icon: IconNames;
}> = [
  {
    name: 'List view',
    icon: 'viewList',
    description:
      'Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.',
  },
  {
    name: 'Boards',
    icon: 'viewBoard',
    description:
      'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
  },
  {
    name: 'Calendar',
    icon: 'calendar',
    description:
      'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
  },
  {
    name: 'Teams',
    icon: 'users',
    description:
      'Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.',
  },
];

const checklist = [
  'Unlimited projects',
  'No per user fees',
  'Unlimited storage',
  '24/7 support',
  'Cancel any time',
  '14 days free',
];

export default function PricingSectionSplitPanel(): JSX.Element {
  return (
    <Box position="relative" colorTheme="fillBase">
      <Box position="absolute" className="inset-0" aria-hidden="true">
        <Box
          position="absolute"
          width="x8/12"
          colorTheme="fillBaseReverse"
          className="inset-y-0 right-0"
        />
      </Box>
      <Grid
        position="relative"
        gridColumns={{
          xs: 1,
          lg: 2,
        }}
        mx="auto"
        px={{
          lg: 'x8',
        }}
        className="max-w-7xl"
      >
        <GridCell
          py={{
            xs: 'x16',
            sm: 'x24',
          }}
          px={{
            xs: 'x4',
            sm: 'x6',
            lg: 'x0',
          }}
          paddingRight={{
            lg: 'x8',
          }}
          className="bg-white"
        >
          <Box
            mx={{
              xs: 'auto',
              lg: '0',
            }}
            className="max-w-lg"
          >
            <Text
              as="h2"
              variant="body_2"
              bold
              uppercase
              color="var(--colorContrast)"
            >
              Full-featured
            </Text>
            <Text
              variant="heading_3"
              bold
              className="mt-2"
              color="var(--colorContrast)"
            >
              Everything you need to talk with your customers
            </Text>
            <Box as="dl" className="mt-12 space-y-10">
              {features.map((feature) => (
                <Box key={feature.name} position="relative">
                  <Box as="dt">
                    <Box
                      display="flex"
                      position="absolute"
                      width="x12"
                      height="x12"
                      alignItems="center"
                      justifyContent="center"
                      colorTheme="fillBaseReverse"
                      className="rounded-md text-white"
                    >
                      <Icon name={feature.icon} aria-hidden="true" />
                    </Box>
                    <Text
                      variant="body_1"
                      className="ml-16"
                      color="var(--colorContrast)"
                    >
                      {feature.name}
                    </Text>
                  </Box>
                  <Box as="dd" marginTop="x2" marginLeft="x16">
                    <Text variant="body_2" color="var(--colorContrast)">
                      {feature.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </GridCell>
        <GridCell
          display={{
            xs: 'block',
            lg: 'flex',
          }}
          colorTheme="fillBaseReverse"
          className="py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end"
        >
          <Box mx={{ xs: 'auto', lg: 'x0' }} className="max-w-lg w-full">
            <Box my="x8">
              <Text as="h2" srOnly>
                Price
              </Text>
              <Grid position="relative" gridColumns={2} as="p">
                <GridCell
                  display="flex"
                  flexDirection="column"
                  textAlign="center"
                  as="span"
                >
                  <Text variant="heading_1" className="text-white">
                    $99
                  </Text>
                  <Text as="span" className="mt-2 text-indigo-200">
                    Setup fee
                  </Text>
                  <Text as="span" srOnly>
                    plus
                  </Text>
                </GridCell>
                <GridCell
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  aria-hidden="true"
                  as="span"
                  className="h-12 w-full text-indigo-300"
                >
                  <Icon name="plus" size="md" aria-hidden="true" />
                </GridCell>
                <GridCell as="span">
                  <Box
                    as="span"
                    display="flex"
                    flexDirection="column"
                    textAlign="center"
                  >
                    <Text variant="heading_1" className="text-white">
                      $4
                    </Text>
                    <Text as="span" className="mt-2 text-indigo-200">
                      Per month
                    </Text>
                  </Box>
                </GridCell>
              </Grid>
            </Box>
            <Grid
              as="ul"
              role="list"
              gridGap="1px"
              gridColumns={{
                xs: 1,
                sm: 2,
              }}
              overflow="hidden"
              className="rounded"
              my="x8"
            >
              {checklist.map((item) => (
                <GridCell
                  display="flex"
                  key={item}
                  as="li"
                  px="x4"
                  py="x4"
                  alignItems="center"
                  className="bg-indigo-800 bg-opacity-50 text-white"
                >
                  <Box className="text-indigo-300" marginRight="x3">
                    <Icon name="check" aria-hidden="true" />
                  </Box>
                  <Text as="span" variant="body_2">
                    {item}
                  </Text>
                </GridCell>
              ))}
            </Grid>
            <Box my="x8">
              <Button
                href="#"
                size="xl"
                fullWidth
                action="quartenary"
                color="primary"
              >
                Get started today
              </Button>
            </Box>
            <Box my="x8">
              <Button
                href="/"
                size="xl"
                fullWidth
                action="tertiary"
                color="accent"
              >
                Try Workflow Lite for free
              </Button>
            </Box>
          </Box>
        </GridCell>
      </Grid>
    </Box>
  );
}

import Icon, { IconNames } from '../../components/foundation/Icon';
import Grid, { GridCell } from '../../components/foundation/layout/Grid';
import Box from '../../components/foundation/layout/Box';
// import Container from '../../components/foundation/layout/Container';
import Text from '../../components/foundation/Text';
import Link from '../../components/commons/Link';

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
    <Box position="relative" className="bg-white">
      <Box position="absolute" className="inset-0" aria-hidden="true">
        <Box
          position="absolute"
          width="x8/12"
          className="inset-y-0 right-0 bg-indigo-700"
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
            <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
              Full-featured
            </h2>
            <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Everything you need to talk with your customers
            </p>
            <dl className="mt-12 space-y-10">
              {features.map((feature) => (
                <Box key={feature.name} position="relative">
                  <dt>
                    <div className="absolute h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md text-white">
                      <Icon name={feature.icon} aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </Box>
              ))}
            </dl>
          </Box>
        </GridCell>
        <GridCell
          display={{
            xs: 'block',
            lg: 'flex',
          }}
          className="bg-indigo-700 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end"
        >
          <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
            <div>
              <h2 className="sr-only">Price</h2>
              <p className="relative grid grid-cols-2">
                <span className="flex flex-col text-center">
                  <span className="text-5xl font-extrabold text-white tracking-tight">
                    $99
                  </span>
                  <span className="mt-2 text-base font-medium text-indigo-200">
                    Setup fee
                  </span>
                  <span className="sr-only">plus</span>
                </span>
                <span
                  className="pointer-events-none absolute h-12 w-full flex items-center justify-center text-indigo-300"
                  aria-hidden="true"
                >
                  <Icon name="plus" size="md" aria-hidden="true" />
                </span>
                <span>
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-extrabold text-white tracking-tight">
                      $4
                    </span>
                    <span className="mt-2 text-base font-medium text-indigo-200">
                      Per month
                    </span>
                  </span>
                </span>
              </p>
            </div>
            <ul
              role="list"
              className="rounded overflow-hidden grid gap-px sm:grid-cols-2"
            >
              {checklist.map((item) => (
                <li
                  key={item}
                  className="bg-indigo-800 bg-opacity-50 py-4 px-4 flex items-center space-x-3 text-base text-white"
                >
                  <span className="text-indigo-300">
                    <Icon name="check" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="bg-white border border-transparent rounded-md w-full px-8 py-4 flex items-center justify-center text-lg leading-6 font-medium text-indigo-600 hover:bg-indigo-50 md:px-10"
            >
              Get started today
            </a>
            <a
              href="#"
              className="block text-center text-base font-medium text-indigo-200 hover:text-white"
            >
              Try Workflow Lite for free
            </a>
          </div>
        </GridCell>
      </Grid>
    </Box>
  );
}

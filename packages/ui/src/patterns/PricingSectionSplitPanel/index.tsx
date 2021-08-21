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
  return <Box>Box</Box>;
}

import Text from '../../foundation/Text';
import { TypographyVariantsName } from '../../../theme/types/ThemeTypography';
import Icon, { IconNames, IconSizes } from '../../foundation/Icon';
import Box from '../../foundation/layout/Box';

const INTERNAL_LINK = 'internalLink';
const EXTERNAL_LINK = 'externalLink';

const iconSizeByTextVariant: Record<TypographyVariantsName, IconSizes> = {
  body_1: 'sm',
  body_2: 'sm',
  body_3: 'sm',
  body_4: 'sm',
  display_1: 'sm',
  heading_1: 'sm',
  heading_2: 'sm',
  heading_3: 'sm',
  heading_4: 'sm',
  heading_5: 'sm',
  heading_6: 'sm',
};

const LinkIcon = ({
  name,
  iconSize,
}: {
  name: IconNames;
  iconSize: IconSizes;
}) => (
  <Box display="inline-block" marginLeft="x1" verticalAlign="text-bottom">
    <Icon name={name} size={iconSize} />
  </Box>
);

const linkVariants = {
  [INTERNAL_LINK]: ({
    href,
    children,
    className,
    hasIcon,
    variant,
    ...props
  }: LinkProps) => (
    <Text className={className} href={href} variant={variant} {...props}>
      {children}
      {hasIcon && (
        <LinkIcon name="arrowLeft" iconSize={iconSizeByTextVariant[variant]} />
      )}
    </Text>
  ),
  [EXTERNAL_LINK]: ({
    href,
    children,
    className,
    hasIcon,
    variant,
    ...props
  }: LinkProps) => (
    <Text href={href} variant={variant} className={className} {...props}>
      {children}
      {hasIcon && (
        <LinkIcon
          name="arrowUpLeft"
          iconSize={iconSizeByTextVariant[variant]}
        />
      )}
    </Text>
  ),
};

interface LinkProps {
  href: string;
  children: React.ReactNode;
  hasIcon?: boolean;
  className?: string;
  variant?: TypographyVariantsName;
}
export default function Link({
  href,
  children,
  hasIcon,
  className,
  variant,
  ...props
}: LinkProps): JSX.Element {
  const isLinkInternal = href.includes('http') ? EXTERNAL_LINK : INTERNAL_LINK;
  const LinkComponent = linkVariants[isLinkInternal];

  return (
    <LinkComponent
      href={href}
      hasIcon={hasIcon}
      className={className}
      variant={variant}
      {...props}
    >
      {children}
    </LinkComponent>
  );
}

Link.defaultProps = {
  hasIcon: true,
  variant: 'body_2',
};

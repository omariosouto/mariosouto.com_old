import styled from 'styled-components';
import Text, { TextProps } from '../../foundation/Text';
import { TypographyVariantsName } from '../../../theme/types/ThemeTypography';
import Icon, { IconNames, IconSizes } from '../../foundation/Icon';
import Box from '../../foundation/layout/Box';

const INTERNAL_LINK = 'internalLink';
const EXTERNAL_LINK = 'externalLink';

const StyledLink = styled(Text)`
  cursor: pointer;
`;

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
    <StyledLink
      tag="a"
      href={href}
      className={className}
      variant={variant}
      {...props}
    >
      {children}
      {hasIcon && <LinkIcon name="arrowLeft" iconSize="text" />}
    </StyledLink>
  ),
  [EXTERNAL_LINK]: ({
    href,
    children,
    className,
    hasIcon,
    variant,
    ...props
  }: LinkProps) => (
    <StyledLink
      tag="a"
      href={href}
      variant={variant}
      className={className}
      {...props}
    >
      {children}
      {hasIcon && <LinkIcon name="arrowUpLeft" iconSize="text" />}
    </StyledLink>
  ),
};

interface LinkPropsBase {
  href: string;
  children: React.ReactNode;
  hasIcon?: boolean;
  className?: string;
  variant?: TypographyVariantsName;
}
type LinkDynamicProps = Pick<TextProps, 'textAlign' | 'color'>;
type LinkProps = LinkPropsBase & LinkDynamicProps;
export default function Link({
  href,
  children,
  hasIcon,
  className,
  variant,
  color,
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
      color={color}
      {...props}
    >
      {children}
    </LinkComponent>
  );
}

Link.defaultProps = {
  hasIcon: true,
  variant: 'inherit',
  href: '',
};

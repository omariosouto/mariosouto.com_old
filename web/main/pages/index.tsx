import styled from 'styled-components'
import Demo from '@devsoutinho/ui/src/theme/Demo';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <div>
      <Title>Get Started</Title>
      <Demo />
    </div>

  )
}

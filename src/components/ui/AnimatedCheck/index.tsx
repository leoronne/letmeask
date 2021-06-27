import * as Icons from '../Icons';
import { Container } from './styles';

interface Props {
  size?: number;
  isLoading: boolean;
}

function AnimatedCheck({ size, isLoading }: Props) {
  return (
    <Container isLoading={isLoading}>
      <Icons.CheckAnimatedIcon width={size} height={size} />
    </Container>
  );
}

export default AnimatedCheck;

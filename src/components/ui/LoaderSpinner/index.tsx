import { CircularProgress } from '@material-ui/core';

interface Props {
  color?: string;
  size?: number;
}

function LoaderSpinner({ color = '#E559F9', size = 15 }: Props) {
  return <CircularProgress size={size} style={{ color }} />;
}
export default LoaderSpinner;

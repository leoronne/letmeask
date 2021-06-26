import * as Styles from './styles';

interface Props {
  src: string;
  alt: string;
  margin_right?: string;
  width?: number;
  height?: number;
  border_radius?: string;
}

function UserAvatar({ src, alt, margin_right, width, height, border_radius }: Props) {
  return (
    <Styles.Container
      src={src}
      alt={alt}
      loading="lazy"
      margin_right={margin_right}
      width={width}
      height={height}
      border_radius={border_radius}
    />
  );
}

export default UserAvatar;

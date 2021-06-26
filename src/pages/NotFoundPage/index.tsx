import { useHistory } from 'react-router-dom';

import * as Icons from '../../components/ui/Icons';
import { ButtonOutlined } from '../../components/ui';

import { colors } from '../../styles/theme';

import * as Styles from './styles';

function NotFoundPage() {
  const history = useHistory();
  const handleGoBack = () => {
    try {
      history.push('/');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };
  return (
    <Styles.Content>
      <Styles.Main>
        <Styles.Aside>
          <Icons.LogoWhiteIcon color={colors.white.base} width={150} height={71} />
          <Styles.Title>Ops, há algo de errado</Styles.Title>

          <Styles.SubTitle>Não foi possível encontrar a página que você esta procurando</Styles.SubTitle>

          <Styles.HomeLink>
            <ButtonOutlined
              type="button"
              min_width="150px"
              color_scheme={{ accent: colors.white.base, text: colors.primary.base }}
              onClick={handleGoBack}
            >
              <Icons.HomeIcon />
              <p>Voltar</p>
            </ButtonOutlined>
          </Styles.HomeLink>
        </Styles.Aside>
        <Styles.Right />
      </Styles.Main>
    </Styles.Content>
  );
}

export default NotFoundPage;

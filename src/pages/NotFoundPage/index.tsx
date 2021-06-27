import { useHistory } from 'react-router-dom';

import * as Icons from '../../components/ui/Icons';
import { ButtonOutlined } from '../../components/ui';

import { useLanguage } from '../../hooks';

import { colors } from '../../styles/theme';
import * as Styles from './styles';

function NotFoundPage() {
  const history = useHistory();

  const { translate } = useLanguage();

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

          <Styles.TextContent>
            <Styles.Title>{translate('something-wrong')}</Styles.Title>

            <Styles.SubTitle>{translate('page-not-found')}</Styles.SubTitle>
          </Styles.TextContent>

          <Styles.HomeLink>
            <ButtonOutlined
              type="button"
              aria-label={translate('return')}
              min_width="100%"
              color_scheme={{ accent: colors.white.base, text: colors.primary.base }}
              onClick={handleGoBack}
            >
              <Icons.HomeIcon />
              <p>{translate('return')}</p>
            </ButtonOutlined>
          </Styles.HomeLink>
        </Styles.Aside>
        <Styles.Right />
      </Styles.Main>
    </Styles.Content>
  );
}

export default NotFoundPage;

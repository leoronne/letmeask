import { useSnackbar } from 'notistack';

import * as Icons from '../../../ui/Icons';

import { colors } from '../../../../styles/theme';
import * as Styles from './styles';

interface ShareButtonProps {
  slug: 'copy-link' | 'facebook' | 'whatsapp' | 'twitter' | 'email';
  id: string;
}

function ShareButton({ slug, id }: ShareButtonProps) {
  const { enqueueSnackbar } = useSnackbar();

  const options = {
    'copy-link': {
      icon: <Icons.LinkIcon width={25} height={25} fill="white" />,
      name: 'Copiar link',
      text: 'Copiar link para área de transferência',
      link: '',
      color: colors.black[40],
    },
    facebook: {
      icon: <Icons.FacebookIcon width={25} height={25} fill="white" />,
      name: 'Facebook',
      text: 'Compartilhar via Facebook',
      link: 'https://www.facebook.com/sharer/sharer.php?u=',
      color: '#3b5998',
    },
    whatsapp: {
      icon: <Icons.WhatsAppIcon width={25} height={25} fill="white" />,
      name: 'Whats App',
      text: 'Compartilhar via Whats App',
      link: 'https://api.whatsapp.com/send/?phone&text=',
      color: '#25d366',
    },
    twitter: {
      icon: <Icons.TwitterIcon width={25} height={25} fill="white" />,
      name: 'Twitter',
      text: 'Compartilhar via Twitter',
      link: 'https://twitter.com/intent/tweet?text=',
      color: '#1da1f2',
    },
    email: {
      icon: <Icons.MailIcon width={25} height={25} fill="white" />,
      name: 'E-mail',
      text: 'Compartilhar via E-mail',
      link: 'mailto:?body=',
      color: colors.black[70],
    },
  };

  const handleShare = () => {
    try {
      const url = `${window.location.origin}/rooms/${id}`;
      if (slug === 'copy-link') {
        navigator.clipboard.writeText(url);
        enqueueSnackbar('Copiado para área de transferência', { variant: 'success' });
        return;
      }

      // Facebook share does not work on localhost
      window.open(
        `${options[slug].link}${encodeURI(`${slug !== 'facebook' ? 'Join my room at Let Me Ask: ' : ''}${url}`)}`
      );
      return;
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  };

  return (
    <Styles.Container>
      <Styles.CircleButton
        type="button"
        aria-label={options[slug].text}
        fill="white"
        background={options[slug].color}
        onClick={handleShare}
      >
        {options[slug].icon}
      </Styles.CircleButton>
      <p>{options[slug].name}</p>
    </Styles.Container>
  );
}

export default ShareButton;

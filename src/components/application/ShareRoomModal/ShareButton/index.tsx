import { memo } from 'react';
import { useSnackbar } from 'notistack';

import * as Icons from '../../../ui/Icons';

import { useLanguage } from '../../../../hooks';

import { colors } from '../../../../styles/theme';
import * as Styles from './styles';

interface ShareButtonProps {
  slug: 'copy-link' | 'facebook' | 'whatsapp' | 'twitter' | 'email';
  id: string;
}

function ShareButton({ slug, id }: ShareButtonProps) {
  const { enqueueSnackbar } = useSnackbar();
  const { translate } = useLanguage();

  const options = {
    'copy-link': {
      icon: <Icons.LinkIcon width={25} height={25} fill="white" />,
      name: translate('copy-link'),
      text: translate('copy-link'),
      link: '',
      color: colors.black[40],
    },
    facebook: {
      icon: <Icons.FacebookIcon width={25} height={25} fill="white" />,
      name: 'Facebook',
      text: `${translate('share-via')} Facebook`,
      link: 'https://www.facebook.com/sharer/sharer.php?u=',
      color: '#3b5998',
    },
    whatsapp: {
      icon: <Icons.WhatsAppIcon width={25} height={25} fill="white" />,
      name: 'Whats App',
      text: `${translate('share-via')} Whats App`,
      link: 'https://api.whatsapp.com/send/?phone&text=',
      color: '#25d366',
    },
    twitter: {
      icon: <Icons.TwitterIcon width={25} height={25} fill="white" />,
      name: 'Twitter',
      text: `${translate('share-via')} Twitter`,
      link: 'https://twitter.com/intent/tweet?text=',
      color: '#1da1f2',
    },
    email: {
      icon: <Icons.MailIcon width={25} height={25} fill="white" />,
      name: 'Email',
      text: `${translate('share-via')} Email`,
      link: 'mailto:?body=',
      color: colors.black[70],
    },
  };

  const handleShare = () => {
    try {
      const url = `${window.location.origin}/rooms/${id}`;
      if (slug === 'copy-link') {
        navigator.clipboard.writeText(url);
        enqueueSnackbar(translate('copied-clipboard'), { variant: 'success' });
        return;
      }

      // Facebook share does not work on localhost
      window.open(
        `${options[slug].link}${encodeURI(`${slug !== 'facebook' ? `${translate('join-room')}: ` : ''}${url}`)}`
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

export default memo(ShareButton);

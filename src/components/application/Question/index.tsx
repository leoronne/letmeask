import { ReactNode, memo } from 'react';
import { Tooltip } from '../../ui';

import UserInfo from '../UserInfo';

import * as Styles from './styles';

interface Props {
  content: string;
  tooltiptext: string;
  author: { name: string; avatar: string };
  admin: boolean;
  answered: boolean;
  highlighted: boolean;
  children?: ReactNode;
}

function Question({ content, author, admin, children, answered, highlighted, tooltiptext }: Props) {
  return (
    <Styles.Container className={`question${answered ? ' answered' : ''}${highlighted ? ' highlighted' : ''}`}>
      <Tooltip title={tooltiptext} placement="bottom" arrow>
        <Styles.Question isAdmin={admin}>{content}</Styles.Question>
      </Tooltip>

      <Styles.Footer isAdmin={admin}>
        <UserInfo user={author} font_size={14} />
        <Styles.Actions>{children}</Styles.Actions>
      </Styles.Footer>
    </Styles.Container>
  );
}

export default memo(Question);

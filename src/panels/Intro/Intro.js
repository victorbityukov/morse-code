import React, {Fragment} from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import './Intro.css';

const Intro = ({id, go, routes, hash, fetchedUser, userHasSeenIntro}) => (
  <Panel id={id} centered={true}>
    <PanelHeader>Морзянка</PanelHeader>
    {(fetchedUser && !userHasSeenIntro) &&
    <Fragment>
      <Group>
        <Div className='User'>
          {fetchedUser.photo_200 ? <Avatar size={125} src={fetchedUser.photo_200}/> : null}
          <h2>Привет, {fetchedUser.first_name}</h2>
          <h3>Этот сервис поможет обмениваться сообщениями, зашифрованными азбукой Морзе</h3>
          <h4>Внимание! В приложении по-умолчанию включены звук и фонарик</h4>
        </Div>
      </Group>
      <FixedLayout vertical='bottom'>
        <Div>
          {hash ?
            <Button mode='commerce' size="xl" level="2" onClick={() => go(routes.HOME)}>
              ОК
            </Button> :
            <Button mode='commerce' size="xl" level="2" onClick={() => go(routes.TABLE_SYMBOLS)}>
              ОК
            </Button>}
        </Div>
      </FixedLayout>
    </Fragment>
    }
  </Panel>
);
export default Intro;

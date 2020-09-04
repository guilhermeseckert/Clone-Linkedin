import React from 'react';

import { Container, ProfileCircle, SerarchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars0.githubusercontent.com/u/53009976?s=460&u=274139a7a8e844d7308622c898361bb30f1850fb&v=4"/>
      <SerarchInput placeholder="Pesquisar"/>
      <MessageIcon/>
    </Container>
  );
};

export default MobileHeader;

import React from 'react';

import { Container, Wrapper, 
  SerachInput, LinkedinIcon, 
  HomeIcon, NotificationIcon, 
  ProfileCircle, CaretDownIcon } from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon/>
          <SerachInput placeholder= "Pesquisar"/>
        </div>

        <div className="right">
          <nav>
            <button className="active">
            <HomeIcon/>
            <span>Inicio</span>
            </button>
            <button>
            <NotificationIcon/>
            <span>Notificações</span>
            </button>
            <button>
            <ProfileCircle src="https://avatars0.githubusercontent.com/u/53009976?s=460&u=274139a7a8e844d7308622c898361bb30f1850fb&v=4"/>
            <span>
              Eu <CaretDownIcon/>
            </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;

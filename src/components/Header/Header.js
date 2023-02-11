import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <MobileHeader>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <DesktopHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo  />
          <ButtonWrapper>
            <Button>Subscribe</Button>
            <Link>Already a subscriber?</Link>
        </ButtonWrapper>
      </DesktopHeader>
    </header>
  );
};

const MobileHeader = styled.div`
  --font-size: 3rem;

  @media (${QUERIES.tabletAndUp}) {
    --font-size: 4rem;
  }

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const DesktopHeader = styled.div`
  --font-size: 4rem;
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    margin-top: 16px;
    margin-bottom: 80px;
  }
`;

const ButtonWrapper = styled.div`  
  align-self: flex-end;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Link = styled.a`
  font-family: var(--font-family-serif);
  font-style: italic;
  font-size: ${14 / 16}rem;
  color: var(--color-gray-900);
  text-decoration: underline;
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media (${QUERIES.laptopAndUp}) {
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;

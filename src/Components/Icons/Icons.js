import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faHome,
  faUser,
  faArrowLeft,
  faCreditCard,
  faHandPeace,
  faInfoCircle,
  faGem
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faHome, faUser, faArrowLeft, faCreditCard,faHandPeace,faInfoCircle,faGem);

export const MenuBar = () => {
  return <FontAwesomeIcon icon="bars" />;
};
export const Home = () => {
  return <FontAwesomeIcon icon="home" />;
};

export const User = () => {
  return <FontAwesomeIcon icon="user" />;
};

export const GoBack = () => {
  return <FontAwesomeIcon icon="arrow-left" />;
};
export const CreditCard = () => {
  return <FontAwesomeIcon icon="credit-card" />;
};
export const Hand = () => {
  return <FontAwesomeIcon icon="hand-peace" />;
};
export const Info = () => {
  return <FontAwesomeIcon icon="info-circle" />;
};
export const Cash = () => {
  return <FontAwesomeIcon icon="gem" />;
};

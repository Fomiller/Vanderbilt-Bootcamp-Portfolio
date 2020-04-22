import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import API from '../utils/API'
import { useAppContext } from '../utils/GlobalContext'
import {UPDATE_REPOS} from '../utils/actions';
import Repo from '../components/Repo'
import PortfolioGrid from '../components/PortfolioGrid';

export default function Portfolio() {

  return(
    <Container>
      <PortfolioGrid/>
    </Container>
  )
}
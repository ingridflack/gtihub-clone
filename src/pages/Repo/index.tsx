import React from "react";

import { Link } from "react-router-dom";
import {
  Container,
  BreadCrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className={"username"} to={"/ingriderci"}>
          ingriderci
        </Link>

        <span>/</span>
        <Link className={"reponame"} to={"/ingriderci/meurepositorio"}>
          Meu repositório
        </Link>
      </BreadCrumb>

      <p>Contains all of my code</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/ingridflack/gtihub-clone"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;

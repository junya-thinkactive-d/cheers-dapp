export type UserType = {
  userAddress:string;
  userName:string;
  userProfile:string;
  userIcon:string;
  timestamp:string;
};

export type DaoType = {
  daoAddress:string;
  daoName:string;
  daoProfile:string;
  daoIcon:string;
  timestamp:string;
};

export type ProjectType = {
  projectAddress:string;
  belongDaoAddress:string;
  projectName:string;
  projectContents:string;
  projectReword:string;
  timestamp:string;
}

export type CheerType = {
  cheerPoolAddress:string;
  timestamp:string;
  message:string;
  cher:string;
}

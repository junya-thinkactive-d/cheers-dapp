export type UserType = {
  userAddress:string;
  userName:string;
  userProfile:string;
  userIcon:string;
  timestamp:Date;
};

export type DaoType = {
  daoAddress:string;
  daoName:string;
  daoProfile:string;
  daoIcon:string;
  timestamp:Date;
};

export type ProjectType = {
  projectOwnerAddress:string;
  projectAddress:string;
  belongDaoAddress:string;
  projectName:string;
  projectContents:string;
  projectReword:string;
  timestamp:Date;
}

export type CheerType = {
  projectAddress:string;
  cheerPoolAddress:string;
  timestamp:Date;
  message:string;
  cher:string;
}

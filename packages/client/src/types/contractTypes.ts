export type DaoFactory = {
  daoName: string;
  daoProfile: string;
  daoIcon: string;
};

export type UserFactory = {
  userName: string;
  userProfile: string;
  userIcon: string;
};

export type DaoProjectFactory = {
  projectName: string;
  projectContents: string;
  projectReword: string;
};

export type UserProjectFactory = {
  belongDaoAddress: string;
  projectName: string;
  projectContents: string;
  projectReword: string;
};

export type DaoStruct = {
  daoAddress: string;
  daoName: string;
  daoProfile: string;
  daoIcon: string;
};

export type ProjectCheer = {
  cheerPoolAddress: string;
  timestamp: Date;
  message: string;
  cher: string;
};

export type FolderType = {
  path: string;
  parent: string;
  name: string;
  id: string;
};

export type FileType = {
  name: string;
  parent: string;
  id: string;
  path: string;
  extension: string;
};

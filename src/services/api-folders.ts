import supabase from '../lib/config/supabase';
import { FileType, FolderType } from '../lib/types/FolderType';

export const getAllFolders = async (parent: string) => {
  let { data, error } = await supabase
    .from('folders')
    .select('*')
    .eq('parent', parent);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getAllFiles = async (parent: string) => {
  let { data, error } = await supabase
    .from('files')
    .select('*')
    .eq('parent', parent);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const insertFolder = async ({ name, path, parent }: FolderType) => {
  if (!name) {
    throw new Error('You should enter a name.');
  }
  const { data, error } = await supabase
    .from('folders')
    .insert([{ name, path, parent }])
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const insertFile = async ({
  name,
  path,
  parent,
  extension,
}: FileType) => {
  if (!name) {
    throw new Error('You should enter a name.');
  }
  const { data, error } = await supabase
    .from('files')
    .insert([{ name, path, parent, extension }])
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

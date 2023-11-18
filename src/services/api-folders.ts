import supabase from '../lib/config/supabase';
import { FolderType } from '../lib/types/FolderType';

export const getAllFolders = async () => {
  let { data, error } = await supabase.from('folders').select('*');
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

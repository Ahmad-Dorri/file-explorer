import { Box, Divider, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FileType, FolderType } from '../../lib/types/FolderType';

interface ShowItemsProps {
  items: FolderType[] | FileType[];
}

const ShowItems = ({ items }: ShowItemsProps) => {
  if (!items || items.length === 0) {
    return <div>there is nothing created here</div>;
  }
  return (
    <Box width="100%">
      <Stack direction="row" spacing={2} padding={2}>
        {items.map((item) => (
          // todo: fix this
          <Link
            // onClick={() => console.log(item)}
            className="border p-5"
            to={!item.extension && item.path}
            key={item.id}>
            {item.name}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default ShowItems;

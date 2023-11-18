import { Box, Divider, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FolderType } from '../../lib/types/FolderType';

interface ShowItemsProps {
  items: FolderType[];
}

const ShowItems = ({ items }: ShowItemsProps) => {
  return (
    <Box width="100%">
      <Stack direction="row" spacing={2} padding={2}>
        {items.map((item) => (
          // todo: fix this
          <Link className="border p-5" to={item.path} key={item.id}>
            {item.name}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default ShowItems;

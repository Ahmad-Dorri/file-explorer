import { useLocation, useParams } from 'react-router-dom';

const SubFolders = () => {
  const params = useParams();
  console.log('🚀 ~ file: sub-folders.tsx:5 ~ SubFolders ~ params:', params);
  const location = useLocation();
  console.log(
    '🚀 ~ file: sub-folders.tsx:7 ~ SubFolders ~ location:',
    location
  );

  return <div>SubFolders</div>;
};

export default SubFolders;

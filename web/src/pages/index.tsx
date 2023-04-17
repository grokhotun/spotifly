import { TracksList } from '@/entites';
import { Box, Button, Input, Main } from '@/shared/ui';

export default function IndexPage() {
  return (
    <Main>
      <Box css={{ padding: '40px' }}>
        <Box space="sm" display="flex" alignItems="center">
          <Button>Pause</Button>
          <Input />
        </Box>
        <TracksList />
      </Box>
    </Main>
  );
}

import { TracksList } from '@/entites';
import { Button, Main } from '@/shared/ui';

export default function IndexPage() {
  return (
    <Main>
      <Button>Pause</Button>
      <TracksList />
    </Main>
  );
}

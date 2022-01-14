import { CreateNoteButton } from '../../../features/create-note/components/CreateNoteButton';
import { NoteListTable } from '../../../features/display-notes/components/NoteListTable';

export function App() {
  return (
    <div className="App">
      <NoteListTable />
      <CreateNoteButton />
    </div>
  );
};

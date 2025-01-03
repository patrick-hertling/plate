import type { EditorFragmentDeletionOptions } from 'slate/dist/interfaces/editor';

import { deleteFragment as deleteFragmentBase } from 'slate';

import type { TEditor } from '../../interfaces/editor/TEditor';

export const deleteFragment = (
  editor: TEditor,
  options?: EditorFragmentDeletionOptions
) => deleteFragmentBase(editor as any, options);

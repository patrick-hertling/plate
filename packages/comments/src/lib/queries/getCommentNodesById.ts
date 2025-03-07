import type { SlateEditor } from '@udecode/plate';

import { isCommentNodeById } from '../utils';

export const getCommentNodesById = (editor: SlateEditor, id: string) => {
  return Array.from(
    editor.api.nodes({
      at: [],
      match: (n) => isCommentNodeById(n, id),
    })
  );
};

import { insertNode as insertNodeBase } from 'slate';

import type { ElementOrTextOf } from '../../interfaces/element/TElement';
import type { InsertNodesOptions } from '../transforms';
import type { TEditor, ValueOf } from '../../interfaces/editor/TEditor';

import { getQueryOptions } from '../../utils';

export const insertNode = <E extends TEditor>(
  editor: E,
  node: ElementOrTextOf<E>,
  options?: InsertNodesOptions<ValueOf<E>>
) =>
  insertNodeBase(editor as any, node as any, getQueryOptions(editor, options));

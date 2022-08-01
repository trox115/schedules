import { Models } from '@rematch/core';
import content from './Content/content';

export interface RootModel extends Models<RootModel> {
    content: typeof content
}

export const models: RootModel = {
    content
}
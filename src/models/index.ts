import { Models } from '@rematch/core';
import content from './Content/content';
import schedules from './Schedules/schedules';
export interface RootModel extends Models<RootModel> {
    content: typeof content,
    schedules: typeof schedules
}

export const models: RootModel = {
    content,
    schedules
}
import { getPlanMilestones } from '@parasocial/content-schema';

export function load() {
	return {
		milestones: getPlanMilestones()
	};
}

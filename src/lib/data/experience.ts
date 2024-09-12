import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';
import svelte from '../md/svelte.md?raw';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Staff IT',
		description: `# Deskripsi Pekerjaan
- Membangun API Backend
- Membangun Web Apps Pembayaran & Affiliator
- Membangun Web Apps Monitoring
- Membangun Mobile Apps iOS & Android
- Deploy & Update Apps via AppStore/PlayStore
- Integrasi vendor API channel
- Membangun & Maintenance Website Company`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Badung, Bali',
		period: { from: new Date(2020, 2, 1)},
		skills: getSkills('js', 'php', 'vue', 'laravel', 'python', 'fastapi', 'flutter', 'dart', 'aws'),
		name: 'Full-Stack Developer',
		color: 'red',
		links: [],
		logo: Assets.awanbisnis,
		shortDescription: 'Building, Maintenance and Deploying.'
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2020, 2, 1)},
		skills: getSkills(),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

export const title = 'Experience';

import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'S1 - Teknik Informatika',
		description: '',
		location: 'Pekalongan, Indonesia',
		logo: Assets.stmik,
		name: '',
		organization: 'STMIK Widya Pratama',
		period: { from: new Date(2016, 9, 3), to: new Date(2020, 2, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Java', 'PHP', 'HTML', 'Javascript', 'Delphi', 'Java', 'Mobile Aplication', 'Networking', 'Web Programming']
	},
	{
		degree: 'Teknik Kendaraan Ringan (TKR)',
		description: '',
		location: 'Batang, Indonesia',
		logo: Assets.smkbp,
		name: '',
		organization: 'SMK Bhakti Praja',
		period: { from: new Date(2013, 0, 1), to: new Date(2016, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: []
	}
];

export const title = 'Education';

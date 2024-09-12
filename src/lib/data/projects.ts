import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'awanbisnis',
		color: '#5e95e3',
		description: `
PT. Aplikasi Wirausaha Nusantara, juga dikenal sebagai AWAN, adalah perusahaan yang menyediakan solusi aplikasi pembayaran online.
# Sub Project
- Website Company Profile
- Webbased Payment (Laravel)
- Webbased Payment (VueJS)
- Maintenance Database & Server
- Mobile Apps iOS & Android`,
		shortDescription:
			'Aplikasi pembayaran PPOB online, tersedia di platform Mobile dan Web.',
		links: [{ to: 'https://awanbisnis.com', label: 'Awanbisnis' }],
		logo: Assets.awanbisnis,
		name: 'Awanbisnis',
		period: { from: new Date(2020, 2, 1)},
		skills: getSkills('Laravel 8', 'JavaScript', 'Ajax', 'MySQL', 'Flutter', 'Python', 'Fastapi', 'VueJS'),
		type: 'PT. Aplikasi Wirausaha Nusantara',
		screenshots: [
			{
				label: 'Company Profile Awanbisnis',
				src: Assets.awanbisnis3.toString()
			},
			{
				label: 'Dashboard Admin',
				src: Assets.awanbisnis1.toString()
			},
			{
				label: 'Webbased Payment (Real)',
				src: Assets.awanbisnis2.toString()
			},
			{
				label: 'Webbased Payment (Open)',
				src: Assets.awanbisnis4.toString()
			},
			{
				label: 'Mobile Apps (AppStore)',
				src: Assets.awanbisnis5.toString()
			},
			{
				label: 'Mobile Apps (PlayStore)',
				src: Assets.awanbisnis6.toString()
			}
		]
	},
	{
		slug: 'bmi',
		color: '#5e95e3',
		description:
			'Aplikasi monitoring project dan manajement project infrastruktur perusahaan.',
		shortDescription:
			'Aplikasi monitoring dan manajemen infrastruktur perusahaan.',
		links: [{ to: 'https://saepay.id', label: 'Saepay' }],
		logo: Assets.bmi,
		name: 'Bach Multi Infrastruktur',
		period: { from: new Date(2023, 6, 1), to: new Date(2023, 8, 29), },
		skills: getSkills('Laravel 8', 'JavaScript', 'Ajax', 'MySQL', 'Cordova', 'PWA'),
		type: 'PT. Bach Multi Global',
		screenshots: [
			{
				label: 'Home',
				src: Assets.bmi1.toString()
			},
			{
				label: 'Project Plan',
				src: Assets.bmi2.toString()
			},
			{
				label: 'File Manager',
				src: Assets.bmi3.toString()
			},
			{
				label: 'Project Status',
				src: Assets.bmi4.toString()
			},
			{
				label: 'Project Detail',
				src: Assets.bmi5.toString()
			}
		]
	},
	{
		slug: 'saepay',
		color: '#5e95e3',
		description:
			'Payment Gateway dan Pembayaran Layanan Digital.',
		shortDescription:
			'Payment Gateway dan Pembayaran Layanan Digital.',
		links: [{ to: 'https://saepay.id', label: 'Saepay' }],
		logo: Assets.saepay,
		name: 'Saepay',
		period: { from: new Date(2023, 2, 1), to: new Date(2023, 7, 28), },
		skills: getSkills('Laravel 8', 'JavaScript', 'Ajax', 'MySQL', 'Flutter', 'Python', 'Fastapi'),
		type: 'PT. SAE Gerbang Pembayaran'
	},
	{
		slug: 'basinergi',
		color: '#5e95e3',
		description: 'Aplikasi Komunitas Furniture di Indonesia',
		shortDescription: 'Aplikasi Komunitas Furniture & Decor di Indonesia',
		links: [{ to: 'https://basinergi.com', label: 'Basinergi' }],
		logo: Assets.basinergi,
		name: 'Basinergi',
		period: { from: new Date(2022, 2, 1), to: new Date(2022, 4, 30), },
		skills: getSkills('Laravel 8', 'JavaScript', 'Ajax', 'MySQL', 'Cordova', 'PWA'),
		type: 'Möbel&Co'
	},
	{
		slug: 'trackteam',
		color: '#5e95e3',
		description: 'Aplikasi Tracking lari menggunakan api dari strava.',
		shortDescription: 'Aplikasi Tracking lari menggunakan api dari strava.',
		links: [{ to: '#', label: 'Trackteam' }],
		logo: Assets.Unknown,
		name: 'Track Team',
		period: { from: new Date(2023, 6, 1), to: new Date(2023, 8, 29), },
		skills: getSkills('Laravel 8', 'JavaScript', 'Ajax', 'MySQL', 'React Native'),
		type: 'Track Team'
	},
	{
		slug: 'samadya',
		color: '#5e95e3',
		description: 'Website pameran galeri seni dan budaya di Safe Area Tol',
		shortDescription: 'Website pameran galeri seni dan budaya di Safe Area Tol',
		links: [{ to: 'https://senibudaya.id', label: 'Samadya' }],
		logo: Assets.Unknown,
		name: 'Galeri Seni Budaya',
		period: { from: new Date(2022, 5, 1), to: new Date(2022, 6, 1), },
		skills: getSkills('Laravel 8', 'JavaScript', 'Ajax', 'MySQL'),
		type: 'Samadya'
	},
	{
		slug: 'evoting',
		color: '#5e95e3',
		description: 'Aplkasi web melakukan voting suara (SPK)',
		shortDescription: 'Aplkasi web melakukan voting suara (SPK)',
		links: [{ to: '#', label: 'Evoting' }],
		logo: Assets.Unknown,
		name: 'E-Voting',
		period: { from: new Date(2022, 7, 1), to: new Date(2022, 7, 31), },
		skills: getSkills('CodeIgniter 4', 'JavaScript', 'Ajax', 'MySQL'),
		type: 'SMA N 1 Bodeh'
	},
	{
		slug: 'batikeza',
		color: '#5e95e3',
		description: 'Aplikasi Web e-commerce manajemen dan penjualan batik.',
		shortDescription: 'Aplikasi Web e-commerce manajemen dan penjualan batik.',
		links: [{ to: '#', label: 'Batikeza' }],
		logo: Assets.Unknown,
		name: 'E-Commerce',
		period: { from: new Date(2022, 1, 1), to: new Date(2022, 2, 3), },
		skills: getSkills('CodeIgniter 3', 'JavaScript', 'Ajax', 'MySQL'),
		type: 'Batik Eza Pekalongan'
	},
	{
		slug: 'baliparadiseproperty',
		color: '#5e95e3',
		description: 'Website Company Profile dari Bali Paradise Property.',
		shortDescription: 'Website Company Profile dari Bali Paradise Property.',
		links: [{ to: '#', label: 'baliparadiseproperty' }],
		logo: Assets.Unknown,
		name: 'Company Profile',
		period: { from: new Date(2023, 1, 1), to: new Date(2023, 2, 3), },
		skills: getSkills('Wordpress'),
		type: 'Bali Paradise Property'
	},
	{
		slug: 'profilematching',
		color: '#5e95e3',
		description: 'Aplikasi pembuat keputusan menggunakan metode Profile',
		shortDescription: 'Aplikasi pembuat keputusan menggunakan metode Profile',
		links: [{ to: '#', label: 'Profilematching' }],
		logo: Assets.Unknown,
		name: 'Profile Matching (SPK)',
		period: { from: new Date(2021, 6, 1), to: new Date(2021, 6, 31), },
		skills: getSkills('CodeIgniter 3', 'JavaScript', 'Ajax', 'MySQL'),
		type: 'SMK XX'
	},
	{
		slug: 'gisbillboard',
		color: '#5e95e3',
		description: 'Aplikasi booking dan sewa billboard dengan terintegrasi Google Maps',
		shortDescription: 'Aplikasi booking dan sewa billboard dengan terintegrasi Google Maps',
		links: [{ to: '#', label: 'gisbillboard' }],
		logo: Assets.Unknown,
		name: 'Booking Billboard (GIS)',
		period: { from: new Date(2021, 6, 1), to: new Date(2021, 6, 31), },
		skills: getSkills('CodeIgniter 3', 'JavaScript', 'Ajax', 'MySQL'),
		type: 'SMK XX'
	},
	{
		slug: 'sinilai1',
		color: '#5e95e3',
		description: 'Sistem Informasi Penilaian Raport 1',
		shortDescription: 'Sistem Informasi Penilaian Raport 1',
		links: [{ to: '#', label: 'sinilai1' }],
		logo: Assets.Unknown,
		name: 'Sinilai - Sistem Penilaian 1',
		period: { from: new Date(2021, 6, 1), to: new Date(2021, 6, 31), },
		skills: getSkills('Laravel 8', 'JavaScript', 'Ajax', 'MySQL'),
		type: 'SMK Karangdadap Pekalongan'
	},
	{
		slug: 'sinilai2',
		color: '#5e95e3',
		description: 'Sistem Informasi Penilaian Raport 2',
		shortDescription: 'Sistem Informasi Penilaian Raport 2',
		links: [{ to: '#', label: 'sinilai2' }],
		logo: Assets.Unknown,
		name: 'Sinilai - Sistem Penilaian 2',
		period: { from: new Date(2021, 6, 1), to: new Date(2021, 6, 31), },
		skills: getSkills('CodeIgniter', 'JavaScript', 'Ajax', 'MySQL'),
		type: 'SMK Muhammadiyah Kajen Pekalongan'
	},
	{
		slug: 'silaundry',
		color: '#5e95e3',
		description: 'Sistem Informasi Manajemen Laundry dan booking',
		shortDescription: 'Sistem Informasi Manajemen Laundry dan booking',
		links: [{ to: '#', label: 'silaundry' }],
		logo: Assets.Unknown,
		name: 'Si-Laundry',
		period: { from: new Date(2021, 6, 1), to: new Date(2021, 6, 31), },
		skills: getSkills('CodeIgniter', 'JavaScript', 'Ajax', 'MySQL'),
		type: 'NR Shoes'
	},
];

export const title = 'Projects';

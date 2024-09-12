import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Riki';

export const lastName = 'Setiawan';

export const description =
	'Saya adalah programmer berpengalaman sejak 2020, dengan keahlian di Backend dan Frontend Development.\n' +
	'Saat ini bekerja di PT Aplikasi Wirausaha Nusantara dan pernah terlibat dalam proyek 6 bulan di PT. Sae Gerbang Pembayaran.\n' +
	'Saya menguasai pengembangan aplikasi web dan mobile serta manajemen server.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://bitbucket.org/rikisetia97/workspace/repositories/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/riki-setiawan-149024129/'
	},
	{
		platform: Platform.Email,
		link: 'riki.awanbisnis@gmail.com'
	}
];

export const skills = getSkills('flutter', 'python', 'laravel', 'fastapi', 'dart');

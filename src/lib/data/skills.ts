import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 'JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website lebih dinamis dan interaktif. Dengan JavaScript, Anda bisa menambahkan elemen seperti animasi, formulir interaktif, dan konten yang dapat diperbarui tanpa harus memuat ulang halaman.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'purple',
		description:
			'PHP adalah bahasa pemrograman server yang digunakan untuk membuat situs web dinamis dan interaktif. PHP dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description:
			'Python adalah bahasa pemrograman yang digunakan untuk membuat aplikasi berbasis komputer. Python dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'dart',
		color: 'blue',
		description:
			'Dart adalah bahasa pemrograman yang digunakan untuk membuat aplikasi berbasis komputer. Dart dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS adalah bahasa pemrograman yang digunakan untuk membuat tampilan website lebih menarik dan interaktif. CSS dapat digunakan untuk membuat tampilan website, blog, dan aplikasi e-commerce.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML adalah bahasa pemrograman yang digunakan untuk membuat tampilan website lebih menarik dan interaktif. HTML dapat digunakan untuk membuat tampilan website, blog, dan aplikasi e-commerce.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'blue',
		description:
			'Flutter adalah bahasa pemrograman yang digunakan untuk membuat aplikasi berbasis komputer. Flutter dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'framework'
	}),
	defineSkill({
		slug: 'codeigniter',
		color: 'yellow',
		description:
			'CodeIgniter adalah framework PHP yang digunakan untuk membuat aplikasi web. Code Igniter dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.CodeIgniter,
		name: 'CodeIgniter',
		category: 'framework'
	}),
	defineSkill({
		slug: 'laravel',
		color: 'yellow',
		description:
			'Laravel adalah framework PHP yang digunakan untuk membuat aplikasi web. Laravel dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'fastapi',
		color: 'green',
		description:
			'Fastapi adalah framework Python yang digunakan untuk membuat aplikasi web. Fastapi dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.FastApi,
		name: 'Fastapi',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vue',
		color: 'orange',
		description: 'Vue adalah framework JavaScript yang digunakan untuk membuat aplikasi web. Vue dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.VueJs,
		name: 'Vue',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vite',
		color: 'orange',
		description: 'Vite adalah framework JavaScript yang digunakan untuk membuat aplikasi web. Vite dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vitest',
		color: 'orange',
		description: 'Vitest adalah framework JavaScript yang digunakan untuk membuat aplikasi web. Vitest dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.Vitest,
		name: 'Vitest',
		category: 'test'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'orange',
		description: 'MySQL adalah database server yang digunakan untuk membuat aplikasi web. MySQL dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'sqlite',
		color: 'orange',
		description: 'SQLite adalah database server yang digunakan untuk membuat aplikasi web. SQLite dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.SQLite,
		name: 'SQLite',
		category: 'db'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: 'Amazon Web Services (AWS) adalah platform cloud computing yang digunakan untuk membuat aplikasi web. AWS dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.AWS,
		name: 'Amazon Web Services',
		category: 'devops'
	}),
	defineSkill({
		slug: 'gcp',
		color: 'orange',
		description: 'Google Cloud Platform (GCP) adalah platform cloud computing yang digunakan untuk membuat aplikasi web. GCP dapat digunakan untuk membuat aplikasi web, blog, dan aplikasi e-commerce.',
		logo: Assets.GCP,
		name: 'Google Cloud Platform',
		category: 'devops'
	}),
	// defineSkill({
	// 	slug: 'svelte',
	// 	color: 'orange',
	// 	description: svelte,
	// 	logo: Assets.Svelte,
	// 	name: 'Svelte',
	// 	category: 'framework'
	// }),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

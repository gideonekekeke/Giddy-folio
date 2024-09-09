import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import pic from "../assets/4.jpeg";
import pic2 from "../assets/5.jpeg";
import Projects from "./Projects";
import projectData from "@/components/json/projectData.json";

interface Project {
	title: string;
	image: string;
	description: string;
	link: string;
}
export default function Component() {
	console.log(projectData);
	return (
		<div className='flex flex-col min-h-[100dvh]'>
			<header className='bg-background border-b px-4 lg:px-6 h-14 flex items-center'>
				<a href='#' className='flex items-center justify-center'>
					<MountainIcon className='h-6 w-6' />
					<span className=''>GiddyCode</span>
				</a>
				<nav className='ml-auto  gap-4 sm:gap-6 hidden sm:flex'>
					<a
						href='#hero'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Home
					</a>
					<a
						href='#projects'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Projects
					</a>
					<a
						href='#about'
						className='text-sm font-medium hover:underline underline-offset-4'>
						About
					</a>
					<a
						href='#skills'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Skills
					</a>
					<a
						href='#contact'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Contact
					</a>
				</nav>
			</header>
			<main className='flex-1'>
				<section id='hero' className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container px-4 md:px-6'>
						<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
										Hi, I'm Gideon Ekeke
									</h1>
									<p className='max-w-[600px] text-muted-foreground md:text-xl'>
										I'm a full-stack developer with a passion for building
										beautiful and functional web applications.
									</p>
								</div>
								<div className='flex flex-col gap-2 min-[400px]:flex-row'>
									<a
										href='#projects'
										className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
										View Projects
									</a>
									<a
										href='https://wa.me/+2348121439674'
										className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
										Contact Me
									</a>
								</div>
							</div>
							<img
								src={pic}
								width='550'
								height='550'
								alt='Hero'
								className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
							/>
						</div>
					</div>
				</section>
				<section
					id='projects'
					className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									Featured Projects
								</h2>
								<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Check out some of my latest web development projects.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12'>
							{projectData?.map((props: Project) => (
								<Projects
									image={props.image}
									title={props.title}
									description={props.description}
									link={props.link}
								/>
							))}
						</div>
					</div>
				</section>
				<section id='about' className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
						<img
							src={pic2}
							width={550}
							height={550}
							alt='About'
							className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full'
						/>
						<div className='space-y-4'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									About Me
								</h2>
								<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									I’m a passionate full-stack developer with over five years of
									experience building web applications. I specialize in creating
									clean, responsive, and user-friendly interfaces that
									prioritize functionality and performance. With a solid
									background in both front-end and back-end technologies like
									React, Node.js, and TypeScript, I enjoy working on scalable
									and efficient solutions.
									<br />
									<br />
									Throughout my career, I’ve worked on diverse projects ranging
									from e-commerce to real-time applications, always aiming to
									deliver high-quality results. I thrive in collaborative
									environments and continuously strive to stay updated with the
									latest trends in web development.
								</p>
							</div>
							<div className='flex flex-col gap-2 min-[400px]:flex-row lg:justify-end'>
								<a
									href='https://wa.me/+2348121439674'
									className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
									Contact Me
								</a>
								<a
									href="../project/Gideon's Resume.pdf"
									download="Gideon's Resume.pdf"
									className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
									Download CV
								</a>
							</div>
						</div>
					</div>
				</section>
				<section
					id='skills'
					className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									My Skills
								</h2>
								<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Here are some of the technologies I'm proficient in.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:gap-12'>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<CodepenIcon className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>React</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<CodepenIcon className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>Node.js</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<EclipseIcon className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>JavaScript</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<TypeIcon className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>TypeScript</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<HashIcon className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>HTML</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<CodepenIcon className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>CSS</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<WindIcon className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>Tailwind CSS</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<DatabaseIcon className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>MongoDB</h3>
							</div>
						</div>
					</div>
				</section>
				<section
					id='contact'
					className='w-full py-12 md:py-24 lg:py-32 border-t'>
					<div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
						<div className='space-y-3'>
							<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
								Get in Touch
							</h2>
							<p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Feel free to reach out if you have any questions or would like
								to discuss a project.
							</p>
						</div>
						<div className='mx-auto w-full max-w-sm space-y-2'>
							<form className='flex flex-col gap-4'>
								<Input type='text' placeholder='Name' className='w-full' />
								<Input type='email' placeholder='Email' className='w-full' />
								<Textarea placeholder='Message' className='w-full' rows={5} />
								<Button type='submit' className='w-full'>
									Submit
								</Button>
							</form>
						</div>
					</div>
				</section>
			</main>
			<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
				<p className='text-xs text-muted-foreground'>
					&copy; 2024 Gideon Ekeke. All rights reserved.
				</p>
				<nav className='sm:ml-auto flex gap-4 sm:gap-6'>
					<a href='#' className='text-xs hover:underline underline-offset-4'>
						Privacy
					</a>
					<a href='#' className='text-xs hover:underline underline-offset-4'>
						Terms of Service
					</a>
				</nav>
			</footer>
		</div>
	);
}

function CodepenIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<polygon points='12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2' />
			<line x1='12' x2='12' y1='22' y2='15.5' />
			<polyline points='22 8.5 12 15.5 2 8.5' />
			<polyline points='2 15.5 12 8.5 22 15.5' />
			<line x1='12' x2='12' y1='2' y2='8.5' />
		</svg>
	);
}

function DatabaseIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<ellipse cx='12' cy='5' rx='9' ry='3' />
			<path d='M3 5V19A9 3 0 0 0 21 19V5' />
			<path d='M3 12A9 3 0 0 0 21 12' />
		</svg>
	);
}

function EclipseIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<circle cx='12' cy='12' r='10' />
			<path d='M12 2a7 7 0 1 0 10 10' />
		</svg>
	);
}

function HashIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<line x1='4' x2='20' y1='9' y2='9' />
			<line x1='4' x2='20' y1='15' y2='15' />
			<line x1='10' x2='8' y1='3' y2='21' />
			<line x1='16' x2='14' y1='3' y2='21' />
		</svg>
	);
}

function MountainIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M7 13l-4-4 4-4' />
			<path d='M17 13l4-4-4-4' />
			<line x1='3' y1='21' x2='21' y2='3' />
		</svg>
	);
}

function TypeIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<polyline points='4 7 4 4 20 4 20 7' />
			<line x1='9' x2='15' y1='20' y2='20' />
			<line x1='12' x2='12' y1='4' y2='20' />
		</svg>
	);
}

function WindIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2' />
			<path d='M9.6 4.6A2 2 0 1 1 11 8H2' />
			<path d='M12.6 19.4A2 2 0 1 0 14 16H2' />
		</svg>
	);
}

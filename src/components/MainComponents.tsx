import pic from "../assets/4.jpeg";
import pic2 from "../assets/5.jpeg";
import Projects from "./Projects";
import projectData from "@/components/json/projectData.json";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSvelte } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { useState } from "react";

interface Project {
	title: string;
	image: string;
	description: string;
	link: string;
}
export default function Component() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [feedbackMessage, setFeedbackMessage] = useState("");

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch("https://formspree.io/f/mldenkde", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formState),
			});

			if (response.ok) {
				setFeedbackMessage("Thank you! Your message has been sent.");
				setFormState({ name: "", email: "", message: "" }); // Reset form
			} else {
				setFeedbackMessage("Oops! Something went wrong. Please try again.");
			}
		} catch (error) {
			setFeedbackMessage("There was a problem submitting your form.");
		} finally {
			setIsSubmitting(false);
		}
	};
	// console.log(projectData);
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
									href='../project/Gideon_Fullstack_cv.pdf'
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
								<FaReact className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>React</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<SiRedux className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>Redux</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<SiExpress className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>Express</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<FaNode className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>Node.js</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<IoLogoJavascript className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>JavaScript</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<SiTypescript className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>TypeScript</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<FaHtml5 className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>HTML</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<FaCss3 className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>CSS</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<BiLogoTailwindCss className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>Tailwind CSS</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<SiMongodb className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>MongoDB</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<BiLogoPostgresql className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>Postgresql</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<RiNextjsFill className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>Next Js</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<SiSvelte className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>SvelteKit</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<FaFigma className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>Figma</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<SiTestinglibrary className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>Jest Testing</h3>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2'>
								<FaDocker className='h-12 w-12' />
								<h3 className='text-lg font-semibold'>Docker</h3>
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
							<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
								<input
									type='text'
									name='name'
									value={formState.name}
									onChange={handleChange}
									placeholder='Name'
									className='w-full p-2 border rounded'
									required
								/>
								<input
									type='email'
									name='email'
									value={formState.email}
									onChange={handleChange}
									placeholder='Email'
									className='w-full p-2 border rounded'
									required
								/>
								<textarea
									name='message'
									value={formState.message}
									onChange={handleChange}
									placeholder='Message'
									className='w-full p-2 border rounded'
									rows={5}
									required
								/>
								<button
									type='submit'
									className='w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700'
									disabled={isSubmitting}>
									{isSubmitting ? "Submitting..." : "Submit"}
								</button>
							</form>
							{feedbackMessage && (
								<p className='text-sm text-green-600 mt-2'>{feedbackMessage}</p>
							)}
						</div>
					</div>
				</section>
			</main>
			<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
				<p className='text-xs text-muted-foreground'>
					&copy; 2025 Gideon Ekeke. All rights reserved.
				</p>
				<nav className='sm:ml-auto flex gap-4 sm:gap-6'>
					<a
						href='https://github.com/gideonekekeke'
						className='text-xs hover:underline underline-offset-4'>
						Github Profile
					</a>
				</nav>
			</footer>
		</div>
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

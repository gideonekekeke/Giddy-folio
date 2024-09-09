import React from "react";

interface ProjectProps {
	title: string;
	image: string;
	description: string;
	link: string;
}

const Projects: React.FC<ProjectProps> = ({
	title,
	image,
	description,
	link,
}) => {
	// console.log(data);
	return (
		<a
			href={link}
			target='_blank'
			className='relative overflow-hidden rounded-xl 
transition-all after:opacity-0 after:absolute after:inset-0 
after:bg-black hover:after:opacity-30 focus:after:opacity-20 
focus-visible:outline-none focus-visible:ring-2 
focus-visible:ring-ring'>
			<img
				src={image}
				width={400}
				height={300}
				alt='Project 1'
				className='object-cover aspect-[4/3]'
			/>
			<div
				className='absolute inset-0 flex flex-col items-center 
justify-center space-y-2 bg-background/80 px-4 py-6 
text-center transition-all group-hover:opacity-100 
group-focus:opacity-100'>
				<h3 className='text-lg font-semibold'>{title}</h3>
				<p className='text-muted-foreground'>{description}</p>
			</div>
		</a>
	);
};

export default Projects;

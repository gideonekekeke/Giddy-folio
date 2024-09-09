import { useState, useEffect } from "react";
import "./type.css";

const Typewriter = () => {
	const texts = ["Full-stack Developer", "Frontend Expert", "UI/UX Enthusiast"];
	const [currentText, setCurrentText] = useState("");
	const [textIndex, setTextIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [speed, setSpeed] = useState(150);

	useEffect(() => {
		const handleTyping = () => {
			const fullText = texts[textIndex];
			setCurrentText((prev) =>
				isDeleting
					? fullText.substring(0, prev.length - 1)
					: fullText.substring(0, prev.length + 1),
			);

			if (!isDeleting && currentText === fullText) {
				setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
			} else if (isDeleting && currentText === "") {
				setIsDeleting(false);
				setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
			}

			setSpeed(isDeleting ? 50 : 150); // Speed up when deleting
		};

		const typingTimer = setTimeout(handleTyping, speed);

		return () => clearTimeout(typingTimer);
	}, [currentText, isDeleting, speed, textIndex, texts]);

	return (
		<div className='typewriter'>
			<h1 className='text'>
				{currentText}
				<span className='caret'></span>
			</h1>
		</div>
	);
};

export default Typewriter;

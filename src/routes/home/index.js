import { h } from 'preact';
import style from './style.css';
import { useAuthProvider } from '../../contexts/Auth.js';

const Home = () => {
	let { isAuthed } = useAuthProvider();
	console.log(useAuthProvider());
	console.log(isAuthed);
	return (
		<div class={style.home}>
			<h1>Home</h1>
			<p>authed: {isAuthed } </p>
			<p>This is the Home component.</p>
		</div>
	)
};

export default Home;

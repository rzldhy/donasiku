import { createServer } from 'miragejs';
import App from './App.svelte';

const server = createServer();
server.get('/api/donasiku', 
	[
		{
			id: 1,
			title: 'Keep William Writing',
			category: 'Business',
			thumbnail: 'https://live.staticflickr.com/2569/4013944382_469787def0_z.jpg',
			pledged: 0,
			target: 14500000,
			date_end: 1613581200000,
			profile_photo: 'https://live.staticflickr.com/3172/2972948615_f60cbd939d_z.jpg',
			profile_name: 'Emily Waldon'
		},
		{
			id: 2,
			title: 'Computers For Remote Learning',
			category: 'Education',
			thumbnail: 'https://live.staticflickr.com/6200/6070928338_aa10996f54_b.jpg',
			pledged: 55210000,
			target: 101500000,
			date_end: 1608829200000,
			profile_photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Kate_Miller-Heidke_$288482043582%29.jpg/405px-Kate_Miller-Heidke_%288482043582%29.jpg',
			profile_name: 'Kate Ludlow'
		},
		{
			id: 3,
			title: 'One Laptop Per Child',
			category: 'Child',
			thumbnail: 'http://dev.laptop.org/-reuben/Donate3.jpg',
			pledged: 1500000,
			target: 100000000,
			date_end: 1629133200000,
			profile_photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Profile_Pic_Peepsys_Eye_2019.jpg/480px-Profile_Pic_Peepsys_Eye_2019.jpg',
			profile_name: 'Rina Rubina'
		}
	]
);

const app = new App({
	target: document.body,
	props: {}
});

export default app;

import axios from 'axios';

const KEY = 'AIzaSyBfZkpO8lX32rpmo8R4yL_0qknzsbDOe18';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});

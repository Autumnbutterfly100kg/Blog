import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "AM",
		artist: "えびかれー伯爵",
		cover: "assets/music/cover/AM.webp",
		url: "assets/music/url/AM.mp3",
		duration: 0,
	},
	{
		id: 2,
		title: "Sneaky Driver",
		artist: "Various Artists",
		cover: "assets/music/cover/Sneaky Driver.webp",
		url: "assets/music/url/Sneaky Driver.mp3",
		duration: 0,
	},
	{
		id: 3,
		title: "この櫻ノ詩の下",
		artist: "松本文紀",
		cover: "assets/music/cover/この櫻ノ詩の下.webp",
		url: "assets/music/url/この櫻ノ詩の下.mp3",
		duration: 0,
	},
	{
		id: 4,
		title: "伸びた夕影",
		artist: "藤井稿太郎,
		cover: "assets/music/cover/伸びた夕影.webp",
		url: "assets/music/url/伸びた夕影.mp3",
		duration: 0,
	},
	{
		id: 5,
		title: "僕と花",
		artist: "サカナクション",
		cover: "assets/music/cover/僕と花.webp",
		url: "assets/music/url/僕と花.mp3",
		duration: 0,
	},
	{
		id: 6,
		title: "元気なランスR8",
		artist: "アリスソフト",
		cover: "assets/music/cover/元気なランスR8.webp",
		url: "assets/music/url/元気なランスR8.mp3",
		duration: 0,
	},
	{
		id: 7,
		title: "夜の向日葵",
		artist: "松本文紀",
		cover: "assets/music/cover/夜の向日葵.webp",
		url: "assets/music/url/夜の向日葵.mp3",
		duration: 0,
	},
	{
		id: 8,
		title: "夢の歩みを見上げて",
		artist: "松本文紀",
		cover: "assets/music/cover/夢の歩みを見上げて.webp",
		url: "assets/music/url/夢の歩みを見上げて.mp3",
		duration: 0,
	},
	{
		id: 9,
		title: "思考",
		artist: "未来",
		cover: "assets/music/cover/思考.webp",
		url: "assets/music/url/思考.mp3",
		duration: 0,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: "/favicon/favicon.ico",
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
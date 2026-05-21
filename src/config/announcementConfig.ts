import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content: "𝓛𝓸𝓸𝓴 𝓪𝓽 𝓽𝓱𝓪𝓽 𝓽𝓸𝔀𝓮𝓻𝓲𝓷𝓰 𝓰𝓲𝓪𝓷𝓽 𝓽𝓸𝔀𝓮𝓻, 𝓮𝓿𝓮𝓻𝔂 𝓶𝓸𝓶𝓮𝓷𝓽 𝓼𝓸𝓶𝓮𝓸𝓷𝓮 𝓳𝓾𝓶𝓹𝓼 𝓭𝓸𝔀𝓷. 𝓦𝓱𝓮𝓷 𝓘 𝔀𝓪𝓼 𝓵𝓲𝓽𝓽𝓵𝓮, 𝓘 𝓭𝓲𝓭𝓷'𝓽 𝓾𝓷𝓭𝓮𝓻𝓼𝓽𝓪𝓷𝓭 𝓪𝓷𝓭 𝓽𝓱𝓸𝓾𝓰𝓱𝓽 𝓽𝓱𝓮𝔂 𝔀𝓮𝓻𝓮 𝓼𝓷𝓸𝔀𝓯𝓵𝓪𝓴𝓮𝓼.",
	// 是否允许用户关闭公告
	closable: false,

	link: {
		// 启用链接
		enable:false,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};

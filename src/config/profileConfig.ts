import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/eye.jpg",

	// 名字
	name: "ZHOUXIANG",

	// 个人签名
	bio: "𝑳𝒐𝒐𝒌 𝒂𝒕 𝒕𝒉𝒆 𝒔𝒌𝒚-𝒑𝒊𝒆𝒓𝒄𝒊𝒏𝒈 𝒕𝒐𝒘𝒆𝒓. 𝑷𝒆𝒐𝒑𝒍𝒆 𝒋𝒖𝒎𝒑 𝒅𝒐𝒘𝒏 𝒆𝒗𝒆𝒓𝒚 𝒎𝒐𝒎𝒆𝒏𝒕. 𝑾𝒉𝒆𝒏 𝑰 𝒘𝒂𝒔 𝒂 𝒄𝒉𝒊𝒍𝒅, 𝑰 𝒅𝒊𝒅𝒏'𝒕 𝒖𝒏𝒅𝒆𝒓𝒔𝒕𝒂𝒏𝒅 𝒊𝒕 𝒂𝒏𝒅 𝒕𝒉𝒐𝒖𝒈𝒉𝒕 𝒊𝒕 𝒘𝒂𝒔 𝒔𝒏𝒐𝒘𝒇𝒍𝒂𝒌𝒆𝒔",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
	],
};

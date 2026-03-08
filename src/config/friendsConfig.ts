import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 显示列数：2列或3列
	columns: 2,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	/*{
		title: "江舟晚行",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=7618557&s=640",
		desc: "喜欢打游戏、刷视频，沉迷研究IT技术，偶尔折腾服务器与代码。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog", "IT", "Gamer"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},*/
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
	return friendsConfig
		.filter((friend) => friend.enabled)
		.sort((a, b) => b.weight - a.weight);
};

import type { GeneratePostSettings } from './../interfaces/post';
export function getPostGeneratorPrompt(settings: GeneratePostSettings): string {
	return `Write a ${parseSocialMedia(settings.socialMedia)} using a ${settings.tone} tone about "${parseTitle(settings.title)}"${parseAudience(settings.audience)}.`;
}

function parseSocialMedia(socialMedia: string) {
	return socialMedia == 'Twitter' ? 'tweet' : socialMedia + ' post';
}

function parseAudience(audience: string) {
	return audience == 'everyone' ? '' : ` with the target on "${audience}"`;
}

function parseTitle(title: string) {
	let parsedTitle = title;
	if (parsedTitle[0] == '"') parsedTitle = parsedTitle.slice(1);
	if (parsedTitle[parsedTitle.length - 1] == '"') parsedTitle = parsedTitle.slice(0, -1);
	return parsedTitle;
}

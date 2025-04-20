import {getEmbedAsString} from "@enkore-target/js-none/project"

export function someFunction() {
	return {
		text: getEmbedAsString("text://testEmbed1.mts"),
		js: getEmbedAsString("js://testEmbed1.mts")
	}
}

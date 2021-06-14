#!/usr/bin/env node

// const fs = require("fs");
// const { homedir } = require("os");
// const { join } = require("path");

import * as fs from "fs";
import { homedir } from "os";
import { join } from "path";

const content = JSON.stringify(
	JSON.parse(
		`{"extensionsGallery":{"serviceUrl":"https:\/\/marketplace.visualstudio.com\/_apis\/public\/gallery","cacheUrl":"https:\/\/vscode.blob.core.windows.net\/gallery\/index","itemUrl":"https:\/\/marketplace.visualstudio.com\/items","controlUrl":"","recommendationsUrl":""}}`
	),
	null,
	4
);

(() => {
	switch (process.platform) {
		case "win32":
			fs.writeFileSync(
				join(
					homedir(),
					"AppData",
					"Roaming",
					"VSCodium",
					"product.json"
				),
				content
			);
			break;
		case "darwin":
			fs.writeFileSync(
				join(
					homedir(),
					"Library",
					"Application Support",
					"VSCodium",
					"product.json"
				),
				content
			);
			break;
	}
})();

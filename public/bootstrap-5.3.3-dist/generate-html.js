const fs = require("fs");
const path = require("path");

const cssDir = path.join(__dirname, "js");
const files = fs.readdirSync(cssDir).filter((file) => file.endsWith(".map"));

const links = files
  .map((file) => `<script src="./bootstrap-5.3.3-dist/js/${file}"/>`)
  .join("\n");

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Awesome Project</title>
    ${links}
</head>
<body>
    <!-- Your HTML content goes here -->
</body>
</html>
`;

fs.writeFileSync("index.html", htmlContent.trim());

console.log("HTML file generated successfully!");

#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs-extra");
const path = require("path");
const { spawnSync } = require("child_process");
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

/**
 * ESLint packages to install when ESLint is selected
 */
const ESLINT_PACKAGES = [
  "eslint",
  "eslint-config-airbnb", // Auto-installs react-hooks + other plugins
  "eslint-config-prettier",
  "eslint-plugin-prettier",
  "eslint-plugin-react-refresh",
  "@typescript-eslint/eslint-plugin",
  "@typescript-eslint/parser",
];

/**
 * Prompt configuration for project setup
 */
const PROJECT_PROMPTS = [
  {
    type: "input",
    name: "projectName",
    message: "What's the name of the project?",
    default: (answers, input) => input,
  },
  {
    type: "confirm",
    name: "eslint",
    message: "Do you want ESLint?",
    default: true,
  },
  {
    type: "confirm",
    name: "husky",
    message: "Do you want Husky?",
    default: true,
    when: (answers) => answers.eslint,
  },
];

/**
 * Get the appropriate npm command based on platform
 */
function getNpmCommand() {
  return process.platform === "win32" ? "npm.cmd" : "npm";
}

/**
 * Install npm packages
 */
function installPackages(packages, targetPath, isDev = false) {
  const npmCmd = getNpmCommand();
  const args = ["install"];
  
  if (isDev) {
    args.push("--save-dev");
  }
  
  args.push(...packages);

  return spawnSync(npmCmd, args, {
    cwd: targetPath,
    stdio: "inherit",
    shell: true,
  });
}

/**
 * Remove conditional files based on user selections
 */
async function removeConditionalFiles(targetPath, answers) {
  // Remove ESLint config if not selected
  if (!answers.eslint) {
    const eslintConfigPath = path.join(targetPath, "eslint.config.js");
    if (await fs.pathExists(eslintConfigPath)) {
      await fs.remove(eslintConfigPath);
      console.log("Removed eslint.config.js (ESLint not selected)");
    }
  }
}

/**
 * Process template files with EJS
 */
async function processPackageJson(targetPath, answers) {
  const packageJsonPath = path.join(targetPath, "package.json");
  const packageJson = await fs.readFile(packageJsonPath, "utf-8");
  
  const rendered = require("ejs").render(packageJson, {
    projectName: answers.projectName,
    eslint: answers.eslint,
    husky: answers.husky,
  });
  
  await fs.writeFile(packageJsonPath, rendered);
}

/**
 * Main project creation logic
 */
async function createProject(projectDir) {
  try {
    // Get user preferences
    const answers = await prompt(PROJECT_PROMPTS.map(prompt => ({
      ...prompt,
      default: prompt.name === "projectName" ? projectDir : prompt.default,
    })));

    // Setup paths
    const templatePath = path.join(__dirname, "../template");
    const targetPath = path.join(process.cwd(), answers.projectName);

    // Create project directory
    console.log(`Creating ${answers.projectName}...`);
    await fs.ensureDir(targetPath);

    // Copy template files
    console.log("Copying template files...");
    await fs.copy(templatePath, targetPath);

    // Remove conditional files
    await removeConditionalFiles(targetPath, answers);

    // Process package.json template
    await processPackageJson(targetPath, answers);

    // Install base dependencies
    console.log("Installing dependencies...");
    installPackages([], targetPath);

    // Install optional dependencies
    if (answers.eslint) {
      console.log("Installing ESLint packages...");
      installPackages(ESLINT_PACKAGES, targetPath, true);
    }

    if (answers.husky) {
      console.log("Installing Husky...");
      installPackages(["husky"], targetPath, true);
    }

    // Success message
    console.log(`\n✅ Thank you for using nova! Your project is ready at ${targetPath}`);
    console.log("\nNext steps:");
    console.log(`  cd ${answers.projectName}`);
    console.log(`  npm run dev`);

  } catch (error) {
    console.error("❌ Error creating project:", error);
    process.exit(1);
  }
}

// Setup CLI program
program
  .version(require("../package.json").version)
  .arguments("[project-directory]")
  .action(createProject)
  .parse(process.argv);

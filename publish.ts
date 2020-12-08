#!/usr/bin/ts-node
let done: boolean = false;
let commit: string = "";
let proc: any;
import { spawnSync } from "child_process"
import { readFileSync, writeFileSync } from "fs";
import readlineSync from 'readline-sync';
// Runs a command.
function runCommand(command: string) {
    const cmd = command.split(" ")[0];
    const cmdArgs = command.split(" ").slice(1);
    if (cmdArgs[0] == "commit") {
        const cmdcommit = command.replace("git commit -m ", "git,commit,-m,").split(",")[0]
        const cmdcommitArgs = command.replace("git commit -m ", "git,commit,-m,").split(",").slice(1);
        proc = spawnSync(cmd, cmdcommitArgs, {
            stdio: ['inherit', 'inherit', 'pipe']
        }) 
    } else {
    proc = spawnSync(cmd, cmdArgs, {
        stdio: ['inherit', 'inherit', 'pipe']
    })
    }
    //console.log(proc.status);
    if (proc.status == 1) {
        if (cmdArgs[0] == "push") {
            console.log("Git push failed")
            return false
        }
        throw 'Process exited unexpectedly: ' + proc.stderr;
    }
}
// Mess of options.
if (process.argv.slice(2)[0] === undefined) {
    console.error("Arguments required, Look at --help.")
    process.exit(1);
}
if (process.argv.slice(2)[0] == "--help") {
    console.log("publish.ts help");
    console.log("./publish.ts v0.0.1  publishes to NPM and GitHub with version number");
    process.exit(0);
} else if (process.argv.slice(2)[0] == "--version") {
    console.log("BeeMovie publish.ts v0.0.1");
    process.exit(0);
}
// Checks if arguments are right.
function checkIfVersion() {
    const myArgs = process.argv.slice(2)
    if (myArgs.length >= 2) {
        console.error("too many arguments");
        process.exit(1);
    } else if (myArgs.length == 1) {
        if (myArgs[0].includes("v")) {
            const matches = myArgs[0].match(/\d+/g);
            if (matches != null) {
                return myArgs[0];
            }
        } else {
            console.error("incorrect arguments");
            process.exit(1);
        }
    }
}
// This function changes the version object to the provided version and returns JSON.
function changeVersion(version: any, json: any) {
    const stringjson = JSON.stringify(json);
    const packagenew = stringjson.replace(packagedat.version, version.replace("v", ""));
    return JSON.parse(packagenew);
} 

const version: any = checkIfVersion();
console.log("We are releasing " + version);
console.log("Testing package for errors");
runCommand("yarn --silent test");
// package.json
const packagejson = readFileSync('./package.json');
const packagedat = JSON.parse(packagejson.toString());
const oldpackageversion = packagedat.version;
console.log("Changing package.json from v" + packagedat.version + " to " + version);
const packagenew = changeVersion(version, packagedat);
console.log("Writing package.json");
writeFileSync('package.json', JSON.stringify(packagenew, null, 4), 'utf8');
// lib/main.ts
console.log("Reading lib/main.ts");
const mainfile = readFileSync('./lib/main.ts');
console.log("Changing v" + oldpackageversion + " to " + version);
const mainnew = mainfile.toString();
const mainnew2 = mainnew.replace(packagedat.version, version.replace("v", ""));
console.log("Writing lib/main.ts");
writeFileSync('./lib/main.ts', mainnew2, 'utf8');
// readme.md
console.log("Reading README.md");
const readme = readFileSync("./README.md");
console.log("Changing v" + oldpackageversion + " to " + version);
const readnew = readme.toString();
const readnew2 = readnew.replace("v" + packagedat.version, version);
console.log("Writing README.md");
writeFileSync("./README.md", readnew2, 'utf-8');
// Commit to GitHub
runCommand("git tag " + version);
while (done == false) {
    commit = readlineSync.question("May I have your commit message?: ");
    console.log(commit);
    if (commit.length == 0 || commit === null) {
        console.log("Try again");
    } else {
        done = true;
    }
}
runCommand("git add .");
console.log('git commit,-m "' + commit + '"');
runCommand('git commit -m "' + commit + '"');
done = false;
while (done == false) {
    const ran: any = runCommand("git push")
    if (ran == false) {
        console.log("Try the push again.")
    } else {
        done = true;
    }
}
// Push to NPM
console.log("Pushing to npm");
console.log("Building dist/")
runCommand("yarn run build");
console.log("Logging into NPM");
runCommand("yarn login");
console.log("Publising @rooster-chicken/beemovie " + version);
runCommand("yarn publish --new-version " + version.replace("v" ,""));
console.log("BeeMovie " + version + " has been pushed to GitHub and published!");
import shell from "shelljs";
import logger from "./logger";

export const compileDev = () => {
  const taskName = "compile";
  return new Promise((resolve, reject) => {
    try {
      logger(taskName, "start");
      shell.exec("node compiler.js compile dev");
      logger(taskName, "end");
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

export const compileBuild = () => {
  const taskName = "compile";
  return new Promise((resolve, reject) => {
    try {
      logger(taskName, "start");
      shell.exec("node compiler.js compile");
      logger(taskName, "end");
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
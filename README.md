# Github_RN

### 1.安装react-navigation失败解决办法
npm ERR! path <path/to/project/root>/node_modules/react-native-version-number
npm ERR! code EISGIT
npm ERR! git <path/to/project/root>/node_modules/react-native-version-number: Appears to be a git repo or submodule.
npm ERR! git     <path/to/project/root>/node_modules/react-native-version-number
npm ERR! git Refusing to remove it. Update manually,
npm ERR! git or move it out of the way first.

解决：i had same issue fixing by going to given directory and remove .git " rm -rf .git " in my case : /home/lenovo/Desktop/native/fun/jobs/node_modules/react-native-safe-area-view
 
node_modules文件夹内react-native-safe-area-view内的.git文件删除即可解决
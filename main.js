const { app, BrowserWindow } = require('electron')
const path = require('path')
function createWindow () {
  // 创建软件的主窗口
  const win = new BrowserWindow({
    width: 1280,      // 默认窗口宽度
    height: 800,      // 默认窗口高度
    minWidth: 1024,   // 最小宽度限制
    minHeight: 700,   // 最小高度限制
    autoHideMenuBar: true, // 隐藏顶部的丑陋菜单栏，看起来更像专业级软件
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false  
    }
  })

  // 窗口最大化
  win.maximize();

  // 加载你的核心工作区文件
  win.loadFile('index.html')
}

// 软件启动逻辑
app.whenReady().then(createWindow)

// 监听所有窗口关闭的事件
app.on('window-all-closed', () => {
  // 除了苹果 macOS 系统（Mac应用通常习惯按 Cmd+Q 才彻底退出），
  // 其他系统（Windows/Linux）在关闭所有窗口后，直接彻底杀掉主进程。
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 仅针对 macOS 的唤醒逻辑
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
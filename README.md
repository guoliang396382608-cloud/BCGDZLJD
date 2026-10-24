# BCGDZLJD — 耕地质量等级核算平台

**Legacy prototype · 历史版本公开代码**

一个采用 Electron、HTML、JavaScript 构建的耕地质量等级核算桌面应用早期版本。本仓库用于展示历史软件实现和支持后续可复用组件的整理，不代表当前商业版本。

> **状态说明 / Status:** 这是从历史版本上传的初始代码快照。它不是已完成安全审计或生产验证的正式开源发行版，后续将逐步改进文档、测试、依赖与代码安全性。

## 主要功能 / Features

- 耕地质量等级核算与结果展示
- 评价指标与分级参数配置
- Excel 表格导入与数据处理
- 统计报表与图表展示
- 本地桌面运行（Electron）

功能描述以此仓库实际代码为准；与最新私有软件中的功能可能不同。

## 技术 / Technology

- Electron + HTML/CSS/JavaScript
- SheetJS Community Edition（本地 Excel 处理组件）
- Apache ECharts（数据可视化组件）

详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 本地运行 / Run locally

1. 安装 Node.js 与 npm（版本兼容性尚需验证）。
2. 克隆仓库并进入目录。
3. 执行 `npm install`（依赖锁文件与清单存在版本差异，安装时可能需要更新 lockfile）。
4. 执行 `npm start`。

```bash
git clone https://github.com/guoliang396382608-cloud/BCGDZLJD.git
cd BCGDZLJD
npm install
npm start
```

**注意：** 历史版本带有客户端登录/授权处理逻辑。此类客户端校验不能当作可靠的安全边界，不应复用仓库中历史版本的任何访问凭据或授权参数。不要将该版本直接部署到包含真实项目数据的生产环境。

## 项目目标 / Project goals

项目关注耕地质量技术评价中的数据一致性、可追溯计算和重复性工作。后续开源维护方向包括：

- 拆分可独立使用的表格数据检查和字段映射工具
- 增加虚构测试数据与自动化回归测试
- 改善文档、依赖管理和桌面安全配置
- 发布经过审查且不包含真实项目数据的可复用模块

这些是**计划工作**，不代表相关模块已独立发布，也不代表已有外部用户或采用量。

## 贡献与问题反馈 / Contributions

欢迎通过 GitHub Issues 反馈可复现的问题和功能建议。请勿上传真实地块、客户、调查点位或个人信息。涉及安全的细节，请勿在公开 Issue 中披露，详见 [SECURITY.md](SECURITY.md)。

## 许可证 / Licensing

**仓库自身代码的开源许可证待代码权属与第三方组件合规审查后确定。** 公开可见不等于已经授权其他人自由复制、修改或再分发。仓库内第三方组件仍适用其各自许可证。

---

### English summary

BCGDZLJD is an early Electron desktop prototype for cultivated-land quality grade assessment, spreadsheet-based processing, configurable evaluation indicators, and reporting. It is maintained as a legacy code reference while reusable, non-proprietary components are prepared for a future open-source release. This repository does **not** currently claim public adoption, automated test coverage, or a production-ready security posture.

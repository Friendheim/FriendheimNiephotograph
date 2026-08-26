# 创作作品识别任务（Creative 主题 · 12 张）

请识别我上传的照片，为**每一张**输出三个字段。⚠️ 这是「创作」类作品，文案风格要与普通摄影作品**明显不同**。

## 硬性要求

1. **title** — 3~6 个英文单词；有辨识度、有艺术感、可以更大胆更实验；**不要**平静抒情风（不要出现 "quiet / still / gentle / small" 这类词）。
2. **subject** — 照片里实际有什么（1 句英文，如实描述；如果是海报、拼贴、插画、实验图像，就清楚描述它的视觉构成：色彩、图形、排版、材质、内容）。
3. **description** — 2~3 句英文创作说明。**最关键的规则：12 张的说明风格必须各不相同** —— 不要用同一个句式模板复读；每张换一种声音，例如：
   - 有的像策展人注释（冷静、专业、谈构成与意图）
   - 有的像一句诗（凝练、意象化）
   - 有的像艺术家自述（第一人称、谈动机）
   - 有的只给一句锐利的观察
   - 有的像杂志里的一段短评
   但都必须是**真实描述画面**的内容，不编造画面里没有的元素。

## 输出格式

严格 JSON 数组，每张一个对象，**按我上传图片的顺序**对应，`file` 字段用下面给出的文件名：

```json
[
  {"file": "creative/creative-01.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "creative/creative-02.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "creative/creative-03.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "creative/creative-04.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "creative/creative-05.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "creative/creative-06.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "creative/creative-07.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "creative/creative-08.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "creative/creative-09.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "creative/creative-10.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "creative/creative-11.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "creative/creative-12.jpg", "title": "...", "subject": "...", "description": "..."}
]
```

## 使用步骤

1. 把 12 张照片（`D:\Deepseekharners\Picture\src\assets\works\creative\` 里的 creative-01.jpg ~ creative-12.jpg）上传给那个 AI
2. 把本文件内容粘贴给 AI，让它按格式输出
3. 把 AI 返回的 JSON 保存成文件 `D:\Deepseekharners\Picture\creative-descriptions.txt`，然后告诉我"好了"

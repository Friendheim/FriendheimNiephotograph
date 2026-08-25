# 照片识别任务（发给任意能看图的 AI）

请识别我上传的照片，为**每一张**输出三个字段：

1. **title** — 3~6 个英文单词的、有氛围感的作品标题
2. **subject** — 照片里实际有什么（1 句英文，如实描述；即使照片模糊/抽象/拍坏了也如实说）
3. **description** — 2~3 句英文创作说明（编辑风格、克制、安静；**只写真实可见的细节，不要编造**照片里没有的内容）

输出格式：严格 JSON 数组，每张一个对象，**按我上传图片的顺序**对应，`file` 字段必须使用下面给出的文件名：

```json
[
  {"file": "portrait/portrait-05.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "landscape/landscape-02.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "landscape/landscape-03.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "street/street-01.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "street/street-02.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "street/street-03.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "street/street-04.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "street/street-05.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "street/street-06.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "street/street-07.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "travel/travel-01.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "travel/travel-02.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "travel/travel-03.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "travel/travel-04.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "travel/travel-05.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "travel/travel-06.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "travel/travel-07.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "travel/travel-08.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "travel/travel-09.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "travel/travel-10.jpg", "title": "...", "subject": "...", "description": "..."},
  {"file": "travel/travel-11.jpg", "title": "...", "subject": "...", "description": "..."}
]
```

## 使用步骤

1. 把上面列出的 **21 张照片**（在 `D:\Deepseekharners\Picture\src\assets\works\` 对应文件夹里）上传给那个 AI（ChatGPT / Kimi / 通义等都可以）
2. 把本文件的内容粘贴给 AI，让它按格式输出
3. 把 AI 返回的 JSON 保存成文件 `D:\Deepseekharners\Picture\descriptions.txt`，然后告诉我"好了"

> 说明：另外 7 张（portrait-01~04、portrait-06、landscape-01、landscape-04）我已经识别好了，不需要再传。

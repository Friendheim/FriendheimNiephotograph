# 《爱在三部曲》照片识别任务（3 张）

请识别我上传的 3 张照片。这是一个摄影系列《Before Trilogy》（对应《爱在黎明破晓前 / 爱在日落黄昏时 / 爱在午夜降临前》）的选图与文案匹配任务。

## 对每张照片输出（严格 JSON，按我上传的顺序）

```json
[
  {
    "file": "photo-1",
    "subject": "画面里实际有什么（2-3 句英文，如实描述：场景、人物、物体、构图）",
    "time_of_day": "黎明 / 清晨 / 午后 / 黄昏 / 蓝调时刻 / 夜晚（选择最接近的）",
    "light": "光线特点（1 句：方向、色温、强弱、是否逆光）",
    "mood": "氛围（2-4 个词，如 quiet / tender / nostalgic / lonely）",
    "people": "是否有人？几个人？在做什么？",
    "trilogy_part": "这张最适合《爱在黎明破晓前》(sunrise) / 《爱在日落黄昏时》(sunset) / 《爱在午夜降临前》(midnight) 中的哪一部？为什么（1 句）"
  },
  {
    "file": "photo-2",
    "subject": "...",
    "time_of_day": "...",
    "light": "...",
    "mood": "...",
    "people": "...",
    "trilogy_part": "..."
  },
  {
    "file": "photo-3",
    "subject": "...",
    "time_of_day": "...",
    "light": "...",
    "mood": "...",
    "people": "...",
    "trilogy_part": "..."
  }
]
```

## 要求

- **如实描述**画面内容，不编造（即使照片模糊、抽象、无人，也如实说）
- time_of_day 和 trilogy_part 是你基于画面内容的判断，用于我确认三部曲的排序（黎明 → 黄昏 → 午夜）
- 不需要写作品标题或诗意描述 —— 那部分我已经写好了，你的识别用于匹配与微调

## 使用步骤

1. 把 3 张照片上传给那个 AI（顺序：黎明/早晨感最强的第 1 张，黄昏感的第 2 张，夜晚感的第 3 张；或者任意顺序并说明）
2. 粘贴本文件内容
3. 把 AI 返回的 JSON 保存成 `D:\Deepseekharners\Picture\before-descriptions.txt`，然后告诉我"好了"

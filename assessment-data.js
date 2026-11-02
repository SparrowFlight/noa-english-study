window.ASSESSMENT_DATA = {
  listening: [
    {
      id: "driver",
      title: "司机留言",
      context: "你刚到机场，司机给你留了一段语音。只听录音，不要看原文。",
      audio: "assets/audio/driver.wav",
      transcript: "Hi, this is Daniel, your driver. I'm waiting outside Terminal 3, near the coffee shop. I'm driving a silver Toyota. There's a lot of traffic, so please don't worry if I'm a few minutes late. Could you meet me at pickup zone B at ten thirty? If you can't find me, just call this number.",
      questions: [
        {
          q: "司机在哪里等你？",
          options: ["Terminal 2 的主入口", "Terminal 3 的咖啡店附近", "Pickup zone A"],
          answer: 1
        },
        {
          q: "怎样认出司机的车？",
          options: ["一辆黑色 SUV", "一辆银色 Toyota", "一辆白色面包车"],
          answer: 1
        },
        {
          q: "几点在哪里见面？",
          options: ["10:00，Zone A", "10:30，Zone B", "11:30，Terminal 2"],
          answer: 1
        }
      ]
    },
    {
      id: "roadtest",
      title: "路测安排变更",
      context: "本地合作方发来一段工作语音。注意时间、地点和设备。",
      audio: "assets/audio/roadtest.wav",
      transcript: "Hi, this is Maya from the local partner. Tomorrow's road test will start at seven thirty, not eight o'clock. Please use the north gate. We have two test vehicles, but vehicle B still has a camera issue, so we'll start with vehicle A only. Please bring the updated test checklist and send me the data by the end of the day.",
      questions: [
        {
          q: "路测几点开始？",
          options: ["7:30", "8:00", "8:30"],
          answer: 0
        },
        {
          q: "集合地点在哪里？",
          options: ["南门", "北门", "医院停车场"],
          answer: 1
        },
        {
          q: "为什么只先使用车辆 A？",
          options: ["车辆 B 有摄像头问题", "车辆 B 没有司机", "车辆 A 是唯一充满电的车"],
          answer: 0
        },
        {
          q: "对方要求你今天结束前做什么？",
          options: ["发数据", "更换车辆", "预订酒店"],
          answer: 0
        }
      ]
    },
    {
      id: "update",
      title: "项目进度留言",
      context: "同事发来一段项目更新。抓住结果、问题、会议时间和下一步。",
      audio: "assets/audio/update.wav",
      transcript: "Just a quick update. We tested the city-centre route this morning and completed eighteen test cases. The system worked well at most intersections, but we saw one unexpected lane change near the hospital. We're reviewing the data now. Could we move tomorrow's review meeting from two o'clock to four? Please confirm by lunchtime.",
      questions: [
        {
          q: "今天上午完成了多少个测试用例？",
          options: ["8个", "18个", "80个"],
          answer: 1
        },
        {
          q: "在哪里出现了意外变道？",
          options: ["医院附近", "北门附近", "机场附近"],
          answer: 0
        },
        {
          q: "会议从几点改到几点？",
          options: ["从2点改到4点", "从4点改到2点", "从7:30改到8点"],
          answer: 0
        },
        {
          q: "最晚什么时候需要确认？",
          options: ["午饭前", "下班前", "明天上午"],
          answer: 0
        }
      ]
    }
  ],
  speaking: [
    {
      id: "job",
      title: "职业与职责",
      prompt: "What do you do, and what are you responsible for?",
      helper: "用60秒回答。不要写稿，不要先翻译中文。",
      seconds: 60
    },
    {
      id: "customs",
      title: "海关询问",
      prompt: "You're at customs. Tell the officer why you're here, how long you're staying, and where you're staying.",
      helper: "把它当成真实对话，不要背诵一整篇演讲稿。",
      seconds: 60
    },
    {
      id: "noa",
      title: "解释 NOA",
      prompt: "Explain NOA to a non-technical local partner in simple English.",
      helper: "目标是让对方听懂，不是展示专业词汇。可使用90秒。",
      seconds: 90
    },
    {
      id: "clarify",
      title: "没听懂时救场",
      prompt: "Your partner says: 'We need to revisit the edge cases before the next rollout.' You don't fully understand. Respond and keep the conversation going.",
      helper: "请录下你的完整回应。重点是自然追问和确认。",
      seconds: 45
    },
    {
      id: "issue",
      title: "说明一个问题",
      prompt: "A test issue happened yesterday. Explain what happened, why it matters, and what the next step is.",
      helper: "使用90秒。可以在系统问题、路测问题或沟通问题中任选一个。",
      seconds: 90
    }
  ],
  pronunciation: {
    words: [
      "business",
      "purpose",
      "engineer",
      "automotive",
      "assisted",
      "systems",
      "vehicle",
      "deployment",
      "validation",
      "route",
      "colleague",
      "schedule",
      "launch",
      "safety",
      "camera",
      "intersection"
    ],
    sentences: [
      "I'm an automotive engineer. I work on driver-assistance systems.",
      "I'm responsible for local deployment in Southeast Asia.",
      "Could you say that again more slowly?",
      "We've tested about thirty vehicles in three cities."
    ],
    seconds: 75
  },
  workTask: {
    title: "90秒工作说明",
    prompt: "Your local partner asks for a quick project update. Explain: what you have completed, one current issue, and the next step. Speak for about 90 seconds.",
    helper: "不要写完整稿。只在心里准备三个关键词：completed / issue / next step。",
    seconds: 90
  }
};

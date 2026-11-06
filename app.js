(() => {
  "use strict";

  const STORAGE_KEY = "noa-english-study-v1";

  const weeks = window.PERSONAL_WEEKS || [
    {
      number: 1,
      title: "出差不慌",
      goal: "海关、自我介绍、请求重复",
      days: [
        ["职业与来意", "不看稿回答5个海关问题并录音。", "I'm an automotive engineer. I work on driver-assistance systems."],
        ["海关问答", "完成海关角色扮演，做到看见问题就能回答。", "I'm here on business. I'm working with our local partner on a road test."],
        ["听不懂时救场", "把3句救场表达练到不用想。", "Sorry, could you say that again more slowly?"],
        ["机场到酒店", "模拟机场问路、出租车和酒店入住。", "Could you take me to this hotel, please?"],
        ["司机协调", "练接送时间、地点、航站楼和联系方式。", "Could you pick me up at the lobby at eight?"],
        ["综合复测", "重做第1天的5个问题，对比录音A和B。", "I'm staying for about a week. I'm flying back on Friday."]
      ]
    },
    {
      number: 2,
      title: "出行与应急",
      goal: "交通、时间、改签、问题和解决方案",
      days: [
        ["时间与地点", "用时间、地点、人物说清一个安排。", "Let's meet at the hotel lobby at eight thirty."],
        ["交通与路线", "听一段交通材料，抓出发地、目的地和路线。", "What's the fastest way to get to the test site?"],
        ["机场变故", "模拟航班延误、改签、行李问题。", "My flight has been delayed. What are my options?"],
        ["酒店问题", "表达房间、网络、接送等基本问题。", "The Wi-Fi isn't working in my room."],
        ["当地生活", "练习货币、电话卡、天气和饮食。", "Where can I get a local SIM card?"],
        ["综合复测", "把本周5个场景各做一遍，不看答案。", "Just to confirm, the driver will arrive at seven, right?"]
      ]
    },
    {
      number: 3,
      title: "日常协调",
      goal: "前台、司机、同事和简单电话",
      days: [
        ["前台沟通", "请求帮助，同时说明时间和对象。", "Could you help me contact the local partner?"],
        ["电话开场", "练接电话、报名字、说明来意。", "Hi, this is [name] from [company]. Is this a good time to talk?"],
        ["电话确认", "重复关键数字、时间、地点和下一步。", "So, we'll start the test at nine tomorrow morning."],
        ["预约与变更", "练习改时间、取消和重新安排。", "Would it be possible to move the meeting to two o'clock?"],
        ["小范围闲聊", "练天气、交通、周末和本地生活。", "How's the traffic around here in the morning?"],
        ["综合复测", "完成一通3分钟电话并写下行动项。", "Let me confirm the next step."]
      ]
    },
    {
      number: 4,
      title: "出行任务通关",
      goal: "海关、机场、酒店、司机综合模拟",
      days: [
        ["任务前准备", "准备5个可能问题和答案。", "I'm here to meet our local partner and support a road test."],
        ["海关模拟", "随机回答职业、来意、停留时间和住宿。", "I'm staying at the [hotel name] in [area]."],
        ["交通模拟", "机场到酒店，再从酒店到测试场。", "How long does it usually take to get there?"],
        ["问题处理", "模拟行李、网络、迟到、临时更改。", "I need to change my pickup time to nine."],
        ["无稿输出", "用2分钟讲完整行程，不写稿。", "Tomorrow morning, I'll meet the team at the hotel."],
        ["阶段复测", "完成连续5分钟综合角色扮演。", "Let me make sure I understand the plan."]
      ]
    },
    {
      number: 5,
      title: "说清岗位",
      goal: "职业、产品、项目和职责",
      days: [
        ["一句话介绍工作", "用三句英语说清你是谁、做什么、负责什么。", "My team develops assisted driving systems."],
        ["解释 NOA", "对外行解释 NOA，不使用过多缩写。", "NOA is our navigation-assisted driving feature."],
        ["项目状态", "说明阶段、进度、风险和下一步。", "We're currently in the validation phase."],
        ["数字与范围", "练车辆数、测试里程、城市、比例和日期。", "We've tested about 30 vehicles in three cities."],
        ["职责边界", "说明你负责什么、不负责什么。", "I'm responsible for local deployment and partner coordination."],
        ["产品介绍", "做60秒产品介绍并录音。", "The system helps drivers navigate complex roads more safely."]
      ]
    },
    {
      number: 6,
      title: "说明问题",
      goal: "问题、原因、影响和处理方式",
      days: [
        ["描述现象", "按地点、条件、现象、频率说明问题。", "The vehicle slows down suddenly at this intersection."],
        ["说明影响", "说清对测试、进度或客户的影响。", "This issue may delay tomorrow's road test."],
        ["提出方案", "用简单句给出一到两个方案。", "We can either remap the area or change the test route."],
        ["请示与确认", "请求对方决定，并确认下一步。", "Could you confirm who will join the test tomorrow?"],
        ["口头更新", "做90秒项目进度更新。", "So far, we've completed two rounds of testing."],
        ["综合复测", "模拟向客户解释一个问题并给方案。", "We've identified the issue, and here's our next step."]
      ]
    },
    {
      number: 7,
      title: "路测协调",
      goal: "路线、车辆、人员、安全和问题复现",
      days: [
        ["测试前确认", "确认时间、车辆、司机、路线和设备。", "Are all the test vehicles ready for tomorrow?"],
        ["布置任务", "用简短指令说明谁在什么时间做什么。", "Please start the route from the north gate."],
        ["描述路况", "练车道、路口、施工、拥堵和天气。", "There's construction on the main road."],
        ["记录问题", "描述时间、地点、操作和系统反应。", "At 10:15, the system changed lanes unexpectedly."],
        ["安全沟通", "练停车、暂停测试和风险提醒。", "Let's stop the test and check the vehicle first."],
        ["路测简报", "做2分钟路测简报。", "The route is about 20 kilometres long and takes 45 minutes."]
      ]
    },
    {
      number: 8,
      title: "会议推进",
      goal: "开会、追问、确认和行动项",
      days: [
        ["会议开场", "介绍目的、议程和时间。", "The purpose of today's meeting is to review the test plan."],
        ["表达观点", "用简单结构表达同意、不同意和疑问。", "I agree with the approach, but I have one concern."],
        ["及时追问", "在会议中打断并请求澄清。", "Could you explain what you mean by 'edge case'?"],
        ["确认决定", "用自己的话复述会议决定。", "So we've agreed to start with the city-centre route."],
        ["行动项", "说清负责人、截止时间和交付物。", "I'll send the updated checklist by Wednesday."],
        ["会议模拟", "做一场5分钟项目会议。", "Let's move on to the next topic."]
      ]
    },
    {
      number: 9,
      title: "建立关系",
      goal: "寒暄、合作与跨文化沟通",
      days: [
        ["见面寒暄", "问候、感谢、回忆上次见面。", "It's good to finally meet you in person."],
        ["礼貌请求", "用Could/Would表达请求，避免太直接。", "Would you mind sharing the route file with me?"],
        ["处理分歧", "先确认，再表达不同意见。", "I see your point. My concern is safety."],
        ["文化差异", "询问当地习惯并表达尊重。", "Is there anything I should know before the visit?"],
        ["小型闲聊", "准备三个安全工作话题和三个好问题。", "What's the best time of year to visit this area?"],
        ["合作回顾", "总结合作成果和下一步。", "Thanks for your support. We've made good progress this week."]
      ]
    },
    {
      number: 10,
      title: "处理冲突",
      goal: "投诉、延期、道歉和挽回",
      days: [
        ["礼貌指出问题", "不攻击人，只描述事实和影响。", "There seems to be a delay with the vehicle permit."],
        ["表达担忧", "说清风险，但保持合作语气。", "My main concern is that we may miss the launch date."],
        ["提出折中方案", "用两个选项推动决定。", "Could we run a shorter test on Thursday instead?"],
        ["道歉与补救", "承认问题并说明下一步。", "I'm sorry for the late update. Here's what we're doing now."],
        ["坚持边界", "在安全或合规问题上明确说不。", "I'm afraid we can't continue until this is resolved."],
        ["冲突模拟", "模拟延期和质量问题沟通。", "Let's focus on what we can deliver this week."]
      ]
    },
    {
      number: 11,
      title: "演示与问答",
      goal: "介绍方案、讲清价值、回答问题",
      days: [
        ["开场30秒", "讲清主题、重要性和结构。", "Today I'd like to share our plan for the next phase."],
        ["讲流程", "用First/Then/After that讲步骤。", "First, we'll collect data. Then we'll review the edge cases."],
        ["讲价值", "分别说明安全、体验和效率价值。", "This will help reduce manual intervention during the test."],
        ["回答问题", "先确认问题，再回答，不会就说明跟进。", "That's a good question. Let me check and get back to you."],
        ["处理追问", "用短句补充证据和限制。", "We don't have that data yet, but we'll have it by Friday."],
        ["完整演示", "录一段3分钟演示。", "To sum up, we're on track for the next milestone."]
      ]
    },
    {
      number: 12,
      title: "独立出差",
      goal: "综合模拟与结业复测",
      days: [
        ["出发前检查", "完成海关、证件、住宿和联系人模拟。", "I have my passport, visa, and hotel confirmation here."],
        ["到岗第一天", "完成见面、自我介绍和任务确认。", "My goal this week is to complete the first round of testing."],
        ["路测日", "完成晨会、现场问题汇报和收尾。", "We completed 18 test cases and found two new issues."],
        ["合作方会议", "完成问题说明、方案讨论和行动项确认。", "Let's assign an owner and a deadline for each action."],
        ["完整出差模拟", "连续完成10分钟无稿综合练习。", "Overall, the test went well, but we found one critical issue."],
        ["结业复测", "重做第一次录音题目并评分。", "I'm responsible for the local deployment of our assisted driving system."]
      ]
    }
  ];
  const dailyMaterials = window.PERSONAL_DAILY_MATERIALS || {};
  const dailyMessages = window.PERSONAL_DAILY_MESSAGES || {};
  weeks.forEach((week) => {
    week.days.forEach((day, index) => {
      day[3] = dailyMaterials[week.number]?.[index] || "";
      day[4] = dailyMessages[week.number]?.[index] || "";
    });
  });

  const phases = window.PERSONAL_PHASES || [
    { range: [1, 4], title: "先能出差", text: "海关、机场、酒店、司机和救场话术。" },
    { range: [5, 8], title: "再能工作", text: "岗位、产品、问题、路测和会议推进。" },
    { range: [9, 12], title: "独立沟通", text: "合作方关系、冲突、演示和完整出差模拟。" }
  ];

  const phrases = [...(window.PERSONAL_PHRASES || []),
    { zh: "对不起，可以再说慢一点吗？", en: "Sorry, could you say that again more slowly?", cat: "救场", level: 1 },
    { zh: "最后一部分我没听清。", en: "I didn't catch the last part.", cat: "救场", level: 1 },
    { zh: "你的意思是……吗？", en: "Do you mean ...?", cat: "救场", level: 1 },
    { zh: "我确认一下，……对吗？", en: "Just to confirm, ..., right?", cat: "救场", level: 1 },
    { zh: "可以帮我拼一下吗？", en: "Could you spell that for me?", cat: "救场", level: 1 },
    { zh: "这个说法我不太熟，它是什么意思？", en: "I'm not familiar with that term. What does it mean?", cat: "救场", level: 2 },
    { zh: "我换一种说法。", en: "Let me rephrase that.", cat: "救场", level: 1 },
    { zh: "我理解的是……", en: "My understanding is that ...", cat: "确认", level: 2 },
    { zh: "下一步是什么？", en: "What's the next step?", cat: "确认", level: 1 },
    { zh: "可以发到聊天或邮件里吗？", en: "Could you send that in the chat or by email?", cat: "确认", level: 2 },

    { zh: "我来出差的。", en: "I'm here on business.", cat: "海关", level: 1 },
    { zh: "我与本地合作方一起进行道路测试。", en: "I'm working with our local partner on a road test.", cat: "海关", level: 2 },
    { zh: "我是一名汽车工程师。", en: "I'm an automotive engineer.", cat: "职业", level: 1 },
    { zh: "我负责驾驶辅助系统。", en: "I work on driver-assistance systems.", cat: "职业", level: 2 },
    { zh: "我的团队开发辅助驾驶系统。", en: "My team develops assisted driving systems.", cat: "职业", level: 2 },
    { zh: "我负责东南亚的本地落地。", en: "I'm responsible for local deployment in Southeast Asia.", cat: "职业", level: 2 },
    { zh: "NOA 是我们的导航辅助驾驶功能。", en: "NOA is our navigation-assisted driving feature.", cat: "职业", level: 2 },
    { zh: "我在[公司]担任技术负责人。", en: "I'm a technical lead at [company].", cat: "职业", level: 1 },
    { zh: "我住在这个酒店。", en: "I'm staying at this hotel.", cat: "酒店", level: 1 },
    { zh: "我周五飞回去。", en: "I'm flying back on Friday.", cat: "海关", level: 1 },
    { zh: "没有需要申报的物品。", en: "Nothing to declare.", cat: "海关", level: 1 },

    { zh: "请带我去这家酒店。", en: "Could you take me to this hotel, please?", cat: "出行", level: 1 },
    { zh: "请问通常要多久？", en: "How long does it usually take?", cat: "出行", level: 1 },
    { zh: "可以八点来大堂接我吗？", en: "Could you pick me up at the lobby at eight?", cat: "出行", level: 1 },
    { zh: "我想把接车时间改到九点。", en: "I need to change my pickup time to nine.", cat: "出行", level: 2 },
    { zh: "去测试场最快的路线是什么？", en: "What's the fastest way to get to the test site?", cat: "出行", level: 2 },
    { zh: "航班延误了，我有哪些选择？", en: "My flight has been delayed. What are my options?", cat: "出行", level: 2 },
    { zh: "我在机场哪个航站楼？", en: "Which terminal should I go to at the airport?", cat: "出行", level: 1 },
    { zh: "司机到了吗？", en: "Has the driver arrived yet?", cat: "出行", level: 1 },

    { zh: "这是我的[姓名]，来自[公司]。", en: "This is [name] from [company].", cat: "电话", level: 1 },
    { zh: "现在方便说话吗？", en: "Is this a good time to talk?", cat: "电话", level: 1 },
    { zh: "可以重复一下数字吗？", en: "Could you repeat the number, please?", cat: "电话", level: 1 },
    { zh: "可以把会议改到两点吗？", en: "Would it be possible to move the meeting to two o'clock?", cat: "会议", level: 2 },
    { zh: "会议目的是评审测试计划。", en: "The purpose of today's meeting is to review the test plan.", cat: "会议", level: 2 },
    { zh: "我同意这个方向，但有一个顾虑。", en: "I agree with the approach, but I have one concern.", cat: "会议", level: 2 },
    { zh: "可以解释一下你说的是什么意思吗？", en: "Could you explain what you mean by that?", cat: "会议", level: 1 },
    { zh: "我们已同意先跑市中心路线。", en: "So we've agreed to start with the city-centre route.", cat: "会议", level: 2 },
    { zh: "我会在周三前发出更新后的清单。", en: "I'll send the updated checklist by Wednesday.", cat: "会议", level: 2 },
    { zh: "我们来看下一个议题。", en: "Let's move on to the next topic.", cat: "会议", level: 1 },

    { zh: "我们目前处于验证阶段。", en: "We're currently in the validation phase.", cat: "项目", level: 2 },
    { zh: "我们已在三个城市测试了约30辆车。", en: "We've tested about 30 vehicles in three cities.", cat: "项目", level: 2 },
    { zh: "这个系统帮助驾驶员更安全地通过复杂道路。", en: "The system helps drivers navigate complex roads more safely.", cat: "项目", level: 2 },
    { zh: "车辆在这个路口会突然减速。", en: "The vehicle slows down suddenly at this intersection.", cat: "问题", level: 2 },
    { zh: "这个问题可能延误明天的路测。", en: "This issue may delay tomorrow's road test.", cat: "问题", level: 2 },
    { zh: "我们可以重新测绘这个区域，或者更改路线。", en: "We can either remap the area or change the test route.", cat: "问题", level: 2 },
    { zh: "目前完成了两轮测试。", en: "So far, we've completed two rounds of testing.", cat: "项目", level: 2 },
    { zh: "我们已经定位问题，下一步是……", en: "We've identified the issue, and here's our next step.", cat: "问题", level: 2 },
    { zh: "所有测试车辆都准备好了吗？", en: "Are all the test vehicles ready for tomorrow?", cat: "路测", level: 1 },
    { zh: "请从北门开始这条路线。", en: "Please start the route from the north gate.", cat: "路测", level: 1 },
    { zh: "主路在施工。", en: "There's construction on the main road.", cat: "路测", level: 1 },
    { zh: "十点十五分，系统意外变道。", en: "At 10:15, the system changed lanes unexpectedly.", cat: "路测", level: 2 },
    { zh: "我们先停车检查车辆。", en: "Let's stop the test and check the vehicle first.", cat: "路测", level: 1 },
    { zh: "路线约20公里，需要45分钟。", en: "The route is about 20 kilometres long and takes 45 minutes.", cat: "路测", level: 2 },

    { zh: "很高兴终于见到你本人。", en: "It's good to finally meet you in person.", cat: "社交", level: 1 },
    { zh: "你介意把路线文件发给我吗？", en: "Would you mind sharing the route file with me?", cat: "请求", level: 2 },
    { zh: "我明白你的意思，我担心的是安全。", en: "I see your point. My concern is safety.", cat: "分歧", level: 2 },
    { zh: "参观前有什么需要我了解的吗？", en: "Is there anything I should know before the visit?", cat: "社交", level: 1 },
    { zh: "感谢你的支持，本周进展不错。", en: "Thanks for your support. We've made good progress this week.", cat: "合作", level: 2 },
    { zh: "车辆许可似乎有延误。", en: "There seems to be a delay with the vehicle permit.", cat: "问题", level: 2 },
    { zh: "我主要担心错过发布节点。", en: "My main concern is that we may miss the launch date.", cat: "问题", level: 2 },
    { zh: "我们周四改跑一段更短的测试可以吗？", en: "Could we run a shorter test on Thursday instead?", cat: "方案", level: 2 },
    { zh: "很抱歉更新晚了，我们现在这样做。", en: "I'm sorry for the late update. Here's what we're doing now.", cat: "道歉", level: 2 },
    { zh: "在问题解决前，我们不能继续。", en: "I'm afraid we can't continue until this is resolved.", cat: "边界", level: 2 },

    { zh: "今天我想分享下一阶段的计划。", en: "Today I'd like to share our plan for the next phase.", cat: "演示", level: 2 },
    { zh: "首先，然后，之后。", en: "First ... Then ... After that ...", cat: "结构", level: 1 },
    { zh: "这有助于减少测试中的人工接管。", en: "This will help reduce manual intervention during the test.", cat: "演示", level: 3 },
    { zh: "这个问题很好，我查一下再回复你。", en: "That's a good question. Let me check and get back to you.", cat: "问答", level: 2 },
    { zh: "我们目前还没有数据，周五会有。", en: "We don't have that data yet, but we'll have it by Friday.", cat: "问答", level: 2 },
    { zh: "总的来说，我们在按计划推进。", en: "To sum up, we're on track for the next milestone.", cat: "总结", level: 2 },
    { zh: "请为每项行动指定负责人和截止时间。", en: "Let's assign an owner and a deadline for each action.", cat: "会议", level: 2 },
    { zh: "总体测试顺利，但发现一个关键问题。", en: "Overall, the test went well, but we found one critical issue.", cat: "总结", level: 2 }
  ];

  const scenarios = [...(window.PERSONAL_SCENARIOS || []),
    {
      id: "customs",
      title: "海关问答",
      subtitle: "职业、来意、停留时间、住宿",
      level: "出差必练",
      dialogue: [
        ["Officer", "What's the purpose of your visit?"],
        ["You", "I'm here on business. I'm working with our local partner on a road test."],
        ["Officer", "What do you do?"],
        ["You", "I'm an automotive engineer. I work on driver-assistance systems."],
        ["Officer", "How long are you staying?"],
        ["You", "About a week. I'm flying back on Friday."],
        ["Officer", "Where are you staying?"],
        ["You", "At the [hotel name] in [area]."],
        ["Officer", "Do you have anything to declare?"],
        ["You", "No, nothing to declare."]
      ]
    },
    {
      id: "self",
      title: "工作自我介绍",
      subtitle: "60秒讲清岗位、产品和职责",
      level: "核心表达",
      dialogue: [
        ["You", "Hi, I'm [name]. I'm a technical lead at [company]."],
        ["You", "My team develops assisted driving systems, including NOA."],
        ["You", "NOA is our navigation-assisted driving feature."],
        ["You", "I'm responsible for local deployment in Southeast Asia."],
        ["You", "This week, I'm here to meet our local partner and support the road test."],
        ["You", "Let me know if you'd like me to go into more detail."]
      ]
    },
    {
      id: "airport",
      title: "机场与酒店",
      subtitle: "问路、出租车、入住",
      level: "日常出行",
      dialogue: [
        ["You", "Excuse me, where can I get a taxi?"],
        ["Staff", "Go out of this exit and follow the signs."],
        ["You", "Could you take me to this hotel, please?"],
        ["Driver", "Sure. Do you have the address?"],
        ["You", "Yes, it's here on my phone. How long does it usually take?"],
        ["Driver", "About 40 minutes if the traffic isn't too bad."],
        ["You", "I have a reservation under [name]."],
        ["Receptionist", "Could I see your passport, please?"],
        ["You", "Of course. Here you are."]
      ]
    },
    {
      id: "clarify",
      title: "没听懂时救场",
      subtitle: "追问、确认、换一种说法",
      level: "降低紧张",
      dialogue: [
        ["Partner", "We need to check the edge cases before the next rollout."],
        ["You", "Sorry, could you say that again more slowly?"],
        ["Partner", "Of course. We need to review the unusual scenarios first."],
        ["You", "Do you mean cases where the system behaves differently?"],
        ["Partner", "Exactly."],
        ["You", "Just to confirm, we'll finish the review before Friday, right?"],
        ["Partner", "Yes, that's the plan."],
        ["You", "Thanks. Could you send that in the chat so we have it in writing?"]
      ]
    },
    {
      id: "meeting",
      title: "项目会议",
      subtitle: "观点、确认、行动项",
      level: "工作进阶",
      dialogue: [
        ["You", "The purpose of today's meeting is to review the test plan."],
        ["Partner", "I think we should start with the city-centre route."],
        ["You", "I agree with the approach, but I have one concern."],
        ["Partner", "What's your concern?"],
        ["You", "The traffic may make it difficult to repeat the test conditions."],
        ["Partner", "That's a good point. Could we run it early in the morning?"],
        ["You", "Yes. So we've agreed to start with the city-centre route at seven."],
        ["You", "I'll send the updated checklist by Wednesday."]
      ]
    },
    {
      id: "roadtest",
      title: "路测协调",
      subtitle: "车辆、路线、问题和安全",
      level: "专业场景",
      dialogue: [
        ["You", "Are all the test vehicles ready for tomorrow?"],
        ["Engineer", "Two are ready, but one still has a sensor issue."],
        ["You", "Which vehicle has the issue?"],
        ["Engineer", "Vehicle B. The front camera is not working reliably."],
        ["You", "Let's stop that vehicle's test and check it first."],
        ["Engineer", "Should we continue with the other two?"],
        ["You", "Yes, but use the north route and keep me updated."],
        ["You", "Please send me a short summary at the end of the test."]
      ]
    }
  ];

  const defaultState = {
    startDate: todayISO(),
    currentWeek: 1,
    currentDay: 1,
    lastCompleted: null,
    completed: {},
    ratings: {},
    phraseStatus: {},
    settings: {
      dailyMinutes: 45,
      fontScale: 1,
      showChinese: true
    }
  };

  let state = loadState();
  let route = location.hash.replace("#", "") || "home";
  let currentSession = null;
  let timerSeconds = 0;
  let timerRemaining = 0;
  let timerId = null;
  let timerRunning = false;
  let answerVisible = false;
  let dialogueReveal = {};
  let mediaRecorder = null;
  let mediaStream = null;
  let recordedChunks = [];
  let lastRecordingURL = null;
  let assessment = loadAssessmentDraft();
  let assessmentRecorder = null;
  let assessmentStream = null;
  let assessmentChunks = [];
  let assessmentRecordings = [];
  let activeAssessmentRecordingId = null;
  let assessmentRecordingTimeout = null;
  let assessmentCountdownInterval = null;

  const main = document.getElementById("main");
  const toast = document.getElementById("toast");

  document.addEventListener("click", handleClick);
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("hashchange", () => {
    route = location.hash.replace("#", "") || "home";
    render();
  });
  window.addEventListener("beforeunload", () => {
    stopTimer();
    clearTimeout(assessmentRecordingTimeout);
    clearInterval(assessmentCountdownInterval);
    assessmentStream?.getTracks().forEach((track) => track.stop());
  });

  render();
  registerServiceWorker();
  applySettings();
  document.documentElement.classList.add("app-ready");

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return {
        ...structuredClone(defaultState),
        ...saved,
        settings: { ...defaultState.settings, ...(saved?.settings || {}) }
      };
    } catch {
      return structuredClone(defaultState);
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function todayISO() {
    const d = new Date();
    const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  }

  function navigate(nextRoute) {
    if (activeAssessmentRecordingId) stopAssessmentRecording();
    stopTimer();
    route = nextRoute;
    location.hash = nextRoute;
    render();
    main.focus({ preventScroll: true });
  }

  function render() {
    stopTimer();
    currentSession = null;
    answerVisible = false;
    document.querySelectorAll(".nav-item").forEach((button) => {
      button.classList.toggle("active", button.dataset.route === route);
    });

    if (route === "home") renderHome();
    else if (route === "plan") renderPlan();
    else if (route === "practice") renderPractice();
    else if (route === "scenario") renderScenario();
    else if (route === "phrases") renderPhrases();
    else if (route === "review") renderReview();
    else if (route === "assessment") renderAssessment();
    else if (route === "settings") renderSettings();
    else if (route === "completed") renderCompleted();
    else if (route === "session") {
      if (currentSession) renderSession();
      else startTodaySession();
    }
    else renderHome();
  }

  function renderHome() {
    const week = weeks[state.currentWeek - 1];
    const day = week.days[state.currentDay - 1];
    const key = sessionKey(state.currentWeek, state.currentDay);
    const doneCount = Object.values(state.completed).filter(Boolean).length;
    const currentPhase = getPhase(state.currentWeek);
    const greeting = getGreeting();
    const todayDone = state.lastCompleted?.date === todayISO();
    const sessionTimes = getSessionTimes(Number(state.settings.dailyMinutes));

    main.innerHTML = `
      <section class="hero">
        <div>
          <p class="eyebrow">${greeting} · 第 ${state.currentWeek} 周</p>
          <h1>${escapeHTML(week.title)}</h1>
          <p class="lead">${escapeHTML(week.goal)}。每天只完成“01 今天”的流程，其他标签不需要每天打开。</p>
          <div class="daily-flow" aria-label="今日六步流程">
            <span><b>1</b>回忆 ${sessionTimes[0]}′</span>
            <span><b>2</b>教材 ${sessionTimes[1]}′</span>
            <span><b>3</b>跟读 ${sessionTimes[2]}′</span>
            <span><b>4</b>工作消息 ${sessionTimes[3]}′</span>
            <span><b>5</b>口头复述 ${sessionTimes[4]}′</span>
            <span><b>6</b>记录 ${sessionTimes[5]}′</span>
          </div>
          <div class="hero-actions">
            <button class="primary-button" data-action="start-today"><kbd>Enter</kbd> ${todayDone ? "今天已完成 · 继续下一天（选做）" : `开始今天的 ${state.settings.dailyMinutes} 分钟`}</button>
            <button class="secondary-button" data-route="plan">查看完整路线</button>
          </div>
        </div>
        <article class="today-card">
          <span class="day-number">${String(state.currentDay).padStart(2, "0")}</span>
          <h2>${escapeHTML(day[0])}</h2>
          <p class="muted">${escapeHTML(day[1])}</p>
          <p class="material-line"><strong>今日教材</strong><br>${escapeHTML(day[3] || "按当天任务打开对应章节")}</p>
          <p class="message-line"><strong>今日工作消息</strong><br>${escapeHTML(day[4] || "写一条真实工作消息")}</p>
          <div class="today-meta">
            <span>${todayDone ? "今天已完成，建议结束" : "今天必做"}</span>
            <span>${currentPhase.title}</span>
          </div>
        </article>
      </section>

      <section class="grid" aria-label="学习概况">
        <article class="panel span-8">
          <div class="panel-head">
            <div>
              <p class="eyebrow">Progress</p>
              <h2>你正在建立可重复的出差英语</h2>
            </div>
            <span class="status-pill ${todayDone ? "done" : ""}">${todayDone ? "今日完成" : "01 今日待办"}</span>
          </div>
          <div class="progress-track" aria-label="课程完成进度">
            <div class="progress-fill" style="width:${Math.min(100, doneCount / 72 * 100)}%"></div>
          </div>
          <div class="today-meta">
            <span>${doneCount} / 72 个训练日</span>
            <span>${Math.round(doneCount / 72 * 100)}%</span>
          </div>
        </article>

        <article class="panel span-4">
          <p class="eyebrow">Optional · Quick rescue</p>
          <h3>卡住时先说这一句</h3>
          <div class="prompt-box">Sorry, could you say that again more slowly?</div>
          <button class="quiet-button" data-speak="Sorry, could you say that again more slowly?">朗读这句</button>
        </article>

        <article class="panel span-6">
          <p class="eyebrow">Within today's session</p>
          <h3>${escapeHTML(day[0])}</h3>
          <div class="prompt-box">${escapeHTML(day[2])}</div>
          <button class="secondary-button" data-speak="${escapeAttribute(day[2])}">听发音</button>
        </article>

        <article class="panel span-6">
          <p class="eyebrow">Optional · 5-minute mode</p>
          <h3>今天很忙？只做这个</h3>
          <p class="muted">不看材料，录一段 60 秒回答。然后对照今日句型，再录第二遍。</p>
          <div class="button-row">
            <button class="primary-button" data-action="quick-practice">开始 5 分钟</button>
            <button class="quiet-button" data-route="phrases">打开句库</button>
          </div>
        </article>
      </section>
    `;
  }

  function renderPlan() {
    main.innerHTML = `
      <section>
        <p class="eyebrow">12-week route</p>
        <h1>不从第一页刷到最后一页</h1>
        <p class="lead">按真实任务推进。每一周练一个能直接用于出差和工作的能力。</p>

        <div class="roadmap">
          ${phases.map((phase) => {
            const current = state.currentWeek >= phase.range[0] && state.currentWeek <= phase.range[1];
            return `
              <article class="phase-card ${current ? "current" : ""}">
                <small>第 ${phase.range[0]}–${phase.range[1]} 周</small>
                <h2>${phase.title}</h2>
                <p class="muted">${phase.text}</p>
              </article>
            `;
          }).join("")}
        </div>

        <div class="week-list">
          ${weeks.map((week) => {
            const complete = week.days.every((_, index) => state.completed[sessionKey(week.number, index + 1)]);
            return `
              <button class="week-row ${week.number === state.currentWeek ? "current" : ""}" data-week="${week.number}">
                <span class="week-badge">W${String(week.number).padStart(2, "0")}</span>
                <span>
                  <strong>${escapeHTML(week.title)}</strong>
                  <small>${escapeHTML(week.goal)}</small>
                </span>
                <span class="status-pill ${complete ? "done" : ""}">${complete ? "已完成" : week.number === state.currentWeek ? "本周" : "查看"}</span>
              </button>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderWeek(weekNumber) {
    const week = weeks[weekNumber - 1];
    route = "week";
    document.querySelectorAll(".nav-item").forEach((button) => button.classList.remove("active"));
    main.innerHTML = `
      <section>
        <button class="quiet-button" data-route="plan">← 返回12周路线</button>
        <p class="eyebrow" style="margin-top:28px">Week ${String(weekNumber).padStart(2, "0")}</p>
        <h1>${escapeHTML(week.title)}</h1>
        <p class="lead">${escapeHTML(week.goal)}</p>
        <div class="week-list">
          ${week.days.map((day, index) => {
            const dayNumber = index + 1;
            const done = state.completed[sessionKey(weekNumber, dayNumber)];
            return `
              <button class="week-row ${weekNumber === state.currentWeek && dayNumber === state.currentDay ? "current" : ""}" data-start-week="${weekNumber}" data-start-day="${dayNumber}">
                <span class="week-badge">D${dayNumber}</span>
                <span>
                  <strong>${escapeHTML(day[0])}</strong>
                  <small>${escapeHTML(day[1])}</small>
                  <small class="day-material">${escapeHTML(day[3] || "章节未设置")}</small>
                  <small class="day-message">${escapeHTML(day[4] || "工作消息未设置")}</small>
                </span>
                <span class="status-pill ${done ? "done" : ""}">${done ? "已完成" : "开始"}</span>
              </button>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderPractice() {
    main.innerHTML = `
      <section>
        <p class="eyebrow">Role-play</p>
        <h1>今天要应付哪个场景？</h1>
        <p class="lead">先看中文目标，再只看对方的话做回答。需要时按 R 显示参考答案。</p>
        <div class="scenario-grid">
          ${scenarios.map((scenario) => `
            <button class="scenario-card" data-scenario="${scenario.id}">
              <span class="level">${scenario.level}</span>
              <h3>${escapeHTML(scenario.title)}</h3>
              <p>${escapeHTML(scenario.subtitle)}</p>
            </button>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderScenario() {
    const id = sessionStorage.getItem("activeScenario") || "customs";
    const scenario = scenarios.find((item) => item.id === id) || scenarios[0];
    route = "scenario";
    dialogueReveal = {};

    main.innerHTML = `
      <section>
        <button class="quiet-button" data-route="practice">← 返回场景</button>
        <div class="session-head" style="margin-top:28px">
          <div>
            <p class="eyebrow">${scenario.level}</p>
            <h1>${escapeHTML(scenario.title)}</h1>
            <p class="lead">${escapeHTML(scenario.subtitle)}</p>
          </div>
          <button class="secondary-button" data-action="toggle-all-dialogue" data-scenario-id="${scenario.id}">显示全部答案</button>
        </div>
        <div class="dialogue" data-dialogue-id="${scenario.id}">
          ${scenario.dialogue.map((line, index) => `
            <article class="dialogue-line ${line[0].toLowerCase() === "you" ? "you" : "partner"}">
              <span class="speaker">${line[0].toUpperCase()}</span>
              <div>
                <p class="${line[0].toLowerCase() === "you" ? "answer-line hidden-answer" : ""}" data-line="${index}">
                  ${line[0].toLowerCase() === "you" ? "按 R 或点击显示你的回答" : escapeHTML(line[1])}
                </p>
                ${line[0].toLowerCase() === "you" ? `<button class="mini-button" style="margin-top:10px" data-reveal-line="${index}">显示回答</button>` : ""}
              </div>
            </article>
          `).join("")}
        </div>
        <div class="record-panel">
          <span class="record-dot" id="record-dot"></span>
          <strong>录音检查</strong>
          <span class="muted">建议先不看答案，按对话顺序录一遍。</span>
          <button class="mini-button" data-action="start-recording">开始录音</button>
          <button class="mini-button" data-action="stop-recording" disabled>停止</button>
          <button class="mini-button" data-action="play-recording" disabled>播放</button>
          <span id="record-status" class="muted">尚未录音</span>
        </div>
      </section>
    `;
  }

  function renderPhrases() {
    main.innerHTML = `
      <section>
        <p class="eyebrow">Phrase bank</p>
        <h1>不背单词，背能直接说出去的句子</h1>
        <p class="lead">先看中文，自己说英语，再按 R 或点击卡片看答案。</p>
        <div class="phrase-tools">
          <input class="search-input" id="phrase-search" type="search" placeholder="搜索中文、英文或类别，例如：海关" aria-label="搜索句库">
          <button class="quiet-button" data-action="toggle-all-phrases">显示全部</button>
        </div>
        <div id="phrase-results" class="phrase-grid"></div>
      </section>
    `;
    renderPhraseResults("");
  }

  function renderPhraseResults(query) {
    const results = phrases.filter((item) =>
      `${item.zh} ${item.en} ${item.cat}`.toLowerCase().includes(query.toLowerCase())
    );
    const target = document.getElementById("phrase-results");
    if (!target) return;
    if (!results.length) {
      target.innerHTML = `<div class="empty-state">没有找到。换一个关键词试试。</div>`;
      return;
    }
    target.innerHTML = results.map((item, index) => {
      const globalIndex = phrases.indexOf(item);
      const status = state.phraseStatus[globalIndex] || "new";
      return `
        <article class="phrase-card">
          <span class="status-pill">${escapeHTML(item.cat)} · L${item.level}</span>
          <p class="zh">${escapeHTML(item.zh)}</p>
          <p class="en hidden" data-phrase-answer="${globalIndex}" tabindex="0">${escapeHTML(item.en)}</p>
          <div class="card-actions">
            <button class="mini-button" data-speak="${escapeAttribute(item.en)}">听发音</button>
            <button class="mini-button" data-phrase-know="${globalIndex}">${status === "known" ? "已掌握" : "标记掌握"}</button>
          </div>
        </article>
      `;
    }).join("");
  }

  function loadAssessmentDraft() {
    try {
      return JSON.parse(sessionStorage.getItem("noa-english-assessment")) || newAssessmentDraft();
    } catch {
      return newAssessmentDraft();
    }
  }

  function newAssessmentDraft() {
    return {
      stage: "intro",
      listeningIndex: 0,
      answers: {},
      notes: {},
      speakingIndex: 0,
      speakingNotes: {},
      pronunciationNote: "",
      workNote: "",
      selfRating: "",
      startedAt: null,
      completedAt: null,
      listeningScore: null,
      listeningTotal: null
    };
  }

  function saveAssessmentDraft() {
    sessionStorage.setItem("noa-english-assessment", JSON.stringify(assessment));
  }

  function renderAssessment() {
    const data = window.ASSESSMENT_DATA;
    if (!data) {
      main.innerHTML = `<div class="empty-state">测试题库没有加载，请刷新页面。</div>`;
      return;
    }

    if (assessment.stage === "intro") renderAssessmentIntro();
    else if (assessment.stage === "listening") renderAssessmentListening(data);
    else if (assessment.stage === "listening-result") renderAssessmentListeningResult(data);
    else if (assessment.stage === "speaking") renderAssessmentSpeaking(data);
    else if (assessment.stage === "pronunciation") renderAssessmentPronunciation(data);
    else if (assessment.stage === "work") renderAssessmentWork(data);
    else renderAssessmentResult(data);
  }

  function renderAssessmentIntro() {
    main.innerHTML = `
      <section>
        <p class="eyebrow">Baseline · About 20 minutes</p>
        <h1 class="assessment-title">先测真实能力，不测背了多少</h1>
        <p class="lead">这份测试没有考试分数压力。听力会自动计分，口语和发音需要录音。完成一次后，间隔14天用相同流程复测。</p>

        <div class="grid" style="margin-top:32px">
          <article class="panel span-6">
            <p class="eyebrow">测试内容</p>
            <h3>五部分</h3>
            <div class="assessment-roadmap">
              <span><b>1</b> 3段听力 · 约8分钟</span>
              <span><b>2</b> 5个口语任务 · 约8分钟</span>
              <span><b>3</b> 跟读词句 · 约2分钟</span>
              <span><b>4</b> 90秒工作说明 · 约2分钟</span>
              <span><b>5</b> 自动报告与录音清单</span>
            </div>
          </article>
          <article class="panel span-6">
            <p class="eyebrow">测试规则</p>
            <h3>尽量一次完成</h3>
            <ul class="test-rules">
              <li>听力先不要看原文，按正常语速听。</li>
              <li>口语不要写完整稿，也不要在录音前反复修改。</li>
              <li>卡住时直接说救场句，继续完成对话。</li>
              <li>测试不是排名，录音A会作为两周后的对照。</li>
            </ul>
            <button class="primary-button" data-action="assessment-start">开始测试 <kbd>Enter</kbd></button>
          </article>
        </div>

        <div class="callout warning" style="margin-top:22px">
          <strong>录音提示</strong>
          <p>请通过“启动学习助手.cmd”打开本页，并允许浏览器使用麦克风。若电脑没有麦克风，可用 iPhone Voice Memos 按题目录音，界面仍可正常完成测试并导出报告。</p>
        </div>
      </section>
    `;
  }

  function renderAssessmentListening(data) {
    const item = data.listening[assessment.listeningIndex];
    const answers = assessment.answers[item.id] || [];
    const selectedRecording = assessmentRecordings.find((recording) => recording.id === `listening-note-${item.id}`);
    main.innerHTML = `
      <section>
        <div class="assessment-head">
          <div>
            <p class="eyebrow">听力 · ${assessment.listeningIndex + 1} / ${data.listening.length}</p>
            <h1>${escapeHTML(item.title)}</h1>
          </div>
          <button class="quiet-button" data-route="assessment">暂离测试</button>
        </div>
        <p class="lead">${escapeHTML(item.context)}</p>

        <article class="panel listening-panel">
          <div class="audio-test-bar">
            <button class="primary-button" data-action="play-listening" data-listening-id="${item.id}">播放录音</button>
            <span class="muted">正常语速 · 可以先完整听一遍，再按题确认</span>
          </div>
          <p class="sr-only" id="listening-status" aria-live="polite"></p>

          <div class="question-list">
            ${item.questions.map((question, index) => `
              <fieldset class="test-question">
                <legend>${index + 1}. ${escapeHTML(question.q)}</legend>
                ${question.options.map((option, optionIndex) => `
                  <label class="test-option">
                    <input type="radio" name="q-${item.id}-${index}" value="${optionIndex}" data-assessment-answer="${item.id}" data-question-index="${index}" ${Number(answers[index]) === optionIndex ? "checked" : ""}>
                    <span>${escapeHTML(option)}</span>
                  </label>
                `).join("")}
              </fieldset>
            `).join("")}
          </div>

          <div class="field" style="margin-top:24px">
            <label for="listening-note">你听到的大意是什么？</label>
            <textarea id="listening-note" data-assessment-note="${item.id}" rows="3" placeholder="用自己的话写一句，中文也可以">${escapeHTML(assessment.notes[item.id] || "")}</textarea>
            <small>不用逐字复述，只说谁、发生了什么、下一步。</small>
          </div>

          <div class="session-foot">
            <button class="quiet-button" data-action="assessment-listening-prev" ${assessment.listeningIndex === 0 ? "disabled" : ""}>← 上一段</button>
            <button class="primary-button" data-action="assessment-listening-next">
              ${assessment.listeningIndex === data.listening.length - 1 ? "提交听力" : "下一段"} <kbd>Enter</kbd>
            </button>
          </div>
        </article>
        ${selectedRecording ? `<p class="muted" style="margin-top:16px">本段已有一条口述记录，可在结果页下载。</p>` : ""}
      </section>
    `;
  }

  function renderAssessmentListeningResult(data) {
    const score = calculateListeningScore();
    const total = getListeningTotal();
    assessment.listeningScore = score;
    assessment.listeningTotal = total;
    saveAssessmentDraft();
    main.innerHTML = `
      <section>
        <p class="eyebrow">Listening result</p>
        <h1>听力客观题 ${score} / ${total}</h1>
        <p class="lead">这个分数只检查关键信息，不代表全部听力能力。你的主观复述和口语录音会一起用于判断。</p>

        <div class="score-strip">
          <div class="score-number">${Math.round(score / total * 100)}%</div>
          <div>
            <strong>${listeningScoreLabel(score, total)}</strong>
            <p class="muted">如果分数不低但真实交流仍卡，问题更可能在处理速度和紧张度。</p>
          </div>
        </div>

        <div class="answer-review">
          ${data.listening.map((item) => {
            const answers = assessment.answers[item.id] || [];
            return `
              <article class="panel" style="margin-top:16px">
                <div class="panel-head">
                  <div>
                    <p class="eyebrow">录音原文</p>
                    <h3>${escapeHTML(item.title)}</h3>
                  </div>
                  <span class="status-pill">${item.questions.filter((question, index) => Number(answers[index]) === question.answer).length}/${item.questions.length}</span>
                </div>
                <p>${escapeHTML(item.transcript)}</p>
                <div class="question-review">
                  ${item.questions.map((question, index) => {
                    const selected = Number(answers[index]);
                    const correct = selected === question.answer;
                    return `<p class="${correct ? "correct-answer" : "wrong-answer"}">${correct ? "✓" : "✕"} ${escapeHTML(question.q)} <b>${escapeHTML(question.options[question.answer])}</b></p>`;
                  }).join("")}
                </div>
              </article>
            `;
          }).join("")}
        </div>

        <div class="button-row">
          <button class="primary-button" data-action="assessment-start-speaking">开始口语测试 <kbd>Enter</kbd></button>
          <button class="quiet-button" data-action="assessment-retry-listening">重新测试听力</button>
        </div>
      </section>
    `;
  }

  function renderAssessmentSpeaking(data) {
    const prompt = data.speaking[assessment.speakingIndex];
    main.innerHTML = `
      <section>
        <div class="assessment-head">
          <div>
            <p class="eyebrow">口语 · ${assessment.speakingIndex + 1} / ${data.speaking.length}</p>
            <h1>${escapeHTML(prompt.title)}</h1>
          </div>
          <button class="quiet-button" data-route="assessment">暂离测试</button>
        </div>
        <article class="session-card" style="margin-top:8px">
          <div class="prompt-box">${escapeHTML(prompt.prompt)}</div>
          <p class="instruction">${escapeHTML(prompt.helper)}</p>
          ${renderAssessmentRecorder(prompt.id, prompt.title, prompt.seconds)}
          <div class="field" style="margin-top:18px">
            <label for="speaking-note">说的时候卡在哪里？</label>
            <textarea id="speaking-note" data-assessment-speaking-note="${prompt.id}" rows="2" placeholder="可不填；写下最想表达但没说出来的一点">${escapeHTML(assessment.speakingNotes[prompt.id] || "")}</textarea>
          </div>
          <div class="session-foot">
            <button class="quiet-button" data-action="assessment-speaking-prev" ${assessment.speakingIndex === 0 ? "disabled" : ""}>← 上一题</button>
            <button class="primary-button" data-action="assessment-speaking-next">
              ${assessment.speakingIndex === data.speaking.length - 1 ? "进入跟读测试" : "下一题"} <kbd>Enter</kbd>
            </button>
          </div>
        </article>
      </section>
    `;
  }

  function renderAssessmentPronunciation(data) {
    main.innerHTML = `
      <section>
        <div class="assessment-head">
          <div>
            <p class="eyebrow">发音与可懂度 · 约2分钟</p>
            <h1>先读词，再读句子</h1>
          </div>
          <button class="quiet-button" data-route="assessment">暂离测试</button>
        </div>
        <p class="lead">不要刻意变口音。保持正常速度，词尾清楚，重音自然。</p>
        <article class="panel">
          <div class="pronunciation-words">
            ${data.pronunciation.words.map((word) => `<button class="word-chip" data-speak="${escapeAttribute(word)}">${escapeHTML(word)}</button>`).join("")}
          </div>
          <div class="pronunciation-sentences">
            ${data.pronunciation.sentences.map((sentence) => `<p>${escapeHTML(sentence)}</p>`).join("")}
          </div>
          ${renderAssessmentRecorder("pronunciation", "发音测试", data.pronunciation.seconds)}
          <div class="field" style="margin-top:18px">
            <label for="pronunciation-note">你最没把握的发音</label>
            <textarea id="pronunciation-note" data-assessment-other-note="pronunciationNote" rows="2" placeholder="例如：engineer、vehicle、词尾 -s">${escapeHTML(assessment.pronunciationNote || "")}</textarea>
          </div>
          <div class="session-foot">
            <button class="primary-button" data-action="assessment-pronunciation-next">进入工作说明 <kbd>Enter</kbd></button>
          </div>
        </article>
      </section>
    `;
  }

  function renderAssessmentWork(data) {
    main.innerHTML = `
      <section>
        <p class="eyebrow">工作说明 · 最后一题</p>
        <h1>${escapeHTML(data.workTask.title)}</h1>
        <article class="session-card" style="margin-top:8px">
          <div class="prompt-box">${escapeHTML(data.workTask.prompt)}</div>
          <p class="instruction">${escapeHTML(data.workTask.helper)}</p>
          ${renderAssessmentRecorder("work-task", "工作说明", data.workTask.seconds)}
          <div class="field" style="margin-top:18px">
            <label for="work-note">你觉得最需要帮助的部分</label>
            <textarea id="work-note" data-assessment-other-note="workNote" rows="2" placeholder="例如：解释问题原因、数字、下一步">${escapeHTML(assessment.workNote || "")}</textarea>
          </div>
          <div class="session-foot">
            <button class="primary-button" data-action="assessment-finish">完成并生成报告 <kbd>Enter</kbd></button>
          </div>
        </article>
      </section>
    `;
  }

  function renderAssessmentResult(data) {
    const score = assessment.listeningScore ?? calculateListeningScore();
    const total = assessment.listeningTotal ?? getListeningTotal();
    const speakingRecorded = new Set(assessmentRecordings.map((item) => item.id)).size;
    main.innerHTML = `
      <section>
        <p class="eyebrow">Baseline complete</p>
        <h1>测试完成</h1>
        <p class="lead">这份报告先记录基线。真正的判断会结合你的听力答案、主观复述、口语录音和14天后的复测变化。</p>

        <div class="grid" style="margin-top:30px">
          <article class="panel span-4">
            <span class="stat">${score}/${total}</span>
            <p class="stat-label">听力关键信息</p>
          </article>
          <article class="panel span-4">
            <span class="stat">${speakingRecorded}</span>
            <p class="stat-label">已有录音项目</p>
          </article>
          <article class="panel span-4">
            <span class="stat">${assessment.completedAt ? "完成" : "进行中"}</span>
            <p class="stat-label">本次测试状态</p>
          </article>
        </div>

        <article class="panel" style="margin-top:18px">
          <div class="panel-head">
            <div>
              <p class="eyebrow">主观感受</p>
              <h2>你觉得对方听懂你了吗？</h2>
            </div>
          </div>
          <div class="field">
            <label for="self-rating">选一个最接近的情况</label>
            <select id="self-rating">
              <option value="">未选择</option>
              <option value="clear" ${assessment.selfRating === "clear" ? "selected" : ""}>基本清楚，对方很少让我重复</option>
              <option value="mixed" ${assessment.selfRating === "mixed" ? "selected" : ""}>有时清楚，对方需要重复或猜测</option>
              <option value="hard" ${assessment.selfRating === "hard" ? "selected" : ""}>经常说不出来或对方听不懂</option>
            </select>
          </div>
          <div class="button-row">
            <button class="primary-button" data-action="assessment-download-report">下载测试报告</button>
            <button class="quiet-button" data-action="assessment-retest">重新测试</button>
          </div>
        </article>

        <article class="panel" style="margin-top:18px">
          <div class="panel-head">
            <div>
              <p class="eyebrow">录音清单</p>
              <h2>需要复盘时再下载</h2>
            </div>
          </div>
          ${assessmentRecordings.length ? `
            <div class="recording-list">
              ${assessmentRecordings.map((recording, index) => `
                <div class="recording-item">
                  <span>${escapeHTML(recording.label)}</span>
                  <span class="muted">${recording.duration}s</span>
                  <button class="mini-button" data-download-assessment-recording="${index}">下载录音</button>
                </div>
              `).join("")}
            </div>
          ` : `<div class="empty-state">没有检测到录音。你仍然可以下载报告，并在 Voice Memos 中按题保存。</div>`}
        </article>

        <div class="callout" style="margin-top:18px">
          <strong>报告怎么用</strong>
          <p>先下载 JSON 报告。下一次找我时，把报告和至少两段录音（职业介绍、问题说明）一起提供，我就能按真实表现调整训练，而不是再靠猜测。</p>
        </div>
      </section>
    `;
  }

  function renderAssessmentRecorder(id, label, seconds) {
    const existing = assessmentRecordings.find((recording) => recording.id === id);
    const isActive = activeAssessmentRecordingId === id;
    return `
      <div class="record-panel" style="background:#eef3e8">
        <span class="record-dot ${isActive ? "live" : ""}" id="assessment-record-dot"></span>
        <strong>${isActive ? "正在录音" : "口语录音"}</strong>
        <span class="muted" id="assessment-record-status">${isActive ? "正在计时…" : existing ? `已完成，共 ${existing.duration} 秒` : `最多 ${seconds} 秒`}</span>
        <button class="mini-button" data-action="assessment-record-start" data-record-id="${id}" data-record-label="${escapeAttribute(label)}" data-record-seconds="${seconds}" ${isActive ? "disabled" : ""}>开始</button>
        <button class="mini-button" data-action="assessment-record-stop" ${isActive ? "" : "disabled"}>停止</button>
        <span id="assessment-record-countdown" class="record-countdown"></span>
        ${existing ? `<button class="mini-button" data-play-assessment-recording="${existing.id}">播放</button>` : ""}
      </div>
    `;
  }

  function calculateListeningScore() {
    const data = window.ASSESSMENT_DATA;
    let score = 0;
    data.listening.forEach((item) => {
      const answers = assessment.answers[item.id] || [];
      item.questions.forEach((question, index) => {
        if (Number(answers[index]) === question.answer) score += 1;
      });
    });
    return score;
  }

  function getListeningTotal() {
    return window.ASSESSMENT_DATA.listening.reduce((sum, item) => sum + item.questions.length, 0);
  }

  function listeningScoreLabel(score, total) {
    const ratio = score / total;
    if (ratio >= 0.9) return "关键信息抓取很稳";
    if (ratio >= 0.7) return "基本能抓住关键信息";
    if (ratio >= 0.5) return "能抓住部分信息，但速度和细节不稳";
    return "当前更像是在猜关键词，需要加强语流训练";
  }

  function startAssessment() {
    assessment = newAssessmentDraft();
    assessment.stage = "listening";
    assessment.startedAt = new Date().toISOString();
    assessmentRecordings = [];
    saveAssessmentDraft();
    renderAssessment();
  }

  function nextListeningItem() {
    const data = window.ASSESSMENT_DATA;
    const item = data.listening[assessment.listeningIndex];
    const answers = assessment.answers[item.id] || [];
    if (answers.filter((value) => value !== undefined).length < item.questions.length) {
      showToast("这段还有题没有选择。确定不了也可以先选最接近的答案。");
    }
    if (assessment.listeningIndex < data.listening.length - 1) {
      assessment.listeningIndex += 1;
    } else {
      assessment.stage = "listening-result";
    }
    saveAssessmentDraft();
    renderAssessment();
  }

  function previousListeningItem() {
    if (assessment.listeningIndex === 0) return;
    assessment.listeningIndex -= 1;
    saveAssessmentDraft();
    renderAssessment();
  }

  function nextSpeakingItem() {
    const data = window.ASSESSMENT_DATA;
    if (activeAssessmentRecordingId) {
      showToast("请先停止录音。");
      return;
    }
    if (assessment.speakingIndex < data.speaking.length - 1) {
      assessment.speakingIndex += 1;
    } else {
      assessment.stage = "pronunciation";
    }
    saveAssessmentDraft();
    renderAssessment();
  }

  function previousSpeakingItem() {
    if (assessment.speakingIndex === 0) return;
    assessment.speakingIndex -= 1;
    saveAssessmentDraft();
    renderAssessment();
  }

  function finishAssessment() {
    if (activeAssessmentRecordingId) {
      showToast("请先停止录音。");
      return;
    }
    assessment.stage = "result";
    assessment.completedAt = new Date().toISOString();
    assessment.listeningScore = calculateListeningScore();
    assessment.listeningTotal = getListeningTotal();
    state.lastAssessment = {
      completedAt: assessment.completedAt,
      listeningScore: assessment.listeningScore,
      listeningTotal: assessment.listeningTotal,
      selfRating: assessment.selfRating
    };
    saveState();
    saveAssessmentDraft();
    renderAssessment();
  }

  function downloadAssessmentReport() {
    const data = window.ASSESSMENT_DATA;
    const report = {
      app: "NOA English Study",
      assessmentVersion: 1,
      startedAt: assessment.startedAt,
      completedAt: assessment.completedAt,
      listening: {
        score: assessment.listeningScore ?? calculateListeningScore(),
        total: assessment.listeningTotal ?? getListeningTotal(),
        answers: assessment.answers,
        notes: assessment.notes
      },
      speaking: {
        completedPrompts: assessmentRecordings.filter((item) => data.speaking.some((prompt) => prompt.id === item.id)).map((item) => item.id),
        notes: assessment.speakingNotes
      },
      pronunciation: {
        note: assessment.pronunciationNote,
        recorded: assessmentRecordings.some((item) => item.id === "pronunciation")
      },
      workTask: {
        note: assessment.workNote,
        recorded: assessmentRecordings.some((item) => item.id === "work-task")
      },
      selfRating: assessment.selfRating,
      recordings: assessmentRecordings.map((item) => ({
        id: item.id,
        label: item.label,
        duration: item.duration,
        mime: item.mime
      }))
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `English-baseline-${todayISO()}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function resetAssessment() {
    assessment = newAssessmentDraft();
    assessmentRecordings = [];
    sessionStorage.removeItem("noa-english-assessment");
    renderAssessment();
  }

  function renderReview() {
    const due = phrases
      .map((item, index) => ({ ...item, index }))
      .filter((item) => {
        const status = state.phraseStatus[item.index];
        if (!status) return item.level <= 2;
        return status !== "known" || Math.random() < 0.22;
      })
      .slice(0, 12);

    main.innerHTML = `
      <section>
        <p class="eyebrow">Recall</p>
        <h1>今天只复习 12 句</h1>
        <p class="lead">不要重读全部句库。看中文，立刻说英文；停顿超过三秒就算需要再练。</p>
        <div class="phrase-grid" style="margin-top:30px">
          ${due.map((item) => `
            <article class="phrase-card">
              <span class="status-pill">${escapeHTML(item.cat)}</span>
              <p class="zh">${escapeHTML(item.zh)}</p>
              <p class="en hidden" data-phrase-answer="${item.index}" tabindex="0">${escapeHTML(item.en)}</p>
              <div class="card-actions">
                <button class="mini-button" data-phrase-know="${item.index}">已经会说</button>
                <button class="mini-button" data-phrase-again="${item.index}">还要再练</button>
                <button class="mini-button" data-speak="${escapeAttribute(item.en)}">听答案</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderSettings() {
    const startDate = state.startDate || todayISO();
    const elapsedDays = Math.max(0, Math.floor((new Date(todayISO()) - new Date(startDate)) / 86400000));
    main.innerHTML = `
      <section>
        <p class="eyebrow">Setup</p>
        <h1>把训练调成适合客厅的模式</h1>
        <p class="lead">所有记录只保存在当前浏览器中。手机和电脑各自保存，可导出文件进行备份。</p>
        <div class="settings-form">
          <div class="field">
            <label for="start-date">开始日期</label>
            <input id="start-date" type="date" value="${startDate}">
            <small>已学习 ${elapsedDays} 天，记录按实际完成的训练日计算。</small>
          </div>
          <div class="field">
            <label for="daily-minutes">每日训练时长</label>
            <select id="daily-minutes">
              <option value="20" ${state.settings.dailyMinutes === 20 ? "selected" : ""}>20分钟 · 最低完成版</option>
              <option value="45" ${state.settings.dailyMinutes === 45 ? "selected" : ""}>45分钟 · 推荐版</option>
              <option value="90" ${state.settings.dailyMinutes === 90 ? "selected" : ""}>90分钟 · 强化版</option>
            </select>
          </div>
          <div class="field">
            <label for="font-scale">大屏字号</label>
            <select id="font-scale">
              <option value="1" ${state.settings.fontScale === 1 ? "selected" : ""}>标准</option>
              <option value="1.15" ${state.settings.fontScale === 1.15 ? "selected" : ""}>大</option>
              <option value="1.3" ${state.settings.fontScale === 1.3 ? "selected" : ""}>超大</option>
            </select>
          </div>
          <div class="field">
            <label for="reset-progress">训练位置</label>
            <div class="button-row" style="margin-top:0">
              <button class="quiet-button" data-action="reset-week">回到第1周</button>
              <button class="danger-button" data-action="reset-all">清空全部记录</button>
            </div>
          </div>
        </div>
        <div class="callout" style="margin-top:30px">
          <strong>记录备份</strong>
          <p>换浏览器或手机前，先导出进度。当前版本不需要联网，也不会上传你的学习记录。</p>
          <div class="button-row">
            <button class="secondary-button" data-action="export">导出进度</button>
            <label class="quiet-button" style="display:inline-flex;align-items:center;cursor:pointer">
              导入进度
              <input id="import-file" type="file" accept="application/json" class="sr-only">
            </label>
          </div>
        </div>
        <div class="callout warning" style="margin-top:18px">
          <strong>教材扫码资料</strong>
          <p>扫描二维码得到的内容通常需要出版社账号或授权平台。这个 App 不复制受版权保护的音视频，只负责安排练什么、怎么练、记录完成情况。练习时把出版社页面或本地文件播放器放在另一个窗口即可。</p>
        </div>
      </section>
    `;
  }

  function startTodaySession() {
    startSession(state.currentWeek, state.currentDay);
  }

  function startSession(weekNumber, dayNumber) {
    const week = weeks[weekNumber - 1];
    const day = week.days[dayNumber - 1];
    const minutes = Number(state.settings.dailyMinutes);
    const steps = buildSessionSteps(week, day, minutes);
    state.currentWeek = weekNumber;
    state.currentDay = dayNumber;
    saveState();
    currentSession = {
      week: weekNumber,
      day: dayNumber,
      title: day[0],
      material: day[3],
      steps,
      index: 0
    };
    route = "session";
    renderSession();
  }

  function buildSessionSteps(week, day, minutes) {
    const times = getSessionTimes(minutes);
    return [
      {
        title: "先从记忆里找答案",
        minutes: times[0],
        instruction: "不要写稿。用英语说60秒，说不出来就停住，把卡住的位置记住。",
        prompt: `今天的目标：${day[0]}`,
        answer: day[2]
      },
      {
        title: "听一段真实语流",
        minutes: times[1],
        instruction: "打开下方今日教材，播放对应音频或完成指定教材部分。第一遍只听大意；第二遍每10–15秒暂停；最后再看原文。",
        material: day[3],
        prompt: "谁 + 要做什么 + 时间/地点 + 下一步",
        answer: "听不清的全句，不要逐词翻译。先抓关键词和意群。"
      },
      {
        title: "跟读，不追求口音",
        minutes: times[2],
        instruction: "选1–2句，每句跟读5遍。先慢一点，再回到原速。重点是重音、停顿和词尾。",
        material: `今日句型：${day[2]}`,
        prompt: day[2],
        answer: "只有自己听不清、对方也可能听错的地方才反复纠。"
      },
      {
        title: "写一条真实工作消息",
        minutes: times[3],
        instruction: "按今天的企微场景先独立写英文，再用“背景—结论—证据/限制—请求—下一步”检查。消息不确定时先写，不发送，改完后再发。",
        material: day[4],
        prompt: day[4],
        answer: "先保证事实、请求和下一步清楚，再检查问句、时态、情态动词和单复数。"
      },
      {
        title: "关掉材料，真实开口",
        minutes: times[4],
        instruction: "按今天的任务做2分钟无稿录音。卡住时先用救场句，再继续，不要重来十遍。",
        prompt: day[1],
        answer: "Sorry, could you say that again more slowly? / Let me rephrase that."
      },
      {
        title: "只记三件事",
        minutes: times[5],
        instruction: "写下：一个说不出的中文意思、一个好用句块、一个听错的声音。明天开头先复习。",
        prompt: "1个不会说 + 1个新句块 + 1个听错处",
        answer: day[2]
      }
    ];
  }

  function getSessionTimes(minutes) {
    if (minutes === 20) return [2, 6, 3, 5, 2, 2];
    if (minutes === 90) return [10, 20, 15, 20, 15, 10];
    return [5, 10, 8, 10, 7, 5];
  }

  function renderSession() {
    const session = currentSession;
    if (!session) {
      navigate("home");
      return;
    }
    const step = session.steps[session.index];
    timerSeconds = step.minutes * 60;
    timerRemaining = timerSeconds;
    answerVisible = false;

    main.innerHTML = `
      <section class="session">
        <div class="session-head">
          <div>
            <p class="eyebrow">第 ${session.week} 周 · 第 ${session.day} 天</p>
            <h2>${escapeHTML(session.title)}</h2>
            <p class="session-material">${escapeHTML(session.material || "")}</p>
          </div>
          <div class="timer" id="timer" aria-live="polite">${formatTime(timerRemaining)}</div>
        </div>

        <article class="session-card">
          <p class="session-step">步骤 ${session.index + 1} / ${session.steps.length}</p>
          <h1>${escapeHTML(step.title)}</h1>
          <p class="instruction">${escapeHTML(step.instruction)}</p>
          ${step.material ? `<p class="step-material">${escapeHTML(step.material)}</p>` : ""}
          <div class="prompt-box">${escapeHTML(step.prompt)}</div>
          <div class="answer-box" id="answer-box" ${answerVisible ? "" : "hidden"}>
            <p class="eyebrow">参考答案</p>
            <p>${escapeHTML(step.answer)}</p>
          </div>
          <div class="session-foot">
            <button class="quiet-button" data-action="toggle-answer"><kbd>R</kbd> 显示答案</button>
            <div class="session-progress" aria-label="步骤进度">
              ${session.steps.map((_, index) => `<span class="progress-dot ${index < session.index ? "done" : index === session.index ? "active" : ""}"></span>`).join("")}
            </div>
            <button class="primary-button" data-action="next-step"><kbd>Enter</kbd> ${session.index === session.steps.length - 1 ? "完成训练" : "下一步"}</button>
          </div>
        </article>

        <div class="session-foot">
          <button class="quiet-button" data-action="toggle-timer"><kbd>Space</kbd> 开始计时</button>
          <button class="quiet-button" data-action="prev-step">← 上一步</button>
          <button class="quiet-button" data-action="exit-session">退出</button>
        </div>
      </section>
    `;
  }

  function toggleTimer() {
    if (!currentSession) return;
    if (timerRunning) {
      stopTimer();
      updateTimerButton("继续计时");
      return;
    }
    timerRunning = true;
    timerId = setInterval(() => {
      if (timerRemaining > 0) {
        timerRemaining -= 1;
        updateTimerDisplay();
      }
      if (timerRemaining <= 0) {
        stopTimer();
        showToast("这一步时间到了。可以完成这一步，不必追求完美。");
      }
    }, 1000);
    updateTimerButton("暂停");
  }

  function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
    timerRunning = false;
  }

  function updateTimerDisplay() {
    const timer = document.getElementById("timer");
    if (timer) timer.textContent = formatTime(Math.max(0, timerRemaining));
  }

  function updateTimerButton(label) {
    const button = document.querySelector('[data-action="toggle-timer"]');
    if (button) button.innerHTML = `<kbd>Space</kbd> ${label}`;
  }

  function nextSessionStep() {
    if (!currentSession) return;
    stopTimer();
    if (currentSession.index < currentSession.steps.length - 1) {
      currentSession.index += 1;
      renderSession();
    } else {
      completeSession();
    }
  }

  function previousSessionStep() {
    if (!currentSession || currentSession.index === 0) return;
    stopTimer();
    currentSession.index -= 1;
    renderSession();
  }

  function completeSession() {
    const key = sessionKey(currentSession.week, currentSession.day);
    const completedWeek = currentSession.week;
    const completedDay = currentSession.day;
    state.completed[key] = true;
    state.ratings[key] = "done";
    state.lastCompleted = {
      date: todayISO(),
      week: completedWeek,
      day: completedDay,
      title: currentSession.title
    };
    saveState();
    const week = completedWeek;
    const day = completedDay;

    if (day < 6) {
      state.currentDay = day + 1;
    } else if (week < 12) {
      state.currentWeek = week + 1;
      state.currentDay = 1;
    }
    saveState();
    currentSession = null;
    navigate("completed");
  }

  function renderCompleted() {
    const last = state.lastCompleted;
    if (!last) {
      renderHome();
      return;
    }
    document.querySelectorAll(".nav-item").forEach((button) => {
      button.classList.toggle("active", button.dataset.route === "home");
    });
    const nextWeek = weeks[state.currentWeek - 1];
    const nextDay = nextWeek.days[state.currentDay - 1];
    const isCourseFinished = last.week === 12 && last.day === 6;
    const doneCount = Object.values(state.completed).filter(Boolean).length;

    main.innerHTML = `
      <section class="completion-screen">
        <div class="completion-mark">✓</div>
        <p class="eyebrow">Day complete</p>
        <h1>今天的训练完成了</h1>
        <p class="lead">你完成了第 ${last.week} 周第 ${last.day} 天：${escapeHTML(last.title)}。建议今天到这里结束，不再切换其他选项卡。</p>

        <div class="completion-summary">
          <div>
            <span class="stat">${doneCount}</span>
            <span class="stat-label">累计训练日</span>
          </div>
          <div>
            <span class="stat">${Math.round(doneCount / 72 * 100)}%</span>
            <span class="stat-label">总路线进度</span>
          </div>
          <div>
            <span class="stat">${state.settings.dailyMinutes}′</span>
            <span class="stat-label">今日学习时长</span>
          </div>
        </div>

        ${isCourseFinished ? `
          <div class="callout">
            <strong>12周路线已经完成</strong>
            <p>下一步安排一次综合复测，并把新的录音与基线录音比较。</p>
          </div>
        ` : `
          <div class="next-day-card">
            <p class="eyebrow">下一次</p>
            <h2>第 ${state.currentWeek} 周 · 第 ${state.currentDay} 天：${escapeHTML(nextDay[0])}</h2>
            <p class="muted">${escapeHTML(nextDay[1])}</p>
          </div>
        `}

        <div class="button-row completion-actions">
          <button class="primary-button" data-route="home">结束，今天到这里</button>
          ${isCourseFinished ? "" : `<button class="quiet-button" data-action="start-today">继续下一天（选做）</button>`}
        </div>
      </section>
    `;
  }

  function toggleAnswer() {
    answerVisible = !answerVisible;
    const box = document.getElementById("answer-box");
    if (box) box.hidden = !answerVisible;
    const button = document.querySelector('[data-action="toggle-answer"]');
    if (button) button.innerHTML = `<kbd>R</kbd> ${answerVisible ? "隐藏答案" : "显示答案"}`;
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timeout);
    showToast.timeout = setTimeout(() => toast.classList.remove("show"), 3200);
  }

  function handleClick(event) {
    const routeButton = event.target.closest("[data-route]");
    if (routeButton) {
      navigate(routeButton.dataset.route);
      return;
    }

    const weekButton = event.target.closest("[data-week]");
    if (weekButton) {
      renderWeek(Number(weekButton.dataset.week));
      return;
    }

    const startDayButton = event.target.closest("[data-start-week]");
    if (startDayButton) {
      startSession(Number(startDayButton.dataset.startWeek), Number(startDayButton.dataset.startDay));
      return;
    }

    const scenarioButton = event.target.closest("[data-scenario]");
    if (scenarioButton) {
      sessionStorage.setItem("activeScenario", scenarioButton.dataset.scenario);
      route = "scenario";
      location.hash = "scenario";
      renderScenario();
      return;
    }

    const speakButton = event.target.closest("[data-speak]");
    if (speakButton) {
      speak(speakButton.dataset.speak);
      return;
    }

    const playAssessmentRecordingButton = event.target.closest("[data-play-assessment-recording]");
    if (playAssessmentRecordingButton) {
      playAssessmentRecording(playAssessmentRecordingButton.dataset.playAssessmentRecording);
      return;
    }

    const downloadAssessmentRecordingButton = event.target.closest("[data-download-assessment-recording]");
    if (downloadAssessmentRecordingButton) {
      downloadAssessmentRecording(Number(downloadAssessmentRecordingButton.dataset.downloadAssessmentRecording));
      return;
    }

    const revealLine = event.target.closest("[data-reveal-line]");
    if (revealLine) {
      revealDialogueLine(Number(revealLine.dataset.revealLine));
      return;
    }

    const phraseAnswer = event.target.closest("[data-phrase-answer]");
    if (phraseAnswer && phraseAnswer.classList.contains("hidden")) {
      phraseAnswer.classList.remove("hidden");
      return;
    }

    const knowButton = event.target.closest("[data-phrase-know]");
    if (knowButton) {
      state.phraseStatus[knowButton.dataset.phraseKnow] = "known";
      saveState();
      showToast("已标记掌握。");
      return;
    }

    const againButton = event.target.closest("[data-phrase-again]");
    if (againButton) {
      state.phraseStatus[againButton.dataset.phraseAgain] = "again";
      saveState();
      showToast("已加入下次复习。");
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;

    const action = actionButton.dataset.action;
    if (action === "start-today") startTodaySession();
    else if (action === "quick-practice") startQuickPractice();
    else if (action === "toggle-answer") toggleAnswer();
    else if (action === "next-step") nextSessionStep();
    else if (action === "prev-step") previousSessionStep();
    else if (action === "exit-session") navigate("home");
    else if (action === "toggle-timer") toggleTimer();
    else if (action === "assessment-start") startAssessment();
    else if (action === "play-listening") playListeningItem(actionButton.dataset.listeningId);
    else if (action === "assessment-listening-prev") previousListeningItem();
    else if (action === "assessment-listening-next") nextListeningItem();
    else if (action === "assessment-retry-listening") {
      assessment.stage = "listening";
      assessment.listeningIndex = 0;
      assessment.answers = {};
      saveAssessmentDraft();
      renderAssessment();
    } else if (action === "assessment-start-speaking") {
      assessment.stage = "speaking";
      assessment.speakingIndex = 0;
      saveAssessmentDraft();
      renderAssessment();
    } else if (action === "assessment-speaking-prev") previousSpeakingItem();
    else if (action === "assessment-speaking-next") nextSpeakingItem();
    else if (action === "assessment-record-start") {
      startAssessmentRecording(
        actionButton.dataset.recordId,
        actionButton.dataset.recordLabel,
        Number(actionButton.dataset.recordSeconds)
      );
    } else if (action === "assessment-record-stop") stopAssessmentRecording();
    else if (action === "assessment-pronunciation-next") {
      assessment.stage = "work";
      saveAssessmentDraft();
      renderAssessment();
    } else if (action === "assessment-finish") finishAssessment();
    else if (action === "assessment-download-report") downloadAssessmentReport();
    else if (action === "assessment-retest") resetAssessment();
    else if (action === "toggle-all-phrases") document.querySelectorAll("[data-phrase-answer]").forEach((item) => item.classList.remove("hidden"));
    else if (action === "toggle-all-dialogue") {
      document.querySelectorAll(".answer-line").forEach((item) => revealDialogueLine(Number(item.dataset.line), true));
    } else if (action === "start-recording") startRecording();
    else if (action === "stop-recording") stopRecording();
    else if (action === "play-recording") playRecording();
    else if (action === "reset-week") {
      state.currentWeek = 1;
      state.currentDay = 1;
      saveState();
      showToast("已回到第1周第1天。");
      renderSettings();
    } else if (action === "reset-all") {
      if (confirm("确定清空所有完成记录和句库状态吗？")) {
        state = structuredClone(defaultState);
        saveState();
        applySettings();
        renderSettings();
        showToast("记录已清空。");
      }
    } else if (action === "export") exportProgress();
  }

  function handleKeydown(event) {
    const tag = document.activeElement?.tagName;
    const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
    if (typing) {
      if (event.key === "Escape") document.activeElement.blur();
      return;
    }

    if (event.key === "Enter") {
      if (route === "session") {
        event.preventDefault();
        nextSessionStep();
      } else if (route === "home") {
        event.preventDefault();
        startTodaySession();
      } else if (route === "completed") {
        event.preventDefault();
        navigate("home");
      } else if (route === "assessment" && assessment.stage === "intro") {
        event.preventDefault();
        startAssessment();
      } else if (route === "assessment" && assessment.stage === "listening") {
        event.preventDefault();
        nextListeningItem();
      } else if (document.activeElement?.matches("button")) {
        return;
      }
    } else if (event.key === " " && route === "session") {
      event.preventDefault();
      toggleTimer();
    } else if (event.key.toLowerCase() === "r") {
      if (route === "session") {
        event.preventDefault();
        toggleAnswer();
      } else if (route === "scenario") {
        event.preventDefault();
        document.querySelectorAll(".answer-line.hidden-answer").forEach((line) => {
          revealDialogueLine(Number(line.dataset.line), true);
        });
      } else if (route === "phrases" || route === "review") {
        event.preventDefault();
        document.querySelectorAll("[data-phrase-answer].hidden").forEach((item) => item.classList.remove("hidden"));
      }
    } else if (event.key === "ArrowRight" && route === "session") {
      event.preventDefault();
      nextSessionStep();
    } else if (event.key === "ArrowLeft" && route === "session") {
      event.preventDefault();
      previousSessionStep();
    } else if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      toggleFullscreen();
    } else if (event.key === "Escape") {
      if (route === "session" || route === "scenario" || route === "week" || route === "assessment" || route === "completed") navigate("home");
    }
  }

  function revealDialogueLine(index, onlyIfHidden = false) {
    const scenarioId = sessionStorage.getItem("activeScenario") || "customs";
    const scenario = scenarios.find((item) => item.id === scenarioId);
    if (!scenario) return;
    const line = scenario.dialogue[index];
    const target = document.querySelector(`[data-line="${index}"]`);
    if (!target || (!onlyIfHidden && dialogueReveal[index])) return;
    dialogueReveal[index] = true;
    target.textContent = line[1];
    target.classList.remove("hidden-answer");
  }

  function startQuickPractice() {
    const week = weeks[state.currentWeek - 1];
    const day = week.days[state.currentDay - 1];
    currentSession = {
      week: state.currentWeek,
      day: state.currentDay,
      title: `5分钟：${day[0]}`,
      index: 0,
      steps: [
        { title: "不看稿说60秒", minutes: 1, instruction: day[1], prompt: day[2], answer: "卡住就用：Let me rephrase that." },
        { title: "只练这一句", minutes: 3, instruction: "跟读5遍，再关掉答案说3遍。", prompt: day[2], answer: "先保证对方能听清，再追求速度。" },
        { title: "再录一遍", minutes: 1, instruction: "不重写稿，直接重新说60秒。", prompt: day[1], answer: day[2] }
      ]
    };
    route = "session";
    renderSession();
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) {
      showToast("当前浏览器不支持朗读。");
      return;
    }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.88;
    const voices = speechSynthesis.getVoices();
    const preferred = voices.find((voice) => /en-US|en-GB/.test(voice.lang) && !voice.localService);
    if (preferred) utterance.voice = preferred;
    speechSynthesis.speak(utterance);
  }

  function playListeningItem(id) {
    const data = window.ASSESSMENT_DATA;
    const item = data.listening.find((entry) => entry.id === id);
    if (!item) return;
    const status = document.getElementById("listening-status");
    if (status) status.textContent = "正在播放。";
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    const audio = new Audio(item.audio);
    audio.addEventListener("ended", () => {
      if (status) status.textContent = "播放结束。请完成问题。";
    });
    audio.play().catch(() => {
      if (!("speechSynthesis" in window)) {
        showToast("测试录音没有加载，请刷新页面。");
        return;
      }
      const utterance = new SpeechSynthesisUtterance(item.transcript);
      utterance.lang = "en-US";
      utterance.rate = 1;
      utterance.onend = () => {
        if (status) status.textContent = "播放结束。请完成问题。";
      };
      speechSynthesis.speak(utterance);
    });
  }

  async function startAssessmentRecording(id, label, seconds) {
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      showToast("当前页面不能录音。请用启动脚本打开，或使用 Voice Memos。");
      return;
    }
    if (activeAssessmentRecordingId) stopAssessmentRecording();

    try {
      assessmentStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      assessmentChunks = [];
      assessmentRecorder = new MediaRecorder(assessmentStream);
      activeAssessmentRecordingId = id;
      const startedAt = Date.now();

      assessmentRecorder.addEventListener("dataavailable", (event) => {
        if (event.data.size) assessmentChunks.push(event.data);
      });
      assessmentRecorder.addEventListener("stop", () => {
        const duration = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
        const mime = assessmentRecorder.mimeType || "audio/webm";
        const blob = new Blob(assessmentChunks, { type: mime });
        const url = URL.createObjectURL(blob);
        const previous = assessmentRecordings.find((recording) => recording.id === id);
        if (previous?.url) URL.revokeObjectURL(previous.url);
        assessmentRecordings = assessmentRecordings.filter((recording) => recording.id !== id);
        assessmentRecordings.push({ id, label, duration, mime, blob, url });
        assessmentStream?.getTracks().forEach((track) => track.stop());
        assessmentStream = null;
        activeAssessmentRecordingId = null;
        clearTimeout(assessmentRecordingTimeout);
        clearInterval(assessmentCountdownInterval);
        assessmentRecordingTimeout = null;
        assessmentCountdownInterval = null;
        if (route === "assessment") renderAssessment();
      });

      assessmentRecorder.start();
      renderAssessment();
      const startedAtLocal = Date.now();
      assessmentCountdownInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startedAtLocal) / 1000);
        const remaining = Math.max(0, seconds - elapsed);
        const countdown = document.getElementById("assessment-record-countdown");
        if (countdown) countdown.textContent = `剩余 ${remaining}s`;
        const status = document.getElementById("assessment-record-status");
        if (status) status.textContent = `正在录音，剩余 ${remaining} 秒`;
      }, 500);
      assessmentRecordingTimeout = setTimeout(stopAssessmentRecording, seconds * 1000);
    } catch {
      assessmentStream?.getTracks().forEach((track) => track.stop());
      assessmentStream = null;
      activeAssessmentRecordingId = null;
      showToast("没有获得麦克风权限。可改用 iPhone Voice Memos 录题。");
    }
  }

  function stopAssessmentRecording() {
    clearTimeout(assessmentRecordingTimeout);
    clearInterval(assessmentCountdownInterval);
    assessmentRecordingTimeout = null;
    assessmentCountdownInterval = null;
    if (assessmentRecorder?.state === "recording") {
      assessmentRecorder.stop();
    } else {
      activeAssessmentRecordingId = null;
      if (route === "assessment") renderAssessment();
    }
  }

  function playAssessmentRecording(id) {
    const recording = assessmentRecordings.find((item) => item.id === id);
    if (!recording) return;
    new Audio(recording.url).play().catch(() => showToast("录音播放失败。"));
  }

  function downloadAssessmentRecording(index) {
    const recording = assessmentRecordings[index];
    if (!recording) return;
    const extension = recording.mime.includes("ogg") ? "ogg" : recording.mime.includes("mp4") ? "m4a" : "webm";
    const link = document.createElement("a");
    link.href = recording.url;
    link.download = `${recording.id}-${todayISO()}.${extension}`;
    link.click();
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => showToast("浏览器没有允许全屏。"));
    } else {
      document.exitFullscreen?.();
    }
  }

  async function startRecording() {
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      showToast("当前浏览器不能录音。请使用 Voice Memos 或打开本地服务访问。");
      return;
    }
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recordedChunks = [];
      mediaRecorder = new MediaRecorder(mediaStream);
      mediaRecorder.addEventListener("dataavailable", (event) => {
        if (event.data.size) recordedChunks.push(event.data);
      });
      mediaRecorder.addEventListener("stop", () => {
        const blob = new Blob(recordedChunks, { type: mediaRecorder.mimeType || "audio/webm" });
        if (lastRecordingURL) URL.revokeObjectURL(lastRecordingURL);
        lastRecordingURL = URL.createObjectURL(blob);
        mediaStream?.getTracks().forEach((track) => track.stop());
        const status = document.getElementById("record-status");
        if (status) status.textContent = "已录音，可以播放";
        const playButton = document.querySelector('[data-action="play-recording"]');
        if (playButton) playButton.disabled = false;
      });
      mediaRecorder.start();
      document.getElementById("record-dot")?.classList.add("live");
      document.getElementById("record-status").textContent = "正在录音…";
      document.querySelector('[data-action="start-recording"]').disabled = true;
      document.querySelector('[data-action="stop-recording"]').disabled = false;
    } catch {
      showToast("没有获得麦克风权限。可以用手机 Voice Memos 录音。");
    }
  }

  function stopRecording() {
    if (mediaRecorder?.state === "recording") mediaRecorder.stop();
    document.getElementById("record-dot")?.classList.remove("live");
    const startButton = document.querySelector('[data-action="start-recording"]');
    const stopButton = document.querySelector('[data-action="stop-recording"]');
    if (startButton) startButton.disabled = false;
    if (stopButton) stopButton.disabled = true;
  }

  function playRecording() {
    if (!lastRecordingURL) return;
    const audio = new Audio(lastRecordingURL);
    audio.play().catch(() => showToast("播放失败，请重新录音。"));
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `NOA-English-progress-${todayISO()}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function importProgress(file) {
    if (!file) return;
    try {
      const imported = JSON.parse(await file.text());
      state = {
        ...structuredClone(defaultState),
        ...imported,
        settings: { ...defaultState.settings, ...(imported.settings || {}) }
      };
      saveState();
      applySettings();
      showToast("进度已导入。");
      renderSettings();
    } catch {
      showToast("导入失败，请确认文件来自本 App。");
    }
  }

  function applySettings() {
    document.documentElement.style.setProperty("--base-size", `${22 * state.settings.fontScale}px`);
  }

  function getPhase(weekNumber) {
    return phases.find((phase) => weekNumber >= phase.range[0] && weekNumber <= phase.range[1]) || phases[0];
  }

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 11) return "早上好";
    if (hour < 18) return "下午好";
    return "晚上好";
  }

  function sessionKey(week, day) {
    return `w${week}d${day}`;
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHTML(value).replaceAll("`", "&#096;");
  }

  document.addEventListener("input", (event) => {
    if (event.target.id === "phrase-search") {
      renderPhraseResults(event.target.value);
    }
    if (event.target.id === "start-date") {
      state.startDate = event.target.value || todayISO();
      saveState();
    }
    if (event.target.dataset.assessmentNote) {
      assessment.notes[event.target.dataset.assessmentNote] = event.target.value;
      saveAssessmentDraft();
    }
    if (event.target.dataset.assessmentSpeakingNote) {
      assessment.speakingNotes[event.target.dataset.assessmentSpeakingNote] = event.target.value;
      saveAssessmentDraft();
    }
    if (event.target.dataset.assessmentOtherNote) {
      assessment[event.target.dataset.assessmentOtherNote] = event.target.value;
      saveAssessmentDraft();
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.dataset.assessmentAnswer) {
      const id = event.target.dataset.assessmentAnswer;
      const index = Number(event.target.dataset.questionIndex);
      if (!assessment.answers[id]) assessment.answers[id] = [];
      assessment.answers[id][index] = Number(event.target.value);
      saveAssessmentDraft();
    }
    if (event.target.id === "daily-minutes") {
      state.settings.dailyMinutes = Number(event.target.value);
      saveState();
      showToast(`每日训练设为 ${event.target.value} 分钟。`);
    }
    if (event.target.id === "font-scale") {
      state.settings.fontScale = Number(event.target.value);
      saveState();
      applySettings();
    }
    if (event.target.id === "import-file") importProgress(event.target.files[0]);
    if (event.target.id === "self-rating") {
      assessment.selfRating = event.target.value;
      saveAssessmentDraft();
    }
  });

  document.getElementById("fullscreen-button").addEventListener("click", toggleFullscreen);
  document.getElementById("speak-button").addEventListener("click", () => {
    const prompt = document.querySelector(".prompt-box")?.textContent?.trim();
    if (prompt) speak(prompt.replace(/\s+/g, " "));
    else showToast("这个页面没有可朗读的英文句。");
  });

  function registerServiceWorker() {
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }
})();

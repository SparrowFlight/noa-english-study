window.PERSONAL_WEEKS = [
  {
    number: 1,
    title: "研发与市场的双重身份",
    goal: "同一项工作分别用商业、产品、技术三种语言讲清楚",
    days: [
      ["60秒桥梁身份", "录制岗位介绍：销售组织中的产品专员，同时代表研发解释技术方案。", "I work between engineering and the market. My background is in intelligent driving development, and I represent R&D when technical clarification is needed."],
      ["三层解释法", "选NOA，分别讲用户价值、产品范围和系统机制三个版本。", "In simple terms, the system follows a route and assists with lane changes."],
      ["技术背景一句话", "用三句说清算法、执行器匹配和常见问题经验，不逐项罗列。", "My background includes algorithm-to-actuator integration and the analysis of common field issues."],
      ["职责边界", "练“我能解释什么、哪些需要研发最终确认”。", "I can explain the current technical approach, but the final engineering commitment must come from R&D."],
      ["向分部介绍角色", "模拟第一次分部会，说明你会同时承担市场接口和技术澄清。", "My role is to translate technical trade-offs into product decisions for the local team."],
      ["首周录音", "重录60秒身份介绍和30秒NOA三层解释。", "I bridge product requirements, technical constraints, and local deployment."]
    ]
  },
  {
    number: 2,
    title: "线上会议与状态证据",
    goal: "在会议上给出状态、证据、风险和下一步，而不是只说在做",
    days: [
      ["会议开场", "用EF 4A和PE1练30秒开场，说明会同时讨论产品和技术。", "The purpose of today's call is to review status, technical evidence, and the next decision."],
      ["状态与证据", "每个状态后补一个证据：测试、日志、数据或版本。", "We've completed the first validation round. The evidence is the closed-loop test report from last Friday."],
      ["追问与打断", "练对缩写、数字、日志和口音的追问。", "Sorry, I didn't catch the last part. Which software version are you referring to?"],
      ["总结技术结论", "用EF 8B转述结构，把研发结论改写成双方能确认的版本。", "So R&D's current conclusion is that the issue is reproducible, but the root cause is not yet confirmed."],
      ["确认行动项", "确认负责人、输入、交付物和更新时间。", "The action item is for R&D to share the log analysis by Wednesday."],
      ["五分钟模拟会", "完成开场、状态、追问、技术确认和行动项。", "Let me summarize what is confirmed and what remains open."]
    ]
  },
  {
    number: 3,
    title: "产品配置与系统架构",
    goal: "把市场配置、车型差异和系统架构放在同一张图里说明",
    days: [
      ["功能与配置", "说明feature set、market configuration和vehicle variant的关系。", "The available features depend on the sensor set, software version, and vehicle hardware."],
      ["系统链路", "用perception–planning–control链路解释信息如何变成车辆动作。", "The system perceives the environment, plans a trajectory, and sends control commands to the vehicle."],
      ["软硬件边界", "说清算法、控制器、底盘执行器和传感器各自负责什么。", "The planner generates the request, while the chassis actuator determines how accurately the vehicle responds."],
      ["ODD与驾驶员责任", "解释系统可用范围、退出机制和驾驶员责任。", "The system operates within a defined ODD, and the driver must remain responsible outside it."],
      ["市场差异", "模拟分部问为什么同一车型在不同市场功能不同。", "The difference comes from the local validation scope, regulatory requirements, and approved configuration."],
      ["两分钟架构说明", "不看图讲清系统从传感器到车辆动作的链路。", "At the system level, the key is how perception, planning, control, and actuation work together."]
    ]
  },
  {
    number: 4,
    title: "技术问题叙事",
    goal: "按现象、条件、证据、假设、影响、措施说明问题",
    days: [
      ["现象与条件", "用时间和场景描述问题，不先下结论。", "At around 10:15, the vehicle did not complete the parking maneuver in a narrow space."],
      ["复现与频率", "说清是否可复现、出现频率和测试范围。", "The issue was observed twice in twenty attempts under similar lighting conditions."],
      ["证据与假设", "区分事实、证据和根因假设。", "The log shows a late execution response. One hypothesis is an interface mismatch between planning and control."],
      ["根因排查", "练“排除—假设—验证”的技术表达。", "We haven't confirmed the root cause yet. We're comparing the perception output, control command, and actuator response."],
      ["影响与缓解", "说明影响范围、临时措施和下一次更新。", "The current mitigation is to limit the feature in this scenario until the fix is validated."],
      ["问题复盘会", "录一段2分钟问题说明并回答三个技术追问。", "This is an observed symptom, not a confirmed root cause."]
    ]
  },
  {
    number: 5,
    title: "算法与执行器匹配",
    goal: "能说清算法输出、控制请求、执行器响应和故障链路",
    days: [
      ["算法链路", "用perception、prediction、planning、control四个层次描述问题。", "We need to separate the perception error from the downstream planning and control response."],
      ["控制请求", "描述期望轨迹、控制指令和响应偏差。", "The planning layer sends the request, but the vehicle response is delayed relative to the expected trajectory."],
      ["执行器响应", "练steering、braking、throttle、latency和saturation。", "The command is within range, but the actuator response is slower than expected."],
      ["匹配问题", "说明算法输出与底盘执行能力不匹配的表现。", "There is a mismatch between the requested motion and the actuator's actual response."],
      ["常见问题逻辑", "练感知误检、轨迹抖动、制动晚、转向回正慢等问题描述。", "A false detection can trigger an unnecessary planning reaction and an uncomfortable braking event."],
      ["技术复盘", "把一次真实或假设问题按signal → decision → action → outcome复述。", "We need to verify the full chain from sensor input to vehicle behavior."]
    ]
  },
  {
    number: 6,
    title: "模型、强化学习与一段式模型",
    goal: "能向不同受众解释新架构的价值、限制和验证要求",
    days: [
      ["从模块到模型", "解释传统模块化链路和模型驱动方案的区别。", "The architecture is moving from separate modules toward more model-driven decision-making."],
      ["强化学习一句话", "解释policy、reward、training和safety guardrails。", "Reinforcement learning can optimize a driving policy, but production systems still need safety constraints and fallback logic."],
      ["一段式模型", "解释sensor input到planning/control输出，但不夸大为黑盒万能。", "An end-to-end model maps sensor input more directly to a driving output, but it still requires validation and safety coverage."],
      ["优缺点", "比较可解释性、泛化、长尾场景、仿真和数据闭环。", "The key trade-off is generalization versus interpretability and validation confidence."],
      ["市场和研发两版解释", "同一架构分别向分部和技术客户解释。", "In simple terms, it learns more directly from data. At the technical level, we still validate distribution shift and closed-loop behaviour."],
      ["技术问答", "回答“为什么不用端到端”“RL安全吗”“如何验证”三类问题。", "The short answer is that model capability does not remove the need for system safety and validation."]
    ]
  },
  {
    number: 7,
    title: "技术深挖与追问",
    goal: "既能展开技术细节，也能在不知道时边界清楚",
    days: [
      ["区分产品与技术答案", "先给产品结论，再决定是否进入技术细节。", "At the product level, the feature is unchanged. At the technical level, we're changing how the model handles this scenario."],
      ["解释取舍", "用trade-off描述性能、成本、安全、进度和可解释性。", "This approach may improve performance, but it increases validation effort and reduces explainability."],
      ["证据强度", "用confirmed、observed、likely、possible、unknown分级。", "We have observed the behavior, but the root cause is still a hypothesis."],
      ["避免过度技术化", "把复杂技术答案压缩成市场团队能行动的三句话。", "What it means for the local team is this: no customer commitment yet, one additional validation step, and a new update on Friday."],
      ["应对挑战", "面对质疑时先确认问题、再分层回答。", "Let me make sure I understand your concern before I answer the technical part."],
      ["技术问答模拟", "回答5个连续追问，不允许用I don't know就结束。", "I don't have enough evidence to confirm that yet. Here's what we can validate next."]
    ]
  },
  {
    number: 8,
    title: "市场翻译与研发代表",
    goal: "代表研发解释方案，同时不把技术细节误传成商业承诺",
    days: [
      ["需求翻译", "把分部业务需求翻译成研发能评估的产品问题。", "The local request is a specific parking scenario, but the underlying product question is whether we support this space and obstacle type."],
      ["研发结论翻译", "把技术结论改写成市场团队能执行的行动。", "The technical conclusion is that the behavior is reproducible, so the local team should pause external communication until the fix is validated."],
      ["期望管理", "区分planned、under review、validated、confirmed。", "The feature is planned, but the launch date is not yet confirmed."],
      ["处理错误理解", "当场纠正分部对技术能力的误解。", "I want to correct one point: the system assists the driver; it does not remove driver responsibility."],
      ["多方冲突", "在研发、分部和客户之间说明共同事实和待决事项。", "We need to separate the customer symptom from the system root cause."],
      ["桥梁角色模拟", "完成一次需求澄清、技术解释和边界确认。", "My role is to make the technical constraint clear without turning it into an unsupported commercial promise."]
    ]
  },
  {
    number: 9,
    title: "开发计划、风险与路线图",
    goal: "讲清里程碑、依赖、证据、风险和决策点",
    days: [
      ["路线图", "按milestone、dependency、evidence、decision组织计划。", "The next milestone is closed-loop validation, and the key dependency is the updated vehicle software."],
      ["风险表达", "说明schedule、performance、safety、scope和compliance风险。", "The main risk is validation confidence, not basic feature availability."],
      ["日期边界", "区分target、provisional date和committed date。", "This is an engineering target, not a committed customer delivery date."],
      ["方案取舍", "讨论缩范围、延时间、加验证或分阶段发布。", "We can reduce the initial scope, extend validation, or move the launch review."],
      ["决策请求", "明确需要谁在何时做什么决定。", "We need the regional team to decide the launch scope by Friday."],
      ["三分钟计划说明", "按状态、风险、依赖、计划、请求录音。", "To stay on plan, we need one decision and two technical inputs."]
    ]
  },
  {
    number: 10,
    title: "技术邮件、企微与会议纪要",
    goal: "把技术讨论转成清楚、可追踪、不过度承诺的书面记录",
    days: [
      ["技术状态邮件", "用5行写清版本、状态、证据和下一步。", "Software version 4.35.31 has been tested. Two issues remain open. The log review is due on Thursday."],
      ["技术澄清请求", "向研发写一个可回答的问题，避免开放式追问。", "Could you confirm whether the delay comes from the planner, the controller, or the actuator response?"],
      ["风险邮件", "用Risk / Evidence / Impact / Mitigation / Decision needed写。", "The evidence is reproducible, but the root cause is not yet confirmed."],
      ["会议纪要", "分开写facts、decisions、open issues和action items。", "Confirmed: X. Open issue: Y. Action: Z by Friday."],
      ["企微跟进", "三行内说清背景、请求和时间。", "Quick follow-up on the actuator log. We need your confirmation by 3 p.m. before the local review."],
      ["书面审计", "检查本周真实邮件，删除模糊承诺和没有负责人的任务。", "Please confirm the owner and deadline so we can close the action."]
    ]
  },
  {
    number: 11,
    title: "全英文PPT与问答",
    goal: "完成一次5分钟技术产品演示和一次10分钟深挖版本",
    days: [
      ["故事线", "设计Why now / What we offer / How it works / Evidence / Risk / Roadmap / Ask。", "Today I'll cover the market need, the technical approach, the validation evidence, and the decision we need."],
      ["架构页", "用三层语言讲一张架构图：用户、系统、算法。", "At the user level, this means smoother support. At the system level, perception, planning, and control work together."],
      ["模型页", "讲model+RL或end-to-end的价值、边界和验证方式。", "The model improves data-driven behaviour, while safety guardrails and validation cover the remaining risk."],
      ["证据页", "用数据、测试、日志和限制说明进展。", "We completed 18 closed-loop cases. Two remain open, so the current result is encouraging but not final."],
      ["问答页", "准备技术、产品、商业三类各5个问题。", "Let me answer that at two levels: the product implication first, then the technical detail."],
      ["完整演讲", "录5分钟版本，再用10分钟回答技术追问。", "To summarize, the technical path is feasible, but the release decision depends on two remaining validations."]
    ]
  },
  {
    number: 12,
    title: "双轨综合复测",
    goal: "同时完成分部会、研发会、技术问答和英文PPT片段",
    days: [
      ["分部产品会", "8分钟说明状态、配置、风险和计划。", "The product scope is clear, but the launch date remains provisional."],
      ["研发技术会", "8分钟追进展、问根因、确认证据和行动项。", "Please separate what is confirmed from what is still a hypothesis."],
      ["技术客户问答", "模拟深挖算法、执行器和验证问题。", "The observed symptom does not yet prove the root cause."],
      ["英文PPT片段", "做5分钟演示并处理3个挑战性问题。", "The technical benefit is clear, but the validation evidence still has limits."],
      ["书面闭环", "会后写技术纪要、风险邮件和企微跟进。", "Facts, decisions, open issues, and action items are summarized below."],
      ["结业复测", "重复基线测试，并增加技术解释任务。", "I bridge product requirements, technical constraints, and local deployment."]
    ]
  }
];

window.PERSONAL_PHASES = [
  { range: [1, 4], title: "建立双轨表达", text: "桥梁身份、会议证据、系统架构、技术问题叙事。" },
  { range: [5, 8], title: "深入技术并翻译市场", text: "算法执行器、模型与RL、技术问答、研发代表。" },
  { range: [9, 12], title: "计划、书面与PPT闭环", text: "路线图风险、邮件纪要、全英文展示、综合复测。" }
];

window.PERSONAL_PHRASES = [
  { zh: "我在研发与市场之间工作。", en: "I work at the interface between engineering and the market.", cat: "身份", level: 1 },
  { zh: "我有智驾开发背景，需要时代表研发解释技术方案。", en: "I have a background in intelligent driving development and represent R&D when technical clarification is needed.", cat: "身份", level: 2 },
  { zh: "我的背景包括算法与执行器匹配。", en: "My background includes algorithm-to-actuator integration.", cat: "身份", level: 2 },
  { zh: "我的职责是把技术限制翻译成产品决策。", en: "My role is to translate technical constraints into product decisions.", cat: "身份", level: 2 },
  { zh: "我能解释当前方案，但最终工程承诺需要研发确认。", en: "I can explain the current approach, but the final engineering commitment must come from R&D.", cat: "边界", level: 2 },
  { zh: "简单来说，系统跟随导航路线并辅助变道。", en: "In simple terms, the system follows a route and assists with lane changes.", cat: "分层解释", level: 1 },
  { zh: "从产品角度看……从技术角度看……", en: "From a product perspective ... From a technical perspective ...", cat: "分层解释", level: 1 },
  { zh: "短答案先给产品影响，技术原因稍后展开。", en: "Let me answer that at two levels: the product implication first, then the technical detail.", cat: "分层解释", level: 2 },
  { zh: "系统感知环境、规划轨迹，并向车辆发送控制指令。", en: "The system perceives the environment, plans a trajectory, and sends control commands to the vehicle.", cat: "系统", level: 2 },
  { zh: "规划层生成请求，底盘执行器决定车辆实际响应。", en: "The planner generates the request, while the chassis actuator determines the actual vehicle response.", cat: "系统", level: 2 },
  { zh: "我们需要把感知错误和下游规划控制响应区分开。", en: "We need to separate the perception error from the downstream planning and control response.", cat: "系统", level: 3 },
  { zh: "控制指令在范围内，但执行器响应比预期慢。", en: "The command is within range, but the actuator response is slower than expected.", cat: "执行器", level: 2 },
  { zh: "算法请求与执行器实际响应之间存在不匹配。", en: "There is a mismatch between the requested motion and the actuator's actual response.", cat: "执行器", level: 3 },
  { zh: "我们检查了感知输出、控制指令和执行器响应。", en: "We checked the perception output, control command, and actuator response.", cat: "执行器", level: 2 },
  { zh: "误检可能触发不必要的规划反应。", en: "A false detection can trigger an unnecessary planning reaction.", cat: "算法问题", level: 2 },
  { zh: "这个问题在相似光照条件下20次中出现2次。", en: "The issue was observed twice in twenty attempts under similar lighting conditions.", cat: "证据", level: 2 },
  { zh: "这是观察到的现象，不是已确认的根因。", en: "This is an observed symptom, not a confirmed root cause.", cat: "证据", level: 2 },
  { zh: "我们目前的假设是……还需要日志验证。", en: "Our current hypothesis is ... and we still need the logs to confirm it.", cat: "证据", level: 2 },
  { zh: "我们还没有足够证据确认原因。", en: "We don't have enough evidence to confirm the root cause yet.", cat: "证据", level: 1 },
  { zh: "架构正在从分离模块转向更模型驱动的决策。", en: "The architecture is moving from separate modules toward more model-driven decision-making.", cat: "模型", level: 3 },
  { zh: "强化学习可以优化驾驶策略，生产系统仍需安全约束。", en: "Reinforcement learning can optimize a driving policy, but production systems still need safety constraints and fallback logic.", cat: "模型", level: 3 },
  { zh: "一段式模型更直接地把传感器输入映射到驾驶输出。", en: "An end-to-end model maps sensor input more directly to a driving output.", cat: "模型", level: 3 },
  { zh: "一段式模型仍需要验证和安全覆盖。", en: "An end-to-end model still requires validation and safety coverage.", cat: "模型", level: 2 },
  { zh: "核心取舍是泛化能力与可解释性、验证信心。", en: "The key trade-off is generalization versus interpretability and validation confidence.", cat: "模型", level: 3 },
  { zh: "模型能力提升并不消除系统安全验证的需求。", en: "Model capability does not remove the need for system safety and validation.", cat: "模型", level: 2 },
  { zh: "我们需要验证分布漂移和闭环行为。", en: "We need to validate distribution shift and closed-loop behaviour.", cat: "模型", level: 3 },
  { zh: "这能提高性能，但会增加验证工作并降低可解释性。", en: "This may improve performance, but it increases validation effort and reduces explainability.", cat: "取舍", level: 2 },
  { zh: "技术结论是可复现，但根因尚未确认。", en: "The technical conclusion is that the issue is reproducible, but the root cause is not yet confirmed.", cat: "技术结论", level: 2 },
  { zh: "对当地团队的含义是：暂不对外承诺。", en: "What it means for the local team is that we should pause external commitments.", cat: "市场翻译", level: 2 },
  { zh: "我们需把客户症状和系统根因分开。", en: "We need to separate the customer symptom from the system root cause.", cat: "市场翻译", level: 2 },
  { zh: "这个功能已规划，但发布日期尚未确认。", en: "The feature is planned, but the launch date is not yet confirmed.", cat: "边界", level: 1 },
  { zh: "系统辅助驾驶员，但不替代驾驶员责任。", en: "The system assists the driver; it does not remove driver responsibility.", cat: "边界", level: 2 },
  { zh: "这是工程目标，不是已承诺的客户交付日期。", en: "This is an engineering target, not a committed customer delivery date.", cat: "计划", level: 2 },
  { zh: "下一里程碑是闭环验证。", en: "The next milestone is closed-loop validation.", cat: "计划", level: 2 },
  { zh: "主要风险是验证信心，不是基础功能可用性。", en: "The main risk is validation confidence, not basic feature availability.", cat: "风险", level: 3 },
  { zh: "我们可以缩范围、延验证或分阶段发布。", en: "We can reduce the initial scope, extend validation, or move the launch review.", cat: "风险", level: 2 },
  { zh: "技术路径可行，但发布决定取决于两项验证。", en: "The technical path is feasible, but the release decision depends on two remaining validations.", cat: "总结", level: 2 },
  { zh: "软件4.35.31已测试，仍有两个未关闭问题。", en: "Software version 4.35.31 has been tested. Two issues remain open.", cat: "邮件", level: 2 },
  { zh: "能否确认延迟来自规划、控制还是执行器响应？", en: "Could you confirm whether the delay comes from the planner, the controller, or the actuator response?", cat: "邮件", level: 3 },
  { zh: "已确认：……。未决问题：……。行动项：……。", en: "Confirmed: ... Open issue: ... Action: ...", cat: "纪要", level: 1 },
  { zh: "请把已确认结论和仍属假设的部分分开。", en: "Please separate what is confirmed from what is still a hypothesis.", cat: "纪要", level: 2 },
  { zh: "请确认负责人和截止时间，以便关闭行动项。", en: "Please confirm the owner and deadline so we can close the action.", cat: "企微", level: 1 },
  { zh: "今天讲市场需求、技术方案、验证证据和所需决定。", en: "Today I'll cover the market need, the technical approach, the validation evidence, and the decision we need.", cat: "PPT", level: 2 },
  { zh: "从用户角度……从系统角度……", en: "At the user level ... At the system level ...", cat: "PPT", level: 1 },
  { zh: "模型改善数据驱动行为，安全约束覆盖剩余风险。", en: "The model improves data-driven behaviour, while safety guardrails and validation cover the remaining risk.", cat: "PPT", level: 3 },
  { zh: "结果有积极信号，但还不是最终结论。", en: "The current result is encouraging, but not final.", cat: "PPT", level: 2 },
  { zh: "我先回答产品影响，再跟进技术细节。", en: "I'll start with the product implication and then go into the technical detail.", cat: "问答", level: 2 },
  { zh: "这个问题需要研发和当地团队共同决定。", en: "This question needs a joint decision from R&D and the local team.", cat: "问答", level: 2 }
];

window.PERSONAL_SCENARIOS = [
  {
    id: "bridge-intro",
    title: "研发市场桥梁身份",
    subtitle: "销售产品专员 + 研发技术代表",
    level: "核心身份",
    dialogue: [
      ["Partner", "Could you introduce your role and technical background?"],
      ["You", "I work at the interface between engineering and the market. I'm a product specialist in the sales organization, but I have a development background in intelligent driving."],
      ["You", "I coordinate product status and deployment with local teams, and I represent R&D when technical clarification is needed."],
      ["Partner", "What technical areas do you cover?"],
      ["You", "I'm familiar with the algorithm chain, common failure modes, and the interaction between control commands and actuator response."],
      ["Partner", "Can you approve engineering changes?"],
      ["You", "I can explain the approach and collect the technical evidence, but the final engineering decision must come from R&D."]
    ]
  },
  {
    id: "tech-issue",
    title: "技术问题说明",
    subtitle: "现象、证据、假设、影响、下一步",
    level: "技术会议",
    dialogue: [
      ["Partner", "What exactly happened in the parking test?"],
      ["You", "At around 10:15, the vehicle stopped before completing the parking maneuver in a narrow space."],
      ["Partner", "Is it reproducible?"],
      ["You", "We observed it twice in twenty attempts under similar lighting conditions. The symptom is reproducible, but the root cause is not confirmed."],
      ["Partner", "Could it be an actuator problem?"],
      ["You", "It could be. The command was within range, but the actuator response was slower than expected. We're also checking the perception output and planner request."],
      ["Partner", "What happens next?"],
      ["You", "R&D will align the logs and confirm whether the delay starts in planning, control, or the actuator response by Wednesday."]
    ]
  },
  {
    id: "model-rl",
    title: "模型与强化学习问答",
    subtitle: "向市场和研发分别解释",
    level: "前沿技术",
    dialogue: [
      ["Partner", "Why are you moving toward a model-driven or end-to-end approach?"],
      ["You", "In simple terms, a model-driven approach can learn more directly from data and handle complex scenarios more consistently."],
      ["Partner", "Does that mean the rules are no longer needed?"],
      ["You", "No. Production systems still need safety constraints, fallback behavior, and validation around the learned policy."],
      ["Partner", "How do you validate reinforcement learning?"],
      ["You", "We need closed-loop evaluation, simulation, edge-case coverage, and checks for distribution shift. Model performance alone is not enough."],
      ["Partner", "What is the main trade-off?"],
      ["You", "The main trade-off is generalization versus interpretability and validation confidence."],
      ["Partner", "What should the local team communicate?"],
      ["You", "Please present it as a technology direction under validation, not as a confirmed capability for the next release."]
    ]
  },
  {
    id: "market-translation",
    title: "面向市场翻译技术结论",
    subtitle: "结论、限制、影响、行动",
    level: "桥梁沟通",
    dialogue: [
      ["Partner", "R&D says the issue is under investigation. What does that mean for us?"],
      ["You", "It means we have observed the behavior, but we have not confirmed the root cause."],
      ["Partner", "Can we still tell customers that it will be fixed next week?"],
      ["You", "No. I don't want to overpromise. The technical path is being reviewed, but the fix date is still provisional."],
      ["Partner", "What can we say now?"],
      ["You", "We can say that the issue is reproducible and that the team is validating the root cause and mitigation."],
      ["Partner", "When will we know more?"],
      ["You", "R&D will update the evidence on Wednesday, and I'll issue a revised status on Thursday."]
    ]
  },
  {
    id: "actuator-match",
    title: "算法与执行器匹配",
    subtitle: "控制请求、响应偏差与责任边界",
    level: "技术深挖",
    dialogue: [
      ["Engineer", "What evidence do we have?"],
      ["You", "The log shows that the control command was issued, but the vehicle response was delayed."],
      ["Engineer", "Is the algorithm output wrong?"],
      ["You", "Not necessarily. We need to check the timing between planning, control, and the actuator response before we assign the root cause."],
      ["Engineer", "What are the possible causes?"],
      ["You", "Possible causes include time synchronization, actuator latency, calibration, or saturation outside the expected range."],
      ["Engineer", "What is the next action?"],
      ["You", "We need a synchronized log from the controller and chassis, plus a repeat test under the same conditions."]
    ]
  },
  {
    id: "ppt-qna",
    title: "英文PPT技术问答",
    subtitle: "先结论，后分层，不硬猜",
    level: "展示",
    dialogue: [
      ["Audience", "Is your end-to-end model safer than the modular pipeline?"],
      ["You", "The short answer is that we don't have enough evidence to claim that yet."],
      ["You", "At the product level, it may improve consistency in complex scenarios. At the system level, we still need safety guardrails, fallback behavior, and closed-loop validation."],
      ["Audience", "When will it be ready for this market?"],
      ["You", "The current plan is to complete closed-loop validation first. The market release date remains provisional until the validation evidence is reviewed."],
      ["Audience", "Can local sales present it as available?"],
      ["You", "No. Please position it as a technology direction under validation, not a confirmed release commitment."]
    ]
  }
];

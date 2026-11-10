window.SUPPLEMENT_DATA = window.SUPPLEMENT_DATA || [];
window.SUPPLEMENT_DATA.push(
{
  id:'taurine',
  name:'牛磺酸',
  en:'Taurine',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:1,high:3,step:0.5},
  tagline:'常与咖啡因复配的含硫氨基酸。运动收益温和，宣传远大于证据。',
  intro:[
    '牛磺酸是一种含硫氨基酸，人体可由半胱氨酸合成，也能从动物性食物中获得。它不参与蛋白质构成，主要调节细胞体积、钙信号、渗透压和抗氧化防御，在心肌和视网膜中浓度较高。',
    '补充剂的研究集中在耐力运动、力量表现和心脏代谢指标。部分小样本试验显示，它能轻度延长力竭时间、减轻主观疲劳，但结果并不一致，效应量通常小于咖啡因或肌酸。能量饮料中的牛磺酸常与咖啡因和糖同时出现，很难单独归因。'
  ],
  roles:['调节细胞渗透压与钙离子信号','参与心肌和骨骼肌兴奋—收缩耦联','抗氧化与膜稳定','参与胆汁酸结合','支持视网膜和神经系统功能'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'常见补充量',value:'1–3 g/天'},
      {label:'运动前单次',value:'1–2 g，运动前 60–90 分钟'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定（EFSA 认为每日 3 g 未见安全担忧）',
    note:'牛磺酸不是必需营养素，正常饮食者通常不缺。剂量效应关系不明确，超过 3 g/天的长期安全性数据有限。'
  },
  timing:'运动前 60–90 分钟，或随餐',
  withFood:'任意',
  forms:[
    {name:'游离牛磺酸粉',bio:'高',timing:'运动前 60–90 分钟',food:'任意',dose:'1–3 g/天',grade:'B',note:'研究中最常用的形式，价格低，溶解性好。'},
    {name:'牛磺酸胶囊',bio:'高',timing:'运动前或随餐',food:'任意',dose:'1–3 g/天',grade:'B',note:'便于计量，注意每粒含量差异。'},
    {name:'能量饮料中的牛磺酸',bio:'高',timing:'运动前',food:'任意',dose:'约 0.4–1 g/罐',grade:'C',note:'剂量通常偏低，同时摄入咖啡因和糖，不能单独评价牛磺酸效果。'}
  ],
  foods:[
    {name:'扇贝',amount:'约 700–1000 mg',per:'100 g',note:'海产品中含量较高'},
    {name:'金枪鱼',amount:'约 200–400 mg',per:'100 g',note:'同时富含优质蛋白'},
    {name:'鸡腿肉（熟）',amount:'约 150–250 mg',per:'100 g',note:'深色肉含量高于鸡胸'},
    {name:'牛奶',amount:'约 10–20 mg',per:'100 ml',note:'含量低，但日常摄入量大'},
    {name:'海苔',amount:'约 100–300 mg',per:'100 g',note:'干重计算，实际单次摄入有限'}
  ],
  deficiency:{
    signs:['无典型缺乏病','长期完全肠外营养者可能出现视网膜与心肌功能异常','儿童心肌病（个案，证据有限）','运动耐力下降（非特异）'],
    groups:['长期完全肠外营养','严格素食且海产品摄入极少','慢性肝病','心力衰竭患者（心肌牛磺酸偏低）','长期大量饮酒']
  },
  tests:[
    {name:'血浆或全血牛磺酸',sample:'静脉血',range:'无统一临床判读标准',note:'受饮食和转运体影响，主要用于研究。'},
    {name:'血浆氨基酸谱',sample:'静脉血',range:'按实验室参考范围',note:'可同时评估其他氨基酸，非常规筛查项目。'},
    {name:'心电图 / 心脏超声',sample:'检查',range:'按专科判读',note:'仅用于长期肠外营养或疑似心肌病者。'}
  ],
  cautions:['与锂盐合用可能降低锂的肾脏清除，需监测血锂浓度','可能与降压药叠加降压作用，低血压者注意','与地高辛等强心苷合用缺乏充分数据，心脏病人群应先咨询医生','高剂量可能引起腹泻或胃部不适','能量饮料中的咖啡因和糖带来的风险往往大于牛磺酸本身'],
  sideEffects:[
    { effect: '腹泻、稀便', frequency: '不常见', note: '单次超过 3 g 时更易出现；分次服用、随餐，减量后仍持续应停药并补水。' },
    { effect: '胃部不适、恶心', frequency: '不常见', note: '随餐或餐后服用，从 1 g 起始逐步加量。' },
    { effect: '头晕、乏力（血压偏低）', frequency: '少见', note: '与降压药合用时风险增加；起身宜缓慢，反复头晕应测血压并就医。' },
    { effect: '皮疹、瘙痒等过敏反应', frequency: '少见', note: '立即停用；出现面唇肿胀或呼吸困难按过敏性休克处理并急诊。' },
    { effect: '血锂升高（震颤、呕吐、意识模糊）', frequency: '少见', note: '服用锂盐者需监测血锂；出现上述症状立即停药并急诊。' }
  ],
  special:[
    {who:'耐力项目运动员',what:'可短期试用 1–2 g 运动前，但优先级低于训练、碳水和补液。'},
    {who:'长期肠外营养',what:'是确有缺乏风险的场景，补充剂量应由临床营养团队决定。'},
    {who:'正在服用锂盐',what:'补充前告知精神科医生，必要时监测血锂。'},
    {who:'出现以下情况',what:'持续腹泻、严重头晕或晕厥、面唇肿胀与呼吸困难，立即停药并就医；服用锂盐者出现手抖、呕吐需急诊查血锂。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'EFSA Panel on Food Additives and Nutrient Sources added to Food. Scientific Opinion on the safety of taurine as a food supplement. EFSA Journal.',kind:'机构'},
    {text:'Waldron M, et al. The effects of an oral taurine dose and supplementation period on endurance exercise performance in humans: a meta-analysis. Sports Med. 2018.',kind:'综述'},
    {text:'Schaffer SW, et al. Physiological roles of taurine in heart and muscle. J Biomed Sci. 2010.',kind:'综述'},
  ],
  related:['creatine','magnesium','potassium','b6']
},
{
  id:'glycine',
  name:'甘氨酸',
  en:'Glycine',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:3,high:10,step:1},
  tagline:'结构最简单的氨基酸。睡前 3 g 的研究初步，别把它当成安眠药。',
  intro:[
    '甘氨酸是分子量最小的氨基酸，参与胶原蛋白合成、谷胱甘肽生成和中枢神经系统的抑制性信号。它也是肌酸、嘌呤和卟啉合成的前体，人体可以自身合成，通常不视为必需。',
    '补充剂主要用于改善睡眠和促进胶原合成。睡前 3 g 的小样本研究显示，核心体温下降、入睡潜伏期缩短，但样本量小、重复研究少。关于皮肤与关节的研究多使用胶原肽，无法单独归因于甘氨酸。'
  ],
  roles:['胶原蛋白合成的原料','谷胱甘肽与抗氧化防御','中枢抑制性神经递质','肌酸与卟啉合成前体','参与一碳代谢与甲基化'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'睡眠研究剂量',value:'3 g，睡前 30–60 分钟'},
      {label:'代谢研究剂量',value:'5–10 g/天，分次'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定（常规剂量耐受性较好）',
    note:'甘氨酸有轻微甜味，常作为代糖和蛋白粉辅料。高剂量单次服用可能引起胃部不适或轻度腹泻。'
  },
  timing:'睡前 30–60 分钟，或随餐',
  withFood:'任意',
  forms:[
    {name:'甘氨酸粉',bio:'高',timing:'睡前 30–60 分钟',food:'任意',dose:'3 g（睡眠）',grade:'B',note:'研究中最常用的形式，成本低。'},
    {name:'甘氨酸胶囊',bio:'高',timing:'睡前',food:'任意',dose:'1–3 g',grade:'C',note:'需要多粒才能达到研究剂量，注意辅料。'},
    {name:'甘氨酸镁',bio:'中高',timing:'睡前',food:'随餐',dose:'按元素镁 100–200 mg',grade:'B',note:'同时补充镁，实际甘氨酸剂量低于睡眠研究用量。'},
    {name:'胶原蛋白肽',bio:'高',timing:'空腹或随餐',food:'任意',dose:'10–15 g/天',grade:'B',note:'含甘氨酸、脯氨酸和羟脯氨酸，不能等同于纯甘氨酸。'}
  ],
  foods:[
    {name:'猪皮',amount:'甘氨酸约 3–5 g',per:'100 g',note:'以胶原蛋白形式存在'},
    {name:'鸡爪',amount:'甘氨酸约 2–4 g',per:'100 g',note:'胶原含量高，同时含脂肪'},
    {name:'牛腱',amount:'甘氨酸约 1–2 g',per:'100 g',note:'结缔组织较多的部位'},
    {name:'大豆（干）',amount:'甘氨酸约 1.9 g',per:'100 g',note:'植物蛋白来源'},
    {name:'明胶',amount:'甘氨酸约 20 g',per:'100 g',note:'几乎纯胶原蛋白，但氨基酸组成不完整'}
  ],
  deficiency:{
    signs:['无典型缺乏病','血浆甘氨酸偏低见于严重营养不良','胶原合成受损（理论推断，人体证据有限）','睡眠质量下降（非特异）'],
    groups:['蛋白质摄入严重不足','长期限制饮食','老年人（胶原合成下降）','慢性肝病','严重创伤或烧伤']
  },
  tests:[
    {name:'血浆氨基酸谱',sample:'静脉血',range:'按实验室参考范围',note:'甘氨酸降低多见于严重营养不良或代谢病，非常规检查。'},
    {name:'尿有机酸与甘氨酸',sample:'尿液',range:'按实验室参考范围',note:'用于排查非酮性高甘氨酸血症等遗传代谢病。'},
    {name:'睡眠日记 / 活动记录',sample:'自评 / 可穿戴设备',range:'与基线比较',note:'评价睡眠干预比抽血更实际。'}
  ],
  cautions:['与氯氮平等抗精神病药合用时疗效判断需由精神科医生评估，证据有限','理论上增加草酸前体，草酸钙结石患者不宜长期大剂量','高剂量单次服用可能引起恶心、腹泻','与镇静催眠药或酒精合用可能加重嗜睡','肝肾功能不全者高剂量使用前应咨询医生'],
  sideEffects:[
    { effect: '恶心、胃部不适', frequency: '不常见', note: '单次 10 g 以上更易出现；分次服用、随餐或减量可缓解。' },
    { effect: '腹泻、稀便', frequency: '不常见', note: '减量并保证饮水；持续超过两天应停药。' },
    { effect: '嗜睡、白天困倦', frequency: '不常见', note: '避免与镇静催眠药、酒精同服；白天需驾驶或操作机械时减量。' },
    { effect: '草酸钙结石风险升高', frequency: '少见', note: '长期大剂量者应保证饮水；有结石史者避免长期使用并咨询泌尿外科。' }
  ],
  special:[
    {who:'入睡困难',what:'可尝试睡前 3 g，连续 1–2 周记录睡眠日记再判断是否有效。'},
    {who:'追求皮肤与关节健康',what:'胶原肽的证据比纯甘氨酸更直接，但两者都不应替代整体蛋白摄入。'},
    {who:'草酸钙结石病史',what:'避免长期大剂量补充，保证饮水并咨询医生。'},
    {who:'出现以下情况',what:'与镇静药或酒精同服后出现呼吸变浅、意识模糊，或腰腹绞痛、血尿，立即就医。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Razak MA, et al. Multifarious beneficial effect of nonessential amino acid, glycine: a review. Oxid Med Cell Longev. 2017.',kind:'综述'},
    {text:'Bannai M, Kawai N. New therapeutic strategy for amino acid medicine: glycine improves the quality of sleep. J Pharmacol Sci. 2012.',kind:'综述'},
    {text:'Meléndez-Hevia E, et al. A weak link in metabolism: the metabolic capacity for glycine biosynthesis does not satisfy the need for collagen synthesis. J Biosci. 2009.',kind:'综述'},
  ],
  related:['collagen','creatine','magnesium','melatonin']
},
{
  id:'citrulline',
  name:'瓜氨酸',
  en:'L-Citrulline',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:3,high:6,step:0.5},
  tagline:'比精氨酸更能抬高血浆精氨酸，但对运动表现的提升有限且不一致。',
  intro:[
    '瓜氨酸是尿素循环中的中间产物，口服后绕过肝脏首过代谢，在肾脏转化为精氨酸，因此比直接口服精氨酸更能提高血浆精氨酸水平和一氧化氮生成。西瓜是主要的天然来源。',
    '研究集中在力量耐力、血流和血压方面。部分试验显示可增加重复次数或降低肌肉酸痛，但多项系统评价认为效应量小、研究质量参差。对已经摄入充足蛋白质和精氨酸的人群，额外补充的边际收益更低。'
  ],
  roles:['一氧化氮生成的前体','参与尿素循环与氨清除','提高血浆精氨酸水平','可能改善肌肉血流与运动耐力','参与蛋白质与多胺代谢'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'常见补充量',value:'3–6 g/天'},
      {label:'运动前单次',value:'3–6 g，运动前 60 分钟'},
      {label:'瓜氨酸苹果酸',value:'6–8 g（约含 3.5–4.5 g 瓜氨酸）'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'瓜氨酸苹果酸是盐形式，标签剂量不能直接等同于纯瓜氨酸。研究多采用 60 分钟前单次服用或连续数周补充。'
  },
  timing:'运动前 60 分钟，或随餐',
  withFood:'任意',
  forms:[
    {name:'L-瓜氨酸粉',bio:'高',timing:'运动前 60 分钟',food:'任意',dose:'3–6 g/天',grade:'B',note:'研究最常用的形式，剂量明确。'},
    {name:'瓜氨酸苹果酸',bio:'中高',timing:'运动前 60 分钟',food:'任意',dose:'6–8 g/天',grade:'B',note:'含苹果酸，部分研究显示可减轻酸痛，但结果不一致。'},
    {name:'西瓜汁 / 西瓜提取物',bio:'中',timing:'运动前',food:'任意',dose:'按瓜氨酸 1–3 g 折算',grade:'C',note:'天然来源，剂量难以精确控制，同时含糖。'}
  ],
  foods:[
    {name:'西瓜',amount:'约 0.2–0.5 g',per:'100 g',note:'果肉含量高于瓜皮'},
    {name:'黄瓜',amount:'约 0.02–0.05 g',per:'100 g',note:'含量很低'},
    {name:'南瓜',amount:'约 0.02 g',per:'100 g',note:'日常摄入量有限'},
    {name:'大豆（干）',amount:'少量',per:'100 g',note:'主要以精氨酸形式存在'}
  ],
  deficiency:{
    signs:['不属于经典缺乏症','尿素循环障碍患者可出现高氨血症','血浆瓜氨酸偏低见于严重肠病','运动后氨清除能力下降（理论推断）'],
    groups:['尿素循环障碍（需专科管理）','短肠综合征','严重蛋白质营养不良','高强度训练且蛋白摄入不足']
  },
  tests:[
    {name:'血浆氨基酸谱（含瓜氨酸）',sample:'静脉血',range:'按实验室参考范围',note:'新生儿筛查和尿素循环障碍评估中使用。'},
    {name:'血氨',sample:'静脉血',range:'按实验室参考范围',note:'疑似尿素循环障碍或高氨症状时需要。'},
    {name:'血压与血流介导舒张',sample:'诊室测量 / 超声',range:'与基线比较',note:'研究血管功能时使用，临床不作为常规随访指标。'}
  ],
  cautions:['与降压药、硝酸酯类或 PDE5 抑制剂合用可能叠加降压，导致头晕或低血压','尿素循环障碍（尤其是精氨基琥珀酸裂解酶缺乏）患者禁用，可能加重高瓜氨酸血症','可能引起胃部不适或轻度腹泻','手术前两周应停用，避免血压波动','不要与精氨酸大剂量同时叠加使用'],
  sideEffects:[
    { effect: '胃部不适、腹胀', frequency: '不常见', note: '随餐或分次服用；瓜氨酸苹果酸对胃的刺激更明显，可换用纯瓜氨酸。' },
    { effect: '轻度腹泻', frequency: '不常见', note: '单次 6 g 以上更易出现；减量并补水，持续腹泻应停药。' },
    { effect: '头晕、低血压', frequency: '不常见', note: '与降压药、硝酸酯类或 PDE5 抑制剂合用会叠加；监测血压，起身宜缓慢。' },
    { effect: '血氨升高（尿素循环障碍者）', frequency: '少见', note: '该人群禁用；出现呕吐、嗜睡、意识模糊应立即急诊。' }
  ],
  special:[
    {who:'力量训练人群',what:'可尝试运动前 6 g 纯瓜氨酸，但对已经蛋白充足者的增肌收益有限。'},
    {who:'血压偏高者',what:'可能轻度降低血压，但不能替代降压药，合用时应监测血压。'},
    {who:'尿素循环障碍患者',what:'属于禁忌，任何氨基酸补充都应由代谢专科医生决定。'},
    {who:'出现以下情况',what:'晕厥、持续低血压，或呕吐伴意识改变、嗜睡，立即就医；尿素循环障碍患者需急诊处理高氨血症。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Gonzalez AM, Trexler ET. Effects of citrulline supplementation on exercise performance in humans: a review of the current literature. J Strength Cond Res. 2020.',kind:'综述'},
    {text:'Allerton TD, et al. L-citrulline supplementation: impact on cardiometabolic health. Nutrients. 2018.',kind:'综述'},
  ],
  related:['creatine','beta-alanine','potassium','magnesium']
},
{
  id:'arginine',
  name:'精氨酸',
  en:'L-Arginine',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:3,high:10,step:1},
  tagline:'一氧化氮的经典前体，口服吸收却被肝脏大量截留。',
  intro:[
    '精氨酸是条件必需氨基酸，参与尿素循环、肌酸合成和一氧化氮生成。内皮型一氧化氮合酶以精氨酸为底物生成一氧化氮，进而舒张血管、改善血流。',
    '口服精氨酸的首过代谢很强，大剂量才能明显提高血浆水平，且常伴随腹泻。研究多集中在高血压、内皮功能和运动中的血流，结果不一致。相比之下，瓜氨酸提高血浆精氨酸的效率更高，这也是近年研究重心转向瓜氨酸的原因。'
  ],
  roles:['一氧化氮合成底物','尿素循环与氨解毒','肌酸合成前体','参与胶原合成与伤口愈合','调节免疫与激素分泌'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'常见补充量',value:'3–10 g/天，分次'},
      {label:'运动前单次',value:'3–6 g'},
      {label:'精氨酸 alpha-酮戊二酸',value:'按产品标示，证据弱'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定（高剂量易致腹泻）',
    note:'单次超过 10 g 腹泻风险明显上升。分次服用可减轻胃肠不适，但吸收效率仍受首过代谢限制。'
  },
  timing:'运动前 60 分钟或空腹',
  withFood:'空腹或随餐均可',
  forms:[
    {name:'L-精氨酸粉',bio:'中',timing:'运动前 60 分钟',food:'空腹',dose:'3–10 g/天',grade:'B',note:'研究最常用，味道偏苦，高剂量易腹泻。'},
    {name:'精氨酸 alpha-酮戊二酸（AAKG）',bio:'中',timing:'运动前',food:'空腹',dose:'按产品标示',grade:'C',note:'宣称吸收更好，但缺乏与纯精氨酸的头对头证据。'},
    {name:'精氨酸胶囊',bio:'中',timing:'运动前或随餐',food:'任意',dose:'3–6 g/天',grade:'C',note:'需要多粒，注意每粒实际含量。'}
  ],
  foods:[
    {name:'南瓜籽',amount:'约 3–5 g',per:'100 g',note:'植物性精氨酸来源'},
    {name:'牛肉',amount:'约 1.2–1.6 g',per:'100 g',note:'同时提供肌酸'},
    {name:'鸡胸肉',amount:'约 1.4 g',per:'100 g',note:'优质蛋白来源'},
    {name:'大豆（干）',amount:'约 2.5–3 g',per:'100 g',note:'植物蛋白中含量较高'},
    {name:'花生',amount:'约 3 g',per:'100 g',note:'同时含较高脂肪'}
  ],
  deficiency:{
    signs:['不属于经典缺乏症','严重创伤或感染时需求上升','血浆精氨酸偏低见于重症患者','内皮功能下降（多因素，不能归因于单一氨基酸）'],
    groups:['严重创伤、烧伤或脓毒症','蛋白质能量营养不良','短肠综合征','镰状细胞病患者（精氨酸代谢加快）','老年人内皮功能下降']
  },
  tests:[
    {name:'血浆氨基酸谱',sample:'静脉血',range:'按实验室参考范围',note:'精氨酸半衰期短，单次检测代表性有限。'},
    {name:'血氨',sample:'静脉血',range:'按实验室参考范围',note:'评估尿素循环功能，疑似代谢病时使用。'},
    {name:'内皮功能（血流介导舒张）',sample:'超声',range:'与基线比较',note:'研究场景使用，不作为常规随访。'}
  ],
  cautions:['与降压药、硝酸酯类或 PDE5 抑制剂合用可致显著低血压','急性心肌梗死后不建议补充，VINTAGE MI 试验观察到死亡率升高','可能促进疱疹病毒复制，活动期疱疹感染者慎用','高剂量可引起腹泻、腹痛','哮喘患者吸入精氨酸可能诱发支气管痉挛'],
  sideEffects:[
    { effect: '腹泻、腹痛、腹胀', frequency: '常见', note: '单次超过 10 g 时明显；分次服用、随餐，单次控制在 5 g 以内。' },
    { effect: '恶心', frequency: '不常见', note: '空腹大剂量易发生；改为随餐或减量。' },
    { effect: '低血压、头晕、乏力', frequency: '不常见', note: '与降压药、硝酸酯类或 PDE5 抑制剂合用风险叠加；监测血压，避免突然起身。' },
    { effect: '疱疹复发或加重', frequency: '少见', note: '活动期疱疹感染者避免高剂量；出现成簇水疱应就诊皮肤科。' },
    { effect: '过敏反应、哮喘加重', frequency: '少见', note: '出现荨麻疹、喘息或面唇肿胀立即停药并急诊。' }
  ],
  special:[
    {who:'高血压或内皮功能异常',what:'小剂量可能有益，但必须与降压药合用前咨询医生并监测血压。'},
    {who:'心肌梗死后患者',what:'避免自行补充，临床研究提示可能增加死亡风险。'},
    {who:'疱疹反复发作者',what:'精氨酸是病毒复制所需，活动期不建议高剂量补充。'},
    {who:'出现以下情况',what:'晕厥或血压明显偏低、胸痛、呼吸困难、面唇肿胀，立即就医；心肌梗死后不要自行补充。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Schulman SP, et al. L-arginine therapy in acute myocardial infarction: the Vascular Interaction With Age in Myocardial Infarction (VINTAGE MI) randomized clinical trial. JAMA. 2006.',kind:'研究'},
    {text:'McRae MP. Therapeutic benefits of L-arginine: an umbrella review of meta-analyses. J Chiropr Med. 2016.',kind:'综述'},
    {text:'Gambardella J, et al. Arginine and endothelial function. Biomedicines. 2020.',kind:'综述'},
  ],
  related:['creatine','vitamin-c','b6','potassium']
},
{
  id:'glutamine',
  name:'谷氨酰胺',
  en:'L-Glutamine',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:5,high:10,step:1},
  tagline:'肠道细胞和免疫细胞的主要燃料，口服补充的临床收益并不确定。',
  intro:[
    '谷氨酰胺是血浆中含量最丰富的游离氨基酸，为肠上皮细胞、淋巴细胞和肾脏提供能量，也参与氨的转运和核苷酸合成。剧烈运动、创伤和重症时血浆谷氨酰胺浓度会下降。',
    '补充剂常被用于肠道健康、免疫支持和运动后恢复。但随机试验结果并不一致：对营养充足的健康人群，补充对感染率、肌肉酸痛或力量恢复的影响大多很小；重症患者中的研究还出现过安全性信号。'
  ],
  roles:['肠上皮细胞的主要能源','淋巴细胞与巨噬细胞燃料','氨的转运与酸碱平衡','核苷酸合成前体','参与谷胱甘肽合成'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'常见补充量',value:'5–10 g/天，分次'},
      {label:'运动后单次',value:'5–8 g'},
      {label:'临床营养',value:'按医嘱，静脉或肠内制剂'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'空腹单次大剂量吸收不完全。分次服用、与蛋白类食物同服可提高利用率。'
  },
  timing:'运动后或随餐，分次',
  withFood:'随餐或随蛋白饮品',
  forms:[
    {name:'L-谷氨酰胺粉',bio:'高',timing:'运动后或随餐',food:'随餐',dose:'5–10 g/天',grade:'B',note:'最常见，溶解性一般，味道淡。'},
    {name:'谷氨酰胺胶囊',bio:'高',timing:'随餐',food:'随餐',dose:'5–10 g/天',grade:'C',note:'达到研究剂量需要多粒。'},
    {name:'丙氨酰谷氨酰胺',bio:'高',timing:'医疗场景',food:'—',dose:'仅处方（静脉）',grade:'A',note:'用于肠外营养，稳定性好，必须由临床团队使用。'},
    {name:'乳清蛋白（天然含谷氨酰胺）',bio:'高',timing:'运动后',food:'随餐',dose:'20–30 g/次',grade:'A',note:'同时提供完整蛋白，通常比纯谷氨酰胺更实用。'}
  ],
  foods:[
    {name:'牛肉',amount:'约 2–3 g',per:'100 g',note:'蛋白质含量高'},
    {name:'鸡蛋',amount:'约 0.6 g',per:'100 g',note:'氨基酸谱完整'},
    {name:'大豆（干）',amount:'约 6–8 g',per:'100 g',note:'植物性来源丰富'},
    {name:'牛奶',amount:'约 0.3 g',per:'100 ml',note:'同时提供酪蛋白'},
    {name:'卷心菜',amount:'少量',per:'100 g',note:'游离谷氨酰胺较高，但总量有限'}
  ],
  deficiency:{
    signs:['不属于典型缺乏症','重症、创伤后血浆谷氨酰胺明显下降','肠黏膜萎缩（重症场景，证据有限）','免疫功能下降（多因素）','肌肉流失（多因素）'],
    groups:['严重创伤、烧伤、大手术','重症监护患者','长期肠外营养','高强度耐力训练且能量不足','严重肠病或短肠综合征']
  },
  tests:[
    {name:'血浆谷氨酰胺',sample:'静脉血',range:'按实验室参考范围',note:'受采血时间和应激影响，主要用于研究。'},
    {name:'血浆氨基酸谱',sample:'静脉血',range:'按实验室参考范围',note:'可评估整体氨基酸平衡。'},
    {name:'血氨',sample:'静脉血',range:'按实验室参考范围',note:'肝功能不全者补充前后需监测。'}
  ],
  cautions:['严重肝功能不全或肝性脑病患者禁用，谷氨酰胺会增加氨负荷','肾功能不全者高剂量使用需医生评估','重症患者的高剂量肠内补充在部分试验中未显示获益，甚至出现安全性信号','可能引起腹胀、恶心、腹泻','正在接受化疗或放疗者应先咨询肿瘤科医生，证据不一致'],
  sideEffects:[
    { effect: '腹胀、腹部不适', frequency: '不常见', note: '分次服用、随餐或减量；腹胀持续应停用。' },
    { effect: '恶心', frequency: '不常见', note: '空腹单次大剂量易发生；改为餐后小剂量分次。' },
    { effect: '腹泻、稀便', frequency: '不常见', note: '减量并补充水分和电解质；持续腹泻需停药。' },
    { effect: '意识改变、扑翼样震颤（肝性脑病加重）', frequency: '少见', note: '肝硬化或肝性脑病患者禁用；出现嗜睡、言行异常立即急诊。' }
  ],
  special:[
    {who:'耐力运动员',what:'若饮食蛋白充足，额外谷氨酰胺对免疫和恢复的收益很小，优先保证总能量与蛋白。'},
    {who:'肝硬化或肝性脑病',what:'属于禁忌，氨基酸补充必须由肝病专科医生决定。'},
    {who:'重症患者',what:'不应自行补充，临床营养方案需由 ICU 团队制定。'},
    {who:'出现以下情况',what:'肝硬化者出现嗜睡、意识模糊、手抖，或持续呕吐腹泻导致脱水，立即就医。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Cruzat V, et al. Glutamine: metabolism and immune function, supplementation and clinical translation. Nutrients. 2018.',kind:'综述'},
    {text:'Coqueiro AY, et al. Glutamine as an anti-fatigue amino acid in sports nutrition. Nutrients. 2019.',kind:'综述'},
    {text:'中华医学会肠外肠内营养学分会. 中国成人肠外肠内营养临床应用指南.',kind:'指南'},
  ],
  related:['probiotics','vitamin-c','zinc','b6']
},
{
  id:'tyrosine',
  name:'酪氨酸',
  en:'L-Tyrosine',
  category:'sport',
  scoring:{unit:'mg',rni:null,ul:null,low:500,high:2000,step:100},
  tagline:'儿茶酚胺的前体，在睡眠剥夺和寒冷应激下可能有用，日常增能证据弱。',
  intro:[
    '酪氨酸是条件必需氨基酸，由苯丙氨酸羟化生成，是多巴胺、去甲肾上腺素和甲状腺激素的前体。它也参与黑色素和部分神经递质的合成。',
    '补充剂的理论依据是：在应激状态下增加底物供应，可能有助于维持警觉和认知表现。睡眠剥夺、寒冷和多重任务条件下的部分试验显示有小幅效果，但在睡眠充足的健康人群中，对注意力、记忆和运动表现的改善多不明显。'
  ],
  roles:['儿茶酚胺合成前体','甲状腺激素合成前体','黑色素合成前体','参与应激状态下的认知维持','蛋白质合成原料'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'常见补充量',value:'500–2000 mg/天'},
      {label:'应激研究剂量',value:'100–150 mg/kg 体重'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'高蛋白饮食本身即可提供足量酪氨酸。空腹服用吸收较快，但与中性氨基酸竞争转运体。'
  },
  timing:'早晨或需要专注前 30–60 分钟，避免晚间',
  withFood:'空腹或随餐均可',
  forms:[
    {name:'L-酪氨酸',bio:'中高',timing:'需要专注前 30–60 分钟',food:'空腹',dose:'500–2000 mg/天',grade:'B',note:'研究最常用，价格低。'},
    {name:'N-乙酰酪氨酸',bio:'中',timing:'按产品标示',food:'空腹',dose:'按产品标示',grade:'C',note:'水溶性更好，但缺乏与游离酪氨酸的等效性研究。'},
    {name:'酪氨酸胶囊 / 片剂',bio:'中高',timing:'早晨',food:'任意',dose:'500–2000 mg/天',grade:'C',note:'便于计量，注意与其他氨基酸复配产品的总剂量。'}
  ],
  foods:[
    {name:'帕玛森奶酪',amount:'约 1.8–2.0 g',per:'100 g',note:'酪氨酸含量最高的常见食物之一'},
    {name:'牛肉',amount:'约 0.8–1.0 g',per:'100 g',note:'同时富含铁和锌'},
    {name:'鸡蛋',amount:'约 0.5 g',per:'100 g',note:'氨基酸谱完整'},
    {name:'北豆腐',amount:'约 0.6 g',per:'100 g',note:'植物蛋白来源'},
    {name:'南瓜籽',amount:'约 0.7 g',per:'100 g',note:'同时富含镁'}
  ],
  deficiency:{
    signs:['不属于经典缺乏症','遗传性酪氨酸羟化酶缺乏可致运动障碍','严重蛋白质营养不良时整体氨基酸不足','甲状腺激素合成受影响（需排除甲状腺疾病）'],
    groups:['遗传性酪氨酸代谢障碍','严重蛋白质能量营养不良','长期肠外营养','苯丙酮尿症患者（需限制苯丙氨酸）','慢性肝病']
  },
  tests:[
    {name:'血浆酪氨酸与苯丙氨酸',sample:'静脉血',range:'按实验室参考范围',note:'新生儿筛查和遗传代谢病评估中使用。'},
    {name:'甲状腺功能（TSH、FT4）',sample:'静脉血',range:'按实验室参考范围',note:'评估甲状腺相关症状，不能反映酪氨酸补充是否有效。'},
    {name:'认知与警觉测试',sample:'计算机任务',range:'与基线比较',note:'研究场景使用，个体结果波动大。'}
  ],
  cautions:['与单胺氧化酶抑制剂（MAOI）合用可能诱发高血压危象，属明确禁忌','甲状腺功能亢进者慎用，可能加重症状','与左旋多巴同服会竞争肠道和血脑屏障转运，可能降低药效','可能引起头痛、焦虑、失眠和胃部不适','孕期和哺乳期安全性数据不足'],
  sideEffects:[
    { effect: '失眠、入睡困难', frequency: '不常见', note: '避免傍晚后服用；减量或把最后一次提前到中午前。' },
    { effect: '焦虑、紧张、心悸', frequency: '不常见', note: '减量；与咖啡因叠加时更明显，应减少总兴奋剂摄入。' },
    { effect: '头痛', frequency: '不常见', note: '减量、保证饮水；反复头痛应停药并测量血压。' },
    { effect: '血压升高（与 MAOI 合用可致高血压危象）', frequency: '少见', note: '服用 MAOI 者禁用；出现剧烈头痛、视物模糊、胸痛立即急诊。' },
    { effect: '胃部不适、恶心', frequency: '不常见', note: '随餐服用可减轻；持续不适应停药。' }
  ],
  special:[
    {who:'睡眠剥夺或高强度轮班',what:'小剂量可能帮助维持警觉，但不能替代睡眠，也不应与咖啡因无限叠加。'},
    {who:'正在服用 MAOI',what:'禁止自行补充，存在高血压危象风险。'},
    {who:'帕金森病患者',what:'与左旋多巴服药时间错开，具体间隔需咨询神经科医生。'},
    {who:'出现以下情况',what:'剧烈头痛、视物模糊、胸痛或血压骤升，尤其正在服用 MAOI 者，立即急诊。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Jongkees BJ, et al. Effect of tyrosine supplementation on clinical and healthy populations under stress or cognitive demands: a review. J Psychiatr Res. 2015.',kind:'综述'},
    {text:'Hase A, et al. Behavioral and cognitive effects of tyrosine intake in healthy human adults. Pharmacol Biochem Behav. 2015.',kind:'综述'},
    {text:'EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the substantiation of health claims related to tyrosine. EFSA Journal.',kind:'机构'},
  ],
  related:['b6','b3','vitamin-c','copper']
},
{
  id:'theanine',
  name:'茶氨酸',
  en:'L-Theanine',
  category:'sport',
  scoring:{unit:'mg',rni:null,ul:null,low:100,high:400,step:50},
  tagline:'茶叶中的氨基酸，放松而不镇静；与咖啡因复配的证据比单用更一致。',
  intro:[
    '茶氨酸是茶叶中特有的非蛋白氨基酸，约占干茶游离氨基酸的一半。它能穿过血脑屏障，影响 α 脑电波以及谷氨酸、GABA 等神经递质系统，使人主观上感到放松，但不会明显嗜睡。',
    '研究集中在压力、注意力和睡眠质量。单用茶氨酸的结果不一致，效应量小；与咖啡因联合时，在警觉性和注意力任务上的表现相对更稳定。它不能替代睡眠，也不应被当作抗焦虑药物。'
  ],
  roles:['促进放松状态下的 α 脑电活动','可能调节谷氨酸与 GABA 系统','减轻主观压力感','与咖啡因协同改善注意力','参与茶叶鲜味形成'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'常见补充量',value:'100–200 mg/天'},
      {label:'研究高剂量',value:'200–400 mg/天'},
      {label:'与咖啡因复配',value:'茶氨酸 100–200 mg + 咖啡因 100–200 mg'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定（常规剂量耐受性较好）',
    note:'茶氨酸在茶汤中的单杯含量通常只有 10–30 mg，补充剂剂量明显高于日常饮茶。'
  },
  timing:'需要放松或专注前 30–60 分钟',
  withFood:'空腹或随餐均可',
  forms:[
    {name:'L-茶氨酸',bio:'高',timing:'需要放松前 30–60 分钟',food:'空腹',dose:'100–200 mg',grade:'B',note:'纯度较高，研究常用。'},
    {name:'茶氨酸 + 咖啡因',bio:'高',timing:'工作或训练前',food:'任意',dose:'茶氨酸 100–200 mg + 咖啡因 100–200 mg',grade:'B',note:'注意力方面的证据比单用茶氨酸更一致，注意总咖啡因。'},
    {name:'绿茶提取物',bio:'中',timing:'任意',food:'任意',dose:'按茶氨酸标示',grade:'C',note:'同时含咖啡因和儿茶素，剂量难标准化。'}
  ],
  foods:[
    {name:'绿茶（干茶）',amount:'约 1–2 g',per:'100 g',note:'占游离氨基酸的 50% 左右'},
    {name:'抹茶',amount:'约 1–2 g',per:'100 g',note:'整叶摄入，实际溶出量较高'},
    {name:'红茶',amount:'约 0.5–1 g',per:'100 g',note:'发酵后含量下降'},
    {name:'乌龙茶',amount:'约 0.5–1 g',per:'100 g',note:'介于绿茶与红茶之间'},
    {name:'某些蘑菇',amount:'少量',per:'100 g',note:'含量远低于茶叶'}
  ],
  deficiency:{
    signs:['不属于必需营养素，无缺乏症','低摄入与压力感无明确因果关系','不能用于诊断任何疾病'],
    groups:['高压力工作人群（研究场景）','咖啡因敏感者','睡眠质量差者（辅助，非治疗）']
  },
  tests:[
    {name:'无常规实验室检测',sample:'—',range:'—',note:'茶氨酸不是临床检测项目。'},
    {name:'主观压力量表',sample:'问卷',range:'与基线比较',note:'研究中最常用的结局指标。'},
    {name:'脑电图 α 波',sample:'脑电',range:'研究项目',note:'仅在实验室研究中使用。'}
  ],
  cautions:['与降压药合用可能叠加降压作用','与镇静催眠药、酒精合用可能增强嗜睡','低血压者慎用','孕期和哺乳期安全性数据不足','与咖啡因同服时注意总咖啡因摄入，避免影响睡眠'],
  sideEffects:[
    { effect: '嗜睡、困倦', frequency: '不常见', note: '避免与镇静催眠药或酒精同服；需驾驶或操作机械时减量。' },
    { effect: '头痛', frequency: '少见', note: '减量并保证饮水；持续头痛应停药。' },
    { effect: '胃部不适、恶心', frequency: '少见', note: '随餐服用；空腹大剂量更易出现。' },
    { effect: '头晕、低血压', frequency: '少见', note: '与降压药合用可能叠加；监测血压，起身宜缓慢。' }
  ],
  special:[
    {who:'咖啡因敏感者',what:'可用茶氨酸部分抵消咖啡因引起的紧张感，但不能减少咖啡因本身的心血管负荷。'},
    {who:'压力大、入睡困难',what:'可作为辅助手段，优先改善睡眠卫生；持续失眠应就医。'},
    {who:'正在服用降压药',what:'合用前监测血压，避免叠加导致头晕。'},
    {who:'出现以下情况',what:'与镇静药或酒精同服后出现呼吸变浅、意识模糊，或持续头晕、晕厥，立即就医。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Hidese S, et al. Effects of L-theanine administration on stress-related symptoms and cognitive functions in healthy adults: a randomized controlled trial. Nutrients. 2019.',kind:'研究'},
    {text:'Williams J, et al. The effects of green tea amino acid L-theanine consumption on the ability to manage stress and anxiety levels: a systematic review. Plant Foods Hum Nutr. 2020.',kind:'综述'},
    {text:'EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the substantiation of health claims related to L-theanine. EFSA Journal.',kind:'机构'},
  ],
  related:['magnesium','melatonin','b6']
},
{
  id:'tryptophan',
  name:'色氨酸',
  en:'L-Tryptophan',
  category:'sport',
  scoring:{unit:'mg',rni:null,ul:null,low:500,high:2000,step:100},
  tagline:'血清素与褪黑素的前体，与抗抑郁药同用有明确的血清素综合征风险。',
  intro:[
    '色氨酸是必需氨基酸，是血清素（5-羟色胺）、褪黑素和烟酸的前体。血浆色氨酸与中性氨基酸的比值会影响它进入大脑的量，因此单吃色氨酸与随高蛋白餐吃的效果并不相同。',
    '补充剂被用于改善睡眠、情绪和经前期症状，但研究规模小、结果不一致。更需要注意的是安全性：与 SSRI、SNRI、MAOI 等增加血清素活性的药物合用，可能诱发血清素综合征。'
  ],
  roles:['血清素合成前体','褪黑素合成前体','烟酸（NAD）合成前体','参与蛋白质合成','影响睡眠与情绪调节'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'睡眠研究剂量',value:'500–1000 mg，睡前'},
      {label:'情绪研究剂量',value:'1–2 g/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'空腹或与少量碳水同服可提高色氨酸/中性氨基酸比值；与高蛋白餐同服反而降低入脑效率。'
  },
  timing:'睡前 30–60 分钟，空腹或少量碳水',
  withFood:'空腹或少量碳水',
  forms:[
    {name:'L-色氨酸',bio:'中高',timing:'睡前 30–60 分钟',food:'空腹或少量碳水',dose:'500–1000 mg',grade:'B',note:'研究最常用，需注意与抗抑郁药的相互作用。'},
    {name:'5-HTP（5-羟色氨酸）',bio:'高',timing:'睡前',food:'空腹',dose:'50–100 mg',grade:'C',note:'绕过限速步骤，作用更强，安全性数据少于色氨酸。'},
    {name:'富含色氨酸的蛋白 / 乳制品',bio:'中',timing:'睡前',food:'随餐',dose:'按蛋白量折算',grade:'B',note:'牛奶助眠的说法更多来自行为习惯，色氨酸剂量本身很低。'}
  ],
  foods:[
    {name:'南瓜籽',amount:'约 0.5–0.6 g',per:'100 g',note:'色氨酸密度较高'},
    {name:'大豆（干）',amount:'约 0.5 g',per:'100 g',note:'植物蛋白来源'},
    {name:'鸡蛋',amount:'约 0.17 g',per:'100 g',note:'同时含大量其他中性氨基酸'},
    {name:'火鸡胸肉',amount:'约 0.3 g',per:'100 g',note:'“火鸡催眠”说法被夸大'},
    {name:'牛奶',amount:'约 0.05 g',per:'100 ml',note:'含量低，助眠证据有限'}
  ],
  deficiency:{
    signs:['不属于常见缺乏症','血浆色氨酸偏低见于严重营养不良','情绪低落、睡眠障碍（非特异，多因素）','糙皮病样表现（与烟酸缺乏相关）'],
    groups:['严重蛋白质能量营养不良','慢性肝病','炎症性疾病（色氨酸代谢转向犬尿氨酸）','严格限制饮食者','吸收不良']
  },
  tests:[
    {name:'血浆色氨酸 / 中性氨基酸比值',sample:'静脉血',range:'研究项目',note:'反映色氨酸入脑潜力，临床不常规开展。'},
    {name:'尿 5-羟吲哚乙酸（5-HIAA）',sample:'24 小时尿液',range:'按实验室参考范围',note:'用于类癌筛查，不用于评价补充效果。'},
    {name:'情绪与睡眠量表',sample:'问卷',range:'与基线比较',note:'补充研究的常用结局指标。'}
  ],
  cautions:['与 SSRI、SNRI、MAOI、曲普坦类、曲马多、圣约翰草合用可致血清素综合征，属明确禁忌','5-HTP 与色氨酸不要叠加使用','可能引起恶心、头晕、嗜睡','肝肾功能不全者慎用','孕期和哺乳期安全性数据不足；嗜酸性肌痛综合征为历史事件，与当年污染批次相关'],
  sideEffects:[
    { effect: '嗜睡、白天困倦', frequency: '常见', note: '睡前服用；白天需驾驶或操作机械时避免加量。' },
    { effect: '恶心、胃部不适', frequency: '不常见', note: '随少量碳水服用可减轻；持续不适应减量或停药。' },
    { effect: '头晕', frequency: '不常见', note: '起身宜缓慢，避免与酒精同服。' },
    { effect: '血清素综合征（高热、震颤、大汗、意识改变）', frequency: '少见', note: '与 SSRI、SNRI、MAOI 等合用风险高；出现上述表现立即停药并急诊。' }
  ],
  special:[
    {who:'正在服用抗抑郁药',what:'禁止自行补充，必须先与精神科医生讨论血清素综合征风险。'},
    {who:'睡眠维持困难',what:'可短期试用 500 mg，但认知行为治疗仍是首选。'},
    {who:'肝病患者',what:'色氨酸代谢受影响，补充前需评估肝功能。'},
    {who:'出现以下情况',what:'高热、肌肉震颤、大汗、心跳加快或意识改变，尤其正在服用抗抑郁药者，立即急诊。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Richard DM, et al. L-tryptophan: basic metabolic functions, behavioral research and therapeutic indications. Int J Tryptophan Res. 2009.',kind:'综述'},
    {text:'Jenkins TA, et al. Influence of tryptophan and serotonin on mood and cognition with a possible role of the gut-brain axis. Nutrients. 2016.',kind:'综述'},
    {text:'中华医学会精神病学分会. 中国抑郁障碍防治指南（第二版）. 2015.',kind:'指南'},
  ],
  related:['b3','b6','magnesium','melatonin']
},
{
  id:'alcar',
  name:'乙酰左卡尼汀',
  en:'Acetyl-L-Carnitine',
  category:'sport',
  scoring:{unit:'mg',rni:null,ul:null,low:500,high:2000,step:100},
  tagline:'能穿过血脑屏障的肉碱形式；神经与认知方面的证据有限，恢复方面的证据更弱。',
  intro:[
    '乙酰左卡尼汀是左旋肉碱的乙酰化形式，乙酰基使它更容易穿过血脑屏障，并在中枢参与乙酰胆碱合成和线粒体能量代谢。它同时保留肉碱转运长链脂肪酸的功能。',
    '补充剂主要用于糖尿病周围神经病变、老年认知下降和运动后恢复。神经病变方面的研究多为小样本，效果温和；运动恢复和减脂的证据更弱。它不能替代降糖治疗或神经科规范治疗。'
  ],
  roles:['线粒体脂肪酸转运','乙酰基缓冲与乙酰胆碱合成','支持神经细胞能量代谢','抗氧化与膜稳定','可能改善神经传导速度'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'常见补充量',value:'500–2000 mg/天，分次'},
      {label:'神经病变研究剂量',value:'1500–3000 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'分次服用可减少胃肠不适。晚间服用可能影响睡眠，敏感者建议放在白天。'
  },
  timing:'白天随餐，分次',
  withFood:'随餐',
  forms:[
    {name:'乙酰左卡尼汀盐酸盐（胶囊 / 粉）',bio:'高',timing:'白天随餐',food:'随餐',dose:'500–2000 mg/天',grade:'B',note:'最常见的形式，研究多用此剂型。'},
    {name:'乙酰左卡尼汀注射液',bio:'高',timing:'医疗场景',food:'—',dose:'仅处方',grade:'A',note:'用于特定神经病变，需医生管理。'},
    {name:'复配能量代谢产品',bio:'中',timing:'运动前',food:'任意',dose:'按标示',grade:'C',note:'常与辅酶 Q10、硫辛酸复配，无法单独评价效果。'}
  ],
  foods:[
    {name:'牛肉',amount:'约 90–160 mg 总肉碱',per:'100 g',note:'主要为游离肉碱，乙酰化形式很少'},
    {name:'羊肉',amount:'约 150–190 mg 总肉碱',per:'100 g',note:'红肉是主要来源'},
    {name:'鸡胸肉',amount:'约 10–30 mg 总肉碱',per:'100 g',note:'含量低于红肉'},
    {name:'牛奶',amount:'约 3–4 mg 总肉碱',per:'100 ml',note:'含量低'},
    {name:'鳄梨',amount:'少量',per:'100 g',note:'植物中含量很低'}
  ],
  deficiency:{
    signs:['不属于经典缺乏症','周围神经病变（糖尿病相关，补充证据有限）','肌肉无力、疲劳（非特异）','老年人认知下降（多因素）','血浆肉碱偏低见于透析患者'],
    groups:['2 型糖尿病伴周围神经病变','长期血液透析','老年人','原发性肉碱缺乏','长期服用丙戊酸']
  },
  tests:[
    {name:'血浆游离肉碱 / 酰基肉碱谱',sample:'静脉血',range:'按实验室参考范围',note:'串联质谱检测，用于确诊肉碱缺乏。'},
    {name:'神经传导速度 / 肌电图',sample:'神经电生理检查',range:'按专科判读',note:'评估周围神经病变，不能反映补充是否有效。'},
    {name:'血糖与糖化血红蛋白',sample:'静脉血',range:'按实验室参考范围',note:'糖尿病患者的常规监测项目。'}
  ],
  cautions:['与华法林合用有个案报告 INR 升高，需监测凝血指标','可能降低癫痫发作阈值，癫痫患者慎用','可能影响甲状腺激素作用，甲状腺疾病患者应在医生指导下使用','晚间服用可能引起失眠','可能引起恶心、腹痛、腹泻'],
  sideEffects:[
    { effect: '恶心、腹痛', frequency: '不常见', note: '随餐服用、分次给药；持续腹痛应停药。' },
    { effect: '腹泻', frequency: '不常见', note: '减量并补水；持续腹泻需停药。' },
    { effect: '失眠、入睡困难', frequency: '不常见', note: '晚间服用易出现；把最后一次剂量安排在下午之前。' },
    { effect: '兴奋、焦躁', frequency: '少见', note: '减量；避免与其他兴奋性补剂叠加。' },
    { effect: '癫痫发作频率增加', frequency: '少见', note: '癫痫患者慎用；发作次数增多应立即就诊神经内科。' }
  ],
  special:[
    {who:'糖尿病周围神经病变',what:'可在降糖治疗基础上试用，剂量与疗程由内分泌科医生确定。'},
    {who:'癫痫患者',what:'使用前咨询神经科医生，注意发作频率变化。'},
    {who:'透析患者',what:'肉碱流失增加，补充需肾内科医生评估。'},
    {who:'出现以下情况',what:'癫痫发作次数增多、持续心悸或严重腹泻导致脱水，立即就医。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Pekala J, et al. L-carnitine—metabolic functions and meaning in humans life. Curr Drug Metab. 2011.',kind:'综述'},
    {text:'Evans AM, Fornasini G. Pharmacokinetics of L-carnitine. Clin Pharmacokinet. 2003.',kind:'综述'},
    {text:'中华医学会糖尿病学分会. 中国2型糖尿病防治指南（2020年版）. 中华糖尿病杂志.',kind:'指南'},
  ],
  related:['ala','b5','coq10','carnitine']
},
{
  id:'hmb',
  name:'HMB（β-羟基-β-甲基丁酸）',
  en:'Beta-Hydroxy Beta-Methylbutyrate',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:1.5,high:3,step:0.5},
  tagline:'亮氨酸的代谢产物，理论上抗肌肉分解；训练人群的实际收益有限。',
  intro:[
    'HMB 是亮氨酸代谢产生的中间产物，理论上可抑制肌肉蛋白分解并促进卫星细胞活化。它在体内生成量很少，膳食来源也非常有限，因此常以补充剂形式出现。',
    '早期研究显示在未训练者或卧床人群中可减少肌肉流失，但后续在已训练人群中的结果不一致，多项研究未能重复出增肌或增力效果。对规律训练、蛋白充足的人，优先级低于总蛋白和训练本身。'
  ],
  roles:['抑制肌肉蛋白分解','可能促进肌肉卫星细胞活化','参与胆固醇合成通路','在制动或卧床时可能减缓肌肉流失','与亮氨酸代谢相关'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'常见补充量',value:'1.5–3 g/天，分 2–3 次'},
      {label:'研究常用剂量',value:'3 g/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'与亮氨酸不同，HMB 不直接刺激肌肉蛋白合成，理论上更偏向减少分解。连续使用数周才可能观察到差异。'
  },
  timing:'运动前 30–60 分钟或训练后',
  withFood:'任意',
  forms:[
    {name:'HMB 游离酸',bio:'高',timing:'运动前或训练后',food:'任意',dose:'1.5–3 g/天',grade:'B',note:'吸收较快，研究常用。'},
    {name:'HMB 钙',bio:'中高',timing:'运动前或训练后',food:'任意',dose:'1.5–3 g/天',grade:'B',note:'钙盐形式，含钙，注意与部分抗生素的螯合。'},
    {name:'HMB + 肌酸复配',bio:'中高',timing:'训练前后',food:'任意',dose:'按标示',grade:'C',note:'机制不同，但复配产品的独立证据少。'}
  ],
  foods:[
    {name:'鳄梨',amount:'少量',per:'100 g',note:'天然 HMB 含量很低'},
    {name:'葡萄柚',amount:'少量',per:'100 g',note:'含量低于鳄梨'},
    {name:'苜蓿芽',amount:'少量',per:'100 g',note:'常被宣传为来源，实际剂量远低于补充剂'},
    {name:'牛肉',amount:'微量',per:'100 g',note:'不能作为有效剂量来源'}
  ],
  deficiency:{
    signs:['不属于经典缺乏症','无明确缺乏症状','卧床或制动时肌肉流失（多因素）','老年人肌少症（补充证据有限）'],
    groups:['长期卧床或制动','老年人','能量摄入不足的减脂期人群','初学者（研究收益相对更明显）']
  },
  tests:[
    {name:'体成分（DEXA / 生物电阻抗）',sample:'影像或体成分仪',range:'与基线比较',note:'评价肌肉量变化，比血检更直接。'},
    {name:'肌力与功能测试',sample:'握力 / 等速测试',range:'与基线比较',note:'老年人尤其应关注功能而非单纯肌肉量。'},
    {name:'肾功能',sample:'静脉血',range:'按实验室参考范围',note:'高蛋白或多种补剂叠加使用时评估。'}
  ],
  cautions:['研究结果不一致，对已训练人群的增肌效果有限','HMB 钙形式会与四环素类、喹诺酮类抗生素螯合，需间隔至少 2 小时','肾功能不全者高剂量使用前应咨询医生','不能替代蛋白质摄入和力量训练','部分产品含量与标示不符，选择第三方检测产品'],
  sideEffects:[
    { effect: '胃肠不适、恶心', frequency: '不常见', note: '随餐服用、分次给药；从 1.5 g/天起始可减轻。' },
    { effect: '腹泻', frequency: '不常见', note: '减量并补水；持续腹泻应停药。' },
    { effect: '腹胀、食欲下降', frequency: '少见', note: '分次随餐服用；影响进食时停药。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '立即停用；出现面唇肿胀或呼吸困难应急诊。' }
  ],
  special:[
    {who:'卧床或制动人群',what:'是证据相对更一致的场景，但仍需配合康复训练。'},
    {who:'规律力量训练者',what:'优先保证每日 1.6–2.0 g/kg 蛋白质，HMB 不是必需项。'},
    {who:'减脂期',what:'能量缺口下可能有助于保留肌肉，但效果小于足量蛋白。'},
    {who:'出现以下情况',what:'持续呕吐腹泻导致脱水，或皮疹伴面唇肿胀、呼吸困难，立即就医。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Wilson JM, et al. International Society of Sports Nutrition position stand: beta-hydroxy-beta-methylbutyrate (HMB). J Int Soc Sports Nutr. 2013.',kind:'指南'},
    {text:'Fitschen PJ, et al. Efficacy of beta-hydroxy-beta-methylbutyrate supplementation in elderly and clinical populations. Nutrition. 2013.',kind:'综述'},
    {text:'Wilson JM, et al. The effects of 12 weeks of beta-hydroxy-beta-methylbutyrate free acid supplementation on muscle mass, strength, and power in resistance-trained individuals: a randomized, double-blind, placebo-controlled study. Eur J Appl Physiol. 2014.',kind:'研究'},
  ],
  related:['creatine','bcaa','vitamin-d']
},
{
  id:'betaine',
  name:'无水甜菜碱（TMG）',
  en:'Betaine (Trimethylglycine)',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:2.5,high:5,step:0.5},
  tagline:'甲基供体，可能轻度改善力量与同型半胱氨酸；研究规模小，结果不一致。',
  intro:[
    '无水甜菜碱即三甲基甘氨酸（TMG），是甘氨酸的甲基化衍生物，作为甲基供体参与同型半胱氨酸转化为甲硫氨酸，也参与细胞渗透压调节。甜菜根、菠菜和藜麦中含量较高。',
    '运动方面的研究多集中在力量、爆发力和肌肉耐力，部分试验显示小幅改善，但也有阴性结果。它同时能降低血浆同型半胱氨酸，但这能否转化为心血管获益尚无定论。'
  ],
  roles:['甲基供体，参与甲硫氨酸循环','降低血浆同型半胱氨酸','细胞渗透压保护剂','可能改善力量与爆发力表现','参与肝脏脂肪代谢'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'运动研究剂量',value:'2.5–5 g/天'},
      {label:'分次方案',value:'2.5 g，每日 2 次'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'研究多用 2.5 g/天连续数周。甜菜碱盐酸盐常用于增加胃酸，与无水甜菜碱不是同一用途。'
  },
  timing:'运动前 60 分钟或随餐，分次',
  withFood:'随餐',
  forms:[
    {name:'无水甜菜碱（TMG）',bio:'高',timing:'运动前或随餐',food:'随餐',dose:'2.5–5 g/天',grade:'B',note:'研究常用形式，注意与盐酸甜菜碱区分。'},
    {name:'甜菜碱盐酸盐',bio:'高',timing:'随餐',food:'随餐',dose:'按产品标示',grade:'C',note:'主要用于补充胃酸，不适合作为 TMG 的等效替代。'},
    {name:'甜菜根汁 / 甜菜根粉',bio:'中',timing:'运动前 2–3 小时',food:'任意',dose:'按硝酸盐 300–600 mg 折算',grade:'C',note:'主要作用是膳食硝酸盐，甜菜碱剂量很低。'}
  ],
  foods:[
    {name:'甜菜根',amount:'约 100–200 mg',per:'100 g',note:'同时富含硝酸盐'},
    {name:'菠菜',amount:'约 500–700 mg',per:'100 g',note:'甜菜碱含量较高的蔬菜'},
    {name:'藜麦',amount:'约 400–600 mg',per:'100 g',note:'干重计算'},
    {name:'虾',amount:'约 100–200 mg',per:'100 g',note:'海产品来源'},
    {name:'小麦胚芽',amount:'约 1000 mg 以上',per:'100 g',note:'谷物中含量最高，但日常摄入量有限'}
  ],
  deficiency:{
    signs:['不属于经典缺乏症','血浆甜菜碱偏低与同型半胱氨酸升高相关','严重营养不良时甲基供体不足','不能单独作为疾病诊断依据'],
    groups:['叶酸或维生素 B12 缺乏者','高同型半胱氨酸血症','长期低蔬菜饮食','慢性肝病','酗酒者']
  },
  tests:[
    {name:'血浆同型半胱氨酸',sample:'静脉血',range:'一般 < 15 µmol/L，按实验室参考范围',note:'是评价甲基代谢的实用指标，但不能单独归因于甜菜碱。'},
    {name:'叶酸、维生素 B12',sample:'静脉血',range:'按实验室参考范围',note:'同型半胱氨酸升高时需先排除这两种维生素缺乏。'},
    {name:'血脂',sample:'静脉血',range:'按实验室参考范围',note:'高剂量甜菜碱对血脂的影响研究结果不一致。'}
  ],
  cautions:['甜菜碱盐酸盐会增加胃酸，活动性消化性溃疡、胃食管反流者不宜','高剂量可能升高总胆固醇和 LDL，研究结果不一致','肾功能不全者高剂量使用需医生评估','与甲氨蝶呤等影响叶酸/甲基代谢的药物合用时应咨询医生','可能引起腹泻、胃部不适'],
  sideEffects:[
    { effect: '胃部不适、恶心', frequency: '不常见', note: '随餐服用、分次给药；从 2.5 g/天起始。' },
    { effect: '腹泻', frequency: '不常见', note: '减量并补水；持续腹泻应停药。' },
    { effect: '烧心、反酸（盐酸甜菜碱）', frequency: '不常见', note: '胃食管反流或消化性溃疡者避免；随餐服用可减轻。' },
    { effect: '总胆固醇、LDL 升高', frequency: '少见', note: '高剂量长期使用时监测血脂；异常时减量并咨询医生。' }
  ],
  special:[
    {who:'高同型半胱氨酸血症',what:'先纠正叶酸和 B12 缺乏，甜菜碱可作为辅助，但需医生评估。'},
    {who:'力量项目运动员',what:'可连续补充 2.5 g/天数周，效应通常较小。'},
    {who:'胃酸不足者',what:'常被推荐盐酸甜菜碱，但缺乏可靠证据，且有胃部刺激风险。'},
    {who:'出现以下情况',what:'持续胃痛、黑便或呕血（尤其服用盐酸甜菜碱者），立即就医消化内科。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Cholewa JM, et al. Effects of betaine on body composition, performance, and homocysteine thiolactone. J Int Soc Sports Nutr. 2013.',kind:'研究'},
    {text:'Ismaeel A, et al. The effects of betaine supplementation on muscle strength and power: a systematic review and meta-analysis. J Strength Cond Res. 2021.',kind:'综述'},
    {text:'Ueland PM. Choline and betaine in health and disease. J Inherit Metab Dis. 2011.',kind:'综述'},
  ],
  related:['creatine','b12','b9','b6']
},
{
  id:'whey',
  name:'乳清蛋白',
  en:'Whey Protein',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:20,high:40,step:5},
  tagline:'吸收快的完整蛋白，本质是食物；增肌的关键仍是每日蛋白总量。',
  intro:[
    '乳清蛋白是牛奶乳清中的球状蛋白混合物，富含亮氨酸和必需氨基酸，消化吸收速度快，能较快提高血浆氨基酸浓度并刺激肌肉蛋白合成。奶酪生产的副产品是其主要来源。',
    '在总蛋白摄入不足或训练后不便进食时，乳清蛋白是方便的选择。但当每日蛋白已经达标，额外增加乳清并不会带来更多肌肉或力量收益。它不含有任何“激素”成分，增肌效果来自训练与总营养。'
  ],
  roles:['提供完整必需氨基酸','快速提高血浆氨基酸与亮氨酸浓度','刺激肌肉蛋白合成','支持训练后恢复','作为方便的蛋白质补充来源'],
  intake:{
    main:'按蛋白缺口补充',
    mainLabel:'补充剂用量',
    groups:[
      {label:'单次用量',value:'20–30 g 蛋白'},
      {label:'每日补充量',value:'20–40 g，视饮食缺口而定'},
      {label:'总蛋白目标',value:'1.2–2.0 g/kg 体重'}
    ],
    upper:'无明确可耐受最高摄入量（受总蛋白与肾功能限制）',
    note:'先用食物满足大部分蛋白需求，再用乳清补足缺口。一次性大量摄入并不会额外增加肌肉合成。'
  },
  timing:'训练后或两餐之间',
  withFood:'任意',
  forms:[
    {name:'分离乳清蛋白（WPI）',bio:'高',timing:'训练后或两餐之间',food:'任意',dose:'20–30 g/次',grade:'A',note:'蛋白含量约 90%，乳糖极低，适合乳糖不耐受者。'},
    {name:'浓缩乳清蛋白（WPC）',bio:'高',timing:'训练后或两餐之间',food:'任意',dose:'20–30 g/次',grade:'A',note:'蛋白含量约 70–80%，含少量乳糖和脂肪，价格较低。'},
    {name:'水解乳清蛋白',bio:'高',timing:'训练后',food:'任意',dose:'20–30 g/次',grade:'B',note:'预先水解，吸收更快，但价格高，实际收益差异很小。'},
    {name:'乳清蛋白棒',bio:'中',timing:'加餐',food:'任意',dose:'按标示',grade:'C',note:'常含糖醇和添加糖，注意总能量与胃肠耐受。'}
  ],
  foods:[
    {name:'牛奶',amount:'蛋白质约 3.2 g',per:'100 ml',note:'约 20% 为乳清蛋白'},
    {name:'希腊酸奶',amount:'蛋白质约 8–10 g',per:'100 g',note:'浓缩乳蛋白，乳糖相对较低'},
    {name:'茅屋奶酪',amount:'蛋白质约 11 g',per:'100 g',note:'以酪蛋白为主'},
    {name:'全脂奶粉',amount:'蛋白质约 24 g',per:'100 g',note:'同时含乳糖和脂肪'},
    {name:'鸡蛋',amount:'蛋白质约 12.6 g',per:'100 g',note:'非乳制品，作对照参考'}
  ],
  deficiency:{
    signs:['不属于维生素式缺乏','总蛋白不足时肌肉流失、恢复变慢','白蛋白偏低（严重营养不良）','免疫力下降、伤口愈合差','水肿（严重蛋白质缺乏）'],
    groups:['每日蛋白摄入不足','老年人食欲差','减脂期能量缺口大','严格素食且豆类摄入不足','训练量大但餐食不便']
  },
  tests:[
    {name:'血清白蛋白 / 前白蛋白',sample:'静脉血',range:'按实验室参考范围',note:'受炎症影响，不能单独反映蛋白摄入。'},
    {name:'肾功能（肌酐、eGFR）',sample:'静脉血',range:'按实验室参考范围',note:'已有肾病者需控制总蛋白并定期监测。'},
    {name:'体成分与力量测试',sample:'体成分仪 / 力量测试',range:'与基线比较',note:'评价增肌效果比血检更直接。'}
  ],
  cautions:['牛奶蛋白过敏者禁用，可能出现荨麻疹、喘息甚至过敏性休克','乳糖不耐受者优先选择分离乳清','慢性肾病患者需在医生指导下控制总蛋白，不能自行加量','高蛋白饮食应保证饮水','与左旋多巴同服可能竞争吸收，建议错开时间'],
  sideEffects:[
    { effect: '腹胀、排气、腹泻', frequency: '常见', note: '乳糖不耐受者更明显；改用分离乳清或每次减至 20 g。' },
    { effect: '胃部不适、恶心', frequency: '不常见', note: '避免空腹一次大量饮用；分次、加水稀释。' },
    { effect: '痤疮加重', frequency: '不常见', note: '部分人报告与乳制品相关；减少乳清并观察 4–6 周。' },
    { effect: '过敏反应：荨麻疹、喘息、喉头水肿', frequency: '少见', note: '牛奶蛋白过敏者禁用；出现上述表现立即停药并急诊。' }
  ],
  special:[
    {who:'力量训练者',what:'每日总蛋白 1.6–2.0 g/kg 即可，乳清只是补足缺口的工具。'},
    {who:'牛奶蛋白过敏',what:'应避免所有乳清、酪蛋白产品，可选择大豆或豌豆蛋白。'},
    {who:'老年人',what:'每餐 25–30 g 优质蛋白比集中一次大量摄入更有效。'},
    {who:'出现以下情况',what:'荨麻疹、喘息、面唇或喉头肿胀，立即停药并急诊；这是牛奶蛋白过敏的急症表现。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Jäger R, et al. International Society of Sports Nutrition position stand: protein and exercise. J Int Soc Sports Nutr. 2017.',kind:'指南'},
    {text:'Morton RW, et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med. 2018.',kind:'综述'},
    {text:'Devries MC, Phillips SM. Supplemental protein in support of muscle mass and health: advantage whey. J Food Sci. 2015.',kind:'综述'},
  ],
  related:['bcaa','creatine','calcium','b12']
},
{
  id:'eaa',
  name:'必需氨基酸（EAA）',
  en:'Essential Amino Acids',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:10,high:20,step:1},
  tagline:'九种人体不能合成的氨基酸；完整蛋白够用时，单补 EAA 的优势不明显。',
  intro:[
    '必需氨基酸包括亮氨酸、异亮氨酸、缬氨酸、赖氨酸、甲硫氨酸、苯丙氨酸、苏氨酸、色氨酸和组氨酸，人体不能自行合成，必须从食物获得。它们既是蛋白质原料，也参与信号调节。',
    'EAA 补充剂的理论优势是不含非必需氨基酸，单位剂量下必需氨基酸比例更高。但在每日蛋白摄入充足的人群中，补充 EAA 与等量乳清蛋白相比并没有明显优势；它的价值主要在蛋白摄入不足、消化受限或特殊饮食场景。'
  ],
  roles:['提供九种必需氨基酸','刺激肌肉蛋白合成','补充蛋白摄入缺口','支持训练后恢复','作为无法进食时的氮源'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'运动补充',value:'10–15 g/次'},
      {label:'每日总量',value:'10–20 g'},
      {label:'总蛋白目标',value:'1.2–2.0 g/kg 体重'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定（需考虑总蛋白与肾功能）',
    note:'EAA 不能替代完整蛋白，后者还提供非必需氨基酸。先保证每日总蛋白，再用 EAA 补缺口。'
  },
  timing:'运动前 30 分钟或运动后',
  withFood:'空腹或随餐均可',
  forms:[
    {name:'EAA 粉',bio:'高',timing:'运动前或运动后',food:'任意',dose:'10–15 g/次',grade:'B',note:'配比差异大，注意是否含全部九种必需氨基酸。'},
    {name:'EAA 液体 / 能量胶',bio:'高',timing:'运动中',food:'任意',dose:'按标示',grade:'C',note:'便于携带，常含糖和电解质。'},
    {name:'乳清蛋白（天然含 EAA）',bio:'高',timing:'训练后',food:'任意',dose:'20–30 g/次',grade:'A',note:'同时提供非必需氨基酸，通常更经济有效。'}
  ],
  foods:[
    {name:'鸡蛋',amount:'EAA 约 6–7 g',per:'100 g',note:'氨基酸谱接近理想模式'},
    {name:'鸡胸肉',amount:'EAA 约 12–13 g',per:'100 g',note:'优质动物蛋白'},
    {name:'牛奶',amount:'EAA 约 1.2 g',per:'100 ml',note:'同时含乳清与酪蛋白'},
    {name:'大豆（干）',amount:'EAA 约 13–15 g',per:'100 g',note:'植物蛋白中赖氨酸相对充足'},
    {name:'藜麦（干）',amount:'EAA 约 5 g',per:'100 g',note:'谷物中氨基酸谱较完整'}
  ],
  deficiency:{
    signs:['不属于维生素式缺乏','总蛋白不足时整体氨基酸缺乏','肌肉流失、恢复变慢','白蛋白偏低（严重营养不良）','儿童生长迟缓'],
    groups:['每日蛋白摄入不足','老年人食欲差','严格限制饮食','消化吸收障碍','训练量大但餐食不便']
  },
  tests:[
    {name:'血浆氨基酸谱',sample:'静脉血',range:'研究或专科项目',note:'评估整体氨基酸状态，非常规检查。'},
    {name:'血清白蛋白 / 前白蛋白',sample:'静脉血',range:'按实验室参考范围',note:'受炎症影响，不能单独判断蛋白摄入。'},
    {name:'体成分与力量测试',sample:'体成分仪 / 力量测试',range:'与基线比较',note:'比血检更能反映训练与营养效果。'}
  ],
  cautions:['苯丙酮尿症患者禁用含苯丙氨酸的 EAA 产品','与单胺氧化酶抑制剂合用需谨慎，产品中的苯丙氨酸可能加重血压反应','与左旋多巴同服可能竞争吸收，应错开时间','肾功能不全者需在医生指导下控制总蛋白与氨基酸负荷','高剂量可能引起胃部不适或腹泻'],
  sideEffects:[
    { effect: '胃部不适、恶心', frequency: '不常见', note: '空腹大剂量易发生；分次、随餐或加水稀释。' },
    { effect: '腹泻、腹胀', frequency: '不常见', note: '高剂量或高渗透压所致；减量并补水。' },
    { effect: '血压升高（与 MAOI 合用）', frequency: '少见', note: '产品含苯丙氨酸和酪氨酸；服 MAOI 者避免，出现剧烈头痛立即急诊。' },
    { effect: '过敏反应', frequency: '少见', note: '注意产品是否源自乳或大豆；出现荨麻疹、喘息立即停药就医。' }
  ],
  special:[
    {who:'增肌人群',what:'每日蛋白达标后 EAA 边际收益很小，乳清蛋白更经济。'},
    {who:'苯丙酮尿症',what:'必须避免含苯丙氨酸的氨基酸混合物，选择专用配方。'},
    {who:'术后或消化受限',what:'可在临床营养团队指导下使用，不能自行替代治疗饮食。'},
    {who:'出现以下情况',what:'剧烈头痛伴血压升高（尤其服用 MAOI 者），或荨麻疹、喘息、面唇肿胀，立即就医。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Jäger R, et al. International Society of Sports Nutrition position stand: protein and exercise. J Int Soc Sports Nutr. 2017.',kind:'指南'},
    {text:'Wolfe RR. Branched-chain amino acids and muscle protein synthesis in humans: myth or reality? J Int Soc Sports Nutr. 2017.',kind:'综述'},
    {text:'Churchward-Venne TA, et al. Supplementation of a suboptimal protein dose with leucine or essential amino acids. J Physiol. 2012.',kind:'研究'},
  ],
  related:['bcaa','creatine','b6','b12']
},
{
  id:'caffeine',
  name:'咖啡因',
  en:'Caffeine',
  category:'sport',
  scoring:{unit:'mg',rni:null,ul:400,low:100,high:400,step:50},
  tagline:'研究最充分的运动增强剂之一。剂量和时间决定收益，过量只剩副作用。',
  intro:[
    '咖啡因是腺苷受体拮抗剂，可降低主观疲劳、提高警觉性，并可能改善肌肉收缩和耐力表现。它在体内主要由 CYP1A2 代谢，半衰期约 3–7 小时，个体差异很大。',
    '运动前 3–6 mg/kg 是研究中最常用的剂量，可提升耐力和部分力量表现。更高剂量并不带来更多收益，反而增加心悸、焦虑、失眠和胃肠不适。对日常饮用者，长期效应会因耐受而减弱。'
  ],
  roles:['拮抗腺苷受体，降低疲劳感','提高警觉性与反应速度','改善耐力运动表现','可能提高最大力量与爆发力','促进脂肪分解（实际减脂作用有限）'],
  intake:{
    main:'≤400 mg/天',
    mainLabel:'健康成人安全上限',
    groups:[
      {label:'运动前剂量',value:'3–6 mg/kg，运动前 60 分钟'},
      {label:'孕期上限',value:'≤200 mg/天'},
      {label:'可耐受最高摄入量',value:'400 mg/天（EFSA / NIH）'}
    ],
    upper:'400 mg/天（健康成人，非孕期）；孕期 200 mg/天',
    note:'一杯现磨咖啡约 80–120 mg，浓缩咖啡约 60–80 mg/份，茶约 30–50 mg。能量饮料和补剂的含量差异更大，需看标签。'
  },
  timing:'运动前 60 分钟；避免睡前 6–8 小时',
  withFood:'空腹或随餐均可',
  forms:[
    {name:'无水咖啡因（片 / 粉）',bio:'高',timing:'运动前 60 分钟',food:'任意',dose:'100–200 mg',grade:'A',note:'剂量精确，研究最常用；粉剂需注意称量，纯咖啡因过量有风险。'},
    {name:'咖啡',bio:'高',timing:'运动前 60 分钟',food:'任意',dose:'1–2 杯（约 80–200 mg）',grade:'B',note:'同时含多酚，个体含量差异大。'},
    {name:'咖啡因 + 茶氨酸',bio:'高',timing:'工作或训练前',food:'任意',dose:'咖啡因 100–200 mg',grade:'B',note:'可能减轻紧张感，但不降低心血管负荷。'},
    {name:'能量饮料',bio:'高',timing:'运动前',food:'任意',dose:'按标签（约 80–160 mg/罐）',grade:'C',note:'常含大量糖，与酒精同饮风险高。'}
  ],
  foods:[
    {name:'现磨咖啡',amount:'约 80–120 mg',per:'250 ml',note:'萃取方式影响很大'},
    {name:'浓茶',amount:'约 30–60 mg',per:'250 ml',note:'红茶、乌龙接近上限'},
    {name:'可乐',amount:'约 25–35 mg',per:'330 ml',note:'同时含糖'},
    {name:'黑巧克力（70% 以上）',amount:'约 40–80 mg',per:'100 g',note:'含量随可可比例变化'},
    {name:'能量饮料',amount:'约 80–160 mg',per:'250 ml',note:'常与牛磺酸、糖复配'}
  ],
  deficiency:{
    signs:['不属于营养素，无缺乏症','突然停用可出现头痛、疲乏、注意力下降','戒断症状通常持续 2–9 天','不能作为疾病诊断依据'],
    groups:['长期高剂量使用者（停药需逐渐减量）','咖啡因敏感者','焦虑或失眠人群','心律失常患者','孕期女性']
  },
  tests:[
    {name:'无常规实验室检测',sample:'—',range:'—',note:'咖啡因不是临床常规检测项目。'},
    {name:'血压与心率',sample:'诊室测量',range:'按临床标准',note:'高剂量后可出现一过性升高，高血压者应监测。'},
    {name:'睡眠日记',sample:'自评',range:'与基线比较',note:'评估摄入时间对睡眠的影响，比血检更实用。'}
  ],
  cautions:['与氟伏沙明、环丙沙星等 CYP1A2 抑制剂合用会显著减慢代谢，易致过量症状','与麻黄碱等拟交感药物合用增加心血管风险','未控制的高血压、心律失常、焦虑障碍和失眠患者应限制或避免','孕期每日超过 200 mg 与低出生体重相关','突然停用可引起头痛和疲乏，长期高剂量者应逐渐减量'],
  sideEffects:[
    { effect: '失眠、入睡困难', frequency: '常见', note: '睡前 6–8 小时停用；敏感者需更早，并减少总剂量。' },
    { effect: '心悸、心率加快', frequency: '常见', note: '减量；反复心悸或心律不齐应停用并查心电图。' },
    { effect: '焦虑、紧张、手抖', frequency: '常见', note: '减量并与食物同服；避免与其他兴奋剂叠加。' },
    { effect: '胃部不适、反酸', frequency: '不常见', note: '随餐或餐后服用；避免空腹喝浓咖啡。' },
    { effect: '头痛、疲乏（戒断）', frequency: '不常见', note: '长期高剂量者应每 1–2 周减 25%，不要突然停用。' }
  ],
  special:[
    {who:'耐力运动员',what:'运动前 60 分钟 3–6 mg/kg 证据最充分，赛前应先测试个体耐受。'},
    {who:'孕期',what:'每日不超过 200 mg，并把咖啡、茶、可乐和巧克力一起计算。'},
    {who:'睡眠质量差',what:'午后避免摄入，咖啡因半衰期个体差异大，敏感者需更早停用。'},
    {who:'出现以下情况',what:'胸痛、晕厥、持续心悸或严重焦虑，立即就医；与酒精或兴奋剂同服后出现高热、意识改变需急诊。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal. 2015.',kind:'机构'},
    {text:'Guest NS, et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr. 2021.',kind:'指南'},
    {text:'Grgic J, et al. Effects of caffeine intake on muscle strength and power: a systematic review and meta-analysis. J Int Soc Sports Nutr. 2018.',kind:'综述'},
    {text:'Grgic J, et al. Wake up and smell the coffee: caffeine supplementation and exercise performance—an umbrella review of 21 published meta-analyses. Br J Sports Med. 2020.',kind:'综述'},
  ],
  related:['creatine','beta-alanine','bcaa','magnesium']
},
{
  id:'electrolytes',
  name:'电解质（钠、氯、钾）',
  en:'Electrolytes (Sodium, Chloride, Potassium)',
  category:'mineral',
  scoring:{unit:'mg',rni:null,ul:null,low:300,high:1000,step:50},
  tagline:'汗液丢失的主要是钠。短时运动喝水就够，长时间高温环境才需要额外补充。',
  intro:[
    '电解质是维持体液渗透压、神经传导和肌肉收缩的带电离子。汗液中最主要的丢失成分是钠和氯，钾的丢失相对较少。大量出汗后只补水不补钠，极端情况下可导致低钠血症。',
    '对普通健身和短时运动，白水足以满足需求；马拉松、铁人三项、高温作业和反复腹泻呕吐时，含钠电解质饮料或口服补液盐才有明确价值。运动饮料同时含糖，能量控制在减脂期需要一并计算。'
  ],
  roles:['维持细胞外液容量与渗透压','神经冲动传导','肌肉收缩与舒张','酸碱平衡','参与体液调节与口渴机制'],
  intake:{
    main:'按出汗量补充',
    mainLabel:'运动补液参考',
    groups:[
      {label:'运动饮料钠浓度',value:'约 300–600 mg/L'},
      {label:'长时间运动补钠',value:'300–1000 mg/小时，视出汗率'},
      {label:'口服补液盐',value:'按说明书，腹泻脱水时使用'},
      {label:'可耐受最高摄入量',value:'钠约 2000 mg/天（中国 DRIs，成人）'}
    ],
    upper:'钠约 2000 mg/天（中国 DRIs）；钾无明确 UL，肾功能不全者需遵医嘱',
    note:'出汗率和汗钠浓度个体差异很大。简单估算：运动前后体重每下降 1 kg，约需补充 1–1.5 L 液体。'
  },
  timing:'运动前、中、后，按需分次',
  withFood:'任意',
  forms:[
    {name:'口服补液盐（ORS）',bio:'高',timing:'腹泻或脱水时',food:'任意',dose:'按说明书冲配',grade:'A',note:'钠、钾与葡萄糖配比经过验证，是脱水时的首选。'},
    {name:'电解质泡腾片 / 片剂',bio:'高',timing:'运动前后',food:'任意',dose:'1–2 片/次',grade:'B',note:'便于携带，注意每片钠含量差异很大。'},
    {name:'运动饮料',bio:'高',timing:'运动中',food:'任意',dose:'按需 400–800 ml/小时',grade:'B',note:'含糖可促进吸收，但需计入总能量。'},
    {name:'电解质粉（零糖）',bio:'高',timing:'运动前后',food:'任意',dose:'按标签',grade:'C',note:'适合控糖人群，钠含量常偏低。'}
  ],
  foods:[
    {name:'食盐',amount:'钠约 39 g',per:'100 g',note:'1 g 食盐约含 400 mg 钠'},
    {name:'香蕉',amount:'钾约 350–400 mg',per:'100 g',note:'常见补钾水果'},
    {name:'椰子水',amount:'钾约 250 mg，钠约 100 mg',per:'100 ml',note:'钠含量低于运动饮料'},
    {name:'牛奶',amount:'钾约 150 mg，钠约 40 mg',per:'100 ml',note:'运动后补液的良好选择'},
    {name:'味噌 / 咸菜',amount:'钠含量高',per:'100 g',note:'注意盐分总量'}
  ],
  deficiency:{
    signs:['肌肉抽筋、无力','头晕、乏力、体位性低血压','心悸、心律不齐（严重低钾或低钠）','恶心、头痛','严重时意识障碍（低钠血症）'],
    groups:['长时间耐力运动','高温环境作业','大量出汗且只补水','腹泻、呕吐','使用利尿剂者']
  },
  tests:[
    {name:'血电解质（钠、钾、氯）',sample:'静脉血',range:'按实验室参考范围',note:'判断是否存在低钠或低钾，症状明显时应检查。'},
    {name:'尿钠 / 尿比重',sample:'尿液',range:'按实验室参考范围',note:'帮助评估水合状态和钠丢失。'},
    {name:'运动前后体重',sample:'体重秤',range:'与运动前比较',note:'估算出汗量最实用的方法。'}
  ],
  cautions:['心力衰竭、肾功能不全、未控制的高血压患者应限制钠摄入','与 ACEI、ARB、保钾利尿剂合用补钾可致高钾血症，属明确风险','与噻嗪类利尿剂合用可能加重低钠血症','腹泻脱水应使用口服补液盐，不能用运动饮料替代','儿童和老年人补液需按体重和医嘱调整'],
  sideEffects:[
    { effect: '腹胀、恶心', frequency: '常见', note: '浓度过高或一次喝太多所致；少量多次、适当稀释。' },
    { effect: '腹泻', frequency: '不常见', note: '高浓度糖或糖醇引起；稀释后分次补充，持续腹泻改用口服补液盐。' },
    { effect: '水肿、血压升高（钠摄入过多）', frequency: '不常见', note: '高血压、心衰和肾病患者需限钠；每日总量按医嘱控制。' },
    { effect: '高钾血症：心悸、肌无力、口唇麻木', frequency: '少见', note: '肾功能不全或服用 ACEI、ARB、保钾利尿剂者风险高；出现上述症状立即查血钾。' }
  ],
  special:[
    {who:'马拉松 / 铁人三项',what:'按出汗率补充含钠饮料，避免只喝白水导致稀释性低钠血症。'},
    {who:'高温作业者',what:'分次补水并补充钠盐，注意尿色和体重变化。'},
    {who:'服用降压药或利尿剂',what:'补充钾盐前必须咨询医生，避免高钾或低钠。'},
    {who:'出现以下情况',what:'心悸、明显肌无力或口唇麻木（可能高钾），以及意识模糊、抽搐，立即急诊查电解质。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'World Health Organization. Oral rehydration salts: production of the new ORS. WHO.',kind:'机构'},
    {text:'Sawka MN, et al. American College of Sports Medicine position stand: exercise and fluid replacement. Med Sci Sports Exerc. 2007.',kind:'指南'},
    {text:'Montain SJ, et al. Exercise associated hyponatremia: quantitative analysis. Br J Sports Med. 2006.',kind:'综述'},
    {text:'Baker LB. Sweating rate and sweat sodium concentration in athletes: a review of methodology and intra/interindividual variability. Sports Med. 2017.',kind:'综述'},
  ],
  related:['potassium','magnesium','calcium','zinc']
},
{
  id:'casein',
  name:'酪蛋白',
  en:'Casein',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:20,high:40,step:5},
  tagline:'消化慢的乳蛋白。睡前补充有理论依据，但额外增肌的临床证据有限。',
  intro:[
    '酪蛋白是牛奶中含量最高的蛋白，约占乳蛋白的 80%。它在胃酸中形成凝胶，消化和氨基酸释放速度明显慢于乳清，因此常被用于延长餐间或夜间的氨基酸供应。',
    '睡前摄入 30–40 g 酪蛋白在部分研究中提高了夜间肌肉蛋白合成，但能否转化为长期增肌优势，证据并不一致。对大多数训练者，全天蛋白总量和分配比选择哪一种蛋白更重要。'
  ],
  roles:['缓慢释放氨基酸','抑制夜间肌肉蛋白分解','提供完整必需氨基酸','增加饱腹感','提供钙和磷'],
  intake:{
    main:'按蛋白缺口补充',
    mainLabel:'补充剂用量',
    groups:[
      {label:'睡前用量',value:'30–40 g'},
      {label:'单次用量',value:'20–40 g 蛋白'},
      {label:'总蛋白目标',value:'1.2–2.0 g/kg 体重'}
    ],
    upper:'无明确可耐受最高摄入量（受总蛋白与肾功能限制）',
    note:'酪蛋白饱腹感强，也可用于减脂期加餐。与乳清相比，单次增肌刺激更弱，但持续时间更长。'
  },
  timing:'睡前 30–60 分钟，或两餐之间',
  withFood:'任意',
  forms:[
    {name:'胶束酪蛋白',bio:'中高',timing:'睡前 30–60 分钟',food:'任意',dose:'30–40 g',grade:'A',note:'研究最常用，形成凝胶后释放缓慢。'},
    {name:'酪蛋白水解物',bio:'高',timing:'训练后或睡前',food:'任意',dose:'20–30 g',grade:'B',note:'预消化，吸收快于完整酪蛋白，苦味较重。'},
    {name:'酪蛋白酸盐（钠 / 钙盐）',bio:'中高',timing:'食品加工或补充',food:'任意',dose:'按蛋白量折算',grade:'C',note:'溶解度好，常用于食品工业，研究证据少于胶束酪蛋白。'}
  ],
  foods:[
    {name:'牛奶',amount:'蛋白质约 3.2 g（酪蛋白约 2.6 g）',per:'100 ml',note:'天然乳清与酪蛋白比例约 20:80'},
    {name:'切达奶酪',amount:'蛋白质约 25 g',per:'100 g',note:'同时含较高饱和脂肪和钠'},
    {name:'茅屋奶酪',amount:'蛋白质约 11 g',per:'100 g',note:'以酪蛋白为主，适合加餐'},
    {name:'希腊酸奶',amount:'蛋白质约 8–10 g',per:'100 g',note:'浓缩乳蛋白'},
    {name:'全脂奶粉',amount:'蛋白质约 24 g',per:'100 g',note:'同时含乳糖'}
  ],
  deficiency:{
    signs:['不属于维生素式缺乏','总蛋白不足时肌肉流失、恢复变慢','白蛋白偏低（严重营养不良）','免疫力下降、伤口愈合差','儿童生长迟缓'],
    groups:['每日蛋白摄入不足','睡前加餐需求者','减脂期需要高饱腹感蛋白','老年人','训练量大但餐食不便']
  },
  tests:[
    {name:'血清白蛋白 / 前白蛋白',sample:'静脉血',range:'按实验室参考范围',note:'受炎症影响，不能单独反映蛋白摄入。'},
    {name:'肾功能（肌酐、eGFR）',sample:'静脉血',range:'按实验室参考范围',note:'已有肾病者需控制总蛋白并定期监测。'},
    {name:'体成分与力量测试',sample:'体成分仪 / 力量测试',range:'与基线比较',note:'评价增肌效果比血检更直接。'}
  ],
  cautions:['牛奶蛋白过敏者禁用，可能引起荨麻疹、喘息甚至过敏性休克','乳糖不耐受者注意产品中是否含乳清或乳糖','慢性肾病患者需在医生指导下控制总蛋白','与左甲状腺素同服会降低药物吸收，建议间隔 4 小时以上','睡前大量摄入可能引起胃胀或反流'],
  sideEffects:[
    { effect: '腹胀、胃胀、反流', frequency: '常见', note: '睡前大量摄入易发生；提前到睡前 60–90 分钟，或减至 20–30 g。' },
    { effect: '排气、腹泻（乳糖不耐受）', frequency: '不常见', note: '选择低乳糖的胶束酪蛋白或改用分离乳清；减量后观察。' },
    { effect: '便秘', frequency: '少见', note: '增加饮水和膳食纤维；持续便秘应减量。' },
    { effect: '过敏反应：荨麻疹、喘息、喉头水肿', frequency: '少见', note: '牛奶蛋白过敏者禁用；出现上述表现立即停药并急诊。' }
  ],
  special:[
    {who:'力量训练者',what:'睡前 30–40 g 可作为蛋白分配的一部分，但总蛋白仍是关键。'},
    {who:'牛奶蛋白过敏',what:'必须避免酪蛋白及乳清产品，选择植物蛋白。'},
    {who:'甲状腺功能减退服药者',what:'酪蛋白和钙会影响左甲状腺素吸收，服药时间需错开。'},
    {who:'出现以下情况',what:'荨麻疹、喘息、面唇或喉头肿胀，立即停药并急诊；睡前反流伴胸痛也需就医排除其他原因。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Jäger R, et al. International Society of Sports Nutrition position stand: protein and exercise. J Int Soc Sports Nutr. 2017.',kind:'指南'},
    {text:'Res PT, et al. Protein ingestion before sleep improves postexercise overnight recovery. Med Sci Sports Exerc. 2012.',kind:'研究'},
    {text:'Devries MC, Phillips SM. Supplemental protein in support of muscle mass and health: advantage whey. J Food Sci. 2015.',kind:'综述'},
  ],
  related:['bcaa','calcium','creatine','vitamin-d']
}
);

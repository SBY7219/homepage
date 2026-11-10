window.SUPPLEMENT_DATA = window.SUPPLEMENT_DATA || [];
window.SUPPLEMENT_DATA.push(
{
  id:'ala',
  name:'α-亚麻酸（ALA）',
  en:'Alpha-linolenic acid',
  category:'fat',
  scoring:{unit:'g',rni:1.4,ul:null,low:1,high:3,step:0.1},
  tagline:'植物来源的 ω-3。它能转成 EPA 和 DHA，但转化率没有广告里那么高。',
  intro:[
    'ALA 是人体不能合成的必需 ω-3 脂肪酸，主要来自亚麻籽、奇亚籽、核桃和部分植物油。它是细胞膜磷脂的组成部分，也可以作为 EPA 和 DHA 的前体。',
    '转化效率受性别、基因和膳食结构影响。一般认为只有约 5%–10% 的 ALA 能转成 EPA，转成 DHA 的比例更低。若目标是提高 EPA/DHA 水平，藻油或鱼油比单纯增加 ALA 更直接。'
  ],
  roles:['构成细胞膜磷脂','作为 EPA、DHA 的前体','参与炎症介质平衡','支持皮肤屏障','提供必需脂肪酸'],
  intake:{
    main:'约 1.1–1.6 g/天',
    mainLabel:'膳食参考量（按总能量 0.6% 估算）',
    groups:[
      {label:'常见食物目标',value:'每天 1 汤匙亚麻籽或 15 g 奇亚籽'},
      {label:'可耐受最高摄入量',value:'未制定'},
      {label:'补充剂',value:'无统一推荐量'}
    ],
    upper:'未制定',
    note:'中国居民膳食指南建议每周吃鱼 2 次。ALA 不能完全替代 EPA/DHA，尤其是孕期和心血管高风险人群。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'亚麻籽油',bio:'中',timing:'随餐，凉拌',food:'随餐',dose:'5–15 ml/天',grade:'B',note:'ALA 含量约 53%，不耐高温，开瓶后冷藏。'},
    {name:'奇亚籽',bio:'中',timing:'随餐',food:'随餐',dose:'15–30 g/天',grade:'B',note:'同时提供膳食纤维，需充分吸水。'},
    {name:'核桃',bio:'中',timing:'随餐',food:'随餐',dose:'20–30 g/天',grade:'B',note:'ALA 约 9%，热量高。'},
    {name:'微囊化亚麻籽粉',bio:'中',timing:'随餐',food:'随餐',dose:'15–30 g/天',grade:'C',note:'可减少氧化，但标签差异大。'}
  ],
  foods:[
    {name:'亚麻籽油',amount:'约 53 g',per:'100 g',note:'不宜高温烹饪'},
    {name:'亚麻籽',amount:'约 22.8 g',per:'100 g',note:'磨碎后吸收更好'},
    {name:'奇亚籽',amount:'约 17.8 g',per:'100 g',note:'吸水膨胀，注意饮水'},
    {name:'核桃',amount:'约 9.1 g',per:'100 g',note:'每天一小把'},
    {name:'大豆',amount:'约 1.6 g',per:'100 g',note:''}
  ],
  deficiency:{
    signs:['皮肤干燥、脱屑','伤口愈合差','头发稀疏','生长迟缓（罕见）','必需脂肪酸缺乏时的皮炎'],
    groups:['长期无脂肪饮食或极低脂饮食','长期完全肠外营养未补充','脂肪吸收不良','进食障碍']
  },
  tests:[
    {name:'血浆或红细胞脂肪酸谱',sample:'静脉血',range:'按实验室参考范围',note:'可看 ALA 比例，但不同实验室方法差异大。'},
    {name:'Omega-3 指数',sample:'静脉血',range:'主要反映 EPA+DHA，不包含 ALA',note:'不能用来评价 ALA 状态。'}
  ],
  cautions:['ALA 转化为 EPA/DHA 的效率有限，不能完全替代鱼油或藻油','亚麻籽油易氧化，开瓶后冷藏并尽快用完','高剂量可能增加出血风险，与抗凝药合用需医生评估','亚麻籽含膳食纤维，突然大量摄入可能腹胀'],
  sideEffects:[
    { effect: '腹胀、腹泻', frequency: '不常见', note: '减量或随餐服用。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药；严重过敏需急诊。' },
    { effect: '出血风险', frequency: '少见', note: '与抗凝药合用时需监测。' }
  ],
  special:[
    {who:'严格素食',what:'ALA 可以从亚麻籽和核桃获得，但 DHA 建议选择藻油。'},
    {who:'孕期和哺乳期',what:'DHA 需求明确，单靠 ALA 转化不够，优先藻油或低汞鱼类。'},
    {who:'正在服用抗凝药',what:'高剂量 ALA 的理论出血风险需告知医生。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Omega-3 Fatty Acids — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',kind:'机构'},
    {text:'Rajaram S. Health benefits of plant-derived α-linolenic acid. Am J Clin Nutr. 2014;100 Suppl 1:443S-8S.',kind:'综述'},
  ],
  related:['epa','dha','gla','oleic']
},
{
  id:'epa',
  name:'EPA（二十碳五烯酸）',
  en:'Eicosapentaenoic acid',
  category:'fat',
  scoring:{unit:'mg',rni:null,ul:null,low:250,high:2000,step:50},
  tagline:'抗炎与降甘油三酯的主力，但高剂量并非人人适合。',
  intro:[
    'EPA 是长链 ω-3 脂肪酸，参与合成抗炎性介质，也能降低肝脏甘油三酯合成。它和 DHA 一起存在于富含脂肪的鱼类中，补充剂通常以鱼油或藻油形式提供。',
    '普通健康人群每天 250–500 mg EPA+DHA 已能满足基本需要。药理学剂量（每天 2–4 g）用于高甘油三酯，需要在医生监测下使用，因为高剂量可能增加房颤风险。'
  ],
  roles:['合成抗炎性前列腺素与白三烯','降低甘油三酯','影响血小板聚集','支持血管内皮功能','参与细胞膜流动性调节'],
  intake:{
    main:'250–500 mg EPA+DHA/天',
    mainLabel:'一般健康目标',
    groups:[
      {label:'高甘油三酯治疗',value:'2–4 g/天（处方级，医生监测）'},
      {label:'可耐受最高摄入量',value:'未制定'},
      {label:'房颤病史',value:'高剂量前需评估'}
    ],
    upper:'未制定；高剂量需医生评估',
    note:'标签上的 EPA+DHA 总量才是有效剂量，鱼油胶囊的总重量不能直接等同。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'rTG 型鱼油',bio:'高',timing:'随含脂肪的正餐',food:'随餐',dose:'250–1000 mg EPA+DHA/天',grade:'A',note:'重酯化甘油三酯型，吸收较好，价格较高。'},
    {name:'天然 TG 型鱼油',bio:'高',timing:'随含脂肪的正餐',food:'随餐',dose:'250–1000 mg/天',grade:'A',note:'天然甘油三酯结构，吸收良好。'},
    {name:'EE 型鱼油',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'250–1000 mg/天',grade:'B',note:'乙酯型，需要脂肪酶水解，吸收略低，随餐可改善。'},
    {name:'磷虾油',bio:'中高',timing:'随含脂肪的正餐',food:'随餐',dose:'100–300 mg/天',grade:'B',note:'磷脂形式，EPA+DHA 浓度较低，需按有效剂量换算。'},
    {name:'处方级 EPA 制剂',bio:'高',timing:'随餐',food:'随餐',dose:'2–4 g/天',grade:'A',note:'用于高甘油三酯，需医生处方和监测。'}
  ],
  foods:[
    {name:'三文鱼',amount:'约 1.5–2.5 g EPA+DHA',per:'100 g',note:'养殖与野生差异较大'},
    {name:'鲭鱼',amount:'约 2.0–2.5 g',per:'100 g',note:'汞含量需注意'},
    {name:'沙丁鱼',amount:'约 1.5 g',per:'100 g',note:'食物链底层，汞较低'},
    {name:'鲱鱼',amount:'约 2.0 g',per:'100 g',note:''},
    {name:'鳕鱼肝油',amount:'约 1.0–1.5 g',per:'10 ml',note:'同时含维生素 A/D，孕期慎用'}
  ],
  deficiency:{
    signs:['皮肤干燥、脱屑','炎症调节失衡（证据间接）','甘油三酯偏高（不是缺乏特异表现）','注意力与情绪问题（证据不一致）'],
    groups:['几乎不吃鱼','严格素食且不补藻油','脂肪吸收不良','长期完全肠外营养']
  },
  tests:[
    {name:'Omega-3 指数',sample:'静脉血',range:'< 4% 较高风险；4%–8% 中等；> 8% 较理想',note:'反映红细胞 EPA+DHA 比例，受近期摄入影响。'},
    {name:'甘油三酯',sample:'静脉血',range:'< 1.7 mmol/L 为正常',note:'高甘油三酯是 EPA 处方剂量的主要适应症。'},
    {name:'红细胞脂肪酸谱',sample:'静脉血',range:'按实验室参考范围',note:'比血浆脂肪酸更稳定，研究中使用较多。'}
  ],
  cautions:['高剂量可能增加房颤风险，尤其是已有心血管疾病者','与抗凝药、抗血小板药合用可能增加出血风险','鱼油易氧化，选择有第三方检测和避光包装的产品','大型鱼类来源可能含汞，补充剂应经过纯化'],
  sideEffects:[
    { effect: '鱼腥味嗳气、恶心', frequency: '常见', note: '随餐服用、分次或选择肠溶制剂。' },
    { effect: '腹泻', frequency: '不常见', note: '减量或随餐服用。' },
    { effect: '出血倾向', frequency: '少见', note: '与抗凝抗血小板药合用时风险增加。' },
    { effect: '房颤风险', frequency: '少见', note: '高剂量（>1 g/天）时风险上升，尤其已有心血管病者。' },
    { effect: 'LDL 升高', frequency: '不常见', note: '高剂量 EPA 制剂可轻度升高 LDL，需监测血脂。' }
  ],
  special:[
    {who:'高甘油三酯',what:'处方级 EPA 剂量为 2–4 g/天，需医生评估肝功能和房颤风险。'},
    {who:'正在服用抗凝药',what:'常规饮食剂量通常安全，高剂量补充前需告知医生。'},
    {who:'房颤病史',what:'高剂量 ω-3 与房颤风险相关，使用前需权衡。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Omega-3 Fatty Acids — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',kind:'机构'},
    {text:'Bhatt DL, et al. Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia. N Engl J Med. 2019;380:11-22.',kind:'研究'},
    {text:'Calder PC. Omega-3 fatty acids and inflammatory processes. Nutrients. 2010;2(3):355-374.',kind:'综述'},
    {text:'Bhatt DL, et al. Cardiovascular risk reduction with icosapent ethyl for hypertriglyceridemia. N Engl J Med. 2019;380(1):11-22. doi:10.1056/NEJMoa1812792',kind:'研究'},
    {text:'Nicholls SJ, et al. Effect of high-dose omega-3 fatty acids vs corn oil on major adverse cardiovascular events in patients at high cardiovascular risk: the STRENGTH randomized clinical trial. JAMA. 2020;324(22):2268-2280. doi:10.1001/jama.2020.22258',kind:'研究'},
  ],
  related:['dha','ala','vitamin-e','gla']
},
{
  id:'dha',
  name:'DHA（二十二碳六烯酸）',
  en:'Docosahexaenoic acid',
  category:'fat',
  scoring:{unit:'mg',rni:null,ul:null,low:250,high:2000,step:50},
  tagline:'大脑和视网膜的结构脂肪。孕期与婴幼儿的需求最明确。',
  intro:[
    'DHA 是大脑灰质和视网膜光感受器细胞膜的重要成分，占脑内多不饱和脂肪酸的很大比例。胎儿和婴幼儿期是 DHA 积累最快的阶段，孕期和哺乳期的摄入直接影响母体储备。',
    '成人补充 DHA 对认知和情绪的改善证据并不一致。更确定的场景是孕期、早产儿和不吃鱼的人群。藻油是不吃鱼者的直接来源，剂量按 DHA 含量计算。'
  ],
  roles:['构成大脑和视网膜细胞膜','支持胎儿神经发育','维持光感受器功能','参与炎症介质平衡','影响细胞膜流动性与信号传导'],
  intake:{
    main:'250–500 mg EPA+DHA/天',
    mainLabel:'一般健康目标',
    groups:[
      {label:'孕期 / 哺乳期',value:'额外 200 mg DHA/天'},
      {label:'早产儿',value:'按儿科方案'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'孕期每周吃 2 次低汞鱼类，或每天补充 200 mg DHA，是常见做法。大型鱼类（鲨鱼、旗鱼、方头鱼）应避免。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'藻油 DHA',bio:'高',timing:'随含脂肪的正餐',food:'随餐',dose:'200–500 mg DHA/天',grade:'A',note:'素食来源，DHA 浓度高，适合孕期和严格素食。'},
    {name:'鱼油（DHA 为主）',bio:'高',timing:'随含脂肪的正餐',food:'随餐',dose:'200–500 mg DHA/天',grade:'A',note:'同时含 EPA，按标签有效成分计算。'},
    {name:'磷虾油',bio:'中高',timing:'随含脂肪的正餐',food:'随餐',dose:'100–300 mg/天',grade:'B',note:'磷脂形式，DHA 浓度较低。'},
    {name:'金枪鱼油',bio:'高',timing:'随含脂肪的正餐',food:'随餐',dose:'200–500 mg DHA/天',grade:'B',note:'DHA 比例较高，注意汞残留检测。'}
  ],
  foods:[
    {name:'三文鱼',amount:'约 1.0–1.5 g DHA',per:'100 g',note:'同时提供 EPA 和维生素 D'},
    {name:'鲭鱼',amount:'约 1.0–1.5 g',per:'100 g',note:'汞含量需注意'},
    {name:'沙丁鱼',amount:'约 0.8–1.0 g',per:'100 g',note:'低汞'},
    {name:'鳟鱼',amount:'约 0.5–1.0 g',per:'100 g',note:'淡水养殖也含 DHA'},
    {name:'鸡蛋（DHA 强化）',amount:'约 100–150 mg',per:'1 个',note:'看饲养是否强化'}
  ],
  deficiency:{
    signs:['孕期母体储备不足（影响胎儿发育）','婴幼儿视觉和认知发育受影响','皮肤干燥、视力疲劳（非特异）','情绪与注意力问题（证据不一致）'],
    groups:['孕期和哺乳期','早产儿','严格素食且不补藻油','几乎不吃鱼','脂肪吸收不良']
  },
  tests:[
    {name:'Omega-3 指数',sample:'静脉血',range:'< 4% 较高风险；> 8% 较理想',note:'反映 EPA+DHA 总量，不能单独区分 DHA。'},
    {name:'红细胞 DHA 比例',sample:'静脉血',range:'按实验室参考范围',note:'研究中使用较多，临床不常规。'}
  ],
  cautions:['高剂量与房颤风险相关，尤其是心血管病患者','鱼油氧化后可能产生异味和有害物质','大型鱼类来源需关注汞','藻油过敏者需确认辅料'],
  sideEffects:[
    { effect: '鱼腥味嗳气', frequency: '常见', note: '随餐服用或选择藻油、肠溶制剂。' },
    { effect: '恶心、腹泻', frequency: '不常见', note: '减量或分次服用。' },
    { effect: '出血倾向', frequency: '少见', note: '与抗凝抗血小板药合用时需评估。' },
    { effect: '房颤风险', frequency: '少见', note: '高剂量时风险上升，已有心血管病者需医生评估。' }
  ],
  special:[
    {who:'孕期和哺乳期',what:'每天额外 200 mg DHA，优先低汞鱼类或藻油。'},
    {who:'严格素食',what:'藻油是直接来源，亚麻籽的 ALA 转化效率不足以满足孕期需求。'},
    {who:'婴幼儿',what:'母乳喂养者由母亲补充；配方奶应含 DHA，具体按儿科建议。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Omega-3 Fatty Acids — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',kind:'机构'},
    {text:'Calder PC. Omega-3 fatty acids and inflammatory processes. Nutrients. 2010;2(3):355-374.',kind:'综述'},
    {text:'Lauritzen L, Brambilla P, Mazzocchi A, et al. DHA effects in brain development and function. Nutrients. 2016;8(1):6.',kind:'综述'},
    {text:'Bhatt DL, et al. Cardiovascular risk reduction with icosapent ethyl for hypertriglyceridemia. N Engl J Med. 2019;380(1):11-22. doi:10.1056/NEJMoa1812792',kind:'研究'},
    {text:'Nicholls SJ, et al. Effect of high-dose omega-3 fatty acids vs corn oil on major adverse cardiovascular events in patients at high cardiovascular risk: the STRENGTH randomized clinical trial. JAMA. 2020;324(22):2268-2280. doi:10.1001/jama.2020.22258',kind:'研究'},
  ],
  related:['epa','ala','vitamin-e','iodine']
},
{
  id:'gla',
  name:'γ-亚麻酸（GLA）',
  en:'Gamma-linolenic acid',
  category:'fat',
  scoring:{unit:'mg',rni:null,ul:null,low:500,high:1500,step:50},
  tagline:'ω-6 里的例外：它不是越多越促炎，但证据集中在少数适应症。',
  intro:[
    'GLA 是 ω-6 脂肪酸，在体内转化为二高-γ-亚麻酸（DGLA），后者可以生成抗炎性前列腺素 E1。它与亚油酸（LA）不同，不是必需脂肪酸，人体可以少量合成。',
    '补充剂主要来自月见草油、琉璃苣油和黑加仑籽油。研究集中在经前综合征、湿疹和糖尿病神经病变，结果不一致，效果通常温和。'
  ],
  roles:['转化为 DGLA，参与抗炎介质合成','维持皮肤屏障','影响前列腺素平衡','参与神经细胞膜结构'],
  intake:{
    main:'无统一推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'GLA 研究剂量',value:'240–500 mg/天'},
      {label:'亚油酸（LA）',value:'占能量 4%–6%'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'GLA 不是必需脂肪酸，缺乏并不常见。不要把“ω-6 促炎”简单套用到 GLA 上，它的代谢去向与亚油酸不同。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'月见草油',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'500–1000 mg/天（GLA 约 50–100 mg）',grade:'C',note:'研究最多，但结局证据不一致。'},
    {name:'琉璃苣油',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'500–1000 mg/天（GLA 约 100–200 mg）',grade:'C',note:'GLA 浓度较高。'},
    {name:'黑加仑籽油',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'500–1000 mg/天（GLA 约 75–150 mg）',grade:'C',note:'同时含 ALA，成分较复杂。'}
  ],
  foods:[
    {name:'琉璃苣油',amount:'约 20%–25% GLA',per:'100 g',note:'补充剂来源'},
    {name:'月见草油',amount:'约 9%–10% GLA',per:'100 g',note:'补充剂来源'},
    {name:'黑加仑籽油',amount:'约 15%–20% GLA',per:'100 g',note:'同时含 ALA'},
    {name:'母乳',amount:'微量',per:'—',note:'人体可少量合成，不是主要来源'}
  ],
  deficiency:{
    signs:['皮肤干燥、脱屑（LA 缺乏时更典型）','伤口愈合差','头发稀疏','炎症调节失衡（证据间接）'],
    groups:['长期无脂肪饮食','脂肪吸收不良','必需脂肪酸缺乏（LA 缺乏比 GLA 更关键）']
  },
  tests:[
    {name:'血浆或红细胞脂肪酸谱',sample:'静脉血',range:'按实验室参考范围',note:'可看 DGLA 和 AA 比例，临床不常规。'},
    {name:'症状日记',sample:'—',range:'—',note:'经前综合征或湿疹的疗效评估更依赖症状记录。'}
  ],
  cautions:['与吩噻嗪类抗精神病药合用可能降低癫痫阈值，需医生评估','围手术期高剂量可能增加出血风险','孕期安全性数据不足，不建议自行使用','效果通常温和，不能替代湿疹或经前综合征的标准治疗'],
  sideEffects:[
    { effect: '恶心、腹泻', frequency: '不常见', note: '随餐服用、减量。' },
    { effect: '头痛', frequency: '不常见', note: '通常轻微，持续应停药。' },
    { effect: '皮疹', frequency: '少见', note: '停药观察。' },
    { effect: '癫痫阈值降低', frequency: '少见', note: '与吩噻嗪类抗精神病药合用时需医生评估。' }
  ],
  special:[
    {who:'癫痫病史',what:'避免与可能降低癫痫阈值的药物同服，使用前咨询医生。'},
    {who:'孕期',what:'安全性数据不足，优先通过饮食获取必需脂肪酸。'},
    {who:'湿疹或经前综合征',what:'可尝试短期使用并记录症状，无效则停用，不要长期高剂量。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Fan YY, Chapkin RS. Importance of dietary gamma-linolenic acid in human health and nutrition. J Nutr. 1998;128(9):1411-1414.',kind:'综述'},
    {text:'NIH Office of Dietary Supplements. Omega-3 Fatty Acids — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',kind:'机构'},
  ],
  related:['ala','epa','dha','vitamin-e']
},
{
  id:'cla',
  name:'共轭亚油酸（CLA）',
  en:'Conjugated linoleic acid',
  category:'fat',
  scoring:{unit:'g',rni:null,ul:null,low:3,high:6,step:0.5},
  tagline:'减脂广告里的常客，人体证据却远没有广告坚定。',
  intro:[
    'CLA 是亚油酸的一组位置和几何异构体，常见的是顺-9,反-11（c9,t11）和反-10,顺-12（t10,c12）。动物实验显示它可以减少脂肪，但人体试验的减重幅度通常很小。',
    '部分研究观察到 CLA 对血脂和胰岛素敏感性不利，尤其是 t10,c12 异构体。它不属于必需脂肪酸，缺乏并不存在，长期高剂量补充的必要性有限。'
  ],
  roles:['影响脂肪合成与分解（动物研究）','调节炎症与免疫（证据有限）','改变体脂分布（人体证据弱）'],
  intake:{
    main:'无推荐量',
    mainLabel:'研究使用剂量',
    groups:[
      {label:'研究剂量',value:'3–4 g/天'},
      {label:'可耐受最高摄入量',value:'未制定'},
      {label:'长期使用',value:'不建议'}
    ],
    upper:'未制定',
    note:'CLA 不是必需营养素。减脂的核心仍然是能量平衡和运动，补充剂的作用很小。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'红花籽油来源 CLA',bio:'中',timing:'随餐',food:'随餐',dose:'3–4 g/天',grade:'C',note:'常见 c9,t11 与 t10,c12 混合异构体。'},
    {name:'向日葵籽油来源 CLA',bio:'中',timing:'随餐',food:'随餐',dose:'3–4 g/天',grade:'C',note:'异构体比例不同，效果可能有差异。'}
  ],
  foods:[
    {name:'牛肉',amount:'约 3–8 mg',per:'100 g',note:'天然含量很低'},
    {name:'全脂奶',amount:'约 3–5 mg',per:'100 g',note:'含量随饲料变化'},
    {name:'奶酪',amount:'约 5–10 mg',per:'100 g',note:'天然含量仍远低于补充剂'},
    {name:'羊肉',amount:'约 4–8 mg',per:'100 g',note:'反刍动物脂肪是主要天然来源'}
  ],
  deficiency:{
    signs:['无明确缺乏综合征','不作为必需脂肪酸'],
    groups:['—']
  },
  tests:[
    {name:'体脂与腰围',sample:'体成分测量',range:'按设备参考',note:'评价减脂效果，比体重更可靠。'},
    {name:'血脂、空腹血糖、胰岛素',sample:'静脉血',range:'按实验室参考范围',note:'CLA 可能对血脂和胰岛素敏感性不利，长期使用应监测。'}
  ],
  cautions:['人体减脂效果通常很小，不能替代饮食和运动','部分研究观察到血脂异常和胰岛素抵抗','动物研究提示可能的肝脏脂肪沉积，长期高剂量安全性不足','胃肠道不适较常见'],
  sideEffects:[
    { effect: '腹泻、腹痛', frequency: '常见', note: '从低剂量开始，随餐服用。' },
    { effect: '血脂异常', frequency: '不常见', note: '部分研究观察到甘油三酯或 LDL 变化，需监测。' },
    { effect: '胰岛素抵抗', frequency: '少见', note: 't10,c12 异构体在部分研究中出现，糖尿病风险人群慎用。' },
    { effect: '肝脂肪沉积', frequency: '少见', note: '动物研究提示，长期高剂量人体数据不足。' }
  ],
  special:[
    {who:'代谢综合征或糖尿病',what:'不建议自行长期高剂量使用，可能不利于血糖和血脂。'},
    {who:'减脂人群',what:'先保证蛋白质、力量训练和能量缺口，CLA 的边际作用很小。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Benjamin S, Spener F. Conjugated linoleic acids as functional food: an insight into their health benefits. Nutr Metab (Lond). 2009;6:36.',kind:'综述'},
    {text:'Whigham LD, et al. Efficacy of conjugated linoleic acid for reducing fat mass: a meta-analysis in humans. Am J Clin Nutr. 2007;85(5):1203-1211.',kind:'综述'},
    {text:'Riserus U, Arner P, Brismar K, Vessby B. Treatment with dietary trans10cis12 conjugated linoleic acid causes isomer-specific insulin resistance in obese men with the metabolic syndrome. Diabetes Care. 2002;25(9):1516-1521.',kind:'研究'},
  ],
  related:['oleic','gla','ala','creatine']
},
{
  id:'oleic',
  name:'油酸（ω-9）',
  en:'Oleic acid',
  category:'fat',
  scoring:null,
  tagline:'不是必需脂肪酸。它的价值在于替代饱和脂肪，而不是“补”。',
  intro:[
    '油酸是单不饱和脂肪酸，人体可以自行合成，因此不存在“缺乏”。橄榄油、牛油果、坚果和 high-oleic 植物油是主要来源。',
    '地中海饮食的研究支持用不饱和脂肪替代饱和脂肪，降低心血管风险。关键在替代关系：油酸本身不是越多越好，总能量和整体饮食结构更重要。'
  ],
  roles:['构成细胞膜','替代饱和脂肪，改善血脂谱','增加膳食脂肪的氧化稳定性','提供能量'],
  intake:{
    main:'无推荐补充量',
    mainLabel:'膳食建议',
    groups:[
      {label:'替代目标',value:'用不饱和脂肪替代部分饱和脂肪'},
      {label:'可耐受最高摄入量',value:'不适用'},
      {label:'总脂肪',value:'占能量 20%–30%'}
    ],
    upper:'不适用',
    note:'油酸不是必需脂肪酸。橄榄油的热量仍然很高，不能用“健康油”为由无限量添加。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'特级初榨橄榄油',bio:'高',timing:'随餐，凉拌或低温烹饪',food:'随餐',dose:'15–30 g/天',grade:'A',note:'含多酚，适合替代黄油和动物油。'},
    {name:'高油酸葵花籽油 / 芥花油',bio:'高',timing:'随餐，烹饪',food:'随餐',dose:'按烹饪需要（每日总油 25–30 g）',grade:'B',note:'烟点较高，适合炒菜。'},
    {name:'油酸胶囊',bio:'中',timing:'随餐',food:'随餐',dose:'1–2 g/天（不优先）',grade:'C',note:'没有必要作为补充剂，食物来源更划算。'}
  ],
  foods:[
    {name:'橄榄油',amount:'约 73 g',per:'100 g',note:'热量约 884 kcal/100 g'},
    {name:'澳洲坚果',amount:'约 59 g',per:'100 g',note:'热量高'},
    {name:'牛油果',amount:'约 10 g',per:'100 g',note:'同时富含钾和膳食纤维'},
    {name:'杏仁',amount:'约 31 g',per:'100 g',note:'适量'},
    {name:'芥花油',amount:'约 60 g',per:'100 g',note:'适合日常烹饪'}
  ],
  deficiency:{
    signs:['无缺乏综合征（非必需脂肪酸）','必需脂肪酸缺乏时，问题来自亚油酸和 ALA，而不是油酸'],
    groups:['—']
  },
  tests:[
    {name:'血脂四项',sample:'静脉血',range:'LDL-C、HDL-C、甘油三酯按风险分层判读',note:'评价用不饱和脂肪替代饱和脂肪后的效果。'},
    {name:'脂肪酸谱',sample:'静脉血',range:'按实验室参考范围',note:'研究中使用，临床不常规。'}
  ],
  cautions:['热量密度高，过量仍会导致体重增加','高温反复加热会使油脂氧化','不能替代 ω-3 和 ω-6 必需脂肪酸','“高油酸”不等于低热量'],
  sideEffects:[
    { effect: '胃肠不适', frequency: '不常见', note: '胶囊剂型可能出现，随餐服用。' },
    { effect: '体重增加', frequency: '常见', note: '油脂热量密度高，需计入总能量。' },
    { effect: '油脂氧化', frequency: '少见', note: '高温反复加热会产生氧化产物，避免重复使用煎炸油。' }
  ],
  special:[
    {who:'血脂异常',what:'用橄榄油、坚果替代黄油和肥肉，比额外加一勺油更有意义。'},
    {who:'减重',what:'控制总脂肪用量，油酸不是“减肥油”。'},
    {who:'心血管高风险',what:'地中海饮食模式有研究支持，但需要整体饮食结构配合。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食指南（2022）. 人民卫生出版社, 2022.',kind:'指南'},
    {text:'Gillingham LG, et al. Dietary monounsaturated fatty acids are protective against metabolic syndrome and cardiovascular disease risk factors. Lipids. 2011;46(3):209-228.',kind:'综述'},
    {text:'Estruch R, et al. Primary prevention of cardiovascular disease with a Mediterranean diet supplemented with extra-virgin olive oil or nuts. N Engl J Med. 2018;378(25):e34.',kind:'试验'},
    {text:'Schwingshackl L, Hoffmann G. Monounsaturated fatty acids and risk of cardiovascular disease: synopsis of the evidence available from systematic reviews and meta-analyses. Nutrients. 2012;4(12):1989-2007.',kind:'综述'},
  ],
  related:['ala','gla','palmitoleic','vitamin-e']
},
{
  id:'palmitoleic',
  name:'棕榈油酸（ω-7）',
  en:'Palmitoleic acid',
  category:'fat',
  scoring:null,
  tagline:'被包装成“黏膜与皮肤营养素”的 ω-7，人体证据仍然很薄。',
  intro:[
    '棕榈油酸是单不饱和 ω-7 脂肪酸，人体可以自行合成。沙棘果油、澳洲坚果油和部分鱼油中含有较多。市面上常把它宣传为改善皮肤、黏膜和代谢的“新型脂肪酸”。',
    '目前的人体研究规模小，结局指标多为替代指标，缺乏长期硬终点。它不是必需脂肪酸，也没有明确的缺乏状态。把它当作普通脂肪来源即可，不必为概念支付过高溢价。'
  ],
  roles:['构成细胞膜脂肪酸','参与脂质代谢（研究阶段）','可能影响胰岛素敏感性（证据有限）'],
  intake:{
    main:'无推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'沙棘果油研究剂量',value:'500–1000 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'},
      {label:'必需性',value:'非必需脂肪酸'}
    ],
    upper:'未制定',
    note:'棕榈油酸不是必需脂肪酸。皮肤和黏膜健康更依赖蛋白质、维生素 A、锌和必需脂肪酸。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'沙棘果油',bio:'中',timing:'随餐',food:'随餐',dose:'500–1000 mg/天',grade:'C',note:'同时含棕榈油酸、油酸和类胡萝卜素。'},
    {name:'澳洲坚果油',bio:'中',timing:'随餐',food:'随餐',dose:'10–20 ml/天（食用油）',grade:'C',note:'主要作为食用油，补充剂较少。'},
    {name:'鱼油来源棕榈油酸',bio:'中',timing:'随餐',food:'随餐',dose:'200–300 mg/天（证据有限）',grade:'C',note:'含量通常较低。'}
  ],
  foods:[
    {name:'沙棘果油',amount:'约 20%–40%',per:'100 g',note:'不同产地差异大'},
    {name:'澳洲坚果油',amount:'约 17%–20%',per:'100 g',note:'热量高'},
    {name:'牛油果',amount:'约 3%',per:'100 g',note:'同时富含油酸'},
    {name:'三文鱼',amount:'少量',per:'100 g',note:'主要价值仍在 EPA/DHA'}
  ],
  deficiency:{
    signs:['无明确缺乏综合征（非必需脂肪酸）','皮肤干燥等问题应先排查必需脂肪酸、锌和蛋白质'],
    groups:['—']
  },
  tests:[
    {name:'血浆脂肪酸谱',sample:'静脉血',range:'研究指标',note:'无临床判读标准，不推荐作为常规检测。'},
    {name:'皮肤和黏膜评估',sample:'临床检查',range:'—',note:'症状评估比脂肪酸检测更有意义。'}
  ],
  cautions:['人体证据有限，长期安全性数据不足','高剂量可能引起胃肠不适','不能替代必需脂肪酸和维生素 A、锌','沙棘果油热量较高'],
  sideEffects:[
    { effect: '胃肠不适', frequency: '不常见', note: '随餐服用、减量。' },
    { effect: '皮疹', frequency: '少见', note: '停药观察。' },
    { effect: '体重增加', frequency: '不常见', note: '沙棘果油热量较高，注意总能量。' }
  ],
  special:[
    {who:'皮肤干燥或黏膜不适',what:'先排查必需脂肪酸、维生素 A、锌和蛋白质摄入，再考虑 ω-7。'},
    {who:'预算有限',what:'优先保证鱼油、坚果和蔬菜，ω-7 的性价比很低。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Omega-3 Fatty Acids — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',kind:'机构'},
    {text:'Frigolet ME, Gutiérrez-Aguilar R. The role of the novel lipokine palmitoleic acid in health and disease. Adv Nutr. 2017;8(1):173S-181S.',kind:'综述'},
    {text:'Cao H, Gerhold K, Mayers JR, et al. Identification of a lipokine, a lipid hormone linking adipose tissue to systemic metabolism. Cell. 2008;134(6):933-944.',kind:'研究'},
  ],
  related:['oleic','ala','gla','vitamin-a']
},
{
  id:'mct',
  name:'中链甘油三酯',
  en:'Medium-Chain Triglycerides',
  category:'fat',
  scoring:{unit:'g',rni:null,ul:null,low:10,high:20,step:1},
  tagline:'吸收快、供能快，但不是“喝了就瘦”的减肥油。',
  intro:[
    'MCT 指碳链长度 6–12 的脂肪酸，补充剂通常以 C8 辛酸和 C10 癸酸为主。它们不需要形成乳糜微粒，直接经门静脉进入肝脏，氧化速度比长链脂肪快。',
    'MCT 在生酮饮食、胰酶或胆汁分泌不足的人群中有实际用途。但对照研究显示，用 MCT 替代部分长链脂肪带来的减重差异很小，高剂量还会引起腹泻和腹痛。它不是必需脂肪酸，不能完全替代膳食中的植物油。'
  ],
  roles:['快速供能','生酮饮食中替代部分长链脂肪','胆汁或胰酶不足时的能量来源','可能增加餐后饱腹感与饮食热效应'],
  intake:{
    main:'无统一推荐量',
    mainLabel:'一般人群',
    groups:[
      {label:'生酮 / 运动人群',value:'10–20 g/天，分次'},
      {label:'起始剂量',value:'3–5 g/天，逐步增加'},
      {label:'可耐受范围',value:'无明确 UL；腹泻是主要限制'}
    ],
    upper:'无明确可耐受最高摄入量；高剂量易腹泻',
    note:'MCT 不是必需脂肪酸。日常饮食中的 ALA 和亚油酸不能被 MCT 替代。'
  },
  timing:'随餐或运动前，分次',
  withFood:'随餐，避免空腹大量',
  forms:[
    {name:'C8 辛酸',bio:'高',timing:'随餐或运动前',food:'随餐',dose:'5–10 g/次',grade:'B',note:'气味相对小，生酮人群常用。'},
    {name:'C8 / C10 混合 MCT',bio:'高',timing:'随餐或运动前',food:'随餐',dose:'5–15 g/天，分次',grade:'B',note:'性价比高，剂量越大腹泻风险越高。'},
    {name:'MCT 油粉',bio:'中',timing:'随餐',food:'随餐',dose:'5–10 g/份',grade:'C',note:'便于携带，常含麦芽糊精等载体。'},
    {name:'椰子油',bio:'中',timing:'随餐',food:'随餐',dose:'按烹饪需要（10–15 g/天）',grade:'C',note:'C8+C10 含量有限，月桂酸不算严格意义上的 MCT。'}
  ],
  foods:[
    {name:'椰子油',amount:'C8+C10 约 8–10 g',per:'100 g',note:'月桂酸约占 45 g，代谢更接近长链脂肪'},
    {name:'棕榈仁油',amount:'C8+C10 约 5–7 g',per:'100 g',note:'多用于食品加工'},
    {name:'全脂牛奶',amount:'约 0.1–0.2 g',per:'100 ml',note:'天然含量很低'},
    {name:'MCT 油（补充剂）',amount:'约 90–100 g',per:'100 ml',note:'属于补充剂，不是天然食物'}
  ],
  deficiency:{
    signs:['一般人群不存在 MCT 缺乏','长期无脂饮食可能缺乏必需脂肪酸，但这不是 MCT 能解决的'],
    groups:['胆汁分泌不足','胰腺外分泌不足','短肠综合征','生酮饮食者','脂肪吸收不良']
  },
  tests:[
    {name:'血脂四项',sample:'静脉血',range:'按实验室参考范围',note:'评估甘油三酯和 LDL-C，不能反映 MCT 摄入。'},
    {name:'红细胞脂肪酸谱',sample:'静脉血',range:'研究指标',note:'用于评估必需脂肪酸状态，非常规检查。'},
    {name:'粪便弹性蛋白酶 / 胆汁酸',sample:'粪便 / 静脉血',range:'按实验室参考范围',note:'帮助判断脂肪吸收不良的原因。'}
  ],
  cautions:['高剂量可引起腹泻、腹痛、恶心','大量使用可能增加酮体，糖尿病或肝病患者需医生评估','不能替代 ALA、亚油酸等必需脂肪酸','生酮饮食需整体评估，不适合自行长期执行'],
  sideEffects:[
    { effect: '腹泻、腹痛', frequency: '常见', note: '从 3–5 g/天开始逐步加量，分次随餐。' },
    { effect: '恶心', frequency: '不常见', note: '减量或与食物同服。' },
    { effect: '酮症、脱水', frequency: '少见', note: '大量使用或生酮饮食时出现，需保证饮水并监测。' }
  ],
  special:[
    {who:'胰酶或胆汁不足',what:'MCT 不依赖胆汁乳化，可作为部分能量来源，但需营养师计算总量。'},
    {who:'生酮饮食',what:'MCT 可帮助提高酮体，但热量和总脂肪仍需控制。'},
    {who:'运动员',what:'供能快不等于提高成绩，优先保证总能量和碳水。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Nagao K, Yanagita T. Medium-chain fatty acids: functional lipids for the prevention and treatment of the metabolic syndrome. Pharmacol Res. 2010;61(3):208-212.',kind:'综述'},
    {text:'St-Onge MP, Jones PJ. Physiological effects of medium-chain triglycerides: potential agents in the prevention of obesity. J Nutr. 2002;132(3):329-332.',kind:'综述'},
    {text:'Clegg ME. Medium-chain triglycerides are advantageous in promoting weight loss although not beneficial to exercise performance. Int J Food Sci Nutr. 2010;61(7):653-679.',kind:'综述'},
  ],
  related:['ala','oleic','coq10']
},
{
  id:'lecithin',
  name:'卵磷脂',
  en:'Lecithin',
  category:'fat',
  scoring:{unit:'g',rni:null,ul:null,low:1.2,high:2.4,step:0.1},
  tagline:'乳化剂，也是胆碱来源；“补脑”说法证据有限。',
  intro:[
    '卵磷脂是磷脂混合物，主要成分是磷脂酰胆碱。它既是食品工业里的乳化剂，也是膳食胆碱的来源之一。胆碱参与神经递质乙酰胆碱的合成、细胞膜结构和脂蛋白代谢。',
    '市售卵磷脂的磷脂酰胆碱含量差异很大，从 20% 到 90% 以上都有。用它降胆固醇或改善记忆的研究结果不一致；如果目标是补胆碱，鸡蛋、肝脏和大豆更直接。'
  ],
  roles:['细胞膜结构','胆碱来源','脂蛋白组装与肝脏脂质外运','乳化膳食脂肪'],
  intake:{
    main:'无推荐补充量',
    mainLabel:'一般人群',
    groups:[
      {label:'胆碱适宜摄入量（男 / 女）',value:'450 / 380 mg/天'},
      {label:'孕期 / 哺乳期胆碱',value:'需要量增加，按中国 DRIs 执行'},
      {label:'卵磷脂常见补充量',value:'1.2–2.4 g/天'}
    ],
    upper:'胆碱可耐受最高摄入量 3000 mg/天（中国 DRIs）',
    note:'胆碱优先从鸡蛋、肝脏、大豆和鱼类获得。卵磷脂不是胆碱的唯一来源，也不是必需补充剂。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'大豆卵磷脂',bio:'中',timing:'随餐',food:'随餐',dose:'1.2–2.4 g/天',grade:'C',note:'最常见，磷脂酰胆碱含量约 20–25%。'},
    {name:'向日葵卵磷脂',bio:'中',timing:'随餐',food:'随餐',dose:'1.2–2.4 g/天',grade:'C',note:'适合大豆过敏者，PC 含量与大豆卵磷脂接近。'},
    {name:'高纯度磷脂酰胆碱',bio:'高',timing:'随餐',food:'随餐',dose:'300–600 mg/天',grade:'C',note:'PC 含量可达 90% 以上，价格较高。'},
    {name:'食品级液体卵磷脂',bio:'中',timing:'随餐',food:'随餐',dose:'按烹饪需要（1–3 g/天）',grade:'C',note:'主要用于乳化，不适合作为精准剂量来源。'}
  ],
  foods:[
    {name:'鸡蛋（全蛋）',amount:'胆碱约 250 mg',per:'100 g',note:'胆碱主要集中在蛋黄'},
    {name:'牛肝',amount:'胆碱约 330 mg',per:'100 g',note:'维生素 A 和铜含量也高'},
    {name:'大豆（熟）',amount:'胆碱约 47 mg',per:'100 g',note:'同时提供优质植物蛋白'},
    {name:'花生',amount:'胆碱约 52 mg',per:'100 g',note:'热量高，注意份量'}
  ],
  deficiency:{
    signs:['脂肪肝（胆碱缺乏）','肌肉损伤标志升高','认知或记忆影响（证据有限）'],
    groups:['长期肠外营养','严格限制蛋类和大豆','孕期胆碱需求上升','酒精性肝病','吸收不良']
  },
  tests:[
    {name:'血浆胆碱 / 磷脂酰胆碱',sample:'静脉血',range:'研究指标',note:'临床不常用，结果受进食影响。'},
    {name:'肝功能 + 肝脏超声',sample:'静脉血 / 影像',range:'按实验室参考范围',note:'用于评估脂肪肝，不能直接诊断胆碱缺乏。'},
    {name:'血脂四项',sample:'静脉血',range:'按实验室参考范围',note:'卵磷脂对血脂的影响有限且不一致。'}
  ],
  cautions:['大豆过敏者选择向日葵来源','高剂量胆碱可引起鱼腥味体味、出汗、流涎和低血压','卵磷脂热量较高，注意总能量','不能替代降脂药或脂肪肝的病因治疗'],
  sideEffects:[
    { effect: '腹泻、腹胀', frequency: '不常见', note: '减量或分次服用。' },
    { effect: '恶心', frequency: '不常见', note: '随餐服用。' },
    { effect: '鱼腥味体味、出汗', frequency: '少见', note: '高剂量胆碱所致，减量后缓解。' },
    { effect: '低血压、流涎', frequency: '少见', note: '高剂量时出现，停药并就医。' }
  ],
  special:[
    {who:'孕期',what:'胆碱需求上升，优先通过鸡蛋、肝脏和强化食品满足，补充剂需医生评估。'},
    {who:'脂肪肝',what:'先处理酒精、体重和代谢因素，卵磷脂不是主要治疗手段。'},
    {who:'大豆过敏',what:'选择向日葵卵磷脂，并确认生产线无交叉污染。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Choline — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/',kind:'机构'},
    {text:'Zeisel SH, da Costa KA. Choline: an essential nutrient for public health. Nutr Rev. 2009;67(11):615-623.',kind:'综述'},
    {text:'EFSA NDA Panel. Dietary reference values for choline. EFSA Journal. 2016;14(8):4484.',kind:'机构'},
  ],
  related:['b9','b12','coq10']
},
{
  id:'phytosterols',
  name:'植物甾醇',
  en:'Plant Sterols / Stanols',
  category:'fat',
  scoring:{unit:'g',rni:null,ul:null,low:1.5,high:3,step:0.1},
  tagline:'有明确降 LDL 证据的油脂类成分，关键在每天 1.5–3 g 且随餐。',
  intro:[
    '植物甾醇和甾烷醇的结构与胆固醇相似，会在肠道与胆固醇竞争吸收，使 LDL-C 下降约 5–10%。欧洲食品安全局和美国 FDA 都认可这一健康声称，前提是每天摄入 1.5–3 g。',
    '它对甘油三酯和 HDL-C 影响很小，不能替代他汀。植物甾醇强化食品（如强化黄油、酸奶）比胶囊更容易坚持，但要注意这些食品本身的热量和脂肪。'
  ],
  roles:['抑制肠道胆固醇吸收','降低 LDL-C','与他汀的机制互补','轻微降低植物甾醇吸收相关脂溶性维生素'],
  intake:{
    main:'1.5–3 g/天',
    mainLabel:'降 LDL 的有效剂量',
    groups:[
      {label:'高胆固醇人群',value:'2–3 g/天，分 2–3 次'},
      {label:'随餐要求',value:'必须随含脂肪的正餐'},
      {label:'可耐受范围',value:'无明确 UL；高剂量可能影响类胡萝卜素吸收'}
    ],
    upper:'无明确可耐受最高摄入量',
    note:'植物甾醇不是必需营养素，普通人群不需要常规补充。家族性高胆固醇血症患者需在医生指导下联合治疗。'
  },
  timing:'随含脂肪的正餐，分次',
  withFood:'随餐',
  forms:[
    {name:'游离植物甾醇',bio:'中',timing:'随餐',food:'随餐',dose:'1.5–3 g/天，分次',grade:'A',note:'需与含脂肪食物同服，否则效果下降。'},
    {name:'植物甾烷醇酯',bio:'中高',timing:'随餐',food:'随餐',dose:'2–3 g/天',grade:'A',note:'脂溶性更好，常见于强化黄油。'},
    {name:'强化酸奶 / 强化植物油',bio:'中',timing:'随餐',food:'随餐',dose:'植物甾醇 2 g/天',grade:'A',note:'依从性好，注意额外热量。'},
    {name:'植物甾醇胶囊',bio:'中',timing:'随餐',food:'随餐',dose:'1.5–3 g/天，分次',grade:'B',note:'便于控制剂量，但必须随餐。'}
  ],
  foods:[
    {name:'玉米油',amount:'约 300–900 mg',per:'100 g',note:'含量随精炼程度变化'},
    {name:'坚果',amount:'约 100–200 mg',per:'100 g',note:'同时提供不饱和脂肪'},
    {name:'豆类',amount:'约 50–100 mg',per:'100 g',note:'日常摄入的主要来源之一'},
    {name:'全谷物',amount:'约 50–80 mg',per:'100 g',note:'含量低于强化食品'}
  ],
  deficiency:{
    signs:['不属于经典缺乏症','没有“植物甾醇缺乏”这一诊断'],
    groups:['LDL-C 偏高','家族性高胆固醇血症（需医生）','正在服用他汀（可联合）','饮食干预效果不佳']
  },
  tests:[
    {name:'血脂四项',sample:'静脉血',range:'LDL-C 目标按心血管风险分层',note:'判断疗效的核心指标，通常 4–12 周复查。'},
    {name:'载脂蛋白 B / 非 HDL-C',sample:'静脉血',range:'按实验室参考范围',note:'比单看 LDL-C 更能反映动脉粥样硬化风险。'},
    {name:'血浆植物甾醇（谷甾醇）',sample:'静脉血',range:'专科项目',note:'用于筛查罕见的植物甾醇血症，不是常规检查。'}
  ],
  cautions:['可能降低 β-胡萝卜素、维生素 E 等脂溶性维生素吸收，必要时错开服用','植物甾醇血症患者慎用','与他汀联用需医生评估，不能自行替代他汀','强化食品可能含较多糖和饱和脂肪'],
  sideEffects:[
    { effect: '腹胀、腹泻', frequency: '不常见', note: '从低剂量开始，分次随餐。' },
    { effect: '脂溶性维生素吸收下降', frequency: '不常见', note: '长期高剂量可能降低 β-胡萝卜素和维生素 E 水平，必要时错开服用。' },
    { effect: '恶心', frequency: '少见', note: '减量或随餐服用。' },
    { effect: '与他汀的相互作用', frequency: '少见', note: '不能替代他汀；合用需医生评估。' }
  ],
  special:[
    {who:'LDL-C 偏高',what:'先做饮食和运动干预，必要时在医生指导下联合他汀。'},
    {who:'家族性高胆固醇血症',what:'需要专科治疗，植物甾醇只能作为辅助。'},
    {who:'孕期 / 儿童',what:'安全性数据不足，不建议作为常规补充。'}
  ],
  refs:[
    {text:'中国血脂管理指南修订联合专家委员会. 中国血脂管理指南（2023年）. 中华心血管病杂志. 2023;51(3):221-255.',kind:'指南'},
    {text:'Gylling H, Plat J, Turley S, et al. Plant sterols and plant stanols in the management of dyslipidaemia and prevention of cardiovascular disease. Atherosclerosis. 2014;232(2):346-360.',kind:'综述'},
    {text:'Cabral CE, Klein MRST. Phytosterols in the treatment of hypercholesterolemia: an update on mechanisms of action. Front Nutr. 2021;8:777217.',kind:'综述'},
    {text:'Katan MB, Grundy SM, Jones P, et al. Efficacy and safety of plant stanols and sterols in the management of blood cholesterol levels. Mayo Clin Proc. 2003;78(8):965-978.',kind:'综述'},
  ],
  related:['oleic','ala','coq10']
}
);

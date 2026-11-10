window.SUPPLEMENT_DATA = window.SUPPLEMENT_DATA || [];
window.SUPPLEMENT_DATA.push(
{
  id:'curcumin',
  name:'姜黄素',
  en:'Curcumin',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:500,high:2000,step:250},
  tagline:'咖喱里的黄色色素，口服吸收很差；研究剂量和厨房用量不是一回事。',
  intro:[
    '姜黄素是姜黄根茎中的多酚类色素，也是咖喱呈色的来源。体外和动物研究显示它可以抑制 NF-κB、COX-2 等炎症通路，但这些机制研究不能直接推演为人体的临床疗效。',
    '人体研究集中在骨关节炎疼痛、血脂、血糖和炎症标志物，结果多为小幅改善，研究之间也不一致。姜黄素本身吸收很低，市售产品常通过胡椒碱、磷脂复合或纳米化提高暴露量；不同工艺的产品不能只按“姜黄素多少毫克”直接比较。'
  ],
  roles:['抗氧化（体外与动物研究）','抑制炎症介质（机制研究）','改善骨关节炎疼痛（证据中等偏弱）','可能影响血脂和血糖（证据不一致）'],
  intake:{
    main:'500–2000 mg/天（姜黄素类化合物）',
    mainLabel:'研究使用剂量',
    groups:[
      {label:'骨关节炎研究',value:'500–1500 mg/天，分次'},
      {label:'含胡椒碱配方',value:'姜黄素 500–1000 mg + 胡椒碱 5–20 mg'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'看标签时要同时确认姜黄素类化合物的含量和是否含吸收促进剂。95% 姜黄素提取物与磷脂复合物的血药浓度差异很大，不能按同一剂量互换。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'姜黄素 + 胡椒碱',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'姜黄素 500–1000 mg/天 + 胡椒碱 5–20 mg',grade:'B',note:'胡椒碱可显著提高姜黄素血药浓度，也会放大对其他药物的影响。'},
    {name:'姜黄素磷脂复合物',bio:'中高',timing:'随餐',food:'随餐',dose:'500–1000 mg/天',grade:'B',note:'吸收优于普通姜黄素粉，研究中使用较多。'},
    {name:'普通姜黄素粉（95%）',bio:'低',timing:'随含脂肪的正餐',food:'随餐',dose:'1000–2000 mg/天',grade:'C',note:'未经增溶处理，吸收有限，加量不一定能达到研究中的暴露量。'},
    {name:'纳米 / 水分散型姜黄素',bio:'中高',timing:'随餐',food:'随餐',dose:'按产品标示',grade:'C',note:'工艺差异大，缺乏统一的临床对照。'}
  ],
  foods:[
    {name:'姜黄粉',amount:'姜黄素约 3%',per:'100 g',note:'一茶匙约 2–3 g，姜黄素不足 100 mg'},
    {name:'咖喱粉',amount:'含姜黄比例不一',per:'100 g',note:'配方差异大，无法估算剂量'},
    {name:'咖喱菜肴',amount:'少量',per:'一份',note:'油脂可略微提高吸收'},
    {name:'芥末酱',amount:'含姜黄着色',per:'100 g',note:'含量很低'}
  ],
  sideEffects:[
    { effect: '胃肠不适、恶心、腹泻', frequency: '常见', note: '随餐服用并减量；持续腹泻或腹痛应停药。' },
    { effect: '肝酶升高、药物性肝损伤', frequency: '少见', note: '出现乏力、食欲下降、尿色加深或黄疸应立即停药并查肝功能。' },
    { effect: '出血倾向增加', frequency: '少见', note: '合用华法林、氯吡格雷时监测 INR，注意瘀斑和黑便。' },
    { effect: '皮疹、皮肤瘙痒', frequency: '不常见', note: '停药观察；面唇肿胀或呼吸困难按严重过敏急诊处理。' },
    { effect: '胆绞痛', frequency: '少见', note: '胆结石者出现右上腹剧痛应停药并急诊就医。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','膳食摄入与炎症指标的关系不明确','骨关节炎疼痛（非特异）','消化不良（传统使用，证据弱）'],
    groups:['很少食用咖喱和姜黄','骨关节炎','代谢综合征','无必须补充人群']
  },
  tests:[
    {name:'肝功能（ALT、AST）',sample:'静脉血',range:'按实验室参考范围',note:'高剂量使用的个案报告中有肝酶升高，出现乏力、黄疸应停用并就医。'},
    {name:'INR',sample:'静脉血',range:'按抗凝目标范围',note:'合用华法林等抗凝药时需要监测。'},
    {name:'关节疼痛评分',sample:'—',range:'—',note:'症状记录比炎症指标更能反映个体获益。'}
  ],
  cautions:['与华法林、氯吡格雷等抗凝抗血小板药合用可能增加出血风险','胆结石或胆道梗阻者慎用，可能促进胆汁分泌','高剂量有个案报告肝损伤，出现乏力、尿黄应停用','围手术期提前 2 周停用','孕期高剂量安全性数据不足'],
  special:[
    {who:'胆结石或胆道梗阻',what:'避免使用，姜黄可能刺激胆汁分泌并诱发绞痛。'},
    {who:'正在服用抗凝药',what:'合用前咨询医生，监测 INR 和出血迹象。'},
    {who:'围手术期',what:'术前至少 2 周停用，避免与麻醉和抗凝方案叠加。'},
    {who:'出现肝损伤或严重过敏信号',what:'尿色加深、皮肤黄染、右上腹不适，或面唇肿胀、呼吸困难，应立即停药并到消化内科或急诊就医。'}
  ],
  refs:[
    {text:'National Center for Complementary and Integrative Health. Turmeric: What You Need To Know.',url:'https://www.nccih.nih.gov/health/turmeric',kind:'机构'},
    {text:'European Medicines Agency. Community herbal monograph on Curcuma longa L., rhizoma. EMA/HMPC, 2011.',kind:'指南'},
    {text:'Daily JW, Yang M, Park S. Efficacy of Turmeric Extracts and Curcumin for Alleviating the Symptoms of Joint Arthritis: A Systematic Review and Meta-Analysis of Randomized Clinical Trials. J Med Food. 2016;19(8):717-729.',kind:'综述'},
    {text:'Hewlings SJ, Kalman DS. Curcumin: A Review of Its Effects on Human Health. Foods. 2017;6(10):92.',kind:'综述'},
  ],
  related:['epa','dha','vitamin-d','magnesium']
},
{
  id:'quercetin',
  name:'槲皮素',
  en:'Quercetin',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:500,high:1000,step:250},
  tagline:'洋葱和苹果里的黄酮；补充剂剂量比日常饮食高一个数量级。',
  intro:[
    '槲皮素是膳食中含量最高的黄酮醇之一，红洋葱、刺山柑、苹果和茶中较多。它在体外能清除自由基、稳定肥大细胞并抑制组胺释放，因此常被宣传为“天然抗过敏”。',
    '人体证据主要集中在过敏症状、血压和运动后炎症，研究规模小、结果不一致。普通槲皮素吸收有限，磷脂复合物和酶解异槲皮素的暴露量明显更高；不同形式不能按同一毫克数比较。'
  ],
  roles:['膳食抗氧化','稳定肥大细胞（机制研究）','轻度降低血压（小样本研究）','可能减轻过敏症状（证据弱）','影响药物代谢酶和转运体（机制）'],
  intake:{
    main:'500–1000 mg/天',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'过敏季节研究',value:'500–1000 mg/天，分次'},
      {label:'血压研究',value:'500–1000 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'日常饮食摄入约 10–30 mg/天，与补充剂剂量相差一个数量级以上。高剂量长期使用的安全性数据有限。'
  },
  timing:'随餐或空腹均可',
  withFood:'任意',
  forms:[
    {name:'槲皮素二水物',bio:'低中',timing:'随餐',food:'随餐',dose:'500–1000 mg/天',grade:'B',note:'研究最常用的基础形式，吸收受食物影响。'},
    {name:'槲皮素磷脂复合物',bio:'中高',timing:'随餐',food:'随餐',dose:'250–500 mg/天',grade:'B',note:'血药浓度高于普通槲皮素，但不能等同于临床结局更好。'},
    {name:'酶解异槲皮素',bio:'高',timing:'随餐',food:'随餐',dose:'100–250 mg/天',grade:'C',note:'水溶性好，人体数据少于普通槲皮素。'},
    {name:'芦丁',bio:'低',timing:'随餐',food:'随餐',dose:'500–1000 mg/天',grade:'C',note:'糖苷形式，需肠道菌群水解后才能吸收。'}
  ],
  foods:[
    {name:'刺山柑',amount:'约 140–180 mg',per:'100 g',note:'腌制品钠含量高'},
    {name:'红洋葱',amount:'约 20–50 mg',per:'100 g',note:'外层和紫皮含量更高'},
    {name:'苹果',amount:'约 2–5 mg',per:'100 g',note:'主要在果皮'},
    {name:'绿茶',amount:'少量',per:'250 ml',note:'同时提供儿茶素'},
    {name:'荞麦',amount:'约 10–20 mg',per:'100 g',note:'芦丁含量较高'}
  ],
  sideEffects:[
    { effect: '胃肠不适、恶心', frequency: '不常见', note: '随餐服用并减量；症状持续应停药。' },
    { effect: '头痛', frequency: '不常见', note: '减量观察，持续不缓解应停药。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药；出现面唇肿胀或喘息按严重过敏急诊处理。' },
    { effect: '血压偏低、头晕', frequency: '少见', note: '合用降压药时监测血压，起身头晕明显应减量。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','过敏症状（非特异）','血压偏高（多因素）','蔬果摄入不足时膳食摄入偏低'],
    groups:['蔬果摄入少','花粉过敏','高血压','高强度运动人群（研究场景）']
  },
  tests:[
    {name:'血压监测',sample:'诊室或家庭血压',range:'按临床标准',note:'评价降压效果最直接的指标。'},
    {name:'过敏原检测与症状记录',sample:'血液 / 自评',range:'按临床判读',note:'槲皮素不能替代过敏原回避和规范治疗。'},
    {name:'肝功能、肾功能',sample:'静脉血',range:'按实验室参考范围',note:'高剂量长期使用时用于安全性监测。'}
  ],
  cautions:['可能抑制 CYP3A4 和 P-糖蛋白，与他克莫司、环孢素等治疗窗窄的药物合用需谨慎','体外研究提示可能抑制甲状腺过氧化物酶，甲状腺疾病患者高剂量使用前咨询医生','与降压药合用可能叠加降压作用，需监测血压','围手术期提前 2 周停用','孕期、哺乳期和儿童的高剂量数据不足'],
  special:[
    {who:'正在使用免疫抑制剂',what:'槲皮素可能改变药物浓度，合用前必须咨询医生。'},
    {who:'甲状腺疾病',what:'避免长期高剂量，定期复查甲状腺功能。'},
    {who:'围手术期',what:'术前 2 周停用，减少与麻醉和抗凝药物的叠加影响。'},
    {who:'出现严重过敏反应',what:'皮疹伴面唇肿胀、喘息或呼吸困难，应立即停药并急诊就医，不要继续观察。'}
  ],
  refs:[
    {text:'Serban MC, Sahebkar A, Zanchetti A, et al. Effects of Quercetin on Blood Pressure: A Systematic Review and Meta-Analysis of Randomized Controlled Trials. J Am Heart Assoc. 2016;5(7):e002713.',kind:'综述'},
    {text:'Mlcek J, Jurikova T, Skrovankova S, Sochor J. Quercetin and Its Anti-Allergic Immune Response. Molecules. 2016;21(5):623.',kind:'综述'},
    {text:'Andres S, Pevny S, Ziegenhagen R, et al. Safety Aspects of the Use of Quercetin as a Dietary Supplement. Mol Nutr Food Res. 2018;62(1).',kind:'综述'},
  ],
  related:['vitamin-c','zinc','epa','magnesium']
},
{
  id:'resveratrol',
  name:'白藜芦醇',
  en:'Resveratrol',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:150,high:500,step:50},
  tagline:'红葡萄酒里的多酚；一杯酒的剂量远低于研究用量。',
  intro:[
    '白藜芦醇是葡萄皮、花生和浆果中的二苯乙烯类多酚，在植物中与抗真菌和紫外线应激有关。体外研究显示它能激活 SIRT1、AMPK 等通路，但这些机制在人体中的意义仍未确定。',
    '临床试验多集中在代谢综合征、血压、血脂和内皮功能，样本小、周期短，结果不一致。反式异构体是主要活性形式，光和热会使其转化；普通粉、微粉化和脂质体的血药浓度差异明显，不同产品不可直接比较。'
  ],
  roles:['抗氧化（体外研究）','激活 SIRT1 / AMPK（机制研究）','可能改善内皮功能（小样本）','影响血脂和炎症标志物（证据不一致）'],
  intake:{
    main:'150–500 mg/天',
    mainLabel:'研究使用剂量',
    groups:[
      {label:'代谢研究',value:'150–500 mg/天'},
      {label:'高剂量试验',value:'最高 1000 mg/天，胃肠不适明显'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'优先选择标示反式白藜芦醇含量的产品。红葡萄酒不能作为补充来源，酒精本身的健康风险远大于多酚收益。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'反式白藜芦醇',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'150–500 mg/天',grade:'B',note:'研究最常用的形式，需避光保存。'},
    {name:'微粉化 / 脂质体白藜芦醇',bio:'中高',timing:'随餐',food:'随餐',dose:'150–500 mg/天',grade:'C',note:'吸收可能更好，但缺乏同等质量的临床对照。'},
    {name:'葡萄皮提取物',bio:'低中',timing:'随餐',food:'随餐',dose:'按多酚含量标示',grade:'C',note:'白藜芦醇含量低，同时含其他多酚，难以归因。'},
    {name:'紫檀芪',bio:'中高',timing:'随餐',food:'随餐',dose:'50–200 mg/天',grade:'C',note:'白藜芦醇的甲氧基衍生物，人体证据更少。'}
  ],
  foods:[
    {name:'红葡萄酒',amount:'约 0.2–2 mg',per:'100 ml',note:'酒精风险大于多酚收益'},
    {name:'葡萄皮',amount:'约 0.5–2 mg',per:'100 g',note:'果肉几乎不含'},
    {name:'花生',amount:'约 0.02–0.1 mg',per:'100 g',note:'含量很低'},
    {name:'蓝莓',amount:'少量',per:'100 g',note:'主要多酚是花青素'},
    {name:'可可',amount:'少量',per:'100 g',note:'与黄烷醇共存'}
  ],
  sideEffects:[
    { effect: '胃肠不适、恶心、腹泻', frequency: '常见', note: '随含脂肪的正餐服用并减量；高剂量时更明显。' },
    { effect: '肝酶升高', frequency: '少见', note: '出现乏力、尿色加深或黄疸应停药并查肝功能。' },
    { effect: '出血倾向增加', frequency: '少见', note: '合用华法林等抗凝药时监测 INR，注意瘀斑和黑便。' },
    { effect: '头痛', frequency: '不常见', note: '减量观察，持续不缓解应停药。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','膳食多酚摄入与慢性病风险的关系受整体饮食影响','血压、血脂异常（多因素）'],
    groups:['无必须补充人群','代谢综合征（研究场景）','心血管高风险（研究场景）']
  },
  tests:[
    {name:'血脂四项',sample:'静脉血',range:'按实验室参考范围',note:'评价代谢终点，不能反映“抗衰老”效果。'},
    {name:'肝功能（ALT、AST）',sample:'静脉血',range:'按实验室参考范围',note:'高剂量试验中个别出现肝酶升高。'},
    {name:'血压与内皮功能',sample:'诊室血压 / 研究设备',range:'按临床标准',note:'内皮功能检测主要用于研究。'}
  ],
  cautions:['与华法林等抗凝药合用可能增加出血风险','体外抑制 CYP3A4，可能影响他汀、钙通道阻滞剂等药物浓度','具植物雌激素样作用，激素敏感性疾病患者慎用','孕期、哺乳期、儿童数据不足','围手术期提前 2 周停用'],
  special:[
    {who:'激素敏感性疾病',what:'乳腺癌、子宫内膜异位等患者避免自行使用，缺乏长期安全性数据。'},
    {who:'正在服用抗凝药',what:'合用前咨询医生，注意瘀斑、黑便等出血迹象。'},
    {who:'围手术期',what:'术前 2 周停用，避免与抗凝和麻醉药物叠加。'},
    {who:'出现肝损伤或出血信号',what:'尿色加深、皮肤黄染、右上腹不适，或不明原因瘀斑、黑便，应停药并到消化内科或急诊就医。'}
  ],
  refs:[
    {text:'Berman AY, Motechin RA, Wiesenfeld MY, Holz MK. The therapeutic potential of resveratrol: a review of clinical trials. NPJ Precis Oncol. 2017;1:35.',kind:'综述'},
    {text:'Ramírez-Garza SL, Laveriano-Santos EP, Marhuenda-Muñoz M, et al. Health Effects of Resveratrol: Results from Human Intervention Trials. Nutrients. 2018;10(12):1892.',kind:'综述'},
    {text:'National Center for Complementary and Integrative Health. Antioxidants: In Depth.',url:'https://www.nccih.nih.gov/health/antioxidants-in-depth',kind:'机构'},
  ],
  related:['coq10','epa','dha','vitamin-e']
},
{
  id:'berberine',
  name:'小檗碱',
  en:'Berberine',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:500,high:1500,step:100},
  tagline:'黄连里的黄色生物碱。降糖证据相对扎实，但药物相互作用也更值得警惕。',
  intro:[
    '小檗碱是从黄连、黄柏等植物中提取的异喹啉类生物碱，传统用于腹泻和“清热”。口服吸收很低（通常不足 1%），相当一部分作用发生在肠道，通过调节菌群和 AMPK 通路影响糖脂代谢。',
    '中国的小样本随机试验显示它能降低 2 型糖尿病患者的空腹血糖和 HbA1c，但多数研究规模小、周期短、单中心。盐酸小檗碱原料药与黄连汤剂不是一回事，不同提取物和缓释制剂的暴露量差异也很大。'
  ],
  roles:['降低空腹和餐后血糖（中等证据）','改善血脂（证据中等偏弱）','调节肠道菌群（机制研究）','抗炎（机制研究）'],
  intake:{
    main:'500–1500 mg/天，分 2–3 次',
    mainLabel:'研究使用剂量',
    groups:[
      {label:'降糖研究',value:'500 mg，每日 2–3 次，随餐'},
      {label:'常见提取物规格',value:'盐酸小檗碱 97%'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'分次随餐服用可减轻胃肠不适。缓释制剂的人体研究较少，不能按普通片剂的剂量直接换算。'
  },
  timing:'随餐，分 2–3 次',
  withFood:'随餐',
  forms:[
    {name:'盐酸小檗碱',bio:'低',timing:'随餐，分次',food:'随餐',dose:'500 mg，每日 2–3 次',grade:'B',note:'研究最常用的形式，吸收差但肠道浓度高。'},
    {name:'小檗碱磷脂复合物',bio:'中',timing:'随餐',food:'随餐',dose:'250–500 mg/天',grade:'C',note:'宣称吸收更好，临床终点数据有限。'},
    {name:'二氢小檗碱',bio:'中',timing:'随餐',food:'随餐',dose:'按产品标示',grade:'C',note:'在肠道可转回小檗碱，人体证据少。'}
  ],
  foods:[
    {name:'黄连',amount:'—',per:'—',note:'药用，不作日常食物；含小檗碱，不可自行煎服'},
    {name:'黄柏',amount:'—',per:'—',note:'药用，不作日常食物；需医师处方'},
    {name:'三颗针',amount:'—',per:'—',note:'药用，不作日常食物；非食用原料'},
    {name:'白毛茛',amount:'—',per:'—',note:'药用，不作日常食物；有心血管和皮肤不良反应报告'}
  ],
  sideEffects:[
    { effect: '胃肠不适、腹泻、便秘', frequency: '常见', note: '随餐分次服用并减量；持续腹泻或便秘应停药。' },
    { effect: '低血糖', frequency: '不常见', note: '合用二甲双胍等降糖药时监测血糖，出现心慌、冷汗应立即测血糖并就医。' },
    { effect: '肝损伤', frequency: '少见', note: '乏力、尿黄、皮肤黄染应停药并查肝功能。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药观察；面唇肿胀或呼吸困难按严重过敏急诊处理。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','血糖偏高（多因素）','血脂异常（多因素）','腹泻（传统使用，证据弱）'],
    groups:['2 型糖尿病（研究场景）','血脂异常','多囊卵巢综合征（小样本）','无必须补充人群']
  },
  tests:[
    {name:'空腹血糖、HbA1c',sample:'静脉血',range:'按糖尿病诊断标准',note:'评价降糖效果的核心指标。'},
    {name:'血脂四项',sample:'静脉血',range:'按实验室参考范围',note:'用于评估合并血脂异常时的变化。'},
    {name:'肝功能、肌酸激酶（CK）',sample:'静脉血',range:'按实验室参考范围',note:'合用他汀时警惕肌病，出现肌痛应检测。'}
  ],
  cautions:['抑制 CYP3A4、CYP2D6 和 P-糖蛋白，可能升高环孢素、他汀、地高辛等药物浓度','与二甲双胍合用可能增加低血糖风险并改变二甲双胍暴露，需监测血糖','孕妇、哺乳期和婴幼儿禁用，可透过胎盘，新生儿有核黄疸风险；G6PD 缺乏者禁用','常见胃肠不适、便秘','围手术期停用，避免血糖波动'],
  special:[
    {who:'孕期和哺乳期',what:'禁用。新生儿和 G6PD 缺乏的婴儿尤其危险。'},
    {who:'正在服用二甲双胍',what:'合用前咨询医生，监测血糖，避免自行叠加降糖药。'},
    {who:'围手术期',what:'术前停用，麻醉和禁食期间血糖波动风险增加。'},
    {who:'出现低血糖或肝损伤信号',what:'心慌、冷汗、手抖应立即测血糖并就医；乏力、尿黄、皮肤黄染应停药并到消化内科查肝功能。'}
  ],
  refs:[
    {text:'Yin J, Xing H, Ye J. Efficacy of berberine in patients with type 2 diabetes mellitus. Metabolism. 2008;57(5):712-717.',kind:'研究'},
    {text:'Lan J, Zhao Y, Dong F, et al. Meta-analysis of the effect and safety of berberine in the treatment of type 2 diabetes mellitus, hyperlipemia and hypertension. J Ethnopharmacol. 2015;161:69-81.',kind:'综述'},
    {text:'国家药典委员会. 中华人民共和国药典（2020年版）一部. 黄连. 中国医药科技出版社, 2020.',kind:'标准'},
  ],
  related:['chromium','magnesium','coq10','phytosterols']
},
{
  id:'ginkgo',
  name:'银杏叶提取物',
  en:'Ginkgo biloba leaf extract',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:120,high:240,step:40},
  tagline:'标准提取物 EGb 761 有明确规格；但“改善记忆”的临床证据并不理想。',
  intro:[
    '银杏叶提取物来自银杏叶，主要活性成分是黄酮苷和萜内酯（银杏内酯、白果内酯）。它常被用于改善外周循环和认知，机制涉及抗氧化、抑制血小板活化因子和改善微循环。',
    '规格是这类产品最关键的信息：研究常用的 EGb 761 含 24% 黄酮苷、6% 萜内酯，银杏酸控制在 5 ppm 以下。普通银杏叶茶或未标准化提取物的成分差异极大，不能与临床研究中的提取物直接比较。'
  ],
  roles:['抗氧化（体外研究）','抑制血小板活化因子（机制）','改善外周循环（证据中等偏弱）','改善认知（证据不一致，预防试验为阴性）','缓解耳鸣（证据弱）'],
  intake:{
    main:'120–240 mg/天',
    mainLabel:'标准化提取物研究剂量',
    groups:[
      {label:'认知与循环研究',value:'120–240 mg/天，分 2–3 次'},
      {label:'EGb 761 规格',value:'24% 黄酮苷、6% 萜内酯'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'必须按标准化提取物计算剂量。银杏酸是致敏和胃肠刺激成分，合格产品应低于 5 ppm。'
  },
  timing:'随餐或空腹，分次',
  withFood:'任意',
  forms:[
    {name:'EGb 761 标准提取物',bio:'中',timing:'随餐，分 2–3 次',food:'随餐',dose:'120–240 mg/天',grade:'A',note:'临床研究最充分，规格明确，是首选。'},
    {name:'其他标准化银杏叶提取物',bio:'中',timing:'随餐',food:'随餐',dose:'120–240 mg/天',grade:'B',note:'需确认黄酮苷和萜内酯含量，不能只看“银杏叶提取物”字样。'},
    {name:'银杏叶茶',bio:'低',timing:'任意',food:'任意',dose:'无法标准化',grade:'C',note:'有效成分和银杏酸含量都不稳定，不能替代标准化提取物。'}
  ],
  foods:[
    {name:'白果（银杏种子）',amount:'少量（须煮熟）',per:'一份',note:'生食有毒，含 4′-甲氧基吡哆醇，不可用来替代叶提取物'},
    {name:'银杏叶茶',amount:'—',per:'—',note:'药用，不作日常食物；银杏酸可能超标'},
    {name:'银杏叶粉',amount:'—',per:'—',note:'药用，不作日常食物；成分不稳定'}
  ],
  sideEffects:[
    { effect: '出血倾向增加（瘀斑、鼻出血）', frequency: '不常见', note: '合用抗凝抗血小板药时监测 INR，出现黑便、呕血应急诊就医。' },
    { effect: '头痛', frequency: '常见', note: '减量或分次服用，持续头痛应停药。' },
    { effect: '胃肠不适、恶心', frequency: '常见', note: '随餐服用，症状明显时减量。' },
    { effect: '头晕、心悸', frequency: '不常见', note: '减量观察，症状持续应停药。' },
    { effect: '皮疹、光敏反应', frequency: '少见', note: '停药；银杏酸含量高的产品更易发生。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','记忆力下降（多因素，不能归因于“银杏缺乏”）','外周循环不畅（非特异）','耳鸣（非特异）'],
    groups:['老年人（研究场景）','认知下降','外周动脉疾病','无必须补充人群']
  },
  tests:[
    {name:'INR、凝血功能',sample:'静脉血',range:'按临床目标范围',note:'合用抗凝或抗血小板药时必须监测。'},
    {name:'认知评估（MMSE、MoCA）',sample:'量表',range:'按临床判读',note:'用于随访，不能凭单次评分判断疗效。'},
    {name:'肝功能',sample:'静脉血',range:'按实验室参考范围',note:'长期使用时的常规安全性监测。'}
  ],
  cautions:['与华法林、阿司匹林、氯吡格雷等合用可增加出血风险','可能降低癫痫发作阈值，癫痫患者慎用','可能诱导 CYP2C19 等酶，影响奥美拉唑、部分抗癫痫药','与依非韦伦合用可能降低其血药浓度，HIV 患者需咨询医生','围手术期提前 2 周停用'],
  special:[
    {who:'围手术期',what:'术前至少 2 周停用，避免术中出血增加。'},
    {who:'癫痫患者',what:'慎用，出现发作频率变化应停用。'},
    {who:'正在服用抗凝药',what:'合用前咨询医生，监测 INR 和出血迹象。'},
    {who:'出现出血或剧烈头痛',what:'不明原因瘀斑、鼻出血、黑便或呕血，或突发剧烈头痛、肢体无力，应立即停药并急诊就医，警惕颅内出血。'}
  ],
  refs:[
    {text:'European Medicines Agency. Community herbal monograph on Ginkgo biloba L., folium. EMA/HMPC, 2010.',kind:'指南'},
    {text:'Birks J, Grimley Evans J. Ginkgo biloba for cognitive impairment and dementia. Cochrane Database Syst Rev. 2009;(1):CD003120.',kind:'综述'},
    {text:'Weinmann S, Roll S, Schwarzbach C, et al. Effects of Ginkgo biloba in dementia: systematic review and meta-analysis. BMC Geriatr. 2010;10:14.',kind:'综述'},
    {text:'National Center for Complementary and Integrative Health. Ginkgo: What You Need To Know.',url:'https://www.nccih.nih.gov/health/ginkgo',kind:'机构'},
  ],
  related:['b12','coq10','vitamin-e','epa']
},
{
  id:'ginseng',
  name:'人参',
  en:'Panax ginseng',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:200,high:1000,step:100},
  tagline:'人参皂苷是活性成分，但“提神”的证据温和，和药物的相互作用却很实在。',
  intro:[
    '人参是五加科植物 Panax ginseng 的根，主要活性成分是人参皂苷（ginsenosides）。红参是经过蒸制干燥的加工品，成分谱与生晒参不同；美国人参（Panax quinquefolius）是另一个物种，不能混为一谈。',
    '研究集中在疲劳、认知、免疫和血糖，结果多为小幅改善，试验规模小、周期短。标准化提取物通常标示 4% 左右人参皂苷，但不同厂家、不同参龄和加工方式的皂苷谱差异很大，不能只按总皂苷含量比较。'
  ],
  roles:['缓解疲劳（证据中等偏弱）','可能改善认知（证据不一致）','调节免疫（机制与小型研究）','可能影响血糖（证据弱）','适应原样作用（传统使用）'],
  intake:{
    main:'200–1000 mg/天',
    mainLabel:'标准化提取物研究剂量',
    groups:[
      {label:'疲劳与认知研究',value:'200–400 mg/天'},
      {label:'高剂量研究',value:'最高 1000 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'按人参皂苷含量而非原料重量计算剂量。红参与生晒参的成分谱不同，不能直接互换。'
  },
  timing:'早晨或上午，避免晚间服用',
  withFood:'随餐或空腹',
  forms:[
    {name:'标准化人参提取物',bio:'中',timing:'早晨或上午',food:'随餐',dose:'200–400 mg/天',grade:'B',note:'标示人参皂苷含量，研究较常用。'},
    {name:'红参提取物',bio:'中',timing:'早晨或上午',food:'随餐',dose:'200–1000 mg/天',grade:'B',note:'蒸制后皂苷谱改变，部分研究显示对疲劳有帮助。'},
    {name:'美国人参',bio:'中',timing:'早晨或上午',food:'随餐',dose:'200–400 mg/天',grade:'C',note:'不同物种，主要用于血糖和上呼吸道感染研究。'},
    {name:'人参粉 / 切片',bio:'低中',timing:'早晨或上午',food:'随餐',dose:'1–3 g/天',grade:'C',note:'皂苷含量不稳定，难以标准化。'}
  ],
  foods:[
    {name:'人参炖汤',amount:'用量不一',per:'一份',note:'长时间炖煮，皂苷溶出有限'},
    {name:'红参茶',amount:'少量',per:'一杯',note:'含糖产品需注意'},
    {name:'鲜人参',amount:'—',per:'—',note:'药用，不作日常食物；不可随意大量食用'}
  ],
  sideEffects:[
    { effect: '失眠、易激惹', frequency: '常见', note: '改为早晨服用并减量；避免晚间服用。' },
    { effect: '血压升高', frequency: '不常见', note: '高血压者监测血压，持续升高应停药。' },
    { effect: '心悸、头痛', frequency: '不常见', note: '减量观察，出现胸痛或心律不齐应就医。' },
    { effect: '出血倾向（可能减弱华法林效果）', frequency: '少见', note: '合用华法林时监测 INR，不要自行加量。' },
    { effect: '腹泻、皮疹', frequency: '少见', note: '停药观察，严重过敏需就医。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','疲劳（多因素）','注意力下降（非特异）','免疫力低下（非特异）'],
    groups:['疲劳人群（研究场景）','老年人','糖尿病（研究场景）','无必须补充人群']
  },
  tests:[
    {name:'INR',sample:'静脉血',range:'按抗凝目标范围',note:'人参可能降低华法林抗凝效果，合用时必须监测。'},
    {name:'空腹血糖',sample:'静脉血',range:'按临床标准',note:'合用降糖药时注意低血糖。'},
    {name:'血压',sample:'诊室或家庭血压',range:'按临床标准',note:'可能影响血压，高血压患者需随访。'}
  ],
  cautions:['可能降低华法林抗凝效果，需监测 INR','与降糖药或降压药合用可能影响血糖和血压控制，需监测','可能引起失眠、心悸、头痛，晚间更明显；躁狂、焦虑障碍患者慎用','围手术期提前 1–2 周停用','孕期高剂量安全性数据不足'],
  special:[
    {who:'正在服用华法林',what:'合用前咨询医生，监测 INR，不要自行加量。'},
    {who:'高血压或心律失常',what:'从小剂量开始并监测血压和心率，出现心悸应停用。'},
    {who:'围手术期',what:'术前 1–2 周停用，避免血糖和血压波动。'},
    {who:'血压显著升高或心悸胸痛',what:'家庭血压持续 ≥180/120 mmHg，或出现胸痛、心悸伴头晕，应停药并急诊就医。'}
  ],
  refs:[
    {text:'European Medicines Agency. Community herbal monograph on Panax ginseng C.A. Meyer, radix. EMA/HMPC, 2014.',kind:'指南'},
    {text:'Geng J, Dong J, Ni H, et al. Ginseng for cognition. Cochrane Database Syst Rev. 2010;(12):CD007769.',kind:'综述'},
    {text:'Kim S, Shin BC, Lee MS, et al. Red ginseng for type 2 diabetes mellitus: a systematic review of randomized controlled trials. Chin J Integr Med. 2011;17(12):937-944.',kind:'综述'},
    {text:'National Center for Complementary and Integrative Health. Ginseng: What You Need To Know.',url:'https://www.nccih.nih.gov/health/ginseng',kind:'机构'},
  ],
  related:['b12','magnesium','coq10','zinc']
},
{
  id:'ashwagandha',
  name:'南非醉茄',
  en:'Ashwagandha (Withania somnifera)',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:250,high:600,step:50},
  tagline:'压力与睡眠的小样本研究较多，但甲状腺和免疫方面的相互作用不能忽视。',
  intro:[
    '南非醉茄是阿育吠陀传统草药，使用其根和叶，活性成分主要是醉茄内酯（withanolides）。传统上用于“强身”和应对压力，现代研究多集中在皮质醇、焦虑、睡眠和力量表现。',
    '部分随机试验显示每天 250–600 mg 根提取物可以降低主观压力评分、改善睡眠质量，但样本普遍较小、周期短（多为 8 周），且不同提取物（根、根叶复方）的醉茄内酯含量差异很大，不能直接比较。'
  ],
  roles:['缓解主观压力（证据中等偏弱）','可能改善睡眠质量（小样本）','可能改善力量与恢复（证据弱）','调节皮质醇（机制与小型研究）','传统适应原用途'],
  intake:{
    main:'250–600 mg/天',
    mainLabel:'根提取物研究剂量',
    groups:[
      {label:'压力与睡眠研究',value:'250–600 mg/天，持续 8 周左右'},
      {label:'常见标准化提取物',value:'醉茄内酯 5% 左右'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'根提取物与根叶复方提取物的成分不同，剂量不能直接换算。甲状腺疾病患者使用前应咨询医生。'
  },
  timing:'晚间或睡前，也可分早晚',
  withFood:'随餐',
  forms:[
    {name:'根提取物（标准化醉茄内酯）',bio:'中',timing:'晚间或睡前',food:'随餐',dose:'250–600 mg/天',grade:'B',note:'研究最常用的形式，成分相对清楚。'},
    {name:'根叶复方提取物',bio:'中',timing:'晚间',food:'随餐',dose:'120–250 mg/天',grade:'C',note:'醉茄内酯比例更高，但临床数据少于根提取物。'},
    {name:'醉茄根粉',bio:'低中',timing:'晚间',food:'随餐',dose:'1–3 g/天',grade:'C',note:'传统用法，含量不稳定。'}
  ],
  foods:[
    {name:'醉茄根粉',amount:'传统用量 1–3 g',per:'一份',note:'多与牛奶或酥油同用，非日常食物'},
    {name:'阿育吠陀复方',amount:'成分不一',per:'一份',note:'常含多种草药，难以归因'},
    {name:'醉茄茶',amount:'含量很低',per:'一杯',note:'不能达到研究剂量'}
  ],
  sideEffects:[
    { effect: '嗜睡、晨起困倦', frequency: '不常见', note: '改为睡前服用或减量；服药后避免驾车。' },
    { effect: '胃肠不适、腹泻', frequency: '不常见', note: '随餐服用并减量，持续腹泻应停药。' },
    { effect: '肝损伤', frequency: '少见', note: '乏力、尿色加深、皮肤黄染应停药并查肝功能。' },
    { effect: '甲状腺激素升高', frequency: '少见', note: '甲亢或服用左甲状腺素者监测 TSH、FT4。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','压力感、焦虑（多因素）','入睡困难（非特异）','疲劳（非特异）'],
    groups:['长期压力人群（研究场景）','睡眠质量差','健身人群（研究场景）','无必须补充人群']
  },
  tests:[
    {name:'甲状腺功能（TSH、FT4、FT3）',sample:'静脉血',range:'按实验室参考范围',note:'可能升高甲状腺激素，甲亢或正在用甲状腺药者需监测。'},
    {name:'肝功能（ALT、AST）',sample:'静脉血',range:'按实验室参考范围',note:'有个案报告肝损伤，出现乏力、黄疸应停用。'},
    {name:'皮质醇（晨起）',sample:'静脉血 / 唾液',range:'按实验室参考范围',note:'研究指标，临床不用于判断“肾上腺疲劳”。'}
  ],
  cautions:['可能升高甲状腺激素，甲亢患者及服用左甲状腺素者需监测','可能增强免疫反应，自身免疫病和使用免疫抑制剂者慎用','与镇静催眠药合用可能加重嗜睡','有个案报告肝损伤，出现乏力、尿黄应停用','孕妇禁用，传统上被认为有致流产风险；围手术期提前 2 周停用'],
  special:[
    {who:'甲状腺疾病',what:'使用前咨询医生，定期复查甲状腺功能，甲亢患者避免使用。'},
    {who:'自身免疫病或使用免疫抑制剂',what:'可能刺激免疫系统，合用前必须咨询医生。'},
    {who:'孕期和哺乳期',what:'孕期禁用；哺乳期安全性数据不足，不建议使用。'},
    {who:'出现肝损伤信号',what:'乏力、恶心、尿色加深或皮肤黄染，应立即停药并到消化内科就诊，必要时急诊就医。'}
  ],
  refs:[
    {text:'Chandrasekhar K, Kapoor J, Anishetty S. A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults. Indian J Psychol Med. 2012;34(3):255-262.',kind:'研究'},
    {text:'Pratte MA, Nanavati KB, Young V, Morley CP. An Alternative Treatment for Anxiety: A Systematic Review of Human Trial Results Reported for the Ayurvedic Herb Ashwagandha. J Altern Complement Med. 2014;20(12):901-908.',kind:'综述'},
    {text:'National Center for Complementary and Integrative Health. Ashwagandha: What You Need To Know.',url:'https://www.nccih.nih.gov/health/ashwagandha',kind:'机构'},
  ],
  related:['magnesium','b6','melatonin','vitamin-d']
},
{
  id:'rhodiola',
  name:'红景天',
  en:'Rhodiola rosea',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:200,high:600,step:50},
  tagline:'用于疲劳的适应原，研究规模小；提神作用可能影响睡眠。',
  intro:[
    '红景天是景天科植物的根，生长于高海拔地区，主要活性成分是红景天苷（salidroside）和 rosavins。传统用于抗疲劳、耐寒和提高工作耐力。',
    '人体研究集中在身心疲劳、压力和运动表现，样本小、结果不一致。标准化提取物通常标示 3% rosavins 和 1% 红景天苷；不同产地和提取工艺的成分差异明显，普通根粉不能与标准化提取物按同一剂量比较。'
  ],
  roles:['缓解疲劳（证据中等偏弱）','可能改善压力相关症状（小样本）','可能提高运动耐力（证据弱）','抗氧化（体外研究）','传统适应原用途'],
  intake:{
    main:'200–600 mg/天',
    mainLabel:'标准化提取物研究剂量',
    groups:[
      {label:'疲劳研究',value:'200–600 mg/天'},
      {label:'常见规格',value:'3% rosavins、1% 红景天苷'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'早晨或上午服用可减少失眠。按 rosavins 和红景天苷含量判断产品，而不是原料重量。'
  },
  timing:'早晨或上午',
  withFood:'空腹或随餐',
  forms:[
    {name:'标准化红景天提取物',bio:'中',timing:'早晨或上午',food:'随餐',dose:'200–600 mg/天',grade:'B',note:'研究较常用，需标示 rosavins 和红景天苷。'},
    {name:'SHR-5 提取物',bio:'中',timing:'早晨',food:'随餐',dose:'170–680 mg/天',grade:'B',note:'部分疲劳研究使用的特定提取物。'},
    {name:'红景天根粉 / 茶',bio:'低',timing:'白天',food:'任意',dose:'1–2 g/天',grade:'C',note:'活性成分含量不稳定，难以达到研究剂量。'}
  ],
  foods:[
    {name:'红景天茶',amount:'含量很低',per:'一杯',note:'不能替代标准化提取物'},
    {name:'红景天根粉',amount:'—',per:'—',note:'药用，不作日常食物'},
    {name:'红景天复合饮品',amount:'成分不一',per:'一份',note:'常与咖啡因复配，难以归因'}
  ],
  sideEffects:[
    { effect: '失眠、焦虑', frequency: '不常见', note: '改为早晨服用并减量，避免晚间使用。' },
    { effect: '头晕、口干', frequency: '不常见', note: '减量观察，症状持续应停药。' },
    { effect: '心悸、血压升高', frequency: '少见', note: '监测血压和心率，持续不缓解应停药。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药观察；面唇肿胀或呼吸困难按严重过敏急诊处理。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','疲劳（多因素）','注意力下降（非特异）','高原不适（传统使用，证据弱）'],
    groups:['疲劳人群（研究场景）','高压工作人群','运动员（研究场景）','无必须补充人群']
  },
  tests:[
    {name:'血常规、铁蛋白',sample:'静脉血',range:'按实验室参考范围',note:'先排除贫血等疲劳的常见原因。'},
    {name:'甲状腺功能',sample:'静脉血',range:'按实验室参考范围',note:'疲劳的常规鉴别检查。'},
    {name:'血压、心率',sample:'诊室测量',range:'按临床标准',note:'红景天可能有轻度兴奋作用。'}
  ],
  cautions:['可能引起失眠、焦虑、心悸，避免晚间服用','体外提示可能抑制单加氧酶，与抗抑郁药合用需谨慎','可能降低血糖，与降糖药合用需监测','自身免疫病和躁狂史患者慎用','孕期、哺乳期数据不足；围手术期提前 2 周停用'],
  special:[
    {who:'正在服用抗抑郁药',what:'理论上可能影响单胺代谢，合用前咨询医生。'},
    {who:'失眠或焦虑',what:'避免晚间服用，出现心悸、烦躁应停用。'},
    {who:'围手术期',what:'术前 2 周停用，避免与麻醉药物叠加。'},
    {who:'出现严重过敏或躁狂样症状',what:'皮疹、面唇肿胀、呼吸困难，或异常兴奋、冲动、失眠加重，应停药并就医，严重者到急诊处理。'}
  ],
  refs:[
    {text:'European Medicines Agency. Community herbal monograph on Rhodiola rosea L., radix. EMA/HMPC, 2011.',kind:'指南'},
    {text:'Panossian A, Wikman G, Sarris J. Rosenroot (Rhodiola rosea): traditional use, chemical composition, pharmacology and clinical efficacy. Phytomedicine. 2010;17(7):481-493.',kind:'综述'},
    {text:'Ishaque S, Shamseer L, Bukutu C, Vohra S. Rhodiola rosea for physical and mental fatigue: a systematic review. BMC Complement Altern Med. 2012;12:70.',kind:'综述'},
  ],
  related:['b12','magnesium','coq10','iron']
},
{
  id:'valerian',
  name:'缬草',
  en:'Valerian',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:300,high:600,step:50},
  tagline:'传统助眠草药，研究结果不一致；不会成瘾，但会放大镇静药的作用。',
  intro:[
    '缬草使用的是根部，主要成分包括缬草烯酸（valerenic acid）和挥发油。传统上用于入睡困难和紧张不安，机制可能与调节 GABA 受体有关，但人体证据并不充分。',
    '多项随机试验和系统综述结果不一致，部分研究显示主观睡眠质量略有改善，客观指标差异不明显。标准化提取物通常标示 0.8% 缬草烯酸；缬草茶、酊剂和提取物的剂量无法直接换算。'
  ],
  roles:['缩短入睡时间（证据不一致）','改善主观睡眠质量（证据弱）','缓解紧张不安（传统使用）','可能调节 GABA 能神经传递（机制）'],
  intake:{
    main:'300–600 mg/天',
    mainLabel:'睡前 30–60 分钟',
    groups:[
      {label:'助眠研究',value:'300–600 mg，睡前 30–60 分钟'},
      {label:'常见规格',value:'0.8% 缬草烯酸'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'连续使用 2–4 周后评估效果，无效则停用。不要与酒精或镇静催眠药同服。'
  },
  timing:'睡前 30–60 分钟',
  withFood:'空腹或随餐',
  forms:[
    {name:'标准化缬草根提取物',bio:'中',timing:'睡前 30–60 分钟',food:'任意',dose:'300–600 mg',grade:'B',note:'研究较常用，需标示缬草烯酸含量。'},
    {name:'缬草酊剂',bio:'中',timing:'睡前',food:'任意',dose:'按产品标示',grade:'C',note:'乙醇提取，酒精本身可能影响睡眠。'},
    {name:'缬草茶',bio:'低',timing:'睡前',food:'空腹',dose:'1–2 g 干根冲泡',grade:'C',note:'有效成分溶出有限，起效较慢。'},
    {name:'缬草 + 啤酒花复方',bio:'中',timing:'睡前',food:'任意',dose:'按产品标示',grade:'C',note:'复方研究较多，但难以判断单一成分的作用。'}
  ],
  foods:[
    {name:'缬草茶',amount:'1–2 g 干根',per:'一杯',note:'传统用法，味道较强'},
    {name:'缬草根粉',amount:'—',per:'—',note:'药用，不作日常食物'},
    {name:'缬草复合助眠饮品',amount:'成分不一',per:'一份',note:'常与褪黑素、洋甘菊复配'}
  ],
  sideEffects:[
    { effect: '嗜睡、晨起昏沉', frequency: '常见', note: '减量或提前服用；服药后不要驾车或操作机械。' },
    { effect: '头晕、头痛', frequency: '不常见', note: '减量观察，症状持续应停药。' },
    { effect: '胃肠不适', frequency: '不常见', note: '随餐服用或改为茶剂。' },
    { effect: '反常兴奋、失眠加重', frequency: '少见', note: '停药，少数人会出现与预期相反的反应。' },
    { effect: '长期大剂量后突然停药的反跳性失眠', frequency: '少见', note: '逐渐减量停用，不要骤然停药。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','入睡困难（多因素）','睡眠浅、易醒（非特异）','紧张不安（非特异）'],
    groups:['入睡困难','轮班或时差（研究场景）','停用苯二氮䓬类药物的过渡期（需医生指导）','无必须补充人群']
  },
  tests:[
    {name:'睡眠日记',sample:'自评',range:'按睡眠模式判读',note:'连续记录 2 周比单次问卷更有价值。'},
    {name:'肝功能（ALT、AST）',sample:'静脉血',range:'按实验室参考范围',note:'罕见肝损伤报告，长期使用时应监测。'},
    {name:'多导睡眠监测',sample:'睡眠实验室',range:'按睡眠分期判读',note:'用于排查睡眠呼吸暂停等继发原因。'}
  ],
  cautions:['与苯二氮䓬类、唑吡坦、巴比妥类等镇静药或酒精合用可能过度镇静和呼吸抑制','服药后不要驾车或操作机械','罕见肝损伤报告，出现乏力、黄疸应停用','围手术期提前 2 周停用','孕期、哺乳期和 12 岁以下儿童数据不足'],
  special:[
    {who:'正在服用镇静催眠药',what:'合用前咨询医生，避免叠加导致呼吸抑制和跌倒。'},
    {who:'围手术期',what:'术前 2 周停用，麻醉前告知医生正在使用。'},
    {who:'肝功能不全',what:'慎用，罕见肝损伤报告，需监测肝酶。'},
    {who:'出现意识模糊或肝损伤信号',what:'呼吸变慢、叫不醒，尤其合用酒精或镇静药时，应立即急诊就医；尿色加深、皮肤黄染应停药并查肝功能。'}
  ],
  refs:[
    {text:'European Medicines Agency. Community herbal monograph on Valeriana officinalis L., radix. EMA/HMPC, 2006.',kind:'指南'},
    {text:'Bent S, Padula A, Moore D, et al. Valerian for sleep: a systematic review and meta-analysis. Am J Med. 2006;119(12):1005-1012.',kind:'综述'},
    {text:'Stevinson C, Ernst E. Valerian for insomnia: a systematic review of randomized clinical trials. Sleep Med. 2000;1(2):91-99.',kind:'综述'},
  ],
  related:['magnesium','melatonin','b6','vitamin-d']
},
{
  id:'milk-thistle',
  name:'水飞蓟',
  en:'Milk thistle (Silybum marianum)',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:200,high:800,step:50},
  tagline:'水飞蓟素是保肝产品的常客，但对肝病硬终点的证据并不支持。',
  intro:[
    '水飞蓟的活性成分是种子中的水飞蓟素（silymarin），为多种黄酮木脂素的混合物，其中水飞蓟宾（silybin）含量最高。传统用于保护肝脏，机制涉及抗氧化、稳定肝细胞膜和抑制炎症。',
    '临床研究集中在酒精性肝病、病毒性肝炎和药物性肝损伤，Cochrane 系统综述未发现对死亡率或肝纤维化有明确获益。标准化提取物通常含水飞蓟素 70–80%，普通种子粉和磷脂复合物的吸收差异很大，不能按同一剂量比较。'
  ],
  roles:['抗氧化（体外研究）','稳定肝细胞膜（机制）','可能改善肝酶（证据弱且不一致）','传统保肝用途'],
  intake:{
    main:'200–800 mg/天，分次',
    mainLabel:'水飞蓟素研究剂量',
    groups:[
      {label:'肝病研究',value:'200–800 mg/天，分 2–3 次'},
      {label:'常见规格',value:'水飞蓟素 70–80%'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'剂量按水飞蓟素含量计算，而不是种子粉重量。水飞蓟宾磷脂复合物的吸收高于普通水飞蓟素。'
  },
  timing:'随餐，分 2–3 次',
  withFood:'随餐',
  forms:[
    {name:'标准化水飞蓟素',bio:'低中',timing:'随餐，分次',food:'随餐',dose:'200–800 mg/天',grade:'B',note:'研究最常用，需标示水飞蓟素含量。'},
    {name:'水飞蓟宾磷脂复合物',bio:'中高',timing:'随餐',food:'随餐',dose:'120–360 mg/天',grade:'C',note:'吸收更好，但硬终点证据仍不足。'},
    {name:'水飞蓟种子粉 / 茶',bio:'低',timing:'随餐',food:'随餐',dose:'无法标准化',grade:'C',note:'水飞蓟素含量低，不能替代标准化提取物。'}
  ],
  foods:[
    {name:'水飞蓟籽',amount:'—',per:'—',note:'药用，不作日常食物；需提取后使用'},
    {name:'水飞蓟茶',amount:'—',per:'一杯',note:'药用，不作日常食物；有效成分溶出有限'},
    {name:'朝鲜蓟',amount:'—',per:'—',note:'近缘植物，不含水飞蓟素，不能替代本品'}
  ],
  sideEffects:[
    { effect: '胃肠不适、恶心', frequency: '常见', note: '随餐服用并减量，症状持续应停药。' },
    { effect: '腹泻、稀便', frequency: '不常见', note: '减量或分次随餐服用，持续腹泻应停药。' },
    { effect: '过敏反应（皮疹、瘙痒）', frequency: '少见', note: '菊科植物过敏者风险更高，出现呼吸困难应急诊就医。' },
    { effect: '头痛', frequency: '少见', note: '减量观察，持续不缓解应停药。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','肝酶升高（多因素）','脂肪肝（需生活方式干预）','消化不良（传统使用）'],
    groups:['酒精性肝病（研究场景）','非酒精性脂肪肝','长期饮酒','无必须补充人群']
  },
  tests:[
    {name:'肝功能（ALT、AST、GGT）',sample:'静脉血',range:'按实验室参考范围',note:'评价肝脏炎症，不能单凭肝酶判断补充剂效果。'},
    {name:'腹部超声 / 肝脏弹性',sample:'影像学',range:'按临床判读',note:'评估脂肪肝和纤维化程度。'},
    {name:'INR',sample:'静脉血',range:'按临床目标范围',note:'合用华法林时需要监测。'}
  ],
  cautions:['可能抑制 CYP2C9 和 UGT，影响华法林、苯妥英、地西泮等药物浓度','菊科植物过敏者可能出现皮疹、呼吸困难','可能降低血糖，与降糖药合用需监测','围手术期提前 2 周停用','孕期和哺乳期安全性数据不足'],
  special:[
    {who:'正在服用华法林',what:'合用前咨询医生，监测 INR。'},
    {who:'菊科过敏',what:'避免使用，出现皮疹或呼吸困难立即停药。'},
    {who:'肝病活动期',what:'不能替代病因治疗和专科随访，使用前告知医生。'},
    {who:'肝病症状加重',what:'出现意识模糊、腹胀、下肢水肿或呕血，提示肝功能失代偿，应立即到急诊或肝病科就医。'}
  ],
  refs:[
    {text:'European Medicines Agency. Community herbal monograph on Silybum marianum (L.) Gaertn., fructus. EMA/HMPC, 2018.',kind:'指南'},
    {text:'Rambaldi A, Jacobs BP, Iaquinto G, Gluud C. Milk thistle for alcoholic and/or hepatitis B or C virus liver diseases. Cochrane Database Syst Rev. 2007;(4):CD003620.',kind:'综述'},
    {text:'Loguercio C, Festi D. Silybin and the liver: from basic research to clinical practice. World J Gastroenterol. 2011;17(18):2288-2301.',kind:'综述'},
  ],
  related:['vitamin-e','zinc','b12','magnesium']
},
{
  id:'saw-palmetto',
  name:'锯棕榈',
  en:'Saw palmetto (Serenoa repens)',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:320,high:960,step:80},
  tagline:'良性前列腺增生的常用草药；症状改善与安慰剂差异很小。',
  intro:[
    '锯棕榈是棕榈科植物 Serenoa repens 的果实，活性成分是脂肪酸和植物甾醇。它被广泛用于良性前列腺增生（BPH）引起的排尿症状，机制可能涉及抑制 5α-还原酶，但人体证据不足以支持其强效。',
    'Cochrane 系统综述显示，与安慰剂相比，锯棕榈对夜尿、尿流率和前列腺体积的改善没有明确优势。标准化提取物通常含 85–95% 脂肪酸和甾醇；不同提取工艺（超临界 CO₂、乙醇提取）的成分谱不同，不能直接比较。'
  ],
  roles:['改善下尿路症状（证据弱，与安慰剂差异小）','抑制 5α-还原酶（机制研究）','抗炎（体外研究）','传统用于前列腺健康'],
  intake:{
    main:'320–960 mg/天',
    mainLabel:'标准化提取物研究剂量',
    groups:[
      {label:'BPH 研究',value:'320 mg/天，部分研究用至 960 mg'},
      {label:'常见规格',value:'脂肪酸和甾醇 85–95%'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'按脂肪酸和甾醇含量判断产品。症状持续或加重时应先排除前列腺癌和尿路梗阻。'
  },
  timing:'随餐，可分次',
  withFood:'随餐',
  forms:[
    {name:'标准化锯棕榈果提取物',bio:'中',timing:'随餐',food:'随餐',dose:'320–960 mg/天',grade:'B',note:'研究最常用，需标示脂肪酸含量。'},
    {name:'超临界 CO₂ 提取物',bio:'中',timing:'随餐',food:'随餐',dose:'320 mg/天',grade:'C',note:'脂溶性成分更集中，但临床数据少于乙醇提取物。'},
    {name:'锯棕榈果粉',bio:'低',timing:'随餐',food:'随餐',dose:'1–2 g/天',grade:'C',note:'活性成分含量不稳定。'}
  ],
  foods:[
    {name:'锯棕榈果',amount:'—',per:'—',note:'药用，不作日常食物；主要作为提取物原料'},
    {name:'锯棕榈果粉',amount:'—',per:'—',note:'药用，不作日常食物'},
    {name:'前列腺保健复方',amount:'成分不一',per:'一份',note:'常与荨麻根、番茄红素复配'}
  ],
  sideEffects:[
    { effect: '胃肠不适、恶心', frequency: '常见', note: '随餐服用并减量，症状持续应停药。' },
    { effect: '头痛', frequency: '不常见', note: '减量观察，持续不缓解应停药。' },
    { effect: '出血倾向增加', frequency: '少见', note: '合用抗凝抗血小板药时监测 INR，注意瘀斑和黑便。' },
    { effect: '肝功能异常', frequency: '少见', note: '有个案报告肝炎，出现尿黄、乏力应停药并查肝功能。' },
    { effect: '血压变化', frequency: '少见', note: '合用降压药时监测血压。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','夜尿增多（需先排查病因）','尿流变细、排尿不尽（多因素）','下腹不适（非特异）'],
    groups:['良性前列腺增生（研究场景）','中老年男性','无必须补充人群']
  },
  tests:[
    {name:'PSA',sample:'静脉血',range:'按年龄参考范围',note:'锯棕榈可能轻度降低 PSA，解读时需告知医生正在使用。'},
    {name:'尿流率、残余尿',sample:'泌尿科检查',range:'按临床判读',note:'评价下尿路梗阻的客观指标。'},
    {name:'前列腺超声',sample:'影像学',range:'按临床判读',note:'评估前列腺体积和残余尿。'}
  ],
  cautions:['与华法林、阿司匹林等抗凝抗血小板药合用可能增加出血风险','具抗雄激素样作用，孕妇和育龄女性避免使用；围手术期提前 2 周停用','可能轻度降低 PSA，干扰前列腺癌筛查判读','可能引起血压变化，与降压药合用需监测','可能引起胃肠不适、头痛；罕见胰腺炎、肝炎个案报告'],
  special:[
    {who:'正在服用抗凝药',what:'合用前咨询医生，注意出血迹象。'},
    {who:'准备做前列腺癌筛查',what:'提前告知医生使用情况，PSA 结果需结合游离比值和影像判断。'},
    {who:'孕妇和儿童',what:'避免使用，缺乏安全性数据且有激素样作用。'},
    {who:'急性尿潴留或血尿',what:'突然完全排不出尿、下腹剧痛，或出现血尿、发热寒战，应立即到泌尿外科或急诊就医，不要等待补充剂起效。'}
  ],
  refs:[
    {text:'European Medicines Agency. Community herbal monograph on Serenoa repens (W. Bartram) Small, fructus. EMA/HMPC, 2015.',kind:'指南'},
    {text:'Tacklind J, Macdonald R, Rutks I, et al. Serenoa repens for benign prostatic hyperplasia. Cochrane Database Syst Rev. 2012;12:CD001423.',kind:'综述'},
    {text:'Barry MJ, Meleth S, Lee JY, et al. Effect of increasing doses of saw palmetto extract on lower urinary tract symptoms: a randomized trial. JAMA. 2011;306(12):1344-1351.',kind:'研究'},
    {text:'American Urological Association. Management of Benign Prostatic Hyperplasia (BPH) Guideline.',url:'https://www.auanet.org/guidelines-and-quality/guidelines/benign-prostatic-hyperplasia-(bph)-guideline',kind:'指南'},
  ],
  related:['zinc','phytosterols','vitamin-d','selenium']
},
{
  id:'garlic',
  name:'大蒜提取物',
  en:'Garlic extract',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:300,high:1200,step:100},
  tagline:'降压证据温和；真正需要注意的是抗凝药和部分 HIV 药物。',
  intro:[
    '大蒜的活性成分是蒜氨酸，被压碎后经蒜氨酸酶转化为大蒜素（allicin），后者不稳定，进一步生成硫化物。陈化大蒜提取物（AGE）则以 S-烯丙基半胱氨酸等水溶性成分为主，与生蒜的成分谱不同。',
    '研究显示大蒜对高血压患者的收缩压有轻度降低作用（约 5–8 mmHg），对血脂的影响较小且不一致。产品的“大蒜素产出量”或“SAC 含量”差异很大，大蒜粉、蒜油和 AGE 不能按同一剂量互换。'
  ],
  roles:['轻度降低血压（证据中等偏弱）','可能改善血脂（证据不一致）','抗菌（体外研究）','抗氧化（体外研究）','传统用于心血管保健'],
  intake:{
    main:'300–1200 mg/天',
    mainLabel:'提取物研究剂量',
    groups:[
      {label:'血压研究',value:'AGE 600–1200 mg/天'},
      {label:'大蒜粉片',value:'600–900 mg/天，相当于大蒜素 4.5–10 mg'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'不同剂型的活性成分不同：AGE 看 SAC，大蒜粉看大蒜素产出量。不能只比较片剂的毫克数。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'陈化大蒜提取物（AGE）',bio:'中',timing:'随餐',food:'随餐',dose:'600–1200 mg/天',grade:'B',note:'研究较多，气味较小，以 SAC 为标示成分。'},
    {name:'大蒜粉片',bio:'中',timing:'随餐',food:'随餐',dose:'600–900 mg/天',grade:'B',note:'需标示大蒜素产出量，否则难以判断质量。'},
    {name:'大蒜油（含大蒜素）',bio:'中',timing:'随餐',food:'随餐',dose:'按大蒜素标示',grade:'C',note:'刺激性较强，研究少于AGE。'},
    {name:'生蒜',bio:'中',timing:'随餐',food:'随餐',dose:'1–2 瓣/天',grade:'C',note:'压碎后静置 10 分钟再食用有利于大蒜素生成。'}
  ],
  foods:[
    {name:'生蒜',amount:'约 2–5 mg 大蒜素',per:'1 瓣（3 g）',note:'压碎后静置再烹调'},
    {name:'大蒜粉',amount:'浓度较高',per:'100 g',note:'烹调后活性成分下降'},
    {name:'黑蒜',amount:'SAC 含量较高',per:'100 g',note:'发酵加工品，糖分也不低'}
  ],
  sideEffects:[
    { effect: '胃肠刺激、烧心、腹痛', frequency: '常见', note: '随餐服用；胃食管反流或消化性溃疡者减量或停用。' },
    { effect: '口臭、体味', frequency: '常见', note: '改用陈化大蒜提取物可减轻。' },
    { effect: '出血倾向增加', frequency: '不常见', note: '合用抗凝抗血小板药时监测 INR，术前按医嘱停用。' },
    { effect: '皮疹、接触性皮炎', frequency: '少见', note: '停药；外用生蒜可造成皮肤灼伤。' },
    { effect: '血压偏低、头晕', frequency: '少见', note: '合用降压药时监测血压，起身头晕明显应减量。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','血压偏高（多因素）','血脂异常（多因素）','免疫力低下（非特异）'],
    groups:['高血压（研究场景）','高血脂','无必须补充人群']
  },
  tests:[
    {name:'血压监测',sample:'诊室或家庭血压',range:'按临床标准',note:'评价降压效果最直接。'},
    {name:'INR',sample:'静脉血',range:'按抗凝目标范围',note:'合用华法林等抗凝药时必须监测。'},
    {name:'血脂四项',sample:'静脉血',range:'按实验室参考范围',note:'大蒜对血脂的影响较小，不能替代他汀。'}
  ],
  cautions:['与华法林、阿司匹林、氯吡格雷合用可能增加出血风险','可能降低沙奎那韦等 HIV 蛋白酶抑制剂的血药浓度','胃肠不适、口臭、体味常见','围手术期提前 7–10 天停用','孕期高剂量安全性数据不足'],
  special:[
    {who:'正在服用抗凝药',what:'合用前咨询医生，监测 INR 和出血迹象。'},
    {who:'HIV 感染者',what:'可能降低部分抗逆转录病毒药物浓度，合用前必须咨询专科医生。'},
    {who:'围手术期',what:'术前 7–10 天停用，减少术中出血。'},
    {who:'出现出血或严重胃肠反应',what:'黑便、呕血、不明原因瘀斑，或持续剧烈腹痛，应停药并急诊就医。'}
  ],
  refs:[
    {text:'European Medicines Agency. Community herbal monograph on Allium sativum L., bulbus. EMA/HMPC, 2015.',kind:'指南'},
    {text:'Ried K. Garlic Lowers Blood Pressure in Hypertensive Individuals, Regulates Serum Lipids, and Increases Peripheral and Capillary Red Blood Cell Velocities. J Nutr. 2016;146(2):389-395.',kind:'研究'},
    {text:'Jepson RG, Kleijnen J, Leng GC. Garlic for peripheral arterial occlusive disease. Cochrane Database Syst Rev. 2013;(4):CD000095.',kind:'综述'},
    {text:'National Center for Complementary and Integrative Health. Garlic: What You Need To Know.',url:'https://www.nccih.nih.gov/health/garlic',kind:'机构'},
  ],
  related:['coq10','epa','phytosterols','magnesium']
},
{
  id:'cranberry',
  name:'蔓越莓',
  en:'Cranberry',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:250,high:500,step:50},
  tagline:'预防复发性尿路感染有一定证据，但剂量要看原花青素而不是果汁体积。',
  intro:[
    '蔓越莓是杜鹃花科植物的果实，活性成分主要是 A 型原花青素（PACs），可以阻止大肠杆菌黏附在尿路上皮。果汁、果干和提取物都能提供 PACs，但含量差别很大。',
    'Cochrane 系统综述认为，蔓越莓制品可能降低女性复发性尿路感染的风险，对儿童和部分易感人群也可能有帮助，但整体证据质量不高，效果不如预防性抗生素。产品应按 36 mg PACs 左右标示，而不是只写“蔓越莓提取物”。'
  ],
  roles:['抑制细菌黏附尿路上皮（机制）','可能减少复发性尿路感染（证据中等偏弱）','提供维生素 C 和多酚','抗氧化（体外研究）'],
  intake:{
    main:'250–500 mg/天（提取物）',
    mainLabel:'按 PACs 计算',
    groups:[
      {label:'UTI 预防研究',value:'36 mg PACs/天'},
      {label:'常见提取物',value:'250–500 mg/天，标示 PACs 含量'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'不同产品的 PACs 含量差异很大。果汁含糖高，不能靠大量饮用达到研究剂量。'
  },
  timing:'任意时间',
  withFood:'任意',
  forms:[
    {name:'蔓越莓提取物胶囊',bio:'中',timing:'任意',food:'任意',dose:'250–500 mg/天（约 36 mg PACs）',grade:'B',note:'研究最常用，需标示 PACs 含量。'},
    {name:'蔓越莓汁',bio:'中',timing:'任意',food:'任意',dose:'240–300 ml/天',grade:'C',note:'含糖量高，市售果汁常稀释。'},
    {name:'蔓越莓果干',bio:'低中',timing:'任意',food:'任意',dose:'30–50 g/天',grade:'C',note:'糖分高，PACs 含量低于提取物。'}
  ],
  foods:[
    {name:'蔓越莓汁',amount:'PACs 因产品而异',per:'250 ml',note:'注意添加糖'},
    {name:'蔓越莓干',amount:'含 PACs',per:'30 g',note:'糖分较高'},
    {name:'新鲜蔓越莓',amount:'含 PACs',per:'100 g',note:'口感很酸，较少直接食用'}
  ],
  sideEffects:[
    { effect: '胃肠不适、腹泻', frequency: '常见', note: '减量并随餐服用；果汁含糖高，容易加重。' },
    { effect: '肾结石风险增加（草酸钙）', frequency: '不常见', note: '结石史者避免高剂量提取物，保证饮水。' },
    { effect: '出血倾向（INR 升高）', frequency: '少见', note: '合用华法林时监测 INR，注意瘀斑和黑便。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药观察；面唇肿胀或呼吸困难按严重过敏急诊处理。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','反复尿路感染（多因素）','尿路感染易感（需明确病因）'],
    groups:['复发性尿路感染女性','儿童（研究场景）','留置导尿或失能老人（证据有限）','无必须补充人群']
  },
  tests:[
    {name:'尿常规、尿培养',sample:'尿液',range:'按实验室判读',note:'怀疑尿路感染时应先做培养，而不是自行用蔓越莓“治疗”。'},
    {name:'INR',sample:'静脉血',range:'按抗凝目标范围',note:'合用华法林时需要监测。'},
    {name:'泌尿系超声',sample:'影像学',range:'按临床判读',note:'反复感染时用于排查结构异常。'}
  ],
  cautions:['可能增强华法林作用，个案报告 INR 升高，合用需监测','含草酸，草酸钙结石患者慎用','果汁含糖高，糖尿病患者注意','围手术期提前 1–2 周停用','孕期和哺乳期适量食用通常安全，高剂量补充剂数据不足'],
  special:[
    {who:'正在服用华法林',what:'合用前咨询医生，监测 INR。'},
    {who:'草酸钙结石',what:'避免高剂量提取物，果汁也要限量。'},
    {who:'反复尿路感染',what:'蔓越莓不能替代尿培养和规范抗感染治疗，症状持续应就医。'},
    {who:'发热、腰痛或寒战',what:'提示上尿路感染（肾盂肾炎），应立即到急诊或泌尿外科就医，不能继续自行用蔓越莓。'}
  ],
  refs:[
    {text:'European Medicines Agency. Community herbal monograph on Vaccinium macrocarpon Aiton, fructus. EMA/HMPC, 2015.',kind:'指南'},
    {text:'Williams G, Stothart CI, Hahn D, et al. Cranberries for preventing urinary tract infections. Cochrane Database Syst Rev. 2023;11:CD001321.',kind:'综述'},
    {text:'Luís Â, Domingues F, Pereira L. Can cranberries contribute to reduce the incidence of urinary tract infections? A systematic review with meta-analysis and trial sequential analysis of clinical trials. J Urol. 2017;198(3):614-621. doi:10.1016/j.juro.2017.03.078',kind:'研究'}
  ],
  related:['vitamin-c','probiotics','zinc','potassium']
},
{
  id:'elderberry',
  name:'接骨木莓',
  en:'Elderberry (Sambucus nigra)',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:300,high:900,step:100},
  tagline:'感冒季的热门产品，研究规模小；生果和茎叶有毒，必须加热处理。',
  intro:[
    '接骨木莓是接骨木的成熟果实，富含花青素和多酚。传统用于感冒和流感，体外研究显示提取物可能抑制部分病毒的血凝素活性，但这是机制层面的证据。',
    '小型随机试验提示，在感冒早期使用接骨木莓糖浆或提取物可能缩短症状持续时间，但研究数量少、样本小、配方不统一，Cochrane 综述认为证据不足。多数提取物未标准化，不同产品的花青素含量和多糖组成差异很大。'
  ],
  roles:['提供花青素和多酚','可能缩短上呼吸道感染症状（证据弱）','抗氧化（体外研究）','传统用于感冒和流感'],
  intake:{
    main:'300–900 mg/天',
    mainLabel:'提取物研究剂量',
    groups:[
      {label:'感冒研究',value:'300–900 mg/天，症状早期使用'},
      {label:'糖浆',value:'15 ml，每日 3–4 次（按产品标示）'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'不同提取物和糖浆无法按同一剂量换算。糖浆含糖量高，儿童使用需注意。'
  },
  timing:'症状早期，分次',
  withFood:'随餐',
  forms:[
    {name:'接骨木莓提取物胶囊',bio:'中',timing:'随餐，分次',food:'随餐',dose:'300–900 mg/天',grade:'B',note:'研究较常用，需确认原料为成熟果实。'},
    {name:'接骨木莓糖浆',bio:'中',timing:'随餐',food:'随餐',dose:'15 ml，每日 3–4 次',grade:'C',note:'含糖高，儿童剂量需按产品说明。'},
    {name:'接骨木莓含片',bio:'中',timing:'按需',food:'任意',dose:'按产品标示',grade:'C',note:'局部作用为主，证据有限。'}
  ],
  foods:[
    {name:'接骨木莓汁',amount:'按产品标示',per:'100 ml',note:'必须加热处理，生果汁可能含氰苷'},
    {name:'接骨木莓果酱',amount:'按配方',per:'100 g',note:'糖分高，加热后安全性提高'},
    {name:'新鲜接骨木莓',amount:'不可生食',per:'100 g',note:'未成熟果实和茎叶有毒'}
  ],
  sideEffects:[
    { effect: '胃肠不适、恶心、腹泻', frequency: '常见', note: '减量并随餐服用；糖浆含糖高可能加重。' },
    { effect: '过敏反应（皮疹、瘙痒）', frequency: '少见', note: '停药；面唇肿胀、喘息应急诊就医。' },
    { effect: '生果或茎叶误食后恶心、呕吐、头晕', frequency: '少见', note: '含氰苷，应立即急诊就医，不要自行催吐。' },
    { effect: '糖浆引起血糖升高', frequency: '不常见', note: '糖尿病患者选无糖提取物并监测血糖。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','反复上呼吸道感染（多因素）','感冒症状（非特异）'],
    groups:['感冒高发季节人群（研究场景）','老年人','儿童（需按年龄和产品）','无必须补充人群']
  },
  tests:[
    {name:'症状记录',sample:'自评',range:'—',note:'记录症状持续天数比“感觉好一点”更有意义。'},
    {name:'血常规、CRP',sample:'静脉血',range:'按实验室参考范围',note:'用于判断感染类型和严重程度，不评价接骨木莓疗效。'},
    {name:'肝功能',sample:'静脉血',range:'按实验室参考范围',note:'长期高剂量使用的安全性监测。'}
  ],
  cautions:['生果、未成熟果实和茎叶含氰苷，不可生食或自制生果汁','可能增强免疫反应，自身免疫病和使用免疫抑制剂者慎用','糖浆含糖高，糖尿病患者和幼儿注意','孕期、哺乳期安全性数据不足','围手术期提前 2 周停用'],
  special:[
    {who:'自身免疫病',what:'可能刺激免疫系统，使用前咨询医生。'},
    {who:'儿童',what:'选择正规产品并按年龄剂量，不要自行用生果制作。'},
    {who:'糖尿病患者',what:'糖浆含糖量高，优先选择无糖提取物。'},
    {who:'呼吸困难或高热不退',what:'皮疹、面唇肿胀、喘息，或高热超过 3 天伴气促、精神差，应立即到急诊或呼吸科就医，不要用接骨木莓替代抗感染治疗。'}
  ],
  refs:[
    {text:'Zakay-Rones Z, Thom E, Wollan T, Wadstein J. Randomized study of the efficacy and safety of oral elderberry extract in the treatment of influenza A and B virus infections. J Int Med Res. 2004;32(2):132-140.',kind:'研究'},
    {text:'Hawkins J, Baker C, Cherry L, Dunne E. Black elderberry (Sambucus nigra) supplementation effectively treats upper respiratory symptoms: A meta-analysis of randomized, controlled clinical trials. Complement Ther Med. 2019;42:361-365.',kind:'综述'},
    {text:'Tiralongo E, Wee SS, Lea RA. Elderberry Supplementation Reduces Cold Duration and Symptoms in Air-Travellers: A Randomized, Double-Blind Placebo-Controlled Clinical Trial. Nutrients. 2016;8(4):182.',kind:'研究'},
    {text:'National Center for Complementary and Integrative Health. Elderberry: What You Need To Know.',url:'https://www.nccih.nih.gov/health/elderberry',kind:'机构'},
  ],
  related:['vitamin-c','zinc','vitamin-d','probiotics']
},
{
  id:'tart-cherry',
  name:'酸樱桃',
  en:'Tart cherry',
  category:'botanical',
  scoring:{unit:'ml',rni:null,ul:null,low:30,high:60,step:5},
  tagline:'浓缩汁用于运动和睡眠研究；证据温和，糖分和药物相互作用要一起看。',
  intro:[
    '酸樱桃（Montmorency 等品种）富含花青素，也含有少量褪黑素和色氨酸。研究多使用浓缩汁，关注运动后恢复、肌肉酸痛和睡眠质量。',
    '小型试验显示酸樱桃汁可能减轻延迟性肌肉酸痛、改善主观睡眠，但样本小、结果不一致。浓缩汁、冻干粉和果汁的剂量不能直接换算；市售果汁常加糖，糖负荷本身会影响代谢结局。'
  ],
  roles:['提供花青素','可能减轻运动后肌肉酸痛（证据弱）','可能改善睡眠质量（小样本）','抗氧化（体外研究）'],
  intake:{
    main:'30–60 ml/天（浓缩汁）',
    mainLabel:'研究使用剂量',
    groups:[
      {label:'运动恢复研究',value:'30 ml 浓缩汁，每日 1–2 次'},
      {label:'睡眠研究',value:'30 ml 浓缩汁，早晚各 1 次'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'浓缩汁需按产品稀释说明使用。冻干粉和果汁的等效剂量没有统一换算标准。'
  },
  timing:'运动前后或睡前',
  withFood:'随餐或空腹',
  forms:[
    {name:'酸樱桃浓缩汁',bio:'中',timing:'运动前后或睡前',food:'任意',dose:'30–60 ml/天',grade:'B',note:'研究最常用，注意添加糖。'},
    {name:'酸樱桃冻干粉',bio:'中',timing:'任意',food:'任意',dose:'480–1000 mg/天',grade:'C',note:'便携，但临床数据少于浓缩汁。'},
    {name:'酸樱桃汁',bio:'中',timing:'任意',food:'任意',dose:'240–480 ml/天',grade:'C',note:'糖分和热量较高。'}
  ],
  foods:[
    {name:'酸樱桃浓缩汁',amount:'花青素丰富',per:'30 ml',note:'常需兑水'},
    {name:'酸樱桃干',amount:'糖分高',per:'30 g',note:'注意添加糖'},
    {name:'新鲜酸樱桃',amount:'花青素丰富',per:'100 g',note:'季节性强'}
  ],
  sideEffects:[
    { effect: '胃肠不适、腹泻', frequency: '不常见', note: '减量并随餐服用；浓缩汁稀释后饮用。' },
    { effect: '血糖升高', frequency: '不常见', note: '果汁和果干含糖高，糖尿病患者选无糖产品并监测血糖。' },
    { effect: '高钾血症风险', frequency: '少见', note: '肾功能不全者监测血钾，出现心悸、乏力应就医。' },
    { effect: '出血倾向（INR 升高）', frequency: '少见', note: '合用华法林时监测 INR，注意瘀斑和黑便。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','运动后肌肉酸痛（多因素）','入睡困难（非特异）'],
    groups:['耐力运动员（研究场景）','睡眠质量差','无必须补充人群']
  },
  tests:[
    {name:'肌酸激酶（CK）',sample:'静脉血',range:'按实验室参考范围',note:'研究中的肌肉损伤标志物，临床不常规用于评价酸樱桃。'},
    {name:'睡眠日记',sample:'自评',range:'按睡眠模式判读',note:'评价主观睡眠改善。'},
    {name:'INR',sample:'静脉血',range:'按抗凝目标范围',note:'合用华法林时需要监测。'}
  ],
  cautions:['个案报告提示可能影响 INR，与华法林合用需监测','体外研究提示可能抑制 CYP3A4，与治疗窗窄的药物合用需谨慎','果汁和果干含糖高，糖尿病患者注意；钾含量较高，肾功能不全者注意','可能引起胃肠不适','围手术期提前 1–2 周停用'],
  special:[
    {who:'正在服用华法林',what:'合用前咨询医生，监测 INR。'},
    {who:'糖尿病患者',what:'选择无糖浓缩汁或冻干粉，控制总量。'},
    {who:'肾功能不全',what:'注意钾负荷，避免大量饮用果汁。'},
    {who:'出现高钾或严重过敏症状',what:'心悸、乏力、肌肉麻木，或皮疹、呼吸困难，应停药并就医（肾功能不全者优先急诊）。'}
  ],
  refs:[
    {text:'Howatson G, McHugh MP, Hill JA, et al. Influence of tart cherry juice on indices of recovery following marathon running. Scand J Med Sci Sports. 2010;20(6):843-852.',kind:'研究'},
    {text:'Bell PG, Stevenson E, Davison GW, Howatson G. The effects of Montmorency tart cherry concentrate supplementation on recovery following prolonged, intermittent exercise. Nutrients. 2016;8(7):441.',kind:'研究'},
    {text:'Losso JN, Finley JW, Karki N, et al. Pilot Study of the Tart Cherry Juice for the Treatment of Insomnia and Investigation of Mechanisms. Am J Ther. 2018;25(2):e194-e201.',kind:'研究'},
  ],
  related:['melatonin','magnesium','coq10','epa']
},
{
  id:'beetroot',
  name:'甜菜根',
  en:'Beetroot',
  category:'botanical',
  scoring:{unit:'ml',rni:null,ul:null,low:70,high:140,step:10},
  tagline:'硝酸盐是主要活性成分；降压和运动表现获益温和，漱口水会削弱效果。',
  intro:[
    '甜菜根富含无机硝酸盐。口腔细菌把硝酸盐还原为亚硝酸盐，后者在体内生成一氧化氮，扩张血管、改善血流。因此甜菜根的作用更像“食物来源的硝酸盐”，而不是某种独特的植物多酚。',
    '研究显示浓缩甜菜根汁可以轻度降低血压（约 3–5 mmHg），对耐力运动表现有温和帮助，但结果受剂量、基线水平和测试方式影响。浓缩汁、粉剂和硝酸盐胶囊的硝酸盐含量差异很大，必须按硝酸盐剂量比较。'
  ],
  roles:['提供无机硝酸盐','生成一氧化氮，扩张血管（机制）','轻度降低血压（证据中等）','可能改善耐力运动表现（证据中等偏弱）'],
  intake:{
    main:'约 400–800 mg 硝酸盐/天',
    mainLabel:'相当于 70–140 ml 浓缩汁',
    groups:[
      {label:'血压研究',value:'硝酸盐 400–800 mg/天'},
      {label:'运动研究',value:'运动前 2–3 小时，硝酸盐 400–800 mg'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'剂量按硝酸盐含量计算。含抗菌成分的漱口水会杀灭口腔还原菌，明显削弱降压和运动效果。'
  },
  timing:'运动前 2–3 小时，或每日固定时间',
  withFood:'空腹或随餐',
  forms:[
    {name:'浓缩甜菜根汁',bio:'高',timing:'运动前 2–3 小时',food:'任意',dose:'70–140 ml/天',grade:'B',note:'研究最常用，需标示硝酸盐含量。'},
    {name:'甜菜根粉',bio:'中',timing:'任意',food:'任意',dose:'5–10 g/天',grade:'C',note:'硝酸盐含量因干燥工艺而异。'},
    {name:'硝酸盐标准化胶囊',bio:'高',timing:'运动前 2–3 小时',food:'任意',dose:'按硝酸盐标示',grade:'C',note:'剂量准确，但临床数据少于浓缩汁。'}
  ],
  foods:[
    {name:'甜菜根',amount:'约 150–300 mg 硝酸盐',per:'100 g',note:'烤制后含量略降'},
    {name:'甜菜汁',amount:'约 300–500 mg 硝酸盐',per:'250 ml',note:'糖分不低'},
    {name:'菠菜',amount:'约 200–300 mg 硝酸盐',per:'100 g',note:'硝酸盐含量受种植影响'},
    {name:'芝麻菜',amount:'约 200–400 mg 硝酸盐',per:'100 g',note:'含量较高'}
  ],
  sideEffects:[
    { effect: '红色尿液和粪便（甜菜尿）', frequency: '常见', note: '无害，停药后自行消失；持续血尿需与真性血尿鉴别。' },
    { effect: '胃肠不适、腹泻', frequency: '不常见', note: '减量并随餐服用。' },
    { effect: '低血压、头晕', frequency: '不常见', note: '合用降压药或 PDE5 抑制剂时监测血压，起身头晕应减量。' },
    { effect: '肾结石风险增加', frequency: '少见', note: '草酸钙结石者避免高剂量浓缩汁，保证饮水。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','血压偏高（多因素）','运动耐力下降（非特异）','膳食硝酸盐摄入不足'],
    groups:['高血压（研究场景）','耐力运动员（研究场景）','蔬果摄入少','无必须补充人群']
  },
  tests:[
    {name:'血压监测',sample:'诊室或家庭血压',range:'按临床标准',note:'评价降压效果最直接。'},
    {name:'尿硝酸盐 / 亚硝酸盐',sample:'尿液',range:'按实验室判读',note:'可反映依从性，但不用于诊断。'},
    {name:'肾功能、电解质',sample:'静脉血',range:'按实验室参考范围',note:'肾功能不全者需评估钾和硝酸盐负荷。'}
  ],
  cautions:['与降压药、PDE5 抑制剂合用可能叠加降压作用，导致头晕','草酸钙结石患者慎用，甜菜根含草酸；肾功能不全者注意钾负荷','可能出现无害的红色尿液和粪便（甜菜尿）','使用抗菌漱口水会削弱效果','孕期和哺乳期作为食物适量食用安全，高剂量补充剂数据不足'],
  special:[
    {who:'正在服用降压药',what:'从小剂量开始并监测血压，避免与硝酸酯类药物叠加。'},
    {who:'草酸钙结石',what:'避免高剂量浓缩汁，注意总草酸摄入。'},
    {who:'耐力运动员',what:'比赛前 2–3 小时使用，避免同日使用抗菌漱口水。'},
    {who:'出现明显头晕、晕厥或胸痛',what:'与降压药或硝酸酯类合用后站立不稳、眼前发黑，应停药并到急诊或心内科就医，警惕症状性低血压。'}
  ],
  refs:[
    {text:'Hoon MW, Johnson NA, Chapman PG, Burke LM. The Effect of Nitrate Supplementation on Exercise Performance in Healthy Individuals: A Systematic Review and Meta-Analysis. Int J Sport Nutr Exerc Metab. 2013;23(5):522-532.',kind:'综述'},
    {text:'Domínguez R, Cuenca E, Maté-Muñoz JL, et al. Effects of Beetroot Juice Supplementation on Cardiorespiratory Endurance in Athletes. A Systematic Review. Nutrients. 2017;9(1):43.',kind:'综述'},
    {text:'Kapil V, Milsom AB, Okorie M, et al. Inorganic nitrate supplementation improves blood pressure and endothelial function in healthy volunteers. Hypertension. 2010;56(2):274-281.',kind:'研究'},
  ],
  related:['epa','coq10','magnesium','potassium']
},
{
  id:'ginger',
  name:'生姜',
  en:'Ginger',
  category:'botanical',
  scoring:{unit:'mg',rni:null,ul:null,low:1000,high:3000,step:250},
  tagline:'缓解恶心的证据相对扎实；抗凝和围手术期是需要认真对待的部分。',
  intro:[
    '生姜的活性成分是姜辣素（gingerols）和姜烯酚（shogaols），干燥和加热会改变两者的比例。传统用于恶心、消化不良和痛经，现代研究最支持的场景是妊娠期和术后恶心。',
    '多项系统综述显示，生姜对轻中度恶心有一定缓解作用，效果温和。生姜粉、标准化提取物和鲜姜的姜辣素含量差异很大，不同产品不能只按“生姜多少毫克”比较。'
  ],
  roles:['缓解恶心（证据中等）','可能改善消化不良（证据弱）','抗炎（体外研究）','可能缓解痛经（证据弱）','传统用于恶心和胃肠不适'],
  intake:{
    main:'1000–3000 mg/天',
    mainLabel:'生姜粉研究剂量',
    groups:[
      {label:'恶心研究',value:'1000–2000 mg/天，分次'},
      {label:'痛经研究',value:'1000–2000 mg/天，经期前开始'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'按姜辣素含量判断标准化提取物。孕期使用应控制在食品和临床研究常用范围内，并告知产科医生。'
  },
  timing:'随餐，恶心时可按需',
  withFood:'随餐',
  forms:[
    {name:'生姜粉胶囊',bio:'中',timing:'随餐',food:'随餐',dose:'1000–2000 mg/天',grade:'B',note:'研究常用，需注意姜辣素含量。'},
    {name:'标准化生姜提取物',bio:'中',timing:'随餐',food:'随餐',dose:'500–1000 mg/天',grade:'B',note:'按姜辣素含量标示，剂量不能与姜粉直接互换。'},
    {name:'鲜姜 / 姜茶',bio:'中',timing:'随餐或按需',food:'任意',dose:'1–3 g 鲜姜/天',grade:'C',note:'传统用法，浓度不稳定。'},
    {name:'姜糖',bio:'低',timing:'按需',food:'任意',dose:'按产品标示',grade:'C',note:'糖分高，姜含量低'}
  ],
  foods:[
    {name:'鲜姜',amount:'约 1–3 g',per:'一份',note:'姜辣素含量受新鲜度影响'},
    {name:'姜粉',amount:'约 1–3 g',per:'一茶匙',note:'干燥后姜烯酚比例升高'},
    {name:'姜茶',amount:'少量',per:'一杯',note:'不能达到研究剂量'},
    {name:'姜糖',amount:'姜含量低',per:'100 g',note:'糖分较高'}
  ],
  sideEffects:[
    { effect: '胃灼热、反酸、上腹不适', frequency: '常见', note: '随餐服用并减量；反流或溃疡者停用。' },
    { effect: '胃肠胀气、腹泻', frequency: '不常见', note: '减量观察，持续腹泻应停药。' },
    { effect: '出血倾向增加', frequency: '少见', note: '合用抗凝抗血小板药时监测 INR，术前按医嘱停用。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药观察；面唇肿胀或呼吸困难按严重过敏急诊处理。' }
  ],
  deficiency:{
    signs:['无典型缺乏病','恶心（多因素）','消化不良（非特异）','痛经（多因素）'],
    groups:['孕期恶心（需医生指导）','术后恶心（临床场景）','晕动症','无必须补充人群']
  },
  tests:[
    {name:'症状记录',sample:'自评',range:'—',note:'恶心评分和发作次数比主观描述更可靠。'},
    {name:'INR',sample:'静脉血',range:'按抗凝目标范围',note:'合用华法林等抗凝药时需要监测。'},
    {name:'血糖',sample:'静脉血',range:'按临床标准',note:'与降糖药合用时注意低血糖。'}
  ],
  cautions:['与华法林、阿司匹林等抗凝抗血小板药合用可能增加出血风险','胆结石患者慎用，可能刺激胆汁分泌','胃食管反流、消化性溃疡患者可能加重烧心','围手术期提前 1–2 周停用','孕期高剂量（超过 3–4 g/天）安全性数据不足'],
  special:[
    {who:'孕期恶心',what:'可使用食品量级的生姜，但应告知产科医生，避免高剂量提取物。'},
    {who:'正在服用抗凝药',what:'合用前咨询医生，监测 INR 和出血迹象。'},
    {who:'围手术期',what:'术前 1–2 周停用，减少与抗凝和麻醉药物的叠加。'},
    {who:'出现出血或剧烈腹痛',what:'黑便、呕血、不明原因瘀斑，或右上腹绞痛（尤其胆结石者），应停药并急诊就医。'}
  ],
  refs:[
    {text:'European Medicines Agency. Community herbal monograph on Zingiber officinale Roscoe, rhizoma. EMA/HMPC, 2011.',kind:'指南'},
    {text:'Matthews A, Haas DM, O\'Mathúna DP, Dowswell T. Interventions for nausea and vomiting in early pregnancy. Cochrane Database Syst Rev. 2015;(9):CD000145.',kind:'综述'},
    {text:'Viljoen E, Visser J, Koen N, Musekiwa A. A systematic review and meta-analysis of the effect and safety of ginger in the treatment of pregnancy-associated nausea and vomiting. Nutr J. 2014;13:20.',kind:'综述'},
  ],
  related:['b6','magnesium','probiotics','vitamin-d']
}
);

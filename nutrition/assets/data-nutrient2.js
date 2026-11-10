window.SUPPLEMENT_DATA = window.SUPPLEMENT_DATA || [];
window.SUPPLEMENT_DATA.push(
{
  id:'ala-r',
  name:'R-硫辛酸',
  en:'R-Alpha-Lipoic Acid',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:300,high:600,step:50},
  tagline:'兼具水溶与脂溶性的抗氧化剂。R 型与消旋体不是同一剂量。',
  intro:[
    '硫辛酸是线粒体丙酮酸脱氢酶和 α-酮戊二酸脱氢酶的辅因子，也参与再生维生素 C、维生素 E 和谷胱甘肽。它同时具有水溶性和脂溶性，这一点在抗氧化剂中并不常见。',
    '市售产品分 R-硫辛酸与消旋 α-硫辛酸两种。人体内源形式是 R 型，消旋体含等量 R 型和 S 型，S 型几乎没有辅酶活性。糖尿病周围神经病变的静脉和口服研究多使用消旋体，把结论直接套到小剂量 R 型上并不合适。'
  ],
  roles:['线粒体能量代谢的辅因子','再生谷胱甘肽与维生素 C、E','改善胰岛素敏感性（证据中等）','减轻氧化应激','辅助改善糖尿病周围神经症状（研究用消旋体）'],
  intake:{
    main:'300–600 mg/天',
    mainLabel:'R-硫辛酸补充剂量',
    groups:[
      {label:'糖尿病神经病变研究',value:'消旋 α-硫辛酸 600 mg/天'},
      {label:'与餐关系',value:'空腹吸收较好，胃部不适者随餐'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'R 型的有效剂量通常按消旋体的一半估算，但缺少独立的剂量效应研究。随餐会降低吸收率，却也能减少胃部不适。'
  },
  timing:'空腹或餐前 30 分钟；胃部不适者随餐',
  withFood:'空腹或随餐',
  forms:[
    {name:'R-硫辛酸',bio:'中高',timing:'空腹或餐前 30 分钟',food:'空腹',dose:'300–600 mg/天',grade:'B',note:'人体内源形式，理论活性更高，但临床结局研究少于消旋体。'},
    {name:'消旋 α-硫辛酸',bio:'中',timing:'空腹或餐前 30 分钟',food:'空腹',dose:'600–1200 mg/天',grade:'A',note:'研究证据最多，糖尿病神经病变试验多用此形式。'},
    {name:'缓释硫辛酸',bio:'中',timing:'随餐',food:'随餐',dose:'300–600 mg/天',grade:'C',note:'宣称血药浓度更平稳，缺乏结局研究。'},
    {name:'S-硫辛酸',bio:'低',timing:'—',food:'—',dose:'不单独使用',grade:'C',note:'消旋体中的另一半，几乎无辅酶活性，不应单独购买。'}
  ],
  foods:[
    {name:'牛肝',amount:'约 1–3 mg',per:'100 g',note:'含量相对较高'},
    {name:'菠菜',amount:'约 0.5–1 mg',per:'100 g',note:'同时含叶酸'},
    {name:'西兰花',amount:'约 0.3–0.8 mg',per:'100 g',note:'焯水后草酸下降，同时提供叶酸'},
    {name:'红肉',amount:'约 0.2–0.5 mg',per:'100 g',note:'瘦肉为主，同时提供维生素 B1'},
    {name:'土豆',amount:'约 0.1–0.3 mg',per:'100 g',note:'带皮含量更高'}
  ],
  deficiency:{
    signs:['无明确的经典缺乏病','氧化应激指标升高（非特异）','糖尿病神经病变症状（多因素）','疲劳、乏力（非特异）'],
    groups:['糖尿病患者','长期高血糖','酗酒者','老年人','严重吸收不良']
  },
  tests:[
    {name:'空腹血糖与糖化血红蛋白',sample:'静脉血',range:'按糖尿病诊断与控糖目标',note:'补充期间用于监测低血糖风险，不是硫辛酸缺乏的诊断指标。'},
    {name:'肝功能',sample:'静脉血',range:'按实验室参考范围',note:'硫辛酸经肝脏代谢，肝病患者使用前应评估。'},
    {name:'血浆硫辛酸',sample:'静脉血',range:'无临床判读标准',note:'半衰期短，仅用于研究。'}
  ],
  cautions:['可能增强降糖药效果，与胰岛素或磺脲类合用需监测血糖','空腹服用易致恶心、胃部不适','少数人出现皮疹、瘙痒等过敏反应','酗酒者易缺乏，但补充不能替代戒酒','与甲状腺激素合用可能影响甲状腺功能，需监测'],
  special:[
    {who:'糖尿病患者',what:'可能降低血糖，开始补充时应更频繁监测，必要时由医生调整降糖药剂量。'},
    {who:'孕期与哺乳期',what:'安全性数据不足，除医生建议外不应常规使用。'},
    {who:'肝功能不全',what:'代谢可能受影响，使用前应咨询医生并监测肝功能。'},
    {who:'出现低血糖或过敏',what:'心慌、出汗、手抖、意识模糊时立即测血糖并就医；皮疹伴面唇肿胀、呼吸困难应停药并急诊。'}
  ],
  sideEffects:[
    {effect:'胃部不适、恶心',frequency:'常见',note:'空腹时更明显，改为随餐或减量；持续呕吐需停药就医。'},
    {effect:'低血糖（心慌、出汗、手抖）',frequency:'不常见',note:'与胰岛素或磺脲类合用风险更高，需监测血糖，必要时由医生调整降糖药。'},
    {effect:'皮疹、瘙痒',frequency:'少见',note:'停药观察，伴面唇肿胀或呼吸困难时立即急诊。'},
    {effect:'头痛、头晕',frequency:'不常见',note:'减量后观察，持续不缓解应就医并排查血压和血糖。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'中华医学会糖尿病学分会. 中国2型糖尿病防治指南（2020年版）. 中华糖尿病杂志. 2021;13(4):315-409.',kind:'指南'},
    {text:'Mijnhout GS, et al. Alpha lipoic acid for symptomatic peripheral neuropathy in patients with diabetes: a meta-analysis of randomized controlled trials. Int J Endocrinol. 2012;2012:456279.',kind:'综述'},
    {text:'Ziegler D, et al. Treatment of symptomatic diabetic polyneuropathy with the antioxidant alpha-lipoic acid: a 7-month multicenter randomized controlled trial (ALADIN III). Diabetes Care. 1999;22(8):1296-1301.',kind:'研究'},
  ],
  related:['ala','vitamin-c','vitamin-e','b1','magnesium']
},
{
  id:'nac',
  name:'N-乙酰半胱氨酸（NAC）',
  en:'N-Acetylcysteine',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:600,high:1800,step:100},
  tagline:'补半胱氨酸、拆痰液二硫键。与硝酸甘油同用要当心。',
  intro:[
    'NAC 是半胱氨酸的乙酰化衍生物，进入细胞后脱乙酰基成为半胱氨酸，是合成谷胱甘肽的限速前体。它的游离巯基还能打断痰液中糖蛋白的二硫键，因此被用作黏液溶解剂。',
    'NAC 在临床上的地位主要来自对乙酰氨基酚中毒的解毒治疗，以及慢性阻塞性肺疾病和支气管炎的祛痰治疗。作为“抗氧化补剂”长期口服的研究规模较小，对硬终点（住院、死亡）的影响并不明确。'
  ],
  roles:['提供谷胱甘肽合成所需的半胱氨酸','黏液溶解，降低痰液黏稠度','对乙酰氨基酚中毒的解毒剂','清除自由基','调节谷氨酸与多巴胺能系统（研究阶段）'],
  intake:{
    main:'600–1200 mg/天',
    mainLabel:'口服补充剂量',
    groups:[
      {label:'祛痰治疗',value:'600 mg/天，分 2–3 次'},
      {label:'对乙酰氨基酚中毒',value:'按体重静脉或口服方案，由医院执行'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'口服 NAC 的生物利用度低，约 6–10%，首过代谢明显。抗氧化目的的大剂量研究多在 1200–1800 mg/天，但长期安全性数据有限。'
  },
  timing:'空腹或餐前 30 分钟；胃部不适者随餐',
  withFood:'空腹或随餐',
  forms:[
    {name:'普通 N-乙酰半胱氨酸片',bio:'中低',timing:'空腹或餐前 30 分钟',food:'空腹',dose:'600–1200 mg/天，分次',grade:'A',note:'研究最充分，价格低，有特殊气味。'},
    {name:'泡腾片 / 颗粒剂',bio:'中低',timing:'空腹或餐前 30 分钟',food:'空腹',dose:'600 mg/天',grade:'B',note:'溶解后服用，胃肠道耐受性可能略好。'},
    {name:'缓释 NAC',bio:'中',timing:'随餐',food:'随餐',dose:'600–1200 mg/天',grade:'C',note:'宣称血药浓度更平稳，结局研究不足。'},
    {name:'雾化吸入 NAC',bio:'局部起效',timing:'医院内使用',food:'—',dose:'按医嘱',grade:'B',note:'哮喘患者可能诱发支气管痉挛，须在医疗监护下使用。'}
  ],
  foods:[
    {name:'鸡蛋',amount:'约 0.3–0.5 g 半胱氨酸',per:'100 g',note:'优质蛋白来源'},
    {name:'鸡肉',amount:'约 0.3–0.4 g 半胱氨酸',per:'100 g',note:'优质蛋白，含蛋氨酸可转化为半胱氨酸'},
    {name:'酸奶',amount:'约 0.1 g 半胱氨酸',per:'100 g',note:'同时提供乳蛋白'},
    {name:'大蒜',amount:'含硫化合物',per:'100 g',note:'提供含硫前体，不等于 NAC'},
    {name:'洋葱',amount:'含硫化合物',per:'100 g',note:'含硫代亚磺酸酯，不等于 NAC'}
  ],
  deficiency:{
    signs:['无经典缺乏病','慢性阻塞性肺疾病患者痰液黏稠','氧化应激指标升高（非特异）','对乙酰氨基酚过量时谷胱甘肽耗竭'],
    groups:['慢性阻塞性肺疾病','长期吸烟','老年人','营养不良','对乙酰氨基酚过量患者']
  },
  tests:[
    {name:'肝功能（ALT、AST、INR）',sample:'静脉血',range:'按实验室参考范围',note:'对乙酰氨基酚中毒时用于评估肝损伤和决定解毒疗程。'},
    {name:'血浆谷胱甘肽',sample:'静脉血',range:'无统一临床判读标准',note:'研究指标，不能指导常规补充。'},
    {name:'血药浓度（对乙酰氨基酚）',sample:'静脉血',range:'按中毒 nomogram 判读',note:'仅在疑似中毒时检测。'}
  ],
  cautions:['与硝酸甘油合用可能引起严重低血压和头痛，应避免同时使用','可能降低口服抗生素活性，历史上建议与四环素类、青霉素类间隔 2 小时','哮喘患者吸入 NAC 可诱发支气管痉挛','常见恶心、呕吐、腹泻和硫磺味口臭','大剂量可能延长凝血酶原时间，合用抗凝药需监测'],
  special:[
    {who:'正在使用硝酸甘油',what:'NAC 会增强硝酸酯类的血管扩张作用，可能导致严重低血压，禁止自行合用。'},
    {who:'哮喘患者',what:'口服通常耐受，但雾化吸入可能诱发支气管痉挛，必须在医疗监护下进行。'},
    {who:'孕期',what:'仅在医生指导下使用，对乙酰氨基酚中毒时按标准方案治疗，不应因妊娠延误解毒。'},
    {who:'出现支气管痉挛或严重过敏',what:'吸入后喘息、胸闷、呼吸困难应立即停药并急诊；口服后出现面唇肿胀、全身皮疹同样需就医。'}
  ],
  sideEffects:[
    {effect:'恶心、呕吐',frequency:'常见',note:'随餐或分次服用可减轻；持续呕吐无法进食需停药就医。'},
    {effect:'腹泻、腹痛',frequency:'不常见',note:'减量并观察，腹泻致脱水或便血时应就医。'},
    {effect:'支气管痉挛（雾化吸入时）',frequency:'不常见',note:'哮喘患者风险更高，出现喘息、胸闷立即停药并急诊。'},
    {effect:'头痛',frequency:'不常见',note:'多在用药初期出现，减量后可缓解；持续头痛应就医。'}
  ],
  refs:[
    {text:'中华医学会呼吸病学分会慢性阻塞性肺疾病学组. 慢性阻塞性肺疾病诊治指南（2021年修订版）. 中华结核和呼吸杂志. 2021;44(3):170-205.',kind:'指南'},
    {text:'Stey C, et al. The effect of oral N-acetylcysteine in chronic bronchitis: a quantitative systematic review. Eur Respir J. 2000;16(2):253-262.',kind:'综述'},
    {text:'Dodd S, et al. N-acetylcysteine for antioxidant therapy: pharmacology and clinical utility. Expert Opin Biol Ther. 2008;8(12):1955-1962.',kind:'综述'},
    {text:'Samuni Y, et al. The chemistry and biological activities of N-acetylcysteine. Biochim Biophys Acta. 2013;1830(8):4117-4129.',kind:'综述'},
  ],
  related:['ala','vitamin-c','selenium','b5','b6']
},
{
  id:'glutathione',
  name:'谷胱甘肽',
  en:'Glutathione',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:250,high:1000,step:50},
  tagline:'细胞内最重要的抗氧化剂。口服吸收差，还原型与氧化型要分清。',
  intro:[
    '谷胱甘肽是由谷氨酸、半胱氨酸和甘氨酸组成的三肽，在细胞内以毫摩尔浓度存在，是谷胱甘肽过氧化物酶的底物，也参与药物和毒物的结合代谢。还原型（GSH）是活性形式，两个 GSH 氧化后形成二硫键即为氧化型（GSSG）。',
    '口服谷胱甘肽的生物利用度很低，大部分在肠道被分解为氨基酸。市售的“脂质体谷胱甘肽”“还原型谷胱甘肽”宣称能提高吸收，但人体结局证据有限，不能外推为“抗衰老”或“美白”效果。静脉谷胱甘肽用于皮肤美白没有获批适应症。'
  ],
  roles:['细胞内主要抗氧化剂','谷胱甘肽过氧化物酶的底物','参与药物与毒物的结合解毒','维持氧化还原平衡','支持免疫细胞功能'],
  intake:{
    main:'250–500 mg/天',
    mainLabel:'口服补充剂量',
    groups:[
      {label:'脂质体谷胱甘肽',value:'250–500 mg/天'},
      {label:'静脉给药',value:'仅限医院适应症，不作为美白用途'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'口服吸收有限，剂量与血谷胱甘肽水平的关系不明确。提高细胞内谷胱甘肽更可靠的方式是补充 NAC 等前体，而不是口服谷胱甘肽本身。'
  },
  timing:'空腹或随餐均可',
  withFood:'任意',
  forms:[
    {name:'还原型谷胱甘肽（GSH）',bio:'低',timing:'空腹',food:'空腹',dose:'250–500 mg/天',grade:'C',note:'活性形式，但口服大部分被肠道分解，吸收有限。'},
    {name:'脂质体谷胱甘肽',bio:'中低',timing:'空腹',food:'空腹',dose:'250–500 mg/天',grade:'C',note:'理论上保护其不被分解，人体结局证据很少。'},
    {name:'氧化型谷胱甘肽（GSSG）',bio:'低',timing:'空腹',food:'空腹',dose:'按产品标示',grade:'C',note:'需在体内还原为 GSH 才起作用，证据比还原型更少。'},
    {name:'N-乙酰半胱氨酸（NAC）',bio:'中低',timing:'空腹或餐前 30 分钟',food:'空腹',dose:'600–1200 mg/天',grade:'B',note:'作为半胱氨酸前体间接提升谷胱甘肽，是更务实的选择。'}
  ],
  foods:[
    {name:'芦笋',amount:'含量较高',per:'100 g',note:'同时含叶酸'},
    {name:'牛油果',amount:'含量较高',per:'100 g',note:'同时富含维生素 E 和单不饱和脂肪'},
    {name:'菠菜',amount:'中等',per:'100 g',note:'同时提供叶酸和叶黄素'},
    {name:'西兰花',amount:'中等',per:'100 g',note:'含硫代葡萄糖苷'},
    {name:'牛肉',amount:'中等',per:'100 g',note:'同时提供半胱氨酸'}
  ],
  deficiency:{
    signs:['无经典缺乏病','氧化应激标志物升高（非特异）','肝功能异常时谷胱甘肽耗竭','溶血性贫血（罕见遗传性合成障碍）','疲劳、乏力（非特异）'],
    groups:['慢性肝病','严重营养不良','老年人','长期大量饮酒','氧化应激相关疾病患者']
  },
  tests:[
    {name:'全血谷胱甘肽',sample:'静脉血',range:'无统一临床判读标准',note:'研究指标，样本处理要求高，临床不常规使用。'},
    {name:'肝功能',sample:'静脉血',range:'按实验室参考范围',note:'肝病时谷胱甘肽储备下降，但肝功能不反映谷胱甘肽水平。'},
    {name:'红细胞 G6PD 活性',sample:'静脉血',range:'按实验室参考范围',note:'使用高剂量抗氧化剂前评估，溶血风险人群需先排除。'}
  ],
  cautions:['雾化吸入谷胱甘肽可诱发哮喘发作，哮喘患者应避免','静脉注射可能出现过敏反应、皮疹和呼吸困难','口服吸收差，高价产品未必带来相应收益','静脉谷胱甘肽用于皮肤美白缺乏批准适应症，存在感染和肾损伤风险','可能与化疗药物相互作用，肿瘤治疗期间需医生评估'],
  special:[
    {who:'哮喘患者',what:'避免雾化吸入谷胱甘肽，有支气管痉挛的病例报告。'},
    {who:'追求皮肤美白',what:'口服或静脉谷胱甘肽的美白证据有限且不持久，静脉给药有感染和肾损伤风险，不建议。'},
    {who:'孕期与哺乳期',what:'安全性数据不足，除医生建议外不应使用。'},
    {who:'出现过敏或哮喘发作',what:'皮疹、面唇肿胀、呼吸困难，或雾化后喘息、胸闷，应立即停药并急诊；静脉给药出现寒战、发热需立刻告知医护人员。'}
  ],
  sideEffects:[
    {effect:'腹胀、排气增多',frequency:'常见',note:'从小剂量开始，随餐服用；持续腹胀影响进食应减量。'},
    {effect:'恶心、腹泻',frequency:'不常见',note:'减量观察，腹泻致脱水或便血时应就医。'},
    {effect:'皮疹、瘙痒',frequency:'少见',note:'停药观察，伴面唇肿胀或呼吸困难需立即急诊。'},
    {effect:'雾化吸入诱发支气管痉挛',frequency:'少见',note:'哮喘患者避免吸入，出现喘息、胸闷立即停药并急诊。'}
  ],
  refs:[
    {text:'US Food and Drug Administration. Warning on injectable glutathione products for skin lightening.',kind:'机构'},
    {text:'Weschawalit S, et al. Glutathione and its antiaging and antimelanogenic effects. Clin Cosmet Investig Dermatol. 2017;10:147-153.',kind:'综述'},
    {text:'Forman HJ, et al. Glutathione: overview of its protective roles, measurement, and biosynthesis. Mol Aspects Med. 2009;30(1-2):1-12.',kind:'综述'},
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
  ],
  related:['ala','vitamin-c','vitamin-e','selenium','b2']
}
,
{
  id:'astaxanthin',
  name:'虾青素',
  en:'Astaxanthin',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:4,high:12,step:1},
  tagline:'类胡萝卜素家族里的强抗氧化剂，但人体结局证据有限。',
  intro:[
    '虾青素是一种酮式类胡萝卜素，赋予三文鱼、虾蟹和火烈鸟红色。它的分子两端都有羟基，可跨在细胞膜两侧清除自由基，体外抗氧化活性强于 β-胡萝卜素和叶黄素。',
    '人体研究大多只观察皮肤光老化、眼疲劳、运动恢复和血脂等替代终点，样本量小、周期短。它不能预防或治疗年龄相关性黄斑变性、心血管疾病或糖尿病，相关宣称缺乏结局证据。'
  ],
  roles:['清除自由基，抑制脂质过氧化','减轻紫外线相关的皮肤氧化损伤（有限）','参与眼部抗氧化（研究阶段）','可能改善运动后氧化应激','不转化为维生素 A'],
  intake:{
    main:'4–12 mg/天',
    mainLabel:'补充剂量',
    groups:[
      {label:'皮肤研究常用',value:'4–8 mg/天'},
      {label:'血脂研究常用',value:'12 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'虾青素是脂溶性色素，随含脂肪的餐食吸收明显提高。高于 12 mg/天的长期安全性数据不足。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'天然虾青素（雨生红球藻）',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'4–12 mg/天',grade:'B',note:'与三文鱼中的形式一致，研究多用此来源。'},
    {name:'合成虾青素',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'4–12 mg/天',grade:'C',note:'立体异构体组成与天然来源不同，证据较少。'},
    {name:'虾青素酯',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'4–12 mg/天',grade:'C',note:'藻类中常见形式，需在体内水解，吸收研究有限。'}
  ],
  foods:[
    {name:'三文鱼',amount:'约 1–4 mg',per:'100 g',note:'野生鱼含量更高'},
    {name:'虾',amount:'约 1–2 mg',per:'100 g',note:'主要在虾壳和头部'},
    {name:'蟹',amount:'约 1–3 mg',per:'100 g',note:'主要在蟹壳和蟹黄，可食部分较少'},
    {name:'雨生红球藻',amount:'约 1–4%',per:'藻粉干重',note:'补充剂主要原料'},
    {name:'磷虾油',amount:'约 0.1–0.5 mg',per:'1 g',note:'同时含 EPA/DHA'}
  ],
  deficiency:{
    signs:['无经典缺乏病','无确立的缺乏综合征','皮肤氧化损伤（非特异）','眼疲劳（非特异）'],
    groups:['很少吃深海鱼和甲壳类的人','老年人','吸烟者','紫外线暴露较多者']
  },
  tests:[
    {name:'血浆虾青素',sample:'静脉血',range:'无临床判读标准',note:'仅用于研究，反映近期摄入。'},
    {name:'血脂四项',sample:'静脉血',range:'按实验室参考范围',note:'虾青素可能轻微影响血脂，监测用，不用于诊断缺乏。'},
    {name:'皮肤氧化应激指标',sample:'皮肤活检或无创检测',range:'研究指标',note:'临床不常规使用。'}
  ],
  cautions:['人体结局证据有限，不能替代防晒或眼科治疗','可能轻度降低血压，与降压药合用需注意','高剂量可能影响男性激素水平，但证据不足','类胡萝卜素补充剂在吸烟者中的长期安全性需谨慎','随餐服用可提高吸收，空腹效果差'],
  special:[
    {who:'吸烟者',what:'高剂量类胡萝卜素在吸烟者中的研究曾出现不利信号，虽然虾青素数据有限，仍不建议大剂量长期使用。'},
    {who:'孕期与哺乳期',what:'安全性数据不足，优先通过食物摄入，补充剂需咨询医生。'},
    {who:'黄斑变性患者',what:'不能替代 AREDS2 配方或抗 VEGF 治疗，任何眼部症状应就医。'},
    {who:'出现过敏或血压异常',what:'皮疹、面唇肿胀、呼吸困难应停药并急诊；头晕、晕厥或血压明显下降应就医，正在服降压药者需调整剂量。'}
  ],
  sideEffects:[
    {effect:'胃肠不适、恶心',frequency:'不常见',note:'随含脂肪的正餐服用可减轻，持续不适需减量或停药。'},
    {effect:'皮肤或大便橙黄色',frequency:'不常见',note:'脂溶性色素沉积所致，停药后多可恢复；皮肤明显黄染需就医排除黄疸。'},
    {effect:'头痛',frequency:'少见',note:'减量观察，持续头痛应就医。'},
    {effect:'血压轻度下降',frequency:'少见',note:'与降压药合用需监测血压，出现头晕、晕厥应就医。'}
  ],
  refs:[
    {text:'NIH Office of Dietary Supplements. Dietary Supplements for Eye Conditions — Fact Sheet for Health Professionals.',kind:'机构'},
    {text:'Ambati RR, et al. Astaxanthin: sources, extraction, stability, biological activities and its commercial applications — a review. Mar Drugs. 2014;12(1):128-152.',kind:'综述'},
    {text:'Fassett RG, Coombes JS. Astaxanthin: a potential therapeutic agent in cardiovascular disease. Mar Drugs. 2011;9(3):447-465.',kind:'综述'},
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
  ],
  related:['vitamin-a','vitamin-e','vitamin-c','epa','dha']
},
{
  id:'lutein',
  name:'叶黄素与玉米黄质',
  en:'Lutein and Zeaxanthin',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:10,high:20,step:1},
  tagline:'黄斑色素的原料。AREDS2 的配方是 10 mg 叶黄素加 2 mg 玉米黄质。',
  intro:[
    '叶黄素和玉米黄质是两种羟基化类胡萝卜素，选择性沉积在视网膜黄斑区，构成黄斑色素，能过滤短波蓝光并清除光氧化产物。两者在血液和组织中不能互相转化，但作用互补。',
    'AREDS2 试验用叶黄素 10 mg 加玉米黄质 2 mg 替代 β-胡萝卜素，在部分亚组中显示延缓年龄相关性黄斑变性（AMD）进展。对健康人“预防近视”或“防蓝光”的宣称，缺乏结局证据。'
  ],
  roles:['构成黄斑色素，过滤蓝光','清除视网膜光氧化产物','降低 AMD 进展风险（特定人群）','可能改善视觉对比敏感度','抗氧化'],
  intake:{
    main:'10 mg 叶黄素 + 2 mg 玉米黄质',
    mainLabel:'AREDS2 配方剂量',
    groups:[
      {label:'一般补充',value:'6–10 mg/天'},
      {label:'AMD 高风险',value:'10 mg + 2 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'中国 DRIs 未制定叶黄素的 RNI 和 UL。膳食叶黄素摄入量与血浓度关系受个体差异和脂肪摄入影响。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'游离叶黄素',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'10 mg/天',grade:'A',note:'AREDS2 使用的形式，研究证据最充分。'},
    {name:'叶黄素酯',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'按叶黄素折算 10 mg/天',grade:'B',note:'需在体内水解，标签应标明实际叶黄素含量。'},
    {name:'玉米黄质',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'2 mg/天',grade:'A',note:'与叶黄素搭配使用，单用证据少。'},
    {name:'消旋玉米黄质（meso-zeaxanthin）',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'按配方',grade:'C',note:'部分产品添加，人体结局证据有限。'}
  ],
  foods:[
    {name:'菠菜（熟）',amount:'约 12–15 mg',per:'100 g',note:'叶黄素含量高'},
    {name:'羽衣甘蓝',amount:'约 15–20 mg',per:'100 g',note:'同时富含维生素 K'},
    {name:'玉米',amount:'约 1–2 mg',per:'100 g',note:'玉米黄质比例较高'},
    {name:'鸡蛋黄',amount:'约 0.2–0.5 mg',per:'100 g',note:'脂肪有利于吸收'},
    {name:'西兰花',amount:'约 1–2 mg',per:'100 g',note:'熟食吸收更好，同时提供维生素 C'}
  ],
  deficiency:{
    signs:['无经典缺乏病','黄斑色素密度偏低（检测指标）','AMD 进展风险升高（多因素）','视疲劳（非特异）'],
    groups:['AMD 患者及其一级亲属','很少吃深绿色蔬菜','老年人','吸收不良','长期高脂低蔬菜饮食']
  },
  tests:[
    {name:'黄斑色素光密度（MPOD）',sample:'视网膜成像',range:'研究与人群体检指标，无统一诊断阈值',note:'反映黄斑叶黄素和玉米黄质水平，临床不常规开展。'},
    {name:'血清叶黄素 / 玉米黄质',sample:'静脉血',range:'无统一临床判读标准',note:'受近期饮食影响，主要用于研究。'},
    {name:'眼底检查（OCT 等）',sample:'影像检查',range:'按眼科诊断标准',note:'用于诊断和随访 AMD，不反映营养素水平。'}
  ],
  cautions:['不能替代眼科治疗，AMD 患者应按眼科方案管理','吸烟者使用高剂量 β-胡萝卜素有害，选择不含 β-胡萝卜素的配方','叶黄素酯产品需按实际叶黄素含量折算剂量','皮肤可能轻度黄染，通常停用后恢复','与华法林等抗凝药无明确相互作用，但合并用药应告知医生'],
  special:[
    {who:'AMD 患者',what:'AREDS2 配方可作为辅助，但不能替代抗 VEGF 注射或定期眼科随访。'},
    {who:'吸烟者',what:'优先选择不含 β-胡萝卜素的叶黄素配方，避免重蹈 CARET 和 ATBC 试验中的不利信号。'},
    {who:'孕期与哺乳期',what:'通过深绿色蔬菜和蛋黄摄入即可，高剂量补充剂的安全性数据不足。'},
    {who:'皮肤明显发黄或视力骤降',what:'皮肤黄染需就医排除黄疸，挂消化内科或肝病科；视力突然下降、视物变形应尽快挂眼科。'}
  ],
  sideEffects:[
    {effect:'皮肤黄染（胡萝卜素血症）',frequency:'不常见',note:'长期高剂量时出现，停用后多可消退；需就医与黄疸鉴别。'},
    {effect:'胃肠不适、恶心',frequency:'不常见',note:'随含脂肪的正餐服用，持续不适需减量。'},
    {effect:'腹泻',frequency:'少见',note:'减量观察，腹泻致脱水时应就医。'},
    {effect:'大便颜色变黄',frequency:'少见',note:'多为未吸收的色素，停药后可恢复；伴腹痛、便血需就医。'}
  ],
  refs:[
    {text:'Age-Related Eye Disease Study 2 Research Group. Lutein + zeaxanthin and omega-3 fatty acids for age-related macular degeneration (AREDS2). JAMA. 2013;309(19):2005-2015.',kind:'研究'},
    {text:'NIH Office of Dietary Supplements. Dietary Supplements for Eye Conditions — Fact Sheet for Health Professionals.',kind:'机构'},
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Mares J. Lutein and zeaxanthin isomers in eye health and disease. Annu Rev Nutr. 2016;36:571-602.',kind:'综述'},
  ],
  related:['vitamin-a','vitamin-e','vitamin-c','zinc','dha']
},
{
  id:'lycopene',
  name:'番茄红素',
  en:'Lycopene',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:10,high:30,step:1},
  tagline:'番茄里的红色类胡萝卜素。前列腺癌预防的证据并不支持。',
  intro:[
    '番茄红素是开链类胡萝卜素，存在于番茄、西瓜、粉红葡萄柚等食物中，是血浆中含量最高的类胡萝卜素之一。它不能转化为维生素 A，主要作用是清除单线态氧。',
    '观察性研究曾提示番茄红素摄入与前列腺癌风险负相关，但大型干预试验和孟德尔随机化研究未能证实因果。关于心血管疾病和皮肤光保护的研究，多为小样本、仅看替代终点，不能外推为临床获益。'
  ],
  roles:['清除单线态氧','保护 LDL 免受氧化（体外与短期研究）','参与皮肤光保护（有限）','不转化为维生素 A','可能影响细胞间通讯（基础研究）'],
  intake:{
    main:'10–30 mg/天',
    mainLabel:'补充剂量',
    groups:[
      {label:'膳食参考',value:'以番茄制品为主，无需精确计量'},
      {label:'研究常用',value:'15–30 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'加热和油脂能提高番茄红素从番茄基质中的释放，番茄酱、番茄汁的生物利用度高于生番茄。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'天然番茄提取物',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'10–30 mg/天',grade:'B',note:'研究最常用，含少量其他类胡萝卜素。'},
    {name:'合成番茄红素',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'10–30 mg/天',grade:'C',note:'纯度更高，但缺乏结局研究。'},
    {name:'番茄红素油树脂',bio:'中高',timing:'随含脂肪的正餐',food:'随餐',dose:'按番茄红素标示 10–15 mg/天',grade:'C',note:'脂溶性基质，吸收较好，产品质量差异大。'}
  ],
  foods:[
    {name:'番茄酱',amount:'约 10–30 mg',per:'100 g',note:'加热和浓缩后含量高'},
    {name:'番茄汁',amount:'约 5–10 mg',per:'100 g',note:'加热后生物利用度高于生番茄'},
    {name:'西瓜',amount:'约 3–5 mg',per:'100 g',note:'红瓤含量更高'},
    {name:'粉红葡萄柚',amount:'约 3–4 mg',per:'100 g',note:'注意与部分药物相互作用'},
    {name:'番茄（生）',amount:'约 2–3 mg',per:'100 g',note:'生物利用度低于加热制品'}
  ],
  deficiency:{
    signs:['无经典缺乏病','血浆番茄红素偏低（检测指标）','无确立的缺乏综合征'],
    groups:['很少吃番茄制品','老年人','吸烟者','高脂低蔬果饮食']
  },
  tests:[
    {name:'血浆番茄红素',sample:'静脉血',range:'无临床判读标准',note:'反映近期摄入，仅用于研究。'},
    {name:'血脂四项',sample:'静脉血',range:'按实验室参考范围',note:'番茄红素可能轻微影响 LDL 氧化，但不作为监测指标。'},
    {name:'前列腺特异抗原（PSA）',sample:'静脉血',range:'按年龄与临床标准',note:'用于前列腺癌筛查与随访，与番茄红素补充无关。'}
  ],
  cautions:['不能预防前列腺癌，大型研究未证实因果','吸烟者高剂量类胡萝卜素补充需谨慎','番茄红素可能轻度影响抗凝药效果，合用需监测','皮肤黄染罕见于极高剂量','与部分药物（如他汀）的相互作用数据不足'],
  special:[
    {who:'前列腺癌高风险人群',what:'不应以番茄红素补充剂替代筛查和规范治疗，观察性研究的保护作用未被干预试验证实。'},
    {who:'吸烟者',what:'优先从食物获取，避免高剂量单一类胡萝卜素补充剂。'},
    {who:'孕期与哺乳期',what:'通过番茄、西瓜等食物摄入即可，补充剂安全性数据不足。'},
    {who:'出现过敏或持续腹泻',what:'皮疹、面唇肿胀、呼吸困难应停药并急诊；持续腹泻、腹痛应就医，挂消化内科。'}
  ],
  sideEffects:[
    {effect:'胃肠不适、恶心',frequency:'不常见',note:'随含脂肪的正餐服用，持续不适需减量或停药。'},
    {effect:'腹泻',frequency:'少见',note:'减量观察，腹泻致脱水或便血时应就医。'},
    {effect:'皮肤或大便橙红色',frequency:'少见',note:'高剂量时色素沉积，停药后多可恢复；皮肤黄染需排除黄疸。'}
  ],
  refs:[
    {text:'Rowles JL 3rd, et al. Processed and raw tomato consumption and risk of prostate cancer: a systematic review and dose-response meta-analysis. Prostate Cancer Prostatic Dis. 2018;21(3):319-336.',kind:'综述'},
    {text:'NIH Office of Dietary Supplements. Dietary Supplements for Cancer Prevention and Treatment — Fact Sheet for Health Professionals.',kind:'机构'},
    {text:'Story EN, et al. An update on the health effects of tomato lycopene. Annu Rev Food Sci Technol. 2010;1:189-210.',kind:'综述'},
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
  ],
  related:['vitamin-a','vitamin-e','vitamin-c','zinc','selenium']
}
,
{
  id:'pqq',
  name:'PQQ（吡咯喹啉醌）',
  en:'Pyrroloquinoline Quinone',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:10,high:40,step:5},
  tagline:'线粒体生物合成的研究热点，但人体结局证据有限。',
  intro:[
    'PQQ 是一种醌类化合物，最早作为细菌的氧化还原辅因子被发现，此后的动物实验发现，它能激活与线粒体生物合成相关的信号通路。它不属于维生素，人体能否合成、需要量多少都没有定论。',
    '现有的人体研究规模小、周期短，主要观察炎症指标、睡眠质量和认知测试等替代终点，结果不一致。没有证据表明 PQQ 能延缓衰老或预防神经退行性疾病，不能把这些研究结论外推为临床获益。'
  ],
  roles:['作为氧化还原辅因子参与电子传递（基础研究）','可能促进线粒体生物合成（动物研究）','抗氧化','可能改善主观疲劳与睡眠（小样本研究）','神经保护（研究阶段）'],
  intake:{
    main:'10–20 mg/天',
    mainLabel:'补充剂量',
    groups:[
      {label:'研究常用',value:'20 mg/天'},
      {label:'较高剂量研究',value:'40 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'人体药代动力学数据很少，长期使用的安全性未知。日本曾将 PQQ 纳入特定保健用食品原料，但不等于有明确的健康功效。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'PQQ 二钠盐',bio:'中',timing:'随餐',food:'随餐',dose:'10–20 mg/天',grade:'C',note:'最常见的补充剂形式，人体结局研究很少。'},
    {name:'PQQ 酸形式',bio:'中',timing:'随餐',food:'随餐',dose:'10–20 mg/天',grade:'C',note:'稳定性与吸收数据有限。'},
    {name:'PQQ 复配产品',bio:'不定',timing:'随餐',food:'随餐',dose:'按标示',grade:'C',note:'常与辅酶 Q10 等复配，无法判断单独效应。'}
  ],
  foods:[
    {name:'纳豆',amount:'微量',per:'100 g',note:'发酵食品中可检出'},
    {name:'绿茶',amount:'微量',per:'100 mL',note:'发酵或冲泡过程可检出，含量极低'},
    {name:'欧芹',amount:'微量',per:'100 g',note:'含量极低，不构成有效来源'},
    {name:'猕猴桃',amount:'微量',per:'100 g',note:'含量极低，主要提供维生素 C'},
    {name:'鸡蛋',amount:'微量',per:'100 g',note:'含量极低'}
  ],
  deficiency:{
    signs:['无经典缺乏病','无确立的缺乏综合征','疲劳（非特异）'],
    groups:['无明确高风险人群','老年人（研究关注）','线粒体功能研究受试者']
  },
  tests:[
    {name:'血浆 PQQ',sample:'静脉血',range:'无临床判读标准',note:'检测方法不统一，仅用于研究。'},
    {name:'炎症指标（CRP、IL-6）',sample:'静脉血',range:'按实验室参考范围',note:'研究中的替代终点，不能诊断缺乏。'},
    {name:'肝肾功能',sample:'静脉血',range:'按实验室参考范围',note:'长期使用者可定期监测，安全性数据有限。'}
  ],
  cautions:['人体研究规模小、周期短，不能外推为抗衰老或神经保护','可能影响线粒体功能相关药物，合用需谨慎','动物高剂量研究曾观察到肾脏改变，人体数据不足','孕期、哺乳期和儿童的安全性未知','产品纯度差异大，选择有第三方检测的品牌'],
  special:[
    {who:'追求抗衰老',what:'目前没有人体结局证据支持 PQQ 延缓衰老，不应替代运动、饮食和睡眠等有证据的措施。'},
    {who:'孕期与哺乳期',what:'安全性数据不足，不建议使用。'},
    {who:'肝肾功能不全',what:'药代动力学数据缺乏，使用前应咨询医生。'},
    {who:'出现持续失眠或过敏',what:'失眠明显影响生活应减量或停用并就医；皮疹、面唇肿胀、呼吸困难需立即急诊。'}
  ],
  sideEffects:[
    {effect:'失眠',frequency:'不常见',note:'晚间服用更易发生，改为早晨随餐；持续失眠应停用。'},
    {effect:'头痛',frequency:'不常见',note:'减量观察，持续或剧烈头痛应就医。'},
    {effect:'胃肠不适、恶心',frequency:'不常见',note:'随餐服用可减轻，持续不适需减量或停药。'}
  ],
  refs:[
    {text:'Rucker R, et al. Potential physiological importance of pyrroloquinoline quinone. Altern Med Rev. 2009;14(3):268-277.',kind:'综述'},
    {text:'Akagawa M, et al. Recent progress in studies on the health benefits of pyrroloquinoline quinone. Biosci Biotechnol Biochem. 2016;80(1):13-22.',kind:'综述'},
    {text:'NIH Office of Dietary Supplements. Dietary Supplements for Exercise and Athletic Performance — Fact Sheet for Health Professionals.',kind:'机构'},
  ],
  related:['coq10','ala','magnesium','b2','b3']
},
{
  id:'nmn',
  name:'NMN / NR（NAD+ 前体）',
  en:'Nicotinamide Mononucleotide / Nicotinamide Riboside',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:250,high:1000,step:50},
  tagline:'提高 NAD+ 水平不等于延缓衰老，人体结局证据有限。',
  intro:[
    'NMN（烟酰胺单核苷酸）和 NR（烟酰胺核糖）都是 NAD+ 的前体。NAD+ 参与细胞能量代谢、DNA 修复和昼夜节律，其水平随年龄和代谢应激下降，这是相关补剂宣称的理论基础。',
    '人体试验显示口服 NR 或 NMN 能提高血液或组织中 NAD+ 水平，但样本量小、周期短，对肌肉功能、胰岛素敏感性、认知和衰老标志物的结果不一致。NAD+ 升高是替代终点，不能等同于临床获益，相关结论不能外推。'
  ],
  roles:['NAD+ 的合成前体','参与细胞能量代谢','支持 DNA 修复相关酶（如 PARP）','参与昼夜节律调节','基础研究中的线粒体功能调节'],
  intake:{
    main:'250–500 mg/天',
    mainLabel:'补充剂量',
    groups:[
      {label:'NR 研究常用',value:'250–1000 mg/天'},
      {label:'NMN 研究常用',value:'250–600 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'NMN 与 NR 在体内的吸收和转化路径不同，不能按等摩尔直接互换。中国尚未批准 NMN 作为普通食品原料，相关产品多为跨境渠道。'
  },
  timing:'早晨或上午，随餐或空腹',
  withFood:'任意',
  forms:[
    {name:'烟酰胺核糖（NR）',bio:'中',timing:'早晨或上午',food:'任意',dose:'250–1000 mg/天',grade:'B',note:'人体试验较多，能提高血 NAD+，但结局证据仍有限。'},
    {name:'烟酰胺单核苷酸（NMN）',bio:'中',timing:'早晨或上午',food:'任意',dose:'250–600 mg/天',grade:'C',note:'人体试验少且规模小，部分研究未显示明显优于 NR。'},
    {name:'还原型 NMN（NMNH）',bio:'不定',timing:'早晨',food:'任意',dose:'按标示',grade:'C',note:'仅动物数据，人体安全性和有效性未知。'},
    {name:'烟酰胺（维生素 B3）',bio:'高',timing:'随餐',food:'随餐',dose:'按 B3 推荐量',grade:'B',note:'最经济的 NAD+ 前体，但高剂量有肝毒性和潮红风险。'}
  ],
  foods:[
    {name:'牛奶',amount:'微量',per:'100 mL',note:'含微量 NR'},
    {name:'牛油果',amount:'微量',per:'100 g',note:'含微量 NAD+ 前体，不构成有效剂量'},
    {name:'西兰花',amount:'微量',per:'100 g',note:'含烟酰胺等 B3 形式，不等于 NMN'},
    {name:'鸡肉',amount:'约 8–12 mg 烟酸当量',per:'100 g',note:'提供烟酸而非 NMN'},
    {name:'酵母',amount:'较高',per:'100 g',note:'富含 B 族维生素'}
  ],
  deficiency:{
    signs:['无经典缺乏病（NMN/NR 本身）','烟酸缺乏可致糙皮病（与本品不同）','疲劳（非特异）','NAD+ 水平随年龄下降（观察性）'],
    groups:['老年人（研究关注）','代谢综合征（研究关注）','无确立的高风险人群']
  },
  tests:[
    {name:'血 NAD+ / NADH',sample:'静脉血或外周血单核细胞',range:'无临床判读标准',note:'研究指标，不能指导补充决策。'},
    {name:'糖化血红蛋白与胰岛素敏感性',sample:'静脉血',range:'按临床标准',note:'部分试验的结局指标，结果不一致。'},
    {name:'肝肾功能',sample:'静脉血',range:'按实验室参考范围',note:'长期高剂量使用的安全性数据不足，可定期监测。'}
  ],
  cautions:['NAD+ 升高是替代终点，不能证明延缓衰老或预防疾病','人体研究样本量小、周期短，长期安全性未知','理论上可能促进肿瘤细胞代谢，肿瘤患者应避免自行使用','NMN 在中国尚未获批为普通食品原料，产品合规性参差','可能影响血糖和血压，合用相关药物需监测'],
  special:[
    {who:'肿瘤患者',what:'NAD+ 是肿瘤细胞增殖所需，理论上存在风险，治疗期间不应自行补充。'},
    {who:'孕期、哺乳期与儿童',what:'安全性数据不足，不建议使用。'},
    {who:'糖尿病或低血压',what:'可能影响血糖和血压，开始使用时应监测并告知医生。'},
    {who:'出现明显不适',what:'持续头痛、心悸、晕厥或过敏反应应停药并就医；肿瘤患者出现新症状应尽快由肿瘤科评估。'}
  ],
  sideEffects:[
    {effect:'胃肠不适、恶心',frequency:'不常见',note:'随餐或分次服用可减轻，持续不适需减量或停药。'},
    {effect:'头痛',frequency:'不常见',note:'减量观察，持续或剧烈头痛应就医。'},
    {effect:'头晕',frequency:'少见',note:'起身时动作放缓，伴心悸、晕厥需监测血压并就医。'}
  ],
  refs:[
    {text:'Yoshino J, et al. NAD+ intermediates: the biology and therapeutic potential of NMN and NR. Cell Metab. 2018;27(3):513-528.',kind:'综述'},
    {text:'Martens CR, et al. Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults. Nat Commun. 2018;9(1):1286.',kind:'研究'},
    {text:'Igarashi M, et al. Chronic nicotinamide mononucleotide supplementation elevates blood NAD+ and modulates physiologic responses in healthy elderly adults. NPJ Aging. 2022;8(1):5.',kind:'研究'},
    {text:'NIH Office of Dietary Supplements. Dietary Supplements for Older Adults — Fact Sheet for Health Professionals.',kind:'机构'},
  ],
  related:['b3','b2','coq10','ala','magnesium']
},
{
  id:'msm',
  name:'MSM（二甲基砜）',
  en:'Methylsulfonylmethane',
  category:'other',
  scoring:{unit:'g',rni:null,ul:null,low:1.5,high:3,step:0.5},
  tagline:'含硫化合物，骨关节炎疼痛的改善幅度有限。',
  intro:[
    'MSM 是含硫的有机化合物，存在于人体和多种食物中，参与含硫氨基酸和结缔组织基质的代谢。补充剂常被宣传为“关节润滑”和“抗炎”成分。',
    '骨关节炎的随机试验显示 MSM 可能轻度减轻疼痛和改善功能，但样本量小、研究质量参差，效应量不大。它不是软骨修复剂，也不能替代运动治疗、减重和镇痛药物。'
  ],
  roles:['提供有机硫','参与结缔组织基质合成（理论）','可能轻度减轻骨关节炎疼痛','抗氧化（有限）','可能改善运动后肌肉酸痛（证据弱）'],
  intake:{
    main:'1.5–3 g/天',
    mainLabel:'补充剂量',
    groups:[
      {label:'骨关节炎研究',value:'1.5–6 g/天，分次'},
      {label:'常见补充',value:'1.5–3 g/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'MSM 的水溶性好，分次服用可减少胃肠道不适。高剂量研究多在 3–6 g/天，长期数据有限。'
  },
  timing:'随餐，分 2–3 次',
  withFood:'随餐',
  forms:[
    {name:'MSM 粉末',bio:'高',timing:'随餐，分次',food:'随餐',dose:'1.5–3 g/天',grade:'B',note:'研究常用形式，价格低，味道略苦。'},
    {name:'MSM 胶囊',bio:'高',timing:'随餐',food:'随餐',dose:'1.5–3 g/天',grade:'B',note:'便于计量，需注意每粒实际含量。'},
    {name:'MSM 复配关节配方',bio:'不定',timing:'随餐',food:'随餐',dose:'按标示',grade:'C',note:'常与氨基葡萄糖、软骨素复配，无法判断单独效应。'}
  ],
  foods:[
    {name:'牛奶',amount:'约 2–5 mg',per:'100 mL',note:'天然含量很低'},
    {name:'鸡蛋',amount:'约 1–3 mg',per:'100 g',note:'天然含量很低，主要提供含硫氨基酸'},
    {name:'大蒜',amount:'含硫化合物',per:'100 g',note:'主要为其他含硫形式'},
    {name:'洋葱',amount:'含硫化合物',per:'100 g',note:'主要为其他含硫形式，不等于 MSM'},
    {name:'西兰花',amount:'含硫化合物',per:'100 g',note:'含硫代葡萄糖苷，不等于 MSM'}
  ],
  deficiency:{
    signs:['无经典缺乏病','无确立的缺乏综合征','关节疼痛（非特异）'],
    groups:['无明确高风险人群','骨关节炎患者（研究关注）','老年人']
  },
  tests:[
    {name:'无常规特异性检测',sample:'—',range:'—',note:'MSM 不是临床常规检测项目。'},
    {name:'关节影像（X 线、MRI）',sample:'影像检查',range:'按骨关节炎诊断标准',note:'用于评估结构改变，与 MSM 水平无关。'},
    {name:'肝肾功能',sample:'静脉血',range:'按实验室参考范围',note:'长期高剂量使用者可定期监测。'}
  ],
  cautions:['骨关节炎的改善幅度有限，不能替代运动、减重和规范治疗','常见腹胀、腹泻、头痛和失眠','可能增强抗凝药效果，合用华法林等需监测 INR','孕期、哺乳期和儿童的安全性数据不足','对含硫化合物敏感者可能出现皮疹'],
  special:[
    {who:'骨关节炎患者',what:'可作为辅助尝试，但核心治疗仍是运动治疗、体重管理和必要的镇痛药物。'},
    {who:'正在服用抗凝药',what:'有出血风险增加的个案报告，合用时应监测 INR 并告知医生。'},
    {who:'孕期与哺乳期',what:'安全性数据不足，不建议使用。'},
    {who:'出现出血或严重腹泻',what:'黑便、呕血、皮下大片瘀斑应停药并急诊；腹泻致脱水、头晕应就医，挂消化内科。'}
  ],
  sideEffects:[
    {effect:'腹胀、排气增多',frequency:'常见',note:'从小剂量开始、分次随餐；持续腹胀需减量。'},
    {effect:'腹泻',frequency:'不常见',note:'减量观察，腹泻致脱水或便血时应就医。'},
    {effect:'头痛',frequency:'不常见',note:'多在用药初期出现，减量后可缓解；持续头痛应就医。'},
    {effect:'失眠',frequency:'不常见',note:'避免晚间服用，持续失眠应减量或停用。'},
    {effect:'皮疹、瘙痒',frequency:'少见',note:'停药观察，伴面唇肿胀或呼吸困难需急诊。'}
  ],
  refs:[
    {text:'Brien S, et al. Systematic review of the nutritional supplements dimethyl sulfoxide (DMSO) and methylsulfonylmethane (MSM) in the treatment of osteoarthritis. Osteoarthritis Cartilage. 2008;16(11):1277-1288.',kind:'综述'},
    {text:'Kim LS, et al. Efficacy of methylsulfonylmethane in osteoarthritis pain: a randomized controlled trial. BMC Complement Altern Med. 2006;6:6.',kind:'研究'},
    {text:'Butawan M, et al. Methylsulfonylmethane: applications and safety of a novel dietary supplement. Nutrients. 2017;9(3):290.',kind:'综述'},
  ],
  related:['collagen','vitamin-c','b6','magnesium','zinc']
}
,
{
  id:'glucosamine',
  name:'氨基葡萄糖',
  en:'Glucosamine',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:1000,high:2000,step:250},
  tagline:'硫酸盐和盐酸盐不是一回事，骨关节炎的证据也不一致。',
  intro:[
    '氨基葡萄糖是氨基单糖，是糖胺聚糖和透明质酸的合成前体，理论上参与软骨基质形成。补充剂多从虾蟹壳中的几丁质水解制得。',
    '骨关节炎的随机试验结果不一致：部分欧洲研究显示硫酸氨基葡萄糖对膝骨关节炎有轻度改善，而美国 GAIT 等大型试验未显示整体获益，Cochrane 系统综述也持谨慎结论。它可以作为辅助尝试，但不能替代运动、减重和镇痛治疗。'
  ],
  roles:['糖胺聚糖与透明质酸的合成前体','理论上支持软骨基质','可能轻度减轻膝骨关节炎疼痛','改善关节功能（证据不一致）','不能修复已磨损的软骨'],
  intake:{
    main:'1500 mg/天',
    mainLabel:'常用补充剂量',
    groups:[
      {label:'硫酸氨基葡萄糖',value:'1500 mg/天，一次或分次'},
      {label:'盐酸氨基葡萄糖',value:'1500 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'1500 mg 通常指氨基葡萄糖碱基的量，不同盐形式中碱基占比不同。硫酸盐与盐酸盐的研究结果不能直接互换。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'结晶型硫酸氨基葡萄糖',bio:'中高',timing:'随餐',food:'随餐',dose:'1500 mg/天',grade:'B',note:'欧洲研究多用此形式，部分试验显示轻度改善膝骨关节炎。'},
    {name:'盐酸氨基葡萄糖',bio:'中高',timing:'随餐',food:'随餐',dose:'1500 mg/天',grade:'C',note:'吸收不差，但缺少与硫酸盐同等质量的正向结局研究。'},
    {name:'N-乙酰氨基葡萄糖',bio:'中',timing:'随餐',food:'随餐',dose:'按标示',grade:'C',note:'结构与氨基葡萄糖不同，不能按同等剂量替代。'},
    {name:'氨基葡萄糖复配配方',bio:'不定',timing:'随餐',food:'随餐',dose:'按标示',grade:'C',note:'常与软骨素、MSM 复配，无法判断单独效应。'}
  ],
  foods:[
    {name:'虾壳、蟹壳',amount:'原料来源，非食用部位',per:'100 g',note:'补充剂多由其中几丁质水解制得，不直接食用'},
    {name:'鸡软骨',amount:'含量低，无有效剂量',per:'100 g',note:'以胶原蛋白为主，不能按含量换算补充剂量'},
    {name:'牛软骨',amount:'含量低，无有效剂量',per:'100 g',note:'以胶原蛋白为主，不能按含量换算补充剂量'},
    {name:'骨汤',amount:'含量极低',per:'100 mL',note:'不能替代补充剂量'}
  ],
  deficiency:{
    signs:['无经典缺乏病','无确立的缺乏综合征','关节疼痛与僵硬（非特异）'],
    groups:['膝骨关节炎患者（研究关注）','老年人','关节负荷较大的人群']
  },
  tests:[
    {name:'关节影像（X 线、MRI）',sample:'影像检查',range:'按骨关节炎诊断标准',note:'评估结构改变，不能反映氨基葡萄糖水平。'},
    {name:'无常规血液检测',sample:'—',range:'—',note:'氨基葡萄糖不是临床常规检测项目。'},
    {name:'INR（合用华法林时）',sample:'静脉血',range:'按抗凝目标范围',note:'有 INR 升高的个案报告，合用时应加强监测。'}
  ],
  cautions:['骨关节炎证据不一致，不能替代运动、减重和镇痛治疗','可能增强华法林抗凝作用，出现 INR 升高和出血的个案报告','糖尿病患者使用期间应监测血糖，早期研究提示可能影响胰岛素敏感性','来源于虾蟹壳，对甲壳类严重过敏者应谨慎','常见胃部不适、恶心和便秘'],
  special:[
    {who:'正在服用华法林',what:'有 INR 升高和出血的个案报告，开始或停用时应告知医生并监测 INR。'},
    {who:'甲壳类过敏',what:'原料来自虾蟹壳，严重过敏者应选择非甲壳类来源产品或避免使用。'},
    {who:'孕期与哺乳期',what:'安全性数据不足，不建议使用。'},
    {who:'出现过敏反应',what:'皮疹、面唇肿胀、呼吸困难或喉头紧缩感应立即停药并急诊；这是甲壳类来源产品最需要警惕的风险。'}
  ],
  sideEffects:[
    {effect:'胃部不适、恶心',frequency:'常见',note:'随餐服用可减轻；持续呕吐或腹痛需停药就医。'},
    {effect:'便秘',frequency:'不常见',note:'增加饮水和膳食纤维，持续不缓解应减量。'},
    {effect:'血糖升高或波动',frequency:'不常见',note:'糖尿病患者需监测空腹和餐后血糖，必要时由医生调整方案。'},
    {effect:'过敏反应（皮疹、面唇肿胀）',frequency:'少见',note:'甲壳类过敏者风险更高，出现呼吸困难立即急诊。'},
    {effect:'头痛',frequency:'少见',note:'减量观察，持续头痛应就医。'}
  ],
  refs:[
    {text:'Towheed TE, et al. Glucosamine therapy for treating osteoarthritis. Cochrane Database Syst Rev. 2005;(2):CD002946.',kind:'综述'},
    {text:'Clegg DO, et al. Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis (GAIT). N Engl J Med. 2006;354(8):795-808.',kind:'研究'},
    {text:'中华医学会骨科学分会关节外科学组. 中国骨关节炎诊疗指南（2021年版）. 中华骨科杂志. 2021;41(18):1291-1314.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Glucosamine and Chondroitin for Osteoarthritis — Fact Sheet for Health Professionals.',kind:'机构'},
  ],
  related:['collagen','vitamin-c','vitamin-d','calcium','magnesium']
},
{
  id:'chondroitin',
  name:'软骨素',
  en:'Chondroitin Sulfate',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:800,high:1200,step:200},
  tagline:'常与氨基葡萄糖搭配，单独使用的证据更弱。',
  intro:[
    '软骨素是糖胺聚糖的一种，由重复的二糖单元硫酸化而成，存在于软骨、血管壁和皮肤中。补充剂多从牛、猪或鲨鱼软骨中提取。',
    '骨关节炎的试验多将软骨素与氨基葡萄糖联用，单独使用的随机研究较少且结果不一致。GAIT 试验中联合组整体未优于安慰剂，仅在部分中重度疼痛亚组观察到差异，这类亚组分析不足以支持普遍推荐。'
  ],
  roles:['糖胺聚糖的组成成分','理论上增加软骨渗透压与保水性','可能轻度减轻骨关节炎疼痛（证据弱）','抗炎（体外研究）','不能再生软骨'],
  intake:{
    main:'800–1200 mg/天',
    mainLabel:'常用补充剂量',
    groups:[
      {label:'骨关节炎研究',value:'800–1200 mg/天，分次'},
      {label:'与氨基葡萄糖联用',value:'按各自常规剂量'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'软骨素的分子量和硫酸化程度影响吸收，不同来源和工艺的产品差异较大，标签剂量不等于有效剂量。'
  },
  timing:'随餐，分次',
  withFood:'随餐',
  forms:[
    {name:'硫酸软骨素（牛 / 猪来源）',bio:'中低',timing:'随餐，分次',food:'随餐',dose:'800–1200 mg/天',grade:'B',note:'研究常用，分子量较大，口服吸收有限。'},
    {name:'硫酸软骨素（鲨鱼来源）',bio:'中低',timing:'随餐，分次',food:'随餐',dose:'800–1200 mg/天',grade:'C',note:'市场常见，但与牛猪来源的证据不能直接等同。'},
    {name:'盐酸软骨素',bio:'中低',timing:'随餐',food:'随餐',dose:'按标示',grade:'C',note:'研究远少于硫酸盐形式。'},
    {name:'低分子软骨素',bio:'中',timing:'随餐',food:'随餐',dose:'按标示',grade:'C',note:'宣称吸收更好，缺乏结局研究。'}
  ],
  foods:[
    {name:'牛软骨',amount:'含量较高',per:'100 g',note:'日常食用量有限'},
    {name:'猪软骨',amount:'含量较高',per:'100 g',note:'需长时间炖煮，日常食用量有限'},
    {name:'鸡软骨',amount:'中等',per:'100 g',note:'常作为食材，含量低于牛猪软骨'},
    {name:'鲨鱼软骨',amount:'含量较高',per:'100 g',note:'不推荐为补剂来源，涉及生态问题'}
  ],
  deficiency:{
    signs:['无经典缺乏病','无确立的缺乏综合征','关节疼痛与僵硬（非特异）'],
    groups:['骨关节炎患者（研究关注）','老年人','关节负荷较大的人群']
  },
  tests:[
    {name:'关节影像（X 线、MRI）',sample:'影像检查',range:'按骨关节炎诊断标准',note:'评估结构改变，与软骨素水平无关。'},
    {name:'无常规血液检测',sample:'—',range:'—',note:'软骨素不是临床常规检测项目。'},
    {name:'INR（合用抗凝药时）',sample:'静脉血',range:'按抗凝目标范围',note:'与抗凝药合用时需监测。'}
  ],
  cautions:['单独使用证据弱，不能替代骨关节炎的规范治疗','可能增强抗凝药效果，与华法林合用需监测 INR','常见胃部不适、腹泻和便秘','来源为动物软骨，对相关动物蛋白过敏者需谨慎','产品分子量和纯度差异大，疗效难以保证'],
  special:[
    {who:'正在服用抗凝药',what:'软骨素可能影响凝血，合用华法林等应监测 INR。'},
    {who:'骨关节炎患者',what:'如尝试使用，应与运动治疗、体重管理和必要的镇痛治疗同时进行。'},
    {who:'孕期与哺乳期',what:'安全性数据不足，不建议使用。'},
    {who:'出现出血迹象',what:'黑便、呕血、牙龈持续出血或皮下大片瘀斑应停药并急诊，合用抗凝药者尤其注意。'}
  ],
  sideEffects:[
    {effect:'胃部不适、恶心',frequency:'常见',note:'随餐分次服用可减轻；持续呕吐或腹痛需停药就医。'},
    {effect:'腹泻',frequency:'不常见',note:'减量观察，腹泻致脱水或便血时应就医。'},
    {effect:'便秘',frequency:'不常见',note:'增加饮水，持续不缓解应减量或停用。'},
    {effect:'出血倾向增加',frequency:'少见',note:'与华法林等抗凝药合用需监测 INR，出现黑便、瘀斑立即就医。'}
  ],
  refs:[
    {text:'Clegg DO, et al. Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis (GAIT). N Engl J Med. 2006;354(8):795-808.',kind:'研究'},
    {text:'Singh JA, et al. Chondroitin for osteoarthritis. Cochrane Database Syst Rev. 2015;1:CD005614.',kind:'综述'},
    {text:'中华医学会骨科学分会关节外科学组. 中国骨关节炎诊疗指南（2021年版）. 中华骨科杂志. 2021;41(18):1291-1314.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Glucosamine and Chondroitin for Osteoarthritis — Fact Sheet for Health Professionals.',kind:'机构'},
  ],
  related:['collagen','vitamin-c','vitamin-d','calcium','magnesium']
},
{
  id:'psyllium',
  name:'车前子壳',
  en:'Psyllium Husk',
  category:'other',
  scoring:{unit:'g',rni:null,ul:null,low:3,high:10,step:1},
  tagline:'可溶性膳食纤维。必须配足量水，并与多数药物间隔 2 小时。',
  intro:[
    '车前子壳是车前草种子的外壳，富含高度吸水膨胀的黏性可溶性纤维，主要成分为阿拉伯木聚糖。它在肠道形成凝胶，软化粪便并延缓葡萄糖和胆固醇的吸收。',
    '车前子壳对便秘和血脂有中等质量的证据支持，也被用于肠易激综合征的纤维补充。它不被人体吸收，但会吸附同服的药物，影响多种药物的吸收，服药时间必须错开。'
  ],
  roles:['吸水膨胀，软化粪便、促进排便','可溶性纤维，辅助降低 LDL 胆固醇','延缓餐后血糖上升','改善肠易激综合征的便秘症状','作为益生元被部分发酵'],
  intake:{
    main:'5–10 g/天',
    mainLabel:'常用补充剂量',
    groups:[
      {label:'便秘',value:'5–10 g/天，分 1–2 次'},
      {label:'血脂管理',value:'10–12 g/天，分次'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定（需配足量水）',
    note:'每 5 g 车前子壳至少配 240 mL 水，服用后短期内不宜立即平卧。剂量应从小开始，让肠道逐渐适应。'
  },
  timing:'随餐或两餐之间；与其他药物间隔至少 2 小时',
  withFood:'随餐或空腹，需配足量水',
  forms:[
    {name:'车前子壳粉',bio:'—',timing:'随餐或两餐之间',food:'需配 240 mL 水',dose:'5–10 g/天',grade:'A',note:'研究最充分，起效可靠，需充分搅拌后立即饮用。'},
    {name:'车前子壳胶囊',bio:'—',timing:'随餐',food:'需额外饮水',dose:'5–10 g/天',grade:'B',note:'方便但每粒纤维量少，需服用多粒并额外饮水。'},
    {name:'调味车前子粉',bio:'—',timing:'随餐或两餐之间',food:'需配足量水',dose:'按纤维含量折算',grade:'B',note:'常加糖或代糖，注意额外热量和甜味剂。'}
  ],
  foods:[
    {name:'车前子壳',amount:'约 70–80 g 膳食纤维',per:'100 g',note:'几乎全部为可溶性纤维'},
    {name:'燕麦',amount:'约 4 g 可溶性纤维',per:'100 g',note:'可作为日常纤维来源'},
    {name:'大麦',amount:'约 3–5 g 可溶性纤维',per:'100 g',note:'含 β-葡聚糖，可替代部分车前子'},
    {name:'豆类',amount:'约 2–4 g 可溶性纤维',per:'100 g',note:'同时提供植物蛋白'}
  ],
  deficiency:{
    signs:['无经典缺乏病','膳食纤维摄入不足时便秘','粪便干硬、排便费力','血脂偏高（多因素）'],
    groups:['膳食纤维摄入不足者','便秘患者','血脂异常者','肠易激综合征患者']
  },
  tests:[
    {name:'无特异性检测',sample:'—',range:'—',note:'车前子壳不是临床检测项目，效果以症状和排便频率评估。'},
    {name:'血脂四项',sample:'静脉血',range:'按血脂管理目标',note:'用于评估纤维补充对 LDL 的影响。'},
    {name:'血糖',sample:'静脉血',range:'按糖尿病诊断标准',note:'延缓餐后血糖上升，但不能替代降糖药。'}
  ],
  cautions:['必须配足量水，干吞或饮水不足可致食管梗阻','吞咽困难、食管狭窄或肠梗阻患者禁用','与多数药物同服会减少吸收，应间隔至少 2 小时','可能引起腹胀、排气增多，需从小剂量开始','车前子粉尘可致过敏反应，哮喘和过敏体质者配制时需注意'],
  special:[
    {who:'正在服用其他药物',what:'至少间隔 2 小时，甲状腺素、锂盐、地高辛、华法林等尤其需要错开。'},
    {who:'吞咽困难或食管疾病',what:'避免使用粉末和胶囊，存在梗阻风险。'},
    {who:'肠梗阻或不明原因腹痛',what:'禁用，使用前应先明确诊断。'},
    {who:'呛咳、吞咽困难或剧烈腹痛',what:'干吞或饮水不足可致食管梗阻，出现呛咳、吞咽困难、胸痛或呕吐应立即急诊；腹胀剧痛、停止排气排便需排除肠梗阻，挂消化内科或急诊。'}
  ],
  sideEffects:[
    {effect:'腹胀、排气增多',frequency:'常见',note:'从小剂量开始，让肠道逐渐适应；持续腹胀需减量。'},
    {effect:'腹泻或便秘加重',frequency:'不常见',note:'多因饮水不足或剂量过大，调整水量和剂量后观察，持续不缓解应就医。'},
    {effect:'呛咳、吞咽困难、食管梗阻',frequency:'少见',note:'必须配足量水、充分搅拌后立即饮用；出现呛咳、胸痛、无法吞咽需急诊。'},
    {effect:'影响同服药物吸收',frequency:'常见',note:'与甲状腺素、锂盐、地高辛、华法林等间隔至少 2 小时。'},
    {effect:'过敏反应（粉尘）',frequency:'少见',note:'配制时出现皮疹、喘息、胸闷应停药并就医，哮喘和过敏体质者尤其注意。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Jovanovski E, et al. Effect of psyllium on LDL-cholesterol concentrations: a systematic review and meta-analysis. Br J Nutr. 2018;119(4):433-446.',kind:'综述'},
    {text:'EMA Committee on Herbal Medicinal Products. European Union herbal monograph on Plantago ovata Forssk., semen. 2013.',kind:'机构'},
    {text:'中华医学会消化病学分会胃肠动力学组. 中国慢性便秘诊治指南（2013年，武汉）. 中华消化杂志. 2013;33(5):291-297.',kind:'指南'},
    {text:'Gibb RD, et al. Psyllium fiber improves glycemic control proportional to loss of glycemic control: a meta-analysis of data in euglycemic subjects, patients at risk of type 2 diabetes mellitus, and patients being treated for type 2 diabetes mellitus. Am J Clin Nutr. 2015;102(6):1604-1614.',kind:'综述'},
  ],
  related:['probiotics','phytosterols','magnesium','potassium','b7']
}
,
{
  id:'choline',
  name:'胆碱',
  en:'Choline',
  category:'other',
  scoring:{unit:'mg',rni:450,ul:3000,low:250,high:1000,step:50},
  tagline:'必需营养素，孕期需求增加。高剂量会有鱼腥味和低血压。',
  intro:[
    '胆碱是细胞膜磷脂酰胆碱和神经递质乙酰胆碱的原料，也参与肝脏脂蛋白的组装和同型半胱氨酸代谢。人体能在肝脏合成少量胆碱，但不足以满足需求，仍需从膳食摄入。',
    '中国 DRIs（2023 版）给出的成人适宜摄入量是男性 450 mg/天、女性 380 mg/天，孕期和哺乳期需要增加。部分调查显示，中国成年人平均摄入量只有推荐量的一半左右；不过健康人通过鸡蛋、肝脏和豆制品通常可以补足。'
  ],
  roles:['合成磷脂酰胆碱，维持细胞膜结构','合成乙酰胆碱，参与神经传导','参与肝脏脂蛋白组装，预防脂肪肝','参与同型半胱氨酸代谢','胎儿神经管和大脑发育'],
  intake:{
    main:'450 mg/天（男）/ 380 mg/天（女）',
    mainLabel:'成人适宜摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'需要量增加，按中国 DRIs 执行'},
      {label:'可耐受最高摄入量',value:'3000 mg/天'},
      {label:'常见补充剂量',value:'250–1000 mg/天'}
    ],
    upper:'3000 mg/天（中国 DRIs）',
    note:'胆碱的 UL 针对总摄入量，包括食物和补充剂。超过 UL 可能出现低血压、出汗、流涎和鱼腥味体味。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'酒石酸氢胆碱',bio:'高',timing:'随餐',food:'随餐',dose:'250–1000 mg/天',grade:'B',note:'常用形式，胆碱含量约 41%，研究较多。'},
    {name:'氯化胆碱',bio:'高',timing:'随餐',food:'随餐',dose:'按胆碱含量折算',grade:'B',note:'胆碱含量约 75%，多用于食品强化和饲料。'},
    {name:'磷脂酰胆碱（卵磷脂）',bio:'中',timing:'随餐',food:'随餐',dose:'按胆碱含量折算',grade:'B',note:'食物中的主要形式，胆碱占比低，需较大剂量。'},
    {name:'Alpha-GPC',bio:'高',timing:'随餐',food:'随餐',dose:'300–600 mg/天',grade:'C',note:'可穿过血脑屏障，认知研究结果不一致。'}
  ],
  foods:[
    {name:'鸡蛋',amount:'约 250–300 mg',per:'100 g',note:'约 125–150 mg/个，是最便捷的来源'},
    {name:'牛肝',amount:'约 330–430 mg',per:'100 g',note:'含量高，但维生素 A 也高'},
    {name:'大豆',amount:'约 110–120 mg',per:'100 g',note:'以磷脂酰胆碱为主'},
    {name:'鸡胸肉',amount:'约 70–85 mg',per:'100 g',note:'低脂蛋白来源，胆碱含量中等'},
    {name:'西兰花',amount:'约 40 mg',per:'100 g',note:'蔬菜中含量相对较高'}
  ],
  deficiency:{
    signs:['脂肪肝（长期完全肠外营养未补充）','肌肉损伤标志物升高','同型半胱氨酸升高','记忆力下降（非特异）','胎儿神经管发育受影响'],
    groups:['孕期和哺乳期','长期完全肠外营养','严格素食','酗酒者','肝功能不全']
  },
  tests:[
    {name:'血浆游离胆碱',sample:'静脉血',range:'无统一临床判读标准',note:'受近期进食影响，主要用于研究。'},
    {name:'肝功能与肝脏超声',sample:'静脉血 / 影像',range:'按临床标准',note:'长期缺乏可致脂肪肝，用于评估而非诊断胆碱缺乏。'},
    {name:'同型半胱氨酸',sample:'静脉血',range:'按实验室参考范围',note:'胆碱参与其代谢，升高可见于多种营养素不足。'}
  ],
  cautions:['高剂量可致低血压、出汗、流涎和鱼腥味体味','可能诱发或加重抑郁情绪，正在使用抗抑郁药者需观察','与抗胆碱能药物作用方向相反，合用需医生评估','高剂量胆碱在肠道生成 TMAO，与心血管风险的关联仍为观察性证据','孕期需要量增加，但不应超过 UL'],
  special:[
    {who:'孕期和哺乳期',what:'胆碱对胎儿神经发育重要，优先通过鸡蛋、肝脏和豆制品补足，不足时在医生指导下补充。'},
    {who:'正在服用抗抑郁药',what:'高剂量胆碱可能影响情绪，合用时应观察症状变化并告知医生。'},
    {who:'严格素食',what:'植物性食物胆碱含量普遍偏低，需有意识地增加大豆、藜麦和西兰花。'},
    {who:'出现低血压或严重腹泻',what:'头晕、晕厥、心悸伴血压下降应停药并就医；持续腹泻致脱水应就诊消化内科。'}
  ],
  sideEffects:[
    {effect:'鱼腥味体味',frequency:'常见',note:'与剂量相关，减量或随餐服用；明显影响生活可停用。'},
    {effect:'腹泻、腹痛',frequency:'不常见',note:'减量并随餐，腹泻致脱水或便血时应就医。'},
    {effect:'低血压（头晕、晕厥）',frequency:'不常见',note:'高剂量时出现，监测血压，正在服降压药者需调整剂量。'},
    {effect:'出汗、流涎',frequency:'不常见',note:'多在超过 UL 时出现，减量后可缓解。'},
    {effect:'恶心',frequency:'不常见',note:'随餐服用可减轻，持续呕吐需停药。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Choline — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/',kind:'机构'},
    {text:'Zeisel SH. Choline: critical role during fetal development and dietary requirements in adults. Annu Rev Nutr. 2006;26:229-250.',kind:'综述'},
    {text:'Zeisel SH, da Costa KA. Choline: an essential nutrient for public health. Nutr Rev. 2009;67(11):615-623.',kind:'综述'},
  ],
  related:['b9','b12','b6','lecithin','b5']
},
{
  id:'inositol',
  name:'肌醇',
  en:'Inositol',
  category:'other',
  scoring:{unit:'g',rni:null,ul:null,low:2,high:12,step:1},
  tagline:'肌醇与 D-手性肌醇比例有讲究，多囊卵巢的研究证据中等。',
  intro:[
    '肌醇是环己六醇，在体内以肌醇（myo-inositol）和 D-手性肌醇（D-chiro-inositol）等形式存在，参与胰岛素信号转导和细胞膜磷脂代谢。人体可以合成，但补充剂使用的剂量远高于膳食摄入。',
    '研究最多的是多囊卵巢综合征（PCOS）患者的胰岛素抵抗和月经周期改善，以及焦虑、强迫症状的辅助治疗。结果总体偏正面，但研究质量参差，不能替代二甲双胍、促排卵或抗抑郁药的规范治疗。'
  ],
  roles:['胰岛素信号转导的第二信使','参与细胞膜磷脂代谢','改善 PCOS 的胰岛素抵抗（证据中等）','可能改善焦虑与强迫症状（证据有限）','参与卵泡发育'],
  intake:{
    main:'2–4 g/天',
    mainLabel:'常用补充剂量',
    groups:[
      {label:'PCOS 研究',value:'肌醇 2 g + D-手性肌醇 50 mg，每日 2 次'},
      {label:'焦虑辅助研究',value:'4–18 g/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'肌醇与 D-手性肌醇的常用比例约为 40:1。市售“肌醇”多为 myo-inositol，购买时需看清具体形式。'
  },
  timing:'随餐，分 2 次',
  withFood:'随餐',
  forms:[
    {name:'肌醇（myo-inositol）',bio:'中高',timing:'随餐，分次',food:'随餐',dose:'2–4 g/天',grade:'B',note:'研究最常用，PCOS 证据主要来自此形式。'},
    {name:'D-手性肌醇',bio:'中高',timing:'随餐，分次',food:'随餐',dose:'50–100 mg/天',grade:'B',note:'常与肌醇按 40:1 配比，单独高剂量反而可能不利。'},
    {name:'肌醇六烟酸酯',bio:'中',timing:'随餐',food:'随餐',dose:'按标示',grade:'C',note:'主要用作“不潮红烟酸”，不能按肌醇剂量换算。'}
  ],
  foods:[
    {name:'全谷物',amount:'约 200–500 mg',per:'100 g',note:'以植酸形式存在'},
    {name:'豆类',amount:'约 200–400 mg',per:'100 g',note:'以植酸形式存在，吸收率有限'},
    {name:'坚果',amount:'约 200–300 mg',per:'100 g',note:'同时提供镁和健康脂肪'},
    {name:'柑橘类水果',amount:'约 100–200 mg',per:'100 g',note:'同时提供维生素 C'},
    {name:'牛肝',amount:'约 300 mg',per:'100 g',note:'含量较高，但维生素 A 也高'}
  ],
  deficiency:{
    signs:['无经典缺乏病','PCOS 患者肌醇代谢异常（研究）','胰岛素抵抗（多因素）','焦虑、失眠（非特异）'],
    groups:['PCOS 患者（研究关注）','胰岛素抵抗','孕期（研究关注）','无确立的经典缺乏人群']
  },
  tests:[
    {name:'空腹血糖与胰岛素',sample:'静脉血',range:'按临床标准',note:'用于评估胰岛素抵抗，不反映肌醇水平。'},
    {name:'性激素六项',sample:'静脉血',range:'按月经周期判读',note:'PCOS 评估用，与肌醇补充无直接关系。'},
    {name:'血浆肌醇',sample:'静脉血',range:'无临床判读标准',note:'仅用于研究。'}
  ],
  cautions:['可能与锂盐相互作用，双相障碍患者使用前必须咨询精神科医生','可能增强抗凝或抗血小板药物效果，合用需注意出血风险','双相障碍患者可能诱发躁狂，应避免自行使用','常见腹胀、腹泻、恶心和头晕','多囊卵巢患者不能用肌醇替代规范促排卵治疗'],
  special:[
    {who:'正在服用锂盐',what:'肌醇可能影响锂盐的疗效或加重肾脏负担，必须在精神科医生指导下使用。'},
    {who:'PCOS 患者',what:'肌醇可作为辅助，但不能替代生活方式干预、二甲双胍或促排卵治疗。'},
    {who:'孕期',what:'部分妊娠期糖尿病研究使用肌醇，但应在产科医生指导下进行，不应自行大剂量服用。'},
    {who:'出现情绪异常或严重腹泻',what:'双相障碍患者出现躁狂、失眠加重应立即停药并联系精神科；持续腹泻、头晕应就医。'}
  ],
  sideEffects:[
    {effect:'胃肠不适、恶心',frequency:'常见',note:'随餐分次服用可减轻；持续呕吐需停药就医。'},
    {effect:'腹泻',frequency:'不常见',note:'减量观察，腹泻致脱水或便血时应就医。'},
    {effect:'头晕',frequency:'不常见',note:'起身时动作放缓，伴心悸、晕厥需监测血压并就医。'},
    {effect:'头痛',frequency:'少见',note:'减量观察，持续头痛应就医。'}
  ],
  refs:[
    {text:'中华医学会妇产科学分会内分泌学组. 多囊卵巢综合征中国诊疗指南. 中华妇产科杂志. 2018;53(1):2-6.',kind:'指南'},
    {text:'Unfer V, et al. Myo-inositol in the treatment of polycystic ovary syndrome. Eur Rev Med Pharmacol Sci. 2017;21(7):1618-1629.',kind:'综述'},
    {text:'Mukai T, Kishi T, Matsuda Y, Iwata N. A meta-analysis of inositol for depression and anxiety disorders. Hum Psychopharmacol. 2014;29(1):55-63.',kind:'综述'},
    {text:'Pundir J, et al. Inositol treatment of anovulation in women with polycystic ovary syndrome: a meta-analysis of randomised trials. BJOG. 2018;125(3):299-308.',kind:'综述'},
  ],
  related:['b3','chromium','magnesium','b7','ala']
},
{
  id:'boron',
  name:'硼',
  en:'Boron',
  category:'mineral',
  scoring:{unit:'mg',rni:null,ul:null,low:2,high:6,step:1},
  tagline:'可能影响钙、镁和性激素代谢，但人体需要量尚未确定。',
  intro:[
    '硼是植物必需的微量元素，在人体中的作用尚未完全明确。它可能影响钙、镁、磷的代谢和类固醇激素水平，但人体缺乏症没有被确立，中国 DRIs 也没有制定硼的 RNI 和 UL。',
    '小规模研究提示硼补充可能影响睾酮、雌激素和炎症指标，但样本量小、周期短，结果不能外推为“提高睾酮”或“预防骨质疏松”。硼酸和硼砂有明确毒性，不能当作补充剂使用。'
  ],
  roles:['参与钙、镁、磷代谢（可能）','影响类固醇激素水平（研究阶段）','抗氧化与抗炎（体外研究）','参与骨骼和关节健康（证据弱）','人体必需性尚未完全确立'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂量',
    groups:[
      {label:'常见补充剂量',value:'2–6 mg/天'},
      {label:'膳食摄入',value:'约 1–3 mg/天（因地区而异）'},
      {label:'可耐受最高摄入量',value:'成人 20 mg/天（美国 IOM）；中国未制定'}
    ],
    upper:'中国 DRIs 未制定；美国 IOM 成人 UL 为 20 mg/天',
    note:'硼的安全窗口相对较窄，硼酸和硼砂的毒性远高于硼补充剂。不能把“硼”与“硼砂”混为一谈，后者禁止作为食品添加。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'硼甘氨酸盐',bio:'中高',timing:'随餐',food:'随餐',dose:'2–6 mg/天',grade:'C',note:'螯合形式，吸收较好，但人体结局研究很少。'},
    {name:'柠檬酸硼',bio:'中',timing:'随餐',food:'随餐',dose:'2–6 mg/天',grade:'C',note:'水溶性好，研究有限。'},
    {name:'硼酸',bio:'—',timing:'—',food:'—',dose:'不作补充剂',grade:'C',note:'有明确毒性，仅用于工业和实验室，不可口服。'}
  ],
  foods:[
    {name:'牛油果',amount:'约 1–2 mg',per:'100 g',note:'含量较高'},
    {name:'坚果',amount:'约 0.5–2 mg',per:'100 g',note:'杏仁、榛子较高'},
    {name:'干果',amount:'约 1–3 mg',per:'100 g',note:'葡萄干、枣'},
    {name:'豆类',amount:'约 0.5–1 mg',per:'100 g',note:'同时提供植物蛋白'},
    {name:'葡萄酒',amount:'约 0.1–0.5 mg',per:'100 mL',note:'酒精本身有健康风险，不推荐以此补硼'}
  ],
  deficiency:{
    signs:['无确立的缺乏病','骨代谢指标变化（研究）','性激素水平变化（研究）','无临床缺乏综合征'],
    groups:['无明确高风险人群','绝经后女性（研究关注）','运动员（研究关注）']
  },
  tests:[
    {name:'血浆硼',sample:'静脉血',range:'无临床判读标准',note:'仅用于研究，反映近期摄入。'},
    {name:'性激素六项',sample:'静脉血',range:'按性别与年龄判读',note:'研究中的观察指标，不用于诊断硼缺乏。'},
    {name:'骨密度',sample:'DXA',range:'按骨质疏松诊断标准',note:'评估骨骼健康，与硼补充无直接关系。'}
  ],
  cautions:['激素敏感性疾病（乳腺癌、前列腺癌、子宫内膜异位症）患者应避免使用','肾功能不全者排泄减慢，可能蓄积，应避免','硼酸和硼砂有明确毒性，误服可致呕吐、腹泻、皮疹甚至死亡','孕期和哺乳期安全性数据不足，不建议高剂量补充','高剂量可能引起消化不良、恶心和皮肤潮红'],
  special:[
    {who:'激素敏感性疾病',what:'硼可能影响雌激素和睾酮水平，乳腺癌、前列腺癌和子宫内膜异位症患者应避免自行补充。'},
    {who:'肾功能不全',what:'硼主要经肾脏排泄，肾功能下降时可能蓄积，应避免使用。'},
    {who:'孕期与哺乳期',what:'通过牛油果、坚果和豆类摄入即可，不建议高剂量补充。'},
    {who:'误服硼酸或出现皮疹',what:'误服硼酸、硼砂可致呕吐、腹泻、皮疹甚至休克，应立即急诊并携带产品包装；补充剂引起皮疹应停药并就诊皮肤科。'}
  ],
  sideEffects:[
    {effect:'胃肠不适、恶心',frequency:'不常见',note:'随餐服用可减轻，持续不适需减量或停药。'},
    {effect:'皮疹、瘙痒',frequency:'不常见',note:'停药观察，伴面唇肿胀或呼吸困难需急诊。'},
    {effect:'皮肤潮红',frequency:'少见',note:'减量后可缓解，持续不消退应就医。'},
    {effect:'头痛',frequency:'少见',note:'减量观察，持续头痛应就医。'}
  ],
  refs:[
    {text:'NIH Office of Dietary Supplements. Boron — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Boron-HealthProfessional/',kind:'机构'},
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Nielsen FH. Update on human health effects of boron. J Trace Elem Med Biol. 2014;28(4):383-387.',kind:'综述'},
    {text:'Nielsen FH, Hunt CD, Mullen LM, Hunt JR. Effect of dietary boron on mineral, estrogen, and testosterone metabolism in postmenopausal women. FASEB J. 1987;1(5):394-397.',kind:'研究'},
  ],
  related:['calcium','magnesium','vitamin-d','zinc','copper']
},
{
  id:'manganese',
  name:'锰',
  en:'Manganese',
  category:'mineral',
  scoring:{unit:'mg',rni:4.5,ul:11,low:2,high:5,step:0.5},
  tagline:'抗氧化酶和结缔组织的辅因子。肝病与长期肠外营养容易蓄积。',
  intro:[
    '锰是锰超氧化物歧化酶、精氨酸酶和丙酮酸羧化酶的辅因子，参与抗氧化防御、尿素循环、糖异生和结缔组织形成。它还是骨骼和软骨基质中糖胺聚糖合成的必需元素。',
    '中国 DRIs（2023 版）将成人锰的适宜摄入量定为 4.5 mg/天，可耐受最高摄入量为 11 mg/天。膳食中的全谷物、坚果和茶可提供较多锰，正常饮食很少缺乏；真正需要警惕的是肝病和长期肠外营养导致的蓄积。'
  ],
  roles:['锰超氧化物歧化酶抗氧化','精氨酸酶参与尿素循环','丙酮酸羧化酶参与糖异生','结缔组织和骨基质形成','参与神经递质代谢'],
  intake:{
    main:'4.5 mg/天',
    mainLabel:'成人适宜摄入量',
    groups:[
      {label:'可耐受最高摄入量',value:'11 mg/天'},
      {label:'常见补充剂量',value:'2–5 mg/天'},
      {label:'高锰食物',value:'全谷物、坚果、茶'}
    ],
    upper:'11 mg/天（中国 DRIs）',
    note:'锰与铁在肠道吸收上存在竞争。铁缺乏时锰吸收增加，长期大剂量补铁则可能降低锰的吸收。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'葡萄糖酸锰',bio:'中高',timing:'随餐',food:'随餐',dose:'2–5 mg/天',grade:'B',note:'水溶性好，常用于复合矿物质补充剂。'},
    {name:'硫酸锰',bio:'中',timing:'随餐',food:'随餐',dose:'2–5 mg/天',grade:'B',note:'无机形式，价格低，剂量需准确标示。'},
    {name:'锰甘氨酸盐',bio:'中高',timing:'随餐',food:'随餐',dose:'2–5 mg/天',grade:'C',note:'螯合形式，吸收较好，但缺乏独立结局研究。'}
  ],
  foods:[
    {name:'全麦面包',amount:'约 2–3 mg',per:'100 g',note:'麸皮和胚芽含量高'},
    {name:'糙米',amount:'约 1–2 mg',per:'100 g',note:'精白米含量明显降低'},
    {name:'榛子',amount:'约 2–4 mg',per:'100 g',note:'坚果中含量较高'},
    {name:'茶叶（干）',amount:'约 30–50 mg',per:'100 g',note:'泡茶溶出有限，但长期大量饮茶可贡献可观摄入'},
    {name:'菠菜',amount:'约 0.5–1 mg',per:'100 g',note:'同时提供叶酸和叶黄素'}
  ],
  deficiency:{
    signs:['缺乏罕见','生长迟缓、骨骼异常（长期缺乏）','糖耐量异常（研究）','凝血功能异常（间接）','皮炎、头发变浅（罕见）'],
    groups:['长期完全肠外营养未补充','严重吸收不良','长期高剂量补铁','无确立的常见高风险人群']
  },
  tests:[
    {name:'全血锰',sample:'静脉血',range:'无统一临床判读标准',note:'反映近期暴露，受采样和环境污染影响大。'},
    {name:'头颅 MRI T1 信号',sample:'影像检查',range:'按影像科判读',note:'基底节 T1 高信号可见于锰蓄积，用于肝病和肠外营养相关评估。'},
    {name:'肝功能',sample:'静脉血',range:'按实验室参考范围',note:'肝病时锰经胆汁排泄受阻，是蓄积的主要风险因素。'}
  ],
  cautions:['肝病尤其肝硬化患者胆汁排泄受损，锰易蓄积并引起类帕金森样症状','长期完全肠外营养未规范补充可致锰中毒，需监测血锰和影像','锰与铁竞争吸收，铁缺乏者吸收增加，长期大剂量补铁者需注意','过量可致神经毒性，表现为震颤、步态异常和认知下降','锰补充不能替代铁、铜等其他矿物质的评估'],
  special:[
    {who:'肝硬化患者',what:'锰经胆汁排泄，肝功能受损时易蓄积，应避免额外补充并监测神经系统症状。'},
    {who:'长期肠外营养',what:'需按规范添加锰并定期监测血锰和头颅 MRI，避免基底节蓄积。'},
    {who:'孕期与哺乳期',what:'按中国 DRIs 的适宜摄入量从膳食获取即可，不建议额外高剂量补充。'},
    {who:'出现帕金森样症状',what:'震颤、动作迟缓、步态不稳、面具脸或认知下降应立即停药并挂神经内科，肝病患者尤其警惕锰蓄积。'}
  ],
  sideEffects:[
    {effect:'胃肠不适、恶心',frequency:'不常见',note:'随餐服用可减轻，持续不适需减量或停药。'},
    {effect:'头痛、头晕',frequency:'少见',note:'减量观察，伴震颤、步态异常需立即就医。'},
    {effect:'帕金森样症状（震颤、动作迟缓、面具脸）',frequency:'少见',note:'多见于过量或肝病蓄积，立即停药并就诊神经内科。'},
    {effect:'认知下降、情绪改变',frequency:'少见',note:'长期过量暴露的表现，需停药并由神经内科评估。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Manganese — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',kind:'机构'},
    {text:'Crossgrove J, Zheng W. Manganese toxicity upon overexposure. NMR Biomed. 2004;17(8):544-553.',kind:'综述'},
    {text:'Aschner JL, Aschner M. Nutritional aspects of manganese homeostasis. Mol Aspects Med. 2005;26(4-5):353-362.',kind:'综述'},
  ],
  related:['iron','copper','calcium','magnesium','zinc']
}
);

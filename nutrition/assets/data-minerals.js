window.SUPPLEMENT_DATA = window.SUPPLEMENT_DATA || [];
window.SUPPLEMENT_DATA.push(
{
  id:'calcium',
  name:'钙',
  en:'Calcium',
  category:'mineral',
  scoring:{unit:'mg',rni:800,ul:2000,low:500,high:1200,step:50},
  tagline:'骨库的砖块，但决定吸收的往往不是剂量，而是形式、胃酸和同服的搭档。',
  intro:[
    '人体 99% 的钙储存在骨骼和牙齿中，剩余 1% 参与肌肉收缩、神经传导、凝血和激素分泌。血钙被严格调控，因此血钙正常并不代表骨库充足。',
    '补钙的关键在两点：单次元素钙不要超过 500 mg，以及根据胃酸情况选择形式。碳酸钙需要胃酸，柠檬酸钙不依赖胃酸；与铁、甲状腺素、部分抗生素同服会互相干扰。'
  ],
  roles:['构成骨骼和牙齿','肌肉收缩','神经信号传导','血液凝固','激素分泌与酶活性调节'],
  intake:{
    main:'800 mg/天',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'50 岁以上',value:'1000 mg/天'},
      {label:'孕期 / 哺乳期',value:'800 mg/天'},
      {label:'可耐受最高摄入量',value:'2000 mg/天'}
    ],
    upper:'2000 mg/天（中国 DRIs）',
    note:'这里的 800 mg 指元素钙，不是碳酸钙或柠檬酸钙的化合物重量。食物优先，补充剂补足差额。'
  },
  timing:'碳酸钙随餐；柠檬酸钙任意时间',
  withFood:'碳酸钙随餐，柠檬酸钙任意',
  forms:[
    {name:'碳酸钙',bio:'中',timing:'随餐',food:'随餐',dose:'500 mg 元素钙/次',grade:'A',note:'含元素钙约 40%，需要胃酸。胃酸不足者吸收差。'},
    {name:'柠檬酸钙',bio:'高',timing:'任意时间',food:'任意',dose:'500 mg 元素钙/次',grade:'A',note:'含元素钙约 21%，不依赖胃酸，适合老年人或 PPI 使用者。'},
    {name:'柠檬酸苹果酸钙',bio:'高',timing:'任意时间',food:'任意',dose:'500 mg 元素钙/次',grade:'B',note:'吸收较好，元素钙含量较低。'},
    {name:'乳酸钙 / 葡萄糖酸钙',bio:'中',timing:'随餐',food:'随餐',dose:'500 mg 元素钙/次，需多片',grade:'B',note:'元素钙含量低，需要较多片剂。'},
    {name:'羟基磷灰石 / 珊瑚钙',bio:'中',timing:'随餐',food:'随餐',dose:'500 mg 元素钙/次',grade:'C',note:'成分复杂，需关注重金属检测报告。'}
  ],
  foods:[
    {name:'牛奶',amount:'约 104 mg',per:'100 g',note:'250 ml 约 260 mg'},
    {name:'酸奶',amount:'约 118 mg',per:'100 g',note:'注意添加糖'},
    {name:'奶酪',amount:'约 799 mg',per:'100 g',note:'钠含量也高'},
    {name:'北豆腐（钙凝固）',amount:'约 164 mg',per:'100 g',note:'内酯豆腐含量低'},
    {name:'芝麻酱',amount:'约 1170 mg',per:'100 g',note:'热量高，一勺即可'},
    {name:'小鱼干（带骨）',amount:'约 800–1000 mg',per:'100 g',note:'钠含量高'}
  ],
  deficiency:{
    signs:['骨密度下降、骨质疏松','容易骨折','肌肉痉挛、手足抽搐','指甲脆弱','严重时心律失常'],
    groups:['奶制品摄入少','严格素食且未强化','乳糖不耐受','绝经后女性','50 岁以上男性','长期使用糖皮质激素','维生素 D 缺乏','吸收不良']
  },
  tests:[
    {name:'血清钙',sample:'静脉血',range:'约 2.1–2.6 mmol/L',note:'血钙受甲状旁腺和维生素 D 严格调控，正常不能排除骨钙流失。'},
    {name:'24 小时尿钙',sample:'24 小时尿液',range:'按实验室参考范围',note:'用于评估钙排泄与肾结石风险。'},
    {name:'骨密度（DEXA）',sample:'影像检查',range:'T 值 ≤ -2.5 为骨质疏松',note:'评价长期骨量，不能反映近期钙摄入。'},
    {name:'甲状旁腺激素（PTH）',sample:'静脉血',range:'按实验室参考范围',note:'帮助判断钙代谢异常的原因。'}
  ],
  cautions:['单次元素钙超过 500 mg 吸收率下降，建议分次','高剂量补充剂可能增加肾结石风险；心血管风险的研究信号不一致，RCT 荟萃分析未证实因果，但不应超过 UL','与铁剂、甲状腺素、四环素类、喹诺酮类抗生素同服需间隔 2–4 小时','碳酸钙可能引起便秘、腹胀'],
  sideEffects:[
    { effect: '便秘、腹胀', frequency: '常见', note: '碳酸钙更常见；增加饮水、分次服用或改用柠檬酸钙。' },
    { effect: '恶心、胃部不适', frequency: '不常见', note: '随餐服用，避免空腹。' },
    { effect: '肾结石', frequency: '不常见', note: '补充剂形式风险高于食物钙；结石病史者需评估尿钙。' },
    { effect: '高钙血症', frequency: '少见', note: '过量或与维生素 D 叠加时出现，表现为多尿、口渴、意识改变。' },
    { effect: '影响其他药物吸收', frequency: '不常见', note: '与铁、甲状腺素、四环素类、喹诺酮类间隔 2–4 小时。' }
  ],
  special:[
    {who:'长期使用 PPI',what:'胃酸减少，碳酸钙吸收下降，柠檬酸钙更合适。'},
    {who:'肾结石病史',what:'补钙不等于结石风险一定升高，但需要评估尿钙和草酸，避免高剂量。'},
    {who:'骨质疏松',what:'钙和维生素 D 是基础，但不能替代抗骨质疏松药物，需按指南评估。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Calcium — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',kind:'机构'},
    {text:'Ross AC, Manson JE, Abrams SA, et al. The 2011 report on dietary reference intakes for calcium and vitamin D from the Institute of Medicine: what clinicians need to know. J Clin Endocrinol Metab. 2011;96(1):53-58.',kind:'指南'},
    {text:'Beto JA. The role of calcium in human aging. Clin Nutr Res. 2015;4(1):1-8.',kind:'综述'},
    {text:'Bolland MJ, et al. Effect of calcium supplements on risk of myocardial infarction and cardiovascular events: meta-analysis. BMJ. 2010;341:c3691. doi:10.1136/bmj.c3691',kind:'研究'},
  ],
  related:['vitamin-d','vitamin-k','magnesium','iron','zinc']
},
{
  id:'magnesium',
  name:'镁',
  en:'Magnesium',
  category:'mineral',
  scoring:{unit:'mg',rni:330,ul:350,low:100,high:350,step:10},
  tagline:'三百多种酶的辅因子。血清镁正常，不等于体内不缺。',
  intro:[
    '镁参与 300 多种酶反应，涵盖 ATP 生成、DNA 复制、肌肉舒张、神经兴奋性和血糖调节。它还与维生素 D 的活化、钙的分布和钾的平衡相互牵连。',
    '血清镁只占全身镁的约 1%，正常值不能排除细胞内缺乏。红细胞镁、24 小时尿镁和镁负荷试验更接近真实储备，但都不是常规体检项目。形式选择上，氧化镁便宜但吸收差，甘氨酸镁和柠檬酸镁更常用。'
  ],
  roles:['ATP 生成与能量代谢','肌肉舒张与神经兴奋性调节','骨骼结构','血糖与胰岛素敏感性','血压调节','参与维生素 D 活化'],
  intake:{
    main:'330 mg/天',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'370 / 400 mg/天'},
      {label:'补充剂可耐受上限',value:'350 mg/天（元素镁）'},
      {label:'肾功能不全',value:'需医生评估，避免自行补充'}
    ],
    upper:'350 mg/天（仅指补充剂中的元素镁；食物来源不适用）',
    note:'中国 DRIs 2023 成人 RNI 为 330 mg/天。全谷物、豆类、坚果和深绿色蔬菜是主要来源。'
  },
  timing:'随餐，或睡前',
  withFood:'随餐',
  forms:[
    {name:'氧化镁',bio:'低',timing:'随餐',food:'随餐',dose:'200–350 mg 元素镁/天',grade:'B',note:'含镁约 60%，吸收率低，常引起腹泻。'},
    {name:'柠檬酸镁',bio:'高',timing:'随餐',food:'随餐',dose:'100–300 mg 元素镁/天',grade:'A',note:'吸收好，腹泻风险较高，适合便秘者。'},
    {name:'甘氨酸镁',bio:'高',timing:'随餐或睡前',food:'随餐',dose:'100–300 mg 元素镁/天',grade:'B',note:'温和，适合长期使用和胃敏感者。'},
    {name:'苹果酸镁',bio:'高',timing:'随餐',food:'随餐',dose:'100–300 mg 元素镁/天',grade:'C',note:'吸收较好，研究规模较小。'},
    {name:'苏糖酸镁',bio:'中高',timing:'随餐',food:'随餐',dose:'1.5–2 g/天（约 100–150 mg 元素镁）',grade:'C',note:'宣称更易进入脑组织，人体结局证据有限。'},
    {name:'硫酸镁（外用）',bio:'低（经皮吸收证据弱）',timing:'睡前',food:'—',dose:'每次 15–30 分钟',grade:'C',note:'泡脚或浴盐，放松感可能来自温热刺激而非补镁。'}
  ],
  foods:[
    {name:'南瓜子',amount:'约 550 mg',per:'100 g',note:'同时富含锌'},
    {name:'杏仁',amount:'约 270 mg',per:'100 g',note:'热量高'},
    {name:'黑巧克力（70% 以上）',amount:'约 228 mg',per:'100 g',note:'糖分和热量需计入'},
    {name:'菠菜（熟）',amount:'约 58 mg',per:'100 g',note:'同时富含维生素 K 和叶酸'},
    {name:'黑豆（熟）',amount:'约 70–100 mg',per:'100 g',note:'豆类'},
    {name:'燕麦',amount:'约 177 mg',per:'100 g',note:'全谷物'}
  ],
  deficiency:{
    signs:['肌肉抽筋、眼皮跳','疲劳、乏力','心悸、心律失常','偏头痛','便秘','情绪低落、睡眠差'],
    groups:['全谷物和坚果摄入少','长期使用质子泵抑制剂','酗酒','糖尿病血糖控制不佳','吸收不良、炎症性肠病','长期腹泻或利尿剂','高强度运动大量出汗']
  },
  tests:[
    {name:'血清镁',sample:'静脉血',range:'约 0.7–1.0 mmol/L',note:'只反映细胞外液，正常不能排除缺乏。'},
    {name:'红细胞镁',sample:'静脉血',range:'按实验室参考范围',note:'更接近细胞内储备，但标准化程度不高。'},
    {name:'24 小时尿镁',sample:'24 小时尿液',range:'按实验室参考范围',note:'用于评估肾脏排泄，需同时看肾功能。'},
    {name:'镁负荷试验',sample:'静脉输注 + 尿液',range:'按方案判读',note:'研究或专科使用，不列入常规体检。'}
  ],
  cautions:['肾功能不全者补镁可能导致高镁血症，必须医生评估','高剂量可引起腹泻、腹痛','与四环素类、喹诺酮类抗生素、双膦酸盐同服需间隔 2–4 小时','与利尿剂合用可能增加镁流失'],
  sideEffects:[
    { effect: '腹泻、腹痛', frequency: '常见', note: '氧化镁和柠檬酸镁更易引起；减量或改用甘氨酸镁。' },
    { effect: '恶心', frequency: '不常见', note: '随餐服用可减轻。' },
    { effect: '嗜睡、乏力', frequency: '少见', note: '避免与镇静药同服；白天需警觉时减量。' },
    { effect: '高镁血症', frequency: '少见', note: '肾功能不全者风险最高，可致低血压、肌无力、心律失常，需急诊。' }
  ],
  special:[
    {who:'慢性肝病或酗酒',what:'酒精增加镁排泄，肝病常伴低镁；优先选择耐受性好的甘氨酸镁，剂量由医生确定。'},
    {who:'长期使用 PPI',what:'胃酸减少会降低镁吸收，长期使用者应关注血镁。'},
    {who:'肾功能不全',what:'排镁能力下降，自行补充有高镁风险，不要使用含镁泻药或大剂量补充剂。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Magnesium — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',kind:'机构'},
    {text:'Costello RB, et al. Perspective: The Case for an Evidence-Based Reference Interval for Serum Magnesium. Adv Nutr. 2016;7(6):977-993.',kind:'综述'},
    {text:'de Baaij JH, Hoenderop JG, Bindels RJ. Magnesium in man: implications for health and disease. Physiol Rev. 2015;95(1):1-46.',kind:'综述'},
    {text:'Mah J, Pitre T. Oral magnesium supplementation for insomnia in older adults: a systematic review and meta-analysis. BMC Complement Med Ther. 2021;21(1):97. doi:10.1186/s12906-021-03262-w',kind:'研究'},
  ],
  related:['calcium','vitamin-d','potassium','b6','b1']
},
{
  id:'zinc',
  name:'锌',
  en:'Zinc',
  category:'mineral',
  scoring:{unit:'mg',rni:12.5,ul:40,low:10,high:30,step:1},
  tagline:'免疫、伤口愈合和味觉都离不开它。补锌过量，反而会把铜耗光。',
  intro:[
    '锌是 300 多种酶的辅因子，参与 DNA 合成、蛋白质折叠、免疫细胞功能和伤口愈合。它还对味觉、皮肤屏障和生殖功能有直接影响。',
    '锌的吸收会被植酸、铁和钙抑制，动物性食物中的锌吸收率高于植物性食物。长期每天超过 40 mg 的补锌可能导致铜缺乏，出现贫血和神经症状。补锌不是越多越好。'
  ],
  roles:['免疫功能与炎症反应','伤口愈合','味觉与嗅觉','皮肤和黏膜屏障','DNA 合成与细胞分裂','生殖激素与精子生成'],
  intake:{
    main:'男 12.5 / 女 7.5 mg',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'9.5 / 12 mg/天'},
      {label:'可耐受最高摄入量',value:'40 mg/天'},
      {label:'长期高剂量',value:'需同时监测铜'}
    ],
    upper:'40 mg/天（中国 DRIs）',
    note:'动物性食物中的锌吸收率较高。以全谷物和豆类为主食时，植酸会增加锌的流失。'
  },
  timing:'随餐，避免与铁、钙同服',
  withFood:'随餐',
  forms:[
    {name:'硫酸锌',bio:'中',timing:'随餐',food:'随餐',dose:'10–25 mg 元素锌/天',grade:'A',note:'价格低，胃肠刺激较明显。'},
    {name:'葡萄糖酸锌',bio:'中高',timing:'随餐',food:'随餐',dose:'10–25 mg 元素锌/天',grade:'A',note:'耐受性较好，常用于含片。'},
    {name:'柠檬酸锌',bio:'高',timing:'随餐',food:'随餐',dose:'10–25 mg 元素锌/天',grade:'B',note:'吸收较好。'},
    {name:'双甘氨酸锌',bio:'高',timing:'随餐或空腹',food:'任意',dose:'10–25 mg 元素锌/天',grade:'B',note:'螯合形式，胃部耐受好。'},
    {name:'吡啶甲酸锌',bio:'高',timing:'随餐',food:'随餐',dose:'10–25 mg 元素锌/天',grade:'C',note:'吸收数据有限，不作为唯一选择。'}
  ],
  foods:[
    {name:'生蚝',amount:'约 71 mg',per:'100 g',note:'含量极高，一次不宜过多'},
    {name:'牛肉',amount:'约 4.8 mg',per:'100 g',note:'吸收率高'},
    {name:'南瓜子',amount:'约 7.8 mg',per:'100 g',note:'同时富含镁'},
    {name:'扁豆（熟）',amount:'约 1.3 mg',per:'100 g',note:'植酸影响吸收'},
    {name:'鸡蛋',amount:'约 1.1 mg',per:'100 g',note:'主要集中在蛋黄'}
  ],
  deficiency:{
    signs:['伤口愈合慢','味觉、嗅觉下降','脱发','皮炎，尤其是腔口周围','反复感染','儿童生长迟缓','性欲下降、精子质量下降'],
    groups:['红肉和贝类摄入少','严格素食','酗酒','慢性肝病','吸收不良、炎症性肠病','长期腹泻','妊娠和哺乳期','老年人']
  },
  tests:[
    {name:'血清锌',sample:'静脉血',range:'通常 < 70 µg/dL（10.7 µmol/L）提示可能缺乏',note:'受炎症、进食和采血时间影响，单次结果不够可靠。'},
    {name:'血浆锌 + 铜 / 铜蓝蛋白',sample:'静脉血',range:'按实验室参考范围',note:'长期高剂量补锌时用于筛查铜缺乏。'},
    {name:'发锌',sample:'头发',range:'不推荐作为唯一依据',note:'受洗发、染发和环境污染影响，临床价值有限。'}
  ],
  cautions:['长期每天 > 40 mg 可致铜缺乏、贫血和神经病变','空腹服用易恶心，随餐可减轻','与铁、钙同服会互相降低吸收，间隔 2 小时','含锌鼻喷剂可能引起嗅觉丧失，不建议使用'],
  sideEffects:[
    { effect: '恶心、胃部不适', frequency: '常见', note: '空腹服用更明显；随餐服用可减轻。' },
    { effect: '金属味', frequency: '不常见', note: '通常短暂，随餐或换用其他形式。' },
    { effect: '铜缺乏、贫血', frequency: '少见', note: '长期超过 40 mg/天时出现；需监测铜和血常规。' },
    { effect: '头痛', frequency: '少见', note: '减量后多可缓解。' }
  ],
  special:[
    {who:'慢性肝病',what:'肝病常伴锌缺乏和味觉改变，补充需监测铜和肝功能。'},
    {who:'长期补锌',what:'每 3–6 个月评估铜状态，避免出现小细胞性贫血和神经症状。'},
    {who:'感冒含片',what:'短期高剂量含片可能缩短病程，但证据不一致，不建议长期使用。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Zinc — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',kind:'机构'},
    {text:'Maret W, Sandstead HH. Zinc requirements and the risks and benefits of zinc supplementation. J Trace Elem Med Biol. 2006;20(1):3-18.',kind:'综述'},
    {text:'Prasad AS. Zinc in human health: effect of zinc on immune cells. Mol Med. 2008;14(5-6):353-357.',kind:'综述'},
    {text:'Hemila H. Zinc lozenges and the common cold: a meta-analysis comparing zinc acetate and zinc gluconate, and the role of zinc dosage. JRSM Open. 2017;8(5):2054270417694291. doi:10.1177/2054270417694291',kind:'研究'},
  ],
  related:['iron','copper','vitamin-a','b6','magnesium']
},
{
  id:'iron',
  name:'铁',
  en:'Iron',
  category:'mineral',
  scoring:{unit:'mg',rni:15,ul:42,low:10,high:60,step:1},
  tagline:'最常见的缺乏，也是最不该盲目补的一种。先看铁蛋白，再谈剂量。',
  intro:[
    '铁是血红蛋白、肌红蛋白和多种酶的组成部分，负责把氧气运到组织，并参与电子传递和 DNA 合成。缺铁会经历三个阶段：储存耗竭、红细胞生成缺铁、缺铁性贫血。',
    '铁补充剂最大的问题是“没缺也补”和“剂量越大越好”。铁过量会沉积在肝脏、心脏和胰腺，血色病患者尤其危险。对缺铁者，隔日补充往往比每日补充吸收更好，胃肠道刺激也更小。'
  ],
  roles:['血红蛋白携氧','肌红蛋白储氧','电子传递链','免疫细胞功能','神经递质合成','DNA 合成'],
  intake:{
    main:'男 12 / 女 18 mg',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'孕期',value:'29 mg/天'},
      {label:'哺乳期',value:'24 mg/天'},
      {label:'可耐受最高摄入量',value:'42 mg/天'}
    ],
    upper:'42 mg/天（中国 DRIs）',
    note:'育龄女性因月经损失，需要量高于男性。确诊缺铁后的治疗剂量通常高于推荐摄入量，需医生指导。'
  },
  timing:'空腹最佳；胃不适可随餐',
  withFood:'空腹吸收最好，随餐可减轻刺激',
  forms:[
    {name:'硫酸亚铁',bio:'中',timing:'空腹或随餐',food:'空腹最佳',dose:'60–120 mg 元素铁，隔日',grade:'A',note:'价格低，胃肠刺激大，常致便秘。'},
    {name:'富马酸亚铁',bio:'中',timing:'空腹或随餐',food:'空腹最佳',dose:'60–120 mg 元素铁，隔日',grade:'A',note:'元素铁含量约 33%，耐受性略好。'},
    {name:'葡萄糖酸亚铁',bio:'中',timing:'空腹或随餐',food:'空腹最佳',dose:'30–60 mg 元素铁/天',grade:'B',note:'元素铁含量约 12%，刺激较小，需要较多片剂。'},
    {name:'双甘氨酸铁',bio:'高',timing:'空腹或随餐',food:'任意',dose:'25–50 mg 元素铁/天',grade:'B',note:'螯合形式，胃肠耐受好，可与食物同服。'},
    {name:'羰基铁',bio:'中',timing:'随餐',food:'随餐',dose:'30–60 mg 元素铁/天',grade:'C',note:'释放缓慢，研究规模较小。'},
    {name:'血红素铁多肽',bio:'中高',timing:'随餐',food:'随餐',dose:'20–40 mg 元素铁/天',grade:'C',note:'动物来源，素食者不适用。'}
  ],
  foods:[
    {name:'猪肝',amount:'约 22.6 mg',per:'100 g',note:'血红素铁，吸收率高；孕期注意维生素 A'},
    {name:'鸭血',amount:'约 30.5 mg',per:'100 g',note:'血红素铁'},
    {name:'牛肉',amount:'约 2.8 mg',per:'100 g',note:'血红素铁'},
    {name:'蛤蜊',amount:'约 28 mg',per:'100 g',note:'同时富含 B12'},
    {name:'黑木耳（干）',amount:'约 97 mg',per:'100 g',note:'非血红素铁，泡发后按实际食用量计算'},
    {name:'菠菜（熟）',amount:'约 2.9 mg',per:'100 g',note:'非血红素铁，搭配维生素 C 提高吸收'}
  ],
  deficiency:{
    signs:['疲劳、乏力、注意力下降','面色苍白、心悸、气短','头晕、怕冷','指甲变脆、脱发','异食癖、不宁腿','儿童学习能力下降'],
    groups:['育龄女性，尤其月经量大','孕期和哺乳期','婴儿和青少年快速生长期','严格素食','消化道出血、痔疮','吸收不良、乳糜泻、炎症性肠病','长期使用 PPI','耐力运动人群']
  },
  tests:[
    {name:'血常规（血红蛋白、MCV、MCH）',sample:'静脉血',range:'按性别和实验室参考范围',note:'缺铁性贫血时血红蛋白下降、红细胞变小；但储存耗竭期可以正常。'},
    {name:'血清铁蛋白',sample:'静脉血',range:'< 15 µg/L 提示缺铁；< 30 µg/L 建议进一步评估',note:'炎症、感染、肝病和肿瘤会使铁蛋白升高，需结合 CRP 判读。'},
    {name:'转铁蛋白饱和度、总铁结合力',sample:'静脉血',range:'按实验室参考范围',note:'帮助区分缺铁与慢性病贫血。'},
    {name:'C 反应蛋白（CRP）',sample:'静脉血',range:'按实验室参考范围',note:'炎症时铁蛋白假性升高，必须一起看。'}
  ],
  cautions:['没有确诊缺铁就补铁，可能延误其他疾病诊断','铁过量可损伤肝脏、心脏和胰腺，血色病患者风险最高','与钙、茶、咖啡、牛奶同服会降低吸收','空腹铁剂常引起恶心、腹痛、便秘，可随餐但吸收下降','儿童误服铁剂可致命，需锁好存放'],
  sideEffects:[
    { effect: '便秘、黑便', frequency: '常见', note: '黑便是铁的正常表现；便秘可通过增加纤维和饮水缓解。' },
    { effect: '恶心、腹痛', frequency: '常见', note: '随餐服用可减轻，但吸收会下降；可分次或隔日服用。' },
    { effect: '牙齿染色', frequency: '不常见', note: '液体铁剂可染色，用吸管服用并及时漱口。' },
    { effect: '铁过载、肝损伤', frequency: '少见', note: '血色病或长期过量者风险最高；需监测铁蛋白。' },
    { effect: '过敏反应', frequency: '少见', note: '静脉铁剂可致严重过敏，需在医院给药。' }
  ],
  special:[
    {who:'育龄女性',what:'月经量大、经期长时应查血常规和铁蛋白，不要长期自行补铁。'},
    {who:'慢性肝病',what:'铁蛋白可能因炎症和肝细胞损伤升高，判读需要结合转铁蛋白饱和度和 CRP。'},
    {who:'血色病或铁过载',what:'避免任何含铁补充剂和维生素 C 高剂量同服，按血液科方案治疗。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Iron — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',kind:'机构'},
    {text:'Stoffel NU, et al. Iron absorption from supplements is greater with alternate day than with consecutive day dosing in iron-deficient anemic women. Haematologica. 2020;105(5):1232-1239.',kind:'研究'},
    {text:'Camaschella C. Iron deficiency. Blood. 2019;133(1):30-39.',kind:'综述'},
  ],
  related:['vitamin-c','b12','b9','zinc','copper']
},
{
  id:'selenium',
  name:'硒',
  en:'Selenium',
  category:'mineral',
  scoring:{unit:'µg',rni:60,ul:400,low:50,high:200,step:5},
  tagline:'抗氧化酶的核心，安全窗口却很窄。巴西坚果一两颗就够，多吃反而有害。',
  intro:[
    '硒以硒代半胱氨酸的形式参与谷胱甘肽过氧化物酶、硫氧还蛋白还原酶等抗氧化酶，也影响甲状腺激素代谢和免疫功能。它的需要量与中毒量之间的距离比多数营养素更近。',
    '中国部分地区（如克山病流行区）土壤硒含量低，历史上曾出现地方性硒缺乏。另一方面，长期每天超过 400 µg 可导致硒中毒，表现为脱发、指甲脆裂和蒜味口臭。'
  ],
  roles:['谷胱甘肽过氧化物酶抗氧化','甲状腺激素转化','免疫调节','精子形成','减轻重金属毒性（有限）'],
  intake:{
    main:'60 µg/天',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'65 / 78 µg/天'},
      {label:'可耐受最高摄入量',value:'400 µg/天'},
      {label:'巴西坚果',value:'1–2 颗/天已足够'}
    ],
    upper:'400 µg/天（中国 DRIs）',
    note:'巴西坚果的硒含量因产地差异极大，单颗可能含 50–90 µg，也可能远超 400 µg，不能按固定值估算。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'硒代蛋氨酸',bio:'高',timing:'随餐',food:'随餐',dose:'50–200 µg/天',grade:'A',note:'有机形式，吸收好，可储存于体内。'},
    {name:'硒酵母',bio:'高',timing:'随餐',food:'随餐',dose:'50–200 µg/天',grade:'B',note:'成分混合，不同产品差异大，看标示硒含量。'},
    {name:'亚硒酸钠',bio:'中',timing:'随餐',food:'随餐',dose:'50–200 µg/天',grade:'B',note:'无机形式，常用于强化食品。'},
    {name:'甲基硒代半胱氨酸',bio:'中高',timing:'随餐',food:'随餐',dose:'50–200 µg/天',grade:'C',note:'研究集中在癌症预防，结果不一致。'}
  ],
  foods:[
    {name:'巴西坚果',amount:'约 1917 µg',per:'100 g',note:'单颗约 5 g，含量差异极大，1–2 颗即可'},
    {name:'金枪鱼',amount:'约 90 µg',per:'100 g',note:'深海鱼，注意汞'},
    {name:'鸡蛋',amount:'约 30 µg',per:'100 g',note:'约 15 µg/个'},
    {name:'猪肝',amount:'约 40–60 µg',per:'100 g',note:''},
    {name:'海产品',amount:'约 30–80 µg',per:'100 g',note:'含量随产地变化'}
  ],
  deficiency:{
    signs:['心肌病（克山病，地方性）','大骨节病（Kashin-Beck）','免疫力下降','甲状腺功能异常','精子质量下降'],
    groups:['低硒地区居民','长期完全肠外营养未补充','吸收不良','慢性肾病','HIV 感染者']
  },
  tests:[
    {name:'血清或血浆硒',sample:'静脉血',range:'通常 < 70 µg/L 提示不足；100–150 µg/L 较充足',note:'反映近期摄入，炎症和肾功能会影响结果。'},
    {name:'谷胱甘肽过氧化物酶活性',sample:'静脉血',range:'按实验室参考范围',note:'功能学指标，研究中使用较多。'},
    {name:'指甲硒',sample:'指甲',range:'研究指标',note:'反映较长期暴露，临床不常用。'}
  ],
  cautions:['长期每天 > 400 µg 可致硒中毒：脱发、指甲脆裂、蒜味口臭、胃肠不适','高硒状态可能与 2 型糖尿病风险升高相关，但证据不一致','巴西坚果不能按“颗”精确补硒','与顺铂等化疗药物的相互作用需医生评估'],
  sideEffects:[
    { effect: '脱发、指甲脆裂', frequency: '少见', note: '长期超过 400 µg/天时的硒中毒表现，停药后多可恢复。' },
    { effect: '蒜味口臭', frequency: '不常见', note: '高剂量时出现，减量可缓解。' },
    { effect: '恶心、腹泻', frequency: '不常见', note: '随餐服用、减量。' },
    { effect: '皮疹', frequency: '少见', note: '停药观察。' }
  ],
  special:[
    {who:'甲状腺疾病',what:'硒参与甲状腺激素代谢，但自身免疫性甲状腺炎补硒的临床证据有限，不建议自行大剂量。'},
    {who:'低硒地区',what:'优先通过多样化饮食和强化食品，必要时小剂量补充，避免长期高剂量。'},
    {who:'孕期',what:'需要量略增，但过量同样有风险，复合维生素中的剂量通常足够。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Selenium — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/',kind:'机构'},
    {text:'Rayman MP. Selenium and human health. Lancet. 2012;379(9822):1256-1268.',kind:'综述'},
    {text:'Klein EA, et al. Vitamin E and the risk of prostate cancer: the Selenium and Vitamin E Cancer Prevention Trial (SELECT). JAMA. 2011;306(14):1549-1556. doi:10.1001/jama.2011.1437',kind:'研究'},
    {text:'Duffield-Lillico AJ, et al. Baseline characteristics and the effect of selenium supplementation on cancer incidence in a randomized clinical trial: a summary report of the Nutritional Prevention of Cancer Trial. Cancer Epidemiol Biomarkers Prev. 2002;11(7):630-639.',kind:'研究'},
  ],
  related:['iodine','vitamin-e','zinc','copper']
},
{
  id:'iodine',
  name:'碘',
  en:'Iodine',
  category:'mineral',
  scoring:{unit:'µg',rni:120,ul:600,low:100,high:300,step:10},
  tagline:'甲状腺激素的原料。缺与过量都会扰乱甲状腺，海带不是越多越好。',
  intro:[
    '碘是甲状腺合成三碘甲状腺原氨酸（T3）和甲状腺素（T4）的必需原料，影响基础代谢、生长发育和神经系统成熟。孕期缺碘对胎儿大脑发育的损害不可逆。',
    '中国大部分地区通过碘盐预防碘缺乏，普通人群通常不缺。问题出在两头：严格限盐或不吃碘盐的人可能不足，而长期大量吃海带、紫菜或海藻补充剂的人可能过量。'
  ],
  roles:['合成甲状腺激素','维持基础代谢','胎儿和儿童神经发育','甲状腺组织正常生长','体温调节'],
  intake:{
    main:'120 µg/天',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'孕期',value:'230 µg/天'},
      {label:'哺乳期',value:'240 µg/天'},
      {label:'可耐受最高摄入量',value:'600 µg/天'}
    ],
    upper:'600 µg/天（中国 DRIs）',
    note:'中国食盐加碘浓度因省份而异，通常 5 g 碘盐可提供约 100–150 µg 碘。孕期除碘盐外，通常还需要含碘补充剂。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'碘化钾',bio:'高',timing:'随餐',food:'随餐',dose:'150 µg/天',grade:'A',note:'标准形式，剂量准确，孕期复合维生素常用。'},
    {name:'碘酸钾',bio:'高',timing:'随餐',food:'随餐',dose:'150 µg/天',grade:'A',note:'食盐强化常用，稳定性好。'},
    {name:'海带 / 紫菜粉',bio:'不定',timing:'随餐',food:'随餐',dose:'按碘含量折算 100–150 µg 碘/天',grade:'C',note:'碘含量随品种和产地波动极大，过量风险高。'}
  ],
  foods:[
    {name:'碘盐',amount:'约 25 µg',per:'1 g 盐',note:'按当地加碘浓度计算，每天 5 g 约 125 µg'},
    {name:'海带（干）',amount:'含量差异极大',per:'100 g',note:'可能达到每日需要量的数十倍，不宜频繁大量食用'},
    {name:'紫菜（干）',amount:'约 4300 µg',per:'100 g',note:'少量调味即可'},
    {name:'海鱼',amount:'约 50–100 µg',per:'100 g',note:'每周 1–2 次'},
    {name:'牛奶',amount:'约 30 µg',per:'100 g',note:'受饲料和季节影响'}
  ],
  deficiency:{
    signs:['甲状腺肿大（地方性甲状腺肿）','甲状腺功能减退、怕冷、乏力','孕期缺碘影响胎儿神经发育','儿童生长和智力发育迟缓','流产、早产风险增加'],
    groups:['不使用碘盐且很少吃海产品','孕期和哺乳期','严格限盐的高血压患者','长期素食且不强化','低碘地区居民']
  },
  tests:[
    {name:'尿碘浓度',sample:'随机尿',range:'人群适宜中位数 100–199 µg/L；孕妇 150–249 µg/L',note:'适合评估人群，单次个体结果波动大，不能直接诊断。'},
    {name:'甲状腺功能（TSH、FT4、FT3）',sample:'静脉血',range:'按实验室参考范围',note:'反映甲状腺功能，不直接反映碘摄入。'},
    {name:'甲状腺超声',sample:'影像检查',range:'按结节和体积标准',note:'用于评估甲状腺肿、结节和结构异常。'},
    {name:'甲状腺球蛋白（Tg）',sample:'静脉血',range:'按实验室参考范围',note:'在人群碘营养监测中有参考价值。'}
  ],
  cautions:['长期碘过量可诱发甲状腺炎、甲状腺功能异常和结节','海带、紫菜、海藻补充剂的碘含量极不稳定','甲状腺功能亢进、桥本甲状腺炎和结节患者补碘需医生评估','孕期缺碘危害大，但也不应超过上限'],
  sideEffects:[
    { effect: '甲状腺功能异常', frequency: '不常见', note: '长期过量可致甲减或甲亢；甲状腺疾病患者需医生评估。' },
    { effect: '甲状腺肿大、结节', frequency: '少见', note: '碘过量可诱发；出现颈部肿块应就医。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药观察。' },
    { effect: '碘致甲亢', frequency: '少见', note: '结节性甲状腺肿患者风险更高，需监测。' }
  ],
  special:[
    {who:'孕期和哺乳期',what:'使用含碘的孕期复合维生素，通常每天 150–250 µg，具体按当地指南和尿碘情况。'},
    {who:'甲状腺结节或桥本甲状腺炎',what:'避免长期大量海藻类补充剂，碘盐正常食用即可，是否需要限碘由内分泌科决定。'},
    {who:'高血压需严格限盐',what:'限盐会同时减少碘摄入，必要时通过含碘食物或补充剂补足。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Iodine — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Iodine-HealthProfessional/',kind:'机构'},
    {text:'Zimmermann MB, Boelaert K. Iodine deficiency and thyroid disorders. Lancet Diabetes Endocrinol. 2015;3(4):286-295.',kind:'综述'},
  ],
  related:['selenium','iron','vitamin-a','b12']
},
{
  id:'copper',
  name:'铜',
  en:'Copper',
  category:'mineral',
  scoring:{unit:'mg',rni:0.8,ul:8,low:0.9,high:2,step:0.1},
  tagline:'铁代谢和神经髓鞘的隐形搭档。锌补多了，铜就会被挤走。',
  intro:[
    '铜是细胞色素 c 氧化酶、超氧化物歧化酶和铜蓝蛋白的辅因子，参与能量生成、铁转运、结缔组织交联和神经髓鞘形成。它和锌在肠道吸收上互相竞争。',
    '铜缺乏并不常见，但长期高剂量补锌、减重手术、严重吸收不良或长期肠外营养未补充铜时会出现。表现为贫血、中性粒细胞减少和神经病变，容易被误诊为其他疾病。'
  ],
  roles:['细胞色素 c 氧化酶与能量生成','铜蓝蛋白介导的铁转运','超氧化物歧化酶抗氧化','胶原与弹性蛋白交联','神经髓鞘形成','免疫功能'],
  intake:{
    main:'0.8 mg/天',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'0.9 / 1.1 mg/天'},
      {label:'可耐受最高摄入量',value:'8 mg/天'}
    ],
    upper:'8 mg/天（中国 DRIs）；美国为 10 mg/天',
    note:'坚果、动物内脏、贝类和可可粉是主要来源。一般复合维生素中的铜已能满足需要。'
  },
  timing:'随餐，与锌、铁间隔',
  withFood:'随餐',
  forms:[
    {name:'葡萄糖酸铜',bio:'高',timing:'随餐',food:'随餐',dose:'1–2 mg/天',grade:'B',note:'常见于复合矿物质。'},
    {name:'硫酸铜',bio:'中',timing:'随餐',food:'随餐',dose:'1–2 mg/天',grade:'B',note:'价格低，胃肠刺激较明显。'},
    {name:'双甘氨酸铜',bio:'高',timing:'随餐',food:'随餐',dose:'1–2 mg/天',grade:'C',note:'螯合形式，耐受性好，证据较少。'}
  ],
  foods:[
    {name:'牡蛎',amount:'约 4.6 mg',per:'100 g',note:'同时富含锌，比例需注意'},
    {name:'猪肝',amount:'约 5–7 mg',per:'100 g',note:'同时富含维生素 A 和铁'},
    {name:'可可粉',amount:'约 3.8 mg',per:'100 g',note:'黑巧克力含量较高'},
    {name:'腰果',amount:'约 2.2 mg',per:'100 g',note:'热量高'},
    {name:'蘑菇',amount:'约 0.3 mg',per:'100 g',note:''}
  ],
  deficiency:{
    signs:['小细胞性贫血，补铁无效','中性粒细胞减少','手脚麻木、步态不稳','骨质疏松','皮肤和毛发色素减退','免疫力下降'],
    groups:['长期高剂量补锌','减重手术后','严重吸收不良、乳糜泻','长期完全肠外营养未补充铜','胃旁路手术','罕见遗传性铜代谢障碍']
  },
  tests:[
    {name:'血清铜',sample:'静脉血',range:'约 70–140 µg/dL',note:'受炎症、妊娠和雌激素影响。'},
    {name:'铜蓝蛋白',sample:'静脉血',range:'约 20–35 mg/dL',note:'低值支持铜缺乏，也用于 Wilson 病评估。'},
    {name:'24 小时尿铜',sample:'24 小时尿液',range:'按实验室参考范围',note:'Wilson 病时升高，铜缺乏时降低。'}
  ],
  cautions:['长期补锌 > 40 mg/天会诱导铜缺乏','铜过量可致肝损伤和胃肠不适，Wilson 病患者严禁补充','与锌、铁同服会互相竞争吸收','不要使用来源不明的“铜补充剂”'],
  sideEffects:[
    { effect: '恶心、腹痛', frequency: '不常见', note: '随餐服用、减量。' },
    { effect: '肝损伤', frequency: '少见', note: '过量可致肝细胞损伤；Wilson 病患者严禁补充。' },
    { effect: '溶血、黄疸', frequency: '少见', note: '急性过量表现，需急诊。' },
    { effect: '影响锌、铁吸收', frequency: '不常见', note: '与锌、铁间隔 2 小时服用。' }
  ],
  special:[
    {who:'长期高剂量补锌',what:'每 3–6 个月检查血铜和铜蓝蛋白，必要时补铜。'},
    {who:'减重手术后',what:'复合微量元素中应包含铜，按术后方案复查。'},
    {who:'Wilson 病',what:'铜代谢障碍，必须限制铜摄入并按专科方案治疗。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Copper — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',kind:'机构'},
    {text:'Bost M, et al. Dietary copper and human health: Current evidence and unresolved issues. J Trace Elem Med Biol. 2016;35:107-115.',kind:'综述'},
  ],
  related:['zinc','iron','b12','vitamin-c']
},
{
  id:'chromium',
  name:'铬',
  en:'Chromium',
  category:'mineral',
  scoring:{unit:'µg',rni:35,ul:null,low:50,high:200,step:5},
  tagline:'被寄予降糖厚望，证据却始终不算硬。缺乏罕见，检测也没有可靠指标。',
  intro:[
    '三价铬被认为可以增强胰岛素作用，参与糖代谢。但人体研究结果并不一致，补充铬对血糖、血脂和体重的影响在不同试验中差异很大。',
    '铬缺乏在正常饮食人群中非常罕见，主要见于长期完全肠外营养未补充的患者。目前没有可靠的临床指标评价铬状态，因此“查铬”并不是常规体检项目。'
  ],
  roles:['可能增强胰岛素敏感性','参与糖和脂质代谢','辅助蛋白质合成'],
  intake:{
    main:'30 µg/天',
    mainLabel:'成人适宜摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'30 / 35 µg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'全谷物、西兰花、坚果和肉类是主要来源。精制糖和精制主食摄入高时，铬的流失可能增加。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'吡啶甲酸铬',bio:'中',timing:'随餐',food:'随餐',dose:'200–400 µg/天',grade:'C',note:'研究最常用，但血糖结局证据不一致。'},
    {name:'氯化铬',bio:'中',timing:'随餐',food:'随餐',dose:'200–400 µg/天',grade:'C',note:'无机形式，吸收率较低。'},
    {name:'烟酸铬',bio:'中',timing:'随餐',food:'随餐',dose:'200–400 µg/天',grade:'C',note:'吸收数据有限。'}
  ],
  foods:[
    {name:'西兰花',amount:'约 22 µg',per:'100 g',note:'同时富含维生素 C 和维生素 K'},
    {name:'全谷物',amount:'约 10–30 µg',per:'100 g',note:'精制后损失较多'},
    {name:'坚果',amount:'约 10–20 µg',per:'100 g',note:'热量高'},
    {name:'牛肉',amount:'约 2–5 µg',per:'100 g',note:''},
    {name:'啤酒酵母',amount:'约 30–60 µg',per:'100 g',note:'可作为强化来源'}
  ],
  deficiency:{
    signs:['糖耐量异常（罕见，多见于长期肠外营养）','体重下降、周围神经病（个案）','血脂异常（证据有限）'],
    groups:['长期完全肠外营养未补充铬','严重吸收不良','长期高糖饮食（理论风险）']
  },
  tests:[
    {name:'空腹血糖、HbA1c、胰岛素',sample:'静脉血',range:'按糖尿病诊断标准',note:'评价糖代谢，不能定位铬缺乏。'},
    {name:'血清/尿铬',sample:'血液或尿液',range:'无统一临床判读标准',note:'受饮食、采样和污染影响大，不作为常规检测。'}
  ],
  cautions:['高剂量可能影响肾功能，肾功能不全者慎用','吡啶甲酸铬的长期安全性数据有限','与胰岛素或降糖药合用可能增加低血糖风险','降糖效果不能替代饮食、运动和处方药'],
  sideEffects:[
    { effect: '低血糖', frequency: '不常见', note: '与胰岛素或降糖药合用时出现，需监测血糖。' },
    { effect: '恶心、腹泻', frequency: '不常见', note: '减量或随餐服用。' },
    { effect: '皮疹', frequency: '少见', note: '停药观察。' },
    { effect: '肾功能影响', frequency: '少见', note: '高剂量长期使用的数据有限；肾病患者慎用。' }
  ],
  special:[
    {who:'2 型糖尿病',what:'不要用铬补充剂替代降糖药。若使用，需监测血糖并与医生沟通。'},
    {who:'肾功能不全',what:'避免高剂量，相关安全性数据不足。'},
    {who:'减重人群',what:'铬的减重证据很弱，不值得为此长期高剂量服用。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Chromium — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Chromium-HealthProfessional/',kind:'机构'},
    {text:'Vincent JB. The biochemistry of chromium. J Nutr. 2000;130(4):715-718.',kind:'综述'},
    {text:'Balk EM, Tatsioni A, Lichtenstein AH, et al. Effect of chromium supplementation on glucose metabolism and lipids: a systematic review of randomized controlled trials. Diabetes Care. 2007;30(8):2154-2163.',kind:'综述'},
  ],
  related:['magnesium','b3','potassium']
},
{
  id:'potassium',
  name:'钾',
  en:'Potassium',
  category:'mineral',
  scoring:{unit:'mg',rni:2000,ul:null,low:1000,high:3500,step:100},
  tagline:'血压调节的主力，但补钾是最容易被低估风险的一件事。',
  intro:[
    '钾是细胞内最主要的阳离子，维持细胞膜电位、神经冲动、肌肉收缩和酸碱平衡。它还与钠共同调节血压，增加钾摄入有助于对抗高钠饮食的升压作用。',
    '健康人通过食物补钾安全有效，蔬菜、水果、豆类和薯类是主要来源。但钾补充剂不同：肾功能不全、使用 ACEI/ARB、螺内酯或非甾体抗炎药的人，补钾可能导致致命性高钾血症。'
  ],
  roles:['维持细胞膜电位','神经与肌肉兴奋性','心肌节律','血压调节','酸碱平衡','糖原合成'],
  intake:{
    main:'2000 mg/天',
    mainLabel:'成人适宜摄入量',
    groups:[
      {label:'预防高血压目标',value:'3600 mg/天（WHO 建议）'},
      {label:'孕期 / 哺乳期',value:'2000 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定（补充剂需谨慎）'}
    ],
    upper:'未制定；肾功能不全者需限制',
    note:'中国 DRIs 的 AI 为 2000 mg/天。增加蔬菜、水果、豆类和薯类是最安全的补钾方式。'
  },
  timing:'随餐，分次',
  withFood:'随餐',
  forms:[
    {name:'氯化钾',bio:'高',timing:'随餐',food:'随餐',dose:'99 mg/片（美国），中国多为处方',grade:'A',note:'常用于低钾血症治疗，需医生监测血钾和肾功能。'},
    {name:'柠檬酸钾',bio:'高',timing:'随餐',food:'随餐',dose:'按医嘱（常见 10–20 mEq/天）',grade:'A',note:'同时碱化尿液，常用于肾结石患者。'},
    {name:'葡萄糖酸钾',bio:'高',timing:'随餐',food:'随餐',dose:'10–20 mEq/天（医生指导）',grade:'B',note:'元素钾含量较低。'}
  ],
  foods:[
    {name:'土豆（带皮，熟）',amount:'约 421 mg',per:'100 g',note:'同时提供维生素 C'},
    {name:'菠菜（熟）',amount:'约 558 mg',per:'100 g',note:'同时富含叶酸和维生素 K'},
    {name:'牛油果',amount:'约 485 mg',per:'100 g',note:'热量较高'},
    {name:'香蕉',amount:'约 358 mg',per:'100 g',note:'一根约 400 mg'},
    {name:'黑豆（熟）',amount:'约 600 mg',per:'100 g',note:'同时富含镁和叶酸'},
    {name:'椰子水',amount:'约 250 mg',per:'100 ml',note:'糖分需注意'}
  ],
  deficiency:{
    signs:['肌肉无力、疲劳','心悸、心律不齐','便秘、腹胀','腿抽筋','严重时呼吸肌无力'],
    groups:['长期使用利尿剂','呕吐、腹泻','进食障碍','酗酒','原发性醛固酮增多症','长期高钠低钾饮食']
  },
  tests:[
    {name:'血清钾',sample:'静脉血',range:'约 3.5–5.0 mmol/L',note:'受溶血、采血和酸碱状态影响，不能完全代表体内总钾。'},
    {name:'心电图',sample:'心电图',range:'低钾可见 U 波、ST 压低；高钾可见 T 波高尖',note:'严重低钾或高钾时的心电改变可能危及生命。'},
    {name:'肾功能、醛固酮/肾素',sample:'血液',range:'按实验室参考范围',note:'帮助判断钾异常的原因。'}
  ],
  cautions:['肾功能不全者补钾可致高钾血症，必须医生指导','ACEI/ARB、螺内酯、非甾体抗炎药会增加高钾风险','钾片可能刺激胃黏膜，需随餐并整片吞服','不要用“低钠盐”替代普通盐后又额外补钾，低钠盐本身含钾'],
  sideEffects:[
    { effect: '胃肠刺激、恶心', frequency: '不常见', note: '随餐服用并整片吞服，不要嚼碎。' },
    { effect: '高钾血症', frequency: '少见', note: '肾功能不全或与 ACEI/ARB、保钾利尿剂合用时风险高，可致心悸、肌无力。' },
    { effect: '心律失常', frequency: '少见', note: '严重高钾可致命，需立即急诊。' }
  ],
  special:[
    {who:'高血压',what:'优先通过增加蔬果、豆类和薯类补钾，减少钠摄入；肾功能正常时食物补钾安全。'},
    {who:'慢性肾病',what:'排钾能力下降，通常需要限钾而非补钾，所有补充剂都要医生评估。'},
    {who:'服用 ACEI/ARB 或螺内酯',what:'定期监测血钾和肾功能，避免自行补钾。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Potassium — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',kind:'机构'},
    {text:'Aburto NJ, et al. Effect of increased potassium intake on cardiovascular risk factors and disease. BMJ. 2013;346:f1378.',kind:'研究'},
    {text:'Palmer BF, Clegg DJ. Physiology and pathophysiology of potassium homeostasis. Adv Physiol Educ. 2016;40(4):480-490.',kind:'综述'},
  ],
  related:['magnesium','calcium','b6','b1']
}
);

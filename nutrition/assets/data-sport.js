window.SUPPLEMENT_DATA = window.SUPPLEMENT_DATA || [];
window.SUPPLEMENT_DATA.push(
{
  id:'bcaa',
  name:'支链氨基酸',
  en:'Branched-Chain Amino Acids',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:5,high:10,step:0.5},
  tagline:'三种必需氨基酸；总蛋白不够时才有意义，够了再补收益很小。',
  intro:[
    '支链氨基酸包括亮氨酸、异亮氨酸和缬氨酸，都是人体不能合成的必需氨基酸。亮氨酸能启动肌肉蛋白合成信号，运动中也可能被肌肉直接氧化供能。',
    '但单独补充 BCAA 不能替代完整蛋白质。多数对照研究显示，在每日蛋白质达标（约 1.2–2.0 g/kg）的人群中，额外 BCAA 对增肌、力量和恢复的收益很小。它的价值主要在总蛋白摄入不足或限制饮食的场景。'
  ],
  roles:['肌肉蛋白合成信号','运动中供能','参与丙氨酸—葡萄糖循环','作为必需氨基酸参与整体氮平衡'],
  intake:{
    main:'无必需补充量',
    mainLabel:'一般人群',
    groups:[
      {label:'运动补充',value:'5–10 g/次'},
      {label:'每日蛋白质优先目标',value:'1.2–2.0 g/kg 体重'},
      {label:'可耐受范围',value:'无明确 UL'}
    ],
    upper:'无明确可耐受最高摄入量',
    note:'先用完整蛋白满足总量，再考虑 BCAA。乳清蛋白、鸡蛋、瘦肉和豆制品都含 BCAA。'
  },
  timing:'运动前或运动后',
  withFood:'空腹或随餐均可',
  forms:[
    {name:'2:1:1 粉剂',bio:'高',timing:'运动前或运动后',food:'任意',dose:'5–10 g/次',grade:'B',note:'亮氨酸比例较高，最常见。'},
    {name:'BCAA 胶囊',bio:'高',timing:'运动前后',food:'任意',dose:'5–10 g/天',grade:'C',note:'便于携带，单价通常更高。'},
    {name:'BCAA 液体',bio:'高',timing:'运动中',food:'任意',dose:'5–10 g/天',grade:'C',note:'注意添加糖和电解质。'},
    {name:'含 BCAA 的蛋白粉',bio:'高',timing:'运动后',food:'任意',dose:'20–30 g/次',grade:'A',note:'同时提供完整蛋白，通常比纯 BCAA 更实用。'}
  ],
  foods:[
    {name:'鸡胸肉',amount:'BCAA 约 5–6 g',per:'100 g',note:'蛋白质约 31 g'},
    {name:'鸡蛋',amount:'BCAA 约 2.4 g',per:'100 g',note:'氨基酸谱完整'},
    {name:'牛肉',amount:'BCAA 约 5 g',per:'100 g',note:'同时富含铁和锌'},
    {name:'北豆腐',amount:'BCAA 约 1.4 g',per:'100 g',note:'植物蛋白来源'}
  ],
  deficiency:{
    signs:['单独缺乏少见','总蛋白不足时整体氨基酸不足','减脂期肌肉流失','恢复变慢'],
    groups:['每日蛋白质摄入不足','老年人食欲差','严格限制饮食','高强度训练且能量不足']
  },
  tests:[
    {name:'血浆氨基酸谱',sample:'静脉血',range:'研究或专科项目',note:'用于评估整体氨基酸状态，非常规检查。'},
    {name:'白蛋白 / 前白蛋白',sample:'静脉血',range:'按实验室参考范围',note:'受炎症影响，不能单独判断蛋白质摄入。'},
    {name:'体成分与肌力测试',sample:'体成分仪 / 力量测试',range:'与基线比较',note:'比血检更能反映训练与营养效果。'}
  ],
  cautions:['不能替代完整蛋白质','高剂量可能改变色氨酸入脑，影响情绪和睡眠','肝肾功能不全者需医生评估','部分产品含添加糖，注意总能量'],
  sideEffects:[
    { effect: '胃肠不适', frequency: '不常见', note: '分次服用、随餐或稀释后饮用。' },
    { effect: '恶心', frequency: '不常见', note: '减量或运动后服用。' },
    { effect: '情绪、睡眠影响', frequency: '少见', note: '高剂量可能改变色氨酸入脑；出现明显情绪变化应停用。' },
    { effect: '血糖波动', frequency: '少见', note: '糖尿病或使用降糖药者需监测。' }
  ],
  special:[
    {who:'增肌人群',what:'优先保证每日总蛋白和力量训练，BCAA 不是必需项。'},
    {who:'减脂期',what:'能量缺口下蛋白质需求上升，完整蛋白优于纯 BCAA。'},
    {who:'老年人',what:'蛋白质分配比单次高剂量 BCAA 更重要，每餐 25–30 g 蛋白质。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Wolfe RR. Branched-chain amino acids and muscle protein synthesis in humans: myth or reality? J Int Soc Sports Nutr. 2017;14:30.',kind:'综述'},
    {text:'Kreider RB, et al. ISSN exercise & sports nutrition review update: research & recommendations. J Int Soc Sports Nutr. 2018;15:38.',kind:'指南'},
    {text:'Jackman SR, Witard OC, Philp A, et al. Branched-chain amino acid ingestion stimulates muscle myofibrillar protein synthesis following resistance exercise in humans. Front Physiol. 2017;8:390.',kind:'研究'},
  ],
  related:['creatine','b6','b12']
},
{
  id:'carnitine',
  name:'左旋肉碱',
  en:'L-Carnitine',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:1,high:2,step:0.1},
  tagline:'把长链脂肪酸运进线粒体的“搬运工”，但补它不等于燃脂。',
  intro:[
    '左旋肉碱负责把长链脂肪酸转运进线粒体氧化，同时参与乙酰基的缓冲。人体可以自身合成，红肉和乳制品是主要膳食来源，因此多数人并不缺乏。',
    '补充剂在减脂上的证据很弱：肉碱不足会限制脂肪氧化，但肉碱充足时再加量并不会显著提高燃脂。乙酰左旋肉碱在糖尿病周围神经病变等场景有研究，但属于辅助治疗，需医生评估。'
  ],
  roles:['长链脂肪酸转运','能量代谢','乙酰基缓冲','精子成熟与活力'],
  intake:{
    main:'无推荐补充量',
    mainLabel:'一般人群',
    groups:[
      {label:'常见补充量',value:'1–2 g/天'},
      {label:'乙酰左旋肉碱',value:'500–1500 mg/天'},
      {label:'原发性缺乏',value:'需医生处方'}
    ],
    upper:'无明确可耐受最高摄入量',
    note:'素食者摄入较低，但人体合成和肾脏重吸收通常能维持正常水平。确诊缺乏需要实验室证据。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'左旋肉碱酒石酸盐',bio:'中高',timing:'随餐',food:'随餐',dose:'1–2 g/天',grade:'B',note:'最常见的形式，水溶性好。'},
    {name:'乙酰左旋肉碱',bio:'高',timing:'随餐',food:'随餐',dose:'500–1500 mg/天',grade:'B',note:'更易透过血脑屏障，研究多用于神经病变。'},
    {name:'丙酰左旋肉碱',bio:'中',timing:'随餐',food:'随餐',dose:'1–2 g/天（证据有限）',grade:'C',note:'研究较少，主要用于心血管方向。'},
    {name:'左旋肉碱注射液',bio:'高',timing:'医疗场景',food:'—',dose:'仅处方（常见 1–3 g/天，静滴）',grade:'A',note:'用于确诊的原发性缺乏或透析患者。'}
  ],
  foods:[
    {name:'牛肉',amount:'约 90–160 mg',per:'100 g',note:'红肉是主要来源'},
    {name:'羊肉',amount:'约 150–190 mg',per:'100 g',note:'含量随部位变化'},
    {name:'牛奶',amount:'约 3–4 mg',per:'100 ml',note:'含量较低'},
    {name:'鳕鱼',amount:'约 4 mg',per:'100 g',note:'鱼类中含量中等'}
  ],
  deficiency:{
    signs:['肌肉无力、疲劳','心肌病','低血糖或高氨','发育迟缓（儿童）'],
    groups:['原发性肉碱缺乏','长期血液透析','丙戊酸治疗','严重吸收不良','严格素食且摄入不足']
  },
  tests:[
    {name:'血浆游离肉碱 / 酰基肉碱谱',sample:'静脉血',range:'按实验室参考范围',note:'串联质谱检测，是确诊的主要依据。'},
    {name:'尿有机酸',sample:'尿液',range:'按实验室参考范围',note:'帮助判断代谢异常类型。'},
    {name:'心电图 / 心脏超声',sample:'检查',range:'按专科判读',note:'疑似心肌病或原发性缺乏时需要。'}
  ],
  cautions:['高剂量可引起腹泻、腹痛','部分研究提示长期高剂量可能升高 TMAO，与心血管风险相关','癫痫患者慎用','甲状腺功能减退需先治疗','不要用肉碱替代运动和控制饮食'],
  sideEffects:[
    { effect: '腹泻、腹痛', frequency: '常见', note: '分次服用、随餐，减量可缓解。' },
    { effect: '恶心', frequency: '不常见', note: '随餐服用。' },
    { effect: '鱼腥味体味', frequency: '少见', note: '减量后多可缓解。' },
    { effect: 'TMAO 升高', frequency: '不常见', note: '长期高剂量可能升高 TMAO，心血管风险人群需评估。' },
    { effect: '癫痫阈值降低', frequency: '少见', note: '癫痫患者慎用。' }
  ],
  special:[
    {who:'减脂人群',what:'肉碱不是燃脂剂，能量缺口和训练才是核心。'},
    {who:'透析患者',what:'肉碱流失增加，补充需肾内科医生评估。'},
    {who:'服用丙戊酸',what:'可能继发肉碱缺乏，需监测血氨和酰基肉碱谱。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Pekala J, et al. L-carnitine—metabolic functions and meaning in humans life. Curr Drug Metab. 2011;12(7):667-678.',kind:'综述'},
    {text:'Evans AM, Fornasini G. Pharmacokinetics of L-carnitine. Clin Pharmacokinet. 2003;42(11):941-967.',kind:'综述'},
    {text:'Brass EP. Carnitine and sports medicine: use or abuse? Ann N Y Acad Sci. 2004;1033:67-78.',kind:'综述'},
  ],
  related:['coq10','b3','iron']
},
{
  id:'beta-alanine',
  name:'β-丙氨酸',
  en:'Beta-Alanine',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:3.2,high:6.4,step:0.2},
  tagline:'提升 1–4 分钟高强度项目的缓冲能力，刺痛是常见副作用。',
  intro:[
    'β-丙氨酸是肌肽合成的限速前体。补充后肌肉肌肽浓度上升，帮助缓冲运动产生的氢离子，从而延缓酸中毒。它对持续 60–240 秒的高强度项目效果相对明确。',
    '对马拉松等耐力项目、最大力量或静息状态，证据较弱。常见副作用是皮肤刺痛（感觉异常），与剂量和吸收速度有关，分次或随餐可以减轻。'
  ],
  roles:['肌肽合成前体','细胞内酸碱缓冲','延缓高强度运动中的酸中毒','可能改善短时耐力表现'],
  intake:{
    main:'3.2–6.4 g/天',
    mainLabel:'运动人群补充量',
    groups:[
      {label:'单次上限',value:'≤1.6 g，每日分 3–4 次'},
      {label:'起效时间',value:'连续 4 周以上'},
      {label:'缓释剂型',value:'3.2–6.4 g/天，分次，刺痛更轻'}
    ],
    upper:'无明确可耐受最高摄入量',
    note:'剂量与体重相关，研究常用 3.2–6.4 g/天。停用后肌肉肌肽会逐渐回落。'
  },
  timing:'随餐，分次',
  withFood:'随餐可减轻刺痛',
  forms:[
    {name:'游离 β-丙氨酸粉',bio:'高',timing:'随餐，分次',food:'随餐',dose:'3.2–6.4 g/天，分次',grade:'A',note:'最常见，刺痛感明显。'},
    {name:'缓释片',bio:'中高',timing:'随餐',food:'随餐',dose:'3.2–6.4 g/天',grade:'B',note:'释放慢，感觉异常较少。'},
    {name:'β-丙氨酸 + 肌酸复配',bio:'高',timing:'训练前后',food:'任意',dose:'β-丙氨酸 3.2–6.4 g + 肌酸 3–5 g/天',grade:'B',note:'两者机制不同，可联合使用。'},
    {name:'含 β-丙氨酸的能量胶',bio:'中',timing:'运动中',food:'任意',dose:'β-丙氨酸 1.6–3.2 g/份',grade:'C',note:'剂量通常不足，注意糖分。'}
  ],
  foods:[
    {name:'鸡胸肉',amount:'肌肽约 200–400 mg',per:'100 g',note:'肌肽含量高，但日常摄入难达研究剂量'},
    {name:'牛肉',amount:'肌肽约 200–350 mg',per:'100 g',note:'同时提供肌酸'},
    {name:'猪肉',amount:'肌肽约 150–250 mg',per:'100 g',note:'含量随部位变化'},
    {name:'鱼类',amount:'肌肽约 100–200 mg',per:'100 g',note:'部分深海鱼含量较高'}
  ],
  deficiency:{
    signs:['不属于经典缺乏症','低肌肽水平与短时高强度表现下降相关'],
    groups:['短时高强度项目运动员','素食者（肌肽摄入较低）','高强度间歇训练人群']
  },
  tests:[
    {name:'运动表现测试',sample:'场地 / 实验室',range:'与基线比较',note:'如 Wingate 测试、400 米计时，比血检更直接。'},
    {name:'肌肉肌肽含量',sample:'肌肉活检 / 磁共振',range:'研究项目',note:'临床不开展，仅用于研究。'},
    {name:'肾功能',sample:'静脉血',range:'按实验室参考范围',note:'高剂量补充前评估，肾功能不全者慎用。'}
  ],
  cautions:['皮肤刺痛、潮红常见，通常无害但会影响体验','必须分次服用，单次超过 1.6 g 刺痛更明显','肾功能不全者慎用','对耐力项目和最大力量证据弱，不要期待全面增能'],
  sideEffects:[
    { effect: '皮肤刺痛、潮红', frequency: '常见', note: '通常无害，1–2 小时内消退；分次或使用缓释剂型可减轻。' },
    { effect: '瘙痒', frequency: '常见', note: '与刺痛同时出现，减量或分次服用。' },
    { effect: '胃肠不适', frequency: '不常见', note: '随餐服用、分次。' },
    { effect: '头痛', frequency: '少见', note: '减量后多可缓解。' }
  ],
  special:[
    {who:'400 米 / 1500 米等项目',what:'证据相对充分，可连续补充 4 周以上再评估。'},
    {who:'马拉松跑者',what:'优先级低于碳水、补液和训练，β-丙氨酸不是必需。'},
    {who:'素食者',what:'膳食肌肽摄入低，补充后肌肉肌肽上升可能更明显。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'Trexler ET, et al. International society of sports nutrition position stand: Beta-Alanine. J Int Soc Sports Nutr. 2015;12:30.',kind:'指南'},
    {text:'Saunders B, et al. β-alanine supplementation to improve exercise capacity and performance: a systematic review and meta-analysis. Br J Sports Med. 2017;51(8):658-669.',kind:'综述'},
    {text:'Hobson RM, Saunders B, Ball G, et al. Effects of β-alanine supplementation on exercise performance: a meta-analysis. Amino Acids. 2012;43(1):25-37.',kind:'综述'},
  ],
  related:['creatine','bcaa','magnesium']
}
);

window.SUPPLEMENT_DATA = window.SUPPLEMENT_DATA || [];
window.SUPPLEMENT_DATA.push(
{
  id:'coq10',
  name:'辅酶 Q10',
  en:'Coenzyme Q10',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:100,high:300,step:10},
  tagline:'线粒体电子传递的辅酶。他汀相关肌痛的研究结果并不一致。',
  intro:[
    '辅酶 Q10 是线粒体电子传递链中的脂溶性醌类，参与 ATP 生成，也是唯一能在体内合成的脂溶性抗氧化剂。心脏、肝脏和肾脏等高耗能组织的浓度最高。',
    '补充剂主要用于他汀相关肌肉症状、心力衰竭辅助治疗和偏头痛预防。研究结果并不一致：心力衰竭的 Q-SYMBIO 试验显示获益，但他汀肌痛的随机试验多为阴性。它不是“人人必补”的抗衰老剂。'
  ],
  roles:['线粒体电子传递与 ATP 生成','脂溶性抗氧化','保护细胞膜和 LDL','参与心肌能量代谢'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'补充剂研究剂量',
    groups:[
      {label:'常见补充剂量',value:'100–300 mg/天'},
      {label:'心力衰竭辅助治疗',value:'300 mg/天（研究方案）'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'辅酶 Q10 不是必需营养素，人体可以合成。剂量效应关系不明确，随餐服用可提高吸收。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'泛醌（ubiquinone）',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'100–300 mg/天',grade:'B',note:'氧化型，研究证据最多，价格较低。'},
    {name:'泛醇（ubiquinol）',bio:'中高',timing:'随含脂肪的正餐',food:'随餐',dose:'100–300 mg/天',grade:'C',note:'还原型，理论上吸收更好，但临床结局证据少于泛醌。'},
    {name:'纳米乳化辅酶 Q10',bio:'中高',timing:'随含脂肪的正餐',food:'随餐',dose:'100–200 mg/天',grade:'C',note:'改善水溶性，吸收可能更稳定。'}
  ],
  foods:[
    {name:'猪心',amount:'约 11–30 mg',per:'100 g',note:'含量较高'},
    {name:'沙丁鱼',amount:'约 6–10 mg',per:'100 g',note:'同时富含 EPA/DHA'},
    {name:'牛肉',amount:'约 3–5 mg',per:'100 g',note:''},
    {name:'大豆油',amount:'约 7–10 mg',per:'100 g',note:'日常摄入量有限'},
    {name:'西兰花',amount:'约 1 mg',per:'100 g',note:''}
  ],
  deficiency:{
    signs:['疲劳、乏力（非特异）','他汀相关肌肉疼痛（证据不一致）','心力衰竭患者心肌浓度偏低','线粒体病患者更易缺乏'],
    groups:['心力衰竭','长期他汀使用者','老年人','线粒体病','吸收不良']
  },
  tests:[
    {name:'血浆辅酶 Q10',sample:'静脉血',range:'无统一临床判读标准',note:'受血脂和进食影响，主要用于研究。'},
    {name:'肌酸激酶（CK）',sample:'静脉血',range:'按实验室参考范围',note:'他汀肌痛时用于排除横纹肌溶解，但不能诊断辅酶 Q10 缺乏。'},
    {name:'心功能评估',sample:'超声心动图等',range:'按临床标准',note:'心力衰竭患者应在专科管理下使用。'}
  ],
  cautions:['可能减弱华法林抗凝效果，需监测 INR','可能轻度降低血压，与降压药合用需注意','胃肠道不适、失眠少见','不能替代他汀或心力衰竭的标准治疗'],
  sideEffects:[
    { effect: '胃部不适、恶心', frequency: '不常见', note: '随餐服用可减轻。' },
    { effect: '失眠', frequency: '不常见', note: '避免晚间服用。' },
    { effect: '皮疹', frequency: '少见', note: '停药观察。' },
    { effect: '血压下降、INR 降低', frequency: '少见', note: '与降压药或华法林合用时需监测。' }
  ],
  special:[
    {who:'心力衰竭',what:'Q-SYMBIO 试验使用 300 mg/天作为辅助治疗，必须在心内科医生管理下进行。'},
    {who:'他汀相关肌痛',what:'证据不一致，可短期试用并记录症状，但不要自行停用他汀。'},
    {who:'正在服用华法林',what:'补充前告知医生，监测 INR。'}
  ],
  refs:[
    {text:'中华医学会心血管病学分会. 中国心力衰竭诊断和治疗指南 2018. 中华心血管病杂志. 2018;46(10):760-789.',kind:'指南'},
    {text:'Mortensen SA, et al. The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure (Q-SYMBIO). JACC Heart Fail. 2014;2(6):641-649.',kind:'研究'},
    {text:'Hernández-Camacho JD, et al. Coenzyme Q10 supplementation in aging and disease. Front Physiol. 2018;9:44.',kind:'综述'},
    {text:'Littarru GP, Tiano L. Clinical aspects of coenzyme Q10: an update. Nutrition. 2010;26(3):250-254.',kind:'综述'},
  ],
  related:['vitamin-e','selenium','magnesium','creatine']
},
{
  id:'creatine',
  name:'肌酸',
  en:'Creatine',
  category:'sport',
  scoring:{unit:'g',rni:null,ul:null,low:3,high:5,step:0.5},
  tagline:'证据最充分的运动补剂之一，也会让肌酐化验看起来“变差”。',
  intro:[
    '肌酸不是维生素或矿物质，而是由精氨酸、甘氨酸和甲硫氨酸合成的含氮化合物。人体 95% 的肌酸储存在骨骼肌中，以磷酸肌酸形式快速再生 ATP。',
    '一水肌酸是研究最充分的运动补剂，能提高力量、爆发力和瘦体重。它会让血清肌酐升高，但多数情况下反映肌肉肌酸负荷增加，而不是肾损伤。肾功能异常者仍需先咨询医生。'
  ],
  roles:['磷酸肌酸供能系统','提高高强度运动表现','支持肌肉体积与力量增长','可能改善老年人肌少症','参与细胞能量缓冲'],
  intake:{
    main:'3–5 g/天',
    mainLabel:'维持剂量',
    groups:[
      {label:'加载方案',value:'20 g/天，分 4 次，连续 5 天'},
      {label:'维持方案',value:'3–5 g/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定（健康人群常规剂量安全性较好）',
    note:'加载方案可以更快饱和肌肉储备，但不加载、直接每天 3–5 g 也会在数周内达到同样水平。'
  },
  timing:'任意时间；训练后或随餐均可',
  withFood:'任意',
  forms:[
    {name:'一水肌酸',bio:'高',timing:'任意时间',food:'任意',dose:'3–5 g/天',grade:'A',note:'证据最充分、价格最低，是首选形式。'},
    {name:'盐酸肌酸',bio:'中',timing:'任意时间',food:'任意',dose:'3–5 g/天',grade:'C',note:'宣称吸收更好，但缺乏同等质量的对照研究。'},
    {name:'缓冲肌酸（Kre-Alkalyn）',bio:'中',timing:'任意时间',food:'任意',dose:'3–5 g/天',grade:'C',note:'稳定性宣称缺乏独立验证。'}
  ],
  foods:[
    {name:'牛肉',amount:'约 0.3–0.5 g',per:'100 g',note:'同时提供完整蛋白'},
    {name:'猪肉',amount:'约 0.3–0.5 g',per:'100 g',note:''},
    {name:'三文鱼',amount:'约 0.3–0.5 g',per:'100 g',note:''},
    {name:'鲱鱼',amount:'约 0.5–1.0 g',per:'100 g',note:'含量较高'}
  ],
  deficiency:{
    signs:['无典型缺乏病','素食者肌肉肌酸储备较低','老年人肌肉力量下降（多因素）','疲劳（非特异）'],
    groups:['严格素食','老年人','肌少症高风险','高强度力量训练者']
  },
  tests:[
    {name:'血清肌酐',sample:'静脉血',range:'按实验室参考范围',note:'补充肌酸后升高常见，不能直接诊断为肾损伤。'},
    {name:'胱抑素 C（Cystatin C）',sample:'静脉血',range:'按实验室参考范围',note:'不受肌肉量影响，可用于肾功能存疑时交叉验证。'},
    {name:'肾功能与尿检',sample:'血液 / 尿液',range:'按实验室参考范围',note:'有肾病者补充前应评估。'}
  ],
  cautions:['补充后血清肌酐升高，可能被误判为肾功能下降','肾功能不全者使用前必须咨询医生','初期可能出现 1–2 kg 水分增加','选择第三方检测产品，避免杂质污染'],
  sideEffects:[
    { effect: '体重增加（水分）', frequency: '常见', note: '初期 1–2 kg 水分增加属正常，不是脂肪。' },
    { effect: '腹胀、腹泻', frequency: '不常见', note: '分次服用、随餐，减少单次剂量。' },
    { effect: '肌肉痉挛', frequency: '不常见', note: '保证饮水；持续痉挛应停药评估。' },
    { effect: '血清肌酐升高', frequency: '常见', note: '补充后肌酐可升高，可能被误判为肾功能下降；需结合 eGFR 判断。' },
    { effect: '肾损伤（原有肾病）', frequency: '少见', note: '肾功能不全者使用前必须咨询医生。' }
  ],
  special:[
    {who:'健身人群',what:'每天 3–5 g 长期维持即可，不需要反复加载。'},
    {who:'严格素食',what:'基线肌酸储备低，补充后的力量和肌肉收益可能更明显。'},
    {who:'慢性肾病',what:'使用前必须评估，补充会干扰肌酐判读，需用胱抑素 C 等指标辅助。'}
  ],
  refs:[
    {text:'中华人民共和国国家卫生和计划生育委员会. GB 24154-2015 食品安全国家标准 运动营养食品通则.',kind:'标准'},
    {text:'Kreider RB, et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr. 2017;14:18.',kind:'指南'},
    {text:'Antonio J, et al. Common questions and misconceptions about creatine supplementation. J Int Soc Sports Nutr. 2021;18(1):13.',kind:'综述'},
    {text:'Branch JD. Effect of creatine supplementation on body composition and performance: a meta-analysis. Int J Sport Nutr Exerc Metab. 2003;13(2):184-198.',kind:'综述'},
  ],
  related:['coq10','magnesium','potassium','collagen']
},
{
  id:'probiotics',
  name:'益生菌',
  en:'Probiotics',
  category:'other',
  scoring:{unit:'亿 CFU',rni:null,ul:null,low:50,high:500,step:10},
  tagline:'菌株决定效果，不是“益生菌”三个字。',
  intro:[
    '益生菌是摄入足够数量后对宿主有益的活微生物。效果具有很强的菌株特异性和适应症特异性：同一菌属的不同菌株，在抗生素相关腹泻、肠易激综合征和便秘中的证据并不相同。',
    '健康人不需要长期补充益生菌。更明确的场景是抗生素相关腹泻、部分肠易激综合征和早产儿坏死性小肠结肠炎预防。免疫抑制、危重症和中心静脉导管患者使用前必须咨询医生。'
  ],
  roles:['调节肠道菌群','竞争性抑制病原体','产生短链脂肪酸','调节肠道免疫','改善部分功能性胃肠症状'],
  intake:{
    main:'无标准推荐量',
    mainLabel:'按菌株和适应症',
    groups:[
      {label:'常见剂量',value:'10⁸–10¹⁰ CFU/天'},
      {label:'抗生素相关腹泻',value:'与抗生素间隔 2 小时'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'CFU 不是越高越好，菌株和适应症匹配更重要。不同产品的保质期和活菌数差异很大。'
  },
  timing:'随餐或空腹，因菌株而异',
  withFood:'因菌株而异',
  forms:[
    {name:'多菌株复合制剂',bio:'菌株依赖',timing:'随餐或空腹',food:'因菌株而异',dose:'10⁸–10¹⁰ CFU/天',grade:'B',note:'适合多种场景，但要看具体菌株和证据。'},
    {name:'布拉氏酵母菌',bio:'高',timing:'随餐',food:'随餐',dose:'250–500 mg/天',grade:'A',note:'抗生素相关腹泻和艰难梭菌感染预防证据较好。'},
    {name:'鼠李糖乳杆菌 GG',bio:'高',timing:'随餐',food:'随餐',dose:'10⁹–10¹⁰ CFU/天',grade:'A',note:'儿童腹泻和抗生素相关腹泻研究较多。'}
  ],
  foods:[
    {name:'无糖酸奶',amount:'活菌数因产品而异',per:'100 g',note:'看标签是否含活性菌'},
    {name:'开菲尔',amount:'多种乳酸菌和酵母',per:'100 ml',note:'乳糖不耐受者注意'},
    {name:'发酵蔬菜',amount:'乳酸菌',per:'100 g',note:'高盐产品需注意钠'},
    {name:'纳豆',amount:'枯草杆菌纳豆亚种',per:'100 g',note:'同时富含维生素 K2'}
  ],
  deficiency:{
    signs:['菌群失衡不是临床诊断','抗生素相关腹泻','部分肠易激综合征症状','便秘、腹胀（多因素）'],
    groups:['长期使用抗生素','肠易激综合征','免疫力低下','早产儿','长期高糖低纤维饮食']
  },
  tests:[
    {name:'粪便常规与培养',sample:'粪便',range:'按实验室参考范围',note:'用于排查病原体，不评价益生菌效果。'},
    {name:'肠道菌群测序',sample:'粪便',range:'无统一临床判读标准',note:'研究工具，不能诊断“菌群缺乏”。'},
    {name:'症状记录',sample:'—',range:'—',note:'腹泻次数、腹痛评分比菌群检测更实用。'}
  ],
  cautions:['免疫抑制、危重症、中心静脉导管患者可能发生菌血症','短肠综合征和严重肠道屏障受损者慎用','初期可能腹胀、排气增多','与抗生素同服需间隔 2 小时'],
  sideEffects:[
    { effect: '腹胀、排气增多', frequency: '常见', note: '初期常见，通常 1–2 周内减轻；持续不适可减量。' },
    { effect: '腹泻', frequency: '不常见', note: '减量或更换菌株；持续腹泻需就医。' },
    { effect: '皮疹', frequency: '少见', note: '停药观察。' },
    { effect: '菌血症（免疫抑制者）', frequency: '少见', note: '免疫抑制、危重症、中心静脉导管患者风险最高，需医生评估。' }
  ],
  special:[
    {who:'使用抗生素',what:'选择有证据的菌株，与抗生素间隔 2 小时，疗程结束后可短期使用。'},
    {who:'免疫力低下',what:'使用前必须咨询医生，避免活菌制剂导致感染。'},
    {who:'肠易激综合征',what:'选择对应菌株，记录 4 周症状变化，无效则停用。'}
  ],
  refs:[
    {text:'国家卫生健康委员会. 可用于食品的菌种名单（2022年版）.',kind:'标准'},
    {text:'Goldenberg JZ, et al. Probiotics for the prevention of Clostridium difficile-associated diarrhea in adults and children. Cochrane Database Syst Rev. 2017;12:CD006095.',kind:'综述'},
    {text:'World Gastroenterology Organisation. Probiotics and Prebiotics. Global Guidelines, 2017.',url:'https://www.worldgastroenterology.org/guidelines/probiotics-and-prebiotics',kind:'指南'},
    {text:'Suez J, Zmora N, Segal E, Elinav E. The pros, cons, and many unknowns of probiotics. Nat Med. 2019;25(5):716-729.',kind:'综述'},
  ],
  related:['b12','zinc','collagen','vitamin-a']
},
{
  id:'collagen',
  name:'胶原蛋白肽',
  en:'Collagen peptides',
  category:'other',
  scoring:{unit:'g',rni:null,ul:null,low:2.5,high:10,step:0.5},
  tagline:'皮肤与关节的原料，但吃进去的胶原不会直接变成脸上的胶原。',
  intro:[
    '胶原蛋白是人体含量最高的蛋白质，提供皮肤、骨骼、肌腱和血管的结构支撑。补充剂使用的是水解胶原肽，经过消化后以氨基酸和小肽形式吸收，再供身体重新合成蛋白质。',
    '部分随机试验显示，每天 2.5–10 g 水解胶原肽可以改善皮肤弹性和关节疼痛，但效果通常温和，研究周期较短。它不是完整蛋白，不能替代日常蛋白质摄入。'
  ],
  roles:['提供甘氨酸、脯氨酸、羟脯氨酸','支持皮肤弹性和水合','支持关节软骨基质','参与骨骼和结缔组织结构'],
  intake:{
    main:'2.5–10 g/天',
    mainLabel:'研究使用剂量',
    groups:[
      {label:'皮肤研究',value:'2.5–5 g/天，持续 8–12 周'},
      {label:'关节研究',value:'5–10 g/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'胶原蛋白肽缺乏色氨酸，不是完整蛋白。日常蛋白质摄入不足时，优先保证肉、蛋、奶、豆，而不是加胶原。'
  },
  timing:'任意时间，随餐或空腹',
  withFood:'任意',
  forms:[
    {name:'水解胶原蛋白肽',bio:'高',timing:'任意时间',food:'任意',dose:'2.5–10 g/天',grade:'B',note:'分子量小，吸收较快，研究最常用。'},
    {name:'明胶',bio:'中',timing:'随餐',food:'随餐',dose:'5–10 g/天',grade:'C',note:'未充分水解，氨基酸释放较慢。'},
    {name:'胶原蛋白 + 维生素 C',bio:'高',timing:'随餐',food:'随餐',dose:'胶原 2.5–10 g + VC 50–100 mg/天',grade:'C',note:'维生素 C 是胶原羟化的辅因子，但额外添加的必要性有限。'}
  ],
  foods:[
    {name:'猪皮',amount:'胶原蛋白丰富',per:'100 g',note:'脂肪含量也高'},
    {name:'鸡爪',amount:'胶原蛋白丰富',per:'100 g',note:'钠和脂肪需注意'},
    {name:'鱼皮',amount:'胶原蛋白丰富',per:'100 g',note:''},
    {name:'骨汤',amount:'含量差异极大',per:'250 ml',note:'不能按固定剂量估算'}
  ],
  deficiency:{
    signs:['皮肤松弛、伤口愈合慢（多因素）','关节疼痛（非特异）','蛋白质缺乏时更明显','维生素 C 缺乏会影响胶原合成'],
    groups:['蛋白质摄入不足','维生素 C 缺乏','老年人','绝经后女性','吸烟者']
  },
  tests:[
    {name:'血清总蛋白、白蛋白',sample:'静脉血',range:'按实验室参考范围',note:'评价整体蛋白质营养，不评价胶原状态。'},
    {name:'皮肤弹性 / 关节影像',sample:'研究设备',range:'研究指标',note:'临床不常规，主要用于试验。'}
  ],
  cautions:['不是完整蛋白，不能替代日常蛋白质','可能引起胃肠不适','对鱼、蛋或牛来源过敏者需看清来源','部分产品重金属检测不足，选择有第三方检测的品牌'],
  sideEffects:[
    { effect: '腹胀、腹泻', frequency: '不常见', note: '从低剂量开始，分次服用。' },
    { effect: '恶心', frequency: '不常见', note: '随餐或睡前服用。' },
    { effect: '过敏反应', frequency: '少见', note: '对鱼、蛋或牛来源过敏者需看清来源；出现荨麻疹、喘息需急诊。' },
    { effect: '皮疹', frequency: '少见', note: '停药观察。' }
  ],
  special:[
    {who:'皮肤老化',what:'优先防晒、保证蛋白质和维生素 C，再考虑胶原肽。'},
    {who:'关节疼痛',what:'胶原肽证据温和，不能替代康复训练和体重管理。'},
    {who:'肾功能不全',what:'高蛋白摄入需医生评估，胶原肽同样计入蛋白质总量。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食指南（2022）. 人民卫生出版社, 2022.',kind:'指南'},
    {text:'Choi FD, et al. Oral Collagen Supplementation: A Systematic Review of Dermatological Applications. J Drugs Dermatol. 2019;18(1):9-16.',kind:'综述'},
    {text:'de Miranda RB, et al. Effects of hydrolyzed collagen supplementation on skin aging: a systematic review and meta-analysis. Int J Dermatol. 2021;60(12):1449-1461.',kind:'研究'},
    {text:'Hexsel D, Zague V, Schunck M, et al. Oral supplementation with specific bioactive collagen peptides improves nail growth and reduces symptoms of brittle nails. J Cosmet Dermatol. 2017;16(4):520-526.',kind:'研究'},
  ],
  related:['vitamin-c','zinc','creatine','probiotics']
},
{
  id:'melatonin',
  name:'褪黑素',
  en:'Melatonin',
  category:'other',
  scoring:{unit:'mg',rni:null,ul:null,low:0.5,high:5,step:0.1},
  tagline:'调节入睡时相，不是安眠药；剂量越小，越不容易第二天发懵。',
  intro:[
    '褪黑素由松果体在暗环境中分泌，向身体传递“天黑了”的信号。补充褪黑素主要作用是提前入睡时相，对倒时差、轮班和入睡困难有帮助，而不是像安眠药那样直接镇静。',
    '小剂量（0.5–3 mg）通常已经足够，提前 30–60 分钟服用更符合生理节律。对慢性失眠，行为治疗（CBT-I）仍是一线方案；长期高剂量使用的安全性数据有限。'
  ],
  roles:['调节昼夜节律','缩短入睡潜伏期','缓解倒时差','抗氧化（生理浓度）'],
  intake:{
    main:'0.5–5 mg',
    mainLabel:'睡前 30–60 分钟',
    groups:[
      {label:'倒时差 / 轮班',value:'0.5–3 mg'},
      {label:'老年人',value:'从 0.5 mg 开始'},
      {label:'保健食品常见上限',value:'3 mg/天'}
    ],
    upper:'无明确可耐受最高摄入量；长期高剂量数据有限',
    note:'中国将褪黑素列入保健食品原料目录，常见剂量不超过 3 mg。缓释处方剂型需医生开具。'
  },
  timing:'睡前 30–60 分钟',
  withFood:'空腹或随餐均可',
  forms:[
    {name:'速释片',bio:'中',timing:'睡前 30–60 分钟',food:'任意',dose:'0.5–3 mg',grade:'A',note:'适合入睡困难，起效快。'},
    {name:'缓释片',bio:'中',timing:'睡前 1–2 小时',food:'任意',dose:'2–5 mg',grade:'B',note:'适合夜间易醒，需医生评估。'},
    {name:'舌下含片 / 喷雾',bio:'高',timing:'睡前',food:'任意',dose:'0.5–3 mg',grade:'C',note:'吸收快，但产品差异大。'},
    {name:'褪黑素软糖',bio:'中',timing:'睡前',food:'任意',dose:'0.5–3 mg，睡前 30–60 分钟',grade:'C',note:'注意含糖量和儿童误食。'}
  ],
  foods:[
    {name:'酸樱桃',amount:'褪黑素约 1–13 ng',per:'100 g',note:'含量很低，研究多用浓缩汁'},
    {name:'核桃',amount:'少量',per:'100 g',note:'天然含量受品种影响'},
    {name:'牛奶',amount:'微量',per:'100 ml',note:'色氨酸比褪黑素更有意义'},
    {name:'燕麦',amount:'微量',per:'100 g',note:'不能作为治疗剂量'}
  ],
  deficiency:{
    signs:['入睡困难','睡眠时相延迟','倒时差','轮班睡眠障碍'],
    groups:['跨时区旅行者','轮班工作者','老年人','盲人节律障碍','长期夜间光照']
  },
  tests:[
    {name:'睡眠日记 + 腕表活动记录',sample:'自评 / 可穿戴设备',range:'按睡眠模式判读',note:'评估昼夜节律最实用的方法。'},
    {name:'唾液或尿褪黑素节律',sample:'唾液 / 尿液',range:'专科项目',note:'用于怀疑节律障碍时，非常规检查。'},
    {name:'多导睡眠监测',sample:'睡眠实验室',range:'按呼吸与睡眠分期判读',note:'用于排查睡眠呼吸暂停等继发原因。'}
  ],
  cautions:['服用后不要驾车或操作机械','可能引起白天嗜睡、头痛、恶心','与抗凝药、免疫抑制剂、降压药、降糖药可能相互作用','孕期、哺乳期、儿童和自身免疫病患者慎用','长期高剂量安全性数据不足'],
  sideEffects:[
    { effect: '白天嗜睡', frequency: '常见', note: '减量、提前服用时间；服药后不要驾车或操作机械。' },
    { effect: '头痛', frequency: '不常见', note: '减量后多可缓解。' },
    { effect: '恶心', frequency: '不常见', note: '随餐或睡前服用。' },
    { effect: '噩梦、情绪低落', frequency: '少见', note: '停药观察，持续情绪问题需就医。' },
    { effect: '血压、血糖变化', frequency: '少见', note: '与降压药、降糖药合用时需监测。' }
  ],
  special:[
    {who:'倒时差',what:'抵达目的地后按当地时间睡前服用，0.5–3 mg，连续 2–5 天。'},
    {who:'轮班工作者',what:'在计划睡眠前 30–60 分钟服用，配合遮光和固定作息。'},
    {who:'慢性失眠',what:'首选 CBT-I；褪黑素对入睡时相有帮助，但不能替代行为治疗。'}
  ],
  refs:[
    {text:'国家市场监督管理总局. 保健食品原料目录 褪黑素.',kind:'标准'},
    {text:'Sateia MJ, et al. Clinical Practice Guideline for the Pharmacologic Treatment of Chronic Insomnia in Adults. J Clin Sleep Med. 2017;13(2):307-349.',kind:'指南'},
    {text:'National Center for Complementary and Integrative Health. Melatonin: What You Need To Know.',url:'https://www.nccih.nih.gov/health/melatonin',kind:'机构'},
    {text:'Buscemi N, Vandermeer B, Hooton N, et al. The efficacy and safety of exogenous melatonin for primary sleep disorders: a meta-analysis. J Gen Intern Med. 2005;20(12):1151-1158.',kind:'综述'},
  ],
  related:['magnesium','b6','vitamin-d']
}
);

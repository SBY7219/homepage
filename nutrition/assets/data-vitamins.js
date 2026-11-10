window.SUPPLEMENT_DATA = window.SUPPLEMENT_DATA || [];
window.SUPPLEMENT_DATA.push(
{
  id:'vitamin-a',
  name:'维生素 A',
  en:'Vitamin A',
  category:'vitamin-fat',
  scoring:{unit:'µg',rni:750,ul:3000,low:600,high:1500,step:10},
  tagline:'视觉与黏膜屏障的守门人，也是少数“缺了要补、补多会伤肝”的脂溶性维生素。',
  intro:[
    '维生素 A 参与视紫红质的合成、上皮细胞分化和免疫调节。它的来源分两类：动物性食物中的视黄醇已经成形，植物中的类胡萝卜素需要在体内转化。两者的标签单位可以相同，实际利用效率并不相同。',
    '补充剂里的维生素 A 多以视黄醇棕榈酸酯或乙酸酯的形式出现，吸收快，但过量会在肝脏蓄积。孕期高剂量有明确致畸风险。把它当作“有上限的脂溶性营养素”来对待，比当作可以随意加量的抗氧化剂更稳妥。'
  ],
  roles:['维持暗光下的视觉功能','支持皮肤、呼吸道和肠道黏膜的完整性','参与免疫细胞分化与抗体生成','促进生长发育与生殖功能','帮助铁从储存形式释放，参与红细胞生成'],
  intake:{
    main:'男 800 / 女 700 µg RAE',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'可耐受最高摄入量',value:'3000 µg RAE/天（仅预成形维生素 A）'},
      {label:'β-胡萝卜素',value:'不适用该上限'},
      {label:'孕期',value:'不建议自行高剂量补充'}
    ],
    upper:'3000 µg RAE/天（中国 DRIs，预成形维生素 A）',
    note:'1 µg RAE 相当于 1 µg 视黄醇，或约 12 µg β-胡萝卜素。孕期总量要把复合维生素、鱼肝油和维 A 酸类药物一起算进去。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'视黄醇棕榈酸酯 / 乙酸酯',bio:'高',timing:'随含脂肪的正餐',food:'随餐',dose:'750–1500 µg RAE/天',grade:'A',note:'直接利用。孕期需把所有来源相加，避免超过上限。'},
    {name:'β-胡萝卜素',bio:'中（按需转化）',timing:'随含脂肪的正餐',food:'随餐',dose:'3–6 mg/天',grade:'B',note:'转化率受基因、膳食脂肪和营养状态影响。吸烟者高剂量补充与肺癌风险升高相关。'},
    {name:'混合类胡萝卜素',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'5–10 mg/天 总类胡萝卜素',grade:'C',note:'各成分比例差异大，不能按 β-胡萝卜素的剂量直接换算。'}
  ],
  foods:[
    {name:'猪肝',amount:'约 4972 µg RAE',per:'100 g',note:'一周一次已足够，孕期控制在少量'},
    {name:'鸡肝',amount:'约 3272 µg RAE',per:'100 g',note:'同样属于高浓度来源'},
    {name:'胡萝卜（熟）',amount:'约 835 µg RAE',per:'100 g',note:'β-胡萝卜素，搭配油脂吸收更好'},
    {name:'红薯（烤）',amount:'约 709 µg RAE',per:'100 g',note:'β-胡萝卜素'},
    {name:'菠菜（熟）',amount:'约 469 µg RAE',per:'100 g',note:'β-胡萝卜素，同时含叶黄素'}
  ],
  deficiency:{
    signs:['夜间视力下降、干眼','结膜和角膜干燥，严重时角膜软化','皮肤干燥、毛囊角化','反复呼吸道或肠道感染','儿童生长迟缓'],
    groups:['长期不吃动物性食物，且深色蔬果摄入不足','脂肪吸收不良、肝胆胰疾病','长期酗酒','麻疹或其他严重感染期间','孕期和哺乳期需求增加']
  },
  tests:[
    {name:'血清视黄醇',sample:'静脉血',range:'成人约 1.05–3.15 µmol/L；低于 0.70 µmol/L 提示缺乏',note:'炎症时视黄醇结合蛋白下降，结果可能假性偏低。'},
    {name:'暗适应检查',sample:'眼科功能检查',range:'与同龄参考值比较',note:'早期缺乏时可能比血检更敏感，但需要专业设备。'}
  ],
  cautions:['孕期每天摄入超过 3000 µg RAE 的预成形维生素 A 有致畸风险','吸烟者长期高剂量补充 β-胡萝卜素与肺癌风险升高相关','肝病患者储存和代谢能力下降，过量风险更高','与异维 A 酸、阿维 A 等维 A 酸类药物叠加可致中毒'],
  sideEffects:[
    { effect: '头痛、恶心、呕吐（急性过量）', frequency: '少见', note: '短期超大剂量可出现颅内压升高；立即停药并就医。' },
    { effect: '皮肤干燥、脱屑、口唇干裂', frequency: '不常见', note: '长期较高剂量时出现，减量后多可缓解。' },
    { effect: '肝酶升高、肝损伤', frequency: '少见', note: '肝病患者风险更高；出现乏力、尿黄应停药查肝功能。' },
    { effect: '视物模糊、剧烈头痛', frequency: '少见', note: '提示良性颅内压升高，需急诊评估。' },
    { effect: '孕期致畸风险', frequency: '少见', note: '孕早期高剂量预成形维生素 A 与出生缺陷相关，孕期不要自行加量。' }
  ],
  special:[
    {who:'备孕与孕期',what:'优先从食物获取；如需复合维生素，核对维 A 形式与总量，避免再单独加服鱼肝油。'},
    {who:'肝胆疾病或脂肪吸收不良',what:'吸收可能下降，但补充过量时毒性风险也更高，剂量应由医生确定。'},
    {who:'长期酗酒',what:'肝储存受损，同时存在锌缺乏，维 A 的转运和利用都会受影响。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Vitamin A — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/',kind:'机构'},
    {text:'Linus Pauling Institute. Vitamin A.',url:'https://lpi.oregonstate.edu/mic/vitamins/vitamin-A',kind:'综述'},
    {text:'Wiseman EM, Bar-El Dadon S, Reifen R. The vicious cycle of vitamin A deficiency: a review. Crit Rev Food Sci Nutr. 2017;57(17):3703-3714.',kind:'综述'},
    {text:'The Alpha-Tocopherol, Beta-Carotene Cancer Prevention Study Group. The effect of vitamin E and beta carotene on the incidence of lung cancer and other cancers in male smokers. N Engl J Med. 1994;330(15):1029-1035. doi:10.1056/NEJM199404143301501',kind:'研究'},
    {text:'Omenn GS, et al. Effects of a combination of beta carotene and vitamin A on lung cancer and cardiovascular disease. N Engl J Med. 1996;334(18):1150-1155. doi:10.1056/NEJM199605023341802',kind:'研究'},
  ],
  related:['vitamin-d','vitamin-e','vitamin-k','zinc','iron']
},
{
  id:'vitamin-d',
  name:'维生素 D',
  en:'Vitamin D',
  category:'vitamin-fat',
  scoring:{unit:'µg',rni:10,ul:50,low:10,high:50,step:1},
  tagline:'决定钙去向的激素前体。缺乏很常见，但“补得越多越好”是另一回事。',
  intro:[
    '维生素 D 更像一种激素前体：皮肤在紫外线照射下合成，或从食物和补充剂获得，再经肝脏和肾脏转化为有活性的骨化三醇。它负责把钙和磷送进血液，也参与肌肉、免疫和胰岛素功能。',
    '血清 25-羟维生素 D 是判断储备的指标。缺乏与骨软化、肌力下降和跌倒风险相关；但大规模试验显示，给不缺的人额外补充并不能预防骨折或心血管事件。先检测、再决定剂量，比长期盲目大剂量更合理。'
  ],
  roles:['促进肠道吸收钙和磷','维持血钙稳定，支持骨矿化','参与肌肉收缩与平衡','调节免疫反应','影响胰岛素分泌与敏感性'],
  intake:{
    main:'10 µg（400 IU）/天',
    mainLabel:'18–64 岁推荐摄入量',
    groups:[
      {label:'65 岁以上',value:'15 µg（600 IU）/天'},
      {label:'孕期 / 哺乳期',value:'10 µg（400 IU）/天'},
      {label:'可耐受最高摄入量',value:'50 µg（2000 IU）/天'}
    ],
    upper:'50 µg（2000 IU）/天（中国 DRIs）；美国 NIH 为 100 µg（4000 IU）/天',
    note:'以上是普通成人的日常预防量。确诊缺乏后的治疗方案通常需要更高剂量，由医生根据 25(OH)D 水平决定。'
  },
  timing:'随含脂肪的正餐或午餐',
  withFood:'随餐',
  forms:[
    {name:'胆钙化醇（D3）',bio:'高',timing:'随含脂肪的正餐',food:'随餐',dose:'1000–2000 IU/天',grade:'A',note:'首选形式。同等剂量下提升 25(OH)D 的效果优于 D2。'},
    {name:'麦角钙化醇（D2）',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'1000–2000 IU/天',grade:'B',note:'植物与酵母来源。半衰期较短，维持效果略弱于 D3。'},
    {name:'25-羟基维生素 D3（骨化二醇）',bio:'高',timing:'随含脂肪的正餐',food:'随餐',dose:'按医嘱（常见 20–50 µg/天）',grade:'B',note:'起效快，常用于临床。需要监测血钙和肾功能。'},
    {name:'骨化三醇（活性维生素 D）',bio:'直接起效',timing:'随餐',food:'随餐',dose:'仅处方（常见 0.25–0.5 µg/天）',grade:'A',note:'用于肾功能不全或甲状旁腺功能异常，不可自行服用。'}
  ],
  foods:[
    {name:'三文鱼（养殖）',amount:'约 10–16 µg',per:'100 g',note:'野生与养殖差异较大'},
    {name:'沙丁鱼（罐头，带骨）',amount:'约 4.8 µg',per:'100 g',note:'同时提供钙'},
    {name:'蛋黄',amount:'约 2 µg',per:'1 个',note:'含量随饲养方式变化'},
    {name:'强化牛奶',amount:'约 1–1.5 µg',per:'250 ml',note:'看标签是否强化'},
    {name:'UV 照射蘑菇',amount:'约 5–10 µg',per:'100 g',note:'普通蘑菇含量很低'}
  ],
  deficiency:{
    signs:['骨痛、腰背痛、肌无力','容易跌倒或骨折','儿童佝偻病、成人骨软化','牙齿发育不良','免疫力下降（证据并不一致）'],
    groups:['户外活动少、严格防晒','深肤色人群','65 岁以上','肥胖（脂肪组织会截留维生素 D）','脂肪吸收不良、肝胆胰疾病','慢性肾病或肝功能受损','长期居家或卧床']
  },
  tests:[
    {name:'血清 25-羟维生素 D',sample:'静脉血',range:'≥ 20 ng/mL（50 nmol/L）为充足；< 12 ng/mL 为缺乏；> 100 ng/mL 需警惕过量',note:'是目前最可靠的储备指标。不同实验室方法和单位不同，看报告时先确认 ng/mL 还是 nmol/L。'},
    {name:'血钙、甲状旁腺激素、碱性磷酸酶',sample:'静脉血',range:'按实验室参考范围',note:'用于判断是否已经出现钙代谢异常，不能替代 25(OH)D。'},
    {name:'骨密度（DEXA）',sample:'影像检查',range:'T 值 ≤ -2.5 为骨质疏松',note:'反映长期骨骼结局，不适合评价近期维 D 状态。'}
  ],
  cautions:['长期超大剂量可导致高钙血症、肾结石和肾功能损害','肉芽肿性疾病（结节病、结核）患者对维生素 D 敏感，补充需监测','与噻嗪类利尿剂合用增加高钙风险','超高剂量间歇给药在部分试验中反而增加跌倒和骨折风险'],
  sideEffects:[
    { effect: '恶心、口渴、多尿、便秘', frequency: '少见', note: '高钙血症的早期表现；长期大剂量者应监测血钙。' },
    { effect: '肾结石', frequency: '不常见', note: '高剂量长期使用风险上升；结石病史者需评估。' },
    { effect: '腹胀、便秘', frequency: '不常见', note: '减量或分次服用；持续不缓解应就医。' },
    { effect: '乏力、心律失常', frequency: '少见', note: '严重高钙血症表现，需立即停药并急诊处理。' }
  ],
  special:[
    {who:'肥胖',what:'脂肪组织会降低血清 25(OH)D 的上升幅度，达到同样水平通常需要更高剂量，但应在检测后调整。'},
    {who:'慢性肾病或肝功能受损',what:'活化步骤受损，可能需要骨化二醇或骨化三醇，必须由医生管理。'},
    {who:'孕期',what:'维持常规推荐量即可。高剂量补充不能预防妊娠期并发症，反而需要监测血钙。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Vitamin D — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/',kind:'机构'},
    {text:'Holick MF. Vitamin D deficiency. N Engl J Med. 2007;357:266-281.',kind:'综述'},
    {text:'Endocrine Society. Clinical Practice Guideline: Vitamin D Deficiency.',url:'https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-deficiency',kind:'指南'},
    {text:'Manson JE, et al. Vitamin D supplements and prevention of cancer and cardiovascular disease. N Engl J Med. 2019;380(1):33-44. doi:10.1056/NEJMoa1809944',kind:'研究'},
    {text:'US Preventive Services Task Force. Vitamin D, calcium, or combined supplementation for the primary prevention of falls and fractures in community-dwelling adults: recommendation statement. 2024.',kind:'研究'},
  ],
  related:['calcium','magnesium','vitamin-k','vitamin-a']
},
{
  id:'vitamin-e',
  name:'维生素 E',
  en:'Vitamin E',
  category:'vitamin-fat',
  scoring:{unit:'mg',rni:14,ul:700,low:14,high:400,step:1},
  tagline:'细胞膜的抗氧化剂。真正缺乏少见，高剂量长期补充的收益同样少见。',
  intro:[
    '维生素 E 是一组具有抗氧化活性的生育酚和生育三烯酚，其中 α-生育酚是人体内浓度最高、研究最充分的一种。它主要保护细胞膜上的多不饱和脂肪酸免受氧化损伤。',
    '日常饮食中的植物油、坚果和种子足以提供大部分人的需要。补充剂常见剂量远高于推荐量，但大型试验没有证实高剂量能预防心血管病或癌症，部分研究反而观察到风险信号。'
  ],
  roles:['保护细胞膜脂质免受氧化','维持红细胞完整性','参与免疫调节','与维生素 C、谷胱甘肽形成抗氧化网络','影响血小板聚集与血管功能'],
  intake:{
    main:'14 mg α-生育酚当量',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'可耐受最高摄入量',value:'700 mg α-生育酚当量/天'},
      {label:'孕期 / 哺乳期',value:'14 mg α-生育酚当量/天'}
    ],
    upper:'700 mg α-生育酚当量/天（中国 DRIs）；美国为 1000 mg/天',
    note:'天然 d-α-生育酚与合成 dl-α-生育酚的活性不同，标签上的 IU 不能直接与 mg 互换。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'d-α-生育酚（天然）',bio:'高',timing:'随含脂肪的正餐',food:'随餐',dose:'15–30 mg/天',grade:'A',note:'生物利用度约为合成形式的 2 倍，是优先选择。'},
    {name:'dl-α-生育酚醋酸酯（合成）',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'15–30 mg/天',grade:'B',note:'价格低，标签常用 IU 标示，换算时注意形式。'},
    {name:'混合生育酚 / 生育三烯酚',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'10–50 mg/天 总生育酚',grade:'C',note:'成分复杂，人体结局证据有限，不能替代 α-生育酚。'}
  ],
  foods:[
    {name:'向日葵籽',amount:'约 35 mg',per:'100 g',note:'同时富含镁和硒'},
    {name:'杏仁',amount:'约 25 mg',per:'100 g',note:'热量高，注意份量'},
    {name:'榛子',amount:'约 15 mg',per:'100 g',note:''},
    {name:'小麦胚芽油',amount:'约 150 mg',per:'100 g',note:'适合凉拌，不宜高温'},
    {name:'牛油果',amount:'约 2 mg',per:'100 g',note:'同时提供单不饱和脂肪'}
  ],
  deficiency:{
    signs:['溶血性贫血','周围神经病、共济失调','视网膜病变','免疫功能下降','肌无力'],
    groups:['脂肪吸收不良、囊性纤维化','早产儿','遗传性 α-生育酚转运蛋白缺陷','长期完全肠外营养']
  },
  tests:[
    {name:'血浆 α-生育酚',sample:'静脉血',range:'成人约 12–46 µmol/L',note:'血脂异常会影响结果，部分实验室报告脂质校正后的浓度。'},
    {name:'溶血试验',sample:'红细胞',range:'过氧化氢溶血率升高提示缺乏',note:'多用于研究与特殊病例，不列入常规体检。'}
  ],
  cautions:['与华法林、抗血小板药合用可能增加出血风险','高剂量长期补充在荟萃分析中与全因死亡率轻度升高相关','SELECT 试验中高剂量维生素 E 未降低前列腺癌风险，反而观察到风险增加','不建议用高剂量维生素 E 作为“抗氧化保健”长期服用'],
  sideEffects:[
    { effect: '出血倾向（淤青、牙龈出血）', frequency: '不常见', note: '与抗凝药、抗血小板药合用时风险增加；术前应停用。' },
    { effect: '恶心、腹泻', frequency: '不常见', note: '随餐服用、减量可缓解。' },
    { effect: '头痛、乏力', frequency: '少见', note: '通常轻微，持续存在应停药。' },
    { effect: '前列腺癌风险信号', frequency: '少见', note: 'SELECT 试验高剂量组风险升高，不应长期大剂量服用。' }
  ],
  special:[
    {who:'正在服用抗凝药',what:'补充前先与医生确认，避免叠加出血风险。'},
    {who:'脂肪吸收不良',what:'可能需要水溶性维生素 E 制剂，剂量由医生确定。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Vitamin E — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/',kind:'机构'},
    {text:'Miller ER 3rd, et al. Meta-analysis: high-dosage vitamin E supplementation may increase all-cause mortality. Ann Intern Med. 2005;142(1):37-46.',kind:'研究'},
    {text:'Traber MG, Atkinson J. Vitamin E, antioxidant and nothing more. Free Radic Biol Med. 2007;43(1):4-15.',kind:'综述'},
    {text:'Klein EA, et al. Vitamin E and the risk of prostate cancer: the Selenium and Vitamin E Cancer Prevention Trial (SELECT). JAMA. 2011;306(14):1549-1556. doi:10.1001/jama.2011.1437',kind:'研究'},
  ],
  related:['vitamin-c','vitamin-a','vitamin-k','selenium']
},
{
  id:'vitamin-k',
  name:'维生素 K',
  en:'Vitamin K',
  category:'vitamin-fat',
  scoring:{unit:'µg',rni:80,ul:null,low:60,high:200,step:10},
  tagline:'凝血之外，它还参与骨钙沉积和血管钙化调节。K1 与 K2 不是同一件事。',
  intro:[
    '维生素 K 是一组结构相似的脂溶性化合物。K1（叶绿醌）主要来自绿叶蔬菜，参与肝脏合成凝血因子；K2（甲萘醌类）由肠道菌群和发酵食物提供，半衰期更长，研究更多集中在骨骼和血管健康。',
    '很多人把“维生素 K”只理解为凝血。实际上，骨钙蛋白和基质 Gla 蛋白的活化同样依赖维生素 K。K2 的 MK-7 形式在人体试验中使用较多，但常规检测 K2 状态仍没有统一的临床指标。'
  ],
  roles:['合成凝血因子 II、VII、IX、X','活化骨钙蛋白，帮助钙沉积到骨基质','活化基质 Gla 蛋白，抑制血管壁钙化','参与细胞生长与信号传导'],
  intake:{
    main:'80 µg/天',
    mainLabel:'成人适宜摄入量',
    groups:[
      {label:'可耐受最高摄入量',value:'未制定'},
      {label:'华法林使用者',value:'保持摄入稳定，避免大幅波动'}
    ],
    upper:'未制定（天然形式安全性较高）',
    note:'中国 DRIs 的 AI 为 80 µg/天；美国为男性 120 µg、女性 90 µg。绿叶蔬菜是 K1 的主要来源。'
  },
  timing:'随含脂肪的正餐',
  withFood:'随餐',
  forms:[
    {name:'维生素 K1（叶绿醌）',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'90–120 µg/天',grade:'A',note:'主要支持凝血功能，绿叶菜来源丰富。'},
    {name:'维生素 K2（MK-4）',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'15–45 mg/天（研究剂量）',grade:'C',note:'半衰期短，部分骨健康研究使用较高剂量。'},
    {name:'维生素 K2（MK-7）',bio:'高',timing:'随含脂肪的正餐',food:'随餐',dose:'90–180 µg/天',grade:'B',note:'半衰期长，每日一次即可，骨与血管研究较多。'},
    {name:'维生素 K 复合物',bio:'中',timing:'随含脂肪的正餐',food:'随餐',dose:'K1 90–120 µg + MK-7 45–90 µg/天',grade:'C',note:'不同产品的 K1/K2 比例差异大，看清单一成分。'}
  ],
  foods:[
    {name:'纳豆',amount:'约 900–1200 µg',per:'100 g',note:'MK-7 含量最高的常见食物'},
    {name:'菠菜（熟）',amount:'约 483 µg',per:'100 g',note:'主要为 K1'},
    {name:'羽衣甘蓝',amount:'约 390 µg',per:'100 g',note:'K1'},
    {name:'西兰花（熟）',amount:'约 141 µg',per:'100 g',note:'K1'},
    {name:'硬质发酵奶酪',amount:'约 40–80 µg',per:'100 g',note:'含 MK-8、MK-9 等长链形式'}
  ],
  deficiency:{
    signs:['容易瘀青、出血时间延长','新生儿出血症','骨密度下降、骨折风险增加','血管钙化（观察性证据）'],
    groups:['新生儿','长期使用广谱抗生素','脂肪吸收不良、胆道梗阻','华法林或其他维生素 K 拮抗剂使用者','饮食极度单一']
  },
  tests:[
    {name:'凝血酶原时间（PT）/ INR',sample:'静脉血',range:'INR 约 0.8–1.2（未抗凝）',note:'反映 K1 依赖的凝血因子，不能评价 K2 与骨代谢。'},
    {name:'PIVKA-II',sample:'静脉血',range:'按实验室参考范围',note:'维生素 K 缺乏时升高，常用于华法林监测与肝病评估。'},
    {name:'dp-ucMGP',sample:'静脉血',range:'研究指标，无统一临床阈值',note:'反映血管维生素 K 状态，目前多用于研究。'}
  ],
  cautions:['华法林使用者大幅改变绿叶菜或补充 K2 会改变 INR，必须与医生沟通','维生素 K 会降低华法林疗效，不能自行加量','大剂量 K1 可能干扰 INR 判读','胆汁酸螯合剂、奥利司他可减少吸收'],
  sideEffects:[
    { effect: '注射部位疼痛、红肿', frequency: '不常见', note: '维生素 K1 注射时出现；改用口服或更换部位。' },
    { effect: '面部潮红、出汗', frequency: '少见', note: '静脉注射过快时出现，需缓慢给药。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药观察；出现面唇肿胀或呼吸困难需急诊。' },
    { effect: 'INR 波动（与华法林相互作用）', frequency: '不常见', note: '补充剂会降低华法林效果；必须保持摄入稳定并监测 INR。' }
  ],
  special:[
    {who:'华法林使用者',what:'目标是把每日摄入保持稳定，而不是完全不吃绿叶菜。新增 K2 补充剂前必须告知医生。'},
    {who:'骨质疏松高风险',what:'K2 有研究支持，但不能替代钙、维生素 D 和抗骨质疏松药物。'},
    {who:'新生儿',what:'出生后按国家免疫规划接受维生素 K 预防注射。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Vitamin K — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',kind:'机构'},
    {text:'Booth SL. Roles for vitamin K beyond coagulation. Annu Rev Nutr. 2009;29:89-110.',kind:'综述'},
    {text:'Shearer MJ, Newman P. Metabolism and cell biology of vitamin K. Thromb Haemost. 2008;100(4):530-547.',kind:'综述'},
  ],
  related:['vitamin-d','calcium','vitamin-a','vitamin-e']
},
{
  id:'vitamin-c',
  name:'维生素 C',
  en:'Vitamin C',
  category:'vitamin-water',
  scoring:{unit:'mg',rni:100,ul:2000,low:100,high:1000,step:10},
  tagline:'胶原合成与水溶性抗氧化的核心。普通饮食就能满足，缺的时候信号很典型。',
  intro:[
    '维生素 C 是水溶性抗氧化剂，也是脯氨酸和赖氨酸羟化的辅因子。没有它，胶原三螺旋无法稳定形成，血管壁、牙龈和伤口愈合都会出问题。它还能把三价铁还原成二价铁，帮助铁吸收。',
    '人体不能合成维生素 C，储存量也有限。血浆浓度在摄入约 100–200 mg/天时接近饱和，继续加量主要增加尿液排出。高剂量并非全无风险，肾结石和血色病患者尤其要注意。'
  ],
  roles:['胶原蛋白合成','抗氧化，再生维生素 E','促进非血红素铁吸收','支持免疫细胞功能','参与神经递质和肉碱合成'],
  intake:{
    main:'100 mg/天',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'吸烟者',value:'建议额外增加约 35 mg/天'},
      {label:'可耐受最高摄入量',value:'2000 mg/天'},
      {label:'孕期 / 哺乳期',value:'100 / 150 mg/天'}
    ],
    upper:'2000 mg/天',
    note:'中国 DRIs 成人 RNI 为 100 mg/天。一个猕猴桃或一份青椒大约能提供 60–70 mg。'
  },
  timing:'任意时间；胃敏感者随餐',
  withFood:'任意',
  forms:[
    {name:'抗坏血酸',bio:'高',timing:'任意时间，胃敏感者随餐',food:'任意',dose:'100–500 mg/天',grade:'A',note:'价格低、证据充分。单次超过 500 mg 时吸收率下降，建议分次。'},
    {name:'抗坏血酸钠 / 钙',bio:'高',timing:'随餐',food:'随餐',dose:'100–500 mg/天',grade:'B',note:'酸性较弱，胃部不适者更容易耐受。'},
    {name:'脂质体维生素 C',bio:'中高',timing:'任意时间',food:'任意',dose:'250–1000 mg/天',grade:'C',note:'高剂量下血药浓度可能更平稳，但临床结局证据有限。'},
    {name:'抗坏血酸棕榈酸酯',bio:'中',timing:'随餐',food:'随餐',dose:'50–200 mg/天',grade:'C',note:'脂溶性衍生物，常用于食品抗氧化，人体证据较少。'}
  ],
  foods:[
    {name:'鲜枣',amount:'约 243 mg',per:'100 g',note:'含量高，但糖分也高'},
    {name:'青椒',amount:'约 72 mg',per:'100 g',note:'快炒比长时间水煮保留更多'},
    {name:'猕猴桃',amount:'约 62 mg',per:'100 g',note:'一个约 60–70 mg'},
    {name:'西兰花（熟）',amount:'约 51 mg',per:'100 g',note:'蒸比煮损失少'},
    {name:'橙',amount:'约 33 mg',per:'100 g',note:'一个中等大小约 70 mg'}
  ],
  deficiency:{
    signs:['牙龈出血、牙齿松动','容易瘀青、伤口愈合慢','毛囊周围出血点','疲劳、乏力','严重时坏血病：关节痛、贫血、感染'],
    groups:['蔬果摄入长期不足','吸烟','酗酒','透析患者','严重感染或创伤','限制性饮食、进食障碍']
  },
  tests:[
    {name:'血浆抗坏血酸',sample:'静脉血',range:'> 50 µmol/L 充足；< 11 µmol/L 提示缺乏',note:'反映近期摄入，不能代表组织储备。'},
    {name:'白细胞维生素 C',sample:'静脉血',range:'按实验室参考范围',note:'更接近组织水平，但操作复杂，临床少用。'}
  ],
  cautions:['每日超过 2 g 可能增加草酸钙肾结石风险','血色病、铁过载患者应避免与铁同服高剂量维生素 C','G6PD 缺乏者静脉大剂量维生素 C 可致溶血','高剂量可引起腹泻、腹胀','与某些化疗药物的相互作用仍有争议，肿瘤患者应告知医生'],
  sideEffects:[
    { effect: '腹泻、腹胀', frequency: '常见', note: '单次超过 1 g 时更易出现；分次服用并减量。' },
    { effect: '胃部不适、反酸', frequency: '不常见', note: '随餐服用或改用缓冲型抗坏血酸盐。' },
    { effect: '肾结石风险升高', frequency: '少见', note: '长期大剂量者保证饮水；结石病史者避免高剂量。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药；严重过敏反应需急诊。' }
  ],
  special:[
    {who:'吸烟者',what:'氧化应激增加，需要量高于非吸烟者；补充剂不能抵消吸烟危害。'},
    {who:'肾结石病史',what:'避免长期高剂量，尤其是草酸钙结石患者。'},
    {who:'缺铁性贫血',what:'与铁剂同服可提高非血红素铁吸收，但血色病患者相反。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Vitamin C — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',kind:'机构'},
    {text:'Lykkesfeldt J, Michels AJ, Frei B. Vitamin C. Adv Nutr. 2014;5(1):16-18.',kind:'综述'},
    {text:'Carr AC, Maggini S. Vitamin C and immune function. Nutrients. 2017;9(11):1211.',kind:'综述'},
  ],
  related:['iron','vitamin-e','collagen','copper']
},
{
  id:'b1',
  name:'维生素 B1（硫胺素）',
  en:'Thiamin',
  category:'vitamin-water',
  scoring:{unit:'mg',rni:1.4,ul:null,low:1.4,high:100,step:0.1},
  tagline:'糖代谢的起点。酒精、精制主食和肝病，是最常见的三个缺口。',
  intro:[
    '硫胺素以焦磷酸硫胺素（TPP）的形式参与丙酮酸脱氢酶、α-酮戊二酸脱氢酶和转酮醇酶反应，是把碳水化合物转成能量的必要环节。神经和心肌对它的缺乏尤其敏感。',
    '精制米面在加工中损失大部分硫胺素，酒精又会抑制吸收并增加排泄。临床上，长期饮酒者出现周围神经病、眼球运动异常或心衰时，首先要想到硫胺素缺乏。'
  ],
  roles:['碳水化合物代谢与 ATP 生成','神经传导与髓鞘维持','心肌能量供应','支链氨基酸代谢','参与核酸与脂肪酸合成'],
  intake:{
    main:'男 1.4 / 女 1.2 mg',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'1.4 / 1.5 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'},
      {label:'酗酒者',value:'需求增加，吸收下降'}
    ],
    upper:'未制定（水溶性，过量主要经尿排出）',
    note:'以精制米面为主食、很少吃全谷物和豆类的人，摄入容易低于推荐量。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'盐酸硫胺素 / 单硝酸硫胺素',bio:'高',timing:'随餐',food:'随餐',dose:'1–2 mg/天',grade:'A',note:'标准形式，价格低，适合日常补充。'},
    {name:'苯磷硫胺',bio:'高（组织穿透更好）',timing:'随餐',food:'随餐',dose:'100–300 mg/天',grade:'B',note:'脂溶性衍生物，糖尿病周围神经病变研究较多。'},
    {name:'呋喃硫胺（TTFD）',bio:'中高',timing:'随餐',food:'随餐',dose:'50–100 mg/天',grade:'C',note:'组织浓度较高，临床证据少于苯磷硫胺。'},
    {name:'舒布硫胺',bio:'中',timing:'随餐',food:'随餐',dose:'50–200 mg/天（研究剂量）',grade:'C',note:'脂溶性衍生物，研究规模较小。'}
  ],
  foods:[
    {name:'猪里脊',amount:'约 0.5–1.0 mg',per:'100 g',note:'肉类中含量较高'},
    {name:'全麦面粉',amount:'约 0.4 mg',per:'100 g',note:'精制面粉损失大部分'},
    {name:'葵花籽',amount:'约 1.5 mg',per:'100 g',note:'同时富含维生素 E'},
    {name:'扁豆（熟）',amount:'约 0.4 mg',per:'100 g',note:'豆类是稳定来源'},
    {name:'营养酵母（强化）',amount:'约 10 mg 以上',per:'100 g',note:'素食者常用，注意是否强化'}
  ],
  deficiency:{
    signs:['脚气病：下肢水肿、心衰（湿性）','周围神经病、肌肉萎缩（干性）','Wernicke 脑病：眼球运动异常、共济失调、意识混乱','Korsakoff 综合征：记忆障碍','食欲下降、疲劳'],
    groups:['长期酗酒','以精白米面为主食','妊娠剧吐或长期呕吐','慢性肝病','减重手术后','长期利尿剂治疗','严重感染或高代谢状态']
  },
  tests:[
    {name:'全血硫胺素',sample:'静脉血',range:'按实验室参考范围',note:'反映近期状态，样本需避光并及时处理。'},
    {name:'红细胞转酮醇酶活性（ETK）及 TPP 效应',sample:'静脉血',range:'TPP 效应 < 15% 通常视为正常',note:'功能学指标，缺乏时加入 TPP 后酶活性明显上升。'},
    {name:'临床反应',sample:'—',range:'—',note:'在疑似 Wernicke 脑病时，不应等待化验结果，应立即由医生给予硫胺素。'}
  ],
  cautions:['静脉快速注射偶见过敏反应','酒精会降低吸收并增加排泄','与利尿剂合用可能增加流失','严重缺乏者在补充初期可能出现低钾，需要监测'],
  sideEffects:[
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药观察；出现呼吸困难需急诊。' },
    { effect: '恶心、胃部不适', frequency: '不常见', note: '随餐服用可减轻。' },
    { effect: '注射部位疼痛', frequency: '不常见', note: '肌注时出现，可更换部位或改为口服。' },
    { effect: '过敏性休克（静脉快速注射）', frequency: '少见', note: '静脉给药应缓慢，并有急救条件。' }
  ],
  special:[
    {who:'慢性肝病或酗酒',what:'硫胺素储备低，吸收也差。出现神经或心脏症状时应尽快就医，严重者需要注射给药。'},
    {who:'妊娠剧吐',what:'持续呕吐会导致缺乏，产检时应主动告知医生。'},
    {who:'减重手术后',what:'吸收面积减少，通常需要长期复合维生素，包括硫胺素。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Thiamin — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/',kind:'机构'},
    {text:'Kennedy DO. B Vitamins and the Brain: Mechanisms, Dose and Efficacy. Nutrients. 2016;8(2):68.',kind:'综述'},
    {text:'Lonsdale D. A review of the biochemistry, metabolism and clinical benefits of thiamin(e) and its derivatives. Evid Based Complement Alternat Med. 2006;3(1):49-59.',kind:'综述'},
  ],
  related:['b2','b3','b5','b6','b12','magnesium']
},
{
  id:'b2',
  name:'维生素 B2（核黄素）',
  en:'Riboflavin',
  category:'vitamin-water',
  scoring:{unit:'mg',rni:1.4,ul:null,low:1.4,high:100,step:0.1},
  tagline:'电子传递链的接力棒。口角炎反复发作时，值得先看看它。',
  intro:[
    '核黄素是 FMN 和 FAD 的前体，这两种辅酶参与线粒体电子传递、脂肪酸氧化和谷胱甘肽还原。它还帮助维生素 B6、叶酸和烟酸转化为活性形式。',
    '核黄素缺乏很少单独出现，通常与奶类、蛋类、动物内脏摄入不足并存。口角炎、唇炎和舌炎是最典型的表现，但单看症状无法确诊，需要结合饮食史和实验室指标。'
  ],
  roles:['电子传递链与能量生成','脂肪酸 β-氧化','谷胱甘肽还原与抗氧化','激活维生素 B6 和叶酸','参与药物代谢'],
  intake:{
    main:'男 1.4 / 女 1.2 mg',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'1.4 / 1.5 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'},
      {label:'长期腹泻',value:'吸收下降'}
    ],
    upper:'未制定',
    note:'奶类、蛋类和动物内脏是主要来源。严格素食者若不以强化食品或补充剂补足，容易摄入不足。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'核黄素',bio:'高',timing:'随餐',food:'随餐',dose:'1.1–1.6 mg/天',grade:'A',note:'标准形式，价格低。吸收有饱和上限，高剂量建议分次。'},
    {name:'核黄素-5-磷酸（R5P）',bio:'高',timing:'随餐',food:'随餐',dose:'5–50 mg/天',grade:'B',note:'口服后在肠道去磷酸化，仍需在体内转为 FMN / FAD；现有证据不足以证明肝病患者必须选它。'},
    {name:'FMN / FAD',bio:'高',timing:'随餐',food:'随餐',dose:'5–20 mg/天',grade:'C',note:'直接辅酶形式，产品较少，证据有限。'}
  ],
  foods:[
    {name:'猪肝',amount:'约 2.0–3.0 mg',per:'100 g',note:'同时富含维生素 A 和铁'},
    {name:'牛奶',amount:'约 0.14 mg',per:'100 g',note:'每天 300 ml 可提供约 0.4 mg'},
    {name:'鸡蛋',amount:'约 0.5 mg',per:'100 g',note:'约 0.25 mg/个'},
    {name:'杏仁',amount:'约 1.1 mg',per:'100 g',note:'热量高，注意份量'},
    {name:'蘑菇',amount:'约 0.4 mg',per:'100 g',note:'同时提供硒和多糖'}
  ],
  deficiency:{
    signs:['口角炎、唇炎','舌炎、舌乳头萎缩','脂溢性皮炎（鼻翼、耳后）','贫血','儿童生长迟缓'],
    groups:['奶蛋摄入不足','严格素食','酗酒','慢性腹泻、吸收不良','妊娠和哺乳期','长期服用某些抗精神病药物']
  },
  tests:[
    {name:'红细胞谷胱甘肽还原酶活性系数（EGRac）',sample:'静脉血',range:'< 1.2 正常；> 1.4 提示缺乏',note:'功能学指标，比血清核黄素更稳定。'},
    {name:'尿核黄素',sample:'尿液',range:'按实验室参考范围',note:'受近期摄入影响大，采集时间需规范。'}
  ],
  cautions:['补充后尿液呈亮黄色，属于正常现象','高剂量单次吸收有限，分次服用更有效','与甲状腺功能检测无直接冲突，但可能干扰某些比色法'],
  sideEffects:[
    { effect: '尿液亮黄色', frequency: '常见', note: '核黄素的正常排泄颜色，无害，不需要停药。' },
    { effect: '恶心、腹泻', frequency: '不常见', note: '减量或随餐服用。' },
    { effect: '皮疹、光敏反应', frequency: '少见', note: '停药并避免日晒，必要时就医。' }
  ],
  special:[
    {who:'严格素食',what:'奶蛋不摄入时，需要强化食品或复合维生素。'},
    {who:'肝功能受损',what:'R5P 仍需在体内转为 FMN / FAD；目前没有可靠证据表明肝病患者必须选它，常规核黄素即可。'},
    {who:'偏头痛患者',what:'部分试验使用高剂量核黄素（400 mg/天）预防偏头痛，需在医生指导下进行。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Riboflavin — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Riboflavin-HealthProfessional/',kind:'机构'},
    {text:'Powers HJ. Riboflavin (vitamin B-2) and health. Am J Clin Nutr. 2003;77(6):1352-1360.',kind:'综述'},
  ],
  related:['b1','b3','b6','b9','b12']
},
{
  id:'b3',
  name:'维生素 B3（烟酸 / 烟酰胺）',
  en:'Niacin',
  category:'vitamin-water',
  scoring:{unit:'mg',rni:15,ul:35,low:15,high:35,step:1},
  tagline:'两种形式，两种脾气：烟酸会潮红，烟酰胺不潮红，但高剂量都可能伤肝。',
  intro:[
    '维生素 B3 包括烟酸和烟酰胺，二者都能转化为 NAD 和 NADP，参与氧化还原反应。色氨酸也能在体内转化为烟酸，因此剂量常用“烟酸当量”表示。',
    '药理学剂量的烟酸曾用于调脂，但潮红、肝毒性和血糖升高限制了它的使用。烟酰胺不引起潮红，高剂量仍可能损伤肝脏。把 B3 当作普通“保健品”长期大剂量服用，并不安全。'
  ],
  roles:['NAD/NADP 辅酶，参与能量代谢','DNA 修复与细胞信号','调节血脂（药理学剂量）','维持皮肤和神经系统健康','参与氧化还原平衡'],
  intake:{
    main:'男 15 / 女 12 mg NE',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'可耐受最高摄入量',value:'35 mg/天（烟酸）'},
      {label:'孕期 / 哺乳期',value:'15 / 18 mg NE/天'},
      {label:'高剂量治疗',value:'仅限医生监测下使用'}
    ],
    upper:'35 mg/天（中国 DRIs，烟酸）；烟酰胺的治疗剂量上限远高于此，但肝毒性风险随剂量上升',
    note:'60 mg 色氨酸约相当于 1 mg 烟酸当量。以玉米为主食且未强化的人群，存在癞皮病风险。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'烟酸（nicotinic acid）',bio:'高',timing:'随餐',food:'随餐',dose:'15–20 mg NE/天；调脂剂量需医生指导',grade:'A',note:'会引起潮红。缓释剂型肝毒性更高，不建议自行使用高剂量。'},
    {name:'烟酰胺（nicotinamide）',bio:'高',timing:'随餐',food:'随餐',dose:'15–35 mg/天',grade:'A',note:'不引起潮红，但高剂量（数百毫克以上）可致肝损伤。'},
    {name:'肌醇六烟酸酯',bio:'中',timing:'随餐',food:'随餐',dose:'500–1000 mg/天（证据有限）',grade:'C',note:'宣称不潮红，降脂证据不一致。'},
    {name:'NR / NMN（NAD 前体）',bio:'中',timing:'随餐',food:'随餐',dose:'150–1000 mg/天',grade:'C',note:'证据集中在动物和早期人体试验，长期结局未知。'}
  ],
  foods:[
    {name:'鸡胸肉',amount:'约 11 mg NE',per:'100 g',note:'优质蛋白同时提供色氨酸'},
    {name:'金枪鱼',amount:'约 8 mg NE',per:'100 g',note:'深海鱼'},
    {name:'牛肉',amount:'约 5 mg NE',per:'100 g',note:''},
    {name:'花生',amount:'约 12 mg NE',per:'100 g',note:'热量高'},
    {name:'全麦面包',amount:'约 4 mg NE',per:'100 g',note:'全谷物保留更多 B 族'}
  ],
  deficiency:{
    signs:['癞皮病三联征：皮炎、腹泻、痴呆','对称性日光暴露部位皮疹','舌炎、口腔溃疡','食欲下降、体重减轻','严重时精神异常'],
    groups:['以未强化玉米为主食','酗酒','类癌综合征','Hartnup 病','长期服用异烟肼','吸收不良']
  },
  tests:[
    {name:'尿 N1-甲基烟酰胺',sample:'尿液',range:'按实验室参考范围',note:'反映近期摄入，临床少用。'},
    {name:'NAD/NADP 水平',sample:'血液或组织',range:'研究指标',note:'无统一临床判读标准，多用于研究。'}
  ],
  cautions:['烟酸潮红：面部、颈部发热发红，可提前 30 分钟服阿司匹林减轻，但需医生同意','缓释烟酸肝毒性风险更高','高剂量可升高血糖、尿酸，诱发痛风','烟酰胺高剂量也可致肝损伤','与他汀类药物合用需监测肝酶和肌酶'],
  sideEffects:[
    { effect: '潮红、发热、瘙痒', frequency: '常见', note: '烟酸形式常见，可从小剂量开始、随餐或改用烟酰胺。' },
    { effect: '恶心、腹痛', frequency: '不常见', note: '随餐服用、分次给药。' },
    { effect: '肝毒性', frequency: '少见', note: '缓释烟酸和高剂量烟酰胺风险更高；出现乏力、尿黄应查肝功能。' },
    { effect: '血糖、尿酸升高', frequency: '不常见', note: '糖尿病和痛风患者需监测。' },
    { effect: '头痛、头晕', frequency: '不常见', note: '减量后多可缓解。' }
  ],
  special:[
    {who:'高血脂患者',what:'不要自行用大剂量烟酸替代他汀。处方级烟酸需要监测肝酶、血糖和尿酸。'},
    {who:'痛风或糖尿病',what:'高剂量烟酸可能升高尿酸和血糖，需谨慎。'},
    {who:'肝功能受损',what:'选择烟酰胺或低剂量复合 B 族，避免高剂量烟酸缓释剂。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Niacin — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Niacin-HealthProfessional/',kind:'机构'},
    {text:'Gasperi V, et al. Niacin in the Central Nervous System: An Update of Biological Aspects and Clinical Applications. Int J Mol Sci. 2019;20(4):974.',kind:'综述'},
    {text:'Guyton JR. Niacin in cardiovascular prevention: mechanisms, efficacy, and safety. Curr Opin Lipidol. 2007;18(4):415-420.',kind:'综述'},
  ],
  related:['b1','b2','b6','b12','magnesium']
},
{
  id:'b5',
  name:'维生素 B5（泛酸）',
  en:'Pantothenic Acid',
  category:'vitamin-water',
  scoring:{unit:'mg',rni:5,ul:null,low:5,high:100,step:1},
  tagline:'辅酶 A 的原料。缺乏极少见，补充剂更多是“参与”而非“主力”。',
  intro:[
    '泛酸是辅酶 A（CoA）和酰基载体蛋白的组成部分，参与脂肪酸合成与氧化、三羧酸循环和乙酰胆碱合成。它几乎存在于所有食物中，因此单纯缺乏非常罕见。',
    '补充剂里的泛酸钙价格低、耐受好。另一个常见形式是泛硫乙胺，研究集中在血脂调节，但证据不如他汀类药物充分，不能替代降脂治疗。'
  ],
  roles:['合成辅酶 A','脂肪酸合成与氧化','三羧酸循环与能量生成','乙酰胆碱合成','参与类固醇激素合成'],
  intake:{
    main:'5 mg/天',
    mainLabel:'成人适宜摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'6 / 7 mg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'泛酸广泛存在于动物性食物、全谷物、豆类和蘑菇中，正常饮食很难缺乏。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'D-泛酸钙',bio:'高',timing:'随餐',food:'随餐',dose:'5–20 mg/天',grade:'A',note:'标准形式，价格低，适合复合维生素。'},
    {name:'泛硫乙胺（pantethine）',bio:'高',timing:'随餐',food:'随餐',dose:'600–900 mg/天',grade:'B',note:'血脂研究较多，但样本量有限，不能替代降脂药。'},
    {name:'右泛醇（dexpanthenol）',bio:'高',timing:'随餐',food:'随餐',dose:'5–10 mg/天 口服',grade:'C',note:'更多用于外用或注射，口服证据少。'}
  ],
  foods:[
    {name:'猪肝',amount:'约 7 mg',per:'100 g',note:'同时富含维生素 A、B2、B12'},
    {name:'蘑菇',amount:'约 3.6 mg',per:'100 g',note:''},
    {name:'鸡蛋',amount:'约 1.5 mg',per:'100 g',note:'约 0.75 mg/个'},
    {name:'牛油果',amount:'约 1.4 mg',per:'100 g',note:'同时富含钾和单不饱和脂肪'},
    {name:'全麦',amount:'约 1.0 mg',per:'100 g',note:'全谷物保留更多 B 族'}
  ],
  deficiency:{
    signs:['灼足综合征：足部麻木、烧灼感','疲劳、头痛','恶心、腹痛','伤口愈合差','低血糖（罕见）'],
    groups:['严重营养不良','酗酒','长期完全肠外营养未补充','吸收不良','妊娠期需求增加']
  },
  tests:[
    {name:'全血泛酸',sample:'静脉血',range:'按实验室参考范围',note:'不是常规项目，临床意义有限。'},
    {name:'尿泛酸',sample:'尿液',range:'按实验室参考范围',note:'受近期摄入影响，主要用于研究。'}
  ],
  cautions:['高剂量可引起腹泻','泛硫乙胺可能影响血脂和凝血指标，围手术期需告知医生','与抗生素无明确相互作用，但不要用补充剂替代感染治疗'],
  sideEffects:[
    { effect: '腹泻', frequency: '不常见', note: '高剂量时出现，减量即可。' },
    { effect: '恶心、胃部不适', frequency: '不常见', note: '随餐服用。' },
    { effect: '皮疹', frequency: '少见', note: '停药观察。' }
  ],
  special:[
    {who:'长期肠外营养',what:'需要包含泛酸的复合微量元素，单独补充不够。'},
    {who:'高血脂',what:'泛硫乙胺的证据有限，不能替代他汀或其他降脂药。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Pantothenic Acid — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/PantothenicAcid-HealthProfessional/',kind:'机构'},
    {text:'Peechakara BV, Gupta M. Vitamin B5 (Pantothenic Acid). StatPearls. 2023.',url:'https://www.ncbi.nlm.nih.gov/books/NBK535386/',kind:'综述'},
    {text:'EFSA NDA Panel. Scientific Opinion on Dietary Reference Values for pantothenic acid. EFSA Journal. 2014;12(2):3581.',kind:'机构'},
  ],
  related:['b1','b2','b3','b6','b7']
},
{
  id:'b6',
  name:'维生素 B6（吡哆醇）',
  en:'Vitamin B6',
  category:'vitamin-water',
  scoring:{unit:'mg',rni:1.4,ul:60,low:1.4,high:25,step:0.1},
  tagline:'氨基酸代谢与神经递质合成的中枢。剂量窗口不宽，长期大剂量会伤神经。',
  intro:[
    '维生素 B6 包括吡哆醇、吡哆醛和吡哆胺，活性形式是吡哆醛-5-磷酸（P5P）。它参与一百多种酶反应，涵盖氨基酸代谢、血红素合成、神经递质生成和糖原分解。',
    '缺乏常与酗酒、肝功能受损、吸收不良或长期服用异烟肼同时出现。另一方面，长期大剂量补充可能导致感觉神经病；近年病例报告显示，低至 50 mg/天长期使用也可能出现，EFSA 2023 因此把成人 UL 下调到 12 mg/天。B6 是少数“补少了不行、补多了也麻烦”的水溶性维生素。'
  ],
  roles:['氨基酸转氨与脱羧','合成多巴胺、5-羟色胺和 GABA','血红素合成','糖原分解与血糖调节','参与同型半胱氨酸代谢'],
  intake:{
    main:'1.4 mg/天',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'2.2 / 2.4 mg/天'},
      {label:'可耐受最高摄入量',value:'60 mg/天（中国）；EFSA 为 12 mg/天'},
      {label:'长期高剂量',value:'> 50 mg/天需医生评估'}
    ],
    upper:'60 mg/天（中国 DRIs）；美国 100 mg/天；EFSA 2023 为 12 mg/天',
    note:'中国 DRIs 2023 的成人 RNI 为 1.4 mg/天。复合 B 族中的 10–50 mg 通常短期安全，但不建议长期无限期服用。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'盐酸吡哆醇',bio:'高',timing:'随餐',food:'随餐',dose:'1.4–20 mg/天',grade:'A',note:'标准形式，价格低。长期大剂量有神经毒性。'},
    {name:'吡哆醛-5-磷酸（P5P）',bio:'高',timing:'随餐',food:'随餐',dose:'5–25 mg/天',grade:'B',note:'口服后同样在肠道去磷酸化，吸收后仍需肝内重新磷酸化；对肝病患者的优势证据不足。需避光保存。'},
    {name:'吡哆醇-α-酮戊二酸',bio:'中',timing:'随餐',food:'随餐',dose:'10–50 mg/天',grade:'C',note:'研究较少，不作为首选。'}
  ],
  foods:[
    {name:'鸡胸肉',amount:'约 0.8 mg',per:'100 g',note:'优质蛋白来源'},
    {name:'三文鱼',amount:'约 0.6 mg',per:'100 g',note:'同时提供 DHA/EPA'},
    {name:'鹰嘴豆（熟）',amount:'约 0.5 mg',per:'100 g',note:'豆类'},
    {name:'香蕉',amount:'约 0.4 mg',per:'100 g',note:'同时富含钾'},
    {name:'土豆（带皮，熟）',amount:'约 0.3 mg',per:'100 g',note:''}
  ],
  deficiency:{
    signs:['小细胞性贫血','舌炎、口角炎','脂溢性皮炎','周围神经病、手脚麻木','情绪低落、意识混乱','婴儿惊厥'],
    groups:['酗酒','慢性肝病','吸收不良、炎症性肠病','长期服用异烟肼','妊娠期','老年人']
  },
  tests:[
    {name:'血浆吡哆醛-5-磷酸（PLP）',sample:'静脉血',range:'≥ 20 nmol/L 通常视为充足',note:'炎症、肝功能异常和低白蛋白会使结果假性偏低。'},
    {name:'同型半胱氨酸',sample:'静脉血',range:'通常 < 15 µmol/L',note:'B6、B12、叶酸缺乏都可使其升高，不能单独定位。'}
  ],
  cautions:['长期每天 > 100–200 mg 可致感觉神经病，停药后多数可恢复','低至 50 mg/天长期使用也有周围神经病病例，EFSA 2023 将成人 UL 定为 12 mg/天','高剂量可能增加光敏反应','与左旋多巴（不含卡比多巴）合用会降低疗效','与异烟肼合用需调整剂量'],
  sideEffects:[
    { effect: '手足麻木、刺痛', frequency: '不常见', note: '感觉神经病的早期表现；即使较低剂量长期使用也有病例，应立即停药并就医。' },
    { effect: '恶心、胃部不适', frequency: '不常见', note: '减量或随餐服用。' },
    { effect: '头痛', frequency: '少见', note: '通常轻微，持续应停药。' },
    { effect: '光敏反应', frequency: '少见', note: '避免强烈日晒，必要时停药。' }
  ],
  special:[
    {who:'慢性肝病或酗酒',what:'P5P 是活性形式，转化负担更小；但剂量仍需控制，避免神经毒性。'},
    {who:'长期服用异烟肼',what:'通常需要补充 B6，具体剂量由医生决定。'},
    {who:'孕期',what:'需求上升，但不应自行大剂量补充。妊娠期恶心使用高剂量 B6 需医生评估。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Vitamin B6 — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/',kind:'机构'},
    {text:'Lheureux P, et al. Pyridoxine in clinical toxicology: a review. Eur J Emerg Med. 2005;12(2):78-85.',kind:'综述'},
    {text:'EFSA NDA Panel. Scientific opinion on the tolerable upper intake level for vitamin B6. EFSA J. 2023;21(6):e08006. doi:10.2903/j.efsa.2023.8006',kind:'指南'},
    {text:'Stover PJ, Field MS. Vitamin B-6. Adv Nutr. 2015;6(1):132-133.',kind:'综述'},
  ],
  related:['b1','b2','b3','b9','b12','magnesium']
},
{
  id:'b7',
  name:'维生素 B7（生物素）',
  en:'Biotin',
  category:'vitamin-water',
  scoring:{unit:'µg',rni:40,ul:null,low:30,high:300,step:5},
  tagline:'头发和指甲的“网红”补充剂，真正缺乏很少。它最确定的作用，是干扰化验结果。',
  intro:[
    '生物素是羧化酶的辅酶，参与葡萄糖异生、脂肪酸合成和氨基酸代谢。它广泛存在于蛋黄、坚果、豆类和动物内脏中，肠道细菌也能合成一部分，因此缺乏罕见。',
    '高剂量生物素在市场上被大量宣传用于头发、皮肤和指甲，但系统综述没有证实对没有缺乏的人有效。更值得注意的是，每天数毫克级的生物素会严重干扰甲状腺功能、肌钙蛋白等免疫分析，可能导致误诊。'
  ],
  roles:['羧化酶辅酶','葡萄糖异生','脂肪酸合成','氨基酸与蛋白质代谢','维持皮肤、毛发和神经系统健康'],
  intake:{
    main:'40 µg/天',
    mainLabel:'成人适宜摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'40 / 45 µg/天'},
      {label:'可耐受最高摄入量',value:'未制定'}
    ],
    upper:'未制定',
    note:'每天吃 1–2 个鸡蛋、一把坚果和适量豆类，通常足以满足需要。'
  },
  timing:'随餐',
  withFood:'随餐',
  forms:[
    {name:'D-生物素',bio:'高',timing:'随餐',food:'随餐',dose:'30–100 µg/天',grade:'A',note:'标准形式，适合日常补充。'},
    {name:'高剂量生物素（2.5–5 mg）',bio:'高',timing:'随餐',food:'随餐',dose:'2.5–5 mg/天',grade:'C',note:'对无缺乏者的头发、指甲改善证据弱，且会干扰化验。'},
    {name:'生物素复合 B 族',bio:'高',timing:'随餐',food:'随餐',dose:'生物素 30–100 µg/天',grade:'B',note:'注意总剂量，很多“护发软糖”含 5–10 mg。'}
  ],
  foods:[
    {name:'蛋黄',amount:'约 10 µg',per:'1 个',note:'生蛋清中的抗生物素蛋白会阻碍吸收'},
    {name:'杏仁',amount:'约 20–80 µg',per:'100 g',note:'不同来源差异较大'},
    {name:'大豆（熟）',amount:'约 60 µg',per:'100 g',note:''},
    {name:'燕麦',amount:'约 20 µg',per:'100 g',note:''},
    {name:'猪肝',amount:'约 30–100 µg',per:'100 g',note:'同时富含多种 B 族'}
  ],
  deficiency:{
    signs:['皮疹，尤其是面部和腔口周围','脱发','结膜炎','神经系统症状：抑郁、幻觉、麻木','婴儿肌张力低下'],
    groups:['长期大量生吃蛋清','长期完全肠外营养未补充','长期抗惊厥药','吸收不良','妊娠期轻度不足']
  },
  tests:[
    {name:'血清或尿生物素',sample:'血液 / 尿液',range:'按实验室参考范围',note:'不是常规项目，缺乏时才有明显变化。'},
    {name:'用药与化验核对',sample:'—',range:'—',note:'高剂量生物素会在甲状腺功能、肌钙蛋白、激素等免疫分析中造成假性结果。'},
    {name:'停用后再复查',sample:'—',range:'—',note:'多数实验室建议停用高剂量生物素 48–72 小时后再抽血。'}
  ],
  cautions:['高剂量生物素可致甲状腺功能化验假性异常，包括假性 Graves 病','可致肌钙蛋白假性降低，影响心梗判断','对无缺乏者的生发效果缺乏高质量证据','与抗癫痫药合用可能降低血药浓度'],
  sideEffects:[
    { effect: '化验结果失真', frequency: '不常见', note: '高剂量可干扰甲状腺功能、肌钙蛋白和激素检测；抽血前停药 3 天并告知医生。' },
    { effect: '恶心、腹泻', frequency: '不常见', note: '减量或随餐服用。' },
    { effect: '皮疹、痤疮', frequency: '少见', note: '停药观察。' }
  ],
  special:[
    {who:'准备做甲状腺或心脏化验',what:'提前告知医生是否服用生物素，通常需要停用 48–72 小时。'},
    {who:'脱发或指甲易断',what:'先排查铁蛋白、甲状腺功能、锌和蛋白质摄入，不要只加生物素。'},
    {who:'长期生蛋清饮食',what:'抗生物素蛋白会结合生物素，导致缺乏。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Biotin — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Biotin-HealthProfessional/',kind:'机构'},
    {text:'Lipner SR. Rethinking biotin therapy for hair, nail, and skin disorders. J Am Acad Dermatol. 2018;78(6):1236-1238.',kind:'综述'},
    {text:'Zempleni J, Wijeratne SS, Hassan YI. Biotin. Biofactors. 2009;35(1):36-46.',kind:'综述'},
  ],
  related:['b5','b12','zinc','iron']
},
{
  id:'b9',
  name:'维生素 B9（叶酸）',
  en:'Folate',
  category:'vitamin-water',
  scoring:{unit:'µg',rni:400,ul:1000,low:400,high:800,step:50},
  tagline:'备孕期的关键营养素，也是同型半胱氨酸代谢的枢纽。活性形式与普通叶酸要分清。',
  intro:[
    '叶酸是一碳单位转移的载体，参与 DNA 合成、氨基酸代谢和红细胞生成。天然食物中的叶酸（folate）与补充剂中的合成叶酸（folic acid）结构不同，剂量单位常用“膳食叶酸当量”表示。',
    '备孕和孕早期补充叶酸能显著降低神经管缺陷风险，这是证据最充分的部分。5-MTHF 是活性形式，适合 MTHFR 变异或肝功能受损者；但预防神经管缺陷的指南证据主要来自合成叶酸，孕期选择应听从产科医生。'
  ],
  roles:['DNA 与 RNA 合成','红细胞生成','同型半胱氨酸代谢','神经管闭合','参与神经递质合成'],
  intake:{
    main:'400 µg DFE/天',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'备孕 / 孕早期',value:'600 µg DFE/天'},
      {label:'哺乳期',value:'550 µg DFE/天'},
      {label:'可耐受最高摄入量',value:'1000 µg/天（合成叶酸）'}
    ],
    upper:'1000 µg/天（合成叶酸；天然食物叶酸不适用）',
    note:'中国 DRIs 建议备孕女性从孕前 3 个月开始每天补充 400 µg 叶酸，并持续到孕早期结束。具体方案以产科医生意见为准。'
  },
  timing:'随餐或空腹均可',
  withFood:'任意',
  forms:[
    {name:'叶酸（folic acid）',bio:'高',timing:'随餐或空腹',food:'任意',dose:'400 µg/天',grade:'A',note:'预防神经管缺陷证据最充分，备孕首选。'},
    {name:'5-MTHF（甲基叶酸）',bio:'高',timing:'随餐',food:'随餐',dose:'400–800 µg DFE/天',grade:'B',note:'不需要 DHFR 转化；MTHFR 变异者可在医生指导下考虑，肝功能受损者的优势证据不足。孕期使用需与产科医生确认。'},
    {name:'亚叶酸钙（folinic acid）',bio:'高',timing:'随餐',food:'随餐',dose:'按医嘱（常见 400–800 µg/天）',grade:'B',note:'用于甲氨蝶呤解毒等特殊场景，不作为日常补充首选。'},
    {name:'叶酸 + B12 复合',bio:'高',timing:'随餐',food:'随餐',dose:'叶酸 400 µg + B12 100 µg/天',grade:'A',note:'同时补 B12，降低大剂量叶酸掩盖 B12 缺乏的风险。'}
  ],
  foods:[
    {name:'猪肝',amount:'约 236 µg',per:'100 g',note:'同时富含维生素 A，孕期不宜大量'},
    {name:'菠菜（熟）',amount:'约 194 µg',per:'100 g',note:'天然叶酸，烹饪损失较大'},
    {name:'芦笋',amount:'约 149 µg',per:'100 g',note:''},
    {name:'扁豆（熟）',amount:'约 181 µg',per:'100 g',note:'豆类是稳定来源'},
    {name:'橙',amount:'约 30 µg',per:'100 g',note:'同时提供维生素 C'}
  ],
  deficiency:{
    signs:['巨幼细胞性贫血','舌炎、口腔溃疡','同型半胱氨酸升高','孕期神经管缺陷风险增加','疲劳、食欲下降'],
    groups:['备孕和孕期','酗酒','慢性肝病','吸收不良、炎症性肠病','长期服用甲氨蝶呤、抗癫痫药','MTHFR 基因变异（影响转化效率）']
  },
  tests:[
    {name:'血清叶酸',sample:'静脉血',range:'通常 > 4 ng/mL 视为充足；< 4 ng/mL 提示缺乏',note:'反映近期摄入，波动较大。'},
    {name:'红细胞叶酸',sample:'静脉血',range:'按实验室参考范围',note:'反映较长期储备，比血清叶酸稳定。'},
    {name:'同型半胱氨酸',sample:'静脉血',range:'通常 < 15 µmol/L',note:'叶酸、B12、B6 缺乏均可升高，需要联合判断。'}
  ],
  cautions:['大剂量叶酸可掩盖 B12 缺乏的贫血表现，但神经损伤仍会进展','未代谢叶酸长期高水平的临床意义尚不明确','甲氨蝶呤、柳氮磺吡啶、某些抗癫痫药与叶酸存在相互作用','高剂量叶酸可能增加某些人群的结直肠病变风险，需个体化'],
  sideEffects:[
    { effect: '恶心、腹胀', frequency: '不常见', note: '减量或随餐服用。' },
    { effect: '掩盖维生素 B12 缺乏', frequency: '不常见', note: '大剂量叶酸可掩盖贫血，但神经损伤仍进展；B12 缺乏者需同时评估。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药观察。' },
    { effect: '结直肠腺瘤风险信号', frequency: '少见', note: '长期大剂量补充的 RCT 曾观察到风险升高，无指征不要长期使用。' }
  ],
  special:[
    {who:'备孕与孕早期',what:'从孕前 3 个月开始每天 400 µg 叶酸，既往有神经管缺陷生育史者需要更高剂量，由医生决定。'},
    {who:'慢性肝病或酗酒',what:'肝脏储存和转化能力下降，5-MTHF 可减少转化步骤；同时要排查 B12 缺乏。'},
    {who:'MTHFR 变异',what:'5-MTHF 不依赖 MTHFR 转化，但临床结局证据仍有限，不必盲目追求基因检测。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Folate — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',kind:'机构'},
    {text:'Crider KS, et al. Folic acid food fortification: its history, effect, concerns, and future directions. Nutrients. 2011;3(3):370-384.',kind:'综述'},
    {text:'MRC Vitamin Study Research Group. Prevention of neural tube defects: results of the Medical Research Council Vitamin Study. Lancet. 1991;338(8760):131-137. doi:10.1016/0140-6736(91)90133-A',kind:'研究'},
    {text:'Cole BF, et al. Folic acid for the prevention of colorectal adenomas: a randomized clinical trial. JAMA. 2007;297(21):2351-2359. doi:10.1001/jama.297.21.2351',kind:'研究'},
  ],
  related:['b12','b6','b2','iron','b1']
},
{
  id:'b12',
  name:'维生素 B12（钴胺素）',
  en:'Vitamin B12',
  category:'vitamin-water',
  scoring:{unit:'µg',rni:2.4,ul:null,low:2.4,high:1000,step:0.1},
  tagline:'唯一必须从动物性食物或强化食品获得的 B 族维生素。缺乏会悄悄伤神经。',
  intro:[
    '维生素 B12 参与甲基丙二酰辅酶 A 变位酶和甲硫氨酸合成酶反应，影响髓鞘形成、红细胞生成和 DNA 合成。它几乎只存在于动物性食物中，严格素食者必须依赖强化食品或补充剂。',
    '血清 B12 对缺乏的敏感性不高，正常值也可能存在组织缺乏。甲基丙二酸（MMA）和同型半胱氨酸升高，往往比血清 B12 更早提示问题。老年人、萎缩性胃炎、二甲双胍和 PPI 使用者都是高风险人群。'
  ],
  roles:['髓鞘形成与神经功能','红细胞生成','同型半胱氨酸代谢','DNA 合成','参与线粒体能量代谢'],
  intake:{
    main:'2.4 µg/天',
    mainLabel:'成人推荐摄入量',
    groups:[
      {label:'孕期 / 哺乳期',value:'2.9 / 3.3 µg/天'},
      {label:'50 岁以上',value:'建议通过强化食品或补充剂获取'},
      {label:'严格素食',value:'必须补充'}
    ],
    upper:'未制定（毒性很低）',
    note:'食物中的 B12 需要胃酸和胃蛋白酶释放，再与内因子结合吸收。这条通路在萎缩性胃炎、胃切除和长期 PPI 使用时会受损。'
  },
  timing:'任意时间；随餐或空腹均可',
  withFood:'任意',
  forms:[
    {name:'氰钴胺',bio:'高',timing:'任意时间',food:'任意',dose:'500–1000 µg/天',grade:'A',note:'稳定、便宜。需要在体内转化为甲钴胺或腺苷钴胺。'},
    {name:'甲钴胺',bio:'高',timing:'任意时间',food:'任意',dose:'500–1500 µg/天',grade:'B',note:'甲钴胺是体内辅酶形式之一，但口服仍依赖吸收；没有对所有人都更优的证据。'},
    {name:'腺苷钴胺',bio:'高',timing:'任意时间',food:'任意',dose:'500–1500 µg/天',grade:'B',note:'线粒体中的活性形式，常用于神经相关补充。'},
    {name:'羟钴胺',bio:'高',timing:'任意时间',food:'任意',dose:'按医嘱（常见 1 mg/次，肌注）',grade:'B',note:'注射常用，也用于氰化物中毒，口服产品较少。'}
  ],
  foods:[
    {name:'蛤蜊',amount:'约 20–90 µg',per:'100 g',note:'含量极高，吃一次可超过数日需要'},
    {name:'猪肝',amount:'约 26 µg',per:'100 g',note:'同时富含铁和维生素 A'},
    {name:'三文鱼',amount:'约 3.2 µg',per:'100 g',note:''},
    {name:'牛肉',amount:'约 1.5 µg',per:'100 g',note:''},
    {name:'鸡蛋 / 牛奶',amount:'约 0.5 / 0.4 µg',per:'1 个 / 100 g',note:'含量不高，素食者需强化食品'}
  ],
  deficiency:{
    signs:['巨幼细胞性贫血','手脚麻木、刺痛、平衡障碍','记忆力下降、情绪改变','舌炎、口角炎','严重时脊髓后索损害'],
    groups:['严格素食','50 岁以上','萎缩性胃炎、胃切除','长期服用二甲双胍','长期使用质子泵抑制剂','减重手术','慢性肝病、酗酒','吸收不良、炎症性肠病']
  },
  tests:[
    {name:'血清维生素 B12',sample:'静脉血',range:'通常 < 150 pmol/L（约 200 pg/mL）提示可能缺乏；150–400 pmol/L 为灰区',note:'敏感性和特异性都有限，正常值不能完全排除组织缺乏。'},
    {name:'甲基丙二酸（MMA）',sample:'静脉血或尿液',range:'升高提示 B12 缺乏（具体阈值按实验室）',note:'比血清 B12 更敏感，肾功能不全时也会升高。'},
    {name:'同型半胱氨酸',sample:'静脉血',range:'通常 < 15 µmol/L',note:'B12、叶酸、B6 缺乏均可升高。'},
    {name:'全反钴胺素（holoTC）',sample:'静脉血',range:'按实验室参考范围',note:'反映可利用的 B12，部分实验室可做。'}
  ],
  cautions:['高剂量口服 B12 安全性高，未制定上限','严重缺乏治疗初期可能出现低钾，需要监测','大剂量叶酸会掩盖 B12 缺乏的贫血，延误神经损伤发现','与二甲双胍、PPI、H2 受体拮抗剂长期合用会增加缺乏风险'],
  sideEffects:[
    { effect: '注射部位反应', frequency: '不常见', note: '肌注时出现红肿疼痛，可更换部位。' },
    { effect: '恶心、腹泻', frequency: '不常见', note: '口服制剂较轻微，减量可缓解。' },
    { effect: '皮疹、瘙痒', frequency: '少见', note: '停药；严重过敏需急诊。' },
    { effect: '低钾血症（治疗初期）', frequency: '少见', note: '严重缺乏者治疗初期需监测血钾。' }
  ],
  special:[
    {who:'严格素食',what:'必须每天通过强化食品或补充剂获取 2.4 µg 以上；口服 500–1000 µg 每周数次也可。'},
    {who:'慢性肝病或酗酒',what:'甲钴胺或腺苷钴胺是活性形式，减少转化步骤；同时排查叶酸和硫胺素缺乏。'},
    {who:'50 岁以上',what:'胃酸和内因子下降，食物中的 B12 吸收变差，优先选择强化食品或补充剂。'}
  ],
  refs:[
    {text:'中国营养学会. 中国居民膳食营养素参考摄入量（2023版）. 人民卫生出版社, 2023.',kind:'指南'},
    {text:'NIH Office of Dietary Supplements. Vitamin B12 — Fact Sheet for Health Professionals.',url:'https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/',kind:'机构'},
    {text:'Stabler SP. Clinical practice. Vitamin B12 deficiency. N Engl J Med. 2013;368(2):149-160.',kind:'综述'},
    {text:'Green R, Allen LH, Bjørke-Monsen AL, et al. Vitamin B12 deficiency. Nat Rev Dis Primers. 2017;3:17040.',kind:'综述'},
    {text:'Wang H, et al. Oral vitamin B12 versus intramuscular vitamin B12 for vitamin B12 deficiency. Cochrane Database Syst Rev. 2018;3:CD004655. doi:10.1002/14651858.CD004655.pub3',kind:'研究'},
  ],
  related:['b9','b6','b2','iron','b1']
}
);

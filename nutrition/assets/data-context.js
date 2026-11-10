/* =========================================================
   个人情况与形式代谢背景
   只用于判断“某种形式在当前情况下是否更适合”，
   不参与配方分，也不构成诊断或处方。

   formTraits 字段说明：
   liver 0 = 不依赖肝脏转化；1 = 部分依赖；2 = 高度依赖
   active = 已越过一个需要转化的步骤
   saturable = 吸收或转运有饱和
   acid = 依赖胃酸
   prescription = 处方级
   note = 该形式的代谢路径与证据边界
   ========================================================= */
window.SUPPLEMENT_CONTEXT = {
  factors: [
    { id: 'liver', label: '肝脏问题', hint: '脂肪肝、肝炎、肝硬化', group: '器官' },
    { id: 'kidney', label: '肾脏问题', hint: 'eGFR < 60、慢性肾病、透析', group: '器官' },
    { id: 'absorption', label: '吸收不良', hint: '长期 PPI、炎症性肠病、减重手术', group: '器官' },
    { id: 'pregnancy', label: '孕期 / 哺乳', hint: '或正在备孕', group: '生理' },
    { id: 'vegan', label: '严格素食', hint: '不吃肉、蛋、奶', group: '生理' },
    { id: 'alcohol', label: '经常饮酒', hint: '每周多次或长期饮酒', group: '生理' },
    { id: 'metformin', label: '长期二甲双胍', hint: '2 型糖尿病常用药', group: '用药' },
    { id: 'diuretic', label: '长期利尿剂', hint: '呋塞米、氢氯噻嗪等', group: '用药' },
    { id: 'warfarin', label: '抗凝药', hint: '华法林等维生素 K 拮抗剂', group: '用药' },
    { id: 'severeNeuro', label: '严重神经症状', hint: '意识混乱、眼球运动异常、共济失调、严重呕吐', group: '警示' }
  ],

  nutrients: {
    b1: {
      organ: '肝 / 组织（转化为 TPP）',
      kidney: '肾脏主要排泄；透析会丢失',
      flags: ['liver', 'kidney', 'absorption', 'alcohol', 'diuretic', 'severeNeuro'],
      factors: {
        liver: '肝功能受损或长期饮酒时，硫胺素储备与 TPP 转化下降；严重缺乏可能需要静脉硫胺素。',
        kidney: '透析会丢失硫胺素；肾功能不全本身不是活化障碍，但剂量需医生评估。',
        absorption: '高剂量口服吸收会饱和，分次服用更稳；吸收不良时可能需要更高剂量或注射。',
        alcohol: '酒精降低硫胺素吸收并增加排泄，需求上升。',
        diuretic: '长期利尿剂可能增加硫胺素流失。',
        severeNeuro: '疑似 Wernicke 脑病或严重硫胺素缺乏：立即就医，静脉硫胺素优先，不要在家比较口服形式。'
      },
      formTraits: [
        { match: '盐酸硫胺素', liver: 1, saturable: true, note: '依赖 THTR 转运体，单次约 5 mg 起饱和；需在组织内磷酸化为 TPP。肝病本身不是形式选择的分水岭。' },
        { match: '苯磷硫胺', liver: 1, saturable: false, note: '脂溶性前药，跨膜吸收不依赖转运体，组织 TPP 升高更明显；临床结局证据仍有限。' },
        { match: '呋喃硫胺', liver: 1, saturable: false, note: '脂溶性衍生物，吸收较好；进入体内后仍需转化为活性硫胺素。' },
        { match: '舒布硫胺', liver: 1, saturable: false, note: '脂溶性衍生物，吸收较好；人体结局证据较少。' }
      ]
    },

    b2: {
      organ: '肠黏膜 / 肝（转化为 FMN、FAD）',
      kidney: '肾脏排泄；尿液变黄是正常现象',
      flags: ['liver', 'absorption'],
      factors: {
        liver: '核黄素在肠黏膜和肝内转为 FMN / FAD，肝病时这一步可能受影响；但 R5P 口服后也会先去磷酸化，没有可靠证据表明肝病患者必须选它。',
        absorption: '核黄素吸收有饱和，分次服用比一次大剂量更稳。'
      },
      formTraits: [
        { match: '核黄素-5-磷酸', liver: 1, active: false, saturable: false, note: '口服后在肠道去磷酸化再吸收，最终仍需在体内转为 FMN / FAD；优势证据不足。' },
        { match: 'FMN', liver: 1, active: false, saturable: false, note: '同样在肠道去磷酸化后吸收，不能绕过体内的 FAD 合成。' },
        { match: '核黄素', liver: 1, saturable: true, note: '经 RFVT 转运体吸收，单次约 25–30 mg 饱和；在肠黏膜和肝内转为 FMN / FAD。' }
      ]
    },

    b3: {
      organ: '肝（NAD 合成）/ 肾脏排泄',
      kidney: '主要经肾排泄；肾功能不全需医生评估剂量',
      flags: ['liver', 'kidney'],
      factors: {
        liver: '高剂量烟酸有肝毒性风险；肝病患者不要自行使用调脂剂量。',
        kidney: '肾功能不全时排泄下降，高剂量需医生评估。'
      },
      formTraits: [
        { match: '肌醇六烟酸酯', liver: 2, saturable: false, note: '需在体内水解为烟酸，释放缓慢；肝毒性风险并不低于普通烟酸。' },
        { match: 'NR / NMN', liver: 1, saturable: true, note: '作为 NAD 前体进入补救合成途径；人体结局证据有限，剂量与长期安全性未定。' },
        { match: '烟酰胺', liver: 1, saturable: true, note: '直接进入 NAD 合成，不引起潮红；高剂量仍有肝毒性风险。' },
        { match: '烟酸', liver: 1, saturable: true, note: '经肝脏代谢，调脂剂量有肝毒性和潮红；缓释剂型肝毒性更高。' }
      ]
    },

    b5: {
      organ: '全身组织（辅酶 A 合成）',
      kidney: '肾脏排泄',
      flags: ['absorption'],
      factors: {
        absorption: '泛酸广泛存在于食物中，缺乏罕见；吸收不良时按复合维生素补充即可。'
      },
      formTraits: [
        { match: '泛硫乙胺', liver: 0, saturable: false, note: '泛酸的双硫衍生物，可提高辅酶 A 水平；临床结局证据有限。' },
        { match: '右泛醇', liver: 0, saturable: false, note: '泛酸的醇形式，吸收后转为泛酸；与泛酸钙差别不大。' },
        { match: 'D-泛酸钙', liver: 0, saturable: false, note: '常规形式，吸收后在组织内合成辅酶 A。' }
      ]
    },

    b6: {
      organ: '肝（磷酸化为 P5P）',
      kidney: '肾脏排泄；高剂量需监测',
      flags: ['liver', 'kidney', 'alcohol'],
      factors: {
        liver: '吡哆醇需要在肝内磷酸化为 P5P；但口服 P5P 也会在肠道去磷酸化，肝病时是否更优仍缺乏可靠证据。',
        kidney: '肾功能不全时高剂量 B6 需医生评估；长期高剂量本身有周围神经病变风险。',
        alcohol: '酒精可能降低 B6 水平。'
      },
      formTraits: [
        { match: '吡哆醛-5-磷酸', liver: 1, active: false, saturable: false, note: '口服后在肠道去磷酸化，吸收后仍需在肝内重新磷酸化；不能简单视为绕过肝脏。' },
        { match: 'α-酮戊二酸', liver: 1, saturable: true, note: '吡哆醇的酮戊二酸盐，吸收后仍需转化为 P5P。' },
        { match: '盐酸吡哆醇', liver: 1, saturable: true, note: '常规形式，需在肝内磷酸化为 P5P；吸收有饱和。' }
      ]
    },

    b7: {
      organ: '肠道吸收 / 肝脏代谢',
      kidney: '肾脏排泄',
      flags: ['absorption'],
      factors: {
        absorption: '吸收不良时可能需要更高剂量；高剂量生物素会干扰肌钙蛋白、甲状腺等免疫检测，化验前应停 48–72 小时。'
      },
      formTraits: []
    },

    b9: {
      organ: '肝 / 肠黏膜（DHFR 转化为 5-MTHF）',
      kidney: '肾脏排泄；CKD 需求可能增加',
      flags: ['liver', 'absorption', 'pregnancy', 'alcohol', 'kidney'],
      factors: {
        liver: '叶酸需要在肝 / 肠黏膜经 DHFR 转化为 5-MTHF；肝病时 5-MTHF 可能更直接。',
        absorption: '吸收不良或减重手术后可能需要更高剂量。',
        pregnancy: '孕期 400 µg 叶酸是标准；5-MTHF 可作为替代，高剂量需医生。',
        alcohol: '酒精干扰叶酸吸收与肝内代谢。',
        kidney: 'CKD 中叶酸需求可能增加，但形式选择证据不足。'
      },
      formTraits: [
        { match: '5-MTHF', liver: 0, active: true, saturable: false, note: '已是循环中的主要叶酸形式，不需要 DHFR 转化；高剂量仍应在医生指导下使用。' },
        { match: '亚叶酸钙', liver: 0, active: true, saturable: false, note: '还原型叶酸，可绕过 DHFR；常用于特定临床场景。' },
        { match: '叶酸 + B12', liver: 2, saturable: true, note: '普通叶酸需 DHFR 转化，人体该酶活性有限；高剂量可能留下未代谢叶酸。' },
        { match: '叶酸', liver: 2, saturable: true, note: '普通叶酸需 DHFR 转化，人体该酶活性有限；高剂量可能留下未代谢叶酸。' }
      ]
    },

    b12: {
      organ: '回肠吸收 / 肝脏储存',
      kidney: '肾功能不全时 MMA 升高，化验解释需谨慎',
      flags: ['absorption', 'metformin', 'vegan', 'kidney', 'pregnancy'],
      factors: {
        absorption: '需要胃内因子和回肠吸收；高剂量口服可部分克服，严重吸收障碍可能需要注射。',
        metformin: '长期二甲双胍会降低 B12，建议定期监测。',
        vegan: '严格素食者需要规律补充 B12。',
        kidney: '肾功能不全时甲基丙二酸（MMA）升高，化验解释需谨慎。严重 CKD 或透析时，氰钴胺的氰基负荷存在理论顾虑；甲钴胺、腺苷钴胺不提供氰基，但剂量仍需医生确认。',
        pregnancy: '孕期需求增加，按医嘱补充。'
      },
      formTraits: [
        { match: '甲钴胺', liver: 1, active: false, saturable: true, note: '甲基钴胺素是体内辅酶形式之一，但口服仍依赖吸收；没有对所有人都更优的证据。' },
        { match: '腺苷钴胺', liver: 1, active: false, saturable: true, note: '腺苷钴胺素是线粒体辅酶形式，口服吸收路径与其他钴胺素相同。' },
        { match: '羟钴胺', liver: 1, prescription: true, saturable: true, note: '常用于注射与中毒解救，属处方使用。' },
        { match: '氰钴胺', liver: 1, saturable: true, note: '最常用的稳定形式，体内可转为甲钴胺和腺苷钴胺；高剂量口服靠被动扩散。' }
      ]
    },

    'vitamin-d': {
      organ: '肝 25-羟化 / 肾 1α-羟化',
      kidney: 'CKD 时肾脏 1α-羟化受损，可能需要活性维生素 D',
      flags: ['liver', 'kidney', 'absorption', 'pregnancy'],
      factors: {
        liver: '肝病时 25-羟化可能受影响；骨化二醇不需要肝 25-羟化，但需医生评估。',
        kidney: 'CKD 时肾脏活化能力下降，可能需要骨化三醇等活性形式；这类药是处方药。',
        absorption: '脂肪吸收不良或减重手术后，可能需要更高剂量或医生评估。',
        pregnancy: '孕期按医嘱补充，避免自行高剂量。'
      },
      formTraits: [
        { match: '骨化三醇', liver: 0, active: true, prescription: true, saturable: true, note: '已是活性激素，直接作用于肠道与骨骼；需监测血钙，不可自行服用。' },
        { match: '骨化二醇', liver: 0, active: true, saturable: true, note: '25-羟维生素 D3，绕过肝 25-羟化；起效快，需监测血钙和肾功能。' },
        { match: 'D3', liver: 1, saturable: true, note: '需肝 25-羟化、肾 1α-羟化两步活化；脂肪吸收不良时吸收下降。' },
        { match: 'D2', liver: 1, saturable: true, note: '同样需两步活化；半衰期较短，维持效果略弱于 D3。' }
      ]
    },

    'vitamin-k': {
      organ: '肝脏合成凝血因子',
      kidney: '肾脏排泄；CKD 需医生评估',
      flags: ['liver', 'warfarin', 'absorption'],
      factors: {
        liver: '肝病时凝血因子合成受损，维生素 K 不能替代对肝病的处理。',
        warfarin: '华法林期间保持维生素 K 摄入稳定，不要自行加量；MK-7 半衰期长，需与医生讨论。',
        absorption: '脂溶性，吸收不良时需医生评估。'
      },
      formTraits: [
        { match: 'MK-7', liver: 1, saturable: true, note: '半衰期长，血药浓度稳定；华法林期间更需保持每日摄入一致。' },
        { match: 'MK-4', liver: 1, saturable: true, note: '半衰期短，需分次；参与凝血因子 γ-羧化。' },
        { match: 'K1', liver: 1, saturable: true, note: '叶绿醌，主要经淋巴吸收；是华法林拮抗的经典形式。' },
        { match: '复合', liver: 1, saturable: true, note: '不同 K 形式比例差异大，按标签总量计算。' }
      ]
    },

    iron: {
      organ: '十二指肠吸收 / 肝脏 hepcidin 调控',
      kidney: 'CKD 炎症升高 hepcidin，口服铁吸收下降',
      flags: ['liver', 'kidney', 'absorption', 'pregnancy'],
      factors: {
        liver: '肝病或铁过载（血色病）时不要自行补铁，先查铁蛋白和转铁蛋白饱和度。',
        kidney: 'CKD 常伴功能性缺铁，需铁蛋白 / TSAT 评估；不要仅凭血红蛋白自行补。',
        absorption: '隔日补铁可能比每日更好；吸收不良或减重手术后需医生评估。',
        pregnancy: '孕期缺铁常见，但应先化验再补，避免铁过载。'
      },
      formTraits: [
        { match: '双甘氨酸铁', liver: 2, saturable: false, note: '螯合铁，受植酸影响较小；仍由肝脏 hepcidin 调控吸收。' },
        { match: '血红素铁', liver: 2, saturable: false, note: '经血红素受体吸收，不依赖维生素 C；铁过载风险同样存在。' },
        { match: '羰基铁', liver: 2, saturable: true, note: '元素铁，吸收较慢；需胃酸环境。' },
        { match: '葡萄糖酸亚铁', liver: 2, saturable: true, note: '亚铁盐，需酸性环境；胃肠刺激较硫酸亚铁轻。' },
        { match: '硫酸亚铁', liver: 2, saturable: true, note: '标准亚铁盐，吸收好但胃肠刺激明显；与钙、茶、咖啡错开。' },
        { match: '富马酸亚铁', liver: 2, saturable: true, note: '亚铁盐，元素铁含量较高；吸收受胃酸和食物影响。' }
      ]
    },

    magnesium: {
      organ: '肠道吸收 / 肾脏排泄',
      kidney: '肾功能不全时高剂量有高镁血症风险',
      flags: ['kidney', 'absorption', 'diuretic', 'alcohol'],
      factors: {
        kidney: '肾脏排镁能力下降：高剂量可致高镁血症（乏力、恶心、低血压、心跳变慢），严重时呼吸抑制。不要自行补镁，先查血镁和 eGFR，剂量由医生确定。',
        absorption: '吸收不良时需医生评估；分次服用比一次大剂量更稳。',
        diuretic: '利尿剂增加镁流失，可能需要监测。',
        alcohol: '长期饮酒常伴镁摄入不足和流失增加。'
      },
      formTraits: [
        { match: '氧化镁', liver: 0, saturable: true, note: '元素镁含量高，但吸收率低；大剂量易腹泻。' },
        { match: '柠檬酸镁', liver: 0, saturable: true, note: '吸收较好，同时有渗透性通便作用。' },
        { match: '甘氨酸镁', liver: 0, saturable: true, note: '螯合镁，胃肠耐受性较好；元素镁含量较低。' },
        { match: '苹果酸镁', liver: 0, saturable: true, note: '吸收较好，耐受性中等。' },
        { match: '苏糖酸镁', liver: 0, saturable: true, note: '亲脂性较高，理论上更易进入中枢；人体证据有限。' },
        { match: '硫酸镁', liver: 0, saturable: true, note: '常用于导泻或静脉给药；口服吸收有限。' }
      ]
    },

    calcium: {
      organ: '肠道吸收 / 肾脏排泄',
      kidney: 'CKD、肾结石或高钙尿症需医生评估',
      flags: ['kidney', 'absorption', 'pregnancy'],
      factors: {
        kidney: 'CKD、肾结石或高钙尿症时不要自行高剂量补钙。',
        absorption: '胃酸减少或长期 PPI 时，碳酸钙吸收下降，柠檬酸钙通常更合适。',
        pregnancy: '孕期按医嘱补充，避免与铁剂同时大量服用。'
      },
      formTraits: [
        { match: '碳酸钙', liver: 0, saturable: true, acid: true, note: '元素钙含量高，但依赖胃酸溶解；单次吸收有饱和，需分次随餐。' },
        { match: '柠檬酸钙', liver: 0, saturable: false, acid: false, note: '不依赖胃酸，空腹也可吸收；适合长期 PPI 或胃酸减少者。' },
        { match: '柠檬酸苹果酸钙', liver: 0, saturable: false, acid: false, note: '不依赖胃酸，耐受性较好。' },
        { match: '乳酸钙', liver: 0, saturable: false, acid: false, note: '元素钙含量低，需较大片重。' },
        { match: '葡萄糖酸钙', liver: 0, saturable: false, acid: false, note: '元素钙含量低，常用于液体或儿童剂型。' },
        { match: '羟基磷灰石', liver: 0, saturable: false, acid: false, note: '骨矿物质来源，元素钙含量较高；吸收证据有限。' }
      ]
    },

    zinc: {
      organ: '肠道吸收 / 肾脏排泄',
      kidney: 'CKD 需医生评估；长期高剂量可致铜缺乏',
      flags: ['kidney', 'absorption', 'pregnancy'],
      factors: {
        kidney: '肾功能不全时高剂量锌需医生评估；长期高剂量可致铜缺乏。',
        absorption: '吸收不良或减重手术后需监测；高剂量锌会干扰铜吸收。',
        pregnancy: '孕期按医嘱补充，避免长期高剂量。'
      },
      formTraits: [
        { match: '硫酸锌', liver: 0, saturable: true, note: '无机锌，吸收受植酸影响；空腹易恶心。' },
        { match: '葡萄糖酸锌', liver: 0, saturable: true, note: '吸收较好，胃肠刺激较小。' },
        { match: '柠檬酸锌', liver: 0, saturable: true, note: '吸收较好，但仍受食物植酸影响。' },
        { match: '双甘氨酸锌', liver: 0, saturable: true, note: '螯合锌，受植酸影响较小；耐受性较好。' },
        { match: '吡啶甲酸锌', liver: 0, saturable: true, note: '吸收率较高；长期高剂量同样有铜缺乏风险。' }
      ]
    },

    potassium: {
      organ: '肾脏排泄 / 细胞内外分布',
      kidney: 'CKD 或高钾风险者不要自行补钾',
      flags: ['kidney', 'diuretic'],
      factors: {
        kidney: '肾功能不全时排钾下降，自行补钾有高钾血症风险。',
        diuretic: '利尿剂可能增加或减少钾，需按化验监测。'
      },
      formTraits: [
        { match: '氯化钾', liver: 0, saturable: false, note: '吸收完全，但高剂量对胃有刺激；肾功能不全时风险高。' },
        { match: '柠檬酸钾', liver: 0, saturable: false, note: '同时提供碱负荷，常用于结石；肾功能不全需医生评估。' },
        { match: '葡萄糖酸钾', liver: 0, saturable: false, note: '吸收完全，元素钾含量较低。' }
      ]
    },

    'vitamin-a': {
      organ: '肝脏储存 / 视黄醇结合蛋白运输',
      kidney: '肾脏排泄代谢产物；CKD 需医生评估',
      flags: ['liver', 'pregnancy', 'absorption'],
      factors: {
        liver: '肝脏储存维生素 A，肝病时高剂量视黄醇有毒性风险。',
        pregnancy: '孕期高剂量视黄醇有致畸风险，优先 β-胡萝卜素或遵医嘱。',
        absorption: '脂溶性，吸收不良时需医生评估。'
      },
      formTraits: [
        { match: '视黄醇', liver: 2, saturable: true, note: '已成形维生素 A，直接储存于肝脏；过量有肝毒性和致畸风险。' },
        { match: 'β-胡萝卜素', liver: 0, saturable: true, note: '需在体内按需转化为视黄醇，转化率有限；不具同等急性毒性，但高剂量吸烟者风险升高。' },
        { match: '混合类胡萝卜素', liver: 0, saturable: true, note: '各成分比例差异大，不能按 β-胡萝卜素剂量直接换算。' }
      ]
    },

    'vitamin-e': {
      organ: '肝脏代谢 / 脂蛋白运输',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver', 'warfarin', 'absorption'],
      factors: {
        liver: '高剂量维生素 E 在肝病患者中需谨慎。',
        warfarin: '高剂量维生素 E 可能增加出血风险，与抗凝药合用需医生评估。',
        absorption: '脂溶性，吸收不良时需医生评估。'
      },
      formTraits: [
        { match: 'd-α-生育酚', liver: 1, saturable: true, note: '天然构型，经肝 α-生育酚转移蛋白优先保留；高剂量仍会饱和。' },
        { match: 'dl-α-生育酚', liver: 1, saturable: true, note: '合成型，含 8 种立体异构体；生物活性约为天然型的一半。' },
        { match: '混合生育酚', liver: 1, saturable: true, note: '含 α、γ、δ 等生育酚；γ-生育酚的临床证据有限。' }
      ]
    },

    'vitamin-c': {
      organ: '肠道吸收 / 肾脏排泄',
      kidney: '高剂量增加草酸钙结石风险；CKD 需医生评估',
      flags: ['kidney', 'absorption'],
      factors: {
        kidney: '高剂量维生素 C 增加草酸钙结石风险；肾功能不全者需医生评估。',
        absorption: '高剂量吸收有饱和，分次服用更稳。'
      },
      formTraits: [
        { match: '抗坏血酸', liver: 0, saturable: true, note: '经 SVCT 转运体吸收，单次约 200 mg 起饱和；高剂量增加草酸负荷。' },
        { match: '抗坏血酸钠', liver: 0, saturable: true, note: '吸收路径同抗坏血酸，钠负荷需计入。' },
        { match: '脂质体', liver: 0, saturable: false, note: '理论上可绕过转运体饱和，但人体比较证据有限。' },
        { match: '抗坏血酸棕榈酸酯', liver: 0, saturable: true, note: '脂溶性衍生物，吸收后在体内水解为抗坏血酸。' }
      ]
    },

    selenium: {
      organ: '肝（硒蛋白合成）/ 肾脏排泄',
      kidney: '肾脏排泄；CKD 需医生评估',
      flags: ['liver', 'kidney', 'pregnancy'],
      factors: {
        liver: '硒蛋白（GPX、TXNRD）在肝内合成；肝病时硒状态可能下降，但高剂量补硒有毒性，需医生评估。',
        kidney: '硒主要经肾排泄；CKD 或透析时需监测，避免高剂量。',
        pregnancy: '孕期需求略增，按医嘱；避免长期高剂量（脱发、指甲改变）。'
      },
      formTraits: [
        { match: '硒代蛋氨酸', liver: 1, saturable: true, note: '有机硒，会掺入蛋白质缓慢释放；组织蓄积时间较长。' },
        { match: '硒酵母', liver: 1, saturable: true, note: '成分不固定，硒形态混合；剂量按标签硒计。' },
        { match: '亚硒酸钠', liver: 1, saturable: false, note: '无机硒，吸收快、排泄快；高剂量毒性风险更直接。' },
        { match: '甲基硒代半胱氨酸', liver: 1, saturable: false, note: '有机硒，代谢路径不同；癌症预防试验未显示获益。' }
      ]
    },

    iodine: {
      organ: '甲状腺（NIS 转运体摄取）',
      kidney: '肾脏排泄；CKD 需医生评估',
      flags: ['kidney', 'pregnancy', 'absorption'],
      factors: {
        kidney: '碘经肾排泄，肾功能不全时需医生评估剂量。',
        pregnancy: '孕期碘需求增加，但过量可影响甲状腺功能，按医嘱。',
        absorption: '吸收通常完全；胃酸减少或减重手术后需评估。'
      },
      formTraits: [
        { match: '碘化钾', liver: 0, saturable: false, note: '吸收完全，由甲状腺主动摄取；过量可致甲状腺功能紊乱。' },
        { match: '碘酸钾', liver: 0, saturable: false, note: '吸收完全；与碘化钾的差别主要在稳定性。' },
        { match: '海带', liver: 0, saturable: false, note: '碘含量波动极大，难以按标签精确计量，容易过量。' }
      ]
    },

    copper: {
      organ: '肝（铜蓝蛋白合成）/ 胆汁排泄',
      kidney: '肾脏排泄少量；CKD 需医生评估',
      flags: ['liver', 'kidney', 'absorption'],
      factors: {
        liver: '铜在肝内合成铜蓝蛋白并经胆汁排泄；肝病（尤其胆汁淤积）时铜蓄积风险升高，不要自行补铜。',
        kidney: 'CKD 时铜排泄与转运可能改变，需医生评估。',
        absorption: '高剂量锌、铁会竞争铜吸收；吸收不良时需评估。'
      },
      formTraits: [
        { match: '葡萄糖酸铜', liver: 2, saturable: true, note: '需在肝内与铜蓝蛋白结合；胆汁淤积时蓄积风险高。' },
        { match: '硫酸铜', liver: 2, saturable: true, note: '无机铜，吸收快；胃肠刺激较明显。' },
        { match: '双甘氨酸铜', liver: 2, saturable: false, note: '螯合铜，耐受性较好；仍经肝脏处理，肝病需谨慎。' }
      ]
    },

    chromium: {
      organ: '肾脏排泄 / 胰岛素信号辅助',
      kidney: '肾脏排泄；CKD 需医生评估',
      flags: ['kidney'],
      factors: {
        kidney: '肾功能不全时铬排泄下降，高剂量需医生评估。'
      },
      formTraits: [
        { match: '吡啶甲酸铬', liver: 0, saturable: false, note: '吸收率低，多数随粪便排出；对血糖的临床证据不一致。' },
        { match: '氯化铬', liver: 0, saturable: false, note: '无机铬，吸收率低；高剂量有肾毒性信号。' },
        { match: '烟酸铬', liver: 1, saturable: false, note: '结合烟酸，吸收略高；肝病患者需谨慎。' }
      ]
    },

    ala: {
      organ: '肝（Δ-6 脱饱和，转化为 EPA / DHA 效率低）',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver', 'absorption'],
      factors: {
        liver: 'ALA 需在肝内脱饱和转化为 EPA / DHA，转化率通常低于 10%；肝病时转化可能进一步下降。',
        absorption: '随餐吸收更好；脂肪吸收不良时需医生评估。'
      },
      formTraits: [
        { match: '亚麻籽油', liver: 2, saturable: true, note: '以 ALA 为主，需肝内转化；转化率低，不能等同鱼油。' },
        { match: '奇亚籽', liver: 2, saturable: true, note: '食物基质，吸收较慢；同样依赖转化。' },
        { match: '核桃', liver: 2, saturable: true, note: 'ALA 来源，转化效率有限。' },
        { match: '微囊化亚麻籽粉', liver: 2, saturable: true, note: '粉末便于计量，仍需肝内转化。' }
      ]
    },

    epa: {
      organ: '肠道吸收 / 肝脏脂蛋白装配',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver', 'absorption', 'warfarin'],
      factors: {
        liver: 'EPA 参与脂蛋白装配，肝病时脂质代谢改变；高剂量需医生评估。',
        absorption: '随含脂肪餐吸收；脂肪吸收不良或减重手术后需评估。',
        warfarin: '高剂量 ω-3 可能增加出血时间，与抗凝药合用需医生评估。'
      },
      formTraits: [
        { match: 'rTG', liver: 1, saturable: true, note: '重组甘油三酯型，吸收较好；随餐服用。' },
        { match: '天然 TG', liver: 1, saturable: true, note: '天然甘油三酯型，吸收依赖胆盐和胰脂肪酶。' },
        { match: 'EE', liver: 1, saturable: true, note: '乙酯型需胰脂肪酶水解，吸收略低；随餐更重要。' },
        { match: '磷虾油', liver: 1, saturable: false, note: '磷脂型，吸收路径不同；EPA 含量通常较低。' },
        { match: '处方级', liver: 1, prescription: true, note: '处方药，用于特定高甘油三酯人群，需医生管理。' }
      ]
    },

    dha: {
      organ: '肠道吸收 / 肝脏脂蛋白装配 / 脑与视网膜摄取',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver', 'absorption', 'warfarin', 'pregnancy'],
      factors: {
        liver: 'DHA 参与脂蛋白装配，肝病时脂质代谢改变；高剂量需医生评估。',
        absorption: '随含脂肪餐吸收；脂肪吸收不良或减重手术后需评估。',
        warfarin: '高剂量 ω-3 可能增加出血时间，与抗凝药合用需医生评估。',
        pregnancy: '孕期 DHA 需求增加，优先食物或按医嘱补充。'
      },
      formTraits: [
        { match: '藻油', liver: 1, saturable: true, note: '藻类来源，适合素食者；DHA 含量高。' },
        { match: '鱼油（DHA 为主）', liver: 1, saturable: true, note: '甘油三酯型鱼油，随餐吸收。' },
        { match: '磷虾油', liver: 1, saturable: false, note: '磷脂型，吸收路径不同；DHA 含量通常较低。' },
        { match: '金枪鱼油', liver: 1, saturable: true, note: 'DHA 比例较高；需注意重金属检测。' }
      ]
    },

    gla: {
      organ: '肝（Δ-6 脱饱和后续转化）',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver', 'absorption', 'warfarin'],
      factors: {
        liver: 'GLA 可绕过 Δ-6 脱饱和这一步，但后续转化为 DGLA 仍依赖肝脏。',
        absorption: '随餐吸收；脂肪吸收不良时需评估。',
        warfarin: '高剂量 γ-亚麻酸可能影响血小板功能，与抗凝药合用需医生评估。'
      },
      formTraits: [
        { match: '月见草油', liver: 1, saturable: true, note: 'GLA 含量约 8–10%，需较大剂量；随餐吸收。' },
        { match: '琉璃苣油', liver: 1, saturable: true, note: 'GLA 含量较高（约 20%），胃肠耐受性一般。' },
        { match: '黑加仑籽油', liver: 1, saturable: true, note: 'GLA 含量中等，同时含 ALA。' }
      ]
    },

    cla: {
      organ: '肝脏脂质代谢 / 脂肪组织',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver'],
      factors: {
        liver: 'CLA 影响肝脏脂质代谢和胰岛素敏感性；肝病患者需医生评估，长期高剂量对血脂的影响不一致。'
      },
      formTraits: [
        { match: '红花籽油', liver: 1, saturable: true, note: '以顺-9,反-11 CLA 为主；随餐吸收。' },
        { match: '向日葵籽油', liver: 1, saturable: true, note: '异构体比例与红花籽油不同，效果不一定相同。' }
      ]
    },

    oleic: {
      organ: '肝脏脂质代谢 / 胆汁分泌',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver', 'absorption'],
      factors: {
        liver: '油酸主要经肝脏参与脂蛋白代谢；肝病时脂质代谢改变，但油酸本身不是药物。',
        absorption: '随餐吸收；脂肪吸收不良时需评估。'
      },
      formTraits: [
        { match: '特级初榨橄榄油', liver: 0, saturable: true, note: '以油酸为主，含多酚；热量密度高。' },
        { match: '高油酸葵花籽油', liver: 0, saturable: true, note: '油酸比例高，多酚较少。' },
        { match: '油酸胶囊', liver: 0, saturable: true, note: '胶囊剂量通常较小，不能替代整体膳食模式。' }
      ]
    },

    palmitoleic: {
      organ: '肝脏脂质代谢 / 脂肪组织',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver'],
      factors: {
        liver: '棕榈油酸参与肝脏脂质代谢；现有证据不足以支持治疗性补充。'
      },
      formTraits: [
        { match: '沙棘果油', liver: 0, saturable: true, note: '含棕榈油酸，同时含其他脂肪酸；剂量难以标准化。' },
        { match: '澳洲坚果油', liver: 0, saturable: true, note: '以油酸和棕榈油酸为主；热量密度高。' },
        { match: '鱼油来源', liver: 0, saturable: true, note: '含量通常较低，不是主要来源。' }
      ]
    },

    mct: {
      organ: '肝（快速 β-氧化）/ 门静脉直接吸收',
      kidney: '肾脏排泄酮体',
      flags: ['liver', 'absorption'],
      factors: {
        liver: 'MCT 经门静脉直接入肝快速氧化；肝病或酮代谢障碍时高剂量需医生评估。',
        absorption: '不需要胆盐和脂肪酶，吸收不良时仍可利用；高剂量易腹泻。'
      },
      formTraits: [
        { match: 'C8 辛酸', liver: 1, saturable: false, note: '最短链 MCT，氧化最快；高剂量易胃肠不适。' },
        { match: 'C8 / C10', liver: 1, saturable: false, note: 'C8 与 C10 混合，起效略慢但耐受性较好。' },
        { match: 'MCT 油粉', liver: 1, saturable: false, note: '粉末载体，便于分次；注意碳水填充物。' },
        { match: '椰子油', liver: 1, saturable: true, note: 'MCT 只占一部分，大部分仍是长链脂肪，不能等同 MCT 油。' }
      ]
    },

    lecithin: {
      organ: '肝（磷脂酰胆碱合成 / 脂蛋白装配）',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver', 'absorption'],
      factors: {
        liver: '卵磷脂提供胆碱和磷脂，肝病时脂蛋白装配受影响；高剂量胆碱有体味和低血压等反应。',
        absorption: '随餐吸收；脂肪吸收不良时需评估。'
      },
      formTraits: [
        { match: '大豆卵磷脂', liver: 1, saturable: true, note: '含磷脂酰胆碱约 20%；大豆过敏者需注意来源。' },
        { match: '向日葵卵磷脂', liver: 1, saturable: true, note: '不含大豆蛋白，适合大豆过敏者。' },
        { match: '高纯度磷脂酰胆碱', liver: 1, saturable: true, note: '磷脂酰胆碱比例高，剂量更可控。' },
        { match: '食品级液体卵磷脂', liver: 1, saturable: true, note: '食品添加剂规格，磷脂含量不固定。' }
      ]
    },

    phytosterols: {
      organ: '肠道吸收（ABCG5 / G8 外排）/ 肝脏排泄',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver', 'absorption'],
      factors: {
        liver: '植物甾醇经 ABCG5 / G8 外排回肠腔；胆汁淤积或肝病时需医生评估。',
        absorption: '需随餐脂肪；吸收不良时降脂效果下降。'
      },
      formTraits: [
        { match: '游离植物甾醇', liver: 0, saturable: true, note: '需与脂肪同服才能竞争胆固醇吸收。' },
        { match: '植物甾烷醇酯', liver: 0, saturable: true, note: '酯化形式，脂溶性更好；降 LDL 证据较一致。' },
        { match: '强化酸奶', liver: 0, saturable: true, note: '食物基质，剂量按标签；注意额外糖和热量。' },
        { match: '植物甾醇胶囊', liver: 0, saturable: true, note: '胶囊剂量通常低于强化食品的有效剂量。' }
      ]
    },

    coq10: {
      organ: '肝（内源合成）/ 脂蛋白运输',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver', 'warfarin', 'absorption'],
      factors: {
        liver: '肝病时内源合成可能下降，但外源补充的临床结局证据有限。',
        warfarin: '辅酶 Q10 结构与维生素 K 类似，可能降低华法林效果，需监测 INR。',
        absorption: '脂溶性，随含脂肪餐吸收；泛醇吸收略高。'
      },
      formTraits: [
        { match: '泛醌', liver: 1, saturable: true, note: '氧化型，需在体内还原为泛醇；吸收依赖脂肪和胆汁。' },
        { match: '泛醇', liver: 1, saturable: false, note: '还原型，理论上吸收更直接；人体比较证据有限。' },
        { match: '纳米乳化', liver: 1, saturable: false, note: '粒径更小，空腹吸收相对较好；价格较高。' }
      ]
    },

    creatine: {
      organ: '肾脏合成 / 肌肉储存',
      kidney: '肾脏排泄肌酐；CKD 需医生评估',
      flags: ['kidney', 'liver'],
      factors: {
        kidney: 'CKD 时肌酐升高，补充肌酸会干扰肌酐评估，需医生；不意味着一定伤肾。',
        liver: '肝脏合成内源肌酸，肝病时可能下降；外源肌酸不依赖肝转化。'
      },
      formTraits: [
        { match: '一水肌酸', liver: 0, saturable: true, note: '研究最充分的形式；高剂量需分次，以免胃肠不适。' },
        { match: '盐酸肌酸', liver: 0, saturable: false, note: '溶解度较高，但临床比较证据不足。' },
        { match: '缓冲肌酸', liver: 0, saturable: false, note: 'pH 缓冲配方，证据远少于肌酸一水合物。' }
      ]
    },

    probiotics: {
      organ: '肠道（菌株定植与免疫相互作用）',
      kidney: '肾脏排泄代谢产物；CKD 需评估',
      flags: ['absorption', 'kidney'],
      factors: {
        absorption: '长期 PPI、炎症性肠病或减重手术后，定植和效果可能下降；免疫抑制者需医生评估。',
        kidney: 'CKD 或透析患者使用益生菌需医生评估，避免感染风险。'
      },
      formTraits: [
        { match: '多菌株', liver: 0, saturable: false, note: '效果取决于具体菌株与剂量，不能按“菌株数量”判断。' },
        { match: '布拉氏酵母菌', liver: 0, saturable: false, note: '真菌制剂，抗生素期间仍可用；免疫抑制者禁用。' },
        { match: '鼠李糖乳杆菌 GG', liver: 0, saturable: false, note: '研究较多的单菌株，对腹泻的证据相对一致。' }
      ]
    },

    collagen: {
      organ: '肠道吸收（肽段）/ 皮肤与结缔组织',
      kidney: '肾脏排泄；CKD 需评估蛋白质负荷',
      flags: ['kidney', 'absorption'],
      factors: {
        kidney: 'CKD 需限制蛋白质时，胶原蛋白肽计入总蛋白，需医生评估。',
        absorption: '水解肽吸收较好；胃酸减少对吸收影响有限。'
      },
      formTraits: [
        { match: '水解胶原蛋白肽', liver: 0, saturable: false, note: '小分子肽吸收较好；在体内重新组装，不直接变成皮肤胶原。' },
        { match: '明胶', liver: 0, saturable: false, note: '分子较大，需进一步水解；氨基酸组成不完全。' },
        { match: '胶原蛋白 + 维生素 C', liver: 0, saturable: false, note: '维生素 C 是胶原交联的辅因子；复配剂量需看标签。' }
      ]
    },

    melatonin: {
      organ: '肝（CYP1A2 首过代谢）',
      kidney: '肾脏排泄代谢产物',
      flags: ['liver', 'pregnancy', 'warfarin'],
      factors: {
        liver: '褪黑素经肝 CYP1A2 首过代谢，肝病时清除下降，可能需要更低剂量。',
        pregnancy: '孕期与哺乳期不建议自行使用。',
        warfarin: '可能影响华法林代谢，需监测 INR。'
      },
      formTraits: [
        { match: '速释片', liver: 2, saturable: true, note: '起效快、半衰期短；适合入睡困难，首过代谢明显。' },
        { match: '缓释片', liver: 2, saturable: false, note: '缓慢释放，适合夜间易醒；次日残留可能更明显。' },
        { match: '舌下', liver: 1, saturable: false, note: '经口腔黏膜吸收，部分绕过首过代谢。' },
        { match: '软糖', liver: 2, saturable: true, note: '剂量常不准确，含糖；不推荐作为精确剂量来源。' }
      ]
    },

    bcaa: {
      organ: '肝（支链氨基酸代谢）/ 肌肉',
      kidney: '肾脏排泄；CKD 需评估',
      flags: ['liver', 'kidney'],
      factors: {
        liver: 'BCAA 在肝内参与氮代谢，肝硬化患者常用于改善营养，但需医生指导。',
        kidney: 'CKD 需限制蛋白质或氨基酸时，需医生评估。'
      },
      formTraits: [
        { match: '2:1:1', liver: 1, saturable: true, note: '亮氨酸、异亮氨酸、缬氨酸比例；单独补 BCAA 不如完整蛋白。' },
        { match: '胶囊', liver: 1, saturable: true, note: '剂量通常较低，需多粒才能达到研究剂量。' },
        { match: '液体', liver: 1, saturable: true, note: '吸收快，常含糖或代糖。' },
        { match: '蛋白粉', liver: 1, saturable: true, note: '含完整蛋白，氨基酸谱更全；不是纯 BCAA。' }
      ]
    },

    carnitine: {
      organ: '肝（合成）/ 肾脏排泄',
      kidney: '肾脏排泄；CKD 需评估',
      flags: ['kidney', 'liver', 'absorption'],
      factors: {
        kidney: 'CKD 时肉碱清除下降，需医生评估。',
        liver: '肝病时内源合成下降，但外源补充的临床证据有限。',
        absorption: '吸收有饱和，分次服用更好。'
      },
      formTraits: [
        { match: '酒石酸盐', liver: 1, saturable: true, note: '常用形式，吸收有饱和；酒石酸部分需计入。' },
        { match: '乙酰左旋肉碱', liver: 1, saturable: true, note: '乙酰化形式，理论上更易进入中枢；证据有限。' },
        { match: '丙酰左旋肉碱', liver: 1, saturable: true, note: '丙酰化形式，研究集中在心血管场景。' },
        { match: '注射液', liver: 1, prescription: true, note: '静脉制剂，用于特定缺乏或透析患者，需医生管理。' }
      ]
    },

    'beta-alanine': {
      organ: '骨骼肌（合成肌肽）',
      kidney: '肾脏排泄；高剂量需分次',
      flags: ['kidney', 'absorption'],
      factors: {
        kidney: '肾功能不全时 β-丙氨酸代谢产物需医生评估。',
        absorption: '高剂量一次易致感觉异常，分次或缓释更好。'
      },
      formTraits: [
        { match: '游离', liver: 0, saturable: false, note: '吸收快，单次大剂量易出现皮肤刺痛感；分次可减轻。' },
        { match: '缓释片', liver: 0, saturable: true, note: '释放较慢，刺痛感较少；总剂量需足够。' },
        { match: '复配', liver: 0, saturable: false, note: '与肌酸复配，剂量需分别核对。' },
        { match: '能量胶', liver: 0, saturable: false, note: '剂量通常较低，更适合比赛补给而非负荷。' }
      ]
    },

    berberine: {
      organ: '肠道 / 肝（CYP3A4、P-糖蛋白）',
      kidney: '肾功能不全时清除下降，且可能改变二甲双胍暴露',
      flags: ['liver', 'kidney', 'pregnancy', 'metformin'],
      factors: {
        liver: '小檗碱抑制 CYP3A4、CYP2D6 和 P-糖蛋白，肝病或合用他汀、环孢素、地高辛时药物浓度可能升高。',
        kidney: '肾功能不全时需医生评估；与二甲双胍合用可能改变其暴露并增加低血糖风险。',
        pregnancy: '孕妇、哺乳期和新生儿禁用：可透过胎盘，并有核黄疸风险。',
        metformin: '可能改变二甲双胍暴露，合用需监测血糖和肾功能。'
      },
      formTraits: [
        { match: '盐酸小檗碱', liver: 2, saturable: true, note: '口服吸收低，主要作用于肠道；CYP 抑制与肝损伤风险随剂量增加。' },
        { match: '磷脂', liver: 2, saturable: false, note: '吸收提高后，药物相互作用风险也同步增加。' }
      ]
    },

    curcumin: {
      organ: '肝 / 肠道（CYP3A4、UGT）',
      kidney: '高剂量可能增加草酸盐负荷',
      flags: ['liver', 'kidney', 'pregnancy', 'warfarin'],
      factors: {
        liver: '高剂量姜黄素（尤其 95% 提取物）有罕见肝损伤报告，肝病患者不建议自行使用；同时抑制 CYP3A4 和 P-糖蛋白。',
        kidney: '高剂量可能增加草酸盐负荷，肾结石史者需谨慎。',
        pregnancy: '孕期、哺乳期安全性资料不足，不建议高剂量使用。',
        warfarin: '可能增强抗凝作用，合用需监测 INR。'
      },
      formTraits: [
        { match: '姜黄素', liver: 2, saturable: true, note: '普通姜黄素吸收很低；磷脂或纳米乳剂提高吸收后，肝脏与药物相互作用风险也增加。' }
      ]
    },

    ginkgo: {
      organ: '肝（部分代谢）/ 血小板功能',
      kidney: '肾功能不全无需常规调整，但合并用药需医生确认',
      flags: ['liver', 'pregnancy', 'warfarin'],
      factors: {
        liver: '银杏叶提取物经肝代谢，肝病时无需常规调整，但合并用药的相互作用风险增加。',
        pregnancy: '孕期、哺乳期和围手术期避免使用：可能增加出血风险。',
        warfarin: '与华法林、抗血小板药合用增加出血风险，术前应停用。'
      },
      formTraits: [
        { match: 'EGb', liver: 1, saturable: false, note: 'EGb 761 是研究最多的标准提取物，含黄酮苷与萜内酯；抗血小板作用与剂量和合用药物相关。' },
        { match: '银杏', liver: 1, saturable: false, note: '标准提取物含黄酮苷与萜内酯；抗血小板作用与剂量和合用药物相关。' }
      ]
    },

    ginseng: {
      organ: '肝（CYP3A4 代谢）',
      kidney: '肾功能不全无需常规调整，但需医生确认',
      flags: ['liver', 'pregnancy', 'warfarin', 'diuretic'],
      factors: {
        liver: '人参皂苷经肝代谢，肝病时清除可能下降，并与多种药物经 CYP3A4 相互作用。',
        pregnancy: '孕期、哺乳期安全性资料不足，不建议自行使用。',
        warfarin: '可能降低华法林抗凝效果，需监测 INR。',
        diuretic: '与利尿剂合用可能加重水钠潴留或低钾。'
      },
      formTraits: [
        { match: '人参', liver: 1, saturable: false, note: '不同人参皂苷谱差异很大，不能按总皂苷含量直接比较。' }
      ]
    },

    ashwagandha: {
      organ: '肝（部分代谢）',
      kidney: '肾功能不全安全性资料不足',
      flags: ['liver', 'pregnancy'],
      factors: {
        liver: '有罕见但明确的药物性肝损伤报告，肝病患者应避免；出现黄疸、尿色加深立即停用。',
        pregnancy: '孕期禁用：可能增加流产风险。'
      },
      formTraits: [
        { match: '醉茄', liver: 2, saturable: false, note: '根提取物与全株提取物成分不同；肝损伤个案多与高剂量根提取物相关。' },
        { match: '根叶复方', liver: 2, saturable: false, note: '根叶复方成分更复杂，肝损伤风险资料更少。' }
      ]
    },

    valerian: {
      organ: '肝（代谢）/ 中枢镇静',
      kidney: '肾功能不全时镇静作用可能延长',
      flags: ['liver', 'pregnancy'],
      factors: {
        liver: '缬草经肝代谢，肝病时镇静作用可能延长；罕见肝损伤报告。',
        pregnancy: '孕期、哺乳期安全性资料不足，不建议使用。'
      },
      formTraits: [
        { match: '缬草', liver: 1, saturable: false, note: '缬草烯酸含量是标准化关键；与镇静药、酒精合用会叠加中枢抑制。' }
      ]
    },

    'milk-thistle': {
      organ: '肝（代谢与胆汁排泄）',
      kidney: '肾功能不全无需常规调整',
      flags: ['liver', 'pregnancy'],
      factors: {
        liver: '水飞蓟素经肝代谢，虽用于肝病辅助，但肝硬化患者仍需医生评估；可能影响 CYP450。',
        pregnancy: '孕期、哺乳期安全性资料不足。'
      },
      formTraits: [
        { match: '水飞蓟', liver: 1, saturable: false, note: '水飞蓟素标准化到 80% 左右；磷脂复合物吸收更高。' }
      ]
    },

    'saw-palmetto': {
      organ: '肝（部分代谢）/ 前列腺',
      kidney: '肾功能不全无需常规调整',
      flags: ['liver', 'pregnancy', 'warfarin'],
      factors: {
        liver: '经肝代谢，肝病时需医生评估。',
        pregnancy: '孕期、哺乳期和儿童不建议使用。',
        warfarin: '可能增强抗凝作用，需监测 INR。'
      },
      formTraits: [
        { match: '锯棕榈', liver: 1, saturable: false, note: '脂肪酸与植物甾醇是主要成分；不同提取物规格差异大。' }
      ]
    },

    caffeine: {
      organ: '肝（CYP1A2 代谢）',
      kidney: '肾功能不全时代谢产物清除下降',
      flags: ['liver', 'pregnancy'],
      factors: {
        liver: '咖啡因主要经 CYP1A2 在肝内代谢，肝硬化时半衰期显著延长，需减量。',
        pregnancy: '孕期建议每日不超过 200 mg；高剂量与低出生体重相关。'
      },
      formTraits: [
        { match: '咖啡因', liver: 2, saturable: false, note: '无水咖啡因吸收快；缓释剂型血药浓度更平稳，但总剂量相同。' }
      ]
    },

    whey: {
      organ: '肾（蛋白负荷）/ 肝（氨基酸代谢）',
      kidney: 'CKD 未透析者需限制总蛋白；透析者需营养师计算',
      flags: ['kidney'],
      factors: {
        kidney: 'CKD 未透析者高蛋白摄入可能加速肾功能下降；透析者可增加蛋白摄入，但需营养师计算。'
      },
      formTraits: [
        { match: '乳清', liver: 0, saturable: false, note: '乳清蛋白氨基酸谱完整，吸收快；不是“伤肾”本身，问题在总蛋白负荷。' },
        { match: '分离', liver: 0, saturable: false, note: '分离乳清乳糖更低，适合乳糖不耐者。' }
      ]
    },

    casein: {
      organ: '肾（蛋白负荷）/ 肝（氨基酸代谢）',
      kidney: 'CKD 未透析者需限制总蛋白',
      flags: ['kidney'],
      factors: {
        kidney: 'CKD 未透析者高蛋白摄入可能加速肾功能下降；需计入每日总蛋白。'
      },
      formTraits: [
        { match: '酪蛋白', liver: 0, saturable: false, note: '消化较慢，适合加餐或夜间；牛奶过敏者禁用。' }
      ]
    },

    glucosamine: {
      organ: '关节软骨 / 肝（部分代谢）',
      kidney: '肾功能不全无需常规调整',
      flags: ['pregnancy', 'warfarin'],
      factors: {
        pregnancy: '孕期、哺乳期安全性资料不足。',
        warfarin: '可能增强华法林作用，需监测 INR。'
      },
      formTraits: [
        { match: '氨基葡萄糖', liver: 0, saturable: false, note: '硫酸盐与盐酸盐的临床证据不同；甲壳类来源对贝类过敏者需注意。' }
      ]
    },

    manganese: {
      organ: '肝（胆汁排泄）/ 肾',
      kidney: '肾功能不全时排泄下降，长期高剂量有蓄积风险',
      flags: ['liver', 'kidney'],
      factors: {
        liver: '锰主要经胆汁排泄，肝硬化、胆汁淤积或肠外营养时易蓄积，可致帕金森样症状。',
        kidney: '肾功能不全时排泄下降，长期高剂量有蓄积风险。'
      },
      formTraits: [
        { match: '锰', liver: 2, saturable: false, note: '锰的 safety margin 窄；肝病或胆汁淤积时任何形式都应避免高剂量。' }
      ]
    },

    choline: {
      organ: '肝（胆碱代谢与脂蛋白组装）',
      kidney: '肾功能不全无需常规调整',
      flags: ['liver', 'pregnancy'],
      factors: {
        liver: '胆碱经肝代谢，肝硬化患者高剂量可能加重鱼腥味体味；长期缺乏与脂肪肝相关。',
        pregnancy: '孕期需求上升，但高剂量补充的安全性资料有限。'
      },
      formTraits: [
        { match: '胆碱', liver: 1, saturable: true, note: '酒石酸氢胆碱与 CDP-胆碱形式不同；高剂量易致胃肠不适和体味。' }
      ]
    },

    electrolytes: {
      organ: '肾（钠钾平衡）/ 肾上腺',
      kidney: '肾功能不全时钾排泄下降，补钾可致高钾血症',
      flags: ['kidney', 'diuretic'],
      factors: {
        kidney: '肾功能不全时钾排泄下降，含钾电解质或补钾可致高钾血症，需医生评估。',
        diuretic: '利尿剂可致钠钾流失，但保钾利尿剂合用补钾有高钾风险。'
      },
      formTraits: [
        { match: '电解质', liver: 0, saturable: false, note: '不同产品的钠钾比例差异很大；肾功能不全时任何形式都需计算总钾。' },
        { match: '补液盐', liver: 0, saturable: false, note: 'ORS 的钠葡萄糖比例按腹泻补液设计，不作为日常补钾使用。' }
      ]
    }
  }
};

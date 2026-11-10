/* 补剂自检题库、评分和结果。 */
"use strict";

window.createSupplementQuiz = ({ byId, esc }) => {
  function tierOf(score) {
    return score >= 50 ? '较高' : score >= 25 ? '中等' : '较低';
  }

  var QUIZ = [
    {
      id: 'base', title: '基础信息', en: 'BASELINE',
      questions: [
        {
          id: 'age', short: '年龄', title: '你的年龄',
          type: 'radio', options: [
            { label: '18–29 岁', w: { iron: 1, b9: 1 } },
            { label: '30–49 岁', w: { iron: 1, calcium: 1 } },
            { label: '50–64 岁', w: { calcium: 2, 'vitamin-d': 2, b12: 1, magnesium: 1 } },
            { label: '65 岁以上', w: { calcium: 3, 'vitamin-d': 3, b12: 2, magnesium: 2 } }
          ]
        },
        {
          id: 'sex', short: '性别', title: '生理性别与阶段',
          type: 'radio', options: [
            { label: '男性', w: {} },
            { label: '女性，未绝经', w: { iron: 2 } },
            { label: '女性，已绝经', w: { calcium: 3, 'vitamin-d': 2, magnesium: 1 } },
            { label: '备孕 / 孕期 / 哺乳期', w: { b9: 4, iron: 3, iodine: 3, dha: 3, 'vitamin-d': 1, calcium: 1 }, flag: 'pregnancy' }
          ]
        },
        {
          id: 'sun', short: '日照', title: '每天户外日照时间', hint: '皮肤合成是维生素 D 的主要来源，隔着玻璃晒不算。',
          type: 'radio', options: [
            { label: '每天 ≥ 30 分钟', w: {} },
            { label: '每天 15–30 分钟', w: { 'vitamin-d': 1 } },
            { label: '每天 < 15 分钟', w: { 'vitamin-d': 3 } },
            { label: '几乎不晒 / 严格防晒', w: { 'vitamin-d': 4 } }
          ]
        },
        {
          id: 'skin', short: '肤色', title: '你的肤色深浅', hint: '深肤色需要更长的日照才能合成同样多的维生素 D。',
          type: 'radio', options: [
            { label: '浅色', w: {} },
            { label: '中等', w: { 'vitamin-d': 1 } },
            { label: '较深', w: { 'vitamin-d': 2 } }
          ]
        },
        {
          id: 'bmi', short: '体重', title: '体重状况（BMI）', hint: '脂肪组织会降低维生素 D 的生物利用度；体重过低则整体摄入不足的风险更高。不知道自己的 BMI，可选最后一项按身高体重计算。',
          type: 'radio', options: [
            { label: '正常（BMI 18.5–23.9）', w: {} },
            { label: '超重（BMI 24–27.9）', w: { 'vitamin-d': 1 } },
            { label: '肥胖（BMI ≥ 28）', w: { 'vitamin-d': 2 } },
            { label: '偏瘦（BMI < 18.5）', w: { calcium: 1, iron: 1, b12: 1, zinc: 1 }, flag: 'underweight' },
            { label: '不知道，用身高体重计算', w: {}, calc: 'bmi' }
          ]
        }
      ]
    },
    {
      id: 'diet', title: '饮食习惯', en: 'DIET',
      questions: [
        {
          id: 'dietPattern', short: '饮食模式', title: '你平时的饮食模式',
          type: 'radio', options: [
            { label: '杂食，肉蛋奶都吃', w: {} },
            { label: '蛋奶素', w: { b12: 3, iron: 2, zinc: 2, dha: 2, calcium: 1 } },
            { label: '严格素食', w: { b12: 4, iron: 2, zinc: 2, dha: 3, calcium: 2, iodine: 2 }, flag: 'vegan' },
            { label: '鱼素，吃鱼不吃肉', w: { iron: 1, zinc: 1, b12: 1 } },
            { label: '低碳高蛋白', w: { magnesium: 1, potassium: 1, 'vitamin-c': 1 } }
          ]
        },
        {
          id: 'dairy', short: '奶制品', title: '奶制品的摄入频率', hint: '1 份 ≈ 250 ml 牛奶 / 150 g 酸奶 / 30 g 奶酪。牛奶、酸奶、奶酪是钙、B2 和 B12 的主要来源。',
          type: 'radio', options: [
            { label: '每天 ≥1 份', w: {} },
            { label: '每周 3–6 次', w: { calcium: 2, b2: 1, b12: 1, 'vitamin-d': 1 } },
            { label: '很少或不吃', w: { calcium: 4, b2: 2, b12: 2, 'vitamin-d': 1 } }
          ]
        },
        {
          id: 'fish', short: '鱼类', title: '鱼和海鲜的摄入频率', hint: '按每次 100–150 g 熟重估算。EPA、DHA、维生素 D 和碘主要来自海产品。',
          type: 'radio', options: [
            { label: '每周 ≥2 次，每次 100–150 g', w: {} },
            { label: '每周 1 次，约 100 g', w: { dha: 2, epa: 2, 'vitamin-d': 1, iodine: 1 } },
            { label: '很少吃鱼（每月 <2 次）', w: { dha: 3, epa: 3, 'vitamin-d': 2, iodine: 2, selenium: 1 } }
          ]
        },
        {
          id: 'redMeat', short: '红肉', title: '红肉（猪、牛、羊）的摄入频率', hint: '按每次约 100 g 熟重估算。血红素铁、锌和 B12 的主要来源。',
          type: 'radio', options: [
            { label: '每周 ≥3 次', w: {} },
            { label: '每周 1–2 次', w: { iron: 1, zinc: 1, b12: 1 } },
            { label: '很少或不吃', w: { iron: 3, zinc: 2, b12: 2, 'vitamin-a': 1, copper: 1 } }
          ]
        },
        {
          id: 'greens', short: '深绿色蔬菜', title: '深绿色蔬菜的摄入频率', hint: '1 份 ≈ 100 g 熟重。菠菜、油菜、西兰花提供叶酸、维生素 K 和镁。',
          type: 'radio', options: [
            { label: '每天 ≥1 份', w: {} },
            { label: '每周 3–6 次', w: { b9: 2, 'vitamin-k': 2, magnesium: 1, b2: 1 } },
            { label: '很少（每周 <3 次）', w: { b9: 3, 'vitamin-k': 3, magnesium: 2, b2: 1 } }
          ]
        },
        {
          id: 'grains', short: '全谷物', title: '全谷物和杂粮的摄入频率', hint: '1 份 ≈ 50 g 干重。B1、B3 和镁主要来自全谷物，精白米面在加工中损失较多。',
          type: 'radio', options: [
            { label: '每天 ≥1 份', w: {} },
            { label: '每周 3–6 次', w: { b1: 1, b3: 1, magnesium: 1 } },
            { label: '很少，主要吃精白米面', w: { b1: 3, b3: 2, magnesium: 2, potassium: 1 } }
          ]
        },
        {
          id: 'nuts', short: '坚果种子', title: '坚果和种子的摄入频率', hint: '1 小把 ≈ 25–30 g。维生素 E、镁、硒和铜的密集来源。',
          type: 'radio', options: [
            { label: '每天一小把', w: {} },
            { label: '每周 3–6 次', w: { 'vitamin-e': 1, magnesium: 1, zinc: 1, selenium: 1 } },
            { label: '很少（每周 <3 次）', w: { 'vitamin-e': 2, magnesium: 2, zinc: 1, selenium: 2, copper: 1 } }
          ]
        },
        {
          id: 'seaweed', short: '海藻', title: '海带、紫菜等海藻的摄入频率', hint: '按每次 5–10 g 干重估算。',
          type: 'radio', options: [
            { label: '经常（每周 ≥2 次）', w: {}, flag: 'iodine-excess' },
            { label: '偶尔（每周 1 次左右）', w: {} },
            { label: '从不', w: { iodine: 2 } }
          ]
        },
        {
          id: 'fruit', short: '水果', title: '水果的摄入频率', hint: '1 份 ≈ 100 g。维生素 C 的主要来源，也提供钾和叶酸。',
          type: 'radio', options: [
            { label: '每天 ≥2 份', w: {} },
            { label: '每天 1 份', w: { 'vitamin-c': 1 } },
            { label: '很少（每周 <3 次）', w: { 'vitamin-c': 3 } }
          ]
        },
        {
          id: 'processed', short: '加工食品', title: '外卖与加工食品的摄入频率', hint: '高盐、高精制碳水、低纤维的饮食会拉低镁、钾和 B 族的摄入。',
          type: 'radio', options: [
            { label: '经常（每天 ≥1 次）', w: { potassium: 1, magnesium: 1, b1: 1, 'vitamin-c': 1 } },
            { label: '一般（每周 3–6 次）', w: {} },
            { label: '很少（每周 <3 次）', w: {} }
          ]
        }
      ]
    },
    {
      id: 'life', title: '生活习惯', en: 'LIFESTYLE',
      questions: [
        {
          id: 'alcohol', short: '饮酒', title: '饮酒频率', hint: '酒精会增加 B1、叶酸、镁和锌的消耗，也伤肝。',
          type: 'radio', options: [
            { label: '不喝', w: {} },
            { label: '偶尔', w: { b1: 1, b9: 1 } },
            { label: '每周 ≥ 3 次', w: { b1: 3, b9: 2, magnesium: 1, zinc: 1 } },
            { label: '每天', w: { b1: 4, b9: 3, magnesium: 2, zinc: 1, 'vitamin-a': 1 }, flag: 'alcohol' }
          ]
        },
        {
          id: 'coffee', short: '浓茶咖啡', title: '是否常在吃饭时喝浓茶或咖啡', hint: '单宁和多酚会抑制铁、锌的吸收。',
          type: 'radio', options: [
            { label: '是，随餐喝', w: { iron: 2, zinc: 1 } },
            { label: '不这样', w: {} }
          ]
        },
        {
          id: 'smoking', short: '吸烟', title: '是否吸烟', hint: '吸烟增加氧化应激，维生素 C 的消耗上升。',
          type: 'radio', options: [
            { label: '吸烟', w: { 'vitamin-c': 2, 'vitamin-e': 1, 'vitamin-d': 1 } },
            { label: '不吸烟', w: {} }
          ]
        },
        {
          id: 'exercise', short: '运动', title: '运动量', hint: '高强度运动大量出汗会增加镁、钾和铁的流失。',
          type: 'radio', options: [
            { label: '高强度，每周 ≥ 5 次', w: { magnesium: 2, iron: 1, potassium: 1 } },
            { label: '中等强度，每周 3–4 次', w: {} },
            { label: '久坐少动', w: { 'vitamin-d': 1, calcium: 1 } }
          ]
        },
        {
          id: 'foodSecurity', short: '食物保障', title: '过去 12 个月是否因为经济原因吃不饱或减少进食？',
          type: 'radio', options: [
            { label: '没有', w: {} },
            { label: '偶尔', w: { iron: 1, b12: 1, zinc: 1, calcium: 1, 'vitamin-c': 1, b9: 1, magnesium: 1 } },
            { label: '经常', w: { iron: 2, b12: 2, zinc: 2, calcium: 2, 'vitamin-c': 2, b9: 2, magnesium: 2 }, flag: 'food-insecure' }
          ]
        },
        {
          id: 'bloodLoss', short: '失血', title: '是否存在额外失血', hint: '月经量多、近 12 个月献血或消化道出血会增加铁需求。',
          type: 'radio', options: [
            { label: '没有', w: {} },
            { label: '月经量多', w: { iron: 2 } },
            { label: '近 12 个月献过血', w: { iron: 2 } },
            { label: '两者都有', w: { iron: 3 } }
          ]
        }
      ]
    },
    {
      id: 'medical', title: '健康与用药', en: 'MEDICAL',
      questions: [
        {
          id: 'gi', short: '胃肠与用药', title: '胃肠疾病或长期用药（可多选）', hint: '胃酸、肠道吸收和药物相互作用都会影响营养状态；可以多选。',
          type: 'checkbox', options: [
            { label: '无', w: {}, exclusive: true },
            { label: '长期服用 PPI（奥美拉唑等）', w: { b12: 2, magnesium: 2, iron: 1, calcium: 1 }, flag: 'ppi' },
            { label: '长期服用二甲双胍', w: { b12: 3 } },
            { label: '长期服用利尿剂', w: { potassium: 1, magnesium: 1 }, flag: 'diuretic' },
            { label: '长期服用抗凝药（华法林等）', w: {}, flag: 'anticoag' },
            { label: '做过减重手术', w: { b12: 3, iron: 2, 'vitamin-d': 2, zinc: 1, calcium: 2 } },
            { label: '炎症性肠病或慢性腹泻', w: { iron: 2, b12: 2, 'vitamin-d': 2, zinc: 1, magnesium: 1 } }
          ]
        },
        {
          id: 'liver', short: '肝脏', title: '肝脏健康状况', hint: '肝脏是 B 族转化、维生素 D 活化和铁储存的核心器官。',
          type: 'radio', options: [
            { label: '无已知问题', w: {} },
            { label: '脂肪肝', w: { b1: 1, b12: 1, b9: 1, magnesium: 1, 'vitamin-e': 1 } },
            { label: '慢性肝病 / 肝硬化', w: { b1: 2, b6: 1, b12: 2, b9: 2, magnesium: 2, zinc: 2, 'vitamin-a': 1, 'vitamin-d': 1 }, flag: 'liver' }
          ]
        },
        {
          id: 'conditions', short: '慢性病', title: '是否有以下慢性病（可多选）', hint: '肾病、甲状腺疾病会改变矿物质与碘的处理方式。',
          type: 'checkbox', options: [
            { label: '无', w: {}, exclusive: true },
            { label: '慢性肾病', w: { iron: 1, 'vitamin-d': 1 }, flag: 'kidney' },
            { label: '甲状腺疾病', w: { iodine: 1, selenium: 1 }, flag: 'thyroid' },
            { label: '骨质疏松 / 骨密度偏低', w: { calcium: 2, 'vitamin-d': 2, 'vitamin-k': 1 } }
          ]
        },
        {
          id: 'supplements', short: '补充剂', title: '你正在服用哪些补充剂（可多选）',
          type: 'checkbox', options: [
            { label: '复合维生素 / 矿物质', w: { b1: -1, b2: -1, b3: -1, b5: -1, b6: -1, b7: -1, b9: -1, b12: -1, 'vitamin-c': -1, 'vitamin-e': -1, 'vitamin-a': -1, copper: -1, zinc: -1, selenium: -1, magnesium: -1 }, flag: 'multi' },
            { label: '维生素 D', w: { 'vitamin-d': -4 } },
            { label: '钙', w: { calcium: -3 } },
            { label: '铁', w: { iron: -2 }, flag: 'supp-iron' },
            { label: '鱼油 / ω-3', w: { epa: -3, dha: -3 } },
            { label: '维生素 B12', w: { b12: -3 } },
            { label: '没有补充', w: {}, exclusive: true }
          ]
        },
        {
          id: 'symptoms', short: '症状', title: '最近是否有以下表现（可多选）',
          type: 'checkbox', options: [
            { label: '疲劳、乏力', w: { iron: 2, b12: 2, 'vitamin-d': 1, magnesium: 1 } },
            { label: '口腔溃疡 / 舌炎', w: { b2: 2, b6: 1, b12: 1, b9: 1, iron: 1 } },
            { label: '脱发', w: { zinc: 2, iron: 1, b7: 1, selenium: 1 } },
            { label: '肌肉抽筋', w: { magnesium: 3, calcium: 1, potassium: 1 } },
            { label: '夜视下降', w: { 'vitamin-a': 3 } },
            { label: '容易淤青', w: { 'vitamin-c': 2, 'vitamin-k': 1 } },
            { label: '伤口愈合慢', w: { 'vitamin-c': 2, zinc: 2 } },
            { label: '手脚麻木', w: { b12: 3, b6: 1, copper: 1 } },
            { label: '心悸', w: { iron: 1, b12: 1, magnesium: 1, potassium: 1 } },
            { label: '情绪低落', w: { 'vitamin-d': 1, b12: 1, dha: 1 } },
            { label: '皮肤干燥 / 皮疹', w: { 'vitamin-a': 1, b2: 1, zinc: 1, b7: 1, gla: 1 } },
            { label: '以上都没有', w: {}, exclusive: true }
          ]
        },
        {
          id: 'labs', short: '化验', title: '已有化验结果（可多选）',
          type: 'checkbox', options: [
            { label: '贫血', w: { iron: 3, b12: 2, b9: 2, copper: 1 } },
            { label: '铁蛋白偏低', w: { iron: 4 } },
            { label: '同型半胱氨酸偏高', w: { b12: 3, b9: 3, b6: 2 } },
            { label: '血脂偏高', w: { epa: 2, dha: 2, b3: 1 } },
            { label: '血糖偏高', w: { chromium: 1, magnesium: 1, 'vitamin-d': 1 } },
            { label: '骨密度偏低', w: { calcium: 3, 'vitamin-d': 3, 'vitamin-k': 1, magnesium: 1 } },
            { label: '甲状腺功能异常', w: { iodine: 2, selenium: 1 } },
            { label: '没有 / 不清楚', w: {}, exclusive: true }
          ]
        }
      ]
    }
  ];

  var TOTAL_Q = QUIZ.reduce(function (s, g) { return s + g.questions.length; }, 0);
  var Q_NUM = (function () {
    var map = {};
    var n = 0;
    QUIZ.forEach(function (g) {
      g.questions.forEach(function (q) {
        n++;
        map[q.id] = String(n).padStart(2, '0');
      });
    });
    return map;
  })();

  /* 每个问题回答的性质：化验/症状才算“缺乏线索”，饮食与状态只算“摄入风险” */
  var Q_KIND = {
    age: 'state', sex: 'state', sun: 'diet', skin: 'state', bmi: 'state',
    dietPattern: 'diet', dairy: 'diet', fish: 'diet', redMeat: 'diet',
    greens: 'diet', grains: 'diet', nuts: 'diet', seaweed: 'diet',
    fruit: 'diet', processed: 'diet',
    alcohol: 'state', coffee: 'diet', smoking: 'state', exercise: 'state',
    foodSecurity: 'state', bloodLoss: 'state',
    gi: 'medical', liver: 'medical', conditions: 'medical', supplements: 'supp',
    symptoms: 'symptom', labs: 'lab'
  };
  var KIND_LABEL = { lab: '化验', symptom: '症状', medical: '病史', state: '状态', diet: '饮食', supp: '补充', other: '其他' };
  var KIND_ORDER = { lab: 0, symptom: 1, medical: 2, state: 3, diet: 4, supp: 5, other: 6 };

  var FLAGS = {
    pregnancy: { title: '孕期 / 哺乳期', text: '叶酸、铁、碘、DHA 需求上升。优先食物与医生确认的补充方案，避免自行叠加高剂量维生素 A。' },
    vegan: { title: '严格素食', text: '维生素 B12 必须补充；铁、锌、钙、DHA、碘需要主动规划，并定期检测。' },
    'iodine-excess': { title: '碘摄入可能偏高', text: '海带、紫菜含碘量极高。频繁食用时不要再补碘，甲状腺疾病患者需咨询医生。' },
    alcohol: { title: '长期饮酒', text: 'B1、叶酸、镁、锌消耗增加；B 族形式需按具体成分判断，不能一概换成活性形式。' },
    ppi: { title: '长期使用 PPI', text: '胃酸减少会降低 B12、镁、钙、铁的吸收，建议定期复查。' },
    liver: { title: '慢性肝病', text: 'B 族需求可能上升，但形式选择要看具体成分；避免大剂量维生素 A；镁、锌、维生素 D 需监测。' },
    underweight: { title: '体重偏低', text: '整体能量与蛋白质不足时，多种微量营养素都可能不够。先评估总摄入，不要只补单项。' },
    'food-insecure': { title: '食物不安全', text: '这不是“缺哪一种”的问题，而是整体饮食不足。优先保证能量、蛋白质和基本食物多样性，必要时寻求营养援助。' },
    diuretic: { title: '长期使用利尿剂', text: '可能增加钾、镁流失。补钾必须由医生评估，肾功能不全者尤其危险。' },
    anticoag: { title: '长期使用抗凝药', text: '维生素 K 摄入应保持稳定，不要自行大剂量补 K；开始或停用前咨询医生。' },
    kidney: { title: '慢性肾病', text: '钾、镁、磷的补充必须由医生评估；不要自行补钾或使用高剂量镁。' },
    thyroid: { title: '甲状腺疾病', text: '不要自行补碘；硒和碘的剂量需结合甲功与医生意见。' },
    multi: { title: '已服复合维生素', text: '复合配方通常含维生素 A、铁、锌、硒。不要再叠加单方高剂量，先看标签上的元素量与 UL。' },
    'supp-iron': { title: '正在补铁', text: '未确诊缺铁不要长期补。成年男性与绝经后女性每日超过 42 mg 需医生评估，血色病携带者尤其要避免。' }
  };

  var CONDITIONAL = {
    iron: '铁：未确诊缺铁不要长期补。成年男性与绝经后女性每日超过 42 mg 需医生评估，血色病携带者尤其要避免。',
    'vitamin-a': '维生素 A：孕期高剂量视黄醇有致畸风险，优先 β-胡萝卜素或遵医嘱；肝病患者也需要控制剂量。',
    selenium: '硒：安全窗口窄。巴西坚果 1–2 颗就可能接近每日需要量，长期超过 400 µg 有脱发、指甲变形风险。',
    iodine: '碘：海带、紫菜一次就可能超过每日需要量。甲状腺疾病患者不要自行补碘。',
    potassium: '钾：肾功能不全、服用 ACEI/ARB 或螺内酯者，补钾可能致命，必须由医生评估。',
    b6: '维生素 B6：长期每天超过 100 mg 可致周围神经病变，表现为手脚麻木。',
    b7: '生物素：高剂量会干扰甲状腺功能和肌钙蛋白化验，抽血前 2–3 天应停用。'
  };

  /* ---------------- quiz engine ---------------- */
  var STORE_KEY = 'supplement-quiz-v1';
  var lastRisks = [];
  var lastAnswers = {};
  var resultsShown = false;
  var reviewingMissing = false;

  function bmiFromAnswers(answers) {
    var h = Number(answers.bmiHeight);
    var w = Number(answers.bmiWeight);
    if (!isFinite(h) || !isFinite(w)) return null;
    if (h < 100 || h > 250 || w < 25 || w > 300) return null;
    var value = Math.round(w / Math.pow(h / 100, 2) * 10) / 10;
    if (value < 18.5) {
      return { value: value, label: '偏瘦', range: '< 18.5', w: { calcium: 1, iron: 1, b12: 1, zinc: 1 }, flag: 'underweight' };
    }
    if (value < 24) return { value: value, label: '正常', range: '18.5–23.9', w: {} };
    if (value < 28) return { value: value, label: '超重', range: '24–27.9', w: { 'vitamin-d': 1 } };
    return { value: value, label: '肥胖', range: '≥ 28', w: { 'vitamin-d': 2 } };
  }

  function bmiCalcHtml() {
    return '<div class="bmi-calc" id="bmi-calc" hidden>' +
      '<div class="bmi-calc-head">不知道自己的 BMI？填身高和体重，自动算出结果并计入下方评估。</div>' +
      '<div class="bmi-fields">' +
        '<label class="bmi-field"><span>身高</span><input type="number" name="bmiHeight" inputmode="decimal" min="100" max="250" step="0.1" placeholder="170"><i>cm</i></label>' +
        '<label class="bmi-field"><span>体重</span><input type="number" name="bmiWeight" inputmode="decimal" min="25" max="300" step="0.1" placeholder="65"><i>kg</i></label>' +
      '</div>' +
      '<div class="bmi-out" id="bmi-out" aria-live="polite">输入后立即显示 BMI 与分档。</div>' +
    '</div>';
  }

  function bmiQuestion() {
    for (var i = 0; i < QUIZ.length; i++) {
      for (var j = 0; j < QUIZ[i].questions.length; j++) {
        if (QUIZ[i].questions[j].id === 'bmi') return QUIZ[i].questions[j];
      }
    }
    return null;
  }

  function updateBmiPanel(answers) {
    var panel = document.getElementById('bmi-calc');
    if (!panel) return;
    var q = bmiQuestion();
    var picked = q && answers.bmi !== undefined ? q.options[answers.bmi] : null;
    var on = !!(picked && picked.calc === 'bmi');
    panel.hidden = !on;
    if (!on) return;
    var out = document.getElementById('bmi-out');
    if (!out) return;
    var r = bmiFromAnswers(answers);
    if (!r) {
      out.textContent = '输入后立即显示 BMI 与分档。';
      out.className = 'bmi-out';
      return;
    }
    out.innerHTML = '你的 BMI：<b>' + r.value.toFixed(1) + '</b>　分档：<b>' + esc(r.label) + '</b>（' + esc(r.range) + '），已计入评估。';
    out.className = 'bmi-out is-ready';
  }

  function quizPage() {
    var groupsHtml = QUIZ.map(function (g, gi) {
      var qs = g.questions.map(function (q, qi) {
        var num = Q_NUM[q.id] || '';
        var opts = q.options.map(function (o, oi) {
          var inputType = q.type === 'checkbox' ? 'checkbox' : 'radio';
          var extra = o.exclusive ? ' data-exclusive="1"' : '';
          return '<label class="opt">' +
            '<input type="' + inputType + '" name="' + q.id + '" value="' + oi + '"' + extra + '>' +
            '<span class="opt-body"><span class="opt-box" aria-hidden="true"></span><span>' + esc(o.label) + '</span></span>' +
          '</label>';
        }).join('');

        return '<div class="q" id="q-' + q.id + '">' +
          '<div class="q-title" id="qlabel-' + q.id + '"><span class="q-num">' + num + '</span><span>' + esc(q.title) + '</span></div>' +
          (q.hint ? '<p class="q-hint">' + esc(q.hint) + '</p>' : '') +
          '<div class="options' + (q.type === 'radio' && q.options.length <= 2 ? ' one-col' : '') + '" role="group" aria-labelledby="qlabel-' + q.id + '">' + opts + '</div>' +
          (q.id === 'bmi' ? bmiCalcHtml() : '') +
        '</div>';
      }).join('');

      return '<div class="quiz-group">' +
        '<div class="quiz-group-head"><h2>' + esc(g.title) + '</h2><span>' + esc(g.en) + '</span></div>' +
        qs +
      '</div>';
    }).join('');

    return '<div class="reading original-quiz">' +
      '<div class="page-head">' +
        '<h1>补剂自检</h1>' +
      '</div>' +
      '<div class="quiz-layout">' +
        '<div class="quiz-main">' +
          '<div class="quiz-progress" id="q-progress">' +
            '<div class="progress-meta"><span>已答 <b id="q-answered">0</b> / ' + TOTAL_Q + ' 题</span>' +
              '<button class="text-button" type="button" id="q-continue" hidden>继续填写</button></div>' +
            '<div class="progress-track" aria-hidden="true"><div class="progress-bar" id="q-progress-bar"></div></div>' +
          '</div>' +
          '<form id="quiz-form" autocomplete="off">' + groupsHtml + '</form>' +
          '<div class="quiz-submit">' +
            '<p class="quiz-submit-hint" id="q-submit-hint" role="status" tabindex="-1"></p>' +
            '<div class="quiz-submit-actions">' +
              '<button class="text-button" type="button" id="q-missing-jump" hidden></button>' +
              '<button class="btn btn-primary" type="button" id="q-submit">查看评估结果</button>' +
              '<button class="btn btn-quiet" type="button" id="q-reset">重新填写</button>' +
            '</div>' +
          '</div>' +
          '<div class="results" id="quiz-results"></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function bindQuiz() {
    var form = document.getElementById('quiz-form');
    if (!form) return;
    resultsShown = false;
    reviewingMissing = false;

    var saved = loadAnswers();
    if (saved) restoreAnswers(saved);

    form.addEventListener('change', function (e) {
      var inp = e.target;
      if (!inp || !inp.name) return;
      if (inp.type === 'checkbox') {
        var group = inp.closest('.options');
        if (group) {
          if (inp.checked && inp.getAttribute('data-exclusive')) {
            group.querySelectorAll('input[type="checkbox"]').forEach(function (o) {
              if (o !== inp) o.checked = false;
            });
          } else if (inp.checked) {
            var ex = group.querySelector('input[data-exclusive]');
            if (ex) ex.checked = false;
          }
        }
      }
      updateQuizProgress();
    });

    form.addEventListener('input', function (e) {
      var inp = e.target;
      if (!inp || (inp.name !== 'bmiHeight' && inp.name !== 'bmiWeight')) return;
      updateQuizProgress();
    });

    var submitBtn = document.getElementById('q-submit');
    submitBtn.addEventListener('click', submitQuiz);
    function jumpToMissing() {
      var first = missingQuestions(collectAnswers())[0];
      if (first) focusQuestion(first.id);
      else submitBtn.focus();
    }
    document.getElementById('q-continue').addEventListener('click', jumpToMissing);
    document.getElementById('q-missing-jump').addEventListener('click', jumpToMissing);

    var resetBtn = document.getElementById('q-reset');
    if (resetBtn) resetBtn.addEventListener('click', function () {
      try { localStorage.removeItem(STORE_KEY); } catch (err) {}
      form.querySelectorAll('input').forEach(function (i) {
        i.checked = false;
        if (i.type === 'number') i.value = '';
      });
      if (reviewingMissing) showMissingQuestions([]);
      reviewingMissing = false;
      var resultsEl = document.getElementById('quiz-results');
      if (resultsEl) resultsEl.innerHTML = '';
      resultsShown = false;
      updateQuizProgress();
      document.getElementById('app').focus({ preventScroll: true });
      window.scrollTo(0, 0);
    });

    updateQuizProgress();
  }

  function loadAnswers() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function restoreAnswers(saved) {
    Object.keys(saved).forEach(function (qid) {
      var val = saved[qid];
      if (val === undefined || val === null) return;
      if (qid === 'bmiHeight' || qid === 'bmiWeight') {
        var num = document.querySelector('#quiz-form input[name="' + qid + '"]');
        if (num && isFinite(Number(val))) num.value = Number(val);
        return;
      }
      if (Array.isArray(val)) {
        val.forEach(function (i) {
          var el = document.querySelector('#quiz-form input[name="' + qid + '"][value="' + i + '"]');
          if (el) el.checked = true;
        });
      } else {
        var el = document.querySelector('#quiz-form input[name="' + qid + '"][value="' + val + '"]');
        if (el) el.checked = true;
      }
    });
  }

  function collectAnswers() {
    var answers = {};
    document.querySelectorAll('#quiz-form input[type="radio"]:checked').forEach(function (inp) {
      answers[inp.name] = Number(inp.value);
    });
    document.querySelectorAll('#quiz-form input[type="checkbox"]:checked').forEach(function (inp) {
      if (!answers[inp.name]) answers[inp.name] = [];
      answers[inp.name].push(Number(inp.value));
    });
    document.querySelectorAll('#quiz-form input[type="number"]').forEach(function (inp) {
      var v = parseFloat(inp.value);
      if (inp.name && isFinite(v) && v > 0) answers[inp.name] = v;
    });
    return answers;
  }

  function saveAnswers(a) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(a)); } catch (e) {}
  }

  function computeRisks(answers) {
    var raw = {};
    var lab = {};
    var symptom = {};
    var reasons = {};
    var flags = [];

    QUIZ.forEach(function (g) {
      g.questions.forEach(function (q) {
        var a = answers[q.id];
        if (a === undefined || a === null) return;
        var chosen = [];
        if (Array.isArray(a)) {
          a.forEach(function (i) { if (q.options[i]) chosen.push(q.options[i]); });
        } else if (q.options[a]) {
          var picked = q.options[a];
          if (picked.calc === 'bmi') {
            var calc = bmiFromAnswers(answers);
            if (calc) {
              chosen.push({
                label: 'BMI ' + calc.value.toFixed(1) + '（' + calc.label + '）',
                w: calc.w,
                flag: calc.flag
              });
            }
          } else {
            chosen.push(picked);
          }
        }

        var kind = Q_KIND[q.id] || 'other';
        chosen.forEach(function (opt) {
          var w = opt.w || {};
          Object.keys(w).forEach(function (id) {
            raw[id] = (raw[id] || 0) + w[id];
            if (!reasons[id]) reasons[id] = [];
            reasons[id].push({ label: q.short + '：' + opt.label, pts: w[id], kind: kind });
            if (kind === 'lab') lab[id] = (lab[id] || 0) + w[id];
            else if (kind === 'symptom') symptom[id] = (symptom[id] || 0) + w[id];
          });
          if (opt.flag && flags.indexOf(opt.flag) < 0) flags.push(opt.flag);
        });
      });
    });

    var risks = Object.keys(raw).map(function (id) {
      var n = byId.get(id);
      if (!n) return null;
      var score = Math.max(0, Math.min(100, Math.round(raw[id] * 9)));
      var rs = (reasons[id] || []).slice().sort(function (x, y) {
        return (KIND_ORDER[x.kind] || 9) - (KIND_ORDER[y.kind] || 9) || y.pts - x.pts;
      });
      var seen = {};
      var uniq = [];
      rs.forEach(function (r) {
        if (seen[r.label]) return;
        seen[r.label] = 1;
        uniq.push(r);
      });
      var item = {
        n: n, raw: raw[id], score: score, tier: tierOf(score),
        reasons: uniq, lab: lab[id] || 0, symptom: symptom[id] || 0
      };
      item.verdict = verdictOf(item);
      return item;
    }).filter(Boolean);

    risks.sort(function (a, b) {
      return b.score - a.score || b.raw - a.raw || a.n.name.localeCompare(b.n.name, 'zh');
    });

    return { risks: risks, flags: flags, answered: countAnswered(answers) };
  }

  function verdictOf(r) {
    if (r.lab > 0) return { key: 'lab', label: '缺乏可能性较高', tone: 'clinical', action: '就医确认' };
    if (r.symptom > 0) return { key: 'symptom', label: '缺乏可能性较高', tone: 'clinical', action: '建议检查' };
    if (r.raw >= 3) return { key: 'risk', label: '缺乏可能性中等', tone: 'risk', action: '先改饮食' };
    if (r.raw === 2) return { key: 'risk-low', label: '缺乏可能性较低', tone: 'low', action: '调整饮食' };
    return { key: 'low', label: '缺乏可能性较低', tone: 'low', action: '暂不处理' };
  }

  function countAnswered(answers) {
    var c = 0;
    QUIZ.forEach(function (g) {
      g.questions.forEach(function (q) {
        var a = answers[q.id];
        if (Array.isArray(a)) { if (a.length) c++; }
        else if (a !== undefined && a !== null) {
          if (q.options[a] && q.options[a].calc === 'bmi' && !bmiFromAnswers(answers)) return;
          c++;
        }
      });
    });
    return c;
  }

  function missingQuestions(answers) {
    var missing = [];
    QUIZ.forEach(function (g, gi) {
      g.questions.forEach(function (q, qi) {
        var a = answers[q.id];
        var answered = false;
        if (Array.isArray(a)) answered = a.length > 0;
        else if (a !== undefined && a !== null) {
          if (q.options[a] && q.options[a].calc === 'bmi' && !bmiFromAnswers(answers)) answered = false;
          else answered = true;
        }
        if (!answered) {
          missing.push({
            num: Q_NUM[q.id] || '',
            id: q.id,
            title: q.title
          });
        }
      });
    });
    return missing;
  }

  function setSubmitHint(text, warn) {
    var el = document.getElementById('q-submit-hint');
    if (!el) return;
    if (el.textContent !== text) el.textContent = text;
    el.classList.toggle('is-warn', warn);
  }

  function showMissingQuestions(missing) {
    var ids = new Set(missing.map(function (question) { return 'q-' + question.id; }));
    document.querySelectorAll('#quiz-form .q').forEach(function (question) {
      question.classList.toggle('q-missing', ids.has(question.id));
    });
    var jump = document.getElementById('q-missing-jump');
    jump.hidden = !missing.length;
    jump.textContent = missing.length ? '去答第 ' + missing[0].num + ' 题' : '';
    var numbers = missing.map(function (question) { return question.num; }).join('、');
    setSubmitHint(numbers ? '第 ' + numbers + ' 题未答。' : '', Boolean(numbers));
  }

  function updateQuizProgress() {
    var answers = collectAnswers();
    saveAnswers(answers);
    updateBmiPanel(answers);

    var answered = countAnswered(answers);
    var bar = document.getElementById('q-progress-bar');
    bar.style.width = Math.round(answered / TOTAL_Q * 100) + '%';
    document.getElementById('q-answered').textContent = answered;
    var resume = document.getElementById('q-continue');
    resume.hidden = answered === 0;
    resume.textContent = answered === TOTAL_Q ? '跳到提交' : '继续填写';

    if (reviewingMissing) {
      var missing = missingQuestions(answers);
      showMissingQuestions(missing);
      reviewingMissing = missing.length > 0;
      return;
    }

    if (resultsShown) {
      var resultsEl = document.getElementById('quiz-results');
      if (resultsEl) resultsEl.innerHTML = '';
      resultsShown = false;
      setSubmitHint('答案已修改。重新查看结果。', true);
      return;
    }

    setSubmitHint(answered === TOTAL_Q ? '' : '还有 ' + (TOTAL_Q - answered) + ' 题未答。', false);
  }

  function focusQuestion(id) {
    var question = document.getElementById('q-' + id);
    var fields = Array.from(question.querySelectorAll('.bmi-calc:not([hidden]) input'));
    var input = fields.find(function (field) {
      return !field.value || field.validity.rangeUnderflow || field.validity.rangeOverflow;
    }) || question.querySelector('input');
    input.focus({ preventScroll: true });
    question.scrollIntoView({ block: 'center' });
  }

  function submitQuiz() {
    var answers = collectAnswers();
    var missing = missingQuestions(answers);

    if (missing.length) {
      reviewingMissing = true;
      showMissingQuestions(missing);
      document.getElementById('q-submit-hint').focus();
      return;
    }

    reviewingMissing = false;
    showMissingQuestions([]);
    saveAnswers(answers);
    var computed = computeRisks(answers);
    lastAnswers = answers;
    lastRisks = computed.risks;
    lastFlags = computed.flags;
    resultsShown = true;
    renderResults();
    var el = document.getElementById('quiz-results');
    if (el) {
      el.tabIndex = -1;
      el.focus({ preventScroll: true });
      el.scrollIntoView({ block: 'start' });
    }
  }

  var LAB_TEST_KEY = {
    '铁蛋白': '铁蛋白',
    '贫血': '血常规',
    '同型半胱氨酸': '同型半胱氨酸',
    '血脂': '血脂',
    '骨密度': '骨密度',
    '甲状腺': '甲状腺',
    '血糖': '血糖'
  };

  function pickTests(r) {
    var tests = r.n.tests || [];
    if (!tests.length) return [];
    var lab = r.reasons.filter(function (x) { return x.kind === 'lab'; })[0];
    if (lab) {
      var keys = Object.keys(LAB_TEST_KEY);
      for (var i = 0; i < keys.length; i++) {
        if (lab.label.indexOf(keys[i]) >= 0) {
          var kw = LAB_TEST_KEY[keys[i]];
          var hit = tests.filter(function (t) { return t.name.indexOf(kw) >= 0; })[0];
          if (hit) {
            return [hit].concat(tests.filter(function (t) { return t !== hit; }));
          }
        }
      }
    }
    return tests;
  }

  function resultRowHtml(r) {
    var v = r.verdict;
    var why = r.reasons.slice(0, 4).map(function (x) {
      var kind = KIND_LABEL[x.kind] || '其他';
      var prefix = kind + '：';
      var label = x.label.startsWith(prefix) ? x.label.slice(prefix.length) : x.label;
      return '<span class="why-item"><span class="why-kind">' + kind + '</span><span>' + esc(label) + '</span></span>';
    }).join('');

    var next = '';
    if (v.tone === 'clinical') {
      var tests = pickTests(r);
      if (tests.length) {
        next = '<b>检测项目</b>' + esc(tests[0].name) +
          (tests[0].sample ? '（' + esc(tests[0].sample) + '）' : '') + '。';
        if (tests.length > 1) next += '其他项目包括' + esc(tests[1].name) + '。';
      }
    }

    var caution = '';
    if (CONDITIONAL[r.n.id]) {
      caution = '<div class="result-caution"><span>剂量提醒</span>' +
        esc(CONDITIONAL[r.n.id].replace(/^[^：]+：/, '')) + '</div>';
    }

    return '<div class="result-row result-tone-' + v.tone + '">' +
      '<div class="result-head">' +
        '<div class="result-name"><a href="#/nutrient/' + r.n.id + '">' + esc(r.n.name) + '</a><small>' + esc(r.n.en) + '</small></div>' +
      '</div>' +
      '<div class="result-why">' + why + '</div>' +
      (next ? '<div class="result-next">' + next + '</div>' : '') +
      caution +
    '</div>';
  }

  function resultGroupHtml(level, title, desc, items) {
    if (!items.length) return '';
    return '<section class="result-group level-' + level + '">' +
      '<div class="result-group-head">' +
        '<h3>' + title + '</h3>' +
        '<span class="rg-count">' + items.length + ' 项</span>' +
        (desc ? '<p>' + desc + '</p>' : '') +
      '</div>' +
      '<div class="result-list">' + items.map(resultRowHtml).join('') + '</div>' +
    '</section>';
  }

  function dietQuality(answers) {
    var items = [
      { label: '水果每天 ≥2 份', ok: answers.fruit === 0, answered: answers.fruit !== undefined },
      { label: '深绿色蔬菜每天 ≥1 份', ok: answers.greens === 0, answered: answers.greens !== undefined },
      { label: '全谷物每天 ≥1 份', ok: answers.grains === 0, answered: answers.grains !== undefined },
      { label: '坚果每天一小把', ok: answers.nuts === 0, answered: answers.nuts !== undefined },
      { label: '鱼每周 ≥2 次', ok: answers.fish === 0, answered: answers.fish !== undefined },
      { label: '加工食品每周 <3 次', ok: answers.processed === 2, answered: answers.processed !== undefined }
    ];
    var done = items.filter(function (x) { return x.answered; });
    var hits = done.filter(function (x) { return x.ok; });
    var misses = done.filter(function (x) { return !x.ok; });
    return { score: hits.length, max: done.length, hits: hits, misses: misses };
  }

  function renderResults() {
    var el = document.getElementById('quiz-results');
    if (!el) return;

    var scored = lastRisks.filter(function (r) { return r.score > 0; });

    if (!scored.length) {
      el.innerHTML = '<h2>评估结果</h2><p>没有发现需要优先关注的缺乏线索。</p>';
      return;
    }

    var clinical = scored.filter(function (r) { return r.verdict.tone === 'clinical'; });
    var clinicalIds = {};
    clinical.forEach(function (r) { clinicalIds[r.n.id] = 1; });
    var risk = scored.filter(function (r) { return r.verdict.tone !== 'clinical' && r.raw >= 3 && !clinicalIds[r.n.id]; });
    var riskIds = {};
    risk.forEach(function (r) { riskIds[r.n.id] = 1; });
    var lowRisk = scored.filter(function (r) {
      return r.verdict.tone !== 'clinical' && r.raw < 3 && !clinicalIds[r.n.id] && !riskIds[r.n.id];
    });

    var summary = '<section class="result-overview" aria-labelledby="q-result-levels">' +
      '<h3 id="q-result-levels">缺乏可能性</h3>' +
      '<div class="result-summary">' +
        '<div class="rs-item level-clinical"><b>' + clinical.length + '</b><span>较高</span></div>' +
        '<div class="rs-item level-risk"><b>' + risk.length + '</b><span>中等</span></div>' +
        '<div class="rs-item level-low"><b>' + lowRisk.length + '</b><span>较低</span></div>' +
      '</div>' +
    '</section>';

    var dq = dietQuality(lastAnswers);
    var dqHtml = '';
    if (dq.max >= 3) {
      var dqLabel = dq.score >= dq.max - 1 ? '较好' : dq.score >= Math.ceil(dq.max / 2) ? '一般' : '偏低';
      var dqDetail = [];
      if (dq.hits.length) dqDetail.push('达标：' + dq.hits.map(function (x) { return x.label; }).join('、'));
      if (dq.misses.length) dqDetail.push('未达标：' + dq.misses.map(function (x) { return x.label; }).join('、'));
      dqHtml = '<div class="diet-quality"><b>饮食质量 ' + dq.score + '/' + dq.max + '</b><span>' + dqLabel + '</span>' +
        '<p>' + dqDetail.join('；') + '。</p></div>';
    }
    var suppIdx = lastAnswers.supplements || [];
    var hasSupp = suppIdx.some(function (i) { return i !== 6; });
    if (hasSupp) {
      dqHtml += '<p class="supp-note">评分已计入你填写的补剂。</p>';
    }

    var clinicalHtml = resultGroupHtml('clinical', '缺乏可能性较高', '', clinical);
    var riskHtml = resultGroupHtml('risk', '缺乏可能性中等', '先调整饮食，3 个月后复评。', risk);

    var faintHtml = '';
    if (lowRisk.length) {
      faintHtml = '<section class="result-group level-low">' +
        '<div class="result-group-head"><h3>缺乏可能性较低</h3><span class="rg-count">' + lowRisk.length + ' 项</span>' +
        '</div>' +
        '<p class="faint-list">' + lowRisk.map(function (r) {
          return '<a href="#/nutrient/' + r.n.id + '">' + esc(r.n.name) + '</a>';
        }).join('<span class="faint-sep">·</span>') + '</p>' +
      '</section>';
    }

    var flagsHtml = '';
    if (lastFlags.length) {
      flagsHtml = lastFlags.map(function (key) {
        var f = FLAGS[key];
        if (!f) return '';
        return '<div class="callout"><span class="callout-label">特别提示</span><strong>' + esc(f.title) + '</strong>　' + esc(f.text) + '</div>';
      }).join('');
    }

    el.innerHTML = '<h2>评估结果</h2>' +
      summary +
      clinicalHtml +
      riskHtml +
      faintHtml +
      flagsHtml +
      (dqHtml ? '<div class="result-diet">' + dqHtml + '</div>' : '');
  }

  /* 当前选择的 flags，需要在 updateQuiz 时同步 */
  var lastFlags = [];

  return { page: quizPage, bind: bindQuiz };
};

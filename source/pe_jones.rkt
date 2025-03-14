#lang racket
(provide pe_jones.html)
(require SMathML)
(define pe_jones.html
  (TnTmPrelude
   #:title "部分求值"
   #:css "styles.css"
   (H1. "部分求值")
   (H2 "前言")
   (P "本书是关于" (Em "部分求值") "的, 这是一种程序优化技术, 也被称为"
      (Em "程序特化") ". 本书呈现了构造各种语言的部分求值器的一般原理, "
      "并给出了例子, 应用, 以及诸多文献参考.")
   (H3 "部分求值")
   (P "众所周知, 一个单参数的函数可由一个二参数的函数通过特化得到, "
      "即将一个输入固定为某个特定的值. 在数学分析里, "
      "这被称为限制或者投影, 而在逻辑学中, 其被称为currying. "
      "然而, 部分求值处理的是" (Em "程序文本") "而非数学函数.")
   (P "一个部分求值器是一个算法, 当其被给定了一个程序和该程序的一些输入数据时, "
      "产生一个所谓的剩余 (residual) 或者说特化的程序. "
      "运行这个剩余的程序于剩下来的输入数据将会产生和运行原本程序于"
      "其所有输入数据相同的结果. [译注: 也就是说, 这个程序具有多个参数, "
      "而部分求值所做的就是固定这个程序的其中一些参数的值, 产生一个等效的新程序.]")
   (P "部分求值理论上的可能性早在多年以前就在递归论中被建立为Kleene的"
      (Q "s-m-n定理") ". 本书关心的是其实际实现和应用.")
   (P "部分求值为程序优化, 编译, 解释, 以及程序生成器的生成带来了新的曙光. "
      "更进一步地说, 其提供了深入编程语言本身性质的洞察.")
   (P "部分求值可以被视为程序变换的一种特殊情形, 但是其不仅注重"
      (Em "完全自动化") "和" (Em "程序生成器")
      "的生成, 也关心单一程序的转换.")
   (H3 "部分求值和编译")
   (P "部分求值提供了一种引入注目的编译和编译器生成的方法. "
      "例如, 一个解释器相对于一个源程序的部分求值将产生一个目标程序. "
      "因此, 编译也可以不用编译器来完成, 而一个目标程序可以被视为一个特化了的解释器.")
   (H3 "编译器生成")
   (P "而且, 只要部分求值器是" (Em "可自应用") "的, 那么"
      (Em "编译器生成") "就是可能的: 特化部分求值器自身于一个固定的解释器"
      "将产生一个编译器. 因此, 一个编译器可以被视为一个特化了的部分求值器: "
      "这个被特化的部分求值器只能是特化了某个特定语言的一个解释器. "
      "[译注: 也就是说, 这样一个编译器是特化了一个特定的解释器得到的.]")
   (P "最后, 特化部分求值器于其自身将产生一个编译器生成器. "
      "因此, 一个编译器生成器也可以被视为一个特化了的部分求值器: "
      "这个被特化的部分求值器只能是特化了其自身.")
   (H3 "其他应用")
   (P "部分求值的应用不局限于编译和编译器生成. 如果一个程序具有多个输入, "
      "而其中一个输入比别的输入变化要慢得多, 那么此程序相对于该输入的特化"
      "将给出一个更快的特化程序. 而且, 特别多的现实程序呈现了解释性的行为. "
      "例如, 它们可能被参数化以配置文件, 诸如此类, "
      "这样的配置文件很少变化, 因此特化是有利可图的.")
   (P "正如以下列表所呈现的那样, (部分求值)潜在的应用范围是相当之大的. "
      "所有这些都已由来自于Copenhagen, MIT, Princeton, Stanford, "
      "INRIA (法国) 和ECRC (德国) 的研究者们在计算机上实现. "
      "并且, 所有这些都已观察到了明显的加速."
      (Ul (Li "模式识别")
          (Li "光线追踪 (计算机图形学)")
          (Li "神经网络训练")
          (Li "回答数据库查询")
          (Li "表格 (spreadsheet) 计算")
          (Li "科学计算")
          (Li "离散硬件模拟")))
   (H3 "本书内容")
   (P "我们给出了诸多这样的应用的例子, 但是本书的重点在于"
      "各种各样的编程语言的部分求值的原理和方法: "
      "函数式的 (lambda演算和Scheme), 命令式的 (一个流程图语言和一个C的子集), "
      "以及逻辑式的 (Prolog). 我们以足够的细节解释了对于构造部分求值器而言"
      "必要的技术 (例如程序流分析), 这允许读者实现这些部分求值器. "
      "许多这些技术也可应用于其他的高级编程任务之中.")
   (P "本书的结构如下. 第一章给出了部分求值的概览以及一些应用. "
      "然后, 第一部分介绍了基本的编程语言概念, 定义了三种迷你语言, "
      "并呈现了它们的解释器. 第二部分描述了可自应用的部分求值的原理, "
      "使用了两种迷你语言刻画: 流程图和一阶递归方程. "
      "第三部分展现了如何将这些原理应用于更强的语言: "
      "lambda演算, 以及编程语言Prolog, Scheme, C的更大的子集. "
      "第四部分讨论了部分求值的实际方面, 并呈现了广泛的应用. "
      "第五部分呈现了更加理论化的观念, 以及诸多高级技术, "
      "并提供了其他研究的诸多参考.")
   (P "即便是研究生新生也应该能够理解本书, "
      "因此本书应该对于部分求值领域的新人和研究者都有用处.")
   (P "本书看待部分求值的视角和材料的选取反映了我们的研究小组构建数个部分求值器的经验. "
      "这些(部分求值器)包含了函数式语言, 命令式语言, lambda演算, "
      "Prolog的子集, C的子集的首个非平凡的可自应用的部分求值器. "
      "这些工作是在Copenhagen大学展开的.")
   (H3 "致谢")
   
   (H2. "引论")
   (H3. "部分求值=程序特化")
   (P (Em "部分求值的本质是什么?"))
   
   (H3. "为什么做部分求值?")
   (H3. "单阶段或多阶段的计算")
   (H3. "部分求值和编译")
   (H3. "自动程序生成")
   (H3. "critical assessment")
   (H3. "全书概览")
   (H2. "函数, 类型, 和表达式")
   (H2. "编程语言和解释器")
   (H2. "一个流程图语言的部分求值")
   ))
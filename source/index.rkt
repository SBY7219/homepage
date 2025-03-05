#lang racket
(provide index.html)
(require SMathML racket/date "colorfulize.rkt")

(define index.html
  (Prelude
   #:title "施秉佚"
   #:css "styles.css"
   (H1 "施秉佚 " (A "RSS" #:attr* '((href "rss.xml"))) " "
       (A "网站介绍" #:attr* '((href "intro.html"))))

    (H2 (A "个人简历" #:attr* '((href "notes/pl.pdf"))))
    (H2 (A "论文和文章" #:attr* '((href "papers.html"))))
    

    (H2 (A "编程语言" #:attr* '((href "notes/pl.pdf"))) ": "
        (A "代码集" #:attr* '((href "notes/pl.zip"))))
    (H2 (A "Hoffman &amp; Kunze" #:attr* '((href "hoffman.html"))))

    (H2 (A "关于程序设计的思考" #:attr* '((href "programming.html"))))
    (H2 (A "指称语义学讲义翻译" #:attr* '((href "denotational_semantics_notes.html"))))

    (H2 (A "概率统计笔记" #:attr* '((href "probstat.html"))))
    (H2 (A "The Little Typer翻译" #:attr* '((href "little_typer.html"))))

    (H2 (A "SMathML" #:attr* '((href "smathml_everything.html"))))
    (H2 (A "数分高代笔记" #:attr* '((href "shufengaodai.html"))))

    (H2 (A "未归档笔记" #:attr* '((href "useless.html"))))
    (H2 (A "书籍推荐" #:attr* '((href "books.html"))))

    (H2 (A "友链和有用的链接" #:attr* '((href "ilinks.html"))))
    (H2 (A "QUOTES胡言" #:attr* '((href "huyan.html"))))
   ))

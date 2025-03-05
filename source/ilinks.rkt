#lang racket
(provide merge-links.html)
(require SMathML)

(define friends-section-color "#E6F2FF")  ; 淡蓝色
(define interesting-section-color "#FFF2E6")  ; 淡橙色

(define merge-links.html
  (TnTmPrelude
   #:title "友情链接 & 有趣的链接"
   #:css "styles.css"
   
   ;; 页面标题
   (H1 "链接集合")
   
   ;; 友情链接部分
   (DIV
    #:attr* `((style . ,(format "background-color: ~a; padding: 15px; border-radius: 8px; margin-bottom: 20px;" 
                                friends-section-color)))
    (H1 #:attr* '((style . "color: #0066CC;")) "友情链接")
    
    (columnize
     (H2 (A "熊的博客" 
            #:attr* '((href "https://www.xzqbear.com/"))))
     (H2 (A "张Henry的博客" 
            #:attr* '((href "https://zhanghenry.site/"))))
     ))
   
   ;; 有趣的链接部分
   (DIV
    #:attr* `((style . ,(format "background-color: ~a; padding: 15px; border-radius: 8px;" 
                                interesting-section-color)))
    (H1 #:attr* '((style . "color: #CC6600;")) "有趣的链接")
    
    (columnize
     (H2 (A "Oleg Kiselyov的博客" 
            #:attr* '((href "https://www.okmij.org/ftp/"))))
     (H2 (A "Robert Harper的博客" 
            #:attr* '((href "https://existentialtype.wordpress.com/"))))
     (H2 (A "Robert Harper的个人主页" 
            #:attr* '((href "https://www.cs.cmu.edu/~rwh/"))))
     (H2 (A "Matthew Might的博客" 
            #:attr* '((href "https://matt.might.net/articles/"))))
     (H2 (A "Matthias Felleisen的个人主页"
            #:attr* '((href "https://felleisen.org/matthias/"))))
     (H2 (A "Matthew Flatt的个人主页"
            #:attr* '((href "https://users.cs.utah.edu/~mflatt/"))))
     (H2 (A "Kent Dybvig的个人主页"
            #:attr* '((href "https://legacy.cs.indiana.edu/~dyb/"))))
     (H2 (A "单中杰 (Chung-chieh Shan) 的个人主页"
            #:attr* '((href "https://homes.luddy.indiana.edu/ccshan/"))))
     (H2 (A "Daniel P. Friedman的个人主页"
            #:attr* '((href "https://legacy.cs.indiana.edu/~dfried/"))))
     (H2 (A "Jean-Yves Girard的个人主页"
            #:attr* '((href "https://girard.perso.math.cnrs.fr/Accueil.html"))))
     (H2 (A "李文威的个人主页"
            #:attr* '((href "https://wwli.asia/index.php/zh/cv-item-zh"))))
     (H2 (A "Jon Sterling的个人主页"
            #:attr* '((href "https://www.jonmsterling.com/"))))
     (H2 (A "Trebor Huang的个人主页" 
            #:attr* '((href "https://trebor-huang.github.io/"))))
     (H2 (A "Pavel Panchekha的个人主页"
            #:attr* '((href "https://pavpanchekha.com/"))))
     (H2 (A "Stephen Chang的个人主页"
            #:attr* '((href "https://stchang.github.io/"))))
     (H2 (A "π-Base" 
            #:attr* '((href "https://topology.pi-base.org/"))))
     (H2 (A "PLS Lab" 
            #:attr* '((href "https://www.pls-lab.org/"))))
     ))
   ))

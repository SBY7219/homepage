
#lang racket
(provide ilinks.html)
(require SMathML)

(define ilinks.html
  (TnTmPrelude
   #:title "友链和有用的链接"
   #:css "styles.css"
   
   (H1 "友链和有用的链接")
   
   (P "包含友链和学术研究相关的有用链接。")
   

   (TABLE #:attr* '((width "100%"))
    (TR
     (TD #:attr* '((colspan "2") (style "background-color: #C0D9E5; text-align: center;"))
         (H2 "友情链接"))))
   

   (TABLE #:attr* '((width "100%"))
    (TR
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "熊的博客" #:attr* '((href "https://www.xzqbear.com/")))))
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "张henry的博客" #:attr* '((href "https://zhanghenry.site/")))))))
   

   (TABLE #:attr* '((width "100%"))
    (TR
     (TD #:attr* '((colspan "2") (style "background-color: #E5D0C0; text-align: center;"))
         (H2 "有用的链接"))))
   

   (TABLE #:attr* '((width "100%"))
    (TR
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Oleg Kiselyov的博客" #:attr* '((href "https://www.okmij.org/ftp/")))))
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Robert Harper的博客" #:attr* '((href "https://existentialtype.wordpress.com/"))))))
    
    (TR
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Robert Harper的个人主页" #:attr* '((href "https://www.cs.cmu.edu/~rwh/")))))
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Matthew Might的博客" #:attr* '((href "https://matt.might.net/articles/"))))))
    
    (TR
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Matthias Felleisen的个人主页" #:attr* '((href "https://felleisen.org/matthias/")))))
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Matthew Flatt的个人主页" #:attr* '((href "https://users.cs.utah.edu/~mflatt/"))))))
    
    (TR
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Kent Dybvig的个人主页" #:attr* '((href "https://legacy.cs.indiana.edu/~dyb/")))))
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "单中杰 (Chung-chieh Shan) 的个人主页" #:attr* '((href "https://homes.luddy.indiana.edu/ccshan/"))))))
    
    (TR
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Daniel P. Friedman的个人主页" #:attr* '((href "https://legacy.cs.indiana.edu/~dfried/")))))
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Jean-Yves Girard的个人主页" #:attr* '((href "https://girard.perso.math.cnrs.fr/Accueil.html"))))))
    
    (TR
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "李文威的个人主页" #:attr* '((href "https://wwli.asia/index.php/zh/cv-item-zh")))))
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Jon Sterling的个人主页" #:attr* '((href "https://www.jonmsterling.com/"))))))
    
    (TR
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Trebor Huang的个人主页" #:attr* '((href "https://trebor-huang.github.io/")))))
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Pavel Panchekha的个人主页" #:attr* '((href "https://pavpanchekha.com/"))))))
    
    (TR
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "Stephen Chang的个人主页" #:attr* '((href "https://stchang.github.io/")))))
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "π-Base" #:attr* '((href "https://topology.pi-base.org/"))))))
    
    (TR
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 (A "PLS Lab" #:attr* '((href "https://www.pls-lab.org/")))))
     (TD #:attr* '((style "background-color: #D3D3D3"))
         (H2 "")))))))

#lang racket
(provide links.html)
(require SMathML)
(define links.html
  (TnTmPrelude
   #:title "友情链接"
   #:css "styles.css"
   (H1 "友情链接")
   (columnize
    (H2 (A "https://www.xzqbear.com/"
           #:attr* '((href "https://www.xzqbear.com/"))))
    (H2 (A "https://zhanghenry.site/"
           #:attr* '((href "https://zhanghenry.site/"))))
    )
   ))
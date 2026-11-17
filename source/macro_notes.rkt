#lang racket
(provide macro_notes.html)
(require SMathML)
(define macro_notes.html
  (TmPrelude
   #:title "宏与 DSL"
   #:css "styles.css"
   (H1 "宏与 DSL")
   (H2 (A "从宏到DSL: Racket的演化" #:attr* '((href "macro_dsl.html"))))
   (H2 (A "句法闭包" #:attr* '((href "synclo.html"))))))

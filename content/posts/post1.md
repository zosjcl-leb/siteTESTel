---
title: Ma premiere page SiteHugoTest
weight: 1
---

## Hugo Observation: 
- Hugo définit un ordre de recherche pour selectionner les fichiers .html contenus dans le répertoire layout.  
 Le baseof.html est le modele de base. Chaque page utilisera le modèle de base.  
 Le modèle de base  remplace ses block actions par le contenu des define actions correspondant, en choisissant un fichier .html suivant un ordre etabli.  
 Si home.html existe, hugo choisira ce fichier lors du traitement de la page home(_index.md du répertoire content) sinon il choisira list.html s il existe. 

  <!--more-->
 - Ensuite , il choisira section.html pour les branches(fichiers _index.md) s il existe sinon list.html. 
 - Ensuite , il chosira page.html pour les feuilles(fichiers index.md) s il existe sinon single.html. 

 - En résumé :     
 Un fichier de liste(list.html) est utilisé comme solution de repli pour les fichier de type(kind) d'accueil , de section , de taxonomie et de terme .  
 Si l'un de ces types de fichier est introuvable, Hugo recherchera un modèle de 
liste.  
Un fichier single(single.html) sert de solution de repli en cas d'absence de fichier de page. Hugo recherchera alors un fichier single(single.html) .

 - Se référer à la documentation hugo/templates/types sur le web. 
     # Le Contexte . (dot): 
     - Dans un fichiert html , le point ( .) représente le contexte actuel(objet page). 
     Le contexte actuel peut changer au sein d'un fichier.html.  
     Par exemple, dans le fichier html en entrée, le contexte peut être un objet Page.  
     Mais nous changeons  sa valeur à l'intérieur des blocs  range ou ` with. 
       - Exemple: 
        
          ```go
          <h2>{{ .Title }}</h2>

          {{ range slice "foo" "bar" }}
            <p>{{ . }}</p>
          {{ end }}

          {{ with "baz" }}
           <p>{{ . }}</p>
          {{ end }}
          ```
          le contenu du contexte sera : 
           ```go
           <h2>My Page Title</h2>
           <p>foo</p>
           <p>bar</p>
           <p>baz</p>
           ```
       - Dans un bloc range  ou with , vous pouvez accéder au contexte transmis au fichier.html en 
         ajoutant un signe dollar ( $) avant le point :
         ```go
         {{ with "foo" }}
          <p>{{ $.Title }} - {{ . }}</p>
         {{ end }}
         ```
          Hugo traduit ceci en :
         ```go
          <p>My Page Title - foo</p>  
         ``` 
       - Debug:  
         Il est possible de voir le contenu d' un contexte avec l' nstruction suivante: 
          ```html
          <pre>Debug Etienne contexte . {{ . | jsonify (dict "indent" "  ") }} </pre>
          ```
      # Les Fichiers .md (_index.md, index.md, post1.md ...):
        
      - Ils contiennent 2 parties:  le FRONT MATTER et le Contenu proprement dit. 
          - le FRONT MATTER:  
            - Le Front Matter est alimenté par des metadonnées ,genre date, draft, title, and weight...,mais d'autres existent  (cf HUGO DOCS Content Management Front Matter) et par des parametres personnels:  
            Le front matter peut accepter 3 syntaxes :yaml, toml, json 
            - Exemple : fichier post1.md en yaml
            ```yaml
            +++
             date = 2024-02-02T04:14:54-08:00
             draft = false
             title = 'Example'
             weight = 10
            [params]
              author = 'John Smith'
            +++
            ```
            - Exemple : fichier post1.md en toml
            ```toml
            +++
             date = 2024-02-02T04:14:54-08:00
             draft = false
             title = 'Example'
             weight = 10
             [params]
              author = 'John Smith'
            +++
            ```
          - le Contenu :  
            - Le contenu est toujous précédé par le front Matter et écrit en langage MarkDown. 
            - Exemple : fichier example.md
            
            ```shell
            ---
            title: 'Example'
            ---
            This is an example of **strong text** in a sentence. This is another sentence.

            This is another paragraph.
            ```








```
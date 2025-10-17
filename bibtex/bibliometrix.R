library(bibliometrix)
data <- convert2df("references_final.bib", dbsource = "bibtex", format = "bibtex")
results <- biblioAnalysis(data)
summary(results)
c = float(input('Digite o valor a ser emprestado: '))
i = float(input('Digite qual será a taxa de juros: '))
t = int(input('Digite a quantidade de meses: '))
l = []
g = []


while len(l) <= t:
    M = c*(1+(i/100))
    g1 = g.append(M - c)
    l.append(round(M, 2))
    c = M
    if len(l) == t:
      break
    contador = 1
    for item in l: 
      print('Parcela do', contador,'º mês:', item/t)
      contador = contador + 1
print('Juros totais: R$', round(sum(g), 2))
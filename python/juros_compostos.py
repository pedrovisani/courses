c = float(input('Digite o valor será investido: '))
i = float(input('Digite qual será a taxa de juros: '))
t = int(input('Digite a quantidade de meses: '))
a = input('Terá aporte mensal (s/n)? ')
l = []
g = []

if a == 's':
  p = float(input('Quanto irá aportar mensalmente? '))
  while len(l) <= t:
      M = c*(1+(i/100))
      g1 = g.append(M - c)
      l.append(round(M, 2))
      c = M + p
      if len(l) == t:
        break
  contador = 1
  for item in l:
      print('Resultado do', contador,'º mês:', item)
      contador = contador + 1
  print('Ganho total: R$', round(sum(g), 2))
    
if a == 'n':
    while len(l) <= t:
      M = c*(1+(i/100))
      g1 = g.append(M - c)
      l.append(round(M, 2))
      c = M
      if len(l) == t:
        break
    contador = 1
    for item in l: 
      print('Resultado do', contador,'º mês:', item)
      contador = contador + 1
    print('Ganho total: R$', round(sum(g), 2))




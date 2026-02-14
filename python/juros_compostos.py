c = float(input('Digite o valor será investido: '))
i = float(input('Digite qual será a taxa de juros (%): '))
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
  counter = 1
  for i in l:
      print(f'Resultado do {counter}º mês: R$ {i:,.2f}'.replace(',', 'X').replace('.', ',').replace('X', '.'))
      counter = counter + 1
  print(f'Receita total gerada com jc: R$ {sum(g):,.2f}'.replace(',', 'X').replace('.', ',').replace('X', '.'))
    
if a == 'n':
    while len(l) <= t:
      M = c*(1+(i/100))
      g1 = g.append(M - c)
      l.append(round(M, 2))
      c = M
      if len(l) == t:
        break
    counter = 1
    for i in l: 
      print(f'Resultado do {counter}º mês: R$ {i:,.2f}'.replace(',', 'X').replace('.', ',').replace('X', '.'))
      counter = counter + 1
    print(f'Receita total gerada com jc: R$ {sum(g):,.2f}'.replace(',', 'X').replace('.', ',').replace('X', '.'))

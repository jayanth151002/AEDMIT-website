import numpy as np
import matplotlib.pyplot as plt
# A = 2.5*10**-4
# L = 1
# m = np.array([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5])
# dl = np.array([0.03, 0.05, 0.08, 0.11, 0.13, 0.16, 0.19, 0.22, 0.24, 0.27])*10**-2
# g = 9.81
# Y = m*g/(A*dl)
# print(np.sum(Y)/len(Y))
A = 0.00003
l = 0.1
dl = np.array([0.01, 0.02, 0.04, 0.05, 0.07, 0.08, 0.09, 0.1])*0.01
P = np.array([21915, 43791, 87583, 109511, 153298, 175202, 197109, 219014])
stress = P/A
strain = dl/l
Y = stress/strain
plt.xlabel("Strain")
plt.ylabel("Stress")
plt.grid(True)
plt.plot(strain, stress, color="yellowgreen", label="Stress v/s strain curve")
plt.legend()
plt.show()

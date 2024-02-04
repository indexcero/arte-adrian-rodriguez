import random 
import time
import simpleaudio as sa

class _Getch:
    """Gets a single character from standard input.  Does not echo to the
screen."""
    def __init__(self):
        try:
            self.impl = _GetchWindows()
        except ImportError:
            self.impl = _GetchUnix()

    def __call__(self): return self.impl()


class _GetchUnix:
    def __init__(self):
        import tty, sys

    def __call__(self):
        import sys, tty, termios
        fd = sys.stdin.fileno()
        old_settings = termios.tcgetattr(fd)
        try:
            tty.setraw(sys.stdin.fileno())
            ch = sys.stdin.read(1)
        finally:
            termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
        return ch


class _GetchWindows:
    def __init__(self):
        import msvcrt

    def __call__(self):
        import msvcrt
        return msvcrt.getch()
getch = _Getch()


ceramica = ['Caminar 	Surcar ', '''En  los pisos de nuestros edificios
				hay siete millones trescientos mil puntas,
				apuntan todas ellas,
					hacia ningún lado. ''', '''Janiw akax jaqitapakiti, 
amayatapaw.''']
crux = ['Ángel obligado, ', '		quiero ser carne en tu inmaterialidad.'
,'Bailar los rezos y callar en las confirmaciones. ']
mundo_invertido = ('''#Lasúltimasreaccionesalmomentodelúltimomilisegundoenlaporcionde
tiempominimaparaqueelpublicoquenosescuchaseenteredelúltimo
acontecimientoquecambiarátansólounaporciónminimadeluniverso
 ''')


while True: 
	comando = getch()
	if comando == 'a':
		print(random.choice(ceramica))
	elif comando == 's':
		print(random.choice(crux))
	elif comando== 'd':
		print(mundo_invertido)

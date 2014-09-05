import math

def make_exponentiater(expon):
  return lambda(x): math.pow(x,expon)
	
cube = make_exponentiater(3)
 

def index(req, base):
  basevalue = int(base)
  return cube(basevalue);
import math

def make_exponentiater(expon):
  return lambda(x): math.pow(x,expon)
	
square = make_exponentiater(2)
 

def index(req, base):
  basevalue = int(base)
  return square(basevalue);
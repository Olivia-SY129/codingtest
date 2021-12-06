class Node:
  def __init__(self, data, left, right):
    self.data = data
    self.left = left
    self.right = right

class BST:
  def __init__(self, comp=None):
    if comp is None:
      self.comp = lambda a,b: a-b
    else:
      self.comp = comp
    self.root = None

  def add(self, data):
    if self.root is None:
      self.root = Node(data, None, None)
      return
    self.current = self.root
    while True:
      if self.current.data > data:
        if self.current.left != None:
          self.current = self.current.left
        else:
          self.current.left = Node(data, None, None)
          break
      elif self.current.data < data:
        if self.current.right != None:
          self.current = self.current.right
        else:
          self.current.right = Node(data, None, None)
          break
    return

  def search(self, data):
    self.current = self.root
    while self.current:
      if self.current.data == data:
        return True
      elif self.current.data > data:
        self.current = self.current.left
      else:
        self.current = self.current.right
    return False

bst = BST(comp=lambda a,b: hash(a) - hash(b))

for c in 'qwyhwef':
  bst.add(c)

for c in 'qwyhwefjdhfdve':
  print(1 if bst.search(c) else 0, end='')


# 출력
# 11111110011001
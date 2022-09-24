
#https://docs.google.com/document/d/1QXRQHatZvxoZL5zuzkg3Sucv27hBmzdeuXii96b0TSA/edit?fbclid=IwAR3ZSKBccZeXMHeNg9E832kp3Ruq4-oF0TfMPIKf3obSb_zs8WNJQ9jRIdA#

#Task1 :
def solution(arr = []):
    s = sum(arr[1:])
    leftSum = 0
    if s == 0:
        return 0
    for p in range(1,n-1):
        leftSum+=arr[p-1]
        s-=arr[p]
        if leftSum == s:
            return p
    return -1

def PermCheck(arr =[]):
    n = len(arr)
    check = [False]*(n)
    for e in arr:
        if e <=n:
            if check[e-1]:
                return False
            check[e-1] = True
        else:
            return False
    return all(check)

#Task 3:

def solution(connections = []):
    g = [[] for _ in range(len(connections))]
    capital = -1
    for connection in connections:
        if connection[0] != connection[1]:
            g[connection[0]].append(connection[1])
            g[connection[1]].append(connection[0])
        else:
            capital = connection[0]
    visited =[False] * len(connection)
    q = [capital]
    visited[capital] = True
    distance = [0]*(len(connections)-1)
    level = 0
    while q:
        next = []
        for node in q:
            for neighbor in g[node]:
                if visited[neighbor] is False:
                    visited[neighbor] = True
                    next.append(neighbor)

        distance[level] = len(next)
        level+=1
        q = next
    return distance
        

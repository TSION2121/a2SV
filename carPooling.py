class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        trips.sort(key = lambda x: x[1])
        curp = 0
        hp = [] # min heap (position to quit, people) in the car
        
        for p, s, e in trips:
            while hp and s >= hp[0][0]: # people quit 
                curp -= heapq.heappop(hp)[1]
            curp += p
            if curp > capacity: return False
            heapq.heappush(hp, (e, p))
            
        return True

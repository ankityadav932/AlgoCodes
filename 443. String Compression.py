class Solution:

    def setItem(self, arr: list[str], index, item) :

        if (index > len(arr)-1) : 
            arr.append(item)
        else :
            arr[index] = item


    def compress(self, chars: list[str]) -> int:

        char = chars[0]
        count = 0
        pt = 0
        i = 0
        arrLen = len(chars);

        while i < arrLen:

            print(i, pt, count, chars)

            if chars[i] == char : 

                count += 1
                i += 1

            else :

                self.setItem(chars, pt, char)
                char = chars[i]
                pt += 1
                self.setItem(chars, pt, count)
                pt += 1
                i = pt if i < pt else i+1          
                count = 1

        self.setItem(chars, pt, char)
        pt += 1
        self.setItem(chars, pt, count)        

        return pt    





# charArr = ["a","a","a","b","b","b","b","c","c","c","c"]    
# charArr = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
# charArr = ['a','b','c','d','e']
charArr = ['a','b','c']
# charArr = ['a','b','b','b','b']
sol = Solution();

print(sol.compress(charArr))
print(charArr)

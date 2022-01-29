capsData = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
smallData = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
string="ABCDXYZ"
#DEFGABC
def check(message, shift):
    resString=""
    for i in message:
        if i ==" ":
            resString+=" "
        elif i in capsData and i!=" ":
            index = capsData.index(i)
            c = index+shift
            if c > 25:
                c-=26
                resString+=capsData[c]
            else:
                resString+=capsData[c]
        elif i in smallData and i!=" ":
            index = smallData.index(i)
            c = index+shift
            if c > 25:
                c-=26
                resString+=smallData[c]
            else:
                resString+=smallData[c]
    print(resString)
print(check(string,3))


